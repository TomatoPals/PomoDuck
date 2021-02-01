### STAGE 1: Build ###
FROM node:15.7.0-alpine3.10 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm install --silent --production
RUN npm install react-scripts -g --silent
COPY . /app
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.19.6-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENV NODE_ENV production
CMD ["nginx", "-g", "daemon off;"]clear
