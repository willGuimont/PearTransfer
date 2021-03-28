git add -f build && git commit -m "Deploy"
git push origin `git subtree split --prefix build`:gh-pages --force