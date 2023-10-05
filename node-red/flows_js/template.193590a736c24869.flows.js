const Node = {
  "id": "193590a736c24869",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "set body HTML",
  "field": "payload.bodyHTML",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 2060,
  "y": 2760,
  "wires": [
    []
  ],
  "_order": 315
}

Node.template = `
{{{payload.pageElements.navbar}}}

<!--div class="progress-container collapsed">

    <div class="uppercase fs-10 fw-500 mb-1" style="width:100%;text-align: center;">Robotten arbejder ... 56%</div>

    <div class="progress bg-dark">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
    </div>


</div-->

  
<div class="container site-container mt-3">
    <!-- site -->

    <ol class="breadcrumb">
        <li class="breadcrumb-item active">{{{payload.pageTitle}}}</li>
    </ol>

    <div id="alertParent">
        <div class="alert alert-dismissible hidden" id="alertBox">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <h4 class="alert-heading" id="alertBox-heading">Warning!</h4>
            <p class="mb-0" id="alertBox-body">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
        </div>
    </div>


    <div id="pageContent">
        {{{payload.pageContent}}}
    </div>

    <!-- /site -->
</div>
`

module.exports = Node;