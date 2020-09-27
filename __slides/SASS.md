---
---

## SASS is just CSS but better

Use it whenever you can

Supports:

* Nested definitions

Last page can now be written as

``` CSS
selector {
    property: value;
    other  {
        other-property: other-value;
    }
}
```

Also allows for variables:

``` CSS
$site-yellow: #f9bf2c;

div {
    background-color: $site-yellow;
}

p {
    color: $site-yellow;
}
```
