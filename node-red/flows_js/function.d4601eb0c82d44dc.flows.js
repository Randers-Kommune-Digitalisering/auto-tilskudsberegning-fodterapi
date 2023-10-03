const Node = {
  "id": "d4601eb0c82d44dc",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Helbredstillægsprocent",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1280,
  "y": 200,
  "wires": [
    [
      "b0b8bd30f6fdf461"
    ]
  ],
  "_order": 326
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.payload.tempData.persondata == null || msg.payload.tempData.persondata == undefined)
  {
      msg.payload.tempData.persondata = { "_htillaegsprocent": 0 };
      return msg;
  }
  else
  if (msg.payload.tempData.faktura == undefined || msg.payload.tempData.persondata == undefined)
      return msg;
  
  
  var faktura = Array.isArray(msg.payload.tempData.faktura) ? msg.payload.tempData.faktura[0] : msg.payload.tempData.faktura;
  var hprocent = 0;
  
  if (faktura._helbredstillaegsprocent != null && faktura._helbredstillaegsprocent != undefined)
      hprocent = Array.isArray(faktura._helbredstillaegsprocent) ? faktura._helbredstillaegsprocent[0] : faktura._helbredstillaegsprocent;
      
  else
      hprocent = Array.isArray(msg.payload.tempData.persondata.helbredstillaegsprocent) ?
                 msg.payload.tempData.persondata.helbredstillaegsprocent[0] :
                 msg.payload.tempData.persondata.helbredstillaegsprocent;
  
  msg.payload.tempData.persondata._htillaegsprocent = (hprocent == null || hprocent == undefined) ? 0 : hprocent.tillaegsprocent;
  
  return msg;
}

module.exports = Node;