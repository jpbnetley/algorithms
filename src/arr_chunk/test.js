import { arrChunk1, arrChunk2, arrChunk3 } from './index'

const executeTest = (chunk) => {
  test('function chunk exists', () => {
    expect(typeof chunk).toEqual('function')
  })

  test('chunk divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const chunked = chunk(arr, 2)

    expect(chunked).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ])
  })

  test('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3]
    const chunked = chunk(arr, 1)

    expect(chunked).toEqual([[1], [2], [3]])
  })

  test('chunk divides an array of 7 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const chunked = chunk(arr, 3)

    expect(chunked).toEqual([[1, 2, 3], [4, 5, 6], [7]])
  })

  test('chunk divides an array of 18 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    const chunked = chunk(arr, 5)

    expect(chunked).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18],
    ])
  })
}

describe('chunk should pass', () => executeTest(arrChunk1))
describe('chunk 1 should pass', () => executeTest(arrChunk2))
describe('chunk 2 should pass', () => executeTest(arrChunk3))
