const Node = {
  "id": "730a3d78c101723f",
  "type": "template",
  "z": "a1b347492c77827f",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "javascript",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 820,
  "y": 1040,
  "wires": [
    [
      "61e225ff94fa03d5"
    ]
  ],
  "_order": 484
}

Node.template = `
module.exports = async ({ page }) => {
    await page.evaluate(() => {
        const rows = [
            ["name1", "city1", "some other info"],
            ["name2", "city2", "more info"]
        ];
        let csvContent = "data:text/csv;charset=utf-8,";
        rows.forEach(function(rowArray){
            let row = rowArray.join(",");
            csvContent += row + "\\r\\n";
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);

        return link.click();
    });
};
`

module.exports = Node;