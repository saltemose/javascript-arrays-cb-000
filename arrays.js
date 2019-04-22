var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  new_array = [element, ...array]
  new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  new_array = array.push(element)
  new_array

}
