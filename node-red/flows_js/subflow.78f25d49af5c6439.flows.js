const Node = {
  "id": "78f25d49af5c6439",
  "type": "subflow",
  "name": "Retry",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 60,
      "y": 100,
      "wires": [
        {
          "id": "4370572af6e58e63"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 760,
      "y": 60,
      "wires": [
        {
          "id": "310f915d8edfc229",
          "port": 0
        }
      ]
    },
    {
      "x": 760,
      "y": 140,
      "wires": [
        {
          "id": "310f915d8edfc229",
          "port": 1
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#DDAA99",
  "_order": 9
}

module.exports = Node;