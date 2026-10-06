# Raju Yarragoti — Portfolio

Personal portfolio website built with the MERN stack (React frontend + Node/Express backend).
It showcases my work experience, tech stack, projects and education, and includes a contact form that emails me directly.

## Features

- **Single-page layout** with smooth scrolling between sections (Home, About, Work Experience, Tech Stack, Projects, Education, Contact)
- **Light / dark theme** toggle
- **Responsive design** with a dedicated mobile navigation menu
- **Animations** with Framer Motion — sections animate as they scroll into view
- **Typewriter effect** on the hero section
- **Downloadable resume** and WhatsApp "Hire Me" button
- **Contact form** that sends emails via Nodemailer (Gmail), with:
  - Server-side validation and HTML escaping
  - Rate limiting (5 messages per 15 minutes per IP)
  - Loading state to prevent duplicate submissions

## Tech Stack

| Layer    | Technologies |
| -------- | ------------ |
| Frontend | React 18, Bootstrap 5, Framer Motion, React Scroll, React Icons, React Toastify, React Vertical Timeline, Axios |
| Backend  | Node.js, Express, Nodemailer, express-rate-limit, dotenv |

## Project Structure

```
pro/
├── server.js                 # Express server (API + serves React build)
├── routes/portfolioRoute.js  # POST /api/v1/portfolio/sendEmail
├── controllers/              # Email sending logic
└── client/                   # React app (this folder)
    ├── public/
    └── src/
        ├── components/       # Navbar, MobileNav, Layout
        ├── pages/            # Home, About, WorkExp, Techstack, Projects, Education, Contact
        ├── context/          # Theme context (light/dark)
        ├── utils/            # Tech stack data
        └── assets/           # Images and resume
```

## Getting Started

### Prerequisites

- Node.js 18+
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833) for sending emails

### 1. Install dependencies

```bash
# in the root folder (server)
npm install

# in the client folder
cd client
npm install
```

### 2. Configure environment variables

Create a `.env` file in the **root** folder:

```env
PORT=8001
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
DEST_EMAIL=where-messages-should-go@gmail.com
```

Create a `.env` file in the **client** folder:

```env
REACT_APP_API_URL=/api/v1/portfolio
```

### 3. Run in development

```bash
# terminal 1 — root folder: start the API on port 8001
npm start

# terminal 2 — client folder: start React on port 3000 (proxies /api to 8001)
npm start
```

Open http://localhost:3000

### 4. Run in production mode

```bash
cd client
npm run build      # outputs to client/build
cd ..
node server.js     # serves the build and the API on http://localhost:8001
```

## API

`POST /api/v1/portfolio/sendEmail`

```json
{ "name": "John", "email": "john@example.com", "msg": "Hello!" }
```

| Status | Meaning |
| ------ | ------- |
| 200    | Email sent |
| 400    | Missing fields, invalid email, or input too long |
| 429    | Too many requests — try again later |
| 500    | Email could not be sent |

## Contact

- GitHub: [rajuyarragoti9](https://github.com/rajuyarragoti9)
- LinkedIn: [Raju Yarragoti](https://www.linkedin.com/in/raju-yarragoti-4a655315a/)
- Email: rajuyarragoti@gmail.com
