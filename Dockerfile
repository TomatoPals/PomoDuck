FROM node:lts-alpine3.10 as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json /usr/src/app/
RUN npm install react-scripts -g --silent
RUN npm install 
COPY . /usr/src/app
RUN npm run build
FROM nginx:1.19.7-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]clear