import { GoogleGenerativeAI } from "@google/generative-ai";
import { Book } from "../models/Book";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getRecommendations = async (books: Book[]) => {
	const formattedBookDescriptions = books.map(
		(book) => `${book.title}, by ${book.author}`
	);

	const prompt = `Return me an array of three objects with title and author keys. In that list, you will suggest books similar to: ${formattedBookDescriptions.join(
		"; "
	)}. Put the title and the author in the object. Don't repeat the books. Return only the array in JSON format.`;

	const { response } = await model.generateContent(prompt);
  return response.text();
};

export default getRecommendations;