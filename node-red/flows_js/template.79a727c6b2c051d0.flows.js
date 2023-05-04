const Node = {
  "id": "79a727c6b2c051d0",
  "type": "template",
  "z": "a1b347492c77827f",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 780,
  "y": 600,
  "wires": [
    [
      "205f7d19d746c611"
    ]
  ],
  "_order": 499
}

Node.template = `
module.exports = async ({ page }) => {

  var timeoutMs = 7000;


  await page.goto("https://workletnew.snapp.dk/auth/sign-in");


  await page.waitForSelector("input[name='username']", { waitUntil: 'domcontentloaded', timeout: timeoutMs });

  
  /*if (ele.clear == true || ele.clearInput == true || ele.clear == "true" || ele.clearInput == "true")*/
  //await page.click("input[name='username']", { clickCount: 3 });
  await page.type("input[name='username']", "{{{payload.workletUser}}}");


  /*if (ele.clear == true || ele.clearInput == true || ele.clear == "true" || ele.clearInput == "true")*/
  ///await page.click("input[name='password']", { clickCount: 3 });
  await page.type("input[name='password']", "{{{payload.workletPass}}}");


  await page.click("button");



  await page.waitForSelector("button[class='btn btn-primary btn-block primary-color']", { waitUntil: 'domcontentloaded', timeout: timeoutMs });
  await page.click("button[class='btn btn-primary btn-block primary-color']");

};
`

module.exports = Node;