const Node = {
  "id": "a2dc4dcc85327a6d",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Sager",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1230,
  "y": 260,
  "wires": [
    [
      "9104824190b91e21"
    ]
  ],
  "_order": 161
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.payload.tempData == undefined || msg.payload.tempData.persondata.sager == null || !Array.isArray(msg.payload.tempData.persondata.sager))
      return msg;
  
  var html = "";
  var almCount = 0, kortCount = 0;
  
  for(var i = 0; i < msg.payload.tempData.persondata.sager.length; i++)
  {
  
      const obj = msg.payload.tempData.persondata.sager[i];
  
      var til = obj.til == null ? "ukendt udløbsdato" : obj.til;
      var alt = obj.aktiv ? "Gyldig indtil " + til : "Gyldighed udløb " + obj.til;
  
      var border = obj.aktiv ? "success" : "warning";
   
          if (!(obj.titel.toLowerCase()).includes("fod"))
          {
              if ((obj.type.toLowerCase()).includes("almindeligt helbredstillæg"))
              {
                  border = "info";
                  if(almCount++ >= 1)
                      continue;
              }
  
              else if (obj.type.toLowerCase().includes("helbredstillægskort"))
              {
                  border = "info";
                  if (kortCount++ >= 1)
                      continue;
              }
              else
                  continue;
          }
  
      //html += `<button type="button" class="btn btn-light border-` + border + ` text-black" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">` + obj.type+`</button>`
      var newTitle = obj.titel.split("(")[0];
  
      html += `
          <div class="card border-`+border+`">
          <div class="card-header fs-10 pt-1 text-muted text-center" style="height: 22px;text-transform:uppercase">`+ newTitle +`</div>
          <div class="card-body p-1 text-center">
              <p class="card-text fs-13 m-1">`+ obj.type +`</p>
          </div>
          </div>
      `;
  
  
  }
  
  msg.payload.tempData.persondata._sager = html;
  
  return msg;
  
  
  
  
}

module.exports = Node;