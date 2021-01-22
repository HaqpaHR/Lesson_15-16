class MilitaryResource {
    constructor(type,health,distance){
    this.type = type;
    this.health = this.maxHealth = health;
    this.distance = this.maxDistance = distance;
 };
  
 isReadyToMove() {
   return this.distance >= 100;
 };

 isReadyToFight() {
     return this.health >= 100;
 };
 restore() {
     this.health = this.maxHealth;
     this.distance = this.maxDistance;
 };

 clone() {
     return new MilitaryResource()
 };
};

module.exports = MilitaryResource;