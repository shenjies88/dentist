#!/bin/bash
version=$1
backend_name=$2
dockerfile=$3
repo=$4
namespace=$5
account=$6
pwd=$7
docker login -u ${account} -p ${pwd} ${repo}
docker build --rm=true -f ${dockerfile} -t ${repo}/${namespace}/${backend_name}:${version} .
docker push ${repo}/${namespace}/${backend_name}:${version}
docker rmi ${repo}/${namespace}/${backend_name}:${version}
docker volume prune -f
docker system prune -f