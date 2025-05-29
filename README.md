
````markdown
# Blog Assignment – Next.js + Strapi

## ✨ Features

- Built using **Next.js App Router**
- Blog posts fetched from **Strapi v5**
- Supports **Dynamic Zones** (Rich Text, Image Block, Quote Block)
- Dynamic routing for individual blog posts
- Clean, modular, and component-based architecture

---

## 🚀 Getting Started

This project consists of two parts:
## Getting Started

### 🛠 Backend (Strapi)

1. Clone the repo and install dependencies:

   ```bash
   cd blog-backend
   npm install
````

2. Start the Strapi server:

   ```bash
   npm run develop
   ```

3. Ensure Strapi is running at:
   👉 `http://localhost:1337`
   or
   👉 `http://127.0.0.1:1337` (in case `localhost` doesn’t work)

---

**Frontend** – Next.js App (in `blog-frontend`)

---

### 💻 Frontend (Next.js)

1. Go to the frontend folder:

   ```bash
   cd blog-frontend
   ```

2. Create a `.env` file and add this:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:1337/api
   ```

   ⚠️ If you face any issues with `localhost`, try:

   ```env
   NEXT_PUBLIC_API_URL=http://127.0.0.1:1337/api
   ```

3. Install frontend dependencies and start the development server:

   ```bash
   npm install
   npm run dev
   ```

4. Visit the blog at:
   [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
root/
├── nextjs-frontend/
│   ├── app/
│   │   └── blog/
│   │       └── [slug]/
│   ├── components/
│   └── lib/strapi.ts
├── strapi-backend/
```

---

## 🧩 Dynamic Zone Components

* `content.rich-text` → Renders HTML from rich text
* `content.image-block` → Displays an image with alt text
* `content.quote-block` → Shows a quote with attribution

These are rendered dynamically based on the `__component` field in the API response.

---

## 📜 Example API Response

```json
{
  "data": [
    {
      "id": 1,
      "title": "Heaven",
      "author": "Shabbir",
      "slug": "heaven",
      "createdAt": "2025-05-28T12:08:17.923Z"
    }
  ]
}
```

---

## 🙋 Author

**Shabbir**
Built as part of a fullstack blog assignment using Next.js and Strapi v5.