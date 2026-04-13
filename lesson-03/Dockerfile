FROM node:18-alpine AS build

WORKDIR /app

COPY app/package.json app/package-lock.json ./
RUN npm ci

COPY app/ ./
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build --chown=app:app /app/dist ./dist

EXPOSE 3000

RUN adduser -S app
USER app

CMD ["node", "dist/server.js"]

