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
			<button
				class="add-button"
				@click.prevent="handleEnter"
				:disabled="!areInputsValid()"
			>
				Add book
			</button>
		</div>
		<InputtedBooksList />
		<button class="submit-button" :disabled="books?.length === 0">
			Submit
		</button>
	</form>
</template>

<script setup lang="ts">
import InputtedBooksList from "./InputtedBooksList.vue";
import { ref } from "vue";
import { useBooksStore } from "../store/books";

const emit = defineEmits(["submitBooks"]);
const { books, addBook } = useBooksStore();

const author = ref("");
const authorInput = ref<HTMLInputElement | null>(null);
const title = ref("");

const changeFocusToAuthor = () => authorInput.value?.focus();
const areInputsValid = () => author.value.trim() !== "" && title.value.trim() !== "";
const handleEnter = () => {
	if (areInputsValid()) {
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
		@apply flex flex-col sm:flex-row gap-2 sm:items-end my-2;

		label {
			@apply flex flex-col;
		}

		input {
			@apply text-black h-7 bg-gray-200 rounded-lg px-2 focus:outline-none focus:ring-2 focus:ring-gray-900;
		}

		span {
			@apply hidden sm:inline-block;
		}
	}

	button {
		@apply bg-gray-900 rounded-lg text-white px-4 transition ease-linear hover:enabled:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed;
	}

	.add-button {
		@apply h-7;
	}

	.submit-button {
		@apply text-lg py-2 mt-2;
	}
}
</style>
