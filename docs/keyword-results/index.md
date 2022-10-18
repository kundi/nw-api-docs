# Keyword results

Every keyword gets a new result every day. A keyword result is a structure that contains
data on the keyword's position for the specified URL in a SERP.

## List results

```shell
curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/keywords/KEYWORD_ID/results?time_start=2017-05-08&time_end=2017-05-09&access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 24771,
    "position": 42,
    "result_url": "http://example.com",
    "created_at": "2019-05-09 20:01:12 +0200",
    "position_type": null,
    "position_organic": null,
    "position_places": null,
    "position_places_image": null,
    "position_local_pack": null,
    "result_url_path": "/"
  }
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/urls/URL_ID/keywords/KEYWORD_ID?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter   | Description                                              |
|-------------|----------------------------------------------------------|
| time_start* | The starting date in YYYY-MM-DD format (e.g. 2019-01-01) |
| time_end*   | The ending date in YYYY-MM-DD format (e.g. 2019-01-01)   |


