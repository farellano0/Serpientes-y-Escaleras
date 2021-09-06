export default class Participant {
    constructor(name, position){
        this._name = name;
        this._position = position;
    }

    getName(){
        return this._name;
    }
    getPosition(){
        return this._position;
    }
    setName(newName){
        this._name = newName;
        return this._name;
    }
    setPosition(newPosition){
        this._position = newPosition;
        return this._position;
    }

    uploadPosition(number){
        this._position += number;

        return this._position;
    }
}