const Node = {
  "id": "34a22fef0a170d75",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Pagination",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1010,
  "y": 1860,
  "wires": [
    [
      "40d793f24bd697d9"
    ]
  ],
  "_order": 418
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const isReceiptWithActions = msg.payload.recommended;
  
  const page = "receipts?cat=" + 
               ( isReceiptWithActions ?
                  "actions"
                  :
                  "noactions" );
  
  var receiptArray = isReceiptWithActions ?
                          (global.get("receipts")).actions
                          :
                          (global.get("receipts")).noactions;
  
  receiptArray = Array.isArray(receiptArray) ? receiptArray : [receiptArray];
  
  
  const currentReceiptIndex = receiptArray.findIndex(x => x.faktura.id == msg.payload.faktura.id);
  
  function GetReceiptIdFromIndex(index)
  {
      return receiptArray[index].faktura.id;
  }
  
  var maxCount = 8;
  maxCount = maxCount > (receiptArray.length - 1) ?
                  (receiptArray.length-1)
                  :
                  maxCount;
  
  var countBeforeActive = currentReceiptIndex > 4 ? 4 : currentReceiptIndex;
  var countAfterActive = maxCount - countBeforeActive;
  var countAfterActive = (countAfterActive + currentReceiptIndex) > (receiptArray.length - 1) ?
                              (receiptArray.length - currentReceiptIndex - 1) 
                              :
                              countAfterActive;
  
  if (countAfterActive < 4 && (receiptArray.length  > maxCount-countAfterActive))
      countBeforeActive = maxCount - countAfterActive;
  
  function isArchived (id)
  {
      return receiptArray[id].archived;
  }
  
  var html = `<ul class="pagination">`;
  
  // Arrow left
  if(countBeforeActive > 0)
      html += `<li class="page-item">
               <a class="page-link" onClick="loadPage('receipts?receiptid=` + GetReceiptIdFromIndex(currentReceiptIndex - 1) +`')">&laquo;</a>
               </li>`;
  
  var fid;
  // previous
  for (var i = 0; i < countBeforeActive; i++)
  {
      fid = -(countBeforeActive - currentReceiptIndex - i);
  
      html += `<li class="page-item`+(isArchived(fid) ? ` archived`:``)+`">
              <a class="page-link" onClick="loadPage('receipts?receiptid=`+ GetReceiptIdFromIndex(fid) + `')">` + (fid + 1) +`</a>
              </li> `;
  }
  
  // active
  html += `<li class="page-item active` + (isArchived(currentReceiptIndex) ? ` archived` : ``) +`">
              <a class="page-link disabled">`+ (currentReceiptIndex+1) + `</a>
           </li> `;
  
  // after
  for (var i = 0; i < countAfterActive; i++)
  {
      fid = (currentReceiptIndex + 1 + i);
  
      html += `<li class="page-item` + (isArchived(fid) ? ` archived` : ``) +`">
              <a class="page-link" onClick="loadPage('receipts?receiptid=`+ GetReceiptIdFromIndex(fid) +`')">` + (fid + 1) + `</a>
              </li> `;
  }
  
  // Arrow right
  if (countAfterActive >= 1)
  html += `<li class="page-item">
              <a class="page-link" onClick="loadPage('receipts?receiptid=` + GetReceiptIdFromIndex(currentReceiptIndex + 1) +`')">&raquo;</a>
           </li>`;
  
  html += `</ul>`;
  
  msg.webElements.receipt.pagination = html;
  
  return msg;
  
}

module.exports = Node;