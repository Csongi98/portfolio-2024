<template>
	<button
		v-show="visible"
		@click="scrollToTop"
		class="z-10 fixed bottom-3 right-2 bg-black text-white rounded w-10 h-10"
	>
		↑
	</button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

const checkScroll = () => {
	visible.value = window.scrollY > 200;
};

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => window.addEventListener("scroll", checkScroll));
onUnmounted(() => window.removeEventListener("scroll", checkScroll));
</script>
