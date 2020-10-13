---
option: tabs
tabs:
- Steps
- Code
- Results
---

Now let's add a page that shows a list of the projects we've worked on.

If you want to make each of these projects their own pages, look into Jekyll collections.

TAB

``` HTML
<!-- project.html -->
---
layout: default
title: A list of my projects
projects:
    - name: website
      description: I made a website
    - name: toast
      description: I made toast the other day
    - name: skipped some lectures
      description: I'm actually a professional at this
---

<div id="projects">
    {% for project in page.projects %}
        <div class="project-container">
            <h1 class="project-name">{{ project.name }}</h1>
            {{ project.description }}
        </div>
    {% endfor %}
</div>
```

COLUMN
``` CSS
/* Add to style.scss */
#projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0% 10% 0% 10%;
    grid-gap: 5px;
}

.project-container {
    background-color: $site-orange;
    color: #FFFFFF;
    padding: 10px;
}

.project-name {
    text-align: center;
}
```

TAB

![Screenshot of projects page]({{site.baseurl}}/images/slides/projects.png)
