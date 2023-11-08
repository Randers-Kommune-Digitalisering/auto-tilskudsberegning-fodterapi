const Node = {
  "id": "6553bd482e86e7cd",
  "type": "function",
  "z": "41d1b8798efe7e15",
  "name": "CSS Selector Parser",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 680,
  "y": 340,
  "wires": [
    [
      "9e92c896a8cf98b0"
    ]
  ],
  "_order": 178
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  for (let i = 0; i < msg.payload.length; i++) {
      const e = msg.payload[i];
  
      if(e.element != null)
          e.path = CreatePath(e.element);
      //DebugElement(e.element);
      
  }
  
  function DebugElement(element)
  {
      msg.test.push(element);
  }
  
  function CreatePath(element)
  {
      if(element.path != null)
          element.path;
  
      var path = element.type == null ? "" : element.type;
  
      if(element.parent != null && element.within != null)
          ReportError({
              "error": "Both parent and within values set for element",
              "element": element
          });
  
      if(element.class != null)
          path = path + "." + element.class;
  
          if (element.classContains != null)
              path = path + "[class*='" + element.classContains + "']";
  
          if (element.classStartsWith != null)
              path = path + "[class^='" + element.classStartsWith + "']";
  
      if (element.id != null)
          path = path + "[id='" + element.id + "']";
  
          if(element.idContains != null)
              path = path + "[id*='" + element.idContains + "']";
  
          if (element.idStartsWith != null)
              path = path + "[id^='" + element.idStartsWith + "']";
  
      if (element.name != null)
          path = path + "[name='" + element.name + "']";
  
      if (element.src != null)
          path = path + "[src='" + element.src + "']";
  
      if (element.innerHTML != null)
          path = path + "[innerHTML='" + element.innerHTML + "']";
  
      // Check parent + within
  
      if(element.parent != null)
          path = CreatePath(element.parent) + " > " + path;
      
      else if (element.within != null)
          path = CreatePath(element.within) + " " + path;
  
      return path;
  }
  
  function ReportError(error)
  {
      msg.error = error;
  }
  
  
  return msg;
}

module.exports = Node;