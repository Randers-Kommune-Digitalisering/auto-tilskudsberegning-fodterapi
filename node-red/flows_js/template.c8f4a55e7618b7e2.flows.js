const Node = {
  "id": "c8f4a55e7618b7e2",
  "type": "template",
  "z": "41d1b8798efe7e15",
  "name": "CSS",
  "field": "payload.style",
  "fieldType": "msg",
  "format": "css",
  "syntax": "mustache",
  "template": "",
  "x": 790,
  "y": 160,
  "wires": [
    [
      "a17c13f96787e2b4"
    ]
  ],
  "_order": 159
}

Node.template = `
/* Import Google Font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
color:rgb(204, 204, 204)
}
*:focus
{
outline: none;
}
body{
width: 100%;
height: 100vh;
overflow: hidden;
display: flex;
align-content: stretch;
flex-direction: column;
}
.flex
{
width: 100%;
display: inline-flex;
flex-grow: 1;
}
.containerLeft
{
width: 55%;
background: #282b2f;
/*box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);*/
}
.containerRight
{
height: calc(100vh - 30px);
width: 45%;
overflow-y:auto;
background-color: #1d2025;
border-left: 4px solid rgb(29, 31, 29);
}

/* BOTTOM CMD */
.commandLine
{
line-height: 30px;
color:darkslategray;
width:100%;
background-color: #0b0c0c;
padding-left: 15px;
}
.cmd
{
width: calc(100% - 30px);
height: 100%;
border:0px;
background-color: #0b0c0c;
padding-left: 5px;
font-family: monospace;
font-size: 15px;
}

/* RIGHT CONTAINER - TEXT AREA
.containerRight textarea
{
background: linear-gradient(135deg, #141618, #191c22);
padding: 10px 20px;
width:100%;
height:100vh;
border: 0px;
} */
.editor {
display: inline-flex;
align-content: stretch;
line-height: 21px;
font-size: 12px;
background: linear-gradient(135deg, #1a1c20, #1d2025);
width:100%;
}

.textarea {
overflow-wrap:break-word;
white-space: pre-wrap;
line-height: 21px;
/*overflow-y: hidden;
background: #282a3a;
height: 100vh;
color: #FFF;*/
min-height: calc(100vh - 30px);
overflow:hidden;
outline: none;
resize: none;
font-family: monospace;
flex-grow: 1;
color:rgb(214, 211, 211);

background: linear-gradient(135deg, #141618, #191c22);
padding: 10px 15px;
border: 0px;
}
.line-numbers {
padding: 10px 0px;
margin-right: 10px;
width: 35px;
text-align: right;
flex-grow: 0;
}

.line-numbers span {
counter-increment: linenumber;
}

.line-numbers span::before {
content: counter(linenumber);
display: block;
color: darkslategray;
font-family: monospace;
}




/* LEFT CONTAINER - VISUAL EDITOR */
.menu
{
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
background: #282b2f;
background: linear-gradient(135deg, rgb(29, 31, 29) 0%, rgb(22, 24, 24) 100%); /* #232626 */
}
.menu .menupoints
{
font-size: 12px;
line-height: 35px;
padding-left: 12px;
text-transform: capitalize;
background: linear-gradient(135deg, rgb(21, 22, 21) 0%, rgb(16, 17, 17) 100%);
}
.menupoints div
{
display: inline-flex;
padding: 0px 10px;
}
.menupoints div:hover
{
background: #232626;
cursor: pointer;
}

.controls{
padding: 7px 10px;
padding-bottom: 14px;
text-align: left;
max-height: 61px;
overflow-y: auto;
}
.controls div
{
font-size: 12px;
text-transform: capitalize;
color:darkslategray;
padding-left: 3px;
}
.controls .button{
border: none;
opacity: 0.4;
outline: none;
color: #fff;
cursor: pointer;
font-size: 13px;
padding: 8px 18px;
margin-top:4px;
border-radius: 3px;
letter-spacing: 0.3px;
pointer-events: none;
transition: transform 0.25s ease;
background: #344b48; /* 343c4b */
text-transform: capitalize;
}
.controls .button:not(:first-child)
{
margin-left: 3px;
}
.button:hover
{
background: #4d6f6b;
}
.button.active{
opacity: 1;
pointer-events: auto;
}
.button:active{
transform: scale(0.93);
}




.commandList
{
padding: 10px 8px;
width:100%;
overflow-y: auto;
max-height:calc(100vh - 126px);
height: 100%;
overflow-x: hidden;
/*background-color: darkslategray;*/
}
.commandList span
{
padding-left: 7px;
}
.commandList.overflow{
overflow-y: auto;
}
*::-webkit-scrollbar{
width: 5px;
}
*::-webkit-scrollbar-track{
background: #3f4349;
border-radius: 25px;
}
*::-webkit-scrollbar-thumb{
background: #6d6d6d;
border-radius: 25px;
}


.commandList .task
{
list-style: none;
font-size: 15px;

margin-bottom: 5px;
border-radius: 5px;

box-shadow: 3px 3px 3px rgba(20, 20, 20, 0.05);
background: linear-gradient(135deg, #32363a, #2d3135);
}
    .task.current
    {
        background: linear-gradient(135deg, #3f2f4f, #4a3859)!important;
        /*background: linear-gradient(135deg, #99597d, #804b67)!important;*/
    }
    .task.error
    {
        background: linear-gradient(135deg, #6e4a48, #6b4a46)!important;
        /*background: linear-gradient(135deg, #9c5c5c, #854e4e)!important;*/
    }
.commandList .task > div
{
padding-left: 20px;
display: inline-flex;
align-items: flex-start;
flex-wrap: wrap;
gap: 15px;
width: 100%;
max-width: 100%!important;
padding-top: 8px;
padding-bottom: 8px;
line-height: 25px;
}
.task span
{
color: rgb(136, 136, 136);
font-family: monospace;
line-height: 25px;
font-size:12px;
}
.task p
{
    text-transform: capitalize;
}
.commandList .task > div > div
{
color: rgb(114, 153, 153);
font-family: monospace;
}
.commandList .task > div input
{
background-color: #535353;
border: 0px;
border-radius: 3px;
line-height: 25px;
padding: 0px 10px;
font-family: monospace;
width: auto;
max-width: calc(100vh - 150px);
}

.commandList .task > div > div.filler
{
flex-grow: 1;
flex-shrink: 1;
}
.commandList .settings
{
position: relative;
float: right;
padding-right:10px;
/*top: -16px;*/
flex-grow: 0!important;
}
.settings :where(i, li){
cursor: pointer;
}
.settings .bulletinMenu{
z-index: 10;
right: 12px;
padding: 5px 0;
background: #757575;
position: absolute;
border-radius: 4px;
transform: scale(0);
transform-origin: top right;
box-shadow: 0 0 6px rgba(0,0,0,0.15);
transition: transform 0.2s ease;
}
.commandList .task:last-child:not(:first-child) .bulletinMenu{
bottom: 20px;
transform-origin: bottom right;
}
.commandList .task:not(:last-child) .bulletinMenu{
top: 20px;
}
/*
.commandList .task:first-child .bulletinMenu{
bottom: -65px;
transform-origin: top right;
}*/
.bulletinMenu.show{
transform: scale(1);
}
.bulletinMenu li{
height: 25px;
font-size: 12px;
line-height: 25px;
margin-bottom: 2px;
padding: 0px 10px;
min-width: 85px;
cursor: pointer; list-style-type: none;
}
.bulletinMenu li:last-child{
margin-bottom: 0;
}
.settings li:hover{
background: rgb(128, 128, 128);
}
.settings li i{
padding-right: 8px;
}
`

module.exports = Node;