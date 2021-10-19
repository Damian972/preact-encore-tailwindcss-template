import { useState } from 'preact/hooks';

const Counter = () => {
	const [count, setCount] = useState(0);

	const incrementButtonHandler = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div class="flex flex-col items-center justify-center">
			<p class="text-xl font-bold">Count: {count}</p>
			<button
				class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={incrementButtonHandler}
			>
				Increment
			</button>
		</div>
	);
};

export default Counter;
