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

An extracted example of CSS can be expressed as

``` CSS
selector {
    property: value;
}

selector:other {
    other-property: other-value;
}
```

COLUMN

For example, the links in the side menu navigation can be expressed as

``` CSS
.link {
    padding: 6.5px 20px;
    text-decoration: none;
    color: #ffffff;
    font-size: smaller;
    font-weight: normal;
    display: block;
    transition: 0.3s;
}

.link:hover {
    color: #ffffff;
    background: #1a237e;
}

@media (max-width: 991.98px) {
    .link {
        padding: 10px 20px;
    }
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
COLUMN

For example, the links in the side menu navigation can now be expressed as

``` CSS
$create-dark-blue: #1a237e;
$create-white: #ffffff;

.link {
    padding: 6.5px 20px;
    text-decoration: none;
    color: $create-white;
    font-size: smaller;
    font-weight: normal;
    display: block;
    transition: 0.3s;
    &:hover {
        color: $create-white;
        background: darken($create-dark-blue, 5%);
    }
    @media (max-width: 991.98px) {
        padding: 10px 20px;
    }
}
```
