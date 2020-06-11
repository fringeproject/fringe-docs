# Runner

On FringeProject, users provide assets (IP, hostname, ...). The `fringe-runner`
gathers and retrieves information about those assets such as web pages, open
ports, and used technologies.


## Overview

The tool that we called `fringe-runner` scans a host based on several modules. The
user may start the runner manually to scan an asset or run it as a daemon to
interact with the backend (`fringe-api`).


## Installation

`fringe-runner` is written in Go. First, you need to [install Go](https://golang.org/doc/install).
After this process, you can simply `go get` the tool:

```bash
go get github.com/fringeproject/fringe-runner
```

### Buiding from source

Clone the repository to your local machine and move to the runner folder:

```bash
git clone https://github.com/fringeproject/fringe-runner.git
cd fringe-runner
```

As we use [Go Modules](https://blog.golang.org/using-go-modules) the
dependencies are downloaded the first time you start the runner.

```bash
go get && go build
```

This will build the binary `fringe-runner`. If you want to install it to the
Go path you can run:

```bash
go install
```

You can also build the runner yourself for multiple environments with the
following command:

```bash
make build
```

This command build in the `bin` directory the binaries for the following OS:

- `linux/amd64`
- `linux/386`
- `darwin/amd64`
- `darwin/386`
- `windows/amd64`
- `windows/386`


### Docker

A Docker image of the latest build is available on [DockerHub](https://hub.docker.com/r/fringeproject/fringe-runner):

```bash
docker run -it --rm fringeproject/fringe-runner:latest <cmd>
```

You can also build the image yourself:

```bash
docker build .
---> <image_id>
docker run -it <image_id> <cmd>
```


### Update the resources

Once you install the binary, the following command displays the information
about the runner:

```bash
fringe-runner --version
Version:      development version
Git revision: HEAD
Git branch:   HEAD
GO version:   go1.14.3
Built:        unknown
OS/Arch:      darwin/amd64
```

Then, you need to download the resources (wordlist, ...) to the fringe folder:

```bash
fringe-runner update
```


## Start a scan manually

First, you list the modules available:

```bash
fringe-runner module -l
```

This command outputs a list of modules as a JSON format. Choose one of them, for
instance `crtsh` to get the subdomains of a `hostname` using the service [crt.sh](https://crt.sh/):

```bash
fringe-runner module -e crtsh uber.com
```

Based on the results of the service, the runner outputs a list of new assets.


## Scan using the backend

The scans are triggered using perimeter rules from the backend. For example, when
there is a new `hostname`, then we resolve it to get IP addresses and
we try to find new subdomains using OSINT techniques. The new assets are also
added to the scan pool to find more new assets.

Each time there is a new module to be called be the runner, we call this a `job`.

On your perimeter, we'll provided the ability to add a new runner. Configure the
runner with the `config.yml` file, the you can start scanning your perimeter with:

```bash
fringe-runner run
```


## Configuration

You can pass configuration as a [YAML](https://yaml.org/) file. There is an example
in the [repository](https://github.com/fringeproject/fringe-runner/blob/master/config.yml).

You can pass the configuration path as an argument to `-c/--config`:

```bash
fringe-runner -c file/path/config.yml <other arguments>
```

By default, the runner looks for the file `.fringe-runner.yml` in the user home
directory (`~/.fringe-runner.yml` or `%USERPROFILE%\.fringe-runner.yml` on Windows).


## Resources

The runner uses resources to work properly. For instance, the `wappalyzer`
module needs the database file name `wappalyzer.json`.

It downloads the resources with the `update` command and stores these in the
directory set as `resources` in the configuration file.

If there is no configuration file or the `resources` set, the the following path
will be used:

```
$HOME/.fringe-runner/resources/
```

Where `HOME` is the user home directory (`%USERPROFILE%` on Windows).


## Data source

The `fringe-runner` scans the Internet for you to find augment the data you provide.
To achieve this, we collect information using modules:

- Scan modules: Ask the information directly to the source. That mean we scan
for web pages, open ports and available services.
- Public sources modules: Ask informations about a source to a public source
(such as [Shodan](https://www.shodan.io/) or [Crt.sh](https://crt.sh/)).

There is a list of available modules in the [README on the repository](https://github.com/fringeproject/fringe-runner/#available-modules)

If you don't want to be scanned please send a e-mail to [contact@fringeproject.com](mailto:contact@fringeproject.com).

Please note that users may use the runner on their own. We are not responsible for
any harm related to the use of `fringe-runner`.
