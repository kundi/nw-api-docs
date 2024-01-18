# User

This endpoint deals with the current user data. If you want to manage users under
your account (add, remove subusers or change their permissions),
head over to the <a href="/subusers/">subusers</a> section.

## Get user

```shell
curl 'https://api.nightwatch.io/api/v1/user?access_token=ACCESS_TOKEN' \
  -H 'Content-Type: application/json'
```

### HTTP Request

`GET https://api.nightwatch.io/api/v1/user?access_token=ACCESS_TOKEN`

Available fields:

| Field               | Description                                                                   |
|---------------------|-------------------------------------------------------------------------------|
| id                  | User's internal ID                                                            |
| name                | User's name                                                                   |
| report_interval     | Summary report interval (in seconds)                                          |
| report_hour         | Hour of the summary report                                                    |
| payment_active      | Whether or not the paid subscription is active                                |
| plan                | Info about the subscription plan                                              |
| account_access      | Info about the current user account access                                    |
| keyword_limit       | Keyword limit                                                                 |
| url_limit           | URL limit                                                                     |
| timezone            | User's timezone                                                               |
| whitelabel          | Whether or not the account is whitelabeled                                    |
| agency              | Whether or not the account is whitelabeled                                    |
| invoice_email       | Email used on the invoice                                                     |
| invoice_name        | Name used on the invoice                                                      |
| invoice_address     | Address used on the invoice                                                   |
| invoice_state       | State used on the invoice                                                     |
| invoice_city        | City used on the invoice                                                      |
| invoice_postcode    | Postcode used on the invoice                                                  |
| invoice_country     | Country used on the invoice                                                   |
| invoice_vat_number  | Country used on the invoice                                                   |
| is_company          | Whether or not the account is a company                                       |
| credits             | How many Partner API credits the account has                                  |
| status              | Account status (trial, expired, paying, subuser, cancelled)                   |
| active_until        | Until when the subscription is good for (this extends on every billing cycle) |
| next_payment_due_on | Date of next billing                                                          |
| keywords_remaining  | Keywords remaining until limit is reached                                     |
| urls_remaining      | URLs remaining until limit is reached                                         |
| keyword_count       | Keywords used                                                                 |
| url_count           | URLs used                                                                     |
| last_login_ip       | Last login IP                                                                 |


## Update user

```shell
curl 'https://api.nightwatch.io/api/v1/user?access_token=ACCESS_TOKEN' \
  -H 'Content-Type: application/json'
```

### HTTP Request

`PUT https://api.nightwatch.io/api/v1/user?access_token=ACCESS_TOKEN`

### URL Parameters

| Parameter          | Description                                                                                         |
|--------------------|-----------------------------------------------------------------------------------------------------|
| name               | Name                                                                                                |
| email              | Email                                                                                               |
| password           | Password                                                                                            |
| timezone           | Timezone in [TZ database name format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) |
| report_interval    | Summary report interval in seconds (available options: 86400, 604800, 2592000)                      |
| invoice_email      | Email for invoices                                                                                  |
| invoice_name       | Name on the invoice                                                                                 |
| invoice_address    | Address on the invoice                                                                              |
| invoice_state      | State on the invoice                                                                                |
| invoice_city       | City on the invoice                                                                                 |
| invoice_postcode   | Postcode on the invoice                                                                             |
| invoice_country    | Postcode on the invoice (Full name format, e.g New Zealand)                                         |
| invoice_vat_number | Company's VAT number                                                                                |
| is_company         | Is the account a company (needed for VAT exempt: true/false)                                        |

