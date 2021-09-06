import Board from './board.js';
import Dice from './dice.js';
import Participant from './participant.js';

let b1 = new Board();
let d1 = new Dice();
let p1 = new Participant("Simon", 0);
let p2 = new Participant("Molly", 0);
let ronda = 1;
let winner = 0;

while(winner < 100){
    console.log(`______Ronda ${ronda}______`);
    //Simon
    let shift1 = d1.toRoll();
    p1.setPosition(b1.toCheckSquare(p1.uploadPosition(shift1)));

    console.log(`${p1.getName()} esta en la casilla ${p1.getPosition()}`);

    //Molly
    let shift2 = d1.toRoll();
    p2.setPosition(b1.toCheckSquare(p2.uploadPosition(shift2)));

    console.log(`${p2.getName()} esta en la casilla ${p2.getPosition()}`);

    ronda++;

    if(p1.getPosition() > p2.getPosition()){
        winner = p1.getPosition();
    } else {
        winner = p2.getPosition();
    }
}

console.log("____________________");

if(p1.getPosition() >= 100 && p2.getPosition() < 100){
    console.log("Simon ganó la carrera");
} else {
    console.log("Molly ganó la carrera");
}