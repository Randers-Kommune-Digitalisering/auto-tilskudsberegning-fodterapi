const Node = {
  "id": "9104824190b91e21",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Fakturaer + handlinger",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1180,
  "y": 2280,
  "wires": [
    [
      "449ee6323dbb0e10"
    ]
  ],
  "_order": 311
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
  if (msg.payload.tempData == null || msg.payload.tempData == undefined)
      return msg;
  
  if (!Array.isArray(msg.payload.tempData.regelbrud))
      msg.payload.tempData.regelbrud = [msg.payload.tempData.regelbrud];
  
  var fejl ="";
      
  if (msg.payload.tempData.regelbrud[0] != null)
      for (var j = 0; j < msg.payload.tempData.regelbrud.length; j++) {
          const r_obj = msg.payload.tempData.regelbrud[j];
  
          var regelbrud = r_obj.rule != null ? r_obj.rule + ": " + r_obj.description : r_obj; //+ " (" + r_obj.objectValue + " " + r_obj.operator + " " + r_obj.expectedValue + ")";
  
          fejl += `<div class="card mb-2 border-warning header-left" style="">
                      <div class="card-header header-left text-muted fs-10" style="width:20%;border-right: 1px solid rgba(0,0,0,0.125)">REGELBRUD</div>
                      <div style="align-self: center;padding-left:10px">`+ regelbrud + `</div>
                  </div>`;
      }
  
  msg.payload.tempData._faktura = fejl;
  
  if (msg.payload.tempData.faktura == null)
      return msg;
  
  function round(num) {
      return Math.round((num + Number.EPSILON) * 100) / 100;
  }
  
  var html = "";
  
  if (!Array.isArray(msg.payload.tempData.faktura))
      msg.payload.tempData.faktura = [msg.payload.tempData.faktura];
  
  for(var i = 0; i < msg.payload.tempData.faktura.length; i++)
  {
      const obj = msg.payload.tempData.faktura[i];
  
      var handlinger = "";
  
      if (!Array.isArray(msg.payload.tempData.handlinger))
          msg.payload.tempData.handlinger = [msg.payload.tempData.handlinger];
  
      var k = 0;
      var total = 0;
  
      if (msg.payload.tempData.handlinger[0] != null)
          for(var j = 0; j < msg.payload.tempData.handlinger.length; j++)
          {
  
              const h_obj = msg.payload.tempData.handlinger[j];
              if(h_obj.fid != obj.id)
              {
                  k++;
                  continue;
              }
  
              var handling;
              if(h_obj.tilskud != null)
              {
                  var nyttilskud = round(h_obj.tilskud);
                  total += nyttilskud;
                  total = round(total);
                  handling = h_obj.handling + " - tilskud gives: " + nyttilskud + " kr"
                      + ((total > nyttilskud) ? " <span class='text-muted'>(total: " + total + " kr)</span>" : "");
              }
              else
                  handling = h_obj.handling + " - " + (h_obj.type == "A" ? "udvidet helbredstillæg" : "alm. helbredstillæg");
  
              handlinger += `
                  <div class="card mb-2 border-light header-left" style="">
                      <div class="card-header header-left text-muted fs-10" style="width:20%;border-right: 1px solid rgba(0,0,0,0.125)">HANDLING #`+(j+1-k)+`</div>
                      <div style="align-self: center;padding-left:10px">`+handling+`</div>
                  </div>`;
          }
  
  
      if (obj.behandlinger != null)
          if (!Array.isArray(obj.behandlinger))
              obj.behandlinger = [obj.behandlinger];
  
      var behandlinger = "";
  
      if (obj.behandlinger != null)
          for (var k = 0; k < obj.behandlinger.length; k++)
          {
              var b_obj = obj.behandlinger[k];
              behandlinger += `<tr>
                                  <td>`+ b_obj.ydelsesnummer+`</td>
                                  <th scope="row">`+ b_obj.titel + ` (type ` + b_obj.type +`)</th>
                                  <td>`+ b_obj.patientAndel +`</td>
                                  <td>`+ b_obj.sygesikringsAndel +`</td>
                                  <th  scope="row">`+ round(b_obj.patientAndel + b_obj.sygesikringsAndel) + `</th>
                              </tr>`;
          }
      behandlinger += `<tr class="no-border-bottom">
                              <td></td>
                              <th scope="row"></th>
                              <td></td>
                              <td></td>
                              <th scope="row">`+ round(obj.total) + `</th>
                      </tr>`;
  
  
      if(obj.ydernummer == null || obj.ydernummer == "ydernummermangler")
          html += `<div class="card border-warning mb-2 p-1">
              <span class="pl-2 fs-13"><b>OBS</b>: Behandler har IKKE oplyst ydernummer</span>
          </div>`;
  
      html += `
      <div class="card border-light mb-2">
          <!-- Faktura  -->
  
          <div class="card-header text-muted fs-10" style="height: 38px">FAKTURA #`+(i+1)+`
              <span class="float-center">
              </span>
              <span class="float-right">
                  `+obj.dato+`
                  <a href="http://workletnew.snapp.dk/auth/sign-in/`+obj.id+`" target="_blank" style="padding-left: 10px">
                      <span class="float-right text-muted" style="margin-top:-1px"><i class="fas fa-sm fa-link"></i></span>
                  </a>
              </span>
          </div>
          <div class="card-body p-3" style="padding-top: 0px!important;padding-bottom: 0px!important">
  
              <table class="table">
                  <thead class="border-none">
                      <tr>
                          <th scope="col"><span class="table-header">Ydelsesnr.</span></th>
                          <th scope="col"><span class="table-header">Ydelse</span></th>
                          <th scope="col"><span class="table-header">Egenbetaling</span></th>
                          <th scope="col"><span class="table-header">Sygesikring</span></th>
                          <th scope="col"><span class="table-header">Total</span></th>
                      </tr>
                  </thead>
                  <tbody>
                      `+behandlinger+`
                  </tbody>
              </table>
  
          </div>
  
          <!-- /Faktura -->
      </div>
      `;
  
      html += handlinger;
  
      if ((msg.payload.tempData.faktura.length - 1) == i)
          html += fejl;
  
  
  }
  
  msg.payload.tempData._faktura = html;
  
  return msg;
}

module.exports = Node;