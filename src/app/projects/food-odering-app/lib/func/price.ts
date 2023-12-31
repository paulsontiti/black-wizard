import { FoodType } from "../../components/FoodCard";

export const calculateTotal = (foodItems: FoodType[]) => {
    let total = 0;
    for (let item of foodItems) {
      total += item.price * item.noInCart;
    }
    return total;
  };
  export function updateNumberOfItemInList(
    action: "plus" | "minus",
    slug: string,
    foodItems: FoodType[],
    foodIsmainOrder?: boolean
  ) {
    const food = foodItems.find((food) => food.slug === slug);
    if (food) {
      if (action === "plus") food.noInCart++;
      else {
        if (food.noInCart > 1) food.noInCart--;
      }
      if (foodIsmainOrder || food.noInCart > 0) {
        return foodItems
          .filter((food) => food.slug !== slug)
          .concat(food as FoodType);
      } else {
        return foodItems.filter((food) => food.slug !== slug);
      }
    }
    return foodItems;
  }
  export function formatFoodTitle(food: FoodType) {
    let title = "";
    if (food.noInCart && food.noInCart > 1) {
      return `${food.title} (${food.noInCart})`;
    } else {
      return food.title;
    }
  }
  //handle logic for adding and removing items from list
  export const addExtraFoodToOrder = (foodItems: FoodType[], extraFood: FoodType) => {
    const food = foodItems.find((foodItem) => foodItem.slug === extraFood.slug);
  
    if (food) {
      return foodItems.filter((foodItem) => foodItem.slug !== food.slug);
    } else {
      return foodItems.concat(extraFood);
    }
  };