# Etapa de construcción
FROM node:16-alpine AS build

WORKDIR /app

# Instala las dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto del código
COPY . .

# Construye la aplicación Angular
RUN npm run build

# Etapa de producción
FROM nginx:alpine

COPY --from=build /app/dist/inventario-front /usr/share/nginx/html

# Copia el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4201

CMD ["nginx", "-g", "daemon off;"]