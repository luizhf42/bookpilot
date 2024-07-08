<template>
	<ul>
		<li v-for="(book, index) in books" :key="index">
			<span>{{ book.title }} by {{ book.author }}</span>
			<div @click="deleteBook(index)">X</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useBooksStore } from "../store/books";

const { books, deleteBook } = useBooksStore();
</script>

<style scoped lang="postcss">
ul {
	@apply flex gap-2 w-4/5 flex-wrap;
	li {
		@apply bg-gray-900 rounded-full h-8 flex items-center;

		span,
		div {
			@apply inline-flex items-center h-full px-2;
		}

		span {
			@apply border-r border-white;
		}

		div {
			@apply font-extrabold rounded-e-full cursor-pointer transition-all ease-linear hover:bg-red-600 hover:text-white;
		}
	}
}
</style>
