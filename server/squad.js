const MilitaryResource = require('./resources');

class Squad extends MilitaryResource{
  constructor(defaultResources) {
      super();
      this.squad = [];
 if (defaultResources) this.combineResources(defaultResources);
};

combineResources(defaultResources) {
  this.squad.push(...defaultResources)
};

isReadyToMove() {
 return this.squad.every((move) => move.isReadyToMove());
};

isReadyToFight(){
 return this.squad.every((health) => health.isReadyToFight());
};

getReadyToMoveResources() {
 return this.squad.filter((element) => element.isReadyToMove() && element.isReadyToFight());
};

clone() {
   return new Squad();
}
};

module.exports = Squad;