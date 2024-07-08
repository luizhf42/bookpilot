<template>
	<form @submit.prevent="$emit('submitBooks')">
		<p>Suggest me books similar to:</p>
		<div class="book-input">
			<label
				>Title
				<input
					type="text"
					@keypress.enter.prevent="changeFocusToAuthor"
					v-model="title"
			/></label>
			<span>by</span>
			<label
				>Author
				<input
					type="text"
					ref="authorInput"
					@keypress.enter.prevent="handleEnter"
					v-model="author"
			/></label>
		</div>
		<InputtedBooksList :books="books" />
		<button :disabled="books?.length === 0">Submit</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputtedBooksList from "./InputtedBooksList.vue";
import { useBooksStore } from "../store/books";

const { books, addBook } = useBooksStore();
const emit = defineEmits(["submitBooks"]);

const author = ref("");
const authorInput = ref<HTMLInputElement | null>(null);
const title = ref("");

const changeFocusToAuthor = () => authorInput.value?.focus();

const handleEnter = () => {
	if (author.value && title.value) {
		addBook({ title: title.value, author: author.value });
		author.value = "";
		title.value = "";
	}
};
</script>

<style scoped lang="postcss">
form {
	@apply bg-gray-600 px-4 py-3 rounded-lg w-full;

	p {
		@apply font-bold;
	}

	.book-input {
		@apply flex gap-2 items-end my-2;

		label {
			@apply flex flex-col;
		}

		input {
			@apply text-black h-7 bg-gray-200 rounded-lg px-2 focus:outline-none focus:ring-2 focus:ring-gray-900;
		}
	}

	button {
		@apply bg-gray-900 rounded-lg text-lg text-white px-4 py-2 mt-2 transition ease-linear hover:enabled:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed;
	}
}
</style>
