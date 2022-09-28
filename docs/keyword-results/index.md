# Keyword Views

Keyword views are segmented keyword lists defined by a set of filters. They can match
keywords across the whole account (global views) or they can be scoped to a single URL (URL views).

<aside class="notice">
  All views need a filter definition. Individual filters can be chained by AND / OR.
</aside>

## Available filters and conditions

| Filter                    | Data type | Description                                                                |
|---------------------------|-----------|----------------------------------------------------------------------------|
| query                     | string    | Keyword term                                                               |
| position_changed_at       | date      | Time of last position change                                               |
| location                  | string    | Keyword's location                                                         |
| language                  | string    | Keyword's name                                                             |
| position                  | number    | Keyword's position                                                         |
| position_organic          | number    | Keyword's organic position                                                 |
| position_local_pack       | number    | Keyword's local pack position                                              |
| position_featured_snippet | number    | Keyword's featured snippet position                                        |
| position_knowledge_panel  | number    | Keyword's knowledge panel position                                         |
| search_volume_global      | number    | Keyword's global SV                                                        |
| search_volume_local       | number    | Keyword's local SV                                                         |
| average_cpc_global        | number    | Keyword's global CPC                                                       |
| average_cpc_local         | number    | Keyword's local CPC                                                        |
| day_change                | number    | Position change in the last day                                            |
| week_change               | number    | Position change in the last week                                           |
| month_change              | number    | Position change in the last month                                          |
| keyword_created_at        | date      | Keyword's creation date                                                    |
| keyword_tag               | string    | Keyword's tag                                                              |
| engine                    | string    | Engine (possible values: google, bing, yahoo, duckduckgo, youtube, places) |
| mobile                    | boolean   | Whether the keyword is mobile (possible values: true, false)               |
| keyword_last_processed_at | date      | Time of last position refresh                                              |
| result_url                | string    | Keyword's ranking URL in SERP                                              |


### String data type conditions

| Condition       |
|-----------------|
| contains        |
| starts_with     |
| ends_with       |
| equals          |
| not_contains    |
| not_starts_with |
| not_ends_with   |
| not_equals      |


### Number and date data type conditions

| Condition     |
|---------------|
| less          |
| more          |
| less_or_equal |
| more_or_equal |
| equals        |


### Presence and absence conditions

| Condition |
|-----------|
| present   |
| absent    |


These conditions only apply to the following fields: position_organic, position_local_pack, position_places_image,
position_featured_snippet, position_knowledge_panel, search_volume_global, search_volume_local, average_cpc_global, average_cpc_local, result_url.

### Forming filters

Using the provided filters and conditions, you can freely form a filter block using the following form:

```javascript
// A filter block to search for keywords with global SV larger than 200
{
  field:"search_volume_global",
  condition:"more",
  value:2000
}

// A filter block to search for keywords that have a position (they are ranking)
{
  field:"position",
  condition:"present"
}

// A filter block to search for keywords with a specific tag:
{
  field:"keyword_tag",
  condition:"equals",
  value:"Branded"
}
```

### Combining filters

To prepare filter blocks to be used in a query, they need to be put in `filter groups`.

A filter group is a group of filters tied together with `OR` logical operator.

Multiple filter groups are tied together with `AND` logical operator.

`filter groups` are used for advanced keyword filtering and saving views (described in the next sections).

```javascript
// Joining filters into a group.

// OR example:
// This example reads as: "return keywords with position 1 together with keywords with position more than 50"
filter_groups = [{
  filters: [
    {
      field:"position",
      condition:"equals",
      value:"1"
    },
    {
      field:"position",
      condition:"more",
      value:"50"
    }
  ]
}]

// AND example:
// This example reads as: "return keywords with position 1 that have search volume larger than 10000"
filter_groups = [{
  filters: [
    {
      field:"position",
      condition:"equals",
      value:"1"
    }
  ]
}, {
  filters: [
    {
      field:"search_volume_local",
      condition:"more",
      value:10000
    }
  ]
}]
```

## Keyword filtering

While views are intended for saving a particular filter set and then being used as saved keyword segments, it's also
possible to use them to filter keywords on the fly.

```shell
curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/keywords?access_token=ACCESS_TOKEN \
  filter_groups=[{"filters":[{"field":"position","condition":"equals","value":"1"}]}]
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
    ...
    }
  ]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/urls/URL_ID/keywords`

### URL Parameters

| Parameter     | Description                                                                        |
|---------------|------------------------------------------------------------------------------------|
| filter_groups | Filter configuration                                                               |
| direction     | The direction to sort by. <br><br>Possible values: asc, desc                       |
| search        | A general search string to filter by keywords' term, tags, result URL and location |
| page          | Page number (pagination)                                                           |
| group_id      | Group ID                                                                           |
| scope         | When group ID is not provided, this value has to be "account"                      |
| limit         | Amount of keywords in a page                                                       |



```shell
curl 'https://api.nightwatch.io/api/v1/dynamic_views?access_token=ACCESS_TOKEN&group_id=123
```

> The above command returns JSON structured like this:

```json
[
  {
    "id":5878,
    "name":"Branded",
    "search_keyword_url_id":22199,
    "url_group_id":null,
    "keyword_count":4,
    "report_count":0
  },
  ...
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/dynamic_views?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter             | Description                         |
|-----------------------|-------------------------------------|
| group_id              | Views belonging to a specific group |
| search_keyword_url_id | Views belonging to a specific url   |

* at least one of the group_id or search_keyword_url_id parameters must be present


## Create a view

A view is set up in two phases. First we create the view, and then we create the filters.

```shell
curl 'https://api.nightwatch.io/api/v1/dynamic_views?access_token=access_token  \
  -H 'Accept: application/json' \
  -X POST \
  -d '{"dynamic_view":{"name":"Example view","url_group_id":"26738"}}'
```

> The above command returns JSON structured like this:

```json
{
  "id":58375,
  "name":"Example view",
  "search_keyword_url_id":null,
  "url_group_id":26738,
  "keyword_count":397,
  "report_count":0
  }
```

### HTTP Request

`POST https://api.nightwatch.io/api/v1/dynamic_views`

### URL Parameters

| Parameter             | Description                        |
|-----------------------|------------------------------------|
| name                  | View's name                        |
| group_id              | View belonging to a specific group |
| search_keyword_url_id | View belonging to a specific url   |

* at least one of the group_id or search_keyword_url_id parameters must be present

<aside class="notice">
  A view referenced to a group is not tied to the group's scope, it's just an organizational container
  for a view. When a view is referenced to a URL (search_keyword_url_id), it is scoped to that URL's
  keywords. A view can belong to either a group or URL, never both.
</aside>


Next, after a view has been created, we need to create create its filter groups:

```shell
curl 'https://api.nightwatch.io/api/v1/dynamic_views/VIEW_ID/filter_groups?access_token=ACCESS_TOKEN \
    -H 'Content-Type: application/json' \
    -X POST \
    -d '{"filter_group":{"filters":[{"field":"query","condition":"contains","value":"example"}]}}'
```

> The above command returns JSON structured like this:

```json
  {"id":60091,
   "dynamic_view_id":58375,
   "filters":[{"id":64359,"field":"query","condition":"contains","value":"example"
  }
```

### HTTP Request

`POST https://api.nightwatch.io/api/v1/dynamic_views/VIEW_ID/filter_groups`

### URL Parameters

| Parameter | Description            |
|-----------|------------------------|
| filters   | Array of filter groups |


::: info
If you have multiple filter groups (AND filters chaining), you have to make multiple `filter_groups` `POST` requests.
:::

## List views

```shell
curl 'https://api.nightwatch.io/api/v1/dynamic_views?url_id=123&access_token=ACCESS_TOKEN
```

> The above command returns JSON structured like this:

```json
[
  {
    "id":58375,
    "name":"Example view",
    "url_group_id":26738,
    "keyword_count":397,
    "report_count":0
  }
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/dynamic_views`

### URL Parameters

| Parameter      | Description                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------|
| url_id         | Filter by URL ID (get views belonging to specified URL)                                       |
| group_id       | Filter by GROUP ID (get views belonging to specified group)                                   |
| without_counts | When true, there is no keyword_count and report_count in the response (makes querying faster) |

## Get a view

```shell
curl 'https://api.nightwatch.io/api/v1/dynamic_views/VIEW_ID?access_token=ACCESS_TOKEN
```

> The above command returns JSON structured like this:

```json
{
  "id":58375,
  "name":"Example view",
  "search_keyword_url_id":null,
  "url_group_id":26738,
  "keyword_count":397,
  "report_count":0
  }
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/dynamic_views/VIEW_ID`

## Get view's filtered keywords

Once the view is persisted and its filters configured, we can use it to get its filtered
keywords.

```shell
  curl 'https://api.nightwatch.io/api/v1/urls/URL_ID/keywords?access_token=ACCESS_TOKEN&dynamic_view_id=VIEW_ID'
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/urls/URL_ID/keywords`

### URL Parameters

| Parameter        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dynamic_view_id* | View's ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| sort             | The name of the field to sort by. <br><br>Possible values: id, query, google_gl, google_hl, last_processed_at, created_at, updated_at, position, position_type, position_organic, position_places, position_places_image, position_changed_by, position_changed_status, position_changed_at, position_local_pack, position_featured_snippet, position_knowledge_panel, local_search, position_changed_during_last_day, position_changed_during_last_week, position_changed_during_last_month, mobile, engine, previous_position, best_position, available_serp_features, adwords_global_search_volume, adwords_global_average_cpc, adwords_local_search_volume, adwords_local_average_cpc |
| direction        | The direction to sort by. <br><br>Possible values: asc, desc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| page             | Page number (pagination)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| scope            | When group ID is not provided, this value has to be "account"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| limit            | Amount of keywords in a page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |


Parameters marked with * are mandatory.

## Update a view

You can update the view's name.

```shell
curl 'https://api.nightwatch.io/api/v1/dynamic_views/59203?access_token=ACCESS_TOKEN' \\
     -X PUT \\
     -H 'Content-Type: application/json; charset=UTF-8' \\
     --data-binary '{"dynamic_view":{"name":"Top 3 keywords"}}'
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/dynamic_views/VIEW_ID`

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| name*     | View's name |


Parameters marked with * are mandatory.

> The above command returns JSON structured like this:

```json
{
  "id":58375,
  "name":"Example view",
  "search_keyword_url_id":null,
  "url_group_id":26738,
  "keyword_count":397,
  "report_count":0
  }
```

## Delete a view

```shell
curl 'https://api.nightwatch.io/api/v1/dynamic_views/59203?access_token=ACCESS_TOKEN \
      -X DELETE
```

> The above command returns JSON structured like this:

```json
{
  "id":58375,
  "name":"Example view",
  "search_keyword_url_id":null,
  "url_group_id":26738,
  "keyword_count":397,
  "report_count":0
  }
```

### HTTP Request

`DELETE https://api.nightwatch.io/api/v1/dynamic_views/VIEW_ID`

> The above command returns JSON structured like this:

```json
{
  "id":58375,
  "name":"Example view",
  "search_keyword_url_id":null,
  "url_group_id":26738,
  "keyword_count":397,
  "report_count":0
  }
```
