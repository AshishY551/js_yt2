console.log("Harshit")


//V11      **************************   ************************************
const name="harshit"
const repoCount=50
// console.log(name+repoCount+" value")

console.log(`HELLO MY NAME IS ${name.ToUppercase} and my repo count is ${repoCount}`)

let getName=new String("Har-sh-it")

console.log(getName[0])
console.log(getName,__proto__)

console.log(getName.length)
console.log(getName.toLowerCase())
console.log(getName.toUpperCase())
console.log(getName)   // Original String remains unchanged because stack is used in Primitive datatypes
console.log(getName.charAt(2))
console.log(getName.indexOf("t"))


const newString=getName.substring(0,4)
console.log(newString)

const anotherString=getName.slice(-7,4)
console.log(anotherString)

const newStringOne="   Harshit    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https:/Harshit.com/Harshit%20@Choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes("Harshit"))
console.log(url.includes("sundar"))

console.log(getName.split("-"))

// Practice String Methods for mastery
 