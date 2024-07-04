const userInput1 = "1;require('child_process').exec('cat /etc/passwd')"
eval(`var x = ${userInput}`)

const userInput2 = "require('child_process').exec('cat /etc/passwd') && console.log"
var x = new Function(`return ${userInput}(a,b)`)
