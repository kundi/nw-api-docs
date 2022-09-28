import{_ as s,c as a,o as n,a as t}from"./app.0bca4e6e.js";const C=JSON.parse('{"title":"Data Series","description":"","frontmatter":{},"headers":[{"level":2,"title":"URL Series","slug":"url-series","link":"#url-series","children":[{"level":3,"title":"HTTP Request","slug":"http-request","link":"#http-request","children":[]}]},{"level":2,"title":"Keyword series","slug":"keyword-series","link":"#keyword-series","children":[{"level":3,"title":"HTTP Request","slug":"http-request-1","link":"#http-request-1","children":[]}]},{"level":2,"title":"Keyword view series","slug":"keyword-view-series","link":"#keyword-view-series","children":[{"level":3,"title":"HTTP Request","slug":"http-request-2","link":"#http-request-2","children":[]}]},{"level":2,"title":"Group series","slug":"group-series","link":"#group-series","children":[{"level":3,"title":"HTTP Request","slug":"http-request-3","link":"#http-request-3","children":[]}]},{"level":2,"title":"Backlink series (for a URL)","slug":"backlink-series-for-a-url","link":"#backlink-series-for-a-url","children":[{"level":3,"title":"HTTP Request","slug":"http-request-4","link":"#http-request-4","children":[]}]},{"level":2,"title":"Backlink series (for a view)","slug":"backlink-series-for-a-view","link":"#backlink-series-for-a-view","children":[{"level":3,"title":"HTTP Request","slug":"http-request-5","link":"#http-request-5","children":[]}]}],"relativePath":"data-series/index.md"}'),e={name:"data-series/index.md"},o=t(`<h1 id="data-series" tabindex="-1">Data Series <a class="header-anchor" href="#data-series" aria-hidden="true">#</a></h1><p>Using Nightwatch API, you can retrieve data series for the following resources:</p><ul><li>URL and Competitor URLs</li><li>Keyword</li><li>Keyword View</li><li>Group</li><li>Backlinks</li><li>Backlink Views</li></ul><p>All series are represented by an array of date-value pairs, which you can use to visualize graphs and calculate statistics.</p><h2 id="url-series" tabindex="-1">URL Series <a class="header-anchor" href="#url-series" aria-hidden="true">#</a></h2><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&amp;url_ids%5B%5D=161490&amp;date_from=2019-04-02&amp;date_to=2019-07-01&amp;with_competitors=false</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The above command returns JSON structured like this:</p></blockquote><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">  url_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">161490</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  url_series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">average_position</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-04-22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  competitor_series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      competitor_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      competitor_url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">average_position</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-04-22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="http-request" tabindex="-1">HTTP Request <a class="header-anchor" href="#http-request" aria-hidden="true">#</a></h3><p><code>GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN</code></p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>url_ids*</td><td>Array of URL ids</td></tr><tr><td>with_competitors</td><td>Include competititor URL series (true or false, default: true)</td></tr><tr><td>date_from*</td><td>Start date for series in YYYY-MM-DD format (e.g 2019-01-02)</td></tr><tr><td>date_to*</td><td>End date for series in YYYY-MM-DD format (e.g. 2019-04-02)</td></tr></tbody></table><p>Parameters marked with * are mandatory.</p><p>Available URL series:</p><table><thead><tr><th>Series</th><th>Description</th></tr></thead><tbody><tr><td>average_position</td><td>Average rank position</td></tr><tr><td>search_visibility_index</td><td>Search visibility index (<a href="https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions" target="_blank" rel="noreferrer">more info</a>)</td></tr><tr><td>click_potential</td><td>Click potential (<a href="https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions" target="_blank" rel="noreferrer">more info</a>)</td></tr><tr><td>keyword_distribution</td><td>Distribution of keyword positions in Top 3, Top 10, Top 100, No rank</td></tr><tr><td>total_keywords</td><td>Number of keywords tracked</td></tr><tr><td>indexed_pages</td><td>Number of indexed pages on Google</td></tr><tr><td>moz_domain_authority</td><td>Moz&#39;s Domain Authority</td></tr><tr><td>moz_page_authority</td><td>Moz&#39;s Page Authority</td></tr><tr><td>ahrefs_domain_rating</td><td>Ahrefs&#39; Domain Rating</td></tr><tr><td>ahrefs_rank</td><td>Ahrefs&#39; URL Rank</td></tr><tr><td>majestic_trust_flow</td><td>Majestic&#39;s Trust Flow</td></tr><tr><td>majestic_citation_flow</td><td>Majestic&#39;s Citation Flow</td></tr><tr><td>clicks</td><td>Number of organic search clicks (when Search Console property is connected)</td></tr><tr><td>impressions</td><td>Number of organic search impressions (when Search Console property is connected)</td></tr><tr><td>sessions</td><td>Number of Google Analytics Sessions (when Google Analytics property is connected)</td></tr><tr><td>pageviews</td><td>Number of Google Analytics Pageviews (when Google Analytics property is connected)</td></tr><tr><td>users</td><td>Number of Google Analytics Users (when Google Analytics property is connected)</td></tr><tr><td>search_console_position</td><td>Search Console average position (when Search Console property is connected)</td></tr><tr><td>ctr</td><td>Search Console CTR (when Search Console property is connected)</td></tr></tbody></table><h2 id="keyword-series" tabindex="-1">Keyword series <a class="header-anchor" href="#keyword-series" aria-hidden="true">#</a></h2><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&amp;keyword_ids%5B%5D=1212189&amp;date_from=2019-06-04&amp;date_to=2019-07-04</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The above command returns JSON structured like this:</p></blockquote><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">  keyword_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1212189</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  keyword</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">goji berries</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  keyword_series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-04-22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  competitor_series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      competitor_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      competitor_url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">position</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-04-22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="http-request-1" tabindex="-1">HTTP Request <a class="header-anchor" href="#http-request-1" aria-hidden="true">#</a></h3><p><code>GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN</code></p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>keyword_ids*</td><td>Array of keyword ids</td></tr><tr><td>date_from*</td><td>Start date for series in YYYY-MM-DD format (e.g 2019-01-02)</td></tr><tr><td>date_to*</td><td>End date for series in YYYY-MM-DD format (e.g. 2019-04-02)</td></tr></tbody></table><p>Parameters marked with * are mandatory.</p><p>Available keyword series:</p><table><thead><tr><th>Series</th><th>Description</th></tr></thead><tbody><tr><td>position</td><td>Keyword&#39;s rank</td></tr><tr><td>position_organic</td><td>Keyword&#39;s organic rank</td></tr><tr><td>position_local_pack</td><td>Keyword&#39;s local pack rank</td></tr><tr><td>position_places</td><td>Keywords rank in Google Places (when engine is Google Places)</td></tr><tr><td>position_places_image</td><td>Keywords rank in image carousel (when engine is Google)</td></tr><tr><td>clicks</td><td>Number of organic search clicks (when Search Console property is connected)</td></tr><tr><td>impressions</td><td>Number of organic search impressions (when Search Console property is connected)</td></tr><tr><td>search_console_position</td><td>Search Console average position (when Search Console property is connected)</td></tr><tr><td>ctr</td><td>Search Console CTR (when Search Console property is connected)</td></tr></tbody></table><h2 id="keyword-view-series" tabindex="-1">Keyword view series <a class="header-anchor" href="#keyword-view-series" aria-hidden="true">#</a></h2><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&amp;dynamic_view_ids%5B%5D=123&amp;date_from=2019-06-04&amp;date_to=2019-07-04</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">  dynamic_view_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">161490</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  dynamic_view_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A view</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  dynamic_view_series: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">average_position</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-06-04</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="http-request-2" tabindex="-1">HTTP Request <a class="header-anchor" href="#http-request-2" aria-hidden="true">#</a></h3><p><code>GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN</code></p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>dynamic_view_ids*</td><td>Array of keyword view ids</td></tr><tr><td>date_from*</td><td>Start date for series in YYYY-MM-DD format (e.g 2019-01-02)</td></tr><tr><td>date_to*</td><td>End date for series in YYYY-MM-DD format (e.g. 2019-04-02)</td></tr></tbody></table><p>Parameters marked with * are mandatory.</p><p>Available keyword series:</p><table><thead><tr><th>Series</th><th>Description</th></tr></thead><tbody><tr><td>average_position</td><td>Average rank position</td></tr><tr><td>search_visibility_index</td><td>Search visibility index (<a href="https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions" target="_blank" rel="noreferrer">more info</a>)</td></tr><tr><td>click_potential</td><td>Click potential (<a href="https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions" target="_blank" rel="noreferrer">more info</a>)</td></tr><tr><td>keyword_distribution</td><td>Distribution of keyword positions in Top 3, Top 10, Top 100, No rank</td></tr><tr><td>total_keywords</td><td>Number of keywords that fall into view&#39;s filters on specified days</td></tr><tr><td>up_down</td><td>Number of keywords whose position increased and decreased</td></tr></tbody></table><h2 id="group-series" tabindex="-1">Group series <a class="header-anchor" href="#group-series" aria-hidden="true">#</a></h2><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&amp;url_group_ids%5B%5D=123&amp;date_from=2019-06-04&amp;date_to=2019-07-04</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">  url_group_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  url_group_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A group</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  url_group_series: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">average_position</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-06-04</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="http-request-3" tabindex="-1">HTTP Request <a class="header-anchor" href="#http-request-3" aria-hidden="true">#</a></h3><p><code>GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN</code></p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>url_group_ids*</td><td>Array of group ids</td></tr><tr><td>date_from*</td><td>Start date for series in YYYY-MM-DD format (e.g 2019-01-02)</td></tr><tr><td>date_to*</td><td>End date for series in YYYY-MM-DD format (e.g. 2019-04-02)</td></tr></tbody></table><p>Parameters marked with * are mandatory.</p><p>Available keyword series:</p><table><thead><tr><th>Series</th><th>Description</th></tr></thead><tbody><tr><td>average_position</td><td>Average rank position</td></tr><tr><td>search_visibility_index</td><td>Search visibility index (<a href="https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions" target="_blank" rel="noreferrer">more info</a>)</td></tr><tr><td>click_potential</td><td>Click potential (<a href="https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions" target="_blank" rel="noreferrer">more info</a>)</td></tr><tr><td>keyword_distribution</td><td>Distribution of keyword positions in Top 3, Top 10, Top 100, No rank</td></tr><tr><td>total_keywords</td><td>Number of keywords in the group on specified days</td></tr><tr><td>up_down</td><td>Number of keywords whose position increased and decreased</td></tr></tbody></table><h2 id="backlink-series-for-a-url" tabindex="-1">Backlink series (for a URL) <a class="header-anchor" href="#backlink-series-for-a-url" aria-hidden="true">#</a></h2><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&amp;url_id_for_all_backlinks=123&amp;date_from=2019-06-04&amp;date_to=2019-07-04</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">  backlink_view_series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">backlinks_total</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-06-04</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">backlinks_referring_ips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-06-04</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="http-request-4" tabindex="-1">HTTP Request <a class="header-anchor" href="#http-request-4" aria-hidden="true">#</a></h3><p><code>GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN</code></p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>url_id_for_all_backlinks*</td><td>URL id</td></tr><tr><td>date_from*</td><td>Start date for series in YYYY-MM-DD format (e.g 2019-01-02)</td></tr><tr><td>date_to*</td><td>End date for series in YYYY-MM-DD format (e.g. 2019-04-02)</td></tr></tbody></table><p>Parameters marked with * are mandatory.</p><p>Available backlink series:</p><table><thead><tr><th>Series</th><th>Description</th></tr></thead><tbody><tr><td>backlinks_all</td><td>Active backlinks</td></tr><tr><td>backlinks_total</td><td>Total backlinks</td></tr><tr><td>backlinks_referring_ips</td><td>Referring IPs</td></tr><tr><td>backlinks_referring_domains</td><td>Referring Domains</td></tr><tr><td>backlinks_referring_subnets</td><td>Referring Subnets</td></tr></tbody></table><h2 id="backlink-series-for-a-view" tabindex="-1">Backlink series (for a view) <a class="header-anchor" href="#backlink-series-for-a-view" aria-hidden="true">#</a></h2><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN&amp;backlink_view_ids%5B%5D=123&amp;date_from=2019-04-02&amp;date_to=2019-07-01</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">  backlink_view_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  backlink_view_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DR &gt; 10</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  backlink_view_series: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">backlinks_total</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-06-04</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">backlinks_referring_ips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      series</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-06-04</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="http-request-5" tabindex="-1">HTTP Request <a class="header-anchor" href="#http-request-5" aria-hidden="true">#</a></h3><p><code>GET https://api.nightwatch.io/api/v1/series?access_token=ACCESS_TOKEN</code></p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>backlink_view_ids*</td><td>Backlink view ids</td></tr><tr><td>date_from*</td><td>Start date for series in YYYY-MM-DD format (e.g 2019-01-02)</td></tr><tr><td>date_to*</td><td>End date for series in YYYY-MM-DD format (e.g. 2019-04-02)</td></tr></tbody></table><p>Parameters marked with * are mandatory.</p><p>Available backlink series:</p><table><thead><tr><th>Series</th><th>Description</th></tr></thead><tbody><tr><td>backlinks_all</td><td>Active backlinks</td></tr><tr><td>backlinks_total</td><td>Total backlinks</td></tr><tr><td>backlinks_referring_ips</td><td>Referring IPs</td></tr><tr><td>backlinks_referring_domains</td><td>Referring Domains</td></tr><tr><td>backlinks_referring_subnets</td><td>Referring Subnets</td></tr></tbody></table>`,60),l=[o];function p(r,c,i,d,D,y){return n(),a("div",null,l)}const h=s(e,[["render",p]]);export{C as __pageData,h as default};
