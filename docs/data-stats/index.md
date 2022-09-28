# Data Stats

Calculates statistics for a specified URL or View in a given date range.

## Keyword Stats

```shell
curl 'https://api.nightwatch.io/api/v1/keyword_stats?access_token=ACCESS_TOKEN&start_date=07-03-2019&end_date=08-02-2019&dynamic_view_id=5106&url_id=80337' \\
  -H 'Content-Type: application/json'
```

> The above command returns JSON structured like this:

```json
  {
    "average_position": 39.0,
    "average_position_change": -24.3,
    "search_visibility_index": 3.7,
    "search_visibility_index_change": -76.7,
    "click_potential": 163.2,
    "click_potential_change": -412.0,
    "top3_count": 0,
    "top3_change": -2,
    "top10_count": 0,
    "top10_change": 0,
    "top100_count": 2,
    "top100_change": 1,
    "no_rank_count": 0,
    "no_rank_change": 0,
    "keywords_went_up": 0,
    "keywords_went_down": 2,
    "keywords_unchanged": 0,
    "keyword_count": 4,
    "url_count": 1,
    "average_positions": [
      ["2019-07-03", 14.67],
      ["2019-07-04", 8.0],
      ...
    ],
    "search_visibility_series": [
      ["2019-07-03", 80.4],
      ["2019-07-04", 8.17],
      ...
    ],
    "click_potential_series": [
      ["2019-07-03", 575.16],
      ["2019-07-04", 348.37],
      ...
    ],
    "keyword_distribution_series": [
      [
        "2019-07-03",
        {
          "top_3": 2.0,
          "top_10": 0.0,
          "top_100": 1.0,
          "no_rank": 0.0
        }
      ],
      [
        "2019-07-04",
        {
          "top_3": 0.0,
          "top_10": 1.0,
          "top_100": 0.0,
          "no_rank": 0.0
        }
      ],
      ...
    ],
    "keyword_up_down_series": [
      [
        "2019-07-03",
        {
          "went_up": 3.0,
          "went_down": 0.0,
          "stagnant": 0.0
        }
      ],
      [
        "2019-07-04",
        {
          "went_up": 1.0,
          "went_down": 0.0,
          "stagnant": 0.0
        }
      ],
      ...
    ],
    "indexed_pages": 289,
    "indexed_pages_change": -117,
    "indexed_pages_series": [
      ["2019-07-03", 406],
      ["2019-07-04", 317],
      ...
    ]
  }
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/keyword_stats?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter       | Description                                              |
|-----------------|----------------------------------------------------------|
| start_date*     | The starting date in YYYY-MM-DD format (e.g. 2019-01-01) |
| end_date*       | The ending date in YYYY-MM-DD format (e.g. 2019-01-31)   |
| url_id          | The URL id to calculate stats for                        |
| dynamic_view_id | The dynamic view id to calculate stats for               |


It's mandatory to specify either an `url_id` or `dynamic_view_id`.

Available stats:

| Stat                           | Description                                                                                             |
|--------------------------------|---------------------------------------------------------------------------------------------------------|
| average_position               | Latest average rank                                                                                     |
| average_position_change        | Average rank change                                                                                     |
| search_visibility_index        | Latest search visibility index ([more info](https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions)) |
| search_visibility_index_change | Search visibility index change                                                                          |
| click_potential                | Latest click potential ([more info](https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions))         |
| click_potential_change         | Click potential change                                                                                  |
| top3_count                     | Latest distribution of keywords in top 3 ranks                                                          |
| top3_change                    | Change in distribution of keywords in top 3 ranks                                                       |
| top10_count                    | Latest distribution of keywords in top 10 ranks                                                         |
| top10_change                   | Change in distribution of keywords in top 10 ranks                                                      |
| top100_count                   | Latest distribution of keywords in top 100 ranks                                                        |
| top100_change                  | Change in distribution of keywords in top 100 ranks                                                     |
| no_rank_count                  | Latest distribution of keywords not ranking                                                             |
| no_rank_change                 | Change in distribution of keywords not ranking                                                          |
| keywords_went_up               | Number of keywords that went up                                                                         |
| keywords_went_down             | Number of keywords that went down                                                                       |
| keywords_unchanged             | Number of keywords that remained unchanged                                                              |
| keyword_count                  | Total number of keywords                                                                                |
| url_count                      | Total number of URLs                                                                                    |
| average_positions              | Average position time series                                                                            |
| search_visibility_series       | Search visibility time series                                                                           |
| click_potential_series         | Click potential time series                                                                             |
| keyword_distribution_series    | Keyword distribution time series                                                                        |
| keyword_up_down_series         | Keywords up/down time series                                                                            |
| indexed_pages                  | Latest number of pages indexed by Google                                                                |
| indexed_pages_change           | The change of number of pages indexed by Google                                                         |
| indexed_pages_series           | The number of pages indexed by Google time series                                                       |

