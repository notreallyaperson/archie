#!/bin/bash
trackOut="$(git status | grep Untracked)"
stashOut="$(git stash)"
git stash apply
if [ "$stashOut" = "No local changes to save" ]
then 
    continue=true 
else 
    continue=false
    echo "Please STASH or COMMIT CHANGES!"
fi
if [ "$trackOut" = "Untracked files:" ]
then 
    continue=true 
else 
    continue=false
    echo "Please COMMIT Untracked files!"
fi
if continue=true 
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
fi