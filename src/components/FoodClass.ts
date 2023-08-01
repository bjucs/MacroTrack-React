class FoodClass {
    item: string 
    cals: number
    protein: number
    carbs: number
    fat: number 

    constructor(item: string, cals: number, protein: number, carbs: number, fat: number) {
      this.item = item
      this.cals = cals
      this.protein = protein
      this.carbs = carbs
      this.fat = fat
    }
    addCals(amt: number) { 
      this.cals += amt 
    }
    addProtein(amt: number) { 
      this.protein += amt
    }
    addCarbs(amt: number) { 
      this.carbs += amt 
    }
    addFat(amt: number) { 
      this.fat += amt 
    }
}

export default FoodClass 