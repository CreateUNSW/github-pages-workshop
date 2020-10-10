---
option: tabs
tabs:
- General
- CSS Example
- SASS Example
---

## CSS controls how your site looks

* font size, weight, colours
* text-align
* floating
* list
* links and hover styles
* margins and paddings
* width and height
* background (image, colour)
* box-shadow
* and more...

Full documentation [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

### SASS is just CSS but better

Use it whenever you can

Supports:

* Nested definitions

TAB

An example of CSS can be expressed as

``` CSS
selector {
    property: value;
}

selector:other {
    other-property: other-value;
}
```
TAB

In SASS, previous tab can now be written as

``` CSS
selector {
    property: value;
    other  {
        other-property: other-value;
    }
}
```

Also allows for variables, just don't misspell the variables in the properties or else they will not be read correctly.

``` CSS
$site-yellow: #f9bf2c;

div {
    background-color: $site-yellow;
}

p {
    color: $site-yellow;
}
```