const Node = {
  "id": "4f3852df34ce990f",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "page: run",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1360,
  "y": 760,
  "wires": [
    [
      "c83fdc0290f77ad3"
    ]
  ],
  "_order": 196
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var dataExists = global.get("webData") !== null && global.get("webData") !== undefined;
  var receiptsAwaiting = msg.currentRun == null ? false : !msg.currentRun.allReceiptsProcessed;
  var isFinalized = msg.currentRun == null ? true : msg.currentRun.isFinalized;
  
  var receiptCount = 0;
  
  if (global.get("webData") !== undefined)
      if (global.get("webData")["citizens-actions"] !== undefined)
          receiptCount += global.get("webData")["citizens-actions"].length;
          
  if (global.get("webData") !== undefined)
      if (global.get("webData")["citizens-noactions"] !== undefined) 
          receiptCount += global.get("webData")["citizens-noactions"].length;
  
  
  function pageAccepted(pageName)
  {
      return (msg.payload.webSettings.acceptances[pageName]);
  }
  function allPagesAccepted()
  {
      return (pageAccepted("login") && pageAccepted("rules") && pageAccepted("grants"));
  }
  
  var header = "Kør robot";
  var subheader ="Start søgning efter nye fakturaer";
  var buttonHtml = "";
  var cardtext ="Robotten henter først fakturaer fra WorkLet, og beregner derefter potientielle tilskud.";
  
  if (msg.payload.webSettings.state.isRunning) {
      buttonHtml = `<button class="btn btn-lg btn-primary ml-2 btn-lg" id="button_startRun" type="button" onclick="startRun()" style="width: 300px" disabled>
                      <i class="fa-lg fas fa-spinner fa-spin"></i>
                    </button>`;
  
  }
  else if((receiptsAwaiting && !dataExists) || (receiptsAwaiting && receiptCount == 0))
  {
      
      header = "Genoptag kørsel";
      subheader = "Genoptag seneste uafsluttede kørsel";
      cardtext = "Da robotten har været lukket siden kørslen først blev startet, er alt persondata for kørslen tabt. Genoptag kørslen for at hente data.";
  
      if (allPagesAccepted())
          buttonHtml = `<button class="btn btn-lg btn-primary ml-2 btn-lg" id="button_startRun" type="button" onclick="startRun()" style="width: 300px">
                              Genoptag kørsel
                      </button>`;
      else
          buttonHtml = `<button class="btn btn-lg btn-primary ml-2 btn-lg" id="button_startRun" type="button" onclick="startRun()" style="width: 300px" disabled>
                              Genoptag kørsel
                      </button>`;
  
  
      
  }
  else if (receiptsAwaiting && !isFinalized)
  {
      header = "Afslut kørsel";
      header = "Afventer bekræftelse af manuel behandling";
      cardtext = "Du kan ikke afslutte kørslen før at du har godkendt manuel behandling af alle borgere med anbefalede handlinger, samt borgere som ikke er tilskudsberrettigede. Gå tilbage til start, og godkend de manglende borgere.";
      
      buttonHtml = `<button class="btn btn-lg btn-primary ml-2 btn-lg" id="button_finalizeRun" type="button" onclick="" style="width: 300px" disabled>
                          Afslut kørsel
                    </button>`;
  
  }
  else if (!receiptsAwaiting && !isFinalized)
  {
  
      header ="Afslut kørsel";
      subheader = "Afslut seneste kørsel";
      cardtext = "Er du sikker på at du vil afslutte seneste kørsel? Du vil ikke være i stand til at se borgeroplysninger eller anbefalede handlinger når kørslen er afsluttet, og en ny kørsel vil først kunne startes i morgen.";
  
      buttonHtml = `<button class="btn btn-lg btn-primary ml-2 btn-lg" id="button_finalizeRun" type="button" onclick="encryptedPostRequest('encryptedRequest', {'requestType': 'finalize'})" style="width: 300px">
                          Afslut kørsel
                    </button>`;
  
  }
  else if(allPagesAccepted())
  {
      buttonHtml = `<button class="btn btn-lg btn-primary ml-2 btn-lg" id="button_startRun" type="button" onclick="startRun()" style="width: 300px">
                      Start ny kørsel
                    </button>`;
  
  }
  else
      buttonHtml = `<button class="btn btn-lg btn-secondary ml-2 btn-lg" id="button_startRun" type="button" onclick="startRun()" style="width: 300px" disabled>
                  Start ny kørsel
                  </button>
                  <span class="text-danger" style="margin-left: 10px">OBS: Du kan først starte en ny kørsel, efter du har godkendt loginoplysninger, forretningsregler samt tilskudssatser.</span>`;
  
  
  
  var html =
      `<div class="card mb-2">
          <div class="card-header">`+header+`</div>
          <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">`+subheader+`</h6>
              <p class="card-text">`+cardtext+`</p>
          
              `+buttonHtml+`
  
              <span class="text-info hidden" id="statusText" style="margin-left: 10px">Status: Starter kørsel</span>
              
          </div>
      </div>`;
  
  msg.payload.pageContent = html;
  return msg;
}

module.exports = Node;