#!/bin/sh

cd ..

baseDir=$(pwd)
distDir=$baseDir/dist
dockerDir=$baseDir/docker
name=automad/automad

echo '---------------------------------------------------------------------------'
echo "Cloning dist repository ..."

git clone https://github.com/automadcms/automad-dist.git $distDir
cd $distDir

git status

version=$(git describe --tags $(git rev-list --tags --max-count=1))
echo "Latest version: $version"

echo "Cloning docker repository ..."
git clone https://github.com/automadcms/automad-docker.git $dockerDir
cd $dockerDir

echo '---------------------------------------------------------------------------'
echo "Building image ..."

major=v${version%%.*}

docker build --build-arg version=$version -t $name:$version -t $name:$major -t $name:latest .
docker images

echo '---------------------------------------------------------------------------'
echo "Pushing ..."

docker push $name:$version
docker push $name:$major
docker push $name:latest
