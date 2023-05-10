const Node = {
  "id": "8e343631903b89fe",
  "type": "function",
  "z": "a1b347492c77827f",
  "name": "function 4",
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
  "x": 680,
  "y": 160,
  "wires": [
    [
      "7fd11086984ad7a2"
    ]
  ],
  "_order": 477
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, pup) {
  try
  {
      msg.browser = await pup.connect({ browserWSEndpoint: 'ws://browserless:3000' });
      
      msg.page = (await msg.browser.pages())[0];
      
      
      await msg.page.goto('https://example.com/');
  
  
  
  
      await msg.page.waitForSelector("h1", { waitUntil: 'domcontentloaded', timeout: 6000 });
      var content = await msg.page.$eval("h1", el => el.innerText);
      //ele.output = actionList[i].output = content;
  
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