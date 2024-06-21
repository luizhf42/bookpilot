<template>
	<form>
		<label
			>Title <input type="text" @keypress="changeFocusToAuthor" v-model="title"
		/></label>
		<label
			>Author
			<input type="text" ref="authorInput" @keypress="addBook" v-model="author"
		/></label>
	</form>
	<InputtedBooksList :books="books" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Book } from "../models/Book";

const title = ref("");
const author = ref("");
const books = ref<Book[]>([]);
const authorInput = ref<HTMLInputElement | null>(null);
const changeFocusToAuthor = (event: KeyboardEvent) => {
	if (event.key === "Enter") authorInput.value?.focus();
};
const addBook = (event: KeyboardEvent) => {
	if (event.key === "Enter")
		books.value.push({ title: title.value, author: author.value });
};
</script>

<style scoped lang="postcss">
input {
	@apply text-black;
}
</style>
