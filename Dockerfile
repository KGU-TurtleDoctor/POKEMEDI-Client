FROM node:lts as build

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY /etc/letsencrypt/live/pokemedi.shop/fullchain.pem /etc/nginx/cert.pem
COPY /etc/letsencrypt/live/pokemedi.shop/privkey.pem /etc/nginx/cert.key

COPY /etc/nginx/sites-available/pokemedi.conf /etc/nginx/conf.d/default.conf

EXPOSE 443

CMD [ "nginx", "-g", "daemon off;" ]
