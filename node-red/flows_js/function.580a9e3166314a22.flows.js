const Node = {
  "id": "580a9e3166314a22",
  "type": "function",
  "z": "41d1b8798efe7e15",
  "name": "Solo Controller",
  "func": "",
  "outputs": 2,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "pup",
      "module": "puppeteer"
    },
    {
      "var": "path",
      "module": "path"
    }
  ],
  "x": 1140,
  "y": 460,
  "wires": [
    [
      "cb4ea3ccf7541c86",
      "668e1ae3f9c4ccf8"
    ],
    [
      "2fd098a8190ef089"
    ]
  ],
  "_order": 77
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, pup, path) {
  //const pup = global.get('puppeteer');
  //const path = global.get('path');
  //const downloadPath = path.resolve('/tmp/');
  
  var actions = [];
  //var outputs = [];
  var outputs = {};
  
  const loadTimeoutMs = 30000;
  const timeoutMs = 6500;
  
  (async () => {
  
      const actionList = msg.payload;
      var actionPerformed;
  
      for (let i = 0; i < actionList.length; i++) {
          
          try {
              //const browser = msg.pupController.browser; //? msg.pupController.browser : await pup.connect({ "browserWSEndpoint": msg.browserWS });
              //const page = (await msg.pupController.browser.pages())[msg.pupController.activePage];
              //msg.pupController.page.setDefaultNavigationTimeout(1000);
  
              var ele = actionList[i];
              const action = ele.action;
  
              await msg.pupController.page.waitForNetworkIdle();
  
              switch (action)
              {
                  case "newtab":
                      break;
  
                  case "goto":
                      if (ele.url != null)
                          await msg.pupController.page.goto(ele.url, { waitUntil: 'load', timeout: loadTimeoutMs });
                      else
                          actionPerformed = ReportError(ele, "Error: URL was lost");
                      break;
  
                  case "click":
                      //if(ele.isDownload == true || ele.isDownload == "true")
                      //    setDownloadBehavior(msg.pupController.page);
                      await msg.pupController.page.waitForSelector(ele.path, { waitUntil: 'domcontentloaded', timeout: timeoutMs });
                      await msg.pupController.page.click(ele.path, (ele.parameters != null ? ele.parameters : {}));
                      if (ele.isDownload == true || ele.isDownload == "true")
                          await msg.pupController.page.waitForNetworkIdle();
                      break;
  
                  case "clickifexists":
                      //if (ele.isDownload == true || ele.isDownload == "true")
                      //    setDownloadBehavior(msg.pupController.page);
                      
                      const exists = !! await msg.pupController.page.$(ele.path);
  
                      //wait page.waitForSelector(ele.path, { waitUntil: 'domcontentloaded', timeout: timeoutMs });
                      if(exists)
                          await msg.pupController.page.click(ele.path, (ele.parameters != null ? ele.parameters : {}));
  
                      if (ele.isDownload == true || ele.isDownload == "true")
                          await msg.pupController.page.waitForNetworkIdle();
                      break;
  
                  case "type":
                      await msg.pupController.page.waitForSelector(ele.path, { waitUntil: 'domcontentloaded', timeout: timeoutMs });
                      if (ele.clear == true || ele.clearInput == true || ele.clear == "true" || ele.clearInput == "true")
                          await msg.pupController.page.click(ele.path, { clickCount: 3 });
                      await msg.pupController.page.type(ele.path, ele.input);
                      break;
  
                  case "select":
                      //let elemHandler = await page.$(ele.path).then(x => console.log(
                          //console.log("ELEMENT HANDLE FOUND: " + x)));
                      let properties = await msg.pupController.page.$(ele.path).then(elemHandler => elemHandler.getProperties());
                      for (const property of properties.values())
                      {
                          const element = property.asElement();
                          if (element)
                          {
                              let hText = await element.getProperty("text");
                              let text = await hText.jsonValue();
                              if (text === ele.input)
                              {
                                  let hValue = await element.getProperty("value");
                                  let value = await hValue.jsonValue();
                                  await msg.pupController.page.select(ele.path, value); // or use 58730
                                  //console.log(`Selected ${text} which is value ${value}.`);
                              }
                          }
                      }
                      /*
                      await page.waitForSelector(ele.path, { waitUntil: 'domcontentloaded', timeout: timeoutMs });
                      await page.select(ele.path, ele.input);
                      */
                      break;
  
                  case "get":
                      await msg.pupController.page.waitForSelector(ele.path, { waitUntil: 'domcontentloaded', timeout: timeoutMs });
                      var content = await msg.pupController.page.$eval(ele.path, el => el.innerText);
                      ele.output = actionList[i].output = content;
                      break;
  
                  case "geturl":
                      ele.output = actionList[i].output = msg.pupController.page.url();
                      break;
  
                  case "authenticate":
                      var login_username = ele.username;
                      var login_password = ele.password;
                      await msg.pupController.page.authenticate({ 'username': login_username, 'password': login_password });
                      break;
  
                  case "wait":
                      if(ele.ms != null)
                          await wait(ele.ms);
                      break;
  
                  default:
                      break;
              }
  
              ele.succesful = true;
              actionPerformed = ReportAction(ele);
              node.send([null, actionPerformed]);
  
              //if(i == actionList.length-1 && action != "close")
              //    await browser.close();
              
              
          }
          catch (e)
          {
              console.log("PupController error: " + JSON.stringify(e));
              //node.error("Error:", e);
              actionList[i].succesful = false;
              actionPerformed = ReportError(actionList[i], e);
              
              node.send([null, actionPerformed]);
          }
  
      }
  
  
      msg.pupOutputs = outputs;
      node.send([msg, null]);
  })();
  
  async function wait(_ms)
  {
      let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve("done!"), _ms)
      });
      let result = await promise; // wait until the promise resolves (*)
      //alert(result); // "done!"
  }
  
  function ReportAction(a, s = true)
  {
      var newAction;
      actions.push(newAction = {
          "action": a.action,
          "succesful": s,
          "obj": a
      });
  
      if(a.output != null)
      {
          var outputName = a.name;
          var outputObj = a.obj;
  
          if(outputObj != null && outputObj != "")
          {
              outputs[outputObj] = outputs[outputObj] == null ? {} : outputs[outputObj];
              outputs[outputObj][outputName] = a.output;
          }
          else
              outputs[outputName] = a.output;
          /*
          outputs.push({
              "name": a.name,
              "value": a.output
          });*/
      }
      return newAction;
  }
  
  function ReportError(a, e)
  {
      console.log("Puppeteer error:" + e);
      var newAction;
      actions.push(newAction = {
          "action": a,
          "succesful": false,
          "error": e,
          "obj": a
      });
      return newAction;
  }
  
  /*async function setDownloadBehavior(page) {
      const client = await page.target().createCDPSession();
      await client.send('Page.setDownloadBehavior', {
          behavior: 'allow',
          downloadPath: downloadPath
      });
  }*/
}

module.exports = Node;