# ACS 3310 — Lab 3: Prove the Bugs with Tests

## Overview

In this lab, you will write **unit tests** for existing string utility functions.

The implementations in `src/functions.ts` are **intentionally incorrect**.

Your job is to:

1. Read the function documentation  
2. Write tests that describe the **correct behavior**  
3. Use those tests to **prove the implementation is wrong**  
4. Fix the functions so all tests pass

> Tests should **fail first**, then pass after you fix the code.

---

## What You’re Given

- `src/functions.ts` — documented functions (with bugs)  
- `tests/functions.test.ts` — a scaffold with placeholder tests (all pass initially)

Functions include:  
- `collapseSpaces`  
- `toKebabCase`  
- `firstWords`  
- `isLowercasePhrase`  
- `countWords`

---

## Your Task

For **each function**:

- Replace the placeholder test with **real tests**  
- Write **at least 2 meaningful tests**  
- Include **at least 1 edge case**

Your tests must:  
- reflect the **documented behavior** (not the current implementation)  
- **fail** with the current buggy code  
- **pass** after you fix the implementation

---

## Examples of What to Test

Think in terms of:

- **Normal cases** — typical input  
- **Edge cases** — empty strings, extra spaces, punctuation  
- **Validation rules** — casing, trimming, allowed characters

If your tests never fail, they are not useful.

---

## Workflow

1. Read a function’s documentation in `src/functions.ts`  
2. Write tests in `tests/functions.test.ts`  
3. Run tests:

```bash
npm test
```

4. Observe failures  
5. Fix the function  
6. Re-run tests until all pass

---

## Setup

```bash
git clone <your-repo-url>
cd ACS-3310-Lab-3
npm install
npm test
```

---

## Definition of Done

- Tests written for every function  
- Each function has **2+ meaningful tests** and **1+ edge case**  
- Tests **fail first**, then pass after fixes  
- All tests pass (`npm test`)  
- Changes pushed to GitHub

---

## Tips

- Don’t fix code until tests fail  
- Test what the function **should do**, not what it does now  
- Prefer small, focused tests  
- Use edge cases to reveal bugs

---

## Submission

```bash
git add .
git commit -m "complete lab 3"
git push
```

---

## Reminder

You are not just fixing code.

You are writing tests that **prove the implementation is wrong**, then using them to verify your fix.