FROM node
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY ./src ./src
RUN npm install
RUN npm run build
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "run", "start:prod"]
