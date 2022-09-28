# Introduction

Welcome to the Nightwatch API docs! Here you can find guides on how to interact with data associated with your Nightwatch account using HTTP requests (REST API).

If you don't have an account yet, <a href="https://nightwatch.io/pricing">sign up for a Nightwatch account.</a>

API Access is enabled on Optimize and Agency plans only.

## Obtain an access token for your user

```shell
curl 'https://api.nightwatch.io/api/v1/token' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"email": "YOUR_EMAIL", "password": "YOUR_PASSWORD"}
```

> The above command returns JSON structured like this:

```json
  {
    "access_token": "TOKEN"
  }
```

This endpoint gets you the access token that you must include with all your requests.

### HTTP Request

`POST https://api.nightwatch.io/api/v1/token`

### Body Parameters

Parameter | Description
--------- | -----------
email | Your Nightwatch e-mail
password | Your Nightwatch password

<aside class="notice">
  This token is permanent and you only need to get it once. It is only necessary to get it again when you revoke it.
</aside>
