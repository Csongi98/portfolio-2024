<template>
	<section id="aboutme-section">
		<div class="container mx-auto">
			<h2 class="z-10 text-3xl font-bold mb-4 fade-in" v-fade-in-on-scroll>
				Work Experience
			</h2>

			<div
				class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 fade-in"
				v-fade-in-on-scroll
			>
				<ul
					class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
					id="defaultTab"
					data-tabs-toggle="#defaultTabContent"
					role="tablist"
				>
					<li class="me-2">
						<button
							id="about-tab"
							data-tabs-target="#about"
							type="button"
							role="tab"
							aria-controls="about"
							aria-selected="true"
							class="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
						>
							Position
						</button>
					</li>
					<li class="me-2">
						<button
							id="services-tab"
							data-tabs-target="#services"
							type="button"
							role="tab"
							aria-controls="services"
							aria-selected="false"
							class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
						>
							Key responsibilities
						</button>
					</li>
					<li class="me-2">
						<button
							id="statistics-tab"
							data-tabs-target="#statistics"
							type="button"
							role="tab"
							aria-controls="statistics"
							aria-selected="false"
							class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
						>
							Description
						</button>
					</li>
				</ul>
				<div class="relative">
					<img
						class="absolute top-0 right-0 w-64 -z-10"
						src="/assets/images/11.png"
						alt="Profile Image"
					/>
				</div>
				<div id="defaultTabContent">
					<div
						class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
						id="about"
						role="tabpanel"
						aria-labelledby="about-tab"
					>
						<h2
							class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
						>
							Data Collection & Management
						</h2>
						<p class="mb-3 text-gray-500 dark:text-gray-400">2021 - Present</p>
					</div>
					<div
						class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
						id="services"
						role="tabpanel"
						aria-labelledby="services-tab"
					>
						<h2
							class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
						>
							Daily tasks
						</h2>
						<!-- List -->
						<ul
							role="list"
							class="space-y-4 text-gray-500 dark:text-gray-400 text-left"
						>
							<li class="flex space-x-2 rtl:space-x-reverse items-center">
								<svg
									class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
									/>
								</svg>
								<span class="leading-tight">Managing projects</span>
							</li>
							<li class="flex space-x-2 rtl:space-x-reverse items-center">
								<svg
									class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
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
									>Scripting surveys for market research</span
								>
							</li>
							<li class="flex space-x-2 rtl:space-x-reverse items-center">
								<svg
									class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
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
									>Processsing data including creating SPSS files and cross
									tabulations for reports and dashboards</span
								>
							</li>
							<li class="flex space-x-2 rtl:space-x-reverse items-center">
								<svg
									class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
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
									>Communicating with clients on a daily basis</span
								>
							</li>
							<li class="flex space-x-2 rtl:space-x-reverse items-center">
								<svg
									class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
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
									>Developing custom solutions, including websites and
									templates</span
								>
							</li>
							<li class="flex space-x-2 rtl:space-x-reverse items-center">
								<svg
									class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
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
									>Converting VBA macros into Python applications</span
								>
							</li>
						</ul>
					</div>
					<div
						class="hidden p-4 text-gray-500 bg-white rounded-lg md:p-8 dark:bg-gray-800"
						id="statistics"
						role="tabpanel"
						aria-labelledby="statistics-tab"
					>
						<span class="leading-tight"
							>In my daily work, I manage projects with a focus on efficiency
							and precision, ensuring smooth execution and timely delivery. I
							script surveys tailored for market research, process data by
							creating SPSS files, and produce detailed cross-tabulations for
							comprehensive reports and interactive dashboards. Daily client
							communication is central to my role, fostering collaboration and
							addressing needs effectively. Additionally, I develop custom
							solutions, including websites and templates, to meet specific
							requirements. A key aspect of my work involves modernizing
							workflows by converting VBA macros into Python applications,
							enhancing efficiency and streamlining processes.</span
						>
					</div>
				</div>
			</div>

			<hr
				class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 z-10"
			/>

			<h2 class="text-3xl font-bold mt-8 mb-4 fade-in" v-fade-in-on-scroll>
				Courses
			</h2>

			<ol
				class="relative border-s border-gray-200 dark:border-gray-700 text-left fade-in"
				v-fade-in-on-scroll
			>
				<li class="mb-10 ms-4">
					<div
						class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
					></div>
					<time
						class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>February 2024</time
					>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
						Graphic Designer
					</h3>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Completed a comprehensive Graphic Designer course, which equipped me
						with advanced skills in visual design and creative tools,
						complementing my web development expertise.
					</p>
				</li>
				<li class="ms-4">
					<div
						class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
					></div>
					<time
						class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>November 2018</time
					>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
						Agile Team Workshop
					</h3>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Successfully completed the Agile Team Workshop, gaining valuable
						insights into agile methodologies and collaborative team practices
						to enhance project management and efficiency.
					</p>
				</li>
			</ol>

			<hr
				class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
			/>

			<h2 class="text-3xl font-bold mt-8 mb-4 fade-in" v-fade-in-on-scroll>
				Languages & Frameworks
			</h2>
			<div
				class="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mt-12 fade-in"
				v-fade-in-on-scroll
			>
				<!-- Loop through skills -->
				<a
					v-for="(skill, index) in skills"
					:key="index"
					:href="skill.link"
					target="_blank"
					class="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
				>
					<img
						v-if="skill.icon"
						:src="`/assets/icons/${skill.icon}`"
						alt=""
						:class="{
							'w-20':
								skill.name === 'PHP' ||
								skill.name === 'Tailwind CSS' ||
								skill.name === 'Laravel',
							'w-14': skill.name === 'Bootstrap',
							'w-12': !(
								skill.name === 'PHP' ||
								skill.name === 'Tailwind CSS' ||
								skill.name === 'Laravel' ||
								skill.name === 'Bootstrap'
							),
							'h-20': skill.name === 'Laravel',
							'h-12': !(skill.name === 'Laravel'),
							'mx-auto': true,
						}"
					/>
					<h3
						class="font-semibold text-xl text-gray-900 dark:text-white mt-3.5"
					>
						{{ skill.name }}
					</h3>
				</a>
			</div>
			<div class="relative">
				<img
					class="absolute bottom-0 right-0 w-1/2 -z-10"
					src="/assets/images/39.png"
					alt="Profile Image"
				/>
			</div>

			<hr
				class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
			/>

			<h2 class="text-3xl font-bold mt-8 mb-4 fade-in" v-fade-in-on-scroll>
				Softwares
			</h2>
			<div
				class="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mt-12 fade-in"
				v-fade-in-on-scroll
			>
				<!-- Loop through skills -->
				<a
					v-for="(software, index) in softwares"
					:key="index"
					target="_blank"
					class="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
				>
					<img
						v-if="software.icon"
						:src="`/portfolio-2024/assets/icons/${software.icon}`"
						alt=""
						:class="{
							'w-20':
								software.name === 'PHP' ||
								software.name === 'Tailwind CSS' ||
								software.name === 'Laravel',
							'w-14': software.name === 'Bootstrap',
							'w-12': !(
								software.name === 'PHP' ||
								software.name === 'Tailwind CSS' ||
								software.name === 'Laravel' ||
								software.name === 'Bootstrap'
							),
							'h-20': software.name === 'Laravel',
							'h-12': !(software.name === 'Laravel'),
							'mx-auto': true,
						}"
					/>
					<h3
						class="font-semibold text-xl text-gray-900 dark:text-white mt-3.5"
					>
						{{ software.name }}
					</h3>
				</a>
			</div>
		</div>

		<hr
			class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
		/>
	</section>
</template>

<script setup>
import fadeInOnScroll from "../directives/fadeInOnScroll";

const skills = [
	{
		name: "HTML",
		link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		icon: "html.png",
	},
	{
		name: "CSS",
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		icon: "CSS.svg",
	},
	{
		name: "JavaScript",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		icon: "JavaScript.png",
	},
	{
		name: "PHP",
		link: "https://www.php.net/",
		icon: "PHP.png",
	},
	{
		name: "Vue.js",
		link: "https://vuejs.org",
		icon: "vuejs.png",
	},
	{
		name: "Tailwind CSS",
		link: "https://tailwindcss.com",
		icon: "Tailwind_CSS.png",
	},
	{
		name: "Bootstrap",
		link: "https://getbootstrap.com/",
		icon: "Bootstrap.png",
	},
	{
		name: "Python",
		link: "https://www.python.org",
		icon: "Python.png",
	},
	{
		name: "MySQL",
		link: "https://www.mysql.com",
		icon: "mysql.svg",
	},
	{
		name: "Laravel",
		link: "https://laravel.com",
		icon: "laravel.svg",
	},
];

const softwares = [
	{
		name: "Photoshop",
		link: "",
		icon: "Photoshop.png",
	},
	{
		name: "Illustrator",
		link: "",
		icon: "Illustrator.png",
	},
	{
		name: "Blender",
		link: "",
		icon: "Blender.png",
	},
	{
		name: "Figma",
		link: "",
		icon: "Figma.png",
	},
	{
		name: "PowerPoint",
		link: "",
		icon: "PowerPoint.png",
	},
	{
		name: "Excel",
		link: "",
		icon: "Excel.png",
	},
	{
		name: "Word",
		link: "",
		icon: "Word.png",
	},
];
</script>
