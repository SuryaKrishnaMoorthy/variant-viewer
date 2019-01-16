# stage: 1 - build environment
FROM node:8 as react-build
WORKDIR /app
COPY . ./

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g
RUN npm run build
# start app
CMD ["npm", "start"]

# stage: 2 — the production environment
FROM nginx:alpine
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD [“nginx”, “-g”, “daemon off;”]