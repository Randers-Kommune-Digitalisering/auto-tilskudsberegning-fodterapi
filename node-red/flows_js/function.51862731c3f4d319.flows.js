const Node = {
  "id": "51862731c3f4d319",
  "type": "function",
  "z": "41d1b8798efe7e15",
  "name": "Add browser old (broken)",
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
  "x": 670,
  "y": 760,
  "wires": [
    []
  ],
  "_order": 234
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, pup) {
  // Create pupController browser obj
  (async () => {
  
      if (msg.pupController.browser == undefined || msg.pupController.browser == null)
      {
          try
          {
              msg.pupController.browser = await pup.connect({ browserWSEndpoint: msg.browserWS });
  
              if (msg.pupController.pages.length == 0)
                  AddInitialPage();
          }
          catch (error)
          {
              console.log("Puppeteer initialization error: " + error);
          };
      }
  
      msg.pupController.activePage = 0;
  
      // Count command array length
      var commands = msg.pupController.commands;
      msg.pupController.totalActions = commands.length;
  
      node.send(msg);
  
  })();
  
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
  
  async function AddNewPage(name)
  {
      console.log("Adding initial page");
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
}

module.exports = Node;