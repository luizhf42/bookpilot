<template>
	<header>
		<h1>Bookpilot</h1>
	</header>
	<main>
		<Message from="Bookpilot" :class="[!showIntroduction && 'animate-disappear']"
			><p>
				Hello, I am Bookpilot! I am here to help you choose your next reading.
				Let me know what kind of books you are interested in, and I'll provide
				you with some recommendations.
			</p>
			<p>
				Tell me the books you want me to find similar works, how many of them
				you want, if I can repeat the authors, etc...
			</p>
		</Message>
		<Message from="You">
			<BooksForm @submit-books="getRecommendations" />
		</Message>
		<Message from="Bookpilot" v-if="recommendedBooks.length > 0">
			<Recommendations />
		</Message>
	</main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Message from "./components/Message.vue";
import BooksForm from "./components/BooksForm.vue";
import Recommendations from "./components/Recommendations.vue";
import { useBooksStore } from "./store/books";
import { Book } from "./models/Book";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const showIntroduction = ref(true);

const { books, recommendedBooks, addRecommendedBook } = useBooksStore();

const getRecommendations = async () => {
	showIntroduction.value = false;
	const formattedBookDescriptions = books.map(
		(book) => `${book.title}, by ${book.author}`
	);

	const prompt = `Return me an array of three objects with title and author keys. In that list, you will suggest books similar to: ${formattedBookDescriptions.join(
		"; "
	)}. Put the title and the author in the object. Don't repeat the books. Return only the array in JSON format.`;

	const { response } = await model.generateContent(prompt);
	const returnedBooks = JSON.parse(response.text());
	returnedBooks.forEach((book: Book) => {
		addRecommendedBook(book);
	});
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
