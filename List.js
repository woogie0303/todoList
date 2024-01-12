import ListItem from "./ListItem.js";

export default class List {
  constructor() {
    this._list = [];
    this._ul = document.querySelector("#list");
  }

  push(inputText) {
    const itemId = this._list.length ? Number(this._list[this._list.length - 1].id) + 1 : 1;
    const list = new ListItem(itemId.toString(), inputText);
    this._list.push(list);
    this.save();
  }

  save() {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clear() {
    this._ul.innerHTML = "";
  }

  render() {
    this.clear();

    this._list.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item?.listText;
      this._ul.append(li);

      const button = document.createElement("button");
      button.innerText = "X";
      this._ul.append(button);

      button.addEventListener("click", () => {
        this.remove(item?.id);
        this.render();
      });
    });
  }

  remove(id) {
    this._list = this._list.filter((item) => item.id !== id);
  }

  load() {
    const storageItem = localStorage.getItem("myList");
    this._list = storageItem ? JSON.parse(storageItem) : [];
    this.render();
  }
}
