import { defineStore } from "pinia";
import { ref } from "vue";
import { Book } from "../models/Book";

export const useBooksStore = defineStore("books", () => {
	const books = ref<Book[]>([]);
	const addBook = (book: Book) => books.value.push(book);
	const deleteBook = (index: number) => books.value.splice(index, 1);

	const recommendedBooks = ref<Book[]>([]);
	const addRecommendedBook = (book: Book) => recommendedBooks.value.push(book);

	const reset = () => {
		// books.value = [];
		recommendedBooks.value = [];
	}

	return { books, addBook, deleteBook, recommendedBooks, addRecommendedBook, reset };
});
