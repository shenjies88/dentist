#!/bin/bash
DOCKER_TAG=$1
BACKEND_NAME=$2
FRONT_NAME=$3
MYSQL_NAME=$4
REPO=$5
NAMESPACE=$6
docker login -u ${PLUGIN_DOCKER_USERNAME} -p ${PLUGIN_DOCKER_PASSWORD} ${REPO};
# mysql
docker build --rm=true -f dockerfile-mysql -t ${REPO}/${NAMESPACE}/${MYSQL_NAME}:${DOCKER_TAG};
docker tag ${MYSQL_NAME} ${REPO}/${NAMESPACE}/${MYSQL_NAME}:${DOCKER_TAG};
docker push ${REPO}/${NAMESPACE}/${MYSQL_NAME}:${DOCKER_TAG};
docker rmi ${REPO}/${NAMESPACE}/${MYSQL_NAME}:${DOCKER_TAG};
# 后端
docker build --rm=true -f dockerfile-backend -t ${REPO}/${NAMESPACE}/${BACKEND_NAME}:${DOCKER_TAG};
docker tag ${BACKEND_NAME} ${REPO}/${NAMESPACE}/${BACKEND_NAME}:${DOCKER_TAG};
docker push ${REPO}/${NAMESPACE}/${BACKEND_NAME}:${DOCKER_TAG};
docker rmi ${REPO}/${NAMESPACE}/${BACKEND_NAME}:${DOCKER_TAG};
# 前端
#docker build --rm=true -f dockerfile-backend -t ${REPO}/${NAMESPACE}/${FRONT_NAME}:${DOCKER_TAG};
#docker tag ${FRONT_NAME} ${REPO}/${NAMESPACE}/${FRONT_NAME}:${DOCKER_TAG};
#docker push ${REPO}/${NAMESPACE}/${FRONT_NAME}:${DOCKER_TAG};
#docker rmi ${REPO}/${NAMESPACE}/${FRONT_NAME}:${DOCKER_TAG};

docker system prune -f;