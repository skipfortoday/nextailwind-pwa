import React from 'react';
import Lottie from 'react-lottie';
import * as vAnimate from '../lottie/v.json';
import * as xAnimate from '../lottie/x.json';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon, XCircleIcon } from '@heroicons/react/solid';

export const List = () => {
	const vOptions = {
		loop: true,
		autoplay: true,
		animationData: vAnimate,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	const xOptions = {
		loop: true,
		autoplay: true,
		animationData: xAnimate,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	return (
		<>
			<div>
				<div className="container flex flex-col mx-auto w-full items-center justify-center">
					<ul className="flex flex-col">
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button>
										<li className="border-gray-400 flex flex-row mb-2">
											<div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
												<div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
													1
												</div>
												<div className="flex-1 pl-1 md:mr-16">
													<div className="font-medium dark:text-white">
														SB2/2109/FT/0248
													</div>
													<div className="text-gray-600 dark:text-gray-200 text-sm">
														SB02/TF211018/000001
													</div>
												</div>
												<div className="text-gray-600 dark:text-gray-200 text-xs">
													23 Oktober 2021 12:00:00
												</div>
												<div className="text-gray-600 dark:text-gray-200 text-xs ml-2">
													<Lottie
														options={vOptions}
														height={50}
														width={50}
														isStopped={false}
														isPaused={false}
													/>
												</div>
												<button className=" text-right flex justify-end">
													<ChevronUpIcon
														className={`${
															open
																? 'transform rotate-180'
																: ''
														} w-5 h-5 text-gray-500`}
													/>
												</button>
											</div>
										</li>
									</Disclosure.Button>
									<Transition
										show={open}
										enter="transition-opacity duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="transition-opacity duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<Disclosure.Panel className="px-4">
											<div className="shadow-xl rounded-2xl bg-white dark:bg-gray-700 w-full mb-4 ">
												<p className="font-bold text-md p-4 text-black dark:text-white">
													Trigger Tasks
													<span className="text-sm text-gray-50 dark:text-white ml-2">
														(05)
													</span>
												</p>
												<ul>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																01
															</span>
															<span>
																Create / Update
																tTreatmentBarcode
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																02
															</span>
															<span>
																Create
																tEvoucherperincian
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																03
															</span>
															<span>
																Create
																tTreatmentHDR
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																04
															</span>
															<span>
																Create
																tTreatmentDetail
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																05
															</span>
															<span>
																Update Saldo
																tReleaseEvoucherDtl
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
												</ul>
											</div>
										</Disclosure.Panel>
									</Transition>
								</>
							)}
						</Disclosure>
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button>
										<li className="border-gray-400 flex flex-row mb-2">
											<div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
												<div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
													2
												</div>
												<div className="flex-1 pl-1 md:mr-16">
													<div className="font-medium dark:text-white">
														SB2/2109/FT/0249
													</div>
													<div className="text-gray-600 dark:text-gray-200 text-sm">
														SB02/TF211018/000002
													</div>
												</div>
												<div className="text-gray-600 dark:text-gray-200 text-xs">
													23 Oktober 2021 12:00:01
												</div>
												<div className="text-gray-600 dark:text-gray-200 text-xs ml-2">
													<Lottie
														options={xOptions}
														height={50}
														width={50}
														isStopped={false}
														isPaused={false}
													/>
												</div>
												<button className=" text-right flex justify-end">
													<ChevronUpIcon
														className={`${
															open
																? 'transform rotate-180'
																: ''
														} w-5 h-5 text-gray-500`}
													/>
												</button>
											</div>
										</li>
									</Disclosure.Button>
									<Transition
										show={open}
										enter="transition-opacity duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="transition-opacity duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<Disclosure.Panel className="px-4">
											<div className="shadow-xl rounded-2xl bg-white dark:bg-gray-700 w-full mb-4 ">
												<p className="font-bold text-md p-4 text-black dark:text-white">
													Trigger Tasks
													<span className="text-sm text-gray-50 dark:text-white ml-2">
														(05)
													</span>
												</p>
												<ul>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																01
															</span>
															<span>
																Create / Update
																tTreatmentBarcode
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																02
															</span>
															<span>
																Create
																tEvoucherperincian
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																03
															</span>
															<span>
																Create
																tTreatmentHDR
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																04
															</span>
															<span>
																Create
																tTreatmentDetail
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
													<li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
														<div className="flex items-center justify-start text-sm">
															<span className="mx-4">
																05
															</span>
															<span>
																Update Saldo
																tReleaseEvoucherDtl
															</span>
														</div>
														<svg
															width="20"
															height="20"
															fill="currentColor"
															viewBox="0 0 1024 1024"
															className="text-green-500 mx-4"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
																fill="currentColor"
															></path>
														</svg>
													</li>
												</ul>
											</div>
										</Disclosure.Panel>
									</Transition>
								</>
							)}
						</Disclosure>
					</ul>
				</div>
			</div>
		</>
	);
};
