FROM node:16.16.0-alpine
WORKDIR /frontend

COPY ./app/package*.json ./
RUN npm install
COPY ./app .

RUN npx tailwindcss -i ./src/index.css -o ./public/index.css --watch --purge='./src/**/*.{js,ts,jsx,tsx,html}'

EXPOSE 3000
CMD ["npm", "start"]
