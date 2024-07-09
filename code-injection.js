const userInputa = "1;require('child_process').exec('cat /etc/passwd')"
eval(`var x = ${userInput}`)

const userInputb = "require('child_process').exec('cat /etc/passwd') && console.log"
var x = new Function(`return ${userInput}(a,b)`)
