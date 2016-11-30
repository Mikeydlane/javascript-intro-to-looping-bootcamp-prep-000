

function forLoop(arr) {
  for (var i = 0; i < 25; i++) {
    if (i === 1){
      arr.push("I am 1 strange loop.")
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr;
}

function whileLoop(num){
  while (num > 0) {
    console.log(--num);
  }
  return 'done';
}

function doWhileLoop(array){
  do {
    array.shift()
  } while (maybeTrue() || array.length > 0);
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5;
}
