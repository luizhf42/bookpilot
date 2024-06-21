<template>
	<ul>
		<li v-for="(book, index) in books" :key="index">
			{{ book.title }} by {{ book.author }}
		</li>
	</ul>
</template>

<script setup lang="ts">
const { books } = defineProps({
	books: Array,
});
</script>

<style scoped lang="postcss"></style>
