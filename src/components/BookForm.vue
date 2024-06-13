<template>
	<form @submit.prevent="handleAddBook">
		<h2>Add a book</h2>
		<label><span>Title:</span> <input v-model="bookTitle" type="text" /></label>
		<label
			><span>Author:</span> <input v-model="bookAuthor" type="text"
		/></label>
		<button>Add Book</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Book } from "../models/Book";

const emit = defineEmits(["add-book"]);

const bookTitle = ref("");
const bookAuthor = ref("");

const handleAddBook = () => {
	const book: Book = { title: bookTitle.value, author: bookAuthor.value };
	emit("add-book", book);
	bookTitle.value = "";
	bookAuthor.value = "";
};
</script>

<style scoped lang="postcss">
form {
	@apply flex w-11/12 flex-col items-center py-5 px-3 mb-5 bg-[#f9f9f9] rounded-xl shadow-[0_0_0_4px_0px_#0000004d];

	h2 {
		@apply font-bold text-lg;
	}
	label {
		@apply my-3 flex flex-col w-3/4;

		span {
			@apply w-min cursor-text;
		}

		input {
			@apply mb-3 p-1;
		}
	}
}
</style>
