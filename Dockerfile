# Etapa 1: Build do projeto usando Node.js
FROM node:18 AS build
# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências com CI para uma instalação limpa e mais rápida
RUN npm ci

# Copiar o código-fonte para o container
# (Esse comando copia TODOS os arquivos, incluindo arquivos que o vite.config.ts possa precisar)
COPY . .

# Listar arquivos para debug (opcional)
RUN ls -la

# Verificar o conteúdo do vite.config.ts para debug (opcional)
RUN cat vite.config.ts || echo "vite.config.ts não encontrado"

# Rodar o build do Vite com mais logs para debug
RUN npm run build -- --debug

# Etapa 2: Rodar o servidor para os arquivos estáticos
FROM node:18-alpine AS production
# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de build do estágio anterior
COPY --from=build /app/dist /app/dist

# Instalar o servidor para servir os arquivos estáticos
RUN npm install -g serve

# Expor a porta 444
EXPOSE 444

# Rodar o servidor de arquivos estáticos
CMD ["serve", "-s", "dist", "-l", "444"]