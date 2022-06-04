FROM node:16.14.0

RUN mkdir /server
WORKDIR /server
COPY . .
RUN yarn
ENTRYPOINT [ "yarn" ]
CMD ["dev"]