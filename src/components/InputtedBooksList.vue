<template>
	<ul>
		<li v-for="(book, index) in books" :key="index">
			{{ book.title }} by {{ book.author }} <span @click="deleteBook(index)">❌</span>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useBooksStore } from "../store/books";

const { books } = useBooksStore();
const deleteBook = (index: number) => books.splice(index, 1);
</script>

<style scoped lang="postcss">
ul {
	@apply flex gap-2;
	li {
		@apply bg-gray-900 pl-2 rounded-full h-6;

		span {
			@apply bg-red-600 h-6 pr-2;
		}
	}
}
</style>
