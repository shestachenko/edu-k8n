import express from "express";

const hostname = "0.0.0.0";
const port = Number(process.env.PORT || 3000);

const app = express();

app.get("/healthz", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.get("*", (req, res) => {
  res.status(200).type("html").send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome</title>
    <style>
      :root { color-scheme: light dark; }
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; margin: 0; }
      main { min-height: 100vh; display: grid; place-items: center; padding: 24px; }
      .card { max-width: 720px; width: 100%; border: 1px solid rgba(127,127,127,.35); border-radius: 12px; padding: 20px 18px; }
      h1 { margin: 0 0 8px; font-size: 28px; }
      p { margin: 0 0 12px; line-height: 1.5; opacity: .9; }
      code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
      .meta { display: grid; gap: 6px; }
    </style>
  </head>
  <body>
    <main>
      <section class="card">
        <h1>Welcome!</h1>
        <p>This is a super simple Node.js app.</p>
        <div class="meta">
          <div>Path: <code>${escapeHtml(req.url || "/")}</code></div>
          <div>Host: <code>${escapeHtml(req.headers.host || "")}</code></div>
          <div>PORT: <code>${escapeHtml(String(port))}</code></div>
        </div>
        <p style="margin-top: 14px; opacity: .8">Health check: <code>/healthz</code></p>
      </section>
    </main>
  </body>
</html>`);
});

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}/`);
});

function escapeHtml(value: unknown) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

