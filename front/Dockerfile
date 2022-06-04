FROM nginx

RUN mkdir /front
WORKDIR /front
RUN mkdir ./build
ADD ./build ./build

EXPOSE 80  
CMD ["nginx","-g","daemon off;"]