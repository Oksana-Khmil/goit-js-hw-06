/*--------------------Task-10
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const divOfBoxes = document.querySelector("#boxes");
const arrayBoxes = [];
let size = 30;

createBtnEl.addEventListener("click", () => {
  onPushBoxesCollection();
  inputEl.value = 0;
});
destroyBtnEl.addEventListener("click", onDestroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i +=1) {
    const box = document.createElement("div");

     box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box);
  }
}

function onPushBoxesCollection() {
  createBoxes(Number(inputEl.value));
  divOfBoxes.append(...arrayBoxes);
}

function onDestroyBoxes() {
  return divOfBoxes.remove(...divOfBoxes.children);
}