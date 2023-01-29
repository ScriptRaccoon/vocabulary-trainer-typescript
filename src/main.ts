import "./app.css";
import { vocable } from "./types";
import { vocables } from "./vocables";

const word_de = document.getElementById("word_de")!;
const word_en = document.getElementById(
	"word_en"
) as HTMLInputElement;
const form = document.querySelector("form")!;
const result = document.getElementById("result")!;
const next_btn = document.getElementById(
	"next_btn"
) as HTMLButtonElement;

let random_vocable: vocable;

document.addEventListener("DOMContentLoaded", init);

function init() {
	generate_random_vocable();
	word_en.focus();
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		show_result();
	});
	next_btn.addEventListener("click", generate_random_vocable);
}

function generate_random_vocable() {
	result.innerHTML = "";
	next_btn.style.display = "none";
	const number_of_vocables = vocables.length;
	const random_index = Math.floor(
		Math.random() * number_of_vocables
	);
	random_vocable = vocables[random_index];
	word_de.innerText = random_vocable["de"];
	word_en.value = "";
	word_en.focus();
}

function show_result() {
	const correct_word = random_vocable["en"];
	const is_correct = word_en.value.trim() == correct_word;
	const text = is_correct
		? "Das ist richtig!"
		: `Das ist nicht richtig. Die richtige Übersetzung lautet: <b>${correct_word}</b>`;
	result.innerHTML = text;
	next_btn.style.display = "inline";
	next_btn.focus();
}
