const Node = {
  "id": "22499be248e4271c",
  "type": "function",
  "z": "5bb3204aef17c104",
  "g": "63492761a85db852",
  "name": "set as archived",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 640,
  "y": 1440,
  "wires": [
    [
      "33ee436ad9ead077"
    ]
  ],
  "_order": 814
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var webData = global.get("webData");
  if (!Array.isArray(webData["citizens-actions"]))
      webData["citizens-actions"] = [webData["citizens-actions"]];
  
  (webData["citizens-actions"])[msg.payload.data.id].archived = true;
  global.set("webData", webData);
  return msg;
}

module.exports = Node;