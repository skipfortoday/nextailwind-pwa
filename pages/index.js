import React from 'react';
import Cta from '../components/footer/cta';
import { Listfooter } from '../components/footer/listfooter';
import Navbar from '../components/header/navbar';
import Promo from '../components/landing/promo';

const index = () => {
	return (
		<>
			<Navbar />
			<Promo />
			<Listfooter />
		</>
	);
};

export default index;
