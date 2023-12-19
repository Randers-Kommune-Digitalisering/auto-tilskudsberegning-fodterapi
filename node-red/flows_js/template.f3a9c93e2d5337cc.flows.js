const Node = {
  "id": "f3a9c93e2d5337cc",
  "type": "template",
  "z": "5bb3204aef17c104",
  "g": "272cd367299d7d94",
  "name": "JS",
  "field": "js",
  "fieldType": "msg",
  "format": "javascript",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 730,
  "y": 100,
  "wires": [
    [
      "20b9f77f862dc5ee"
    ]
  ]
}

Node.template = `
var landingPage = "{{{url}}}";
var activePage = landingPage;
var rules = {};

var isProgressing;
var currentProgressionGoal = 0;

//
// HTTP Request
//

// Function to send encrypted data to backend
// This function will automatically retrieve missing public key before sending data

async function encryptedPostRequest(request, data)
{
    // If there is no public key, retrieve it
    await
        getPublicKeyAsync()
            .catch(error => console.log("Error importing public key: " + error))

            // Encrypt data
            .then(publicKey => encryptDataAsync(publicKey, data))
            .catch(error => console.log("Error encrypting data: " + error))

            // Send encrypted data to backend
            .then(encryptedData => postRequestAsync(request, encryptedData, false))
            .catch(error => console.log("HTTP post error: " + error))

            // Handle HTTP response
            .then(response => handlePostResponse(response));
}

// Post request async - not encrypted, for requests containing data use encryptedPostRequest instead

async function postRequestAsync(request, data = {}, handleResponse = true)
{
    const response = await fetch("/worklet/http", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "requestType": request,
            "data": data
        })
    });

    const responseObj = (handleResponse) ?
        await response.json().then(response => handlePostResponse(response))
    :
        await response.json();

    return responseObj;
}

//
// Crypto
//

var _publicKey = null;

// Import

async function getPublicKeyAsync(forceImport = false)
{
    const importedKey =
        // Request public key if missing
        (_publicKey == null || _publicKey == undefined || forceImport) ?

            await
                // Get public key (HTTP request)
                postRequestAsync("getPublicKey")
                    .catch(error => console.log("HTTP getPublicKey request error: " + error))

                    // Get the PEM string from the response variable in HTTP response object
                    .then(response => response.data.pem)

                    // Import key from PEM string
                    .then(pemKey => importKeyAsync(pemKey))
                    .catch(error => console.log("Import key error: " + error))

                    // Set and return public key as cryptoKey object
                    .then(keyObject => {
                        _publicKey = keyObject;
                        return keyObject;
                    })

            // If key already exists, return it instead
            : _publicKey;

    return importedKey;

}

// Function for importing key and converting to cryptoKey object - Do not call this function directly, use importPublicKeyAsync();

async function importKeyAsync(pemKey)
{
    // Fetch the ArrayBuffer of the key
    const keyString = pemKey
        .replace("-----BEGIN PUBLIC KEY-----", "")
        .replace("-----END PUBLIC KEY-----", "")
        .replace(/\\n/g, "");
    const keyBuffer = Uint8Array.from(atob(keyString), c => c.charCodeAt(0)).buffer;

    // Import the key using the Web Crypto API
    const crypto = window.crypto.subtle;
    const importedKey = await crypto.importKey(
        "spki",
        keyBuffer,
        {
            name: "RSA-OAEP",
            hash: "SHA-256"
        },
        true,
        ["encrypt"]
    );

    return importedKey;
}

// Encrypt

async function encryptDataAsync(publicKey, data)
{
    if (publicKey == null || publicKey == undefined) {
        console.log("Attempted to encrypt data but public key was null or undefined. Retrieving new public key.");
        await getPublicKeyAsync();
    }

    // Convert the data to a Uint8Array
    const dataString = JSON.stringify(data);
    
    const dataBuffer = new TextEncoder().encode(dataString);

    // Encrypt the data using the public key
    const crypto = window.crypto.subtle;
    const encryptedData = await crypto.encrypt(
        {
            name: "RSA-OAEP"
        },
        publicKey,
        dataBuffer
    );

    var base64String;
    try {
    // Return the encrypted data as a base64-encoded string

        base64String = btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
    }
    catch(error)
    {
        console.log("base 64 error:" + error);
    }

    return base64String;
}


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

// Handle HTTP responses (all)

function handlePostResponse(responseObject)
{    
    console.log("HTTP RESPONSE: " + JSON.stringify(responseObject));
    
    // Check if OK
    if (responseObject.statusCode != 200)
        console.log("Request error code " + responseObject.statusCode);

    // Check if unauthorized -> reaquire public key
    if(responseObject.statusCode == 401)
    {
        console.log("Public key is unauthorized.");
        getPublicKeyAsync(true).then(key => reloadPage());
    }

    // Check for loadPage property and load
    if (responseObject.loadPage != null)
        loadPage(responseObject.loadPage);

    // Call function depending on request type
    if (handleResponseDynamically[responseObject.requestType] != null)
        handleResponseDynamically[responseObject.requestType](responseObject);
        
    return responseObject;
}



//
/// Dynamic response handling
//

var handleResponseDynamically = [];

handleResponseDynamically['acceptPage'] = function (response)
{
    if(response.redirect != null)
        loadPage(response.redirect);
    else if(response.page != null)
        loadPage(response.page);
    else
        reloadPage();
}

handleResponseDynamically['startRun'] = function (response)
{
    loadPage("start");
}

handleResponseDynamically['getMetrics'] = function (response)
{
    console.log("getMetrics");
    reloadPage();
}

handleResponseDynamically['archive'] = function (response)
{
    if(response.redirect != null)
        loadPage(response.redirect);
    else
        reloadPage();
}

handleResponseDynamically['completeRun'] = function (response)
{
    reloadPage();
}



//
/// GENERIC FUNCTIONS
//

function loadPage(pageurl)
{
    window.location.href = "/" + pageurl;
}

function lockButton(objectId, unlock = false)
{

    const button = document.getElementById(objectId);
    //startButton.innerHTML = \`<span class="pr-3 pl-1">KØRER</span><i class="fa-lg fas fa-spinner fa-spin"></i>\`;

    if(unlock)
    {
        button.classList.remove("disabled");
        button.disabled = false;

        if (button.id == "requestMetrics")
            button.classList.remove("text-muted");
    }
    else
    {
        button.classList.add("disabled");
        button.disabled = true;

        if (button.id == "requestMetrics")
            button.classList.add("text-muted");
    }
}

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

function hide(objectId)
{
    var object = document.getElementById(objectId);
    if(!object.classList.contains("hidden"))
        object.classList.add("hidden");
}

function reloadPage()
{
    location.reload();
    //loadPage(activePage);
}

function roundNumber(num)
{
    return Math.round((num + Number.EPSILON) * 100) / 100;
}



//
// START RUN
//

function startRun()
{
    /* Visual */
    const startButton = document.getElementById("button_startRun");

    startButton.innerHTML = \`<span class="pr-3 pl-1">KØRER</span><i class="fa-lg fas fa-spinner fa-spin"></i>\`;
    startButton.classList.add("disabled");

    /* Node-red */
    postRequestAsync("startRun");

}



//
/// RULES
//

function loadRules()
{
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
    let boxDisabled = document.getElementById("toAccept").value !== "true";
    var html = "";

    if (operator == "!null" || truefalse)
        html = \`<select class="form-select" id="value_\` + uid + \`"\` + (boxDisabled ? \` disabled\` : \`\`) +\`>
                        <option value="true">Ja</option>
                        <option value="false">Nej</option>
                </select>
                <label for="value_\`+ uid + \`" style="padding-left: 27px">Værdi</label>\`;
    else
        html = \`<input type="text" class="form-control" id="value_\` + uid + \`" placeholder="0" style="color: black"\`+(boxDisabled?\` disabled\`:\`\`)+\`>
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
/// ON PAGE LOAD FUNCTIONS
//

var loadPageFunc = [];


loadPageFunc["rules"] = function ()
{    
    if (!Array.isArray(rules) && Object.keys(rules).length === 0)
        postRequestAsync("getRules").then(response =>
        {
            rules = response.data.rules;
            loadRules();
        });
    else
        loadRules();

}

loadPageFunc["start"] = function ()
{
    var obj = document.getElementById("run-history-text");

    postRequestAsync("getRunHistory", {}, false)
        .then(response => {
           console.log("Response: " + JSON.stringify(response));
            obj.innerHTML = response.data;
        });
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
    if (ws.type == "alert" || ws.type == "message")
    {
        var alertType = ws.type == "alert" ? "warning" : "info";
        var obj = document.getElementById("alertBox");

        if (obj == null) {
            var html = \`
            <div class="alert alert-dismissible alert-\`+ alertType +\`" id="alertBox">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <h4 class="alert-heading" id="alertBox-heading">\` + ws.title + \`</h4>
                <p class="mb-0" id="alertBox-body">\` + ws.msg + \`</p>
            </div>\`;
            document.getElementById("alertParent").innerHTML = html;
            return;
        }

        obj.classList.remove("alert-warning");
        obj.classList.remove("alert-info");
        
        obj.classList.add("alert-" + alertType);
        obj.classList.remove("hidden");

        document.getElementById("alertBox-heading").innerHTML = ws.title;
        document.getElementById("alertBox-body").innerHTML = ws.message;
    }

    /* Update progression bar during run */
    else if(ws.type == "update")
    {
        if(activePage == "start")
        {
            var pText = document.getElementById("progressionText");
            pText.innerHTML = ws.message;
            SetProgress(ws.value);
        } 

    }

    else if(ws.type == "reload")
    {
        reloadPage();
    }
}

function SetProgress(value)
{
    var pPercentage = document.getElementById("progressionPercentage");
    pPercentage.innerHTML = Math.round(value) + "%";

    var pBar = document.getElementById("progressionBar");
    pBar.setAttribute("aria-valuenow", value);
    pBar.style.width = value + "%";
}

`

module.exports = Node;