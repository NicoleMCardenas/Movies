# 🎬 PM2 Movies App – Full-Stack CRUD

**Full-stack application built with Express and MongoDB**, featuring a simple movie catalog with dynamic frontend using Vanilla JS and Axios.
Originally developed during the Henry bootcamp, now deployed and maintained independently by **Nicole Morelos Cárdenas**.

---

## 🚀 Live Demo

* **Frontend (Vercel):** [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
* **Backend (Render/Railway):** [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

---

## 🧩 Tech Stack

**Backend**

* Node.js + Express 5
* MongoDB + Mongoose
* dotenv, cors, morgan
* REST endpoints for CRUD (GET/POST movies)

**Frontend**

* HTML5, CSS3, Vanilla JS
* Axios for HTTP requests
* Bundled with Webpack
* Dynamic rendering of movie cards

**Infrastructure**

* MongoDB Atlas
* Vercel (Frontend)
* Render or Railway (Backend)

---

## ⚙️ Quick Start

### Backend

```bash
cd back
cp .env.example .env
npm install
npm run dev
```

**.env**

```
MONGO_URI=mongodb+srv://<user>:<password>@cluster/db
PORT=3000
```

### Frontend

```bash
cd front
npm install
npm run build
```

Open `front/public/index.html` or deploy to Vercel.

---

## 📡 API Endpoints

| Method | Endpoint  | Description        |
| ------ | --------- | ------------------ |
| GET    | `/movies` | Get all movies     |
| POST   | `/movies` | Create a new movie |

Example:

```json
{
  "title": "Inception",
  "director": "Christopher Nolan",
  "year": 2010
}
```

---

## 🧠 Features

* Full CRUD logic ready for expansion
* Clean architecture separating frontend and backend
* Connection to MongoDB Atlas
* CORS enabled for public deploy
* Production-ready scripts and environment setup

---

## 🧰 Deployment Notes

* `vercel.json` rewrites `/api/*` → backend URL
* API logs handled by morgan
* CORS restricted to frontend domain in production

---

## 👩🏻‍💻 Author

**Nicole Morelos Cárdenas**
Full-Stack Developer specialized in **NestJS, TypeScript, and PostgreSQL**, with a marketing & innovation background.
📍 México · [LinkedIn](https://www.linkedin.com/in/nicolemorcar) · [GitHub](https://github.com/NicoleMCardenas)

---

> *“Code, design, and innovation — all in one mindset.”*
