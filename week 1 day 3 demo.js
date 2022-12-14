/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let obiwanAttach = 25
let anakinAttack = 35

if (obiwanAttack > anakinAttack) {
    console.log( 'obiwanAttach  is a stronger')
} else if {
    console.log('anankin has the power')
}else {
    console.log('the force is with both')
}

let obiwanHealth = 100
let obiwandefense = 0

obiwandefense += 25

if ( obiwanHealth <= anakinAttack){
    console.log('obiwan has been slain. at least we dont have to deal with rey')
} else{
    obiwanHealth -= (anakinAttack - obiwandefense)
    console.log ('obiwan health is ${obiwanHealth}')
}
if(obiwanHealth + 50 <= 100) {
    obiwanHealth = 100

} else {
    obiwanHealth += 50
}

let coinLandsHeads = false 

if( coinLandsHeads === true){
console.log('the fight continues')
}else{
    console.log( 'odiwan is allowed is retreat' )
}

for(let i = 0; i < 5; i++) {
    obiwanHealth -= (anakinAttack - obiwandefense)  
    console.log('obiwans health is ${obiwanheath} ')
}

