const Node = {
  "id": "7b6d9dedc6b2bf02",
  "type": "change",
  "z": "36720db510b259f8",
  "name": "Set functions / operators",
  "rules": [
    {
      "t": "set",
      "p": "asRegex",
      "pt": "msg",
      "to": "function($expression)\t{\t      $eval(\"/^.*\" & $expression & \"/m\")\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "validateData",
      "pt": "msg",
      "to": "function($rulevalue, $ruleoperator, $value)\t{\t    /* Basic rule operators */\t    \t    $ruleoperator = \"!null\" ?\t        $value != null\t    :\t    $value = null ?\t        null\t    :\t    /* Numeric rule operators */\t    \t    $ruleoperator = \"<\" ?\t        $value < $rulevalue\t    :\t    $ruleoperator = \">\" ?\t        $value > $rulevalue\t    :\t    $ruleoperator = \"==\" ?\t        $value = $rulevalue\t    :\t    $ruleoperator = \"!=\" ?\t        $value != $rulevalue\t    :\t    /* String rule operators */\t\t    $ruleoperator = \"contains\" ?\t        ($contains($string($value), $string($rulevalue)) ? true : false)\t    :\t    $ruleoperator = \"!contains\" ?\t        ($contains($string($value), $string($rulevalue)) ? false : true)\t    :\t    $ruleoperator = \"regexmatch\" ?\t        ($match($string($value), asRegex($rulevalue)) ? true : false)\t    :\t    $ruleoperator = \"!regexmatch\" ?\t        ($match($string($value), asRegex($rulevalue)) ? false : true)\t    :\t    ($ruleoperator = \"regex\" or $ruleoperator = \"regexcontains\") ?\t        ($contains($string($value), asRegex($rulevalue)) ? true : false)\t    :\t    ($ruleoperator = \"!regex\" or $ruleoperator = \"regexcontains\") ?\t        ($contains($string($value), asRegex($rulevalue)) ? false : true)\t    :\t    /* Custom rule operators */\t\t    $ruleoperator = \"containsCPR\" ?\t        ($contains($string($value), asRegex(regexLib.cpr)) ? true : false)\t    :\t    $ruleoperator = \"!containsCPR\" ?\t        ($contains($string($value), asRegex(regexLib.cpr))) ? false : true\t\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 350,
  "y": 140,
  "wires": [
    [
      "76b17807736ccc2f"
    ]
  ],
  "_order": 503
}

module.exports = Node;