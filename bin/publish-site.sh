#!/usr/bin/env bash

rm -fr dist/apps/docs

yarn build:docs

# disable jekyll
touch dist/apps/docs/.nojekyll

# set custom domain
echo 'react-ecs.ldlework.com' > dist/apps/docs/CNAME

# publish
npx gh-pages -d dist/apps/docs/ --remove '.'
