# Etapa 1: Build do projeto usando Node.js
FROM node:18 AS build

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependências e instalar
COPY package*.json ./
RUN npm install

# Copiar o código-fonte para o container
COPY . .

# Rodar o build do Vite (versão de produção)
RUN npm run build

# Etapa 2: Rodar o servidor do Vite
FROM node:18 AS production

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de build do estágio anterior
COPY --from=build /app/dist /app/dist

# Instalar o servidor para servir os arquivos estáticos
RUN npm install -g serve

# Expor a porta 5000 (ou qualquer porta que você queira usar)
EXPOSE 443

# Rodar o servidor de arquivos estáticos
CMD ["serve", "-s", "dist", "-l", "443"]
