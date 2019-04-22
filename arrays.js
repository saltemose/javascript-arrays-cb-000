var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  new_array = [element, ...array]
  new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push(element)
}
