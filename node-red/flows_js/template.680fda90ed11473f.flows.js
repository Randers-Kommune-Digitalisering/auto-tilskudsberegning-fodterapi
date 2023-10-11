const Node = {
  "id": "680fda90ed11473f",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "navBar HTML",
  "field": "webElements.navBar.html",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1000,
  "y": 280,
  "wires": [
    [
      "99b89b32d8cb3d57"
    ]
  ],
  "_order": 344
}

Node.template = `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary" >

        <a class="navbar-brand randers-logo" href="/start"></a>

        <ul class="navbar-nav navbar-expand-lg me-auto">

            {{#webElements.navBar.items}}
            <li class="nav-item {{active}}">
                <a id="nav_slut" class="nav-link" href="/{{url}}">{{title}}</a>
            </li>
            {{/webElements.navBar.items}}

        </ul>
</nav >
`

module.exports = Node;