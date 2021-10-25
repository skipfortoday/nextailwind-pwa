import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Header } from '../components/header';
import { List } from '../components/list';

const index = () => {
	const [data, setData] = useState([]);
	const [time, setTime] = useState(moment().format('YYYY-MM-DD'));
	useEffect(() => {
		axios
			.get(`http://localhost:3000/api/day/${time}`)
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [time]);

	return (
		<>
			<Header setTime={setTime} />

			<List data={data} />
		</>
	);
};

export default index;
