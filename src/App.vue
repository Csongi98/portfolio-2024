<template>
	<div>
		<div v-if="isSafari" class="safari-warning">
			<div class="safari-message">
				<h1>Safari Version in Development</h1>
				<p>Please use another browser for the best experience.</p>
			</div>
		</div>
		<div v-else>
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
const isSafari = ref(false);

const detectSafari = () => {
	const ua = navigator.userAgent.toLowerCase();
	isSafari.value =
		ua.includes("safari") && !ua.includes("chrome") && !ua.includes("firefox");
};

const loadImages = async () => {
	const images = Array.from(document.images);
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

<style scoped>
.safari-warning {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: white;
}

.safari-message {
	text-align: center;
	color: #333;
}

.safari-message h1 {
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 1rem;
}

.safari-message p {
	font-size: 1rem;
}
</style>
