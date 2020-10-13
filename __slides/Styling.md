---
option: tabs
tabs:
- Steps
- Code
- Results
---

That looked pretty horrible right? Let's add some ~~CSS~~ SASS

TAB

in style.scss:

``` CSS
---
---
// note the "front matter" above, it's required for jekyll to precess SASS files, otherwise it will just copy them.

$site-orange: #e85b15;

h1, h2, li {
    font-family: Arial, Helvetica, sans-serif;
}

li {
    list-style-type: square;
}

img {
    width: 25%;
    border: $site-orange solid 5px;
    border-radius: 2px;
}
```

change index.html:

``` HTML
<head>
    <title>Jack's Portfolio</title>
    <link rel="stylesheet" href="/style.css">
</head>
```

[View the commit](https://github.com/JackRobbers/JackRobbers.github.io/tree/20e16c4980905efc4927620cb83f5ada2f33651e)

TAB

![Screenshot of styled profile page]({{site.baseurl}}/images/slides/profile-styled.png)
