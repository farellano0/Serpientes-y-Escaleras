export default class Board {
    constructor(){
        this.stairsStart = [11, 17, 19, 21, 26, 43, 52, 70, 74];
        this.stairsFinish = [39, 67, 45, 56, 50, 84, 76, 92, 100];
        this.snakesHead = [96, 93, 63, 78, 75, 62, 36, 22, 18];
        this.snakesTail = [69, 40, 8, 49, 30, 14, 20, 2, 6];
    }

    toCheckSquare(number){
        for(let i = 0; i < this.stairsStart.length; i++){
            if(number == this.stairsStart[i]){
                return this.stairsFinish[i];
            } else if(number == this.snakesHead[i]){
                return this.snakesTail[i];
            } else {
                return number;
            }
        }
    }

}