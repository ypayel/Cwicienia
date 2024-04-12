"use strict"; 

const tab = [];

while(tab.length < 6){
    let random = Math.floor(Math.random() * 101);
    if (tab.indexOf(random) === -1){
    tab.push(random); 
  }
}
console.log(tab);
