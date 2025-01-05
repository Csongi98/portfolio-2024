<template>
	<div>
		<LoadingScreen v-if="loading" />
		<div v-else>
			<div class="relative elementbg">
				<img
					class="absolute top-0 w-full"
					src="/assets/images/5.png"
					alt="Profile Image"
				/>
			</div>
			<div class="appBody">
				<Navbar></Navbar>
				<Intro></Intro>
				<Showcase></Showcase>
				<AboutMe></AboutMe>
				<BackToTop></BackToTop>
				<Footer></Footer>
			</div>
			<div class="relative">
				<img
					class="absolute bottom-0 -z-10 w-full"
					src="/assets/images/5circle.png"
					alt="Profile Image"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import Navbar from "./components/Navbar.vue";
import Showcase from "./components/Showcase.vue";
import AboutMe from "./components/AboutMe.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "./components/BackToTop.vue";
import Intro from "./components/Intro.vue";

const loading = ref(true);

console.log("Loading state:", loading.value);

const loadImages = async () => {
	const images = Array.from(document.images);
	console.log("Images to load:", document.images);
	await Promise.all(
		images.map((img) =>
			img.complete
				? Promise.resolve()
				: new Promise((resolve, reject) => {
						img.onload = resolve;
						img.onerror = reject;
				  })
		)
	);

	// await new Promise((resolve) => setTimeout(resolve, 2000));
};

onMounted(async () => {
	try {
		await loadImages();
	} catch (error) {
		console.error("Error loading images:", error);
	}
	loading.value = false;
	console.log("Loading state:", loading.value);
});
</script>

<style scoped></style>
