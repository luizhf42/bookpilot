<template>
	<p>Suggest me books similar to:</p>
	<ul>
		<li v-for="(book, index) in books" :key="index">
			<span>{{ book.title }}, by {{ book.author }}</span>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useBooksStore } from "../store/books";

const { books } = useBooksStore();
</script>

<style scoped lang="postcss">
ul {
  @apply list-disc list-inside pl-5;
}
</style>
