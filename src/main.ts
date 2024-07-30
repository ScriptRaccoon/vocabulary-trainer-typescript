import "./app.css"
import { word } from "./types"
import { words } from "./words"

// setup of HTML elements
const word_de = document.getElementById("word_de")!
const word_en = document.getElementById("word_en") as HTMLInputElement
const form = document.querySelector("form")!
const result = document.getElementById("result")!
const next_btn = document.getElementById("next_btn") as HTMLButtonElement

// current word which is displayed in HTML
let current_word: word

// initialize when HTML is ready
document.addEventListener("DOMContentLoaded", init)

// initialize word and event listeners
function init() {
	display_next_word()
	form.addEventListener("submit", (e) => {
		e.preventDefault()
		show_result()
	})
	next_btn.addEventListener("click", display_next_word)
}

// get a random word from the word list
function get_random_word() {
	const number_of_words = words.length
	const random_index = Math.floor(Math.random() * number_of_words)
	return words[random_index]
}

// display the next word in HTML
function display_next_word() {
	result.innerHTML = ""
	next_btn.style.display = "none"
	current_word = get_random_word()
	word_de.innerText = current_word.de
	word_en.value = ""
	word_en.focus()
}

// show the result (if guess was correct) in HTML
function show_result() {
	const correct_word = current_word.en
	const is_correct = word_en.value.trim() == correct_word
	const result_text = is_correct
		? "Das ist richtig!"
		: `Das ist nicht richtig. Die richtige Übersetzung lautet: <b>${correct_word}</b>`
	result.innerHTML = result_text
	next_btn.style.display = "inline"
	next_btn.focus()
}
