# Lesson 03 App

Super simple Node.js HTTP server with a welcome page.

## Run locally

```bash
npm install
npm run build
npm start
```

Then open `http://localhost:3000`.

## Endpoints

- `GET /` - welcome HTML page
- `GET /healthz` - basic health check (`{ "ok": true }`)

## Docker

Build from the repository root:

```bash
docker build -t lesson-03-welcome -f lesson-03/Dockerfile lesson-03
docker run --rm -p 3000:3000 lesson-03-welcome
```

Then open `http://localhost:3000`.

