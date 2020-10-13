---
---

## Jekyll setup

1. `mkdir [name].github.io`
1. `cd [name].github.io`
1. `gem install bundler`
1. `bundle init`
1. `bundle add github-pages`
1. `bundle exec jekyll new -f .`
1. `bundle exec jekyll serve`
1. Now browse to http://localhost:4000

COLUMN

## Git setup

Make a GitHub repo called `[name].github.io`.

![Screenshot of repo setup]({{site.baseurl}}/images/repo-setup.png#border)

Github pages will automatically be enabled for non-project sites

1. `git init`
2. `git checkout -b main`
3. `git add -A`
4. `git commit`
5. `git remote add origin git@github.com:[name]/[name].github.io.git`
6. `git push -u origin main`

Now your site is live on the web!
