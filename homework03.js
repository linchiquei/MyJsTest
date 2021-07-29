// Q1
// 請說明何謂「抽象類別」

// Q2
// let r = [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2], 
//   );

  // acc =[1,2]
  // cur = [0,1]
  // ---- ans: [1,2,0,1]
  // acc =[1,2,0,1]
  // cur =[2,3]
  // -----ans: [1,2,0,1,2,3]
  
  //console.log(r);  // 會印出什麼？為什麼？
  
  // Q3
  // function getInfo(member, year) {
  //   member = { name:'33d'}
  //   year = '1998';
  //   console.log(person);
  // }
  

  // const person = { name: 'Sarah' };
  // const lili = person;
  // const birthYear = '1997';
  
  // getInfo(person, birthYear);
  
  // console.log(person, lili, birthYear); // 會印出什麼？為什麼？
  
  // Q4
  // function sayHi(name) {
  //   return `Hi there, ${name}`;
  // }
  // console.log(sayHi());  // 會印出什麼？為什麼？




    // 規則：
    // 1. 密碼至少要 8 個字
    // 2. 密碼裡至少要有 1 個數字以及 1 個大寫英文字母
    // 3. 密碼裡不能有 "password" 字樣

  const isValidPassword = (password) => {
    var len = password.length;
    if( /[A-Z]/.test(password) && /[0-9]/.test(password) && len >= 8 && !password.includes('password'))
    {
      return true;
    }
    return false;
  }

  console.log(isValidPassword("12345"));           // false
  console.log(isValidPassword("123passwordxyz"));  // false
  console.log(isValidPassword("helloworld"));      // false
  console.log(isValidPassword("Helloworld"));      // false
  console.log(isValidPassword("helloWorld2"));     // true