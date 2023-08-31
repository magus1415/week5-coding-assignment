// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.


class FoodChoice {
    constructor(food) {
        this.food = food;
    }
    describe() {
        return `Dish: ${this.food}.`;
    }
} 
//I have declared a class and used food as the contructor and describe as the method of the class

class Menu {
    constructor() {
        this.foodOrder = [];
    } 
    //I delclared a class called menu and used an array as the contstructor
    start() {
        let selection = this.optionsMenu()
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.mainDish();
                    break;
                case '2':
                    this.removeItem();
                    break;
                case '3':
                    this.orderSummary()
                default:
                    selection = 0;
            } selection = this.optionsMenu()
        } alert`This order has reset, please press OK and place another order.`
    } 
    //I used a while loop to loop throught options with their repective methods, if any other number selected it would be defaulted to 0 and the alert would pop out
    optionsMenu() {
        return prompt(`
        0) Will reset order
        1) Pick main dish and side
        2) Remove an item
        3) Order summary        
        `)
    } 
    //This prompts the user to put a number in so i can our switch statment will be activated with the respective number and function
    mainDish() {
        let mainDishPick = prompt(`Enter a main dish.`);
        this.foodOrder.push(new FoodChoice(mainDishPick));
    } 
    //When selction 1 is select, it allows the user to type in a dish and it will push that to the foodorder array.
    removeItem() {
        let index = prompt(`Please enter the index item you want to remove: 0-${this.foodOrder.length - 1}`);
        if (!index) {
            return;
        }
        if (index > -1 && index < this.foodOrder.length) {
            this.foodOrder.splice(index, 1);
        }
        //when option 2 is selected, this allows the user to put in the index they want to remove
    }
    orderSummary() {
        let displayFood = '';
        for (let i = 0; i < this.foodOrder.length; i++) {
            displayFood += i + ") " + this.foodOrder[i].describe() + '\n'

        }
        alert(displayFood);
    } 
    // When option 3 is selcted, this allows the user to see what they have entered into their array
}

let menu = new Menu();
menu.start()
//This instatiates the app and flows through their functions