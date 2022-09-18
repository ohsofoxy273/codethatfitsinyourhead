#!/bin/bash

echo "TESTING"
INVALID_PLAYWRIGHT="$(npm run test:playwright | grep -o 'failed')" 

echo "LINTING"
VALID_LINT="$(npm run lint | grep -o 'All matched files use Prettier code style!')" 

echo "CHECKING TYPESCRIPT"
VALID_TYPESCRIPT="$(npm run check | grep -o 'svelte-check found 0 errors, 0 warnings, and 0 hints')" 

wait

if [[ $INVALID_PLAYWRIGHT != "failed" && $VALID_LINT == "All matched files use Prettier code style!" && $VALID_TYPESCRIPT == "svelte-check found 0 errors, 0 warnings, and 0 hints" ]]
    then    

    echo 'pushing to github'
    echo "playwright: $INVALID_PLAYWRIGHT"
    echo "lint: $VALID_LINT"
    echo "typescript: $VALID_TYPESCRIPT"
    git add .
    git commit -m "$1"
    git push origin master
    echo 'Successfully pushed to github'
else
    echo 'FAILED'
    echo "playwright: $INVALID_PLAYWRIGHT"
    echo "lint: $VALID_LINT"
    echo "typescript: $VALID_TYPESCRIPT"
    exit 1
fi