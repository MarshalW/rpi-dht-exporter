FROM node:18-alpine

# RUN set -eux && sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
# RUN apk --no-cache add python make g++\
#     && rm -rf /var/cache/apk/*

RUN set -eux && sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/* 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8663

CMD [ "node", "src/server.js" ]