const Node = {
  "id": "f72059b409590f38",
  "type": "function",
  "z": "8ea344595d9a442a",
  "name": "function 5",
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
  "x": 660,
  "y": 3520,
  "wires": [
    [
      "a44a2b4dcd93932d"
    ]
  ],
  "_order": 402
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