# Netflix UI Clone

[Live Demo](https://clone-netflix-ui-eta.vercel.app)

## 🔍 Overview

A custom-built Netflix prototype using React, Redux Toolkit, Firebase for authentication, and Express + MongoDB for backend. The UI and routing are implemented manually with full control over styling and functionality.

## 🚀 Features

### Frontend (`netflix-ui`)
- Firebase Authentication (Login / Signup)
- User profile redirects to home screen
- Client-side routing: `/`, `/login`, `/signup`, `/movies`, `/tv`, `/player`, `/mylist`
- Netflix-style interface: **Hero banner**, sliders, navigation
- State management with Redux Toolkit
- Responsive layout, autoplay video previews on hover, custom styles via Styled‑Components

### Backend (`netflix-api`)
- Express server with MongoDB (local or Atlas)
- Custom API endpoints (`/api/user`) for registration and login
- Easily extendable for user movie lists and favorites

## 🛠 Tech Stack

| Layer        | Technologies                                  |
|--------------|-----------------------------------------------|
| Frontend     | React, React Router v6, Redux Toolkit, Styled‑Components |
| Auth         | Firebase Authentication                       |
| Backend      | Node.js, Express, MongoDB, Mongoose           |
| Deployment   | Vercel (frontend), Render/Railway (backend)   |

## 📁 Project Structure
Clone-Netflix/
├── netflix-ui/ # React frontend
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── …
└── netflix-api/ # Express + MongoDB backend
├── routes/
├── models/
├── package.json
├── server.js


## ⚙️ Getting Started (Local Setup)

### Clone the repository:

```bash
git clone <repo-url>
cd Clone-Netflix
