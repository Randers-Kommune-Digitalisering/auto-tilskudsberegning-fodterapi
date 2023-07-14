const Node = {
  "id": "74b52793f2b5863a",
  "type": "function",
  "z": "41d1b8798efe7e15",
  "name": "Initialize? backup",
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
  "x": 630,
  "y": 580,
  "wires": [
    []
  ],
  "_order": 175
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, pup) {
  //const pup = global.get('puppeteer');
  (async () => {
  
      var commands = msg.pupController.commands;
  
      for (let i = 0; i < commands.length; i++)
      {
          const e = commands[i];
  
          if (msg.pupController.browser == null && e.action == "launch")
          {
              try
              {
                  msg.pupController.browser = msg.pupController.browser ? msg.pupController.browser : await pup.connect({ browserWSEndpoint: msg.browserWS });
                  //msg.pupController.browserWS = await msg.pupController.browser.wsEndpoint();
                  await AddInitialPage(e.name != null ? e.name : "initial");
              }
              catch (error)
              {
                  console.log("Puppeteer error: " + error);
              };
          }
  
          else if(e.action == "newtab")
              await NewPage(e.name);
      }
  
      if(msg.pupController.browser == null)
      {
          try
          {
              msg.pupController.browser = await pup.connect({ browserWSEndpoint: msg.browserWS });
              //msg.pupController.browserWS = await msg.pupController.browser.wsEndpoint();
          }
          catch (error)
          {
              console.log("Puppeteer error: " + error);
          };
      }
  
      msg.pupController.activePage = 0;
      
      //((await (msg.pupController.browser.pages()).length) - 1);
      /*
      {
          "page": (await msg.pupController.browser.pages())[(await msg.pupController.browser.pages()).length - 1],
          "po":msg.pupController.pages[msg.pupController.pages.length - 1]
      }*/
  
      msg.pupController.totalActions = commands.length;
      node.send(msg);
  
  })();
  
  async function NewPage(name) {
      const newPage = await msg.pupController.browser.newPage();
      const id = (await msg.pupController.browser.pages()).length - 1;
      const url = await newPage.url();
      msg.pupController.pages.push(
          {
              "name": name,
              "id": id,
              "url": url
          });
  }
  
  async function AddInitialPage(name = "initial")
  {
      const page = (await msg.pupController.browser.pages())[0];
      const url = await page.url();
      msg.pupController.pages.push(
          {
              "name": name,
              "id": 0,
              "url": url
          });
  }
}

module.exports = Node;