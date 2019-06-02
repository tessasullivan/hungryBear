// export class HungryBear {
//   constructor(name) {
//     this.name = name;
//     this.foodLevel = 10;
//   }

//   setHunger() {
//     setInterval(() => {
//       this.foodLevel--;
//     }, 1000);
//   }
//   didYouGetEaten() {
//     if (this.foodLevel > 0 ){
//       return false;
//     } else {
//       return true;
//     }
//   }
//   feed() {
//     this.foodLevel = 10;
//   }
// }

export let bear = {

  foodLevel: 10, 

  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this. foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (foodLevel > 0 ){
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount; 
      return `The bear ate the ${food}.  Food level goes up by ${amount}.`
    }
  }
};
bear.eatSmall = bear.feed(5);