const Node = {
  "id": "d66585c0891e5910",
  "type": "inject",
  "z": "f99fd88fa65c74b9",
  "name": "DROP runHistory",
  "props": [
    {
      "p": "sql",
      "v": "DROP TABLE runHistory",
      "vt": "str"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "x": 540,
  "y": 60,
  "wires": [
    [
      "ff818ce163a33c9b"
    ]
  ],
  "_order": 950
}

module.exports = Node;