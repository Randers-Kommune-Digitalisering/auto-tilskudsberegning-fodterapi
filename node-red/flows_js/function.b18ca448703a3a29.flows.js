const Node = {
  "id": "b18ca448703a3a29",
  "type": "function",
  "z": "a1b347492c77827f",
  "name": "function 7",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "path",
      "module": "path"
    },
    {
      "var": "fs",
      "module": "fs"
    }
  ],
  "x": 680,
  "y": 240,
  "wires": [
    [
      "ccdfaf7dc914f6fb"
    ]
  ],
  "_order": 467
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, path, fs) {
  
  const downloadPath = path.resolve('/');
  var files = fs.readdirSync(downloadPath);
  msg.payload = files;
  
  return msg;
}

module.exports = Node;