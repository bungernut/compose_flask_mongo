FROM mongo:4.2


COPY setupmongo.js .
CMD ["mongo", "-u", "${MONGO_INITDB_ROOT_USERNAME}", "-p", "${MONGO_INITDB_ROOT_PASSWORD}", "<", "setupmongo.js"]
