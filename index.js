// Your code here
class Polygon {
    constructor (array) {
      
      this.sides = array.length;
      this.all = array;
    }
  
    get countSides() {
      return this.sides;
    }
    get perimeter() {
      debugger
      return this.all.reduce((acc, side) => {
        return acc + side;
        // adds all the sides up 
        // const reducer = (accumulator, currentValue)
      }, 0);
    }
  }

  class Triangle extends Polygon {
    get isValid() {
      let side1 = this.all[0];
      let side2 = this.all[1];
      let side3 = this.all[2];
      if (side1 + side2 <= side3) {
        return false;
      } else if (side1 + side3 <= side2) {
        return false;
      } else if (side2 + side3 <= side1) {
        return false;
      } else {
        return true;
      }
    }
  }

  class Square extends Polygon {
    get isValid() {
      let side1 = this.all[0];
      let side2 = this.all[1];
      let side3 = this.all[2];
      let side4 = this.all[3];
      if (side1 == side2 && side1 == side3 && side1 == side4) {
        return true;
      } else {
        return false;
      }

      
    }

    get area() {
        return this.all[0] ** 2;
      }
    }

