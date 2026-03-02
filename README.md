# 🎬 HypeLens UI

A React frontend that consumes a NestJS API to display a video gallery with a special highlight for the top-hyped video.

---

## 🚀 Features

- **hype-lens-ui** — Videos displayed in a responsive grid.
- **👑 La Joya de la Corona** — The video with the highest Hype score gets a special treatment: larger card, glowing border, and a crown badge.
- **Loading State** — Animated pulse skeleton shown while fetching data from the API.
- **Error Handling** — User-friendly error message displayed if the request fails.

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Stiven-Chacon/hype-lens-ui
cd hype-lens-ui

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## ⚙️ Configuration

Create a `.env` file in the root of the project:

```env
VITE_API_URL=http://localhost:3000/api
```

> Make sure your NestJS backend is running on the configured port.

---

## 🔗 Repositorios relacionados

| Repo | Descripción |
|---|---|
| [`hype-lens-api`](https://github.com/Stiven-Chacon/hype-lens-api) | Este repositorio — Backend NestJS |
| [`hype-lens-ui`](https://github.com/Stiven-Chacon/hype-lens-ui) | Frontend React + Tailwind |
