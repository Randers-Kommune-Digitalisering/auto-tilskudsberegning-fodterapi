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
  "x": 1640,
  "y": 440,
  "wires": [
    [
      "ff818ce163a33c9b"
    ]
  ],
  "_order": 955
}

module.exports = Node;