const Node = {
  "id": "023615f3ddd064ad",
  "type": "template",
  "z": "8ea344595d9a442a",
  "g": "669e09e244099963",
  "name": "Browserless script",
  "field": "payload",
  "fieldType": "msg",
  "format": "javascript",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 390,
  "y": 840,
  "wires": [
    [
      "234ef29b39321d1a"
    ]
  ],
  "_order": 629
}

Node.template = `
module.exports = async ({ page }) => {

  var timeoutMs = 7000;

  // Login
  await page.goto("https://workletnew.snapp.dk/auth/sign-in");

  await page.waitForSelector("{{{selectors.worklet.loginUser}}}", { waitUntil: 'domcontentloaded', timeout: timeoutMs });
  await page.type("{{{selectors.worklet.loginUser}}}", "{{{workletUser}}}");
  await page.type("{{{selectors.worklet.loginPass}}}", "{{{workletPass}}}");

  await page.click("{{{selectors.worklet.loginButton}}}");



  // Choose dates
  await page.waitForSelector("{{{selectors.worklet.datePickerFrom}}}", { waitUntil: 'domcontentloaded', timeout: timeoutMs });

  await page.click("{{{selectors.worklet.datePickerFrom}}}", { clickCount: 3 });
  //await page.evaluate(() => document.querySelector("{{{selectors.worklet.datePickerActive}}}").value = "{{{currentRun.startDate}}}");
  await page.type("{{{selectors.worklet.datePickerActive}}}", "{{{currentRun.startDate}}}");
  //await page.type("{{{selectors.worklet.datePickerFrom}}}", "{{{currentRun.startDate}}}");

  await page.click("{{{selectors.worklet.header}}}");
  await page.waitForSelector("{{{selectors.worklet.datePickerTo}}}", { waitUntil: 'domcontentloaded', timeout: timeoutMs });

  await page.click("{{{selectors.worklet.datePickerTo}}}", { clickCount: 3 });
  //await page.evaluate(() => document.querySelector("{{{selectors.worklet.datePickerActive}}}").value = "{{{currentRun.endDate}}}");
  await page.type("{{{selectors.worklet.datePickerActive}}}", "{{{currentRun.endDate}}}");
  //await page.type("{{{selectors.worklet.datePickerTo}}}", "{{{currentRun.endDate}}}");

  await page.click("{{{selectors.worklet.header}}}");

  await page.evaluate(() => { debugger; });

  // Download receipts
  await page.waitForSelector("button[class='btn btn-primary btn-block primary-color']", { waitUntil: 'domcontentloaded', timeout: timeoutMs });
  await page.click("button[class='btn btn-primary btn-block primary-color']");

};
`

module.exports = Node;