# Competitors

Competitors are additional URLs that will be tracked along with the main URL.
They are used to track competitor sites with the same set of keywords as the
parent URL.

<aside class="notice">
  The prerequisite for adding competitors is the existence of a URL. All
  competitors need to be referenced to a specific URL.
</aside>

## Competitor data

| Field                         | Description                                                                |
|-------------------------------|----------------------------------------------------------------------------|
| id                            | Competitor ID                                                              |
| url                           | URL of the competitor                                                      |
| search_keyword_url_id         | URL ID this competitor belong to                                           |
| custom_name                   | Competitor custom name                                                     |
| match_subdomains              | Whether this competitor matches subdomains                                 |
| match_nested_urls             | Whether this competitor matches nested URL paths                           |
| places_image_title            | Title for tracking in image carousel                                       |
| places_info                   | Place extended matching data                                               |
| places_info.place_cid         | Match place by CID                                                         |
| places_info.place_title       | Match place by title                                                       |
| places_info.place_description | Places description, informational, no matching is performed on description |
| places_match                  | Place's CID (`cid_<CID>` format) or, if CID is empty, place's title        |


## List competitors

```shell
curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/competitors?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
  [
    { 
      "id":1,
      "url": "http://example.com",
      "match_nested_urls": true,
      "match_subdomains": true,
      "places_image_title": null,
      "places_info": null,
      "places_match": null,
      "search_keyword_url_id": 10,
      "custom_name": "Example Competitor"
    },
    ...
  ]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/urls/URL_ID/competitors?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter | Description                                |
|-----------|--------------------------------------------|
| url_id    | The id of the URL to fetch competitors for |



## Add competitors

```shell
curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/competitors?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -X POST \\
  -d '{
        "competitor": {
          "id": 2,
          "url": "http://new.example.com/",
          "match_subdomains": true,
          "match_nested_urls": false,
          "places_match": false,
          "places_image_title": null,
          "custom_name": "New Example Competitor"
        }
      }'
```

> The above command returns JSON structured like this:

```json
  {
    "id": 2,
    "url": "http://new.example.com/",
    "match_nested_urls": true,
    "match_subdomains": true,
    "places_image_title": null,
    "places_info": null,
    "places_match": null,
    "search_keyword_url_id": 10,
    "custom_name": "New Example Competitor"
  }
```

### HTTP Request

`POST https://api.nightwatch.io/api/v1/urls/URL_ID/competitors?access_token=ACCESS_TOKEN`

### Parameters

| Parameter          | Description                          |
|--------------------|--------------------------------------|
| url*               | URL to track                         |
| match_subdomains   | Whether to match subdomains          |
| match_nested_urls  | Whether to match subpaths in the URL |
| places_match       | Place name or CID                    |
| places_image_title | Title for tracking in image carousel |
| custom_name        | Custom competitor name               |


Parameters marked with * are mandatory.


## Remove competitor

```shell
curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/competitors/COMPETITOR_ID?access_token=ACCESS_TOKEN' \\
  -X DELETE \\
  -H 'Content-Type: application/json' \\
```

> The above command returns a HTTP 204 response.


### HTTP Request

`POST https://api.nightwatch.io/api/v1/urls/URL_ID/competitors/COMPETITOR_ID?access_token=ACCESS_TOKEN`

### Parameters

| Parameter      | Description                      |
|----------------|----------------------------------|
| url_id*        | URL ID the competitor belongs to |
| competitor_id* | Competitor ID to be deleted      |


Parameters marked with * are mandatory.
