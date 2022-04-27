FROM node  
WORKDIR /thbs-app
COPY . .
RUN npm install
RUN npm run build 

#stage 2
FROM nginx:alpine
COPY --from=node /thbs-app/dist/* /usr/share/nginx/html


