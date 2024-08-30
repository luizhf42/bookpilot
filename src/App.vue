<template>
	<header>
		<h1>Bookpilot</h1>
	</header>
	<main>
		<Chat/>
	</main>
</template>

<script setup lang="ts">
import Chat from "./components/Chat.vue";
</script>

<style lang="postcss">
header {
	@apply w-full bg-gray-800 p-3 border-b border-white;

	h1 {
		@apply text-2xl font-extrabold;
	}
}

main {
	@apply w-full max-w-4xl mx-auto p-4;
}
</style>
