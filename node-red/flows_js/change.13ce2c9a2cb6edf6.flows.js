const Node = {
  "id": "13ce2c9a2cb6edf6",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "New rule template",
  "rules": [
    {
      "t": "set",
      "p": "payload.rules",
      "pt": "msg",
      "to": "[\t    {\t        \"uid\": \"formuegraense\",\t        \"name\": \"Formue\",\t        \"variable\": \"formue\",\t        \"operator\": \"<\",\t        \"value\": 95800,\t        \"type\": \"number\",\t        \"description\": \"Borgerens formue skal være indenfor formuegrænsen\",\t        \"error\": \"Borgerens formue bryder formue-reglen\"\t    },\t    {\t        \"uid\": \"formueoplyst\",\t        \"name\": \"Formue\",\t        \"variable\": \"formue\",\t        \"operator\": \"!null\",\t        \"value\": true,\t        \"type\": \"bool\",\t        \"description\": \"Borgerens formue skal være oplyst til UDK\",\t        \"isSystemRule\": true\t    }\t]",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload.rules",
      "pt": "msg",
      "to": "#:(storeInFile)::rules",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 280,
  "wires": [
    [
      "c2e6e14b9d4019b7"
    ]
  ],
  "_order": 141
}

module.exports = Node;