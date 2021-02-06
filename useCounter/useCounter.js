import { useState } from "react";

export const useCounter = (initialState = 0, limit = { min: null, max: null }) => {
	const { min, max } = limit;
	const [ counter, setCounter ] = useState(initialState);

	const increment = (num) => {
		if (typeof num !== 'number') num = 1;
		max ?
			max >= (counter + num) ? setCounter(counter + num) : console.log('Excede maximo')
			: setCounter(counter + num);
	}
	const decrement = (num) => {
		if (typeof num !== 'number') num = 1;
		min ?
			min <= (counter - num) ? setCounter(counter - num) : console.log('Excede minimo')
			: setCounter(counter - num);
	}
	const reset = () => setCounter(initialState);

	return {
		counter,
		increment,
		decrement,
		reset
	};
}