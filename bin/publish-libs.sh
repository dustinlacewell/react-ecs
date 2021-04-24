#!/usr/bin/env bash

yarn run-s clean build

root=${pwd}

npm publish dist/libs/core --access public
npm publish dist/libs/three --access public
npm publish dist/libs/boids --access public
