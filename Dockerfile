FROM mongo
COPY ./db/ /docker-entrypoint-initdb.d/
