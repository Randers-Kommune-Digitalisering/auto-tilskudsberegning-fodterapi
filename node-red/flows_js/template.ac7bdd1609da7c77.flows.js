const Node = {
  "id": "ac7bdd1609da7c77",
  "type": "template",
  "z": "c28a486ea3e09387",
  "g": "0d6121cfccf91882",
  "name": "JS",
  "field": "js",
  "fieldType": "msg",
  "format": "javascript",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 990,
  "y": 100,
  "wires": [
    [
      "98d7ea7aa5c93ad4"
    ]
  ],
  "_order": 409
}

Node.template = `
//
/// INITIALIZE
//

var rules = {{{payload.rulesStr}}};

//
/// SET PAGE CONTENT FUNCTION
//

var activePage = "{{payload.webSettings.state.activePage}}";

function goToPage(page)
{
    var pageName = "";
    var paramName = "";
    var paramValue = "";
    // Works with 1 param only 

    if(page.includes("?"))
    {
        var split = page.split("?");
        pageName = split[0];

        split = split[1].split("=");
        paramName = split[0];
        paramValue = split[1];
    }

    var obj = {};

    if(pageName == "")
        obj = {"requestType": "getPageContent", "page": page};

    else
    {
        obj = { "requestType": "getPageContent", "page": pageName };
        obj[paramName] = paramValue;
    }

    postRequest(obj);
}

function setPageContent(pageObj, setHistory = true)
{
    setInnerHTML("fullPage", pageObj.html);
    document.title = "AutoWorkLet - " + pageObj.title;

    if(setHistory)
        window.history.pushState({ "page": pageObj }, "", "/" + pageObj.url);

    activePage = pageObj.url;

    //console.log("Setting page content using JS");

    if (loadPageFunc[pageObj.url] != null)
        loadPageFunc[pageObj.url]();

}

window.onpopstate = function (e)
{
    if (e.state)
        setPageContent(e.state.page, false);
};



//
/// NODE-RED INTEGRATION / COMMUNICATION
//

function toJSON(...vars)
{
    var obj = {};

    for (let i = 0; i < vars.length; i++)
        obj[vars[i].id] = vars[i].value;

    return obj;
}

function postRequest(object)
{
    //console.log("HTTP request: " + object);
    fetch('/worklet/http', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
        .then(response => response.json())
        .then(response => handlePostResponse(response));
        //.then(response => console.log(JSON.stringify(response)));
}


function handlePostResponse(responseObject)
{
    // Call function depending on request type

    if (handleResponseDynamically[responseObject.requestType] != null)
        handleResponseDynamically[responseObject.requestType](responseObject);
        
    return responseObject;
}

var handleResponseDynamically = [];

// Dynamic response handling

handleResponseDynamically['getPageContent'] = function(response)
{
    if(response.page != null)
        setPageContent(response.page);
}

handleResponseDynamically['acceptPage'] = function (response)
{
    if(activePage == "rules")
        rules = response.rules;

    reloadPage();
}

handleResponseDynamically['startRun'] = function (response)
{
    //console.log("RESPONSE FROM STARTRUN");
    goToPage("start");
}

handleResponseDynamically['archive'] = function (response)
{
    //goToPage(response.page + "?spec="+response.spec);
    reloadPage();
}

handleResponseDynamically['finalize'] = function (response)
{
    goToPage("finalized");
}


//
/// GENERIC FUNCTIONS
//

function setInnerHTML(objectId, content) {
    var container = document.getElementById(objectId);
    container.innerHTML = content;
}

function setStyle(objectId, styleVar, styleValue) {
    var object = document.getElementById(objectId);
    object.style[styleVar] = styleValue;
}

function toggleHide(objectId)
{
    var object = document.getElementById(objectId);
    object.classList.toggle("hidden");
}
function hide(objectId) {
    var object = document.getElementById(objectId);
    if(!object.classList.contains("hidden"))
        object.classList.add("hidden");
}
function reloadPage()
{
    goToPage(activePage);
}
function roundNumber(num)
{
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

//
// PAGE SPECIFIC
//
function withdrawPageAccept()
{
    var pageTitle = "";
    switch(activePage)
    {
        case "login": pageTitle = "loginoplysninger"; break;
        case "rules": pageTitle = "forretningsregler"; break;
        case "grants": pageTitle = "tilskudssatser"; break;
    }

    var elements = document.getElementsByClassName("form-floating");
    for(var i = 0; i<elements.length;i++)
        elements[i].classList.remove("was-validated");

    var buttonAccept = document.getElementById("button_acceptPage");
    buttonAccept.classList.add("btn-primary");
    buttonAccept.classList.remove("btn-success");
    buttonAccept.innerHTML = "Godkend " + pageTitle;

    document.getElementById("toAccept").value = "true";

    hide("button_acceptPage_goNext");

    document.getElementById("nav_" + activePage).classList.remove("nav-success");
}

function startRun()
{
    /* Visual */

    var startButton = document.getElementById("button_startRun");

    startButton.disabled = true;
    startButton.innerHTML = \`<i class="fa-lg fas fa-spinner fa-spin"></i>\`;

    if (document.getElementById("nav_run") !== null)
        document.getElementById("nav_run").innerHTML = \`Robotten kører<i class="fa-lg fas fa-spinner fa-spin" style="margin-left: 10px"></i>\`;

    /* Node-red */
    postRequest({"requestType": "startRun"});

}


// RULES

function appendRules(...objects)
{
    var list = [];

    for (let i = 0; i < objects.length; i++)
        if(objects[i] != null)
            list.push(objects[i]);

    return list;
}

function createRuleObj(ruleVar)
{
    let ruleOperator = document.getElementById("operator_" + ruleVar).value;
    let ruleValue = document.getElementById("value_" + ruleVar).value;
    let returnObj = {
        "id": ruleVar,
        "operator": ruleOperator,
        "value": ruleValue
    }
    //console.log("Return OBJ: " + JSON.stringify(returnObj));
    return returnObj;
}

function setInputBox(uid, truefalse = false)
{
    let operator = document.getElementById("operator_" + uid).value;
    var html = "";

    if (operator == "!null" || truefalse)
        html = \`<select class="form-select" id="value_\` + uid + \`" onchange="withdrawPageAccept('rules')">
                        <option value="true">Ja</option>
                        <option value="false">Nej</option>
                </select>
                <label for="value_\`+ uid + \`" style="padding-left: 27px">Værdi</label>\`;
    else
        html = \`<input type="text" class="form-control" id="value_\` + uid + \`" placeholder="0" style="color: black" onchange="withdrawPageAccept('rules')">
                <label for="value_\`+ uid + \`" style="padding-left: 27px">Værdi</label>\`;

    setInnerHTML("inputContainer_" + uid, html);
}

// Grants

function createGrantObj(grantId)
{

    let grantDkk = document.getElementById("value_" + grantId + "_maxdkk").value;
    let grantProcent = document.getElementById("value_" + grantId + "_procent").value;

    return {
        "id": grantId,
        "tilskud_maxdkk": grantDkk,
        "tilskud_procent": grantProcent
    }
}



//
/// LATE START / INITIALIZATION
//

var landingPage = "{{{payload.page}}}";


//
/// ON PAGE LOAD FUNCTIONS
//

var loadPageFunc = [];

loadPageFunc["rules"] = function ()
{
    //console.log("Running load func");
    // LOAD rules - update each rule
    for (let index = 0; index < rules.length; index++)
    {
        const element = rules[index];

        //console.log("Attempting to update value for '" + "operator_" + element.uid + "'");

        var operatorInput = document.getElementById("operator_" + element.uid);
        //var valueInput = document.getElementById("value_" + element.uid);

        if (element.operator == "!null")
        {
            setInputBox(element.uid, true);
            var valueInput = document.getElementById("value_" + element.uid);
            valueInput.value = element.value;
        }

        operatorInput.value = element.operator;
        //valueInput.value = element.value;
    }
}

if (loadPageFunc[landingPage] != null)
    loadPageFunc[landingPage]();



//
/// WEB SOCKET (node-red)
//

var ws;
var wsUri = "ws:";
var loc = window.location; //console.log(loc);

if (loc.protocol === "https:") { wsUri = "wss:"; }
// This needs to point to the web socket in the Node-RED flow
wsUri += "//" + loc.host + "/ws/worklet";

function wsConnect()
{
    //console.log("Connecting to ", wsUri);
    ws = new WebSocket(wsUri);
    //var line = "";    // either uncomment this for a building list of messages
    ws.onmessage = function (msg)
    {

        var data = msg.data;
        const obj = JSON.parse(data);
        //const obj = data;
        
        displayWsMessage(obj);
        //console.log("Received WS message: " + JSON.stringify(obj));
        
    }
    ws.onopen = function () {
        // update the status div with the connection status
        console.log("Connected to WS");
    }
    ws.onclose = function () {
        // update the status div with the connection status
        console.log("WS connection lost");
        // in case of lost connection tries to reconnect every 3 secs
        setTimeout(wsConnect, 3000);
    }
}
function PublishWsMessage(m)
{
    if (ws) { ws.send(m); }
}

wsConnect();


function displayWsMessage(ws)
{
    //console.log("Displaying ws object: " + ws);
    //console.log("Displaying ws object (stringify): " + JSON.stringify(ws));

    if(ws.type == "alert")
    {
        var obj = document.getElementById("alertBox");

        if (obj == null) {
            var html = \`
            <div class="alert alert-dismissible alert-warning" id="alertBox">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <h4 class="alert-heading" id="alertBox-heading">\` + ws.title + \`</h4>
                <p class="mb-0" id="alertBox-body">\` + ws.msg + \`</p>
            </div>\`;
            document.getElementById("alertParent").innerHTML = html;
            return;
        }

        obj.classList.add("alert-warning");
        obj.classList.remove("hidden");

        document.getElementById("alertBox-heading").innerHTML = ws.title;
        document.getElementById("alertBox-body").innerHTML = ws.message;
    }

    else if(ws.type == "update")
    {
        var obj = document.getElementById("statusText");

        if(obj != null)
        {
            obj.classList.remove("hidden");
            obj.innerHTML = "Status: " + ws.message;
        }

    }

}
`

module.exports = Node;