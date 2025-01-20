var cenajablek=prompt("napište cenu jablek")
cenajablek=Number(cenajablek)
var početjablek=prompt("napiš počet jablek")
početjablek=Number(početjablek)
var a=cenajablek*početjablek
console.log("při koupi"+početjablek+" jablek zaplatíte"+a+" korun")
alert("při koupi "+početjablek+" jablek zaplatíte "+a+" korun")

var hodiny=prompt("napište počet hodin")
hodiny=Number(hodiny)
var minuty=60
minuty=Number(minuty)
var b=minuty*hodiny
console.log(hodiny+" hodiny mají v sobě "+b+" minut")
alert(hodiny+" hodiny mají v sobě "+b+" minut")

var celsia=prompt("napište stupně celsia")
celsia=Number(celsia)
var F=celsia*(9/5)+32
console.log(celsia+" stupňů celsia je na převedeno na "+F+" Fahrenhaita")
alert(celsia+" stupňů celsia je na převedeno na "+F+" Fahrenhaita")