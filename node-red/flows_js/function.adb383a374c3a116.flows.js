const Node = {
  "id": "adb383a374c3a116",
  "type": "function",
  "z": "41d1b8798efe7e15",
  "name": "Add browser",
  "func": "",
  "outputs": 1,
  "timeout": "",
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "pup",
      "module": "puppeteer"
    }
  ],
  "x": 690,
  "y": 540,
  "wires": [
    [
      "ba19f064476425c9"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, pup) {
  try
  {
      msg.pupController.browser = await pup.connect(msg.pupController.browserless);
      msg.pupController.page = await msg.pupController.browser.newPage();
      console.log("Puppeteer instantiated");
  }
  catch (error)
  {
      msg.error = error.message;
      console.log("Puppeteer instantiation error: " + JSON.stringify(error));
  };
  return msg;
}

module.exports = Node;