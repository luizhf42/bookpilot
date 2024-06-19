<template>
	<header>
		<h1>Bookpilot</h1>
	</header>
	<main>
		<Message>Hello, I am Bookpilot! I am here to help you choose your next reading. Let me know what kind of books you are interested in, and I'll provide you with some recommendations.</Message>
		<Message>Tell me the books you want me to find similar works, how many of them you want, if I can repeat the authors, etc...</Message>
	</main>
</template>

<script setup lang="ts">
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ref } from "vue";
import { Book } from "./models/Book";
import Message from "./components/Message.vue";

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
	@apply w-full bg-gray-800 p-3 border-b border-white;

	h1 {
		@apply text-2xl font-extrabold;
	}
}

main {
	@apply w-full max-w-4xl mx-auto p-4;
}
</style>
