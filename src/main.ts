import "./app.css";
import { vocable } from "./types";
import { vocables } from "./vocables";

// setup of HTML elements
const word_de = document.getElementById("word_de")!;
const word_en = document.getElementById(
	"word_en"
) as HTMLInputElement;
const form = document.querySelector("form")!;
const result = document.getElementById("result")!;
const next_btn = document.getElementById(
	"next_btn"
) as HTMLButtonElement;

// current vocable which is displayed in HTML
let current_vocable: vocable;

// initialize when HTML is ready
document.addEventListener("DOMContentLoaded", init);

// initialize vocable and event listeners
function init() {
	display_next_vocable();
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		show_result();
	});
	next_btn.addEventListener("click", display_next_vocable);
}

// get a random vocable from the vocables list
function get_random_vocable() {
	const number_of_vocables = vocables.length;
	const random_index = Math.floor(
		Math.random() * number_of_vocables
	);
	return vocables[random_index];
}

// display the next vocable in HTML
function display_next_vocable() {
	result.innerHTML = "";
	next_btn.style.display = "none";
	current_vocable = get_random_vocable();
	word_de.innerText = current_vocable["de"];
	word_en.value = "";
	word_en.focus();
}

// show the result (if guess was correct) in HTML
function show_result() {
	const correct_word = current_vocable["en"];
	const is_correct = word_en.value.trim() == correct_word;
	const result_text = is_correct
		? "Das ist richtig!"
		: "Das ist nicht richtig. Die richtige Übersetzung lautet: " +
		  `<b>${correct_word}</b>`;
	result.innerHTML = result_text;
	next_btn.style.display = "inline";
	next_btn.focus();
}
