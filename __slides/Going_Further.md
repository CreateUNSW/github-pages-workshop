---
---

## Limitations of Github Pages

* Ruby :(
* No dynamic sites
* Jekyll can be restrictive
* Have to either use CDNs or commit libraries

## Static sites
* Hosting
  * [Gitlab pages](https://about.gitlab.com/stages-devops-lifecycle/pages/) -
    * supports heaps of static site generators
    * doesn't have the ubiquity of Github
  * [Bitbucket cloud](https://support.atlassian.com/bitbucket-cloud/docs/publishing-a-website-on-bitbucket-cloud/)
    * again doesn't have that ubiquity
    * apparently support Disqus for comments?
    * doesn't support
  * Host it yourself!
    * complete control, can use whatever static site generator you want
    * could do custom processing using something like webpack
    * publish using Continous Integration

* Jekyll stuff we didn't talk about:
  * Data files, can be YAML, JSON, or CSV


* Other generators
  * [11ty](https://www.11ty.dev/)
    * I've been using it for [UNSW iGEM](https://github.com/UNSW-iGEM/wiki-2020)

## Dynamic sites

* Hosting
  * AWS, DigitalOcean, Azure etc
  * Many of these services have a student tier that's free or low cost
* Technologies
  * Nodejs, python
  * Webpack
  * React, vue
  * Mysql, Mongodb
* Check out [CSESOC's workshop](https://www.youtube.com/watch?v=e02tDCwcGdE) on this!
