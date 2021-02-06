import { useState } from "react"

export const useForm = (initialForm = {}) => {
	const [ values, setValues ] = useState(initialForm);

	const handleInputChange = ({ target: { name, value } }) => {
		setValues({
			...values,
			[ name ]: value,
		});
	}
	const reset = (name) => {
		setValues(initialForm);
	}
	return [ values, handleInputChange, reset ];
}
