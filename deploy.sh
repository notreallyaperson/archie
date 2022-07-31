#!/bin/bash
stashOut="$(git stash)"
isStashed=true
initialBranch=$(git rev-parse --abbrev-ref HEAD)
if [ "$isStashed" = true ]; then git stash apply; fi
if [ "$stashOut" = "No local changes to save" ]; then isStashed=false; else echo "Please STASH or COMMIT CHANGES!" ; fi
if isStashed=false 
then
    git checkout deploy2
    git pull
    commit_id=$(git rev-parse HEAD)
    yarn install
    yarn run build
    echo "BUILD COMPLETE!"
    rm -r docs
    mv build docs
    git add .
    git commit -m "Deploy: $(date) $commit_id"
    git push
    echo "WEBSITE DEPLOYED!"
else
    echo "Please STASH or COMMIT CHANGES!!"
fi