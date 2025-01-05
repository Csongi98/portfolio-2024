<template>
	<div class="fade-in" v-fade-in-on-scroll>
		<hr
			class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
		/>
		<h2 class="text-3xl font-bold mb-4">Design</h2>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 z-10">
			<div class="grid gap-4">
				<div>
					<img
						class="h-full max-w-full rounded-lg z-10"
						src="/assets/images/infpos.jpg"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/magazin.jpg"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/model2.jpg"
						alt=""
					/>
				</div>
			</div>
			<div class="grid gap-4">
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/nvjegy.jpg"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/poster1.jpg"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/plax.jpg"
						alt=""
					/>
				</div>
			</div>
			<div class="grid gap-4">
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/rajz3.jpg"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/kez1.jpg"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/model.png"
						alt=""
					/>
				</div>
			</div>
			<div class="grid gap-4">
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/products.jpg"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/StoreSign.jpg"
						alt=""
					/>
				</div>
				<div>
					<img
						class="h-full max-w-full rounded-lg"
						src="/assets/images/tattooplak.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
		<div class="relative">
			<img
				class="absolute top-0 right-0 w-64 -z-10"
				src="/assets/images/9.png"
				alt="Profile Image"
			/>
		</div>
		<hr
			class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
		/>

		<h2 class="text-3xl font-bold mb-4 z-10">Photography</h2>
	</div>

	<div
		id="gallery"
		class="mt-5 relative content-center fade-in"
		v-fade-in-on-scroll
		style="justify-self: center"
		data-carousel="slide"
	>
		<!-- Carousel wrapper -->

		<div class="relative overflow-hidden rounded-lg" style="height: 35em">
			<!-- Item 1 -->
			<div class="hidden duration-700 ease-in-out" data-carousel-item>
				<img
					src="/assets/images/pg1.jpg"
					class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt=""
				/>
			</div>
			<!-- Item 2 -->
			<div class="hidden duration-700 ease-in-out" data-carousel-item="active">
				<img
					src="/assets/images/pg10.jpg"
					class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt=""
				/>
			</div>
			<!-- Item 3 -->
			<div class="hidden duration-700 ease-in-out" data-carousel-item>
				<img
					src="/assets/images/pg3.jpg"
					class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt=""
				/>
			</div>
			<!-- Item 4 -->
			<div class="hidden duration-700 ease-in-out" data-carousel-item>
				<img
					src="/assets/images/pg6.jpg"
					class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt=""
				/>
			</div>
			<!-- Item 5 -->
			<div class="hidden duration-700 ease-in-out" data-carousel-item>
				<img
					src="/assets/images/pg7.jpg"
					class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt=""
				/>
			</div>
		</div>
		<!-- Slider controls -->
		<button
			type="button"
			class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
			data-carousel-prev
		>
			<span
				class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				<svg
					class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 1 1 5l4 4"
					/>
				</svg>
				<span class="sr-only">Previous</span>
			</span>
		</button>
		<button
			type="button"
			class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
			data-carousel-next
		>
			<span
				class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				<svg
					class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 9 4-4-4-4"
					/>
				</svg>
				<span class="sr-only">Next</span>
			</span>
		</button>
	</div>

	<hr
		class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
	/>

	<h2 class="text-3xl font-bold mb-4 z-10 fade-in" v-fade-in-on-scroll>
		Projects
		<div class="relative">
			<img
				class="absolute top-96 left-0 w-1/2 -z-10"
				src="/assets/images/18.png"
				alt="Profile Image"
			/>
		</div>
	</h2>

	<div class="mt-5 z-10">
		<a
			data-modal-target="default-modal-1"
			data-modal-toggle="default-modal-1"
			v-fade-in-on-scroll
			class="fade-in flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<img
				class="object-cover w-full rounded-t-lg h-ful md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
				src="/assets/images/secretapi.jpg"
				alt=""
			/>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5
					class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					Secret Server API
				</h5>
				<p class="mb-3 text-xl font-normal text-gray-500 dark:text-gray-400">
					Secret Server API is a comprehensive and secure solution for storing,
					sharing, and managing sensitive information. With robust features and
					flexibility, it provides an efficient way to handle secrets with
					precise control and security.
				</p>
			</div>
		</a>

		<a
			data-modal-target="default-modal-2"
			data-modal-toggle="default-modal-2"
			v-fade-in-on-scroll
			class="fade-in mt-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5
					class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					Time Tracker App
				</h5>
				<p class="mb-3 text-xl font-normal text-gray-500 dark:text-gray-400">
					The Time Tracking App is a simple, user-friendly web application for
					managing time entries. Users can add, edit, and delete time entries
					while viewing statistics about their daily, weekly, and monthly logged
					hours. The application also includes a responsive design to ensure
					usability on both desktop and mobile devices.
				</p>
			</div>
			<img
				class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-e-lg"
				src="/assets/images/timetracker.jpg"
				alt=""
			/>
		</a>
	</div>

	<!-- Main modal 1 -->
	<div
		id="default-modal-1"
		tabindex="-1"
		aria-hidden="true"
		class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
	>
		<div class="relative p-4 w-full max-w-2xl max-h-full">
			<!-- Modal content -->
			<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<!-- Modal header -->
				<div
					class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
				>
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
						Key Features
					</h3>
					<button
						type="button"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-hide="default-modal-1"
					>
						<svg
							class="w-3 h-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
							/>
						</svg>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<!-- Modal body -->
				<div class="p-4 md:p-5 space-y-4">
					<ul
						role="list"
						class="space-y-4 text-gray-500 dark:text-gray-400 text-left"
					>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Time-Limited Access</b>: Each secret can have an optional
								time-to-live (TTL), after which it automatically expires.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Read Limit Control</b>: Limit how many times a secret can be
								accessed before it becomes unavailable.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Flexible Response Formats</b>: Supports responses in JSON,
								XML, and YAML to fit diverse needs.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>End-to-End Encryption</b>: All secrets are securely
								encrypted, ensuring your sensitive information is protected at
								all times.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Search and Filter Secrets</b>: Easily search for secrets by
								creation date, expiration date, or remaining views.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Export Secrets</b>: Export all stored secrets in your
								preferred format (CSV, JSON, or YAML).</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Audit Logs</b>: Track who accessed or created secrets and
								when, ensuring complete accountability.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Predefined Tags</b>: Classify secrets with tags like
								"personal" or "work" for better organization.</span
							>
						</li>
					</ul>
					<a href="https://github.com/Csongi98/secret-server-api.git">
						<button
							type="button"
							class="mt-5 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
						>
							<svg
								class="w-4 h-4 me-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
									clip-rule="evenodd"
								/>
							</svg>
							Github
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div
		id="default-modal-2"
		tabindex="-1"
		aria-hidden="true"
		class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
	>
		<div class="relative p-4 w-full max-w-2xl max-h-full">
			<!-- Modal content -->
			<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<!-- Modal header -->
				<div
					class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
				>
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
						Key Features
					</h3>
					<button
						type="button"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-hide="default-modal-2"
					>
						<svg
							class="w-3 h-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
							/>
						</svg>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<!-- Modal body -->
				<div class="p-4 md:p-5 space-y-4">
					<ul
						role="list"
						class="space-y-4 text-gray-500 dark:text-gray-400 text-left"
					>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>User Authentication</b>: Log in with a username (no password
								required).</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Time Entry Management</b>: Add, edit, and delete entries
								with confirmation modals.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Statistics Dashboard</b>: View daily, weekly, and monthly
								logged hours, specific to the logged-in user.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Responsive Design</b>: Desktop view shows a table, while
								mobile features a card-based view with dropdown
								navigation.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Tag Filtering</b>: Filter entries by tags for better
								organization.</span
							>
						</li>
						<li class="flex space-x-2 rtl:space-x-reverse">
							<svg
								class="mt-1 flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
								/>
							</svg>
							<span class="leading-tight"
								><b>Validation</b>: Ensures the start time is earlier than the
								end time, highlighting validation errors below inputs.</span
							>
						</li>
					</ul>
					<a href="https://github.com/Csongi98/time-tracker.git">
						<button
							type="button"
							class="mt-5 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
						>
							<svg
								class="w-4 h-4 me-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
									clip-rule="evenodd"
								/>
							</svg>
							Github
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>

	<hr
		class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
	/>
</template>

<script setup>
import fadeInOnScroll from "../directives/fadeInOnScroll";

const designImages = [
	"assets/images/StoreSign.jpg",
	"assets/images/products.jpg",
];

const photographyImages = [
	"assets/images/pg1.jpg",
	"assets/images/pg2.jpg",
	"assets/images/pg3.jpg",
	"assets/images/pg4.jpg",
	"assets/images/pg5.jpg",
	"assets/images/pg6.jpg",
	"assets/images/pg7.jpg",
	"assets/images/pg8.jpg",
	"assets/images/pg9.jpg",
	"assets/images/pg10.jpg",
	"assets/images/pg11.jpg",
	"assets/images/pg12.jpg",
];
</script>
