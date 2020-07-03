# Workflows

A workflow is an automated process to start jobs. You can create workflows to
automate assets discovery within a [`fringe-runner`](./runner.md).


## Create a workflow file

A workflow file is a `YAML` file with a specific structure. The syntax is
borrowed from [**Github Actions**](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions).

An example of a workflow file:

```yaml
# The name of the workflow
name: Find subdomains


# The event that triggers the workflow
on:
  # When the runner find a new asset
  new_asset:
    # The asset must be a hostname
    types: hostname
    # The asset must respect the following regex
    regex: .*\.uber\.com


# The jobs to execute
jobs:
  - name: Auto crt.sh
    module: crtsh

  - name: Auto Sublist3r
    module: sublist3r
```

## Workflow syntax

### name

The name of the workflow.


### on

We provide the following event name:

- `new_asset` - this event is triggered when the runner find a new asset

#### on.new_asset

You must select a `data-type` for the new asset. We trigger the workflow if the
new asset has the correct `data-type`. You can also specify a regex to filter
the new assets.

- `types` - the asset `data-type` (`hostname`, `url`, `ip`)
- `regex` - an optional regex to filter the assets


### jobs

This is a list of modules to execute. The elements of the list are objects with
the following fields:

- `name` - the name of the job
- `module` - the slug of the module to execute


## Use a workflow

The following command trigger a workflow:

```bash
fringe-runner module -m crtsh -a uber.com -w path/workflow.yml
```
