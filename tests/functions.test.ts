import { describe, it, expect } from 'vitest'
import {
  collapseSpaces,
  toKebabCase,
  firstWords,
  isLowercasePhrase,
  countWords,
} from '../src/functions'

// Your job in this lab:
// Read the function documentation in src/functions.ts
// Then write tests that prove the implementations do NOT match the documented behavior.
// These placeholder tests pass now, but they do not test anything useful.
// Replace them with real tests.

// export function collapseSpaces(text: string): string {
//   return text.replace(/\s+/g, ' ') // bug: does not trim
// }

describe('collapseSpaces', () => {
  it('should collapse repeated spaces to a single space', () => {
    expect(collapseSpaces('Hello   world')).toBe('Hello world')
  })

  it('should remove leading and trailing whitespace', () => {
    expect(collapseSpaces('  Hello   world  ')).toBe('Hello world')
  })

  it('should collapse tabs and newlines to a single space', () => {
    expect(collapseSpaces('Hello\n\nworld\tfoo')).toBe('Hello world foo')
  })
})

// Convert text to kebab-case.
// Lowercase the text, remove punctuation, replace spaces with hyphens,
// and remove extra hyphens from the beginning and end.
// Example:
// toKebabCase('Hello, World!') -> 'hello-world'
// export function toKebabCase(text: string): string {
//   return text.toLowerCase().replace(/\s+/g, '-') // bug: leaves punctuation and extra hyphens
// }
describe('toKebabCase', () => {
  it('should lowercase and replace spaces with hyphens', () => {
    expect(toKebabCase('Hello World')).toBe('hello-world')
  })

  it('should remove punctuation', () => {
    expect(toKebabCase('Hello World!')).toBe('hello-world')
  })

  it('should not leave trailing hyphens after removing punctuation', () => {
    expect(toKebabCase('Hello World !')).toBe('hello-world')
  })

  it('should not leave leading hyphens', () => {
    expect(toKebabCase(' Hello World')).toBe('hello-world')
  })

  // Ideas:
  // - uppercase letters should become lowercase
  // - spaces should become hyphens
  // - punctuation should be removed
  // - extra hyphens should not remain at the start or end
})

// Return the first `maxWords` words from the text.
// If the text has fewer words than the limit, return it unchanged.
// Example:
// firstWords('The quick brown fox jumps', 3) -> 'The quick brown'
// export function firstWords(text: string, maxWords: number): string {
//   return text.split(' ').slice(0, maxWords + 1).join(' ') // bug: returns one extra word
// }
describe('firstWords', () => {
  it('should return only the first N words', () => {
    expect(firstWords('The quick brown fox jumps', 3)).toBe('The quick brown')
  })

  it('should return the full string if it is shorter than the limit', () => {
    expect(firstWords('The quick brown fox jumps', 7)).toBe('The quick brown fox jumps')
  })

  it('should return an empty string when maxWords is 0', () => {
    expect(firstWords('The quick brown fox jumps', 0)).toBe('')
  })

  // Ideas:
  // - should return only the first N words
  // - should return the full string if it is shorter than the limit
  // - should return an empty string when maxWords is 0
})


// Return true when text is a valid lowercase phrase.
// A valid lowercase phrase:
// - is not empty after trimming
// - contains only lowercase letters and spaces
// - does not start or end with whitespace
// Example:
// isLowercasePhrase('web dev') -> true
// isLowercasePhrase('JavaScript') -> false
// export function isLowercasePhrase(text: string): boolean {
//   return text.trim().length > 0 // bug: allows uppercase, punctuation, and outer whitespace
// }

describe('isLowercasePhrase', () => {
  it('should return true for a valid lowercase phrase', () => {
    expect(isLowercasePhrase('web dev')).toBe(true)
  })

  it('should reject uppercase letters', () => {
    expect(isLowercasePhrase('JavaScript')).toBe(false)
  })

  it('should reject punctuation and leading/trailing whitespace', () => {
    expect(isLowercasePhrase(' web dev ! ')).toBe(false)
  })

  it('should reject an empty string', () => {
    expect(isLowercasePhrase('')).toBe(false)
  })

  it('should reject a string of only spaces', () => {
    expect(isLowercasePhrase('   ')).toBe(false)
  })

  // Ideas:
  // - valid lowercase phrases should return true
  // - uppercase letters should be rejected
  // - punctuation should be rejected
  // - leading/trailing whitespace should be rejected
  // - empty strings should be rejected
})

// Count the number of words in the text.
// Words are separated by one or more whitespace characters.
// Example:
// countWords('one two three') -> 3
// export function countWords(text: string): number {
//   return text.split(' ').length // bug: breaks on repeated spaces and whitespace-only strings
// }

describe('countWords', () => {
  it('should count words separated by spaces', () => {
    expect(countWords('one two three')).toBe(3)
  })

  it('should handle repeated spaces correctly', () => {
    expect(countWords('one  two  three')).toBe(3)
  })

  it('should return 0 for an empty string', () => {
    expect(countWords('')).toBe(0)
  })

  it('should return 0 for a whitespace-only string', () => {
    expect(countWords('   ')).toBe(0)
  })

  // Ideas:
  // - count words separated by spaces
  // - handle repeated spaces correctly
  // - return 0 for empty string
  // - return 0 for whitespace-only string
})