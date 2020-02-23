FROM mongo:4.2

COPY setupmongo.js .
RUN mongo --host 127.0.0.1 -u mongoroot -p x3n0n < setupmongo.js
