const Node = {
  "id": "580a9e3166314a22",
  "type": "function",
  "z": "41d1b8798efe7e15",
  "name": "Controller",
  "func": "",
  "outputs": 2,
  "timeout": "",
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "pup",
      "module": "puppeteer-core"
    },
    {
      "var": "path",
      "module": "path"
    }
  ],
  "x": 620,
  "y": 680,
  "wires": [
    [
      "cb4ea3ccf7541c86",
      "8f5e60be2a6e0ff4"
    ],
    [
      "2fd098a8190ef089"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, pup, path) {
  var actions = [];
  var outputs = {};
  
  const loadTimeoutMs = 15000;
  const timeoutMs = 1500;
  
  (async () => {
  
      try {
  
      const actionList = msg.payload;
      var actionPerformed;
  
      for (const ele of actionList) {
  
          if (msg.pupController.page)
  
          try {
              
              const action = ele.action;
  
              switch (action)
              {
                  case "goto":
  
                      if (ele.url != null)
                          await msg.pupController.page.goto(ele.url, { waitUntil: 'load', timeout: loadTimeoutMs }).catch("Goto error");
                      else
                          actionPerformed = ReportError(ele, "Error: URL was lost");
                      break;
  
                  case "clickifexists":
                  case "jsclick":
  
                      await msg.pupController.page.waitForSelector(ele.path, { "timeout": timeoutMs });
                      var element = await msg.pupController.page.$(ele.path);
                      await msg.pupController.page.evaluate(e => {
                          e.click();
                      }, element);
  
                      break;
  
                  case "click":
  
                      await msg.pupController.page.waitForSelector(ele.path, { "timeout": timeoutMs });
                      await msg.pupController.page.click(ele.path, (ele.parameters != null ? ele.parameters : {}));
  
                      break;
  
                  case "type":
  
                      await msg.pupController.page.waitForSelector(ele.path, { "timeout": timeoutMs });
  
                      var element = await msg.pupController.page.$(ele.path);
  
                      await msg.pupController.page.evaluate(e => {}, element);
  
                      if (ele.clear == true || ele.clearInput == true || ele.clear == "true" || ele.clearInput == "true")
                          
                          msg.pupController.page.click(ele.path, { clickCount: 3 })
                              .then(msg.pupController.page.type(ele.path, ele.input));
  
                      else
                          await msg.pupController.page.type(ele.path, ele.input);
  
  
  
                      break;
  
                  case "select":
  
                      await msg.pupController.page.waitForSelector(ele.path, { "timeout": timeoutMs });
                      const properties = await msg.pupController.page.$(ele.path)
                          .then(elemHandler => elemHandler.getProperties());
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
                                  await msg.pupController.page.select(ele.path, value);
                              }
                          }
                      }
                      
                      break;
  
                  case "get":
                      await msg.pupController.page.waitForSelector(ele.path, { waitUntil: 'domcontentloaded', timeout: timeoutMs });
                      ele.output = await msg.pupController.page.$eval(ele.path, el => el.innerText);
                      break;
  
                  case "geturl":
                      ele.output = msg.pupController.page.url();
                      break;
  
                  case "authenticate":
                      var login_username = ele.username;
                      var login_password = ele.password;
                      await msg.pupController.page.authenticate({ 'username': login_username, 'password': login_password }).catch("Authenticate error");;
                      break;
  
                  default:
                      break;
              }
  
              // Action completed
  
              ele.succesful = true;
              actionPerformed = ReportAction(ele);
  
              node.send([null, actionPerformed]);
              
          }
          catch (e)
          {
              // Error caught
  
              ele.succesful = false;
              ele.error = e;
              actionPerformed = ReportError(ele, e);
  
              node.send([null, actionPerformed]);
          }
          else
          {
              // Browser no longer exists
  
              ele.succesful = false;
              ele.error = "Browser page no longer exists";
              actionPerformed = ReportAction(ele);
  
              node.send([null, actionPerformed]);
          }
  
      }
  
      msg.pupOutputs = outputs;
      node.send([msg, null]);
          
      } catch (error) {
          msg.error = error;
          node.send([msg, null]);
      } finally {
          if (msg.pupController.browser) msg.pupController.browser.close();
          console.log("Automation flow finished");
          return;
      }
  
  })();
  
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
      }
      return newAction;
  }
  
  function ReportError(a, e)
  {
      console.log("PupController error:" + e);
      var newAction;
      actions.push(newAction = {
          "action": a.action,
          "succesful": false,
          "error": e,
          "obj": a
      });
      return newAction;
  }
}

module.exports = Node;