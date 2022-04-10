import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import classes from './LoadingSpinner.module.scss';

const LoadingSpinner = () => (
	<div className={classes.spinner}>
		<TailSpin height='35' width='35' color='#44eb4a' ariaLabel='loading' />
	</div>
);

export default LoadingSpinner;
