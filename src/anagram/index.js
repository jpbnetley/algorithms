// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters in the same quantity.
// Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case.

export const anagram1 = (strA, strB) => {
  // we are going to use RegExp to get rid of spaces and exclamation marks.
  const modified_strA = strA.replace(/[^\w]/g, '').toLowerCase()
  const modified_strB = strB.replace(/[^\w]/g, '').toLowerCase()

  const charMapA = [...modified_strA].reduce((acc, letter) => {
    const objectKey = { [letter]: acc[letter] + 1 || 1 }
    return { ...acc, ...objectKey }
  }, {})

  const charMapB = [...modified_strB].reduce((acc, letter) => {
    const objectKey = { [letter]: acc[letter] + 1 || 1 }
    return { ...acc, ...objectKey }
  }, {})

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false

  return Object.keys(charMapA).every(
    (letter) => !charMapA[letter] || charMapB[letter] === charMapB[letter]
  )
}

export const anagram2 = (strA, strB) => {
  if (strA.length !== strB.length) return false

  // we are going to use RegExp to get rid of spaces and exclamation marks.
  const modified_strA = strA.replace(/[^\w]/g, '').toLowerCase()
  const modified_strB = strB.replace(/[^\w]/g, '').toLowerCase()

  const charMapA = [...modified_strA].reduce((acc, letter) => {
    const objectKey = { [letter]: acc[letter] + 1 || 1 }
    return { ...acc, ...objectKey }
  }, {})

  const charMapB = [...modified_strB].reduce((acc, letter) => {
    const objectKey = { [letter]: acc[letter] + 1 || 1 }
    return { ...acc, ...objectKey }
  }, {})

  return Object.keys(charMapA).every(
    (letter) => !charMapB[letter] || charMapA[letter] === charMapB[letter]
  )
}

// You can also solve this by using a helper function, like this:

const buildCharMap = (str) => {
  const modifiedStr = str.replace(/[^\w]/g, '').toLowerCase()

  const charMap = [...modifiedStr].reduce((acc, letter) => {
    const objectKey = { [letter]: acc[letter] + 1 || 1 }
    return { ...acc, ...objectKey }
  }, {})

  return charMap
}

export const anagram3 = (strA, strB) => {
  if (strA.length !== strB.length) return false

  // we are going to use RegExp to get rid of spaces and exclamation marks.
  const charMapA = buildCharMap(strA)
  const charMapB = buildCharMap(strB)

  return Object.keys(charMapA).every(
    (letter) => !charMapB[letter] || charMapA[letter] === charMapB[letter]
  )
}

// You can do the same thing without character mapping by sorting the characters and comparing them.

const sortString = (str) =>
  str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')

export const anagram4 = (strA, strB) => sortString(strA) === sortString(strB)
