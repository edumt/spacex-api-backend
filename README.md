# spacex-api-backend

## Live Preview

[link](https://spacex-api-backend-production.up.railway.app/)

## Minimum Requirements

Node v18+ (to use earlier versions, fork the project and switch native fetch function with node-fetch library or similar)

## Running Locally

First, it's important to set your environment variables, following the base .env.example.

To run this project, install dependencies, build, then start the server

```
$ npm i
$ npm run build
$ npm start
```

## Docs

This API is a subset of [SpaceX-API](https://github.com/r-spacex/SpaceX-API). As of now, only "/launches" path is implemented (partially). Supported paths are:

- /launches/next
- /launches/latest
- /launches/upcoming
- /launches/past
- /launches/query (POST)

Access [specific route documentation](https://github.com/r-spacex/SpaceX-API/tree/master/docs/launches/v4) for further information.

## Examples

Example of a response when getting next launch:

**Method** : `GET`

**URL** : `https://spacex-api-backend-production.up.railway.app/launches/next`

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

```json
{
  "fairings": {
    "reused": null,
    "recovery_attempt": null,
    "recovered": null,
    "ships": []
  },
  "links": {
    "patch": {
      "small": null,
      "large": null
    },
    "reddit": {
      "campaign": null,
      "launch": null,
      "media": null,
      "recovery": null
    },
    "flickr": {
      "small": [],
      "original": []
    },
    "presskit": null,
    "webcast": "https://youtu.be/pY628jRd6gM",
    "youtube_id": "pY628jRd6gM",
    "article": null,
    "wikipedia": null
  },
  "static_fire_date_utc": null,
  "static_fire_date_unix": null,
  "net": false,
  "window": null,
  "rocket": "5e9d0d95eda69974db09d1ed",
  "success": null,
  "failures": [],
  "details": null,
  "crew": [],
  "ships": [],
  "capsules": [],
  "payloads": ["5fe3b86eb3467846b324217c"],
  "launchpad": "5e9e4502f509094188566f88",
  "flight_number": 188,
  "name": "USSF-44",
  "date_utc": "2022-11-01T13:41:00.000Z",
  "date_unix": 1667310060,
  "date_local": "2022-11-01T09:41:00-04:00",
  "date_precision": "hour",
  "upcoming": true,
  "cores": [
    {
      "core": "5fe3b8f2b3467846b3242181",
      "flight": 1,
      "gridfins": true,
      "legs": true,
      "reused": false,
      "landing_attempt": null,
      "landing_success": null,
      "landing_type": null,
      "landpad": null
    },
    {
      "core": "5fe3b8fbb3467846b3242182",
      "flight": 1,
      "gridfins": true,
      "legs": true,
      "reused": false,
      "landing_attempt": null,
      "landing_success": null,
      "landing_type": null,
      "landpad": null
    },
    {
      "core": "5fe3b906b3467846b3242183",
      "flight": 1,
      "gridfins": true,
      "legs": true,
      "reused": false,
      "landing_attempt": null,
      "landing_success": null,
      "landing_type": null,
      "landpad": null
    }
  ],
  "auto_update": true,
  "tbd": false,
  "launch_library_id": "aa88b853-9e04-4a28-9433-d87799331b1b",
  "id": "6243aec2af52800c6e91925d"
}
```
