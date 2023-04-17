const Node = {
  "id": "1a32f920705bb1bc",
  "type": "function",
  "z": "41d1b8798efe7e15",
  "name": "Initialize?",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 960,
  "y": 440,
  "wires": [
    [
      "ba19f064476425c9"
    ]
  ],
  "_order": 76
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const pup = global.get('puppeteer');
  (async () => {
  
      var commands = msg.pupController.commands;
  
      for (let i = 0; i < commands.length; i++)
      {
          const e = commands[i];
  
          if (msg.pupController.browser == null && e.action == "launch")
          {
              msg.pupController.browser = await pup.launch(e.parameters);
              msg.pupController.browserWS = await msg.pupController.browser.wsEndpoint();
              //await NewPage(e.name != null ? e.name : "main");
              await AddInitialPage(e.name != null ? e.name : "initial");
          }
  
          else if(e.action == "newtab")
              await NewPage(e.name);
      }
  
      if(msg.pupController.browser == null)
      {
          msg.pupController.browser = await pup.launch({});
          msg.pupController.browserWS = await msg.pupController.browser.wsEndpoint();
      }
  
      msg.pupController.activePage = 0; //((await (msg.pupController.browser.pages()).length) - 1);
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
  
  /*
  async function LaunchBrowser(e)
  {
      const browser = await pup.launch(e.parameters);
      return browser.wsEndpoint();
  }
  */
}

module.exports = Node;