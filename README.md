# open-bmtc

Data and analysis around public transit in Bengaluru.

## API

Nimmbus API documentation, as inferred by reverse-engineering the application, is available under the [/api folder](/api).

The API documentation is available as an [OpenAPI 3.0 specification](/api/nimmbus.yaml). The [README.md](/api/README.md) is generated from the OpenAPI specification using [widdershins](https://github.com/Mermade/widdershins) with the following options:

```sh
widdershins --search false --omitHeader -u .widdershins/templates --code --summary nimmbus.yaml -o README.md
```

The URL endpoints accessed by the Nimmbus app are listed in [/api/urls.txt](/api/urls.txt)

## Data

Data scraped from the Nimmbus API is available under the [/data folder](/data)

## Visualizations

TODO

## To-Do

- [X] Nimmbus API Documentation
  - [X] Routes
  - [X] Timetables
  - [X] Stops
  - [ ] Stops in Route
  - [ ] Live Tracking
  - [ ] Other
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
