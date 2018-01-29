const app = "I don't do much."

function Arrays() {
  return ['Milo', 'Otis', 'Garfield']
}

var kittens =  ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(arr, newElem) {
  arr.push(newElem)
  return arr
}