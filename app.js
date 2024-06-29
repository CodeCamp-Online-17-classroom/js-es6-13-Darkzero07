// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]; //เป็นการใช้ array destructuring อ้างอิงค่าใน  numbers จากนั้นทำการสลับค่าของ indexที่ 1 กับ 2
console.log(numbers); // [ 10, 30, 20 ]