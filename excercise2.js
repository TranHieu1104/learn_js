// Tự nghĩ ra 1 mảng trong thực tế.
colour = [ 'red', 'green', 'black', 'blue', 'white']
console.log(colour[0]);
console.log(colour[1]);
console.log(colour[2]);
console.log(colour[3]);
console.log(colour[4]);

// In ra các phần tử trong mảng theo đúng thứ tự bằng 2 cách và ngược thứ tự bằng cách 1
var colour = [ 'red', 'green', 'black', 'blue', 'white'];
for (var i = 0; i < colour.length; i += 1) {
    console.log(colour[i])
}

var colour = ['red', 'green', 'black ', 'blue', 'white'];
for (var colour of colour) {
  console.log(colour)
}

var colour = ['red', 'green', 'black', 'blue', 'white'];
for (var i = 5; i >= 0; i--) {
  console.log(colour[i])
}

// Thêm 1 phần tử mới vào mảng. (mới)
colour = [ 'red', 'green', 'black', 'blue', 'white', 'purple']

// Xóa 1 phần tử trong mảng ở vị trí đầu tiên.
colour = [ 'green', 'black', 'blue', 'white']

// Xóa 1 phần tử trong mảng ở vịt trí cuối cùng.
colour = [ 'red', 'green', 'black', 'blue']

// Nghĩ thêm 1 mảng khác
OS = [ 'Windows', 'macOS', 'Linux']

// Hợp nhất (merge) 2 mảng lại với nhau. In ra tất cả các phần tử ở mảng hợp nhất.
const colour = [ 'red', 'green', 'black', 'blue', 'white'];
const OS = [ 'Windows', 'macOS', 'Linux'];
const all = colour.concat(OS);
console.log(colour);
console.log(OS);