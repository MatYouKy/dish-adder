import { useCallback, useState } from 'react';

const url = 'https://frosty-wood-6558.getsandbox.com:443/dishes';

export const usePostDish = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);

	const postRequest = useCallback(async (dish: any) => {
		setIsLoading(true);
		setIsError(null);
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(dish),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error('Request filed!');
			}
			const data = await response.json();
			// eslint-disable-next-line no-console
			console.log(data);
		} catch (error: any) {
			setIsError(error.message || 'Something went wrong!');
		}
		setIsLoading(false);
	}, []);

	return { postRequest, isLoading, isError };
};
