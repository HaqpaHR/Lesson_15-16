const MilitaryResource = require('./resources');

class Squad extends MilitaryResource {
    constructor(defaultResources) {
        super();
        this.squad = [];
   if (defaultResources) this.combineResources(defaultResources);
};

combineResources(defaultResources) {
    this.squad.push(...defaultResources)
};

isReadyToMove() {
       let result = true;
       this.squad.forEach((move) => result = (!move.isReadyToMove() ? false : result) );
       return result;
 };
 isReadyToFight(){
   let result = true;
   this.squad.forEach((move) => result = (!move.isReadyToMove() ? false : result) );
   return result;
 };
 getReadyToMoveResources() {
   let result = [];
   for(let i = 0; i < this.squad.length; i++) { 
      if(this.squad[i].isReadyToMove() && this.squad[i].isReadyToFight())
      result.push(this.squad[i]);
   }
   return result;
 }
 clone() {
     return new Squad();
 }
};


module.exports = Squad;