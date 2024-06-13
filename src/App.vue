<template>
	<div id="wrapper">
		<header>
			<h1>BookPilot</h1>
		</header>
		<main>
			<BookForm @add-book="addBook" :books="books" />
			<div>
				<ul>
					<li v-for="(book, index) in books" :key="index">
						{{ book.title }}, by {{ book.author }}
					</li>
				</ul>
				<button @click="getRecommendations">Get Recommendations</button>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ref } from "vue";
import BookForm from "./components/BookForm.vue";
import { Book } from "./models/Book";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const books = ref<Book[]>([]);

const addBook = (book: Book) => {
	books.value.push(book);
};

const formatBookDescriptions = () =>
	books.value.map((book) => `${book.title}, by ${book.author}`);

const getRecommendations = async () => {
	const bookDescriptions = formatBookDescriptions();

	const prompt = `Return me an array of three objects with title and author keys. In that list, you will suggest books similar to: ${bookDescriptions.join(
		"; "
	)}. Put the title and the author in the object. Don't repeat the books. Return only the array in JSON format.`;

	const result = await model.generateContent(prompt);
	const response = result.response;
	const text = response.text();
	console.log(text);
};
</script>

<style lang="postcss">
header {
	@apply bg-[#a86114] p-5 text-white;

	h1 {
		@apply text-3xl font-extrabold;
	}
}

main {
	@apply p-5 flex flex-col justify-evenly items-center;

	li {
		@apply my-1 p-1 border border-black rounded-sm;
	}

	button {
		@apply default-button;
	}
}
</style>
