<template>
	<ul>
		<li v-for="(book, index) in books" :key="index">
			{{ book.title }} by {{ book.author }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import { Book } from "../models/Book";

const { books } = defineProps({
	books: Array as () => Book[],
});
</script>

<style scoped lang="postcss">
ul {
	@apply flex gap-2;
	li {
		@apply bg-gray-900 p-2 rounded-full w-fit;
	}
}
</style>
