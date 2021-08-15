// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.

export function arrChunk1(arr, size) {
  const chunkedArr = []
  let subChunk = []
  for (let element of arr) {
    if (subChunk.length === size) {
      chunkedArr.push(subChunk)
      subChunk = []
    }
    subChunk.push(element)
  }
  chunkedArr.push(subChunk)
  return chunkedArr
}

export function arrChunk2(arr, size) {
  const chunked = []
  for (let el of arr) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === size) {
      chunked.push([el])
    } else {
      last.push(el)
    }
  }
  return chunked
}

export function arrChunk3(arr, size) {
  const chunked = []
  let index = 0

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size))
    index = index + size
  }
  return chunked
}
