# ReactJS-POC
React.js Proof of Concept 

# Parcel
Parcel builds, watches, and optimizes your project automatically, so you don’t have to manually do all that work. It’s fast and almost zero-config.
-> Parcel is a tool that builds and serves your web app. Think of it like a smart helper that:
-> Combines all your files (JS, CSS, images) into bundles your browser can understand.
-> Watches your files: if you change something, it automatically updates the browser.
-> Optimizes your app for production: makes files smaller, faster, and ready for users.

# Key Features of Parcel 
- Dev Build → Fast version for development, easier debugging.
- Local Server → Opens your project in the browser at localhost.
- HMR - Hot Module Replacement → Updates only the changed part in the browser without reloading the page.
- File Watching Algorithm - written in C++ → Keeps track of changes and rebuilds only what’s needed → faster.
- Caching - Faster Builds
- Image Optimization → Makes images smaller automatically.
- Minification → Removes extra spaces/comments → smaller files.
- Bundling → Combines multiple files into one (or a few) bundles.
- Compress
- Consistent Hashing
- Code Splitting → Loads only what the user needs → faster page load.
- Differential Bundling - (support older browsers) → Creates separate versions for old browsers and modern browsers.
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking → Removes unused code → smaller final bundle.
- Different dev and prod bundles → Dev: readable and fast; Prod: optimized and small.


# npm and npx difference

## 1️⃣ npm (Node Package Manager)
- Purpose: Manages packages (installing, updating, removing) for your Node.js projects.
- Usage: Install dependencies locally or globally, run scripts defined in package.json.

## 2️⃣ npx (Node Package Executor)
- Purpose: Executes Node packages without installing them globally.
- Key feature: You can run a package directly from npm even if it isn’t installed locally or globally.


# Food Site

## Header
- Logo
- Menu
## Body
- Search 
- Restaurant Container
-- Restaurant Card
--- Image
--- Name of restaurant, star rating, cusine
## Footer
- Copyright
- Links
- Address
- Contact

**types of exports and imports in JavaScript (ES6 modules)** 
- There are **two main types**: **named** and **default**.

## **1️⃣ Named Exports**

You can export multiple values from a file using **named exports**.

**Example: `utils.js`**

```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

**Importing named exports**

```javascript
import { add, subtract } from "./utils.js";

console.log(add(5, 3));       // 8
console.log(subtract(5, 3));  // 2
```

**Key points:**

* Curly braces `{ }` are required.
* You can rename while importing:

```javascript
import { add as sum } from "./utils.js";
console.log(sum(2, 3)); // 5
```


## **2️⃣ Default Exports**

Each file can have **one default export**. Useful for exporting **one main thing** from a file.

**Example: `math.js`**

```javascript
const multiply = (a, b) => a * b;
export default multiply;
```

**Importing default export**

```javascript
import multiply from "./math.js";

console.log(multiply(4, 5)); // 20
```

**Key points:**

* No curly braces `{ }` needed.
* You can give it **any name** while importing.

---

## **3️⃣ Combining Named & Default Exports**

A file can have **both default and named exports**:

```javascript
// helpers.js
export const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;
export default modulo;
```

**Importing both:**

```javascript
import modulo, { divide } from "./helpers.js";

console.log(modulo(10, 3)); // 1
console.log(divide(10, 2)); // 5
```

---

## **4️⃣ Dynamic Imports (Lazy Loading)**

You can import a module **on demand** using `import()`:

```javascript
button.addEventListener("click", async () => {
  const module = await import("./heavyModule.js");
  module.doSomething();
});
```

* Useful for **code splitting** and improving performance.

✅ **Summary Table:**

| Export Type    | Syntax                | Import Syntax                | Notes                               |
| -------------- | --------------------- | ---------------------------- | ----------------------------------- |
| Named Export   | `export const x = 5;` | `import { x } from './file'` | Multiple exports allowed, use `{}`  |
| Default Export | `export default x;`   | `import x from './file'`     | Only one per file, name is flexible |
| Dynamic Import | `import('./file.js')` | `const mod = await import()` | Async import for lazy loading       |


# What are Hooks?
- Hooks are special functions in React that let you “hook into” React features (like state, lifecycle, context) in functional components.



# ⚛️ React Internals: Fiber, Reconciliation & Diffing

### 🔹 React Fiber
- React Fiber is the **new reconciliation engine** (introduced in React 16).
- It breaks rendering work into **small units of work (fibers)**.
- Supports **pausing, resuming, and reusing** work.
- Allows React to **prioritize important updates** (like user input) over less urgent ones.
- Goal: **Smooth rendering & better performance** for complex UIs.

---

### 🔹 Reconciliation
- Reconciliation is the process React uses to **determine what changed** in the UI when state or props update.
- Instead of updating the entire DOM, React compares the **Virtual DOM (VDOM)** trees and applies minimal changes.
- Example: Updating 1 item in a list of 1000 → only that item is updated in the real DOM.

---

### 🔹 Diffing Algorithm
React uses a set of rules to compare old VDOM with new VDOM:

1. **Element Type Check**
   - If element types are different → destroy old node & create a new one.
2. **Same Type**
   - Update only changed attributes/props.
3. **Children**
   - By default, children are compared **in order**.
   - Using **unique `key` props** helps React efficiently re-use and move DOM nodes instead of re-rendering them all.

---

### ✅ Summary
- **Fiber** → Breaks work into small chunks; enables scheduling and prioritization.  
- **Reconciliation** → Figures out what changed in the Virtual DOM.  
- **Diffing Algorithm** → Efficiently compares old vs new VDOM and updates only what’s needed.  
