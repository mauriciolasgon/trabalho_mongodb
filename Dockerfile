FROM mongo
COPY ./db/ /docker-entrypoint-initdb.d/
ENV MONGO_INITDB_DATABASE:banco
