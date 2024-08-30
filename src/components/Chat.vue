<template>
	<Message from="Bookpilot" :class="[!showIntroduction && 'animate-disappear']"
		><p>
			Hello, I am Bookpilot! I am here to help you choose your next reading. Let
			me know what kind of books you are interested in, and I'll provide you
			with some recommendations.
		</p>
		<p>
			Tell me the books you want me to find similar works, how many of them you
			want, if I can repeat the authors, etc...
		</p>
	</Message>
	<Message from="You">
		<UserRequest v-if="showUserRequestMessage" />
		<BooksForm @submit-books="handleSubmit" v-else />
	</Message>
	<Message from="Bookpilot" v-if="showRecommendations">
		<Recommendations @reset="handleReset"/>
	</Message>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Message from "./Message.vue";
import BooksForm from "./BooksForm.vue";
import Recommendations from "./Recommendations.vue";
import UserRequest from "./UserRequest.vue";
import { useBooksStore } from "../store/books";
import { Book } from "../models/Book";
import getRecommendations from "../services/recommendations";

const showIntroduction = ref(true);
const showUserRequestMessage = ref(false);
const showRecommendations = ref(false);

const { books, addRecommendedBook, reset } = useBooksStore();

const handleSubmit = async () => {
	showIntroduction.value = false;
	showUserRequestMessage.value = true;
	const returnedBooks = JSON.parse(await getRecommendations(books));
	returnedBooks.forEach((book: Book) => {
		addRecommendedBook(book);
	});
  showRecommendations.value = true;
};

const handleReset = () => {
  showUserRequestMessage.value = false;
  showRecommendations.value = false;
  reset();
}
</script>

<style scoped lang="postcss"></style>
