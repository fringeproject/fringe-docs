# API


## Overview

The Frontend (`fringe-frontend`) uses the API from the backend (`fringe-core`).
You are free to use the API directly without using the Web page.


## Basic usage

The API is available on the `api` subdomain of `fringeproject.com`.

Here is an example of a valid API call:

```bash
curl "https://api.fringeproject.com/api/search?q=uber.com"
```

The API returns data using the JSON format.


### Authentication

Most of the endpoints require authentication. So you need a valid session to
requests private data or bypass daily-request-quota.

```bash
curl -H "Content-Type: application/json" \
     -d '{"username": "YOUR USERNAME", "password": "YOUR PASSWORD"}' \
     -X POST "https://api.fringeproject.com/api/accounts/login"
```


### Session

As we are still developing, we are providing a dead simple cookie to authenticate
users.


### Endpoints

As the API endpoints are evolving everyday, we cannot provide an accurate list of
endpoint and call examples. But you can check how the `fringe-frontend` use the API.


### Rate Limit

There is a rate limit set for anonymous and authenticated users. The current
limits are:

- Anonymous users: `100 requests/day`.
- Authenticated users: `1000 requests/day`.

For anonymous users, the limit is set based on your IP. So if you change your IP
(hello Tor!), you may request more data.
