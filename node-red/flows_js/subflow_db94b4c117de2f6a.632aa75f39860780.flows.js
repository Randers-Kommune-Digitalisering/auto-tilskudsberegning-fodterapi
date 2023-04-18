const Node = {
  "id": "632aa75f39860780",
  "type": "subflow:db94b4c117de2f6a",
  "z": "8ea344595d9a442a",
  "g": "7de50fe1369c94a7",
  "name": "",
  "x": 470,
  "y": 340,
  "wires": [
    [
      "64156b428449f87a"
    ]
  ],
  "info": "",
  "_order": 250
}

Node.info = `
# Get Settings/Rules/Grants

Gets (or sets) the current ruleset from global context and stores it in the msg object.
If no existing data is found, new data is created from templates which are found inside the subflow itself.

Subflow was originially intended to only load a single element into the payload, however to speed up development,
all three elements were merged into a single subflow. This means that the subflow is heavily referenced and loads
unneccessary data in multiple occasions.
`

module.exports = Node;