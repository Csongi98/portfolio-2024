<template>
	<div class="rounded-xl fade-in" v-fade-in-on-scroll>
		<nav
			:class="[
				'sticky top-0 z-50 border-gray-200 px-4 lg:px-6 py-2.5 rounded-xl transition duration-300 backdrop-blur-sm',
				isScrolled ? 'shadow-lg dark:bg-gray-900' : 'shadow dark:bg-gray-800',
			]"
		>
			<div
				class="container flex flex-wrap items-center justify-between mx-auto"
			>
				<!-- Logo or Brand Name -->
				<a
					href="#"
					class="text-xl font-semibold whitespace-nowrap dark:text-white"
				>
					Portfolio
				</a>

				<!-- Hamburger Menu for Mobile -->
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					class="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>

				<!-- Collapsible Navbar -->
				<div class="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul
						class="flex flex-col p-4 mt-4 borderrounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
					>
						<li class="nav-item">
							<a
								href="#showcase-section"
								class="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								Showcase
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#aboutme-section"
								class="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								About Me
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script setup>
import fadeInOnScroll from "../directives/fadeInOnScroll";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 0; // Detect if scrolled
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>
