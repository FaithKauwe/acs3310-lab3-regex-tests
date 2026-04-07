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

describe('collapseSpaces', () => {
  it('write tests that prove collapseSpaces does not match its documentation', () => {
    expect(true).toBe(true)
  })

  // Ideas:
  // - repeated spaces should collapse to one space
  // - leading/trailing whitespace should be removed
  // - tabs and newlines should be handled
})

describe('toKebabCase', () => {
  it('write tests that prove toKebabCase does not match its documentation', () => {
    expect(true).toBe(true)
  })

  // Ideas:
  // - uppercase letters should become lowercase
  // - spaces should become hyphens
  // - punctuation should be removed
  // - extra hyphens should not remain at the start or end
})

describe('firstWords', () => {
  it('write tests that prove firstWords does not match its documentation', () => {
    expect(true).toBe(true)
  })

  // Ideas:
  // - should return only the first N words
  // - should return the full string if it is shorter than the limit
  // - should return an empty string when maxWords is 0
})

describe('isLowercasePhrase', () => {
  it('write tests that prove isLowercasePhrase does not match its documentation', () => {
    expect(true).toBe(true)
  })

  // Ideas:
  // - valid lowercase phrases should return true
  // - uppercase letters should be rejected
  // - punctuation should be rejected
  // - leading/trailing whitespace should be rejected
  // - empty strings should be rejected
})

describe('countWords', () => {
  it('write tests that prove countWords does not match its documentation', () => {
    expect(true).toBe(true)
  })

  // Ideas:
  // - count words separated by spaces
  // - handle repeated spaces correctly
  // - return 0 for empty string
  // - return 0 for whitespace-only string
})