

function shiftArray(N, array){
  var arrayLentgh = array.length
  var slicearray = array.splice(array.length-N,array.length)
  var finalArray = slicearray.concat(array)
  return finalArray
}

shiftArray(3,[1,2,3,4,5,6,7,8,9]);
shiftArray(4,[1,2,3,4,5,6,7,8,9]);
