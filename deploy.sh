#!/bin/bash
trackOut="$(git status | grep Untracked)"
stashOut="$(git stash)"
git stash apply
isContinue=true
if [ "$stashOut" != "No local changes to save" ]
then 
    isContinue=false
    echo "Please STASH or COMMIT CHANGES!"
fi
if [ "$trackOut" = "Untracked files:" ]
then 
    isContinue=false
    echo "Please COMMIT Untracked files!"
fi
if $isContinue
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