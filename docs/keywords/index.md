# Keywords

Keywords are queries or terms that are used to perform searches in search engines.

**Keywords are uniquely defined with a specific combination of query, location, language, search engine, term and mobile setting.**

The prerequisite for adding keywords is the existence of a URL. All keywords need to be referenced to a specific URL.


## List keywords

```shell
curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/keywords?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
  [
    { "id":1,
      "last_processed_at":"2019-06-04T00:18:23.187Z",
      "query":"goji berries",
      "created_at":"2016-10-08T11:30:07.923Z",
      "position":6,
      "search_keyword_url_id":22199,
      "mobile":false,
      "local_search":null,
      "google_hl":"sl",
      "google_gl":"si",
      "last_day_change":0,
      "last_week_change":0,
      "last_month_change":0,
      "uri":"/",
      "result_url":"https://topgojiberries.com/",
      "last_position_change":[-1,"2019-05-26T00:18:40.646Z",true],
      "results_count":2770,
      "adwords_local_search_volume":0,
      "adwords_local_average_cpc":0.0,
      "adwords_global_search_volume":0,
      "adwords_global_average_cpc":0.0,
      "position_type":"organic",
      "position_organic":6,
      "position_places":null,
      "position_places_image":null,
      "position_local_pack":null,
      "position_featured_snippet":null,
      "position_knowledge_panel":null,
      "tags":[{"id":"Branded","name":"Branded"},{"id":"Difficult","name":"Difficult"}],
      "engine":"google",
      "url":"http://topgojiberries.com",
      "previous_position":5,
      "best_position":1,
      "position_changed_during_last_day":0,
      "position_changed_during_last_week":0,
      "position_changed_during_last_month":0,
      "historic_positions":[6,6,6,6,6,6,6,6,6,6,5,5,5,5,8,8,8,8,8,8,8,8,8,7,8,7,7,6,6,6,6,5],
      "last_historic_position_on":"2019-06-04",
      "position_change":0,
      "available_serp_features":{"places_image":false,"organic":true,"local_pack":false,"knowledge_panel":true,"featured_snippet":false}
    }
  ]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/urls/URL_ID/keywords?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| sort      | The name of the field to sort by. <br><br>Possible values: id, query, google_gl, google_hl, last_processed_at, created_at, updated_at, position, position_type, position_organic, position_places, position_places_image, position_changed_by, position_changed_status, position_changed_at, position_local_pack, position_featured_snippet, position_knowledge_panel, local_search, position_changed_during_last_day, position_changed_during_last_week, position_changed_during_last_month, mobile, engine, previous_position, best_position, available_serp_features, adwords_global_search_volume, adwords_global_average_cpc, adwords_local_search_volume, adwords_local_average_cpc |
| direction | The direction to sort by. <br><br>Possible values: asc, desc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| search    | A general search string to filter by keywords' term, tags, result URL and location                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| page      | Page number (pagination)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| limit     | Amount of keywords in a page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

::: tip
**It's possible to use advanced filtering for retrieving a list of keywords. Head over to the <a href="/keyword-views">Views</a> section.**
:::

### Response headers

| Header        | Description                              |
|---------------|------------------------------------------|
| X-Page-Count  | Number of pages for specified page limit |
| X-Total-Count | Total number of keywords                 |

### Dynamic Columns
To retrieve additional metrics for keywords, set the parameters below to `true`. By default, these fields are not included in the response.

- `calculate_search_volatility_selected_interval`: Includes the keyword's search volatility and its change.
- `calculate_click_potential_selected_interval`: Includes the keyword's click potential and its change.
- `calculate_traffic_value_selected_interval`: Includes the keyword's traffic value and its change.

```json
[
  {
    ...
    "search_volatility_selected_interval": 42.42,
    "search_volatility_change": -12.25,
    "click_potential_selected_interval": 5.0,
    "click_potential_change": 2.1,
    "traffic_value_selected_interval": 220.0,
    "traffic_value_change": 15.0,
    ...
  }
]
```

## Add keywords

```shell
curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/keywords/batch_create?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -X POST \\
  -d '{"keywords":"keyword1\nkeyword2\nkeyword3",
        "tags":[],
        "google_gl":"us",
        "google_hl":"en",
        "mobile":false,
        "desktop":true,
        "search_engine":
        "google"
      }'
```

> The above command returns JSON structured like this:

```json
  [
    { "id":1,
      "query":"keyword1",
      ...
    }, {
      "id":2,
      "query":"keyword2",
      ...
    },
    ...
  ]
```

### HTTP Request

`POST https://api.nightwatch.io/api/v1/urls/URL_ID/keywords/batch_create?access_token=ACCESS_TOKEN`

### Parameters

| Parameter           | Description                                                                                                                                                 |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| keywords*           | Search queries separated by new lines (\n)                                                                                                                  |
| google_hl*          | Search language code (see <a href="https://developers.google.com/custom-search/docs/ref_languages">here</a> for available options)                          |
| google_gl*          | Search geolocation code (see <a href="https://developers.google.com/custom-search/docs/xml_results_appendices#countryCodes">here</a> for available options) |
| search_engine*      | Search engine ('google', 'youtube', 'places', 'bing', 'yahoo' or 'duckduckgo')                                                                              |
| adwords_location_id | Location name from `canonical_name_full` using the [locations endpoint](/locations/). Partial names (e.g. `new yo`) will be matched to the closest location. |
| mobile              | Search adjusted for mobile devices (true or false, default: false)                                                                                          |
| desktop             | Search adjusted for desktop devices (true or false, default: true)                                                                                          |

Parameters marked with * are mandatory.

<aside class="notice">
  Creating keywords with both mobile and desktop set to true will create 2 separate instances for every provided keyword.
</aside>

## Remove keywords

```shell
curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/keywords/batch_destroy?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{"keyword_ids":["1","2"]}'
```

> The above command returns a HTTP 204 response.


### HTTP Request

`POST https://api.nightwatch.io/api/v1/urls/URL_ID/keywords/batch_destroy?access_token=ACCESS_TOKEN`

### Parameters

| Parameter    | Description                         |
|--------------|-------------------------------------|
| keyword_ids* | An array of keyword IDs for removal |


## Update a keyword

```shell
curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/keywords/KEYWORD_ID?access_token=ACCESS_TOKEN' \\
  -X PUT \\
  -H 'Content-Type: application/json; charset=UTF-8' \\
  -d '{"keyword":
       {"tags":["Branded"]"}
      }'
```

> The above command returns a HTTP 204 response.

### HTTP Request

`PUT https://api.nightwatch.io/api/v1/urls/URL_ID/keywords/KEYWORD_ID?access_token=ACCESS_TOKEN`

### Parameters

| Parameter | Description      |
|-----------|------------------|
| tags      | An array of tags |


<aside class="notice">
  Currently keyword tags are the only attribute that can be updated on a keyword.
</aside>
