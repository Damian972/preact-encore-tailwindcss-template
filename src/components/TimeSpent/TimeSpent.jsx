import { useEffect, useState } from 'preact/hooks';

const TimeSpent = () => {
	const [secondsSpent, setSecondsSpent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSecondsSpent((secondsSpent) => secondsSpent + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			You have spent
			<span class="bg-gray-600 p-1 mx-1 rounded-lg text-white font-semibold">{secondsSpent}</span>
			seconds on this page.
		</div>
	);
};

export default TimeSpent;
