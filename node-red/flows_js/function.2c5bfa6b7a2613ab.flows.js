const Node = {
  "id": "2c5bfa6b7a2613ab",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "44e7408f9fee1e77",
  "name": "Find filnavn",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1570,
  "y": 300,
  "wires": [
    [
      "2833bc30cabd27bb",
      "a534a873bebc25b6",
      "4f8ccb830206b86d"
    ]
  ],
  "info": "",
  "_order": 216
}

Node.info = `
## Define file name
This JS snippet utilizes the JavaScript date function \`toDateString()\` as well as some string manipulation to define the name of the JSON file which will be downloaded from Worklet web interface.

The name defined is later used to find and read the downloaded file, as the actual file name cannot be set when downloading, nor can it be retrieved as the download is in progress. Therefore, the name must be determined manually to match the naming procedure of Worklet web interface.
`

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const splitStartDate = msg.currentRun.startDate.split("/");
  const splitEndDate = msg.currentRun.endDate.split("/");
  
  var startDate = new Date(splitStartDate[2], splitStartDate[1] - 1, splitStartDate[0]);
  var endDate = new Date(splitEndDate[2], splitEndDate[1] - 1, splitEndDate[0]);
  
  // define file name
  var fileName = "Kvitteringer-" + startDate.toDateString().replace(splitStartDate[2], "").trimEnd()
      + "-" + endDate.toDateString().replace(endDate.getFullYear().toString(), "").trimEnd();
      
  fileName += ".json";
  
  msg.fileName = fileName;
  
  return msg;
}

module.exports = Node;