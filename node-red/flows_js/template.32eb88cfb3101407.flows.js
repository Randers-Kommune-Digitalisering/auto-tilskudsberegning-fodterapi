const Node = {
  "id": "32eb88cfb3101407",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "set full page HTML",
  "field": "payload.pageHTML",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 2050,
  "y": 700,
  "wires": [
    [
      "193590a736c24869"
    ]
  ],
  "_order": 255
}

Node.template = `
<!DOCTYPE html>
<html>
    <head>
        <title>AutoWorkLet - Randers Kommune</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <style>{{{css}}}</style>
    </head>
    <body>
<div id="fullPage" style="width: 100%;height:100%">
<!-- -->


{{{payload.pageElements.navbar}}}

<div class="progress-container collapsed">

    <div class="uppercase fs-10 fw-500 mb-1" style="width:100%;text-align: center;">Robotten arbejder ... 56%</div>

    <div class="progress bg-dark">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
    </div>


</div>

    
  
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





</div>
<!-- -->

    <script>{{{js}}}</script>
    </body>
</html>
`

module.exports = Node;