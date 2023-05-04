const Node = {
  "id": "8bc31d06862e8fe2",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "669e09e244099963",
  "name": "Slet JSON fil",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "fs",
      "module": "fs"
    },
    {
      "var": "path",
      "module": "path"
    }
  ],
  "x": 1730,
  "y": 580,
  "wires": [
    [
      "0f583d6bfaad7d0e",
      "26de970dcfce1beb",
      "6dacc4751f492eab"
    ]
  ],
  "info": "",
  "_order": 228
}

Node.info = `
## Delete JSON file

This JS snippet utilizes the FS module to delete the JSON file after it has been read to memory.
`

Node.func = async function (node, msg, RED, context, flow, global, env, util, fs, path) {
  const downloadPath = path.resolve('/tmp/');
  msg.filePath = downloadPath + "\\" + msg.fileName;
  
  fs.unlinkSync(msg.filePath);
  return msg;
}

module.exports = Node;