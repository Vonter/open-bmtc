
<h1 id="nimmbus-api">Nimmbus API v1.0</h1>

Base URLs:

* <a href="https://bmtcmobileapistaging.amnex.com/WebAPI">https://bmtcmobileapistaging.amnex.com/WebAPI</a>

<h1 id="nimmbus-api-routes">routes</h1>

[Returns a list of all the BMTC routes](#returns-a-list-of-all-the-bmtc-routes)

[Returns coordinates of points along the path followed by given routeid](#returns-coordinates-of-points-along-the-path-followed-by-given-routeid)

[Returns details of route corresponding to given routeid. Includes details of stops on the route, list of vehicles plying on the route and live tracking of vehicles.](#returns-details-of-route-corresponding-to-given-routeid.-includes-details-of-stops-on-the-route,-list-of-vehicles-plying-on-the-route-and-live-tracking-of-vehicles.)

## Returns a list of all the BMTC routes

`POST /GetAllRouteList`

> Body parameter

```json
{}
```

<h3 id="returns-a-list-of-all-the-bmtc-routes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> 200 Response

```json
{
  "data": [
    {
      "routeid": 1657,
      "routeno": "89-C UP",
      "routename": "KBS-CVN",
      "fromstationid": 20921,
      "fromstation": "Kempegowda Bus Station",
      "tostationid": 32209,
      "tostation": "Cauvery Nagara",
      "responsecode": 200
    },
    {
      "routeid": 1658,
      "routeno": "89-C DOWN",
      "routename": "CVN-KBS",
      "fromstationid": 24379,
      "fromstation": "Cauvery Nagara",
      "tostationid": 20922,
      "tostation": "Kempegowda Bus Station",
      "responsecode": 200
    },
    {
      "routeid": 1659,
      "routeno": "333-E UP",
      "routename": "KBS-KDG",
      "fromstationid": 20921,
      "fromstation": "Kempegowda Bus Station",
      "tostationid": 20902,
      "tostation": "Kadugodi Bus Station",
      "responsecode": 200
    },
    {
      "routeid": 1660,
      "routeno": "333-E DOWN",
      "routename": "KDG-KBS",
      "fromstationid": 20902,
      "fromstation": "Kadugodi Bus Station",
      "tostationid": 20922,
      "tostation": "Kempegowda Bus Station",
      "responsecode": 200
    },
    {
      "routeid": 1661,
      "routeno": "D3-SNBS DOWN",
      "routename": "SNBS-D3",
      "fromstationid": 21167,
      "fromstation": "Shanthinagara TTMC",
      "tostationid": 23652,
      "tostation": "Depot-3 Shanthinagara",
      "responsecode": 200
    },
    {
      "routeid": 1662,
      "routeno": "D3-SNBS UP",
      "routename": "D3-SNBS",
      "fromstationid": 23652,
      "fromstation": "Depot-3 Shanthinagara",
      "tostationid": 21166,
      "tostation": "Shanthinagara TTMC",
      "responsecode": 200
    },
    {
      "routeid": 1663,
      "routeno": "KBS-3A UP",
      "routename": "KBS-ATB",
      "fromstationid": 20921,
      "fromstation": "Kempegowda Bus Station",
      "tostationid": 21670,
      "tostation": "Attibele Bus Stand",
      "responsecode": 200
    },
    {
      "routeid": 1664,
      "routeno": "129 UP",
      "routename": "KBS-SBS",
      "fromstationid": 20921,
      "fromstation": "Kempegowda Bus Station",
      "tostationid": 21173,
      "tostation": "Shivajinagara Bus Station",
      "responsecode": 200
    },
    {
      "routeid": 1665,
      "routeno": "KBS-3A DOWN",
      "routename": "ATB-KBS",
      "fromstationid": 21673,
      "fromstation": "Attibele Bus Stand",
      "tostationid": 20922,
      "tostation": "Kempegowda Bus Station",
      "responsecode": 200
    },
    {
      "routeid": 1666,
      "routeno": "13 UP",
      "routename": "SBS-BSK",
      "fromstationid": 21172,
      "fromstation": "Shivajinagara Bus Station",
      "tostationid": 20624,
      "tostation": "Banashankari TTMC",
      "responsecode": 200,
      "Message": "Success",
      "Issuccess": true,
      "exception": {
        "RowCount": 8701
      }
    }
  ]
}
```

## Returns coordinates of points along the path followed by given routeid

`POST /RoutePoints`

> Body parameter

```json
{
  "routeid": 0
}
```

<h3 id="returns-coordinates-of-points-along-the-path-followed-by-given-routeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» routeid|body|number|false|none|

> 200 Response

```json
{
  "data": [
    {
      "latitude": "12.98414",
      "longitude": "77.60334",
      "responsecode": 200
    },
    {
      "latitude": "12.98415",
      "longitude": "77.60332",
      "responsecode": 200
    },
    {
      "latitude": "12.98416",
      "longitude": "77.60327",
      "responsecode": 200
    },
    {
      "latitude": "12.984169999999999",
      "longitude": "77.60322",
      "responsecode": 200
    },
    {
      "latitude": "12.984189999999998",
      "longitude": "77.60315",
      "responsecode": 200
    },
    {
      "latitude": "12.984329999999998",
      "longitude": "77.60262",
      "responsecode": 200
    },
    {
      "latitude": "12.984359999999999",
      "longitude": "77.6025",
      "responsecode": 200
    },
    {
      "latitude": "12.984449999999999",
      "longitude": "77.60213",
      "responsecode": 200
    },
    {
      "latitude": "12.98449",
      "longitude": "77.60198",
      "responsecode": 200
    },
    {
      "latitude": "12.984559999999998",
      "longitude": "77.60177999999999",
      "Message": "Success",
      "Issuccess": true,
      "exception": {
        "RowCount": 116
      },
      "responsecode": 200
    }
  ]
}
```

## Returns details of route corresponding to given routeid. Includes details of stops on the route, list of vehicles plying on the route and live tracking of vehicles.

`POST /SearchByRouteDetails_v2`

> Body parameter

```json
{
  "routeid": 0,
  "servicetypeid": 0
}
```

<h3 id="returns-details-of-route-corresponding-to-given-routeid.-includes-details-of-stops-on-the-route,-list-of-vehicles-plying-on-the-route-and-live-tracking-of-vehicles.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lan|header|string|false|Language to use for stationname provided in the response. Either `kn` or `en`|
|body|body|object|false|none|
|» routeid|body|number|false|none|
|» servicetypeid|body|number|false|none|

> 200 Response

```json
{
  "up": {
    "data": [
      {
        "routeid": 3804,
        "stationid": 34431,
        "stationname": "ರಾಯಲ್‌ ಮೀನಾಕ್ಷಿ ಮಾಲ್‌ ಬಿಜಿ ರಸ್ತೆ",
        "from": "ರಾಯಲ್‌ ಮೀನಾಕ್ಷಿ ಮಾಲ್‌ ಬಿಜಿ ರಸ್ತೆ",
        "to": "ಕೆಂಪೇಗೌಡ ಅಂತರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ",
        "routeno": "KIA-14",
        "distance_on_station": 0,
        "centerlat": 12.87646,
        "centerlong": 77.59502,
        "responsecode": 200,
        "isnotify": 0,
        "vehicleDetails": [
          {
            "vehicleid": 19979,
            "vehiclenumber": "KA57F1802",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 13.02217,
            "centerlong": 77.584381,
            "eta": "",
            "sch_arrivaltime": "11:00",
            "sch_departuretime": "11:00",
            "actual_arrivaltime": "11:00",
            "actual_departuretime": "11:00",
            "sch_tripstarttime": "11:00",
            "sch_tripendtime": "11:00",
            "lastlocationid": 21130,
            "currentlocationid": 21076,
            "nextlocationid": 21019,
            "currentstop": "",
            "nextstop": "Mekhri Circle (Towards Hebbala)",
            "laststop": "Palace Ground (Towards Mekhri Circle)",
            "stopCoveredStatus": 1,
            "heading": 21,
            "lastrefreshon": "13-02-2023 11:57:47",
            "lastreceiveddatetimeflag": 0
          },
          {
            "vehicleid": 21575,
            "vehiclenumber": "KA57F2403",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 12.966782,
            "centerlong": 77.587914,
            "eta": "",
            "sch_arrivaltime": "10:15",
            "sch_departuretime": "10:15",
            "actual_arrivaltime": "11:12",
            "actual_departuretime": "11:12",
            "sch_tripstarttime": "10:15",
            "sch_tripendtime": "10:15",
            "lastlocationid": 36131,
            "currentlocationid": 22667,
            "nextlocationid": 20725,
            "currentstop": "",
            "nextstop": "Corporation (Towards Cauvery Bhavan / Mysore Bank)",
            "laststop": "Pallavi Talkies (Towards Kempegowda Bus Station)",
            "stopCoveredStatus": 1,
            "heading": 214,
            "lastrefreshon": "13-02-2023 11:57:44",
            "lastreceiveddatetimeflag": 0
          }
        ]
      },
      {
        "routeid": 3804,
        "stationid": 22763,
        "stationname": "ಹುಳಿಮಾವು ಗೇಟ್",
        "from": "ರಾಯಲ್‌ ಮೀನಾಕ್ಷಿ ಮಾಲ್‌ ಬಿಜಿ ರಸ್ತೆ",
        "to": "ಕೆಂಪೇಗೌಡ ಅಂತರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ",
        "routeno": "KIA-14",
        "distance_on_station": 0.575,
        "centerlat": 12.88163,
        "centerlong": 77.59589,
        "responsecode": 200,
        "isnotify": 0,
        "vehicleDetails": [
          {
            "vehicleid": 19979,
            "vehiclenumber": "KA57F1802",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 13.02217,
            "centerlong": 77.584381,
            "eta": "",
            "sch_arrivaltime": "11:01",
            "sch_departuretime": "11:01",
            "actual_arrivaltime": "11:01",
            "actual_departuretime": "11:02",
            "sch_tripstarttime": "11:00",
            "sch_tripendtime": "11:00",
            "lastlocationid": 21130,
            "currentlocationid": 21076,
            "nextlocationid": 21019,
            "currentstop": "",
            "nextstop": "Mekhri Circle (Towards Hebbala)",
            "laststop": "Palace Ground (Towards Mekhri Circle)",
            "stopCoveredStatus": 1,
            "heading": 21,
            "lastrefreshon": "13-02-2023 11:57:47",
            "lastreceiveddatetimeflag": 0
          },
          {
            "vehicleid": 21575,
            "vehiclenumber": "KA57F2403",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 12.966782,
            "centerlong": 77.587914,
            "eta": "",
            "sch_arrivaltime": "10:16",
            "sch_departuretime": "10:16",
            "actual_arrivaltime": "11:13",
            "actual_departuretime": "11:13",
            "sch_tripstarttime": "10:15",
            "sch_tripendtime": "10:15",
            "lastlocationid": 36131,
            "currentlocationid": 22667,
            "nextlocationid": 20725,
            "currentstop": "",
            "nextstop": "Corporation (Towards Cauvery Bhavan / Mysore Bank)",
            "laststop": "Pallavi Talkies (Towards Kempegowda Bus Station)",
            "stopCoveredStatus": 1,
            "heading": 214,
            "lastrefreshon": "13-02-2023 11:57:44",
            "lastreceiveddatetimeflag": 0
          }
        ]
      },
      {
        "routeid": 3804,
        "stationid": 35232,
        "stationname": "ಬಿಪಿಎಲ್",
        "from": "ರಾಯಲ್‌ ಮೀನಾಕ್ಷಿ ಮಾಲ್‌ ಬಿಜಿ ರಸ್ತೆ",
        "to": "ಕೆಂಪೇಗೌಡ ಅಂತರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ",
        "routeno": "KIA-14",
        "distance_on_station": 1.16,
        "centerlat": 12.88691,
        "centerlong": 77.59676,
        "responsecode": 200,
        "isnotify": 0,
        "vehicleDetails": [
          {
            "vehicleid": 19979,
            "vehiclenumber": "KA57F1802",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 13.02217,
            "centerlong": 77.584381,
            "eta": "",
            "sch_arrivaltime": "11:02",
            "sch_departuretime": "11:02",
            "actual_arrivaltime": "11:03",
            "actual_departuretime": "11:03",
            "sch_tripstarttime": "11:00",
            "sch_tripendtime": "11:00",
            "lastlocationid": 21130,
            "currentlocationid": 21076,
            "nextlocationid": 21019,
            "currentstop": "",
            "nextstop": "Mekhri Circle (Towards Hebbala)",
            "laststop": "Pallavi Talkies (Towards Kempegowda Bus Station)",
            "stopCoveredStatus": 1,
            "heading": 21,
            "lastrefreshon": "13-02-2023 11:57:47",
            "lastreceiveddatetimeflag": 0
          },
          {
            "vehicleid": 21575,
            "vehiclenumber": "KA57F2403",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 12.966782,
            "centerlong": 77.587914,
            "eta": "",
            "sch_arrivaltime": "10:17",
            "sch_departuretime": "10:17",
            "actual_arrivaltime": "11:15",
            "actual_departuretime": "11:15",
            "sch_tripstarttime": "10:15",
            "sch_tripendtime": "10:15",
            "lastlocationid": 36131,
            "currentlocationid": 22667,
            "nextlocationid": 20725,
            "currentstop": "",
            "nextstop": "Corporation (Towards Cauvery Bhavan / Mysore Bank)",
            "laststop": "Palace Ground (Towards Mekhri Circle)",
            "stopCoveredStatus": 1,
            "heading": 214,
            "lastrefreshon": "13-02-2023 11:57:44",
            "lastreceiveddatetimeflag": 0
          }
        ]
      },
      {
        "routeid": 3804,
        "stationid": 23147,
        "stationname": "ಅರಕೆರೆ ಗೇಟ್",
        "from": "ರಾಯಲ್‌ ಮೀನಾಕ್ಷಿ ಮಾಲ್‌ ಬಿಜಿ ರಸ್ತೆ",
        "to": "ಕೆಂಪೇಗೌಡ ಅಂತರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ",
        "routeno": "KIA-14",
        "distance_on_station": 1.586,
        "centerlat": 12.89057,
        "centerlong": 77.59804,
        "responsecode": 200,
        "isnotify": 0,
        "vehicleDetails": [
          {
            "vehicleid": 19979,
            "vehiclenumber": "KA57F1802",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 13.02217,
            "centerlong": 77.584381,
            "eta": "",
            "sch_arrivaltime": "11:03",
            "sch_departuretime": "11:03",
            "actual_arrivaltime": "11:04",
            "actual_departuretime": "11:04",
            "sch_tripstarttime": "11:00",
            "sch_tripendtime": "11:00",
            "lastlocationid": 21130,
            "currentlocationid": 21076,
            "nextlocationid": 21019,
            "currentstop": "",
            "nextstop": "Mekhri Circle (Towards Hebbala)",
            "laststop": "Pallavi Talkies (Towards Kempegowda Bus Station)",
            "stopCoveredStatus": 1,
            "heading": 21,
            "lastrefreshon": "13-02-2023 11:57:47",
            "lastreceiveddatetimeflag": 0
          },
          {
            "vehicleid": 21575,
            "vehiclenumber": "KA57F2403",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 12.966782,
            "centerlong": 77.587914,
            "eta": "",
            "sch_arrivaltime": "10:18",
            "sch_departuretime": "10:18",
            "actual_arrivaltime": "11:16",
            "actual_departuretime": "11:17",
            "sch_tripstarttime": "10:15",
            "sch_tripendtime": "10:15",
            "lastlocationid": 36131,
            "currentlocationid": 22667,
            "nextlocationid": 20725,
            "currentstop": "",
            "nextstop": "Corporation (Towards Cauvery Bhavan / Mysore Bank)",
            "laststop": "Palace Ground (Towards Mekhri Circle)",
            "stopCoveredStatus": 1,
            "heading": 214,
            "lastrefreshon": "13-02-2023 11:57:44",
            "lastreceiveddatetimeflag": 0
          }
        ]
      },
      {
        "routeid": 3804,
        "stationid": 35156,
        "stationname": "ಹೆಚ್‌ಎಸ್‌ಬಿಸಿ",
        "from": "ರಾಯಲ್‌ ಮೀನಾಕ್ಷಿ ಮಾಲ್‌ ಬಿಜಿ ರಸ್ತೆ",
        "to": "ಕೆಂಪೇಗೌಡ ಅಂತರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ",
        "routeno": "KIA-14",
        "distance_on_station": 1.824,
        "centerlat": 12.89261,
        "centerlong": 77.59876,
        "responsecode": 200,
        "isnotify": 0,
        "vehicleDetails": [
          {
            "vehicleid": 19979,
            "vehiclenumber": "KA57F1802",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 13.02217,
            "centerlong": 77.584381,
            "eta": "",
            "sch_arrivaltime": "11:04",
            "sch_departuretime": "11:04",
            "actual_arrivaltime": "11:05",
            "actual_departuretime": "11:05",
            "sch_tripstarttime": "11:00",
            "sch_tripendtime": "11:00",
            "lastlocationid": 21130,
            "currentlocationid": 21076,
            "nextlocationid": 21019,
            "currentstop": "",
            "nextstop": "Mekhri Circle (Towards Hebbala)",
            "laststop": "Palace Ground (Towards Mekhri Circle)",
            "stopCoveredStatus": 1,
            "heading": 21,
            "lastrefreshon": "13-02-2023 11:57:47",
            "lastreceiveddatetimeflag": 0
          },
          {
            "vehicleid": 21575,
            "vehiclenumber": "KA57F2403",
            "servicetypeid": 73,
            "servicetype": "AC",
            "centerlat": 12.966782,
            "centerlong": 77.587914,
            "eta": "",
            "sch_arrivaltime": "10:19",
            "sch_departuretime": "10:19",
            "actual_arrivaltime": "11:17",
            "actual_departuretime": "11:17",
            "sch_tripstarttime": "10:15",
            "sch_tripendtime": "10:15",
            "lastlocationid": 36131,
            "currentlocationid": 22667,
            "nextlocationid": 20725,
            "currentstop": "",
            "nextstop": "Corporation (Towards Cauvery Bhavan / Mysore Bank)",
            "laststop": "Pallavi Talkies (Towards Kempegowda Bus Station)",
            "stopCoveredStatus": 1,
            "heading": 214,
            "lastrefreshon": "13-02-2023 11:57:44",
            "lastreceiveddatetimeflag": 0
          }
        ]
      }
    ]
  },
  "message": "Success",
  "issuccess": true,
  "exception": null,
  "rowCount": 0,
  "responsecode": 200
}
```

<h1 id="nimmbus-api-stops">stops</h1>

[Returns a list of bus stops near the given location](#returns-a-list-of-bus-stops-near-the-given-location)

[Returns a list of bus stops matching given name](#returns-a-list-of-bus-stops-matching-given-name)

[Returns a list of bus stops (with details) matching given name](#returns-a-list-of-bus-stops-(with-details)-matching-given-name)

## Returns a list of bus stops near the given location

`POST /NearbyStations_v2`

> Body parameter

```json
{
  "latitude": 0,
  "longitude": 0
}
```

<h3 id="returns-a-list-of-bus-stops-near-the-given-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» latitude|body|number|false|none|
|» longitude|body|number|false|none|

> 200 Response

```json
{
  "data": [
    {
      "rowno": 1,
      "geofenceid": 23354,
      "geofencename": "Shivananda Store",
      "center_lat": 12.98755,
      "center_lon": 77.58039,
      "towards": "Ananda Rao Circle",
      "distance": 0.12,
      "totalminute": 1,
      "responsecode": 200,
      "radiuskm": 1
    },
    {
      "rowno": 2,
      "geofenceid": 21175,
      "geofencename": "Shivananda Store",
      "center_lat": 12.98735,
      "center_lon": 77.58022,
      "towards": "Rajmahal Guttahalli",
      "distance": 0.13,
      "totalminute": 2,
      "responsecode": 200,
      "radiuskm": 1
    },
    {
      "rowno": 3,
      "geofenceid": 24239,
      "geofencename": "Shivananda Store",
      "center_lat": 12.98676,
      "center_lon": 77.57951,
      "towards": "RC College",
      "distance": 0.17,
      "totalminute": 2,
      "responsecode": 200,
      "radiuskm": 1
    },
    {
      "rowno": 4,
      "geofenceid": 21174,
      "geofencename": "Shivananda Store",
      "center_lat": 12.98663,
      "center_lon": 77.57936,
      "towards": "Kempegowda Bus Station",
      "distance": 0.18,
      "totalminute": 2,
      "responsecode": 200,
      "radiuskm": 1
    },
    {
      "rowno": 5,
      "geofenceid": 28295,
      "geofencename": "Swastik Sheshadripuram",
      "center_lat": 12.98784,
      "center_lon": 77.57449,
      "towards": "Central",
      "distance": 0.55,
      "totalminute": 7,
      "responsecode": 200,
      "radiuskm": 1
    },
    {
      "rowno": 6,
      "geofenceid": 26913,
      "geofencename": "The Lalit Ashok Kumarkrupa Road",
      "center_lat": 12.99201,
      "center_lon": 77.58312,
      "towards": "R M Guttahalli",
      "distance": 0.57,
      "totalminute": 7,
      "responsecode": 200,
      "radiuskm": 1
    },
    {
      "rowno": 7,
      "geofenceid": 26782,
      "geofencename": "Swastik Sheshadripuram College",
      "center_lat": 12.98851,
      "center_lon": 77.57414,
      "towards": "Ananda Rao Circle",
      "distance": 0.58,
      "totalminute": 7,
      "responsecode": 200,
      "radiuskm": 1
    },
    {
      "rowno": 8,
      "geofenceid": 35303,
      "geofencename": "Swastik Sheshadripuram College",
      "center_lat": 12.98798,
      "center_lon": 77.57422,
      "towards": "Central",
      "distance": 0.58,
      "totalminute": 7,
      "responsecode": 200,
      "radiuskm": 1
    },
    {
      "rowno": 9,
      "geofenceid": 35073,
      "geofencename": "Swastik Sheshadripuram College",
      "center_lat": 12.98916,
      "center_lon": 77.57416,
      "towards": "Shivananda Circle",
      "distance": 0.59,
      "totalminute": 7,
      "responsecode": 200,
      "radiuskm": 1
    },
    {
      "rowno": 10,
      "geofenceid": 20938,
      "geofencename": "KPCC Office",
      "center_lat": 12.98287,
      "center_lon": 77.57642,
      "towards": "Shivananda Circle",
      "distance": 0.69,
      "totalminute": 8,
      "responsecode": 200,
      "radiuskm": 1,
      "Message": "Success",
      "Issuccess": true,
      "exception": {
        "RowCount": 10
      }
    }
  ]
}
```

## Returns a list of bus stops matching given name

`POST /FindNearByBusStop_v2`

> Body parameter

```json
{
  "stationName": "string"
}
```

<h3 id="returns-a-list-of-bus-stops-matching-given-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» stationName|body|string|false|none|

> 200 Response

```json
{
  "data": [
    {
      "srno": 2361,
      "routeno": "",
      "routeid": 34303,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Rachammanahalli",
      "route": ""
    },
    {
      "srno": 2362,
      "routeno": "",
      "routeid": 34304,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Rachenahalli",
      "route": ""
    },
    {
      "srno": 2363,
      "routeno": "",
      "routeid": 34305,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Rachenahalli Cross",
      "route": ""
    },
    {
      "srno": 2364,
      "routeno": "",
      "routeid": 34306,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Rachenalli Lake Park Dasarahalli",
      "route": ""
    },
    {
      "srno": 505,
      "routeno": "",
      "routeid": 23392,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Radhareddy Layout Road SJP Main Road",
      "route": ""
    },
    {
      "srno": 2365,
      "routeno": "",
      "routeid": 34307,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Radiant Redwood Apartment Koppa Road",
      "route": ""
    },
    {
      "srno": 2367,
      "routeno": "",
      "routeid": 34310,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Raghavendra Circle Hosakote",
      "route": ""
    },
    {
      "srno": 2366,
      "routeno": "",
      "routeid": 34309,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Raghavendra Circle T C Palya",
      "route": ""
    },
    {
      "srno": 2368,
      "routeno": "",
      "routeid": 34312,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Raghavendra Colony",
      "route": ""
    },
    {
      "srno": 2680,
      "routeno": "",
      "routeid": 34834,
      "center_lat": 0,
      "center_lon": 0,
      "responsecode": 200,
      "routetypeid": "2",
      "routename": "Raghavendra Dhama",
      "route": "",
      "Message": "Success",
      "Issuccess": true,
      "exception": {
        "RowCount": 3263
      }
    }
  ]
}
```

## Returns a list of bus stops (with details) matching given name

`POST /SearchStation`

> Body parameter

```json
{
  "stationName": "string"
}
```

<h3 id="returns-a-list-of-bus-stops-(with-details)-matching-given-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» stationName|body|string|false|none|

> 200 Response

```json
{
  "data": [
    {
      "union_rowno": 4,
      "row": 1,
      "stopname": "ಹೆಬ್ಬಾಳ",
      "stopid": 20817,
      "geofencename": "Hebbala (Towards Hebbala Last Stop 279E)",
      "center_lat": 13.04135,
      "center_lon": 77.58885,
      "towards": "Hebbala Last Stop 279E",
      "responsecode": 200
    },
    {
      "union_rowno": 4,
      "row": 2,
      "stopname": "ಹೆಬ್ಬಾಳ",
      "stopid": 25816,
      "geofencename": "Hebbala (Towards Mekhri Circle)",
      "center_lat": 13.03884,
      "center_lon": 77.58947,
      "towards": "Mekhri Circle",
      "responsecode": 200
    },
    {
      "union_rowno": 4,
      "row": 3,
      "stopname": "ಹೆಬ್ಬಾಳ",
      "stopid": 20820,
      "geofencename": "Hebbala (Towards Yalahanka)",
      "center_lat": 13.03828,
      "center_lon": 77.58917,
      "towards": "Yalahanka",
      "responsecode": 200
    },
    {
      "union_rowno": 4,
      "row": 4,
      "stopname": "ಹೆಬ್ಬಾಳ ಬ್ರಿಡ್ಜ್",
      "stopid": 21527,
      "geofencename": "Hebbala Bridge (Towards BEL Circle)",
      "center_lat": 13.0427,
      "center_lon": 77.58944,
      "towards": "BEL Circle",
      "responsecode": 200
    },
    {
      "union_rowno": 4,
      "row": 5,
      "stopname": "ಹೆಬ್ಬಾಳ ಬ್ರಿಡ್ಜ್",
      "stopid": 20822,
      "geofencename": "Hebbala Bridge (Towards Nagavara)",
      "center_lat": 13.04218,
      "center_lon": 77.59387,
      "towards": "Nagavara",
      "responsecode": 200
    },
    {
      "union_rowno": 4,
      "row": 6,
      "stopname": "ಹೆಬ್ಬಾಳ ಬ್ರಿಡ್ಜ್",
      "stopid": 20823,
      "geofencename": "Hebbala Bridge (Towards Tin Factory)",
      "center_lat": 13.04293,
      "center_lon": 77.59122,
      "towards": "Tin Factory",
      "responsecode": 200
    },
    {
      "union_rowno": 4,
      "row": 7,
      "stopname": "ಹೆಬ್ಬಾಳ ಬ್ರಿಡ್ಜ್",
      "stopid": 25819,
      "geofencename": "Hebbala Bridge (Towards Yalahanka)",
      "center_lat": 13.04328,
      "center_lon": 77.59036,
      "towards": "Yalahanka",
      "responsecode": 200
    },
    {
      "union_rowno": 5,
      "row": 1,
      "stopname": "14ನೇ ಮೈನ್ ಎಚ್ಎಸ್ಆರ್ ಲೇಔಟ್",
      "stopid": 20568,
      "geofencename": "14th Main HSR Layout (Towards Hebbala)",
      "center_lat": 12.91644,
      "center_lon": 77.63458,
      "towards": "Hebbala",
      "responsecode": 200
    },
    {
      "union_rowno": 5,
      "row": 2,
      "stopname": "80 ಅಡಿ ರೋಡ್ ಕಲ್ಯಾಣನಗರ",
      "stopid": 21450,
      "geofencename": "80ft Road Kalyananagara (Towards Hebbala)",
      "center_lat": 13.02546,
      "center_lon": 77.64042,
      "towards": "Hebbala",
      "responsecode": 200
    }
  ],
  "Message": "Success",
  "Issuccess": true,
  "exception": null,
  "RowCount": 97,
  "responsecode": 200
}
```

<h1 id="nimmbus-api-timetables">timetables</h1>

[Returns the timetable of routes passing through given fromstationid and tostationid](#returns-the-timetable-of-routes-passing-through-given-fromstationid-and-tostationid)

[Returns timetable of route corresponding to given routeid](#returns-timetable-of-route-corresponding-to-given-routeid)

## Returns the timetable of routes passing through given fromstationid and tostationid

`POST /GetTimetableByStation_v2`

> Body parameter

```json
{
  "fromStationId": 0,
  "toStationId": 0
}
```

<h3 id="returns-the-timetable-of-routes-passing-through-given-fromstationid-and-tostationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» fromStationId|body|number|false|none|
|» toStationId|body|number|false|none|

> 200 Response

```json
{
  "data": [
    {
      "id": 2,
      "fromstationid": 27797,
      "tostationid": 21173,
      "routeid": 7616,
      "f": 0,
      "t": 11.31,
      "routeno": "290-A",
      "routename": "RCH-SBS",
      "fromstationname": "Rachenahalli",
      "tostationname": "Shivajinagara Bus Station"
    }
  ],
  "Message": "Success",
  "Issuccess": true,
  "exception": {
    "RowCount": 1
  },
  "responsecode": 200
}
```

## Returns timetable of route corresponding to given routeid

`POST /GetTimetableByRouteId_v2`

> Body parameter

```json
{
  "routeid": 0,
  "fromStationId": 0,
  "toStationId": 0,
  "current_date": "string"
}
```

<h3 id="returns-timetable-of-route-corresponding-to-given-routeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» routeid|body|number|false|none|
|» fromStationId|body|number|false|none|
|» toStationId|body|number|false|none|
|» current_date|body|string|false|none|

> 200 Response

```json
{
  "data": [
    {
      "fromstationname": "Rachenahalli",
      "tostationname": "Shivajinagara Bus Station",
      "fromstationid": "27797",
      "tostationid": "21173",
      "tripdetails": [
        {
          "starttime": "06:35"
        }
      ],
      "endtime": "07:20"
    },
    {
      "starttime": "08:15",
      "endtime": "09:00"
    },
    {
      "starttime": "08:20",
      "endtime": "09:05"
    },
    {
      "starttime": "08:20",
      "endtime": "09:05"
    },
    {
      "starttime": "09:35",
      "endtime": "10:20"
    },
    {
      "starttime": "10:20",
      "endtime": "11:05"
    },
    {
      "starttime": "11:00",
      "endtime": "11:40"
    },
    {
      "starttime": "11:00",
      "endtime": "11:40"
    },
    {
      "starttime": "12:30",
      "endtime": "13:10"
    },
    {
      "starttime": "14:30",
      "endtime": "15:05"
    }
  ],
  "Message": "Success",
  "Issuccess": true,
  "exception": {
    "RowCount": 1
  },
  "responsecode": 200
}
```

<h1 id="nimmbus-api-other">other</h1>

[Get emergency message](#get-emergency-message)

[Returns list of notable places around bus stops](#returns-list-of-notable-places-around-bus-stops)

## Get emergency message

`POST /GetEmergencyMessage`

> Body parameter

```json
{}
```

<h3 id="get-emergency-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> 200 Response

```json
{
  "data": [
    {
      "id": 1,
      "buscount": "3502",
      "message_english": "Currently we are tracking 3502 buses.",
      "message_kannada": "ಪ್ರಸ್ತುತ ನಾವು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಿದ್ದೇವೆ 3502 ಬಸ್ಸುಗಳು.",
      "isdisplay": 1
    }
  ],
  "Message": "",
  "Issuccess": true,
  "exception": {
    "RowCount": 1
  },
  "responsecode": 200
}
```

## Returns list of notable places around bus stops

`POST /AroundBusStops_v2`

> Body parameter

```json
{
  "latitude": 0,
  "longitude": 0
}
```

<h3 id="returns-list-of-notable-places-around-bus-stops-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» latitude|body|number|false|none|
|» longitude|body|number|false|none|

> 200 Response

```json
{
  "data": [
    {
      "stationname": "11th Stone NICE Road",
      "Arounds": [
        {
          "type": "Restroom"
        }
      ],
      "typeid": "181",
      "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Restrooms.png",
      "list": [
        {
          "name": "TestRestroom",
          "latitude": "12.96749",
          "longitude": "77.58795",
          "distance": "5.50"
        }
      ]
    },
    {
      "stationname": "Subbaiah Circle",
      "Arounds": [
        {
          "type": "Restaurant",
          "typeid": "157",
          "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Restaurant.png",
          "list": [
            {
              "name": "Test Restaurant"
            }
          ],
          "latitude": "12.96228",
          "longitude": "77.58947",
          "distance": "6.00"
        }
      ]
    },
    {
      "stationname": "Poornima Talkies",
      "Arounds": [
        {
          "type": "Parking",
          "typeid": "3",
          "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Parking.png",
          "list": [
            {
              "name": "ParkingTest"
            }
          ],
          "latitude": "12.96285",
          "longitude": "77.59049",
          "distance": "6.04"
        }
      ]
    },
    {
      "stationname": "Shanthinagara TTMC",
      "Arounds": [
        {
          "type": "ATM",
          "typeid": "155",
          "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/ATM.png",
          "list": [
            {
              "name": "SBI ATM"
            }
          ],
          "latitude": "12.95540",
          "longitude": "77.59179",
          "distance": "6.72"
        },
        {
          "name": "Karnataka Bank ATM",
          "latitude": "12.95478",
          "longitude": "77.59289",
          "distance": "6.85"
        }
      ]
    },
    {
      "type": "Hotel",
      "typeid": "158",
      "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Hotel.png",
      "list": [
        {
          "name": "Vishnubhavan Hotel",
          "latitude": "12.95517",
          "longitude": "77.59242",
          "distance": "6.79"
        },
        {
          "name": "A2B Hotel",
          "latitude": "12.95457",
          "longitude": "77.59310",
          "distance": "6.88"
        }
      ]
    },
    {
      "type": "Parking",
      "typeid": "3",
      "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Parking.png",
      "list": [
        {
          "name": "Multi Level Parking For 2&4 Wheelers (Paid)",
          "latitude": "12.95416",
          "longitude": "77.59185",
          "distance": "6.82"
        }
      ]
    },
    {
      "stationname": "Kodays Circle",
      "Arounds": [
        {
          "type": "Museum",
          "typeid": "179",
          "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Museums.png",
          "list": [
            {
              "name": "TestMuseum"
            }
          ],
          "latitude": "13.00728",
          "longitude": "77.61208",
          "distance": "6.90"
        }
      ]
    },
    {
      "stationname": "11th Block Anjanapura",
      "Arounds": [
        {
          "type": "Pharmacy",
          "typeid": "180",
          "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Pharmacies.png",
          "list": [
            {
              "name": "TestPharmacy"
            }
          ],
          "latitude": "12.97971",
          "longitude": "77.61193",
          "distance": "7.16"
        }
      ]
    },
    {
      "stationname": "1st Block Vishweshwaraiah Layout",
      "Arounds": [
        {
          "type": "Mall",
          "typeid": "178",
          "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Mall.png",
          "list": [
            {
              "name": "TestMall"
            }
          ],
          "latitude": "13.04914",
          "longitude": "77.59289",
          "distance": "7.32"
        }
      ]
    },
    {
      "stationname": "Banashankari TTMC",
      "Arounds": [
        {
          "type": "ATM",
          "typeid": "155",
          "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/ATM.png",
          "list": [
            {
              "name": "Banashankari TTMC-Karnataka Bank ATM"
            }
          ],
          "latitude": "12.91746",
          "longitude": "77.57328",
          "distance": "9.45"
        },
        {
          "name": "Banashankari TTMC-Indusland Bank",
          "latitude": "12.91746",
          "longitude": "77.57330",
          "distance": "9.45"
        }
      ]
    },
    {
      "type": "Hotel",
      "typeid": "158",
      "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Hotel.png",
      "list": [
        {
          "name": "Banashankari TTMC-Sri Krishna Bhavan",
          "latitude": "12.91745",
          "longitude": "77.57330",
          "distance": "9.45"
        }
      ]
    },
    {
      "type": "Parking",
      "typeid": "3",
      "icon": "https://bmtcmobileapistaging.amnex.com/StaticFiles/Parking.png",
      "list": [
        {
          "name": "Banashankari TTMC-Car-Bike Parking",
          "latitude": "12.91725",
          "longitude": "77.57331",
          "distance": "9.48"
        }
      ],
      "Message": "Success",
      "Issuccess": true,
      "exception": {
        "RowCount": 8
      },
      "responsecode": 200
    }
  ]
}
```

