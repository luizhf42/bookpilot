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

<style scoped>
form {
	display: flex;
	width: min(90%, 600px);
	flex-direction: column;
	align-items: center;
	padding: 20px 10px;
	margin-bottom: 20px;
	background: #f9f9f9;
	border-radius: 12px;
	box-shadow: 0 0 4px 0px #0000004d;
}

label {
	margin: 10px 0 5px;
	display: flex;
	flex-direction: column;
	width: 70%;

	span {
		width: min-content;
		font-size: 1.1rem;
		cursor: text;
	}

	input {
		margin-bottom: 10px;
		padding: 5px;
	}
}
</style>
