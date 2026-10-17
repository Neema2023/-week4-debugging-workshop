# Exercise 1: Six Broken Snippets

## Snippet 1: Greeting

**Error type:** ReferenceError

**What it means:** JavaScript cannot find the variable because its name was written incorrectly. JavaScript is case-sensitive.

**Original code:**
```javascript
console.log("Welcome, " + studentname)
```

**Fix:**
```javascript
console.log("Welcome, " + studentName)
```

## Snippet 2: Shouting

**Error type:** TypeError

**What it means:** `toUppercase()` is not a valid string method. The correct method is `toUpperCase()`.

**Original code:**
```javascript
console.log(city.toUppercase())
```

**Fix:**
```javascript
console.log(city.toUpperCase())
```

## Snippet 3: Page title

**Error type:** TypeError

**What it means:** The selector uses the wrong ID, so `querySelector()` returns `null`. JavaScript cannot set `textContent` on `null`.

**Original code:**
```javascript
const title = document.querySelector("#page-titel")
title.textContent = "My Tasks"
```

**Fix:**
```javascript
const title = document.querySelector("#page-title")
title.textContent = "My Tasks"
```

## Snippet 4: Score counter

**Error type:** TypeError

**What it means:** A variable declared with `const` cannot be reassigned.

**Original code:**
```javascript
const score = 0
score = score + 10
```

**Fix:**
```javascript
let score = 0
score = score + 10
```

## Snippet 5: Shopping list

**Error type:** SyntaxError

**What it means:** A comma is missing between two array items, so JavaScript cannot parse the code correctly.

**Original code:**
```javascript
const fruits = ["mango", "avocado" "banana"]
```

**Fix:**
```javascript
const fruits = ["mango", "avocado", "banana"]
```

## Snippet 6: Countdown

**Error type:** RangeError

**What it means:** The function calls itself repeatedly without a stopping condition. This eventually exceeds the maximum call stack size.

**Original code:**
```javascript
function countdown(n) {
  console.log(n)
  countdown(n - 1)
}
countdown(5)
```

**Fix:**
```javascript
function countdown(n) {
  if (n < 1) return

  console.log(n)
  countdown(n - 1)
}
countdown(5)
```