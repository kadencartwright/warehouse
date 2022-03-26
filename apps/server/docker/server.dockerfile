FROM node:16
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm --global install pnpm
COPY ["package.json","package-lock.json*","./"]
COPY . .
RUN pnpm install -g @nestjs/cli
RUN pnpm install
