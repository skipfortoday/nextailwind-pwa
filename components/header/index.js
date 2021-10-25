import React from 'react';

export const Header = (props) => {
	const handleChange = (e) => {
		props.setTime(e.target.value);
	};

	return (
		<div>
			<div className="flex items-center justify-center px-5 py-5">
				<div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-xl px-5 pt-5 pb-5 text-gray-800 dark:text-gray-50">
					<div className="w-full">
						<div className="text-3xl text-pink-500 text-left leading-tight h-3">
							“
						</div>
						<p className="text-3xl font-bold text-gray-600 dark:text-gray-100 text-center px-5">
							Unit-Test Tcard
						</p>
						<div className="text-3xl text-pink-500 text-right leading-tight h-3 ">
							”
						</div>
						<div className="container content-center items-center flex justify-center">
							<label className="text-gray-700 items-center">
								<input
									type="date"
									className="appearance-none border  border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent flex-1"
									onChange={handleChange}
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
