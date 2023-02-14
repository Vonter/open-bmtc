# open-bmtc

Data and analysis around public transit in Bengaluru.

## API

Nimmbus API documentation, as inferred by reverse-engineering the application, is available under the [/api folder](/api).

The API documentation is available as an [OpenAPI 3.0 specification](/api/nimmbus.yaml), with a [Swagger UI](https://nimmbus.netlify.app). The [README.md](/api/README.md) is generated from the OpenAPI specification using [widdershins](https://github.com/Mermade/widdershins) with the following options:

```sh
widdershins --search false --omitHeader -u .widdershins/templates --code --summary nimmbus.yaml -o README.md
```

The list of API endpoints (includes undocumented APIs) accessed by the Nimmbus app is available in [/api/urls.txt](/api/urls.txt)

## Data

Data scraped from the Nimmbus API is available under the [/data folder](/data)

## Visualizations

TODO

## To-Do

- [ ] Nimmbus API Documentation
  - [X] Routes
  - [X] Timetables
  - [X] Stops
  - [ ] Stops in Route
  - [X] Live Tracking
  - [ ] Other
  - [X] Swagger UI
- [ ] Scrape data
  - [X] Route List
  - [X] Route Polyline
  - [ ] Route Stoplist
  - [ ] Route Timetable
  - [ ] Stop List
- [ ] Consolidate, organize and clean scraped data
- [ ] Visualizations and analysis like [geohacker's](https://github.com/geohacker/bmtc)
- [ ] Convert to GTFS
- [ ] Include old data from other sources (like [geohacker's](https://github.com/geohacker/bmtc)) under an `archives/` folder
  - [ ] Convert old data to GTFS
