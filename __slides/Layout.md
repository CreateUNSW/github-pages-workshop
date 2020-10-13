---
option: tabs
tabs:
- Steps
- Code
---

Layouts are HTML files that you can insert content into. They're super powerful and give your site a consistent look. They also prevent you from writing a bunch of duplicate code.

Let's convert our previous html code to a layout and a markdown file. It'll look the same but will be easier to change in the future

TAB

``` HTML
// _layouts/default.html
<!DOCTYPE html>
<html>
    <head>
        <title>{{ page.title }}</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        {{ "{{ content " }}}}
    </body>
</html
```

``` markdown
// in index.md (replaces index.html)
---
layout: default
title: Jack's Portfolio
---

# Hi! I'm Jack
## I'm making a portfolio

## I'm passionate about:
* Making stuff!
* STEM education

![a photo of me smiling](/images/jack.jpg)

```

[Link to commit](https://github.com/JackRobbers/JackRobbers.github.io/tree/af0501f8ee91819f49afd5242b8bc3e417ed0302)
