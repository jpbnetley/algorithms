// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters in the same quantity.
// Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case.

const anagram1 = (strA, strB) => {
  // we are going to use RegExp to get rid of spaces and exclamation marks.
  const modified_strA = strA.replace(/[^\w]/g, '').toLowerCase()
  const modified_strB = strB.replace(/[^\w]/g, '').toLowerCase()

  let charMapA = {}
  let charMapB = {}

  for (let char of modified_strA) {
    charMapA[char] = charMapA[char] + 1 || 1
  }
  for (let char of modified_strB) {
    charMapB[char] = charMapB[char] + 1 || 1
  }

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false

  for (let char in charMapA) {
    if (!charMapB[char] || charMapA[char] !== charMapB[char]) return false
  }

  return true
}

const anagram2 = (strA, strB) => {
  if (strA.length !== strB.length) return false

  // we are going to use RegExp to get rid of spaces and exclamation marks.
  const modified_strA = strA.replace(/[^\w]/g, '').toLowerCase()
  const modified_strB = strB.replace(/[^\w]/g, '').toLowerCase()
  let charMapA = {}
  let charMapB = {}

  for (let char of modified_strA) {
    charMapA[char] = charMapA[char] + 1 || 1
  }

  for (let char of modified_strB) {
    charMapB[char] = charMapB[char] + 1 || 1
  }

  for (let char in charMapA) {
    if (!charMapB[char] || charMapA[char] !== charMapB[char]) {
      return false
    }
  }
  return true
}

// You can also solve this by using a helper function, like this:

const buildCharMap = (str) => {
  const charMap = {}
  const modifiedStr = str.replace(/[^\w]/g, '').toLowerCase()
  for (let char of modifiedStr) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

const anagram3 = (strA, strB) => {
  if (strA.length !== strB.length) return false

  // we are going to use RegExp to get rid of spaces and exclamation marks.
  const charMapA = buildCharMap(strA)
  const charMapB = buildCharMap(strB)

  for (let char in charMapA) {
    if (!charMapB[char] || charMapA[char] !== charMapB[char]) return false
  }
  return true
}

// You can do the same thing without character mapping by sorting the characters and comparing them.

const sortString = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

const anagram4 = (strA, strB) => sortString(strA) === sortString(strB)

module.exports = anagram4
