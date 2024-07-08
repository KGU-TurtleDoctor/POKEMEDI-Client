FROM node:lts as build

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
