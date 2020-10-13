---
option: tabs
tabs:
- General
- Example
---

## HTML is the Structure and Content of your Site

* *Most* opening tags need a corresponding end tag and can wrap other tags
  * Opening looks like `<tag>`
  * Closing looks like `</tag>`
  * Exceptions "empty tags": `<img>`, `<hr>`, `<input>` etc. It doesn't make sense for these tags to contain other content (full list [here](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element))
* A well structured page is easier to maintain
* Semantic HTML has benefits for users, devs, and for accessibility
  * stuff like `<section>`, `<main>`, `<footer>`, `<div>` etc
  * doesn't affect how things look on the page, so why not add it?

TAB

For Example:

``` HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <!--All other metadata, such as css, javascript, SEO, etc.-->
  </head>
  <body>
    <header>
      <!--Site Logo or Title, navigations / menus-->
    </header>
    <main> <!--Main Content-->
      <h1>Hello</h1>
      <div class="untitled-class">
          <p>Learning how to do HTML</p>
      <div>
    <main>
    <footer>
      <!--Site Copyright, other links, buttons, not important stuff-->
    </footer>
  </body>
</html>
```
