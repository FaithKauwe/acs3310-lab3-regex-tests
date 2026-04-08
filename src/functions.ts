// Return the text with repeated whitespace collapsed to single spaces.
// Also remove whitespace from the beginning and end.
// Example:
// collapseSpaces('  Hello   world\n\nfoo  ') -> 'Hello world foo'
export function collapseSpaces(text: string): string {
  return text.replace(/\s+/g, ' ').trim() 
}

// Convert text to kebab-case.
// Lowercase the text, remove punctuation, replace spaces with hyphens,
// and remove extra hyphens from the beginning and end.
// Example:
// toKebabCase('Hello, World!') -> 'hello-world'
export function toKebabCase(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '')
}

// Return the first `maxWords` words from the text.
// If the text has fewer words than the limit, return it unchanged.
// Example:
// firstWords('The quick brown fox jumps', 3) -> 'The quick brown'
export function firstWords(text: string, maxWords: number): string {
  return text.split(' ').slice(0, maxWords).join(' ') // bug: returns one extra word
}

// Return true when text is a valid lowercase phrase.
// A valid lowercase phrase:
// - is not empty after trimming
// - contains only lowercase letters and spaces
// - does not start or end with whitespace
// Example:
// isLowercasePhrase('web dev') -> true
// isLowercasePhrase('JavaScript') -> false
export function isLowercasePhrase(text: string): boolean {
  return /^[a-z]+( [a-z]+)*$/.test(text)
}


// Count the number of words in the text.
// Words are separated by one or more whitespace characters.
// Example:
// countWords('one two three') -> 3

export function countWords(text: string): number {
  const trimmed = text.trim()
  if (trimmed === '') return 0
  return trimmed.split(/\s+/).length
}