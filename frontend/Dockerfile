# Base Image
FROM node:18

# Arbeitsverzeichnis setzen
WORKDIR /app

# Dependencies kopieren und installieren
COPY package*.json ./
RUN npm install

# Rest des Codes kopieren
COPY . .

# Port öffnen und starten
EXPOSE 3000
CMD ["npm", "run", "dev"]
