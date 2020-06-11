# FringeProject documentation

This project host the repository used to generate the FringeProject documentation
website (https://docs.fringeproject.com) and deployment tools.
It based on [mkdocs](https://www.mkdocs.org/) to generate the static files.

The content of each FringeProject product is stored here and there an
[Action](https://github.com/features/actions) that is trigger at every commit to
update the website.


## Requirements

In oder to serve and preview the documentation localy, you need to install `mkdocs`
on your host.
First you need `Python`, then you can install the package using `pip`:

```bash
pip install -r Requirements.txt

# or directly with the latest version
pip install mkdocs
```

This should work on a Linux, macOS or Windows environment.


## Preview the website

Run the following command to serve the website:

```bash
mkdocs serve
```

This will generate the files and serve at `http://127.0.0.1:8000`. Now, when you
edit a file, the files are automatically regenerated and the website is auto-reloaded.


## Edit documentation and theme

The documentation is located in the [`docs`](/docs) folder. The files are converted to
HTML using the markdown syntax.
The [`theme`](/theme) folder contains html and ressources to generate the website.
The configuration file is [`mkdocs.yml`](/mkdocs.yml), the structure is explained
on the official website [mkdocs](https://www.mkdocs.org/)


## Deployment process

We use a [Github Action](/.github/workflows/gh-pages.yml) to generate the website
to the `gh-pages` branch at every commit on master.
This branch is exposed to the Internet using [Github Pages](https://pages.github.com/)
and a [CNAME file](/docs/CNAME).
