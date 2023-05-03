const Node = {
  "id": "5a08428bae31216a",
  "type": "function",
  "z": "41d1b8798efe7e15",
  "name": "function 8",
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
  "x": 960,
  "y": 880,
  "wires": [
    [
      "b277c453a89a1de9"
    ]
  ],
  "_order": 107
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, pup) {
  try
  {
  
      msg.page = (await msg.browser.pages())[0];
  
  
      await msg.page.waitForSelector("h1", { waitUntil: 'domcontentloaded', timeout: 6000 });
      var content = await msg.page.$eval("h1", el => el.innerText);
      
  
      msg.output = content;
  
  
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