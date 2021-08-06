// Tự nghĩ ra 1 mảng trong thực tế.
var colors = [ 'red', 'green', 'black', 'blue', 'white']
for (var i = 0; i < colour.length; i ++) {
  console.log(colours[i])
}

// In ra các phần tử trong mảng theo đúng thứ tự bằng 2 cách và ngược thứ tự bằng cách 1
var colors = [ 'red', 'green', 'black', 'blue', 'white'];
for (var i = 0; i < colours.length; i ++) {
    console.log(colours[i])
}

var colors = ['red', 'green', 'black ', 'blue', 'white'];
for (var color of colors) {
  console.log(colors)
}

var colors = ['red', 'green', 'black', 'blue', 'white'];
for (var i = colors.length; i >= 0; i--) {
  console.log(colors[i])
}

// Thêm 1 phần tử mới vào mảng. (mới)
const colors = [ 'red', 'green', 'black', 'blue', 'white'];
colors.push('purple');
console.log(colors)

// Xóa 1 phần tử trong mảng ở vị trí đầu tiên.
const colors = ['red', 'green', 'black', 'blue', 'white']
colors.shift('red')
console.log(colors)
colors.slice(1)
console.log(colors)

// Xóa 1 phần tử trong mảng ở vịt trí cuối cùng.
const colors = [ 'red', 'green', 'black', 'blue', 'white']
colors.pop('white')
console.log(colors)


// Nghĩ thêm 1 mảng khác
OS = [ 'Windows', 'macOS', 'Linux']

// Hợp nhất (merge) 2 mảng lại với nhau. In ra tất cả các phần tử ở mảng hợp nhất.
const colors = [ 'red', 'green', 'black', 'blue', 'white'];
const OS = [ 'Windows', 'macOS', 'Linux'];
const all = colors.concat(OS);
console.log(all);
