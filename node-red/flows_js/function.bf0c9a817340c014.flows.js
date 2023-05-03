const Node = {
  "id": "bf0c9a817340c014",
  "type": "function",
  "z": "41d1b8798efe7e15",
  "name": "function 7",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "pup",
      "module": "puppeteer"
    }
  ],
  "x": 760,
  "y": 880,
  "wires": [
    [
      "5a08428bae31216a"
    ]
  ],
  "_order": 105
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, pup) {
  try
  {
      msg.browser = await pup.connect({ browserWSEndpoint: 'ws://browserless:3000' });
      
      msg.page = (await msg.browser.pages())[0];
      
      
      await msg.page.goto('https://example.com/');
  
  
  }
  catch (error)
  {
      msg.error = error.message;
      console.log("Puppeteer error: " + JSON.stringify(error));
  };
  
  return msg;
  
  
  /*
  
  ws://auto-tilskudsberegning-fodterapi_browserless_1:3000
  
  ws://browserless:3000
  
  */
}

module.exports = Node;