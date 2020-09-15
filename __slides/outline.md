---
next: introduction
---
{% for slide in site.slide_order %}
  {% unless slide == 'outline' %}
* [{{ slide | capitalize }}]({{ site.baseurl }}/slides/{{ slide }})
  {% endunless %}
{% endfor %}
