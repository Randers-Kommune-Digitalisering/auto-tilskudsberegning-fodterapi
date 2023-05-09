const Node = {
  "id": "a44a2b4dcd93932d",
  "type": "function",
  "z": "a1b347492c77827f",
  "name": "function 6",
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
  "x": 880,
  "y": 200,
  "wires": [
    [
      "28397792aef1ee17"
    ]
  ],
  "_order": 470
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