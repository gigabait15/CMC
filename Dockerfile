# Билд фронтенда
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
RUN npm run build

# Билд бэкенда
FROM python:3.12-slim AS backend-build
WORKDIR /app
COPY backend/req.txt ./
RUN pip install --no-cache-dir -r req.txt
COPY backend/ /app/backend

# Финальный образ для продакшена
FROM python:3.12-slim
WORKDIR /app

# Копируем бэкенд
COPY --from=backend-build /app /app

# Устанавливаем зависимости, включая uvicorn
RUN pip install --no-cache-dir -r /app/backend/req.txt

# Копируем статические файлы фронтенда из dist
COPY --from=frontend-build /app/frontend/dist /app/frontend/dist

# Экспонируем порты для FastAPI и Vite
EXPOSE 8000
EXPOSE 5173

# Команда для запуска бэкенда
CMD ["uvicorn", "backend.src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
