FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4433
CMD ["node", "index.js"]


# docker build -t node-express .
# docker run -p 4444:4433 -e PORT=4433 -e CITY=Vancouver node-express