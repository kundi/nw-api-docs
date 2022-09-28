# URLs

URLs represent a site or domain for which a set of keywords are being tracked.
URLs can also contain backlinks, and are used to perform site audits on.
Althought these two last functionalities have their own endpoint, but their
specific settings are configured with the URL endpoint.

<aside class="notice">
  URLs belong to a URL group, having at least one group is the prerequisite for
  adding URLs, keywords and other resources.
</aside>

## URL data

| Field                                     | Description                                                                                            |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------|
| id                                        | URL ID                                                                                                 |
| url_type                                  | URL engine type (deprecated)                                                                           |
| url                                       | URL                                                                                                    |
| last_processed_at                         | Time when number of Google indexed pages was last retrieved                                            |
| created_at                                | Time when this URL was created                                                                         |
| keyword_count                             | Number of keywords this URL has                                                                        |
| domain_authority                          | Domain authority ranking                                                                               |
| domain_authority_change                   | Last observed change in domain authority                                                               |
| google_indexed                            | Number of pages indexed by Google                                                                      |
| keyword_changes                           | How many keywords went up (1), went down (-1), or stayed the same (0)                                  |
| url_group_id                              | Group ID this URL belongs to                                                                           |
| places_info                               | Place extended matching data                                                                           |
| places_info.place_cid                     | Match place by CID                                                                                     |
| places_info.place_title                   | Match place by title                                                                                   |
| places_info.place_description             | Places description, informational, no matching is performed on description                             |
| url_info                                  | Places_info alias                                                                                      |
| places_match                              | Place's CID (`cid_<CID>` format) or, if CID is empty, place's title                                    |
| places_keyword                            | (deprecated)                                                                                           |
| places_image_title                        | Title for tracking in image carousel                                                                   |
| custom_name                               | Custom URL name                                                                                        |
| youtube_video_id                          | Youtube video ID, for Youtube video tracking purposes                                                  |
| youtube_channel                           | Youtube channel name, for Youtube channel tracking purposes                                            |
| competitors                               | List of competitors this URL has                                                                       |
| google_indexed_change                     | Daily change of number of pages index by Google                                                        |
| report_count                              | How many reports this URL has                                                                          |
| google_analytics_profile_id               | Google Analytics profile ID, might be empty if GA integration is not setup                             |
| country_code                              | ISO3166 alpha-2 country code                                                                           |
| language_code                             | ISO639 language code                                                                                   |
| search_console_url                        | Google Search Console URL this URL matches with                                                        |
| backlinks_enabled                         | Whether backlinks are enabled for this URL                                                             |
| backlinks_status                          | Backlinks status data (read only)                                                                      |
| backlinks_count                           | Total number of backlinks                                                                              |
| google_analytics_updated_at               | Last time GA data was updated                                                                          |
| backlinks_fetching_enabled                | Whether this URL has recurring backlinks fetching enabled                                              |
| include_local_pack_in_main_position       | Whether to include local pack rankings in the main one (boolean, default: true)                        |
| include_places_image_in_main_position     | Whether to include image carousel rankings in the main one (boolean, default: true)                    |
| include_featured_snippet_in_main_position | Whether to include feature snippets rankings in the main one (boolean, default: true)                  |
| include_knowledge_panel_in_main_position  | Whether to include knowledge panel rankings in the main one (boolean, default: true)                   |
| crawling_session_path_ignore_pattern      | Ignore path patterns for site audits                                                                   |
| crawling_session_url_params_enabled       | Whether to include query parameters in site audits (boolean, default: true)                            |
| crawling_session_follow_nofollow_links    | Whether to follow nofollow links in site audits (boolean, default: true)                               |
| match_subdomains                          | Whether to match subdomains (boolean, default: false)                                                  |
| match_nested_urls                         | Whether to match subpaths in the URL (boolean, default: true)                                          |
| site_audit_interval                       | Recurring site audit intervals (in seconds, accepted valud are: 604800 (1 week) and 2592000 (30 days)) |
| backlinks_settings.ignored_domains        | List of domain backlinks from will be ignored                                                          |
| backlinks_settings.min_url_rating         | Minimum URL rating for backlink domains                                                                |
| next_site_audit_crawl_at                  | Next time a recurring site audit will happen (read only)                                               |
| site_audit_interval                       | Recurring site audit intervals (in seconds, accepted valud are: 604800 (1 week) and 2592000 (30 days)) |
| backlinks_settings.ignored_domains        | List of domain backlinks from will be ignored                                                          |
| backlinks_settings.min_url_rating         | Minimum URL rating for backlink domains                                                                |
| seo_metrics                               | Moz, Majestic, and Ahref SEO metrics                                                                   |
| seo_metrics_changes                       | Last observed changes for Moz, Majestic, and Ahref SEO metrics                                         |
| match_subdomains                          | Whether to match URL subdomains                                                                        |
| match_nested_urls                         | Whether to match URL subpaths                                                                          |



## List URLs

```shell
curl 'https://api.nightwatch.io/api/v1/urls?access_token=ACCESS_TOKEN' \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 31234,
    "url_type": "google",
    "url_info": {},
    "url": "http://example.com",
    "last_processed_at": "2019-07-21T00:00:53.892Z",
    "created_at": "2013-10-08T17:38:43.800Z",
    "keyword_count": 17,
    "domain_authority": 1,
    "domain_authority_change": -1,
    "google_indexed": 24,
    "keyword_changes": {
      "0": 16,
      "1": 1,
      "-1": 0
    },
    "url_group_id": 36241,
    "places_info": null,
    "places_match": null,
    "places_keyword": null,
    "places_image_title": null,
    "custom_name": "",
    ...
  },
  ...
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/urls?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter | Description                                         |
|-----------|-----------------------------------------------------|
| group_id  | Only return URLs belonging to this group (optional) |


## Get a URL

```shell
curl 'https://api.nightwatch.io/api/v1/urls/31234?access_token=ACCESS_TOKEN' \
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
{
  "id": 31234,
  "url_type": "google",
  "url_info": {},
  "url": "http://example.com",
  "last_processed_at": "2019-07-21T00:00:53.892Z",
  "created_at": "2013-10-08T17:38:43.800Z",
  "keyword_count": 17,
  "domain_authority": 1,
  "domain_authority_change": -1,
  "google_indexed": 24,
  "keyword_changes": {
    "0": 16,
    "1": 1,
    "-1": 0
  },
  "url_group_id": 36241,
  "places_info": null,
  "places_match": null,
  "places_keyword": null,
  "places_image_title": null,
  "custom_name": "",
  ...
}
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/urls/URL_ID?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter | Description                     |
|-----------|---------------------------------|
| url_id    | The id of the URL to be fetched |


## Create a URL

```shell
curl 'https://api.nightwatch.io/api/v1/urls?access_token=ACCESS_TOKEN' \\
  -X POST \\
  -H 'Content-Type: application/json' \\
  -d '
    {
      "url": {
        "url": "example.com",
        "custom_name": "Example Site",
        "country_code": "us",
        "language_code": "en",
        "places_match": null,
        "match_nested_urls": false,
        "match_subdomains": false,
        "url_group_id": 1234,
      }
    }
  '
```

> The above command returns JSON structured like this:

```json
{
  "id": 31234,
  "url_type": "google",
  "url_info": {},
  "url": "http://example.com",
  "last_processed_at": "2019-07-21T00:00:53.892Z",
  "created_at": "2013-10-08T17:38:43.800Z",
  "keyword_count": 17,
  "domain_authority": 1,
  "domain_authority_change": -1,
  "google_indexed": 24,
  "keyword_changes": {
    "0": 16,
    "1": 1,
    "-1": 0
  },
  "url_group_id": 36241,
  "places_info": null,
  "places_match": null,
  "places_keyword": null,
  "places_image_title": null,
  "custom_name": "",
  ...
}
```

### HTTP Request

`POST https://api.nightwatch.io/api/v1/urls?access_token=ACCESS_TOKEN`

### Body Parameters

| Parameter         | Description                                   |
|-------------------|-----------------------------------------------|
| url*              | URL to track                                  |
| custom_name       | Custom URL name, used for displaying purposes |
| country_code*     | ISO3166 alpha-2 coutry code                   |
| language_code*    | ISO639-1 language code                        |
| places_match      | Place name or CID                             |
| match_nested_urls | Whether to match subpaths in the URL          |
| match_subdomains  | Whether to match subdomains                   |
| url_group_id*     | Group this URL will belong to                 |


Parameters marked with * are mandatory.

::: info
Country and language codes are used for retrieving the number of indexed
pages by Google, and as a default setting for keywords. However, keywords have
their own location and language specification, and are not affected by these
settings.
:::

## Update a URL

```shell
curl 'https://api.nightwatch.io/api/v1/urls/31234?access_token=ACCESS_TOKEN' \\
-X PUT \\
-H 'Content-Type: application/json' \\
-d '
  {
    "url": {
      "url": "www.example.com"
      "custom_name": "Example URL"
      "country_code": "si"
      "language_code": "sl"
      "places_match": "cid_123456789"
      "match_nested_urls": true
      "match_subdomains": false
      "url_group_id": 12345
    }
  }
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 31234,
    "url_type": "google",
    "url_info": {},
    "url": "http://example.com",
    "last_processed_at": "2019-07-21T00:00:53.892Z",
    "created_at": "2013-10-08T17:38:43.800Z",
    "keyword_count": 17,
    "domain_authority": 1,
    "domain_authority_change": -1,
    "google_indexed": 24,
    "keyword_changes": {
      "0": 16,
      "1": 1,
      "-1": 0
    },
    "url_group_id": 36241,
    "places_info": null,
    "places_match": null,
    "places_keyword": null,
    "places_image_title": null,
    "custom_name": "",
    ...
  }
]
```

### HTTP Request

`PUT https://api.nightwatch.io/api/v1/urls/URL_ID?access_token=ACCESS_TOKEN`

### Body Parameters

| Parameter                                 | Description                                                                                            |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------|
| URL_ID                                    | URL ID                                                                                                 |
| url_group_id                              | Group ID this URL belong to                                                                            |
| places_match                              | Place name or CID                                                                                      |
| custom_name                               | Custom URL name, used for displaying purposes                                                          |
| country_code                              | ISO3166 alpha-2 country code                                                                           |
| language_code                             | ISO639 language code                                                                                   |
| include_local_pack_in_main_position       | Whether to include local pack rankings in the main one (boolean, default: true)                        |
| include_places_image_in_main_position     | Whether to include image carousel rankings in the main one (boolean, default: true)                    |
| include_featured_snippet_in_main_position | Whether to include feature snippets rankings in the main one (boolean, default: true)                  |
| include_knowledge_panel_in_main_position  | Whether to include knowledge panel rankings in the main one (boolean, default: true)                   |
| crawling_session_path_ignore_pattern      | Ignore path patterns for site audits                                                                   |
| crawling_session_url_params_enabled       | Whether to include query parameters in site audits (boolean, default: true)                            |
| crawling_session_follow_nofollow_links    | Whether to follow nofollow links in site audits (boolean, default: true)                               |
| match_subdomains                          | Whether to match subdomains (boolean, default: false)                                                  |
| match_nested_urls                         | Whether to match subpaths in the URL (boolean, default: true)                                          |
| site_audit_interval                       | Recurring site audit intervals (in seconds, accepted valud are: 604800 (1 week) and 2592000 (30 days)) |
| backlinks_settings.ignored_domains        | List of domain backlinks from will be ignored                                                          |
| backlinks_settings.min_url_rating         | Minimum URL rating for backlink domains                                                                |



## Delete a URL

```shell
curl 'https://api.nightwatch.io/api/v1/urls/31234?access_token=ACCESS_TOKEN' \\
  -X DELETE \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
{
  "id": 31234,
  "url_type": "google",
  "url_info": {},
  "url": "http://example.com",
  "last_processed_at": "2019-07-21T00:00:53.892Z",
  "created_at": "2013-10-08T17:38:43.800Z",
  "keyword_count": 17,
  "domain_authority": 1,
  "domain_authority_change": -1,
  "google_indexed": 24,
  "keyword_changes": {
    "0": 16,
    "1": 1,
    "-1": 0
  },
  "url_group_id": 36241,
  "places_info": null,
  "places_match": null,
  "places_keyword": null,
  "places_image_title": null,
  "custom_name": "",
  ...
}
```

### HTTP Request

`DELETE https://api.nightwatch.io/api/v1/urls/URL_ID?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter | Description         |
|-----------|---------------------|
| group_id  | The id of the group |

