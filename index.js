const btn = document.querySelector(".btn");
const joke_container = document.querySelector(".joke-container");

btn.addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const html = `
      <div class="joke-container">
        <p class="joke-setup">Q: ${data.setup}</p>
        <p class="joke-punchline">A: ${data.punchline}</p>
      </div>
    `;
      joke_container.insertAdjacentHTML("afterbegin", html);
    });
});
