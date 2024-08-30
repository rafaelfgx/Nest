FROM node:alpine
WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install
COPY ./src ./src
RUN npm run build
EXPOSE 3000
ENV NODE_ENV production
CMD ["node", "dist/main.js"]
