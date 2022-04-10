import classes from './App.module.scss';
import AddDish from './pages/AddDish';

function App() {
	return (
		<div className={classes.app}>
			<div className={classes.overflow} />
			<AddDish />
		</div>
	);
}

export default App;
