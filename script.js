const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = document.querySelector('#name').value;
	greeting.textContent = `Hello, ${name}!`;
});

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://ih67rooiuhcmgw5ye33t7xfvnu0ovmfy.lambda-url.ap-south-1.on.aws/" //this is the lambda_URL.
    );
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();