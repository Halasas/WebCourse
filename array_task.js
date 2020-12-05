/*function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
      
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
 }

let array = Array.from({length:1000}, (v, k) => Math.ceil(Math.random()*1000))

let sortedArray = quickSort(array);

let mid = sortedArray[sortedArray.length / 2],
    min = Math.min.apply(null, array),
    max = Math.max.apply(null, array);

console.log(min, max, mid)
console.log(sortedArray)

let tags = Array.from(document.querySelectorAll('*'), x => x.nodeName);
let uniqueTags = tags.filter((v, i) => tags.indexOf(v) === i);
uniqueTags.forEach(elm => console.log(elm + ' : ' + document.querySelectorAll(elm).length))*/