class FoodClass {
    Item: string 
    Calories: number
    Protein: number
    Carbs: number
    Fat: number 

    constructor(item: string, cals: number, protein: number, carbs: number, fat: number) {
      this.Item = item
      this.Calories = cals
      this.Protein = protein
      this.Carbs = carbs
      this.Fat = fat
    }
    addCals(amt: number) { 
      this.Calories += amt 
    }
    addProtein(amt: number) { 
      this.Protein += amt
    }
    addCarbs(amt: number) { 
      this.Carbs += amt 
    }
    addFat(amt: number) { 
      this.Fat += amt 
    }
}

export default FoodClass 