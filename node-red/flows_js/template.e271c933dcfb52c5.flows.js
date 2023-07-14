const Node = {
  "id": "e271c933dcfb52c5",
  "type": "template",
  "z": "41d1b8798efe7e15",
  "name": "Script",
  "field": "payload.script",
  "fieldType": "msg",
  "format": "javascript",
  "syntax": "plain",
  "template": "",
  "x": 630,
  "y": 160,
  "wires": [
    [
      "c8f4a55e7618b7e2"
    ]
  ],
  "_order": 190
}

Node.template = `
/////////////
/// #0 : Action definitions
////////////

function actionList() {
    return [
        {
            "action": "goto",
            "url": ""
        },
        {
            "action": "click",
            "path": "",
            "parameters":
            {
                "clickCount": 1
            }
        },
        {
            "action": "type",
            "input": "",
            "path": ""
        },
        {
            "action": "select",
            "path": "",
            "input": ""
        },
        {
            "action": "get",
            "name": "",
            "path": ""
        },
        {
            "action": "geturl",
            "name": ""
        },
        {
            "action": "wait",
            "ms": 1000
        },
        {
            "action": "authenticate",
            "username": "",
            "password": ""
        }
    ];
};


/////////////
/// #1 : Start ()
////////////

const commandList = document.querySelector(".commandList"),
    controls = document.querySelector(".controls"),

    cmdInput = document.querySelector(".cmd"),
    textarea = document.querySelector('.textarea'),
    lineNumbers = document.querySelector('.line-numbers');

const storageName = "pupControl_JSON_commandGen";

// Define + get commands from SQLite

let commands = [];

try {
    commands = JSON.parse(localStorage.getItem(storageName));
}
catch {
    console.log("Found command list, but corrupt:\\n" + localStorage.getItem(storageName));
}

ShowCommandList();
UpdateJSON();

// Create pseudo enum "actionKeys" -> usage to get full object: actionList()[actionKeys["launch"]]

let _actionKeys = [];
for (let i = 0; i < actionList().length; i++)
    _actionKeys[actionList()[i].action] = i;

const actionKeys = _actionKeys;

// Function to create IDs for query selection of buttons

function GetElementIdFromAction(actionObject) { return "buttonAdd_" + actionObject.action.replace(" ", ""); }  // Example ID: buttonAdd_launch

// Dynamically instantiate buttons for action objects

for (let i = 0; i < actionList().length; i++)
    controls.innerHTML += \`
        <button class="button active" id="\${GetElementIdFromAction(actionList()[i])}">\${actionList()[i].action}</button>
    \`;

// Dynamically create query selectors for action object buttons

let _buttonAdd = [];
for (let i = 0; i < actionList().length; i++)
    _buttonAdd[actionList()[i].action] = document.querySelector(".button#" + GetElementIdFromAction(actionList()[i]));

const buttonAdd = _buttonAdd;

// and add event listeners

for (let i = 0; i < actionList().length; i++)
    buttonAdd[actionList()[i].action].addEventListener("click", () => {
        AddCommand(actionList()[i]);
    });






/////////////
/// #2 : Data manipulation
////////////

///
// Add command

let variableCount = 0;
function AddCommand(actionObject) {

    //console.log("Received action object: \\n" + JSON.stringify(actionObject));

    //console.log("Full action list: " + JSON.stringify(actionList));

    // Check if command is of valid type
    if (!IsValidType(actionObject.action)) {
        console.log("Failed to add command of unknown type \`" + actionObject.action + "\`");
        return;
    }

    // Check if a command array already exists, otherwise define it
    commands = !commands ? [] : commands;

    // Create initial command object
    let clone = {}; // the new empty object

    // let's copy all action properties into it
    for (let key in actionObject) {
        clone[key] = actionObject[key];
    }
    const command = clone;

    // Push new command to list, and store JSON
    commands.push(command);

    StoreAndUpdateJSON();
}

// Function to check if type is valid
function IsValidType(type) {
    return !(actionKeys[type] == null);
}

// HTTP encode + add https if missing
function ReturnUrl(url) {
    var newUrl = encodeURIComponent(url);
    if (!(url.includes("https://") || url.includes("http://")))
        newUrl = "https://" + newUrl;
    return newUrl;
}

// Selector generator from string
function GenerateSelector(parameters) {
    var multipleParameters = parameters.trim().split(' ');
    var path = multipleParameters[0];
    if (multipleParameters.length == 1)
        return path;

    for (let i = 1; i < multipleParameters.length; i++) {
        let _c = multipleParameters[i];
        var insideBrackets = _c.includes('[');

        let attrSplit = _c.split('=');
        if (!insideBrackets && attrSplit.length == 2) {
            let attr = (_c.split('='))[0];
            let value = (_c.split('='))[1];
            path += '[' + attr + '="' + value + '"]';
        }
        else
            path += " " + _c;
    }
    return path;
}

// Receive update variable command from event
function UpdateCommandVar(inputField) {

    // Get ID of input field to determine which value to update
    let id = inputField.id;
    let s = id.split('_');

    // Example ID: obj_attr
    let _id = s[1];
    var _attr = s[2];
    if (s.length > 3)
        _attr += "." + s[3];

    UpdateCommandValue(_attr, inputField.value, _id);
}

// Update and store the change
function UpdateCommandValue(attr, value, commandId) {

    if (attr == "path")
        value = GenerateSelector(value);

    // Parse if float or int (ignore if "path" or "input")
    if (attr != "path" && attr != "") //  <- HARD CODE :(
    {
        if (value.includes(".") || value.includes(",")) {
            // Is float?
            let _value = value.replace(",", ".");
            const parsed = parseFloat(_value);
            if (!isNaN(parsed))
                value = parsed;
        }
        else {
            // Is int?
            const parsed = parseInt(value);
            if (!isNaN(parsed))
                value = parsed;
        }

        // Parse if boolean or null
        if (value === "true") value = true;
        if (value === "false") value = false;
        if (value === "null") value = null;
    }


    if (attr.includes('.')) {
        let s = attr.split(".");

        console.log("Updating attr " + attr + " from value " + ((commands[commandId])[s[0]])[s[1]] + " to value " + value + " (id: " + commandId + ")");

        //if (((commands[commandId])[s[0]])[s[1]] != undefined)
        ((commands[commandId])[s[0]])[s[1]] = value;


    }
    else {
        console.log("Updating attr " + attr + " from value " + (commands[commandId])[attr] + " to value " + value + " (id: " + commandId + ")");

        //if ((commands[commandId])[attr] != undefined)
        (commands[commandId])[attr] = value;

    }

    StoreAndUpdateJSON();
}

// Additional functions

function ClearAllCommands() {
    commands.splice(0, commands.length);
    StoreAndUpdateJSON();
}

function DeleteCommand(deleteId) {
    commands.splice(deleteId, 1);
    StoreAndUpdateJSON();
}

function CopyCommand(copyId) {
    let command = commands[copyId];
    commands.push(command);
    StoreAndUpdateJSON();
}

///
// STORE DATA / UPDATE JSON

function StoreAndUpdateJSON(_text = null) {

    // Function is used with _text parameter when called from textarea event listener
    let text = UpdateJSON(_text);

    if (text != null)
        localStorage.setItem(storageName, text);

    ShowCommandList();
}

function UpdateJSON(_text = null) {

    var text = null;

    if (_text == null) {
        text = JSON.stringify(commands);
        SetTextareaText(text);
    }

    else {

        var _parsed = null;
        try { _parsed = JSON.parse(_text) }
        catch { }
        //console.log("Updating JSON from textarea!");
        //console.log(_parsed);
        if (_parsed != null) {
            commands = _parsed;
            text = JSON.stringify(commands);
        }

    }

    SetTextareLineNumbers();
    return text;
}









/////////////
/// #3 : Visual manipulation
////////////

function ShowCommandList() {
    let liTag = "";

    // Check if command list exists and is populated
    if (commands) {
        commands.forEach((command, id) => {
            liTag += PrintCommand(command, id);
        });
    }

    // Base text - if no commands exists
    commandList.innerHTML = liTag || \`<span>Start by adding a <b>Launch</b> command</span>\`;

    // Add event listeners to all input fields in tasks
    var inputFields = document.querySelectorAll('.task input');
    for (var i = 0; i < inputFields.length; i++) {

        // Update the command that has been changed on focusout, and resize input field to match content
        inputFields[i].addEventListener('focusout', function (event) {
            UpdateCommandVar(event.target);
            ResizeInputToFit(event.target.id);
        }, false);

        inputFields[i].addEventListener('keyup', function (event) {
            // Also resize on key-up
            ResizeInputToFit(event.target.id);
        }, false);

        // Also resize immediately to match loaded content
        ResizeInputToFit(inputFields[i].id);
    }
}

// Show bulletin menu for each action in list (with copy / delete options)
function ShowBulletinMenu(selectedTask) {
    let menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add("show");
    document.addEventListener("click", e => {
        if (e.target.tagName != "I" || e.target != selectedTask)
            menuDiv.classList.remove("show");
    });
}

///
// PRINT COMMAND
///
function PrintCommand(command, id) {

    var commandName = command.action == "goto" ? "go to" : command.action;

    var returnStr = "";
    returnStr += \`
                <li class="task" id="task_\${id}">
                <div>
                    <div>
                        <label for="\${id}">
                            <p>\${commandName}</p>
                        </label>
                    </div>\`;

    // Add input fields for each object variable
    returnStr += AddInputFields(command, id);

    returnStr += \`
                    <div>
                    </div>
                    <div class="filler"></div>
                    <div class="settings">
                        <i onclick="ShowBulletinMenu(this)" class="uil uil-ellipsis-h"></i>
                        <ul class="bulletinMenu">
                            <li onclick='CopyCommand(\${id})'><i class="uil uil-trash"></i>Copy</li>
                            <li onclick='DeleteCommand(\${id})'><i class="uil uil-trash"></i>Delete</li>
                        </ul>
                    </div>
                </div>
            </li>\`;

    return returnStr;
}

// Add input fields for each command variable
function AddInputFields(command, id, previousKey = null) {
    var returnStr = "";
    for (const key in command) {
        var keystr = key;
        keystr = key.toLocaleLowerCase();

        if (command[key] !== null && typeof command[key] === 'object') {
            returnStr += "<span>" + key + " {</span>";
            returnStr += AddInputFields(command[key], id, key);
            returnStr += "<span>}</span>";
        }

        else if (keystr != "action") {
            let inputID = "commandInput_" + id + "_" + (previousKey != null ? previousKey + "_" : "") + key;
            //inputIDArray.push(inputID);
            returnStr += \`
                    <div>
                    \${keystr}
                    <input id="\${inputID}" value='\${command[key]}'/>
                    </div>
                        \`;
        }

    }
    return returnStr;
}


function ResizeInputToFit(id) {
    let _inputField = document.querySelector(("#" + id));
    let width = (40 + (_inputField.value.length * 7.35)) + "px";
    document.querySelector(("#" + id)).setAttribute('style', 'width:' + width);
}

var lastChar = '';
var isNewline = false;
var isInsideQuotations = false;
function SetTextareaText(json) {
    var text = "";
    let count = json.length;
    var level = 0;

    for (let i = 0; i < count; i++) {
        let char = json[i];

        switch (char) {
            case '{': case '[':
                if (!isInsideQuotations && i != 0 && (json[i - 1] == ',' || json[i - 1] == ':')) text += "\\n";
                if (!isInsideQuotations)
                    for (let l = 0; l < level; l++)
                        text += "\\t";
                text += char;
                if (!isInsideQuotations) {
                    text += "\\n";
                    level++;
                    isNewline = true;
                }
                break;

            case '}': case ']':
                if (!isInsideQuotations) {
                    text += "\\n";
                    level--;
                    for (let l = 0; l < level; l++)
                        text += "\\t";
                    isNewline = true;
                }
                text += char;
                break;

            case ',':
                if (!isInsideQuotations)
                    isNewline = true;
                text += char;
                break;

            case ':':
                text += char;
                if (lastChar == "\\"")
                    text += " ";
                break;

            case '"':
                isInsideQuotations = !isInsideQuotations;

            default:
                if (i != 0 && json[i - 1] == ',') { text += "\\n"; isNewline = true }
                if (isNewline)
                    for (let l = 0; l < level; l++)
                        text += "\\t";
                text += char;
                isNewline = false;
                break;
        }

        lastChar = char;
    }

    textarea.value = text;
}

function SetTextareLineNumbers() {
    /*
    const lineHeight = 21;
    var taHeight = textarea.scrollHeight; // Get the scroll height of the textarea
    const numberOfLines = Math.floor(taHeight/lineHeight);
    */
    const numberOfLines = textarea.value.split('\\n').length;
    lineNumbers.innerHTML = Array(numberOfLines)
        .fill('<span></span>')
        .join('');
}











/////////////
/// #4 : Communication (HTTP Request + Websockets)
////////////

///
// HTTP post method (for testing flows using "nr"-command)
async function SendToNodeRed() {
    if (commandList.length == 0)
        return;

    document.getElementById('task_0').classList.add("current");

    fetch('/puprun', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: textarea.value

    }).then(response => {
        if (response.ok) {
            response.json().then(json => {
                console.log(json);
            });
        }
    });
}

///
// WEB SOCKET (node-red)
var ws;
var wsUri = "ws:";
var loc = window.location; //console.log(loc);

if (loc.protocol === "https:") { wsUri = "wss:"; }
// This needs to point to the web socket in the Node-RED flow
wsUri += "//" + loc.host + loc.pathname.replace("pup", "ws/pup");

function wsConnect() {
    console.log("Connecting to ", wsUri);
    ws = new WebSocket(wsUri);
    //var line = "";    // either uncomment this for a building list of messages
    ws.onmessage = function (msg) {
        var line = "";  // or uncomment this to overwrite the existing message

        // parse the incoming message as a JSON object
        var data = msg.data;
        const obj = JSON.parse(data);

        console.log("Received WS message ID: " + obj.pupid);

        // Remove bg from current command box (and set error if error was detected)
        document.getElementById('task_' + obj.pupid).classList.remove("current")
        if (!obj.succesful)
            document.getElementById('task_' + obj.pupid).classList.add("error")

        // Update next command box bg
        let nextID = obj.pupid + 1;
        if (commands.length > nextID)
            document.getElementById('task_' + nextID).classList.add("current");

        //ws.send(JSON.stringify({data:data}));
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
function PublishWsMessage(m) {
    if (ws) { ws.send(m); }
}









/////////////
/// #5 : Command line interface
////////////

function RunCommandLineAction(key) {
    if (key != "Enter")
        return;

    var input = cmdInput.value;
    input = input.toLowerCase();

    const inputCommand = (input.split(' '))[0];

    var clearInput = true;

    switch (inputCommand) {
        case "clear":
            ClearAllCommands();
            break;

        case "node-red": case "nr":
            SendToNodeRed();
            break;

        default:
            console.log("Received unrecognized console command \`" + input + "\`");
            clearInput = false;
            break;
    }

    if (clearInput)
        cmdInput.value = "";
}

/*
function AddCommandLineCommand(ic, i) {
    const parameters = i.replace(ic, '').trim();
    AddCommand(ic, parameters);

    console.log("Received command \`" + ic + "\` with parameters \`" + parameters + "\`");
}

*/







/////////////
/// #6 : Event listeners
////////////

textarea.addEventListener('keyup', event => {
    SetTextareLineNumbers();
    StoreAndUpdateJSON(textarea.value);
});

textarea.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
        const start = textarea.selectionStart;
        //const end = textarea.selectionEnd;

        textarea.value = textarea.value.substring(0, start) + '\\t' + textarea.value.substring(start, textarea.value.length);

        textarea.selectionEnd = start + 1;

        event.preventDefault();
    }
});

cmdInput.addEventListener('keyup', event => {
    RunCommandLineAction(event.key);
});

/*
window.onresize = SetTextareLineNumbers;
*/
`

module.exports = Node;