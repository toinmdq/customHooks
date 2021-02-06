import { useEffect, useRef, useState } from "react";

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
				if (data.length === 0) data.push({ quote: 'No se encuentra el id' });
				setTimeout(() => {

					if (isMounted.current) {
						setState({
							loading: false,
							error: null,
							data: data
						});
					} else {
						console.log('setState no se llamo');
					}

				}, 200)
			})
			.catch(error => setState({
				loading: false,
				error,
				data: null
			}));
	}, [ url ]);

	return state;
}


// useEffect(() => {

// 	const fetchDatos = async () => {
// 		const data = await fetch(url);
// 		return await data.json();
// 	}
// 	fetchDatos()
// 		.then(data => setState({
// 			...state,
// 			data: data,
// 			loading: false
// 		}))
// 		.catch(e => setState({
// 			...state,
// 			error: e
// 		}));

// }, [ state, url ])