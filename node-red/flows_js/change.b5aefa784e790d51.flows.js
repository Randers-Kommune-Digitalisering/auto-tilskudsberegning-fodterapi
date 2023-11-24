const Node = {
  "id": "b5aefa784e790d51",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Metrics",
  "rules": [
    {
      "t": "set",
      "p": "webElements.metrics",
      "pt": "msg",
      "to": "[]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "webElements.metrics",
      "pt": "msg",
      "to": "$globalContext(\"metrics\") @ $metric . {\t    \"name\": $metric.displayname,\t    \"isAvailable\": $avail := ($metric.value = 1 ? true : false),\t    \"message\": $avail ? \"OK ✔️\" : \"Ingen forbindelse ⭕\",\t    \"border\": $avail ? \"success\" : \"secondary\"\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webElements.metricErrors",
      "pt": "msg",
      "to": "webElements.metrics[isAvailable = false] ~> $exists() ? webElements.metrics[isAvailable = false].name",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 2020,
  "wires": [
    [
      "7b8b5d0a070a5262"
    ]
  ],
  "_order": 282
}

module.exports = Node;