#!/bin/bash
version=$1
backend_name=$2
front_name=$3
mysql_name=$4
repo=$5
namespace=$6
docker login -u ${PLUGIN_DOCKER_USERNAME} -p ${PLUGIN_DOCKER_PASSWORD} ${repo};
# mysql
docker build --rm=true -f dockerfile-mysql -t ${repo}/${namespace}/${mysql_name}:${version} .;
docker push ${repo}/${namespace}/${mysql_name}:${version};
docker rmi ${repo}/${namespace}/${mysql_name}:${version};
# 后端
docker build --rm=true -f dockerfile-backend -t ${repo}/${namespace}/${backend_name}:${version} .;
docker push ${repo}/${namespace}/${backend_name}:${version};
docker rmi ${repo}/${namespace}/${backend_name}:${version};
# 前端
#docker build --rm=true -f dockerfile-backend -t ${repo}/${namespace}/${front_name}:${version} .;
#docker push ${repo}/${namespace}/${front_name}:${version};
#docker rmi ${repo}/${namespace}/${front_name}:${version};