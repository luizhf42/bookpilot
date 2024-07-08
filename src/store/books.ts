import { defineStore } from "pinia"
import { ref } from "vue"
import { Book } from "../models/Book"

export const useBooksStore = defineStore('books', () => {
  const books = ref<Book[]>([]);
  const addBook = (book: Book) => books.value.push(book);
  

  return { books, addBook }
})