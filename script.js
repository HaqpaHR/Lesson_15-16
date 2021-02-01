class MilitaryResource {
    constructor(type,health,distance){
    this.type = type;
    this.health = this.maxHealth = health;
    this.distance = this.maxDistance = distance;
 };
  
 isReadyToMove() {
   return this.distance > 0;
 };

 isReadyToFight() {
     return this.health > 0;
 };
 
 restore() {
     this.health = this.maxHealth;
     this.distance = this.maxDistance;
 };

 clone() {
     return new MilitaryResource()
 };
};


 
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

 
 let tanks = new MilitaryResource('tanks', 1000, 400);
 let mashineGunner = new MilitaryResource('Mashine Gunner', 1000, 99)
console.log(tanks);
tanks.distance = 99;
console.log(tanks.isReadyToMove());
tanks.restore();
console.log(tanks.isReadyToMove())
let squad = new Squad([tanks,mashineGunner]);
console.log(squad)
console.log(squad.isReadyToMove())
console.log(squad.isReadyToFight())
console.log(squad.getReadyToMoveResources());
console.log(squad.clone())