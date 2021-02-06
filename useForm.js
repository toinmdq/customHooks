import { useState } from "react"

export const useForm = (initialState = {}) => {
	const [ values, setValues ] = useState(initialState)

	const handleInputChange = ({ target: { name, value } }) => {
		setValues({
			...values,
			[ name ]: value,
		});
	}
	const reset = (name) => {
		setValues(initialState);
	}
	return [ values, handleInputChange, reset ];
}
