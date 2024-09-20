const thanksgivingMeal = {
    starter: {
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },

    entreee:{
        meat: "turkey",
        alt: "Stuffed Green Peppers",
        vegetables:{
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
        },

        sides: {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
        },
        calories: 450

    },
    dessert : {
        ice_cream: "pumkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },

    total_cost: 25.0,
    senior_discount: 0.10,

    prettyPrint: function(){
        let menuStr =   `Starter:${this.starter.fruit} with ${this.starter.wine}\n`+
                        `Entree: ${this.entree.meat} or ${this.entree.alt}, with ${this.entree.vegetables.potatoes}, ${this.entree.vegetables.greens}, and ${this.entree.sides.bread}\n`+
                        `Dessert: ${this.desert.ice_cream} and ${this.desert.cake}`;
        alert("Menu is prepared: " + menuStr);
        console.log("Menu string: ",menuStr);
        return menuStr;
    },

    totalPrice: function(isSenior){
        console.log("calculating the price");
        let total = this.total_cost;

        if(isSenior){
            total -=(this.total_cost * this_senior_discount);
            console.log("Senior price applied. Price: $ " + total);
            alert("Senior Discount applied.Total Price is $ "+total);
        }
        else{
            console.log("Regular price applied. Price: $ " + total);
            alert("No senior Discount.Total Price is $ "+total);
        }
        return total;
    },

    totalCalories: function(){
        let totalCalories = this.starter.calories + this.entree.calories+ this.dessert.calories;
        console.log("Total calories calculated: ", totalCalories);  // Debugging log
        alert("Total calories for the meal is: " + totalCalories);  // Debugging alert

        return totalCalories;

    },
    caloriesFrom: function(indicator) {
        // Get the total calories for the given part of the meal
        console.log("Getting calories for:", indicator);  // Debugging log
        
        if (indicator === 'starter') {
            console.log("Calories from starter: ", this.starter.calories);  // Debugging log
            return this.starter.calories;
        } else if (indicator === 'entree') {
            console.log("Calories from entree: ", this.entree.calories);  // Debugging log
            return this.entree.calories;
        } else if (indicator === 'dessert') {
            console.log("Calories from dessert: ", this.dessert.calories);  // Debugging log
            return this.dessert.calories;
        } else {
            console.log("Invalid option passed.");  // Debugging log
            return "Invalid option!";
        }
    }
};

// Call the functions and log to the console or alert for debugging
console.log(thanksgivingMeal.prettyPrint());
console.log("Total Price (Senior):", thanksgivingMeal.totalPrice(true));
console.log("Total Price (Regular):", thanksgivingMeal.totalPrice(false));
console.log("Total Calories:", thanksgivingMeal.totalCalories());
console.log("Calories from Dessert:", thanksgivingMeal.caloriesFrom("dessert"));

// Now, add this output to the HTML page
document.querySelector(".fullMeal").textContent = thanksgivingMeal.prettyPrint();
document.querySelector(".priceInfo").textContent = "Total Price (Senior): $" + thanksgivingMeal.totalPrice(true);
document.querySelector(".calorieInfo").textContent = "Total Calories: " + thanksgivingMeal.totalCalories();
