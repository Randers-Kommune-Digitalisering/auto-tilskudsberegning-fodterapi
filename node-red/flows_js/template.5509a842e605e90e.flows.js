const Node = {
  "id": "5509a842e605e90e",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "Browserless script",
  "field": "payload",
  "fieldType": "msg",
  "format": "javascript",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 230,
  "y": 920,
  "wires": [
    [
      "9977c0c7f7b76ce9"
    ]
  ],
  "_order": 435
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
  //await page.evaluate(() => document.querySelector("{{{selectors.worklet.datePickerActive}}}").value = "{{{flow.currentRun.startDate}}}");
  await page.type("{{{selectors.worklet.datePickerActive}}}", "{{{flow.currentRun.startDate}}}");
  //await page.type("{{{selectors.worklet.datePickerFrom}}}", "{{{flow.currentRun.startDate}}}");

  await page.click("{{{selectors.worklet.header}}}");
  await page.waitForSelector("{{{selectors.worklet.datePickerTo}}}", { waitUntil: 'domcontentloaded', timeout: timeoutMs });

  await page.click("{{{selectors.worklet.datePickerTo}}}", { clickCount: 3 });
  //await page.evaluate(() => document.querySelector("{{{selectors.worklet.datePickerActive}}}").value = "{{{flow.currentRun.endDate}}}");
  await page.type("{{{selectors.worklet.datePickerActive}}}", "{{{flow.currentRun.endDate}}}");
  //await page.type("{{{selectors.worklet.datePickerTo}}}", "{{{flow.currentRun.endDate}}}");

  await page.click("{{{selectors.worklet.header}}}");

  await page.evaluate(() => { debugger; });

  // Download receipts
  await page.waitForSelector("button[class='btn btn-primary btn-block primary-color']", { waitUntil: 'domcontentloaded', timeout: timeoutMs });
  await page.click("button[class='btn btn-primary btn-block primary-color']");

};
`

module.exports = Node;