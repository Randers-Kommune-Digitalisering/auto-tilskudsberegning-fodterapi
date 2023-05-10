const Node = {
  "id": "a17c13f96787e2b4",
  "type": "template",
  "z": "41d1b8798efe7e15",
  "name": "HTML",
  "field": "payload",
  "fieldType": "msg",
  "format": "html",
  "syntax": "mustache",
  "template": "",
  "x": 970,
  "y": 160,
  "wires": [
    [
      "5c5841605bcac134"
    ]
  ],
  "_order": 102
}

Node.template = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">  
    <title>PupController</title>
    <style>{{{payload.style}}}</style>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Iconscout Link For Icons -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
  </head>
  <body onload="wsConnect();" onunload="ws.disconnect();">

    <div class="flex">

      <div class="containerLeft">

        <div class="menu">

          <div class="menupoints">
            <div>Documentation</div>
            <div>GitHub</div>
          </div>

          <div class="controls"></div>

        </div>

        <ul class="commandList"></ul>

      </div>
      <div class="containerRight">

        <div class="editor">
          <div class="line-numbers">
            <span></span>
          </div>
          <textarea class="textarea"></textarea>
        </div><!-- /editor -->

      </div><!-- /containerRight -->
    </div><!-- /flex -->



    <div class="commandLine">
      <span>></span><input class="cmd" />
    </div>


<script>{{{payload.script}}}</script>

  </body>
</html>
`

module.exports = Node;