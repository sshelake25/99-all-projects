FROM node  
WORKDIR /thbs-app
COPY . .
RUN npm install
RUN npm run build 

#stage 2
FROM base AS prodbuild
FROM nginx:alpine
COPY --from=prodbuild /thbs-app/dist/* /usr/share/nginx/html


