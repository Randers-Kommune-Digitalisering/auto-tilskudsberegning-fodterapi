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
  "_order": 165
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, pup, path) {
  var actions = [];
  var outputs = {};
  
  const loadTimeoutMs = 30000;
  const timeoutMs = 5000;
  
  
  async function Click(ele)
  {
      try
      {
          await msg.pupController.page.waitForSelector(ele.path, {"timeout": timeoutMs});
          const eval = await msg.pupController.page.$(ele.path, { "timeout": timeoutMs });
          
          if(eval != null)
              msg.pupController.page.click(ele.path, (ele.parameters != null ? ele.parameters : {}))
              
              .catch(error => console.log("ERROR: " + error));
              
      } catch(error) { console.log("Click error: " + error ) }
  }
  
  async function Type(ele)
  {
      try {
          await msg.pupController.page.waitForSelector(ele.path, { "timeout": timeoutMs });
          
          if (ele.clear == true || ele.clearInput == true || ele.clear == "true" || ele.clearInput == "true")
  
              await msg.pupController.page.click(ele.path, { clickCount: 3 })
  
                  .then(msg.pupController.page.type(ele.path, ele.input))
                  .catch(error => console.log("ERROR: " + error));
  
          else
              await msg.pupController.page.type(ele.path, ele.input)
  
                  .catch(error => console.log("ERROR: " + error));
              
      } catch(error) { console.log("Type error: " + error ) }
  }
  
  async function Select(ele)
  {
      try {
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
              
      } catch(error) { console.log("Select error: " + error ) }
  }
  
  (async () => {
  
      const actionList = msg.payload;
      var actionPerformed;
  
      for (const ele of actionList) {
          
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
                  case "click":
                      await Click(ele).catch(console.log("Click error"));
                      break;
  
                  case "type":
                      await Type(ele).catch(console.log("Type error"));
                      break;
  
                  case "select":
                      await Select(ele).catch(console.log("Select error"));
                      break;
  
                  case "get":
                      await msg.pupController.page.waitForSelector(ele.path, { waitUntil: 'domcontentloaded', timeout: timeoutMs }).catch("Get error");;
                      ele.output = await msg.pupController.page.$eval(ele.path, el => el.innerText).catch("Get error");;
  
                  case "geturl":
                      ele.output = msg.pupController.page.url();
                      break;
  
                  case "authenticate":
                      var login_username = ele.username;
                      var login_password = ele.password;
                      await msg.pupController.page.authenticate({ 'username': login_username, 'password': login_password }).catch("Authenticate error");;
                      break;
  
                  case "wait":
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
  
      }
  
  
      msg.pupOutputs = outputs;
      node.send([msg, null]);
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
          "action": a,
          "succesful": false,
          "error": e,
          "obj": a
      });
      return newAction;
  }
}

module.exports = Node;