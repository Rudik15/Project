/* Subscribe Label */

const inputSubscribe = document.querySelector('.subscribe__input');
const label = document.querySelector('.subscribe__label');

inputSubscribe.addEventListener('input', () => {
	if (inputSubscribe.value.trim() !== '') {
		label.classList.add('subscribe__label--top');
	} else {
		label.classList.remove('subscribe__label--top');
	}
});

const email = document.getElementById("email");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (event) => {
	const link = document.createElement("a");
	let file = new Blob([email.value], { type: "text/plain" });
	link.href = URL.createObjectURL(file);

	link.download=  "test.xml";

	link.click();
	URL.revokeObjectURL(link.href);
})