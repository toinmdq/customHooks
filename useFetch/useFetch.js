import { useEffect, useRef, useState } from "react";
// TODO: verificar bien antes de usar
export const useFetch = (url) => {
	const [ state, setState ] = useState({ loading: true, error: null, data: null });
	const isMounted = useRef(true);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		}
	}, [])

	useEffect(() => {
		setState({ data: null, loading: true, error: null });
		fetch(url)
			.then(data => data.json())
			.then(data => {
				// TODO: setTimeout ??? para que? 
				setTimeout(() => {
					if (isMounted.current) {
						setState({
							data: data,
							error: null,
							loading: false
						});
					} else {
						console.log('setState no se llamo');
					}

				}, 200)
			})
			.catch(error => setState({
				data: null,
				error,
				loading: false
			}));
	}, [ url ]);
	return state;
}
