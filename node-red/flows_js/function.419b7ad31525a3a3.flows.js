const Node = {
  "id": "419b7ad31525a3a3",
  "type": "function",
  "z": "c28a486ea3e09387",
  "g": "e4e7a254403521e9",
  "name": "set as archived",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 780,
  "y": 1200,
  "wires": [
    [
      "d84057a8cb05b22f"
    ]
  ],
  "_order": 453
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var webData = global.get("webData");
  if (!Array.isArray(webData["citizens-actions"]))
      webData["citizens-actions"] = [webData["citizens-actions"]];
  
  (webData["citizens-actions"])[msg.payload.id].archived = true;
  global.set("webData", webData);
  return msg;
}

module.exports = Node;