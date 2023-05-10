const Node = {
  "id": "6302ffd0cb3234a5",
  "type": "change",
  "z": "a1b347492c77827f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "requestTimeout",
      "pt": "msg",
      "to": "10000",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\"accept\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\",\"accept-language\":\"da-DK,da;q=0.9\",\"sec-ch-ua\":\"\\\"Google Chrome\\\";v=\\\"113\\\", \\\"Chromium\\\";v=\\\"113\\\", \\\"Not-A.Brand\\\";v=\\\"24\\\"\",\"sec-ch-ua-mobile\":\"?0\",\"sec-ch-ua-platform\":\"\\\"Windows\\\"\",\"sec-fetch-dest\":\"document\",\"sec-fetch-mode\":\"navigate\",\"sec-fetch-site\":\"none\",\"sec-fetch-user\":\"?1\",\"upgrade-insecure-requests\":\"1\",\"cookie\":\"JSESSIONID=95CF0A073D81CE5E15DE8A91BCFBFF6C.fagsystem-komb-spkp-fag02; NSC_mc_wt_tql_qspe_gt=5ccba3d83992525e880d1f64608a8fcaf827e098144410d7efe9fd8cb1ca96ae3aac4848; oiosaml-fragment=\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 1560,
  "wires": [
    [
      "529d94f58dd9386b"
    ]
  ],
  "_order": 522
}

module.exports = Node;