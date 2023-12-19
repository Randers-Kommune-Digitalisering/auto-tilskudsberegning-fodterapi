const Node = {
  "id": "449328c1ffbe7d56",
  "type": "subflow",
  "name": "Transform KP Data",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 60,
      "y": 120,
      "wires": [
        {
          "id": "16a2ecbfc488f7da"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1200,
      "y": 260,
      "wires": [
        {
          "id": "c036769fe7a85166",
          "port": 0
        }
      ]
    },
    {
      "x": 1190,
      "y": 360,
      "wires": [
        {
          "id": "e16e3a08e89c054f",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#FDD0A2",
  "outputLabels": [
    "Parsed",
    "Error"
  ],
  "icon": "node-red/parser-json.svg"
}

module.exports = Node;