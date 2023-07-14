const Node = {
  "id": "20b9f77f862dc5ee",
  "type": "template",
  "z": "5bb3204aef17c104",
  "g": "272cd367299d7d94",
  "name": "CSS",
  "field": "css",
  "fieldType": "msg",
  "format": "css",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1130,
  "y": 100,
  "wires": [
    [
      "67aaa3b96a0a8b4d"
    ]
  ],
  "_order": 704
}

Node.template = `
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"); /* Bootstrap */
@import url("https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/sandstone/bootstrap.min.css"); /* Bootswatch template */
@font-face {
  font-family: 'password';
  font-style: normal;
  font-weight: 400;
  src: url(https://jsbin-user-assets.s3.amazonaws.com/rafaelcastrocouto/password.ttf);
}

a:hover
{
    cursor: pointer;
}

/* Changes to Boostrap CSS */
.bg-primary {
    background-color: #325d88!important;
}
.border-light
{
    border-color: lightgray!important;
}
.tab-content
{
    border: 1px solid lightgray;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}
.nav-link 
{
    padding-left: 20px;
    padding-right: 20px;
}
.row
{
    display: flex;
    justify-content: stretch;
}
    .row > *
    {
        flex-grow: 1;
    }
.d-flex.justify-stretch
{
    justify-content: stretch;
}
.d-flex.justify-stretch > *{
    flex-grow: 1;
}
.page-item.archived .page-link {
    background-color: #E9F3DB!important;
}
.page-item.archived.active .page-link {
    background-color: #D8E1CB!important;
}


body
{
    background-color: whitesmoke;
}



/* Randers design */ 
.randers-logo {
    background-image: url('https://www.randers.dk/static/logo.svg');
    background-position: 5px 5px;
    background-size: 85%;
    background-repeat: no-repeat;
    width: 200px;
    height: 50px;
}


/* Custom style classes */
.nav-success 
{
    color: #71b355!important;
}
.nav-success:hover
{
    color: #a6d151!important;
}
.nav-success.active
{
    color: #a6d151!important;
}
.uppercase
{
    text-transform: uppercase;
}
.fs-10
{
    font-size: 10px;
}
.fs-11
{
    font-size: 11px;
}
.fs-12
{
    font-size: 12px;
}
.fs-13
{
    font-size: 13px;
}
.fs-lg
{
    font-size: 24px;
}
.fw-500
{
    font-weight: 500;
}
.border-none, .border-none *
{
    border: 0px!important;
}
.hidden
{
    display: none;
}
.no-border-bottom
{
    border-bottom: 0px!important;
}
.no-border-bottom *
{
    border-bottom: 0px!important;
}

/* Custom elements */
.progress-container
{
    background-color: lightgray;
    padding: 15px 25px;
}
.progress-container.collapsed
{
    max-height: 0px;
    overflow: hidden;
    padding: 0px;
}
/*
.site-container
{
}
*/
.card-container
{
    display: flex;
    justify-content: stretch;
    gap: 10px;
}
    .card-container .card
    {
        flex: 1;
    }
.receipt-inner
{
    display: flex;
    gap: 10px;
    min-height: 40vh;
}
    .receipt-inner > *
    {
        flex-grow: 1;
    }
    .receipt-inner > .citizen-info
    {
        max-width: 25rem;
    }
.pagination-container
{
    display: flex;
    justify-content: center;
    gap: 10px;
}
    .pagination-container > button
    {
        height: 38px;
    }
.table-header
{
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 500;
}
.card.header-left
{
    margin-left: 20px;display:flex;flex-direction:row;
}
.card-header.header-left
{
    border-top-right-radius: 0px!important;
    border-bottom: 0px;
}
`

module.exports = Node;