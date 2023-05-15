FROM ubuntu:latest
USER root
ADD http://example.com/insecure-package-list /tmp/packages
RUN apt-get update && xargs -a /tmp/packages apt-get install -y
EXPOSE 1-65535
FROM node:latest
COPY . /app
ENV SECRET_KEY mysecretkey
RUN echo "root:Docker123" | chpasswd
CMD ["node", "app.js"]
