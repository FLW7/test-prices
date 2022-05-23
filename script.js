let courses = [
  { name: "Courses in England", prices: [0, 100] }, // 100-350
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },// 100-350
  { name: "Courses in Russia", prices: [null, 400] },// 100-350
  { name: "Courses in China", prices: [50, 250] },// 100-350
  { name: "Courses in USA", prices: [200, null] },// 100-350
  { name: "Courses in Kazakhstan", prices: [56, 324] },// 100-350
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200]; // до 200 (6)
let requiredRange2 = [100, 350]; // 100-350 (6)
let requiredRange3 = [200, null]; // от 200

let before200 = () => {
  courses.forEach(item => {
    if ((item.prices[0] <= 200) && !(item.prices[0] == null && item.prices[1] == null)) {
      console.log(item);
    }
  })
}
let from100to350 = () => {
  // courses.forEach(item => {
  //   if (item.prices[0] <= 200 && item.prices[0] !== null) {
  //     console.log('2', item);
  //   }

  // })
}
// from100to350()
before200()