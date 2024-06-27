<template>
	<form>
		<p>Suggest me books similar to:</p>
		<div class="book-input">
			<label
				>Title
				<input type="text" @keypress="changeFocusToAuthor" v-model="title"
			/></label>
			<span>by</span>
			<label
				>Author
				<input
					type="text"
					ref="authorInput"
					@keypress="addBook"
					v-model="author"
			/></label>
		</div>
	</form>
	<InputtedBooksList :books="books" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Book } from "../models/Book";
import InputtedBooksList from "./InputtedBooksList.vue";

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
.book-input {
	@apply flex gap-1 items-end;
	label {
		@apply flex flex-col;
	}
	input {
		@apply text-black;
	}
}
</style>
