// //Bài 1: dùng vòng lặp for, tính tổng của dãy sau S(n)= 1+2+3+...n

// var n = 9; 
// var sum = 0; 
// for (var i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log("Tổng của dãy S(n1) là: " + sum);


// // bài 2: Dùng dòng lặp for, tính tổng của dãy sau: S(n) =  1+1/2+1/3+1/4+/...1/n
// var n =  5;
// var sum = 0;
// for (var i= 1; i<= n; i++) {
//     sum +=  1/i;
// }
// console.log("Tổng của dãy S(n2) là: " + sum);


// //Bài 3: Dùng dòng lặp for, tính tổng của dãy sau: S(n) =1+4+9+16+25+n^2
// var  n = 2;
// var sum = 0;
// for (i = 1; i <= n; i++) {
//     sum += Math.pow(i , 2);
// }
// console.log('tong cua day so S(n3) là: ' + sum);


// //Bài 4: Dùng dòng lặp for, tính tổng của dãy sau: S(n) = 1+8+27+...+n^3
// var n = 5;
// var sum = 0;
// for (var i = 1; i<=n; i++) {
//   sum += Math.pow(i, 3);
// }
// console.log("Tổng của dãy S(n4) là: " + sum);

//Bài 5: dùng dòng lặp while, in ra tất cả số nguyên dương lẻ <100
// var i = 1;
// while(i<100){
//   if ((i%2)!=0) {
//     console.log(i); 
//   }
  
//   i += 1;
// }









//Bài 6: dùng dòng lặp while, in ra tất cả số nguyên dương chẵn<100

// var i = 2;
// while(i<100){
//   console.log(i);
//   i += 2;
// }



//Bài 7: dùng dòng lặp while, in ra tất cả số nguyên âm lẻ >-100
// var i = 0;
// while(i>-100){
//   if ((i%2)!=0) {
//     console.log(i); 
//   }
  
//   i -= 1;
// }

//Bài 8: dùng dòng lặp while, in ra tất cả số nguyên âm chẵn >-100
//var i = -100;
// while(i < 0){
//   if ((i % 2)==0) {
//     console.log(i); 
//   }
  
//   i += 2
// }


//bài 9: Viết ra chương trình in ra hình chữ nhật có cạnh a,b ví dụ :
//a = 3, b = 5

// var chieudai_a = 7;
// var chieurong_b = 4;
//  function inHinhChuNhat (chieudai_a, chieurong_b) {
//     for (var i = 0; i < chieurong_b; i++) {
//         var x = '';
//     for (var j = 0; j < chieudai_a; j++){
//         x +='*'
//     }
//     console.log(x);
//     }
//  }
//  inHinhChuNhat(chieudai_a, chieurong_b);

 // Bài 10: Viết ra chương trình in ra hình tam giác cân có chiều cao  = h. Ví dụ: h=3

//  var h = 5;
//  function inHinhTamGiac (h){
//     for (var i = 1; i < h; i++){
//         var hang = '';
//     for (var j = 1; j <= h - i; j++){
//         hang += ' ';
//     }
//     for (var k = 1; k <= 2 * i-1; k++){
//         hang += '*';
//     }
//     console.log(hang);
//     }
// }
// inHinhTamGiac(h);


//Bài 11: Đếm số lượng các số dương trong mảng arr = [10,11,12,-10,-11,-12]
// let arr = [10,11,12,-10,-11,-12];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         count ++;
//     }
     
// }

// console.log("số lượng các số dương trong mảng là: " +count);



//Bài 12: Đếm số lượng các số âm trong mảng arr = [10,11,12,-10,-11,-12]
// let arr = [10,11,12,-10,-11,-12];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         count ++;
//     }
     
// }

// console.log("số lượng các số âm trong mảng là: " + count);


//Bài 13: Đếm số lượng các số chẵn trong mảng arr = [10,11,12,13,14,15]
// let arr = [10,11,12,13,14,15];
// let count = 0; 
// for (let i = 0; i <arr.length; i++) {
//     if (arr[i] % 2 ===0) {
//         count ++;
//     }
// }
// console.log("số lượng các số chẵn trong mảng là: " + count);

//Bài 14: Đếm số lượng các số lẻ trong mảng arr = [10,11,12,13,14,15]
// let arr = [10,11,12,13,14,15];
// let count = 0; 
// for (let i = 0; i <arr.length; i++) {
//     if ((arr[i] % 2) != 0) {
//         count++;
//     }
// }
// console.log("số lượng các số chẵn trong mảng là: " + count);

//Bài 15: Tìm số lớn nhất trong mảng arr = [10,11,12,13,14,15]
// let arr = [10,11,12,13,14,15];
// let maxNum =  arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNum){
//         maxNum = arr[i];
//     }
//     //console.log(maxNum);
// }
// console.log("Số lớn nhất trong mảng là: " + maxNum);

// //Bài 16: Tìm số bé nhất trong mảng arr = [10,11,12,13,14,15]
// let arr1 = [10,11,12,13,14,15];
// let minNum =  arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minNum){
//         minNum = arr[i];
//     }
    
// }
// console.log("Số lớn nhất trong mảng là: " + minNum);

//Bài 17: Tính tổng các số âm trong mảng arr = [10,11,12,-10,-11,-12]
// let arr3 = [10,11,12,-10,-11,-12];
// let sum = 0;
// for (let i = 0; i < arr3.length; i++) {
//     if (arr3[i] < 0) {
//         sum += arr3[i];
//     }
// }
// console.log("tổng các số âm trong mảng là: " + sum);

//Bài 18: Tính tổng các số dương trong mảng arr = [10,11,12,-10,-11,-12]
// let arr4 = [10,11,12,-10,-11,-12];
// let sum1 = 0;
// for (let i = 0; i < arr4.length; i++) {
//     if (arr4[i] > 0) {
//         sum1 += arr4[i];
//     }
// }
// console.log("tổng các số âm trong mảng là: " + sum1);

//Bài 19: Tìm số chẵn đầu tiên trong mảng arr = [10,11,12,13,14,15] và arr2 = [1,3,5,7,9]. Nếu không tìm được số chẵn nào in ra -1

// function findFirstEven(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         return arr[i];
//       }
//     }
//     return -1;
//   }
  
//   const arr = [10, 11, 12, 13, 14, 15];
//   const arr2 = [1, 3, 5, 7, 9];
  
//   const firstEvenInArr = findFirstEven(arr);
//   const firstEvenInArr2 = findFirstEven(arr2);
  
//   console.log("Số chẵn đầu tiên trong mảng arr là: " + firstEvenInArr);
//   console.log("Số chẵn đầu tiên trong mảng arr2 là: " + firstEvenInArr2);

//Bài 20: Tìm số chẵn cuối cùng trong mảng arr = [10,11,12,13,14,15] và arr2 = [1,3,5,7,9]. Nếu không tìm được số chẵn nào in ra -1
function findLastEven(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] % 2 === 0) {
        return arr[i];
      }
    }
    return -1;
  }
  
  const arr = [10, 11, 12, 13, 14, 15];
  const arr2 = [1, 3, 5, 7, 9];
  
  const lastEvenInArr = findLastEven(arr);
  const lastEvenInArr2 = findLastEven(arr2);
  
  console.log("Số chẵn cuối cùng trong mảng arr là: " + lastEvenInArr);
  console.log("Số chẵn cuối cùng trong mảng arr2 là: " + lastEvenInArr2);

