const Node = {
  "id": "70fb91ddec980afe",
  "type": "function",
  "z": "5bb3204aef17c104",
  "g": "63b598a9c0a41f91",
  "name": "Decrypt data",
  "func": "",
  "outputs": 2,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "crypto",
      "module": "crypto"
    }
  ],
  "x": 810,
  "y": 300,
  "wires": [
    [
      "9c7c33c9fb8cb50e"
    ],
    [
      "db4e7291ad20dfe2"
    ]
  ],
  "_order": 689
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, crypto) {
  // Decrypt data using the private key
  function decryptData(privateKey, encryptedData)
  {
          const decryptedData = crypto.privateDecrypt(
              {
                  key: privateKey,
                  padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                  oaepHash: "sha256",
              },
              Buffer.from(encryptedData, "base64")
          );
          return decryptedData.toString();
  }
  
  
  try
  {
      var decryptedData = decryptData(flow.get("privateKey"), msg.payload.data);
      msg.payload.data = decryptedData;
      node.send([msg, null]);
  }
  catch (error)
  {
      node.send([null, msg]);
  }
  
  return;
}

module.exports = Node;