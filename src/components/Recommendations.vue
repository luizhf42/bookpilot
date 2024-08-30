<template>
	<p>Here are some books you might like:</p>
	<ul>
		<li v-for="book in recommendedBooks" :key="book.title">
			{{ book.title }}, by {{ book.author }}
		</li>
	</ul>
	<button @click="$emit('reset')">Reset</button>
</template>

<script setup lang="ts">
import { useBooksStore } from "../store/books";

defineEmits(["reset"]);

const { recommendedBooks } = useBooksStore();
</script>

<style scoped lang="postcss">
ul {
	@apply list-disc list-inside pl-5;
}
</style>
