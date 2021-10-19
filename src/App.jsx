import Counter from './components/Counter/Counter';
import TimeSpent from './components/TimeSpent/TimeSpent';

import './App.scss';

const App = () => {
	return (
		<div class="flex flex-col items-center justify-center h-screen">
			<h1 class="text-4xl font-bold mb-4">Hello World</h1>
			<Counter />
			<br />
			<br />
			<TimeSpent />
		</div>
	);
};

export default App;
