const Node = {
  "id": "c126d4622cb3bb88",
  "type": "function",
  "z": "8ea344595d9a442a",
  "name": "function 8",
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
  "x": 1600,
  "y": 700,
  "wires": [
    [
      "534e5e6a23c605fa"
    ]
  ],
  "_order": 395
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, path, fs) {
  
  const downloadPath = path.resolve('/tmp/');
  var files = fs.readdirSync(downloadPath);
  msg.payload = files;
  
  return msg;
}

module.exports = Node;