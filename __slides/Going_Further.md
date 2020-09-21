---
---

## Limitations of Github Pages and Jekyll

* No dynamic sites
* Jekyll can be restrictive and requires ruby
* Have to either use CDNs or commit libraries

## Courses

* COMP1531 - teaches backend web development using Python and Flask
* COMP6080 - new course that covers Javascript, CSS, React, UI Design

COLUMN

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


* Other generators
  * [11ty](https://www.11ty.dev/)
    * I've been using it for [UNSW iGEM](https://github.com/UNSW-iGEM/wiki-2020)
    * Supports heaps of template languages
    * Not super hard to move to from Jekyll
    * Can use Javascript to define your own liquid filters
  * Hugo, Gatsby, Wintersmith etc.

COLUMN

## Dynamic sites

* Hosting
  * AWS, DigitalOcean, Azure etc
  * Many of these services have a student tier that's free or low cost
* Technologies
  * Nodejs, Python
  * Webpack
  * React, Vue
  * Mysql, Mongodb
* Check out [CSESOC's workshop](https://www.youtube.com/watch?v=e02tDCwcGdE) on this!
