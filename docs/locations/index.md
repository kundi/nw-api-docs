# Adword Locations
This section describes fetching adword locations that can be used to specify precise location for newly added keywords.

## Get Locations
Retrieves list of possible locations based on `search`. It will return locations only from specified country using `gl`. This information can be used for specifying precise location when creating keywords.

```shell
curl 'https://api.nightwatch.io/api/v1/search_locations?access_token=ACCESS_TOKEN&gl=us&search=new%20york'
```

```json
[
    {
        "id": 1023191,
        "canonical_name_full": "New York,New York,United States",
        "target_type": "City",
        "description": "New York,New York,United States (City)"
    },
    {
        "id": 21167,
        "canonical_name_full": "New York,United States",
        "target_type": "State",
        "description": "New York,United States (State)"
    },
    ...
]
```

### HTTP Request

`https://api.nightwatch.io/api/v1/search_locations?access_token=ACCESS_TOKEN`

### URL Parameters
Make sure that you are searching for location that is country specified with `gl` parameter. Possible values for `gl` parameter are described [here](https://developers.google.com/custom-search/docs/xml_results_appendices#countryCodes).

| Parameter   | Description                                                    |
|-------------|----------------------------------------------------------------|
| gl          | Geolocation identifier (ex. `us`, `fr`, `de`)                  |
| search      | String specifying location (ex. `new york`, `texas`, `new y`)  |
| target_type | (Optional) Filter by location type (ex. `city`, `county`, `airport`) |