const Node = {
  "id": "680fda90ed11473f",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "navBar template",
  "field": "webElements.navBar.html",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1000,
  "y": 460,
  "wires": [
    [
      "99b89b32d8cb3d57"
    ]
  ],
  "_order": 363
}

Node.template = `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
    <div class="container-fluid">

        <a class="navbar-brand randers-logo" onclick="goToPage('start')"></a>
        <a class="navbar-brand randers-titel" onclick="goToPage('start')"></a>

        <ul class="navbar-nav me-auto">

            {{#webElements.navBar.items}}
            <li class="nav-item {{active}}">
                <a id="nav_slut" class="nav-link" href="/{{url}}">{{title}}</a>
            </li>
            {{/webElements.navBar.items}}

        </ul>
    </div>
</nav >
`

module.exports = Node;