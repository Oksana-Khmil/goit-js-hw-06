/*--------------------------Task-01
В HTML есть список категорий ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
------------------------------------------------*/

const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length} `);

document.querySelectorAll(".item h2").
    forEach(elem => console.log(
        `Category: ${elem.textContent}
Elements: ${elem.nextElementSibling.children.length}`
    )
)


//2 вариант
// const list = document.querySelector('#categories');
// const items = list.querySelectorAll('.item');
// console.log(`В списке ${items.length} категории:`);
// items.forEach(node => {
// const h2 = node.querySelector('h2');
// const nodeItems = node.querySelectorAll('li');
// console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
// });