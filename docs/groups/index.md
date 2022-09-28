# Groups

A group is a top-level container for your URLs and global keyword views.

<aside class="notice">Having at least one group is the prerequisite for adding URLs, keywords and other resources.</aside>

## List groups

```shell
curl 'https://api.nightwatch.io/api/v1/url_groups?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 36242,
    "name": "Example group",
    "url_count": 0,
    "url_type": null,
    "group_type": "static",
    "dynamic_view_count": 0
  },
  ...
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/url_groups?access_token=ACCESS_TOKEN`



## Get a group

```shell
curl 'https://api.nightwatch.io/api/v1/url_groups/36242?access_token=ACCESS_TOKEN' \
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
{
  "id": 36242,
  "name": "Renamed group",
  "url_count": 0,
  "url_type": null,
  "group_type": "static",
  "dynamic_view_count": 0
}
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/url_groups/GROUP_ID?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter | Description         |
|-----------|---------------------|
| group_id  | The id of the group |




## Create a group

```shell
curl 'https://api.nightwatch.io/api/v1/url_groups?access_token=ACCESS_TOKEN' \\
  -X POST \\
  -H 'Content-Type: application/json' \\
  -d '
    {
      "url_group": {
        "name": "Example group",
      }
    }
  '
```

> The above command returns JSON structured like this:

```json
{
  "id": 36242,
  "name": "Example group",
  "url_count": 0,
  "url_type": null,
  "group_type": "static",
  "dynamic_view_count": 0
}
```

### HTTP Request

`POST https://api.nightwatch.io/api/v1/url_groups?access_token=ACCESS_TOKEN`

### Body Parameters

| Parameter | Description           |
|-----------|-----------------------|
| name      | The name of the group |




## Update a group

```shell
curl 'https://api.nightwatch.io/api/v1/url_groups/36242?access_token=ACCESS_TOKEN' \\
-X PUT \\
-H 'Content-Type: application/json' \\
-d '
  {
    "url_group": {
      "name": "Renamed group",
    }
  }
'
```

> The above command returns JSON structured like this:

```json
{
  "id": 36242,
  "name": "Renamed group",
  "url_count": 0,
  "url_type": null,
  "group_type": "static",
  "dynamic_view_count": 0
}
```

### HTTP Request

`PUT https://api.nightwatch.io/api/v1/url_groups/GROUP_ID?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter | Description         |
|-----------|---------------------|
| group_id  | The id of the group |


### Body Parameters

| Parameter | Description           |
|-----------|-----------------------|
| name      | The name of the group |



## Delete a group

```shell
curl 'https://api.nightwatch.io/api/v1/url_groups/36242?access_token=ACCESS_TOKEN' \\
  -X DELETE \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
{
  "id": 36242,
  "name": "Example group",
  "url_count": 0,
  "url_type": null,
  "group_type": "static",
  "dynamic_view_count": 0
}
```

### HTTP Request

`DELETE https://api.nightwatch.io/api/v1/url_groups/GROUP_ID?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter | Description         |
|-----------|---------------------|
| group_id  | The id of the group |
