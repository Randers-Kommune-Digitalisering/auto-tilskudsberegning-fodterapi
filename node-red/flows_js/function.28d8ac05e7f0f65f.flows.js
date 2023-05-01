const Node = {
  "id": "28d8ac05e7f0f65f",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "669e09e244099963",
  "name": "Findes filen?",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 470,
  "y": 600,
  "wires": [
    [
      "bc7b13ac2323540b"
    ]
  ],
  "info": "",
  "_order": 218
}

Node.info = `
## Check for file
This JS snippet utilizes global modules \`FS\` and \`Path\` to check if the receipt JSON file already exists, or needs to be downloaded.
`

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const fs = global.get('fs');
  const path = global.get('path');
  const downloadPath = path.resolve('./download');
  msg.filePath = downloadPath + "\\" + msg.fileName;
  
  if (fs.existsSync(msg.filePath))
  {
      msg.payload = true;
      node.status({ fill: "green", shape: "dot", text: "Fil blev fundet" });
  }
  else
  {
      msg.payload = false;
      node.status({ fill: "yellow", shape: "dot", text: "Fil blev ikke fundet!" });
  }
  
  return msg;
}

module.exports = Node;