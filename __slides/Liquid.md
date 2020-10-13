---
---

Liquid is Jekyll's template language.

We've already seen a bit of it in the layout we made.

You can use any YAML data you specify in the front matter with liquid. Liquid allows you to create elements programatically.

The syntax looks like

``` HTML
{{ "{{ value " }}}} <!-- puts a value into the page -->

{{ "{% for item in items " }}%} <!-- loop through items and repeat the content inside -->
    <h1>Text</h1>
    <p>{{ " {{ item "  }}}}</p>
{{ "{% endfor " }}%}
```

which with the data:

``` yaml
value: Hello
items:
    - apple
    - orange
    - banana
```

COLUMN

will produce the following output:

``` HTML
Hello

<h1>Text</h1>
<p>apple</p>
<h1>Text</h1>
<p>orange</p>
<h1>Text</h1>
<p>banana</p>
```
