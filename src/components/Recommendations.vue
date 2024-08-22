<template>
	<p>Here are some books you might like:</p>
	<ul>
		<li v-for="book in recommendedBooks" :key="book.title">
			{{ book.title }}, by {{ book.author }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useBooksStore } from "../store/books";

const { recommendedBooks } = useBooksStore();
</script>

<style scoped lang="postcss"></style>
