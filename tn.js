// const user = {
//   userId: 1,
//   userName: "nguyen van a",
// };

// //chuyển từ js sang json
// const userStringify = JSON.stringify(user);
// console.log(userStringify);
// console.log(typeof userStringify);
// //đẩy dữ liệu lên local
// localStorage.setItem("user", userStringify);

// const users = [
//   {
//     userId: console.log(uuidv4()),
//     userName: "nguyen van A",
//     number: 1234212,
//   },
//   {
//     userId: console.log(uuidv4()),
//     userName: "nguyen van B",
//     number: 91234212,
//   },
// ];

// const usersStringfy = JSON.stringify(users);
// console.log(users);
// console.log(typeof users);
// console.log(usersStringfy);
// console.log(typeof usersStringfy);
// localStorage.setItem("users", usersStringfy);

// const userLocal = localStorage.getItem("user");
// console.log(userLocal);

// const userParse = JSON.parse(userStringify);
// console.log(userParse);
// console.log(typeof userParse);
// // localStorage.setItem("user", user);

// localStorage.removeItem("user");
// console.log(uuidv4());

// const names = [];
// let input1Values = document.getElementById("input1");
// let btn1Value = document.querySelector("#btn1");
// const radioValue = document.querySelectorAll(".radio1"); //(`input [type="radio"]`)
// const cityValue = document.querySelector("#city");
// const checkboxValue = document.querySelectorAll(`input[type="checkbox"]`);

// //Event "click" nút Button áp dụng cho toàn bộ đoạn code
// btn1Value.addEventListener("click", (e) => {
//   const input1Value = input1Values.value.trim();
//   names.push(input1Value);
//   console.log(names);

//   // Hàm kiểm tra giới tinh nào được chọn
//   radioValue.forEach((e) => {
//     if (e.checked) {
//       console.log(e.value);
//     }
//   });

//   // Hàm lặp qua các sở thích được check
//   checkboxValue.forEach((e) => {
//     if (e.checked) {
//       console.log(e.value);
//     }
//   });
//   // Log ra thành phố được chọn
//   console.log(cityValue.value);

//   // Dưới đây là các cú pháp xử lí các vấn đề nhỏ phát sinh
//   input1Values.value = "";
//   input1Values.focus();
//   e.preventDefault();
// });

// cityValue.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });
// cityValue.addEventListener();
if (true) {
  var x = 5;
  const y = 6;
  let z = 7;
}
console.log(x + y + z);
