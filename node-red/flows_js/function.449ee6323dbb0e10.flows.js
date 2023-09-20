const Node = {
  "id": "449ee6323dbb0e10",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Pagination",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1630,
  "y": 260,
  "wires": [
    [
      "3f57e4a3850446e6"
    ]
  ],
  "_order": 318
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var page = msg.payload.page;
  
  var maxCount = 8;
  maxCount = maxCount > (parseInt(msg.payload.tempDataLength)-1) ? (parseInt(msg.payload.tempDataLength)-1) : maxCount;
  
  var countBeforeActive = msg.payload.spec > 4 ? 4 : msg.payload.spec;
  var countAfterActive = maxCount - countBeforeActive;
  var countAfterActive = ((countAfterActive + parseInt(msg.payload.spec)) > (parseInt(msg.payload.tempDataLength) - 1)) ? (msg.payload.tempDataLength - msg.payload.spec -1) : countAfterActive;
  
  if(countAfterActive < 4 && msg.payload.spec > maxCount-countAfterActive)
      countBeforeActive = maxCount - countAfterActive;
  
  
  function isArchived (id)
  {
      if (msg.payload.tempDataArray[id] != null && msg.payload.tempDataArray[id] != undefined)
          return msg.payload.tempDataArray[id].archived;
      else return false;
  }
  
  var html = `<ul class="pagination">`;
  
  // Arrow left
  if(countBeforeActive > 0)
      html += `<li class="page-item">
               <a class="page-link" onClick="goToPage('`+ page +`?spec=`+ (parseInt(msg.payload.spec) - 1) +`')">&laquo;</a>
               </li>`;
  
  // previous
  for (var i = 0; i < countBeforeActive; i++)
  {
      var id = -(countBeforeActive - parseInt(msg.payload.spec) - i);
  
      html += `<li class="page-item`+(isArchived(id) ? ` archived`:``)+`">
              <a class="page-link" onClick="goToPage('`+ page +`?spec=`+ id + `')">` +(parseInt(id) + 1)+`</a>
              </li> `;
  }
  
  // active
  html += `<li class="page-item active` + (isArchived(msg.payload.spec) ? ` archived` : ``) +`">
              <a class="page-link">`+ (parseInt(msg.payload.spec)+1) + `</a>
           </li> `;
  
  // after
  for (var i = 0; i < countAfterActive; i++) {
      var id = (parseInt(msg.payload.spec) + 1 + i);
      html += `<li class="page-item` + (isArchived(id) ? ` archived` : ``) +`">
              <a class="page-link" onClick="goToPage('`+ page +`?spec=`+ id + `')">` + (parseInt(id) + 1)+ `</a>
              </li> `;
  }
  
  // Arrow right
  if (countAfterActive >= 1)
  html += `<li class="page-item">
              <a class="page-link" onClick="goToPage('`+ page +`?spec=`+ (parseInt(msg.payload.spec) + 1) +`')">&raquo;</a>
           </li>`;
  
  html += `</ul>`;
  
  msg.payload.tempData._pagination = html;
  
  return msg;
}

module.exports = Node;