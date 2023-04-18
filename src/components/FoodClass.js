
class FoodClass {
    constructor(item, cals, protein, carbs, fat) {
      this.item = item;
      this.cals = cals;
      this.protein = protein;
      this.carbs = carbs;
      this.fat = fat;
    }
    addCals(amt) { 
      this.cals += amt; 
    }
    addProtein(amt) { 
      this.protein += amt; 
    }
    addCarbs(amt) { 
      this.carbs += amt; 
    }
    addFat(amt) { 
      this.fat += amt; 
    }
}

export default FoodClass;