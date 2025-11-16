# TypeScript Concepts: any, unknown, never, Union & Intersection Types

## 📌 any, unknown & never টাইপের পার্থক্য (Your Provided Text)

### ------------any------------

1. `any` টাইপ দিয়ে আপনি TypeScript কে বলবেন, “এই ভ্যারিয়েবল এর টাইপ যেকোনো হতে পারে, আমাকে type-check করার দরকার নেই।”
2. এটি type-safety ভেঙে দেয়, তাই খুব সতর্কভাবে ব্যবহার করতে হবে।
3. ```ts
   let data: any;
   data = 10;
   data = "Shihab";
   data = true;
   ```

---

### ------------unknown------------

1. `unknown` টাইপ হচ্ছে type-safe `any`।
2. কোনো value কে `unknown` টাইপে assign করা যায়, কিন্তু তার উপর operations করার আগে type-check করতে হবে।
3. ```ts
   let data: unknown;
   data = 10;
   data = "Shihab";

   if (typeof data === "string") {
     console.log(data.toUpperCase());
   }
   ```

---

### ------------never------------

1. `never` টাইপ ব্যবহার হয় সেই ফাংশনের জন্য যা কখনো return করে না বা সবসময় error throw করে।
2. যেমন infinite loop বা exception throw করা।
3. ```ts
   function errorFunction(msg: string): never {
     throw new Error(msg);
   }

   function infiniteLoop(): never {
     while (true) {}
   }
   ```

---

### ------------সারসংক্ষেপ------------

* `any` = type-check বাদ দেয়
* `unknown` = type-safe any
* `never` = কখনো return করবে না

---

## 📌 Union & Intersection Types (Your Provided Text)

### Union Type (|):

Union টাইপ বলতে বোঝায় — একটি ভ্যারিয়েবল একটি টাইপ অথবা অন্য একটি টাইপ হতে পারে। 👉 এটি “OR” সম্পর্ক বোঝায়।

```ts
type Id = string | number;

function printId(id: Id) {
  console.log("Your ID is:", id);
}

printId(101);
printId("A-2025");
```

➡️ `Id` টাইপে value string অথবা number যেকোনোটি হতে পারে।
➡️ এটি আমাদের flexibility দেয়, যা API বা dynamic input এর ক্ষেত্রে কাজে লাগে।

---

### Intersection Type (&):

Intersection টাইপ বোঝায় — একটি ভ্যারিয়েবল একাধিক টাইপের সব প্রপার্টি একসাথে পাবে। 👉 এটি “AND” সম্পর্ক বোঝায়।

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Shihab",
  age: 25,
  employeeId: 1001,
  department: "Engineering",
};
```

➡️ `Staff` টাইপটি `Person` & `Employee` এর সব প্রপার্টি combine করেছে।
➡️ এখন object তৈরির সময় সব property থাকতে হবে।
➡️ Intersection type multiple inheritance এর মতো কাজ করে।

---

## 👨‍💻 Author

**MD Shihab Shamim**

💡 All text arranged using your original content.
