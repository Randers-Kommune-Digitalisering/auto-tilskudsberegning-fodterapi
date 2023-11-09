const Node = {
  "id": "7459f772194dcf44",
  "type": "subflow",
  "name": "Update DB",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 140,
      "wires": [
        {
          "id": "7e31f0623a4cb539"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1140,
      "y": 140,
      "wires": [
        {
          "id": "f405bbbac1fedc14",
          "port": 0
        }
      ]
    },
    {
      "x": 990,
      "y": 260,
      "wires": [
        {
          "id": "0c5da4d758d1f7cd",
          "port": 1
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#3FADB5",
  "outputLabels": [
    "Success",
    "Error"
  ],
  "status": {
    "x": 460,
    "y": 420,
    "wires": [
      {
        "id": "75dc016610418f41",
        "port": 0
      }
    ]
  },
  "_order": 13
}

module.exports = Node;