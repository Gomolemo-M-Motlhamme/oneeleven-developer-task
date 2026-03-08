# One Eleven — Developer Task

A Next.js application built as part of the One Eleven developer assessment. It includes a REST API endpoint that sorts a string alphabetically and returns the result as an array, along with a frontend for testing the endpoint against the One Eleven validation service.

**Live Demo:** [https://oneeleven-developer-task.vercel.app/](https://oneeleven-developer-task.vercel.app/)

## What It Does

**API Endpoint** — `POST /api/word_sort`

Receives a string, splits it into characters, sorts them alphabetically, and returns the sorted array.

Request:
```json
{ "data": "example" }
```

Response:
```json
{ "word": ["a", "e", "e", "l", "m", "p", "x"] }
```

**Frontend** — Built with shadcn/ui, a clean form interface that lets you test the endpoint against One Eleven's validation service by entering your email and endpoint URL.

## Getting Started
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Testing the Endpoint Locally

With the dev server running, open a new terminal and run:
```bash
curl -X POST http://localhost:3000/api/word_sort \
  -H "Content-Type: application/json" \
  -d '{"data": "example"}'
```

Expected response:
```json
{ "word": ["a", "e", "e", "l", "m", "p", "x"] }
```

## Testing Against One Eleven's Validator

Once deployed, paste this into your browser:
```
https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task?url=https://oneeleven-developer-task.vercel.app/api/word_sort&email=YOUR_EMAIL
```

Or use the frontend form at [https://oneeleven-developer-task.vercel.app/](https://oneeleven-developer-task.vercel.app/) to do the same thing.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui — used for all UI components including Card, Input, Button, and form fields

## Deployment

Deployed on Vercel. Push to GitHub and import the repository at [vercel.com](https://vercel.com).
