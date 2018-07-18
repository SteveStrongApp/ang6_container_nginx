#!/bin/sh
echo Clear all Docker images

# Delete all containers
docker rm -f $(docker ps -q)

#docker stack deploy --compose-file docker-compose.yml vossibility

