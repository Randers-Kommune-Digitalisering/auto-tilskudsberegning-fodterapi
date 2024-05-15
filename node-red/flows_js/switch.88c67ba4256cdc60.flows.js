const Node = {
  "id": "88c67ba4256cdc60",
  "type": "switch",
  "z": "41d1b8798efe7e15",
  "name": "",
  "property": "error",
  "propertyType": "msg",
  "rules": [
    {
      "t": "cont",
      "v": "Session closed. Most likely the page has been closed",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 890,
  "y": 800,
  "wires": [
    [],
    [
      "972436459614bbd2"
    ]
  ]
}

module.exports = Node;