
function addition (x: finalListValues, y:finalListValues) {
  if(typeof x === 'number' && typeof y === 'number') {
     const sum: number = x + y;
     return sum
  }
  return -1
}
function substraction (x: number, y:number) {
    if(typeof x === 'number' && typeof y === 'number') {
     const sum: number = x - y;
     return sum
  }
  return -1
}
function multiplication (x: number, y:number) {
    if(typeof x === 'number' && typeof y === 'number') {
     const sum: number = x * y;
     return sum
  }
  return -1
}
function division (x: number, y:number) {
    if(typeof x === 'number' && typeof y === 'number') {
     const sum: number = x / y;
     return sum
  }
  return -1
}
function calc (x: number, y:number, symbol: string) {
    if(symbol === "+") {
        return addition(x, y)
    }
    if(symbol === "*") {
        return multiplication(x, y)
    }
    if(symbol === "/") {
        return division(x, y)
    }
    if(symbol === "-") {
        return substraction(x, y)
    }
}


let tempNumber: string = ""; // temporarily stores the current numerical value until operator is clicked
type finalListValues = string | number; 
let finalList: finalListValues[] = []; // stores the numbers and operators that are to be used to get the answer when you press '='
let miniDisplay: string = "";

document.addEventListener("DOMContentLoaded", () => {
 console.log("done");
 // output display
 const display = document.querySelector('.displayText') as HTMLInputElement;

 // number buttons
 document.querySelector('#one')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value ;
    console.log(tempNumber)
    display.value = tempNumber;
 })
 document.querySelector('#two')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })
  document.querySelector('#three')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })
  document.querySelector('#four')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })
  document.querySelector('#five')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })
  document.querySelector('#six')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })
  document.querySelector('#seven')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })
  document.querySelector('#eight')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })
  document.querySelector('#nine')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })
  document.querySelector('#zero')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })
 document.querySelector('#fullstop')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber + target.value;
    console.log(tempNumber)
    display.value = tempNumber;
 })

 // clear and delete functionality
  document.querySelector('#clear')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = "";
    console.log(tempNumber)
    display.value = "0";
 })
  document.querySelector('#delete')?.addEventListener("click", ( event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    tempNumber = tempNumber.slice(0,-1);
    console.log(tempNumber)
    display.value = tempNumber;
 })

 //operators functionality
 document.querySelector('#plus')?.addEventListener("click", (event: Event) => {
    event.preventDefault()
    let n:unknown = tempNumber;
    finalList.push(n as number);
    miniDisplay = miniDisplay + tempNumber;
    tempNumber = "";
    display.value = "0";
    const symbol = event.target as HTMLInputElement;
    finalList.push(symbol.value)
    miniDisplay = miniDisplay + symbol.value;
    console.log(miniDisplay)
 })
 document.querySelector('#times')?.addEventListener("click", (event: Event) => {
    event.preventDefault()
    let n:unknown = tempNumber;
    finalList.push(n as number);
    miniDisplay = miniDisplay + tempNumber;
    tempNumber = "";
    display.value = "0";
    const symbol = event.target as HTMLInputElement;
    finalList.push(symbol.value)
    miniDisplay = miniDisplay + symbol.value;
    console.log(miniDisplay)
 })
 document.querySelector('#minus')?.addEventListener("click", (event: Event) => {
    event.preventDefault()
    let n:unknown = tempNumber;
    finalList.push(n as number);
    miniDisplay = miniDisplay + tempNumber;
    tempNumber = "";
    display.value = "0";
    const symbol = event.target as HTMLInputElement;
    finalList.push(symbol.value)
    miniDisplay = miniDisplay + symbol.value;
    console.log(miniDisplay)
 })
 document.querySelector('#divide')?.addEventListener("click", (event: Event) => {
    event.preventDefault()
    let n:unknown = tempNumber;
    finalList.push(n as number);
    miniDisplay = miniDisplay + tempNumber;
    tempNumber = "";
    display.value = "0";
    const symbol = event.target as HTMLInputElement;
    finalList.push(symbol.value)
    miniDisplay = miniDisplay + symbol.value;
    console.log(miniDisplay)
 })
 // equals to operator functionality
 document.querySelector('#equalto')?.addEventListener("click", (event: Event) => {
    event.preventDefault();
    console.log("clicked =")
    let n:unknown = tempNumber;
    finalList.push(n as number);
    // iterate through the list and perform operations
    let counter = 0;
    let num_1: finalListValues = 0;
    let num_2: finalListValues = 0;
    let currSymbol: finalListValues = "";
    type ans = number | undefined;
    let answer: ans = 0;
    for(let i:number = 0; i<finalList.length-1; i++){
        if(typeof finalList[i] === 'number' && counter === 0){
            num_1 = finalList[i];
            counter = counter + 1;
        }
        if(typeof finalList[i] === 'string' && counter === 1){
            currSymbol = finalList[i];
            counter = counter + 1;
        }
        if(typeof finalList[i] === 'number' && counter === 0){
            num_2 = finalList[i];
            counter = 1;
            if (typeof num_1 === 'number' && typeof num_2 === 'number' && typeof currSymbol === 'string') {
               answer = calc( num_1, num_2, currSymbol); 
            }
        
        }
    }
    let str: unknown = answer;
    console.log(str as string)
    display.value = str as string;
 })
})