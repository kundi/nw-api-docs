# Subusers

Besides the main account with which a Nightwatch account was created, accounts
can also have a number of users that can access its data or just part of it.
These are called subusers, and there are two kinds: `admin` and `limited`. Admin
users can access every aspect of an account, including invoicing, billing
settings, and subuser administration. Limited subusers can only access URL
groups they've been granted access to. Additionally, permissions can be granted
to limited subusers to create new keywords and URLs.

A third special class of subusers is `owner`, there is only one of this kind,
and it's a read-only property, that is, another subuser cannot be made owner.
Owner subusers are an account's registration users. Onwers cannot be deleted, to
switch the owner of an account you need to contact support.

<aside class="notice">
  Subusers password administration is not managed by this but by the `user`
  endpoint.
</aside>

## Subusers data

| Field                 | Description                                      |
|-----------------------|--------------------------------------------------|
| id                    | Subuser ID                                       |
| email                 | Subuser email                                    |
| access_type           | Whether this is an "admin" or "limited" subuser  |
| owner                 | Whether this subuser is the owner of the account |
| adding_keywords       | Whether this user can create new keywords        |
| adding_urls           | Whether this user can create new URLs            |
| group_ids             | URL groups' IDs this subuser has access to       |
| keyword_limit         | Number of keywords this subuser can create       |
| keyword_limit_enabled | Whether keywords limit is enabled                |
| url_limit             | Number of URLs this subuser can create           |
| url_limit_enabled     | Whether URLs limit is enabled                    |
| last_access           | Last time this user logged in                    |
| last_login_ip         | Last IP address this subuser logged in from      |
| created               | When this user was created                       |



## List subusers

```shell
curl 'https://api.nightwatch.io/api/v1/subusers?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
  [
    { 
      "id": 100,
      "access_type": "admin",
      "adding_keywords": true,
      "adding_urls": true,
      "created": "about 6 years ago",
      "email": "admin@example.com",
      "group_ids": [],
      "keyword_limit": 0,
      "keyword_limit_enabled": false,
      "last_access": "3 minutes ago",
      "last_login_ip": "127.0.0.1",
      "owner": true,
      "url_limit": 0,
      "url_limit_enabled": false
    },
    ...
  ]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/subusers/keywords?access_token=ACCESS_TOKEN`


## Get a subuser

```shell
curl 'https://api.nightwatch.io/api/v1/subusers/SUBUSER_ID?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
  {
    "id": 101,
    "access_type": "limited",
    "email": "limited@example.com",
    "group_ids": [100, 101, 102],
    "adding_keywords": true,
    "adding_urls": true,
    "keyword_limit": 10,
    "keyword_limit_enabled": true,
    "url_limit": 10,
    "url_limit_enabled": true
  }
```

### HTTP Request

`POST https://api.nightwatch.io/api/v1/subusers/SUBUSER_ID?access_token=ACCESS_TOKEN`

### URL Parameters

Parameter   | Description
----------- | -----------
subuser_id* | Subuser ID to fetch


## Create a subuser

After creating a subuser, the system will send an email to the address provided
with a confirmation link. This link will redirect the user to a page where they
can set their password, and confirm the registration. Only after this process is
completed the subuser account can be used.

```shell
curl 'https://api.nightwatch.io/api/v1/subusers?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -X POST \\
  -d '{
        "subuser": {
          "access_type": "limited",
          "email": "limited@example.com",
          "group_ids": [100, 101, 102],
          "adding_keywords": true,
          "adding_urls": true,
          "keyword_limit": 10,
          "keyword_limit_enabled": true,
          "url_limit": 10,
          "url_limit_enabled": true,
          "created": "less than a minute ago",
          "last_access": null,
          "last_login_ip": ""
        }
      }'
```

> The above command returns JSON structured like this:

```json
  {
    "id": 101,
    "access_type": "limited",
    "email": "limited@example.com",
    "group_ids": [100, 101, 102],
    "adding_keywords": true,
    "adding_urls": true,
    "keyword_limit": 10,
    "keyword_limit_enabled": true,
    "url_limit": 10,
    "url_limit_enabled": true
  }
```

### HTTP Request

`POST https://api.nightwatch.io/api/v1/subusers?access_token=ACCESS_TOKEN`

### Parameters

| Parameter             | Description                                     |
|-----------------------|-------------------------------------------------|
| email*                | Subuser email                                   |
| access_type*          | Whether this is an "admin" or "limited" subuser |
| adding_keywords       | Whether this user can create new keywords       |
| adding_urls           | Whether this user can create new URLs           |
| group_ids             | URL groups' IDs this subuser has access to      |
| keyword_limit         | Number of keywords this subuser can create      |
| keyword_limit_enabled | Whether keywords limit is enabled               |
| url_limit             | Number of URLs this subuser can create          |
| url_limit_enabled     | Whether URLs limit is enabled                   |


Parameters marked with * are mandatory.

## Update a subuser

<aside class="notice">
  Subusers emails cannot be change.
</aside>
<aside class="notice">
  URL groups are modified as a whole, individual groups cannot be attached or
  removed from the access list. To grant access to an additional URL group, you
  must first fetch the subuser access list, append the URL to it, and then save
  the entire list.
</aside>

```shell
curl 'https://api.nightwatch.io/api/v1/subusers/SUBUSER_ID?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -X PUT \\
  -d '{
        "subuser": {
          "access_type": "limited",
          "email": "limited@example.com",
          "group_ids": [100, 101, 102],
          "adding_keywords": true,
          "adding_urls": true,
          "keyword_limit": 10,
          "keyword_limit_enabled": true,
          "url_limit": 10,
          "url_limit_enabled": true,
          "created": "less than a minute ago",
          "last_access": null,
          "last_login_ip": ""
        }
      }'
```

> The above command returns JSON structured like this:

```json
  {
    "access_type": "limited",
    "group_ids": [100, 101, 102, 103],
    "adding_keywords": true,
    "adding_urls": true,
    "keyword_limit": 20,
    "keyword_limit_enabled": true,
    "url_limit": 20,
    "url_limit_enabled": true
  }
```

### HTTP Request

`PUT https://api.nightwatch.io/api/v1/subusers/SUBUSER_ID?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter   | Description              |
|-------------|--------------------------|
| subuser_id* | Subuser ID to be updated |

Parameters marked with * are mandatory.

### Parameters

| Parameter             | Description                                     |
|-----------------------|-------------------------------------------------|
| access_type           | Whether this is an "admin" or "limited" subuser |
| adding_keywords       | Whether this user can create new keywords       |
| adding_urls           | Whether this user can create new URLs           |
| group_ids             | URL groups' IDs this subuser has access to      |
| keyword_limit         | Number of keywords this subuser can create      |
| keyword_limit_enabled | Whether keywords limit is enabled               |
| url_limit             | Number of URLs this subuser can create          |
| url_limit_enabled     | Whether URLs limit is enabled                   |



## Delete a subuser

```shell
curl 'https://api.nightwatch.io/api/v1/subusers/SUBUSER_ID?access_token=ACCESS_TOKEN' \\
  -X DELETE \\
  -H 'Content-Type: application/json' \\
```

> The above command returns a HTTP 204 response.


### HTTP Request

`POST https://api.nightwatch.io/api/v1/subusers?access_token=ACCESS_TOKEN`

### Parameters

| Parameter   | Description              |
|-------------|--------------------------|
| subuser_id* | Subuser ID to be deleted |


Parameters marked with * are mandatory.
