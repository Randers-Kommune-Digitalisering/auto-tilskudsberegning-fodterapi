const Node = {
  "id": "f6bfc9feb87e3cbb",
  "type": "template",
  "z": "a1b347492c77827f",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "javascript",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 640,
  "y": 1260,
  "wires": [
    [
      "dc905a13da4e79e4"
    ]
  ],
  "_order": 494
}

Node.template = `
module.exports = async ({ page }) => {
  await page.goto("https://www.dwsamplefiles.com/download-json-sample-files/");
  await page.click("#brxe-dkjsnj > div:nth-child(6) > div.dm-img-link > strong > a");
};
`

module.exports = Node;