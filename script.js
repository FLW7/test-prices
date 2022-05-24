let courses = [
  { name: "Courses in England", prices: [0, 100] },    // до 200
  { name: "Courses in Germany", prices: [500, null] },                      //200+
  { name: "Courses in Italy", prices: [100, 200] },    // до 200 // 100-350 //200+
  { name: "Courses in Russia", prices: [null, 400] },  // до 200            //200+
  { name: "Courses in China", prices: [50, 250] },     // до 200            //200+
  { name: "Courses in USA", prices: [200, null] },     // до 200 // 100-350 //200+
  { name: "Courses in Kazakhstan", prices: [56, 324] },// до 200            //200+
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200]; // до 200 (6)
let requiredRange2 = [100, 350]; // 100-350 (2)
let requiredRange3 = [200, null]; // от 200 (5)

// ТРИ ФИЛЬТРА
// ДО 200
let before200 = () => {
  console.log('до 200');
  courses.forEach(item => {
    if ((item.prices[0] <= 200) && !(item.prices[0] == null && item.prices[1] == null)) {
      console.log(item);
    }
  })
};
// 100-350
let from100to350 = () => {
  console.log('от 100 до 350');
  courses.forEach(item => {
    if ((item.prices[0] >= 100 && item.prices[0] <= 350) && item.prices[1] <= 350) {
      console.log(item);
    }
    // ((((item.prices[0] >= 100 && item.prices[0] <= 350) && item.prices[1] <= 350) || (item.prices[0] == null && item.prices[1] !== null)) && !(item.prices[0] == null && item.prices[1] == null))
  })
};
// ОТ 200
let after200 = () => {
  console.log('от 200');
  courses.forEach(item => {
    if ((item.prices[0] >= 200 || item.prices[1] >= 200) && !(item.prices[0] == null && item.prices[1] == null)) {
      console.log(item);
    }
  })
};
before200();
from100to350();
after200();

// СОРТИРОВКА ЭЛЕМЕНТОВ МАССИВА ПУЗЫРЬКОМ
let coursesSorting = (array) => {
  console.log('Сортировка');
  for (let n = 0; n < array.length; n++) {
    for (let i = 0; i < array.length - 1 - n; i++) {
      if (array[i].prices[0] > array[i + 1].prices[0]) {
        const buff = array[i]
        array[i] = array[i + 1]
        array[i + 1] = buff
      }
    }

  }
  console.log(array);
};

coursesSorting(courses);