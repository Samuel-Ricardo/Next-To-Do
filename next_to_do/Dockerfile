FROM node:18.15.0-alpine3.17

RUN apk add --no-cache bash

WORKDIR /home/node/app


COPY . ./

RUN npm install

#COPY ./.docker/entrypoint.sh ./.docker/entrypoint.sh
#RUN chmod u+x ./.docker/entrypoint.sh
#ENTRYPOINT ["./.docker/entrypoint.sh"]

RUN npx prisma generate

CMD ["npm", "run", "dev"]

EXPOSE 3000 
