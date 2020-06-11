# User documentation

## Overview

FringeProject allows you to scan and search through various source of information
to discover assets and vulnerabilities.


## Use cases

There is several thing you can do with FringeProject:

- Search through the public database
- Add an asset we don't find yet


### Search an asset

You can search in the public perimeter using the following link:
[https://fringeproject.com/search](https://fringeproject.com/search)


### Add a new asset

When you add a new asset, we parse it and attach a `data-type`. It can be:

- IP: represents a IPv4 (no IPv6 supported for now)
- Hostname: represents a domain (`fringeproject.com`) or a subdomain (`docs.fringeproject.com`)
- URL: represents a URL with a Host (IP or Hostname), a Port and a Path

We plan to add other data later such as IPv6, TCP/UDP ports or even CIDR.


## Account

You can browse a limited number of asset without being authenticated. If you want to
access more features (search more assets, create a perimeter, ...), you will need
an account. You sign up to create a new account [here](https://fringeproject.com/create)
or sign in with an existing one [here](https://fringeproject.com/login).

### Account settings

You can view your profile [here](https://fringeproject.com/settings/profile).
We grab your avatar from [Gravatar](https://gravatar.com/) based on the email
address you provide.


### Limitation

An anonymous user is limited to make `100 requests/day`. If you want to get more
data, then you need to login. With an authenticated user, the limit is set at
`1000 requests/day`.
