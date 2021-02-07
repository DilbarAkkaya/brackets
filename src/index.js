module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) { //проходим циклом по каждому элементу многомерного массива bracketsConfig
      let symbolsOfSubArray = bracketsConfig[i].join('');//в переменную определяем объединенные элементы субмассива
      if (str.includes(symbolsOfSubArray)) {//проверяем условие, если первый аргумент строка включает в себя парные символы
          str = str.replace(symbolsOfSubArray, '');//заменяем совпадение на пустую строку
          i = - 1;
       }
     }
      return str.length === 0;
}
/*module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let objFromBracketsConfig = Object.fromEntries(bracketsConfig);
  let strArray = str.split('');
  for (let elementStrArray of strArray) {
      if (stack[0] === elementStrArray) {
          stack.pop();
      } else if (objFromBracketsConfig[elementStrArray]) {
          stack.push(objFromBracketsConfig[elementStrArray]);
      } else {
          return false;
      }
  }
  return !stack.length;
}*/

  //console.log(check("|(|)",[['(', ')'], ['|', '|']]));
