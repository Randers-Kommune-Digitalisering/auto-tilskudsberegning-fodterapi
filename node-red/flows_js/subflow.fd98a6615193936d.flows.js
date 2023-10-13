const Node = {
  "id": "fd98a6615193936d",
  "type": "subflow",
  "name": "Initialize Run",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 40,
      "y": 120,
      "wires": [
        {
          "id": "dce695f3232b4b92"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 960,
      "y": 2020,
      "wires": [
        {
          "id": "455e646ca4bf89e7",
          "port": 0
        }
      ]
    },
    {
      "x": 710,
      "y": 2220,
      "wires": [
        {
          "id": "1a085184977ff339",
          "port": 0
        },
        {
          "id": "413be05d7056be63",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#DDAA99",
  "outputLabels": [
    "Success",
    "Error"
  ],
  "_order": 7
}

module.exports = Node;