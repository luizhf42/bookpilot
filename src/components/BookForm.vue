<template>
	<div>
		<form @submit.prevent="handleAddBook">
			<label for="bookName"
				>Title: <input id="bookName" v-model="bookTitle" type="text"
			/></label>

			<label for="bookAuthor"
				>Author: <input id="bookAuthor" v-model="bookAuthor" type="text"
			/></label>

			<button>Add Book</button>
		</form>
	</div>
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
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 20px;
}

label {
	margin: 10px 0 5px;
}

input {
	margin-bottom: 10px;
	padding: 5px;
	width: 300px;
}
</style>
