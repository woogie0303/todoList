import List from "./List.js";

const main = () => {
  const form = document.querySelector("#listForm");
  const input = document.querySelector(".list-input");
  const listArr = new List();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!input.value) {
      return;
    }

    listArr.push(input.value);

    listArr.render();

    input.value = "";
  });

  listArr.load();
};

main();
