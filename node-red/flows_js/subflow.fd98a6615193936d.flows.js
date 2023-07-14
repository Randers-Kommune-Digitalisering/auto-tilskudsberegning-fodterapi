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
      "x": 300,
      "y": 1560,
      "wires": [
        {
          "id": "ed94aa5521c34214",
          "port": 0
        }
      ]
    },
    {
      "x": 1310,
      "y": 1560,
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
  "_order": 11
}

module.exports = Node;