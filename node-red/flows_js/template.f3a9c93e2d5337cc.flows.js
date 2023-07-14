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
  "x": 990,
  "y": 100,
  "wires": [
    [
      "20b9f77f862dc5ee"
    ]
  ],
  "_order": 636
}

Node.template = `
var landingPage = "{{{payload.data.page}}}";
var activePage = landingPage;
var rules = {};

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
/// SET PAGE CONTENT FUNCTION
//

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
        obj = {"page": page};

    else
    {
        obj = { "page": pageName };
        obj[paramName] = paramValue;
    }

    postRequestAsync("getPageContent", obj, true);
}

function setPageContent(pageObj, setHistory = true)
{
    setInnerHTML("fullPage", pageObj.html);
    document.title = "AutoWorkLet - " + pageObj.title;

    if(setHistory)
        window.history.pushState({ "page": pageObj }, "", "/" + pageObj.url);

    activePage = pageObj.url;

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

// Handle HTTP responses (all)

function handlePostResponse(responseObject)
{
    if(responseObject.requestType != "getPageContent")
        console.log("Response: \\n"+JSON.stringify(responseObject));
    
    // Check if OK
    if (responseObject.statusCode != 200)
        console.log("GET request error code " + responseObject.statusCode);

    // Check if unauthorized -> reaquire public key
    if(responseObject.statusCode == 401)
    {
        console.log("Public key is unauthorized.");
        getPublicKeyAsync(true).then(key => reloadPage());
    }

    // Call function depending on request type
    if (handleResponseDynamically[responseObject.requestType] != null)
        handleResponseDynamically[responseObject.requestType](responseObject);
        
    return responseObject;
}



//
/// Dynamic response handling
//

var handleResponseDynamically = [];

handleResponseDynamically['getPageContent'] = function(response)
{
    if(response.data != null)
        setPageContent(response.data);
}

handleResponseDynamically['acceptPage'] = function (response)
{
    reloadPage();
}

handleResponseDynamically['startRun'] = function (response)
{
    goToPage("start");
}

handleResponseDynamically['archive'] = function (response)
{
    reloadPage();
}

handleResponseDynamically['finalize'] = function (response)
{
    goToPage("finalized");
}



//
/// GENERIC FUNCTIONS
//

function lockButton(objectId)
{
    var button = document.getElementById(objectId);
    button.disabled = true;
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
    console.log("Reload page works");
    goToPage(activePage);
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

    var startButton = document.getElementById("button_startRun");

    startButton.disabled = true;
    startButton.innerHTML = \`<i class="fa-lg fas fa-spinner fa-spin"></i>\`;

    if (document.getElementById("nav_run") !== null)
        document.getElementById("nav_run").innerHTML = \`Robotten kører<i class="fa-lg fas fa-spinner fa-spin" style="margin-left: 10px"></i>\`;

    /* Node-red */
    postRequestAsync("startRun", {}, true);

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

loadPageFunc["run-history"] = function ()
{
    const tds = document.getElementsByClassName("isFinalized");
    console.log("Found " + tds.length);
    for (let index = 0; index < tds.length; index++) {
        const element = tds[index];
        element.innerHTML = element.innerHTML == "true" ? "Ja" : "Nej";
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