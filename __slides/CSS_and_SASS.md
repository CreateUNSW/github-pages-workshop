---
option: tabs
tabs:
- General
- Syntax
- Example
---

## CSS controls how your site looks

* font size, weight, colours
* layout
* links and hover styles
* margins and paddings
* width and height of elements
* background (image, colour)
* animations and transitions
* and more...

## SASS is just CSS but better

Use it whenever you can, it compiles to CSS.

Supports:

* Nested definitions
* Variables
* Operations on units and values
* Mixins

TAB

## CSS
``` CSS
selector {
    property: value;
}

selector:other {
    other-property: other-value;
}
```

COLUMN

## SASS
``` CSS
selector {
    property: value;
    other  {
        other-property: other-value;
    }
}
```

This SASS code will compile to the code on the left.

TAB

The styling for the links on this page looks like:

``` CSS
$create-dark-blue: #1a237e;
$create-white: #ffffff;
$mobile-breakpoint: 991.98px;

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
    @media (max-width: $mobile-breakpoint) {
        padding: 10px 20px;
    }
}
```

COLUMN

Which generates the following CSS:

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
    background: #161d69;
}

@media (max-width: 991.98px) {
    .link {
        padding: 10px 20px;
    }
}
```
