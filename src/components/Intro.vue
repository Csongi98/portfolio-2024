<template>
	<div class="container mt-5 relative fade-in" v-fade-in-on-scroll>
		<div class="flex w-full">
			<div class="ml-8 w-1/2 z-10">
				<img
					src="/assets/images/profile.jpg"
					class="rounded-full img-fluid myimg"
					alt="Profile Image"
				/>
			</div>
			<div class="w-1/2 z-10">
				<p class="introText">
					Creative web developer and designer - Blending clean, modern design
					with intuitive,
					<u>user-friendly</u> experiences tailored to meet client needs and
					evolving industry trends.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import fadeInOnScroll from "../directives/fadeInOnScroll";
</script>
