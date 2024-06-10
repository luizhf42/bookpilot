<template>
	<div>
		<form @submit.prevent="handleAddBook">
			<label for="bookName"
				>Title: <input id="bookName" v-model="bookTitle" type="text"
			/></label>

			<label for="bookAuthor"
				>Author: <input id="bookAuthor" v-model="bookAuthor" type="text"
			/></label>

			<button type="submit">Add Book</button>
		</form>
		<ul>
			<li v-for="(book, index) in books" :key="index">
				{{ book.title }}, by {{ book.author }}
			</li>
		</ul>
		<button @click="emit('submit')">Get Recommendations</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Book } from "../models/Book";

const { books } = defineProps({
	books: Array as () => Book[],
});

const emit = defineEmits(["submit", "add-book"]);

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

button {
	padding: 10px 20px;
	background-color: #42b983;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 10px;
}

button:hover {
	background-color: #369f6e;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	margin: 5px 0;
	padding: 5px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>
