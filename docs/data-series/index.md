# Data Series

Using Nightwatch API, you can retrieve data series for the following resources:

- URL and Competitor URLs
- Keyword
- Keyword View
- Group
- Backlinks
- Backlink Views

All series are represented by an array of date-value pairs, which you can use to visualize graphs
and calculate statistics.

## URL Series

```shell
curl 'https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&url_ids%5B%5D=161490&date_from=2019-04-02&date_to=2019-07-01&with_competitors=false'
```

> The above command returns JSON structured like this:

```json
[{
  url_id: 161490,
  url: "example.com",
  url_series: [
    {
      name: "average_position",
      series:  [["2019-04-22", 100], ...]
    }, ...
  ],
  competitor_series: [
    {
      competitor_id: 123,
      competitor_url: "example.com",
      name: "average_position",
      series:  [["2019-04-22", 3], ...]
    }, ...
  ]
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN`

| Parameter        | Description                                                    |
|------------------|----------------------------------------------------------------|
| url_ids*         | Array of URL ids                                               |
| with_competitors | Include competititor URL series (true or false, default: true) |
| date_from*       | Start date for series in YYYY-MM-DD format (e.g 2019-01-02)    |
| date_to*         | End date for series in YYYY-MM-DD format (e.g. 2019-04-02)     |


Parameters marked with * are mandatory.

Available URL series:

| Series                  | Description                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------|
| average_position        | Average rank position                                                                            |
| search_visibility_index | Search visibility index ([more info](https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions)) |
| click_potential         | Click potential ([more info](https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions))         |
| keyword_distribution    | Distribution of keyword positions in Top 3, Top 10, Top 100, No rank                             |
| total_keywords          | Number of keywords tracked                                                                       |
| indexed_pages           | Number of indexed pages on Google                                                                |
| moz_domain_authority    | Moz's Domain Authority                                                                           |
| moz_page_authority      | Moz's Page Authority                                                                             |
| ahrefs_domain_rating    | Ahrefs' Domain Rating                                                                            |
| ahrefs_rank             | Ahrefs' URL Rank                                                                                 |
| majestic_trust_flow     | Majestic's Trust Flow                                                                            |
| majestic_citation_flow  | Majestic's Citation Flow                                                                         |
| clicks                  | Number of organic search clicks (when Search Console property is connected)                      |
| impressions             | Number of organic search impressions (when Search Console property is connected)                 |
| sessions                | Number of Google Analytics Sessions (when Google Analytics property is connected)                |
| pageviews               | Number of Google Analytics Pageviews (when Google Analytics property is connected)               |
| users                   | Number of Google Analytics Users (when Google Analytics property is connected)                   |
| search_console_position | Search Console average position (when Search Console property is connected)                      |
| ctr                     | Search Console CTR (when Search Console property is connected)                                   |


## Keyword series

```shell
curl 'https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&keyword_ids%5B%5D=1212189&date_from=2019-06-04&date_to=2019-07-04'
```

> The above command returns JSON structured like this:

```json
[{
  keyword_id: 1212189,
  keyword: "goji berries",
  keyword_series: [
    {
      name: "position",
      series:  [["2019-04-22", 3], ...]
    }, ...
  ],
  competitor_series: [
    {
      competitor_id: 123,
      competitor_url: "example.com",
      name: "position",
      series:  [["2019-04-22", 3], ...]
    }, ...
  ]
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN`

| Parameter    | Description                                                 |
|--------------|-------------------------------------------------------------|
| keyword_ids* | Array of keyword ids                                        |
| date_from*   | Start date for series in YYYY-MM-DD format (e.g 2019-01-02) |
| date_to*     | End date for series in YYYY-MM-DD format (e.g. 2019-04-02)  |


Parameters marked with * are mandatory.

Available keyword series:

| Series                  | Description                                                                      |
|-------------------------|----------------------------------------------------------------------------------|
| position                | Keyword's rank                                                                   |
| position_organic        | Keyword's organic rank                                                           |
| position_local_pack     | Keyword's local pack rank                                                        |
| position_places         | Keywords rank in Google Places (when engine is Google Places)                    |
| position_places_image   | Keywords rank in image carousel (when engine is Google)                          |
| clicks                  | Number of organic search clicks (when Search Console property is connected)      |
| impressions             | Number of organic search impressions (when Search Console property is connected) |
| search_console_position | Search Console average position (when Search Console property is connected)      |
| ctr                     | Search Console CTR (when Search Console property is connected)                   |


## Keyword view series

```shell
curl 'https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&dynamic_view_ids%5B%5D=123&date_from=2019-06-04&date_to=2019-07-04'
```

```json
[{
  dynamic_view_id: 161490,
  dynamic_view_name: "A view"
  dynamic_view_series: [
    {
      name: "average_position",
      series:  [["2019-06-04", 10], ...]
    }, ...
  ]
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN`

| Parameter         | Description                                                 |
|-------------------|-------------------------------------------------------------|
| dynamic_view_ids* | Array of keyword view ids                                   |
| date_from*        | Start date for series in YYYY-MM-DD format (e.g 2019-01-02) |
| date_to*          | End date for series in YYYY-MM-DD format (e.g. 2019-04-02)  |


Parameters marked with * are mandatory.

Available keyword series:

| Series                  | Description                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------|
| average_position        | Average rank position                                                                            |
| search_visibility_index | Search visibility index ([more info](https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions)) |
| click_potential         | Click potential ([more info](https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions))         |
| keyword_distribution    | Distribution of keyword positions in Top 3, Top 10, Top 100, No rank                             |
| total_keywords          | Number of keywords that fall into view's filters on specified days                               |
| up_down                 | Number of keywords whose position increased and decreased                                        |


## Group series

```shell
curl 'https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&url_group_ids%5B%5D=123&date_from=2019-06-04&date_to=2019-07-04'
```

```json
[{
  url_group_id: 123,
  url_group_name: "A group"
  url_group_series: [
    {
      name: "average_position",
      series:  [["2019-06-04", 10], ...]
    }, ...
  ]
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN`

| Parameter      | Description                                                 |
|----------------|-------------------------------------------------------------|
| url_group_ids* | Array of group ids                                          |
| date_from*     | Start date for series in YYYY-MM-DD format (e.g 2019-01-02) |
| date_to*       | End date for series in YYYY-MM-DD format (e.g. 2019-04-02)  |


Parameters marked with * are mandatory.

Available keyword series:

| Series                  | Description                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------|
| average_position        | Average rank position                                                                            |
| search_visibility_index | Search visibility index ([more info](https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions)) |
| click_potential         | Click potential ([more info](https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions))         |
| keyword_distribution    | Distribution of keyword positions in Top 3, Top 10, Top 100, No rank                             |
| total_keywords          | Number of keywords in the group on specified days                                                |
| up_down                 | Number of keywords whose position increased and decreased                                        |


## Backlink series (for a URL)

```shell
curl 'https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&url_id_for_all_backlinks=123&date_from=2019-06-04&date_to=2019-07-04'
```

```json
[{
  backlink_view_series: [
    {
      name: "backlinks_total",
      series:  [["2019-06-04", 10], ...]
    },
    {
      name: "backlinks_referring_ips",
      series:  [["2019-06-04", 10], ...]
    }, ...
  ]
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN`

| Parameter                 | Description                                                 |
|---------------------------|-------------------------------------------------------------|
| url_id_for_all_backlinks* | URL id                                                      |
| date_from*                | Start date for series in YYYY-MM-DD format (e.g 2019-01-02) |
| date_to*                  | End date for series in YYYY-MM-DD format (e.g. 2019-04-02)  |


Parameters marked with * are mandatory.

Available backlink series:

| Series                      | Description       |
|-----------------------------|-------------------|
| backlinks_all               | Active backlinks  |
| backlinks_total             | Total backlinks   |
| backlinks_referring_ips     | Referring IPs     |
| backlinks_referring_domains | Referring Domains |
| backlinks_referring_subnets | Referring Subnets |


## Backlink series (for a view)

```shell
curl 'https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&backlink_view_ids%5B%5D=123&date_from=2019-04-02&date_to=2019-07-01'
```

```json
[{
  backlink_view_id: 123,
  backlink_view_name: "DR > 10"
  backlink_view_series: [
    {
      name: "backlinks_total",
      series:  [["2019-06-04", 10], ...]
    },
    {
      name: "backlinks_referring_ips",
      series:  [["2019-06-04", 10], ...]
    }, ...
  ]
]
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN`

| Parameter          | Description                                                 |
|--------------------|-------------------------------------------------------------|
| backlink_view_ids* | Backlink view ids                                           |
| date_from*         | Start date for series in YYYY-MM-DD format (e.g 2019-01-02) |
| date_to*           | End date for series in YYYY-MM-DD format (e.g. 2019-04-02)  |


Parameters marked with * are mandatory.

Available backlink series:

| Series                      | Description       |
|-----------------------------|-------------------|
| backlinks_all               | Active backlinks  |
| backlinks_total             | Total backlinks   |
| backlinks_referring_ips     | Referring IPs     |
| backlinks_referring_domains | Referring Domains |
| backlinks_referring_subnets | Referring Subnets |





