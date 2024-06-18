import { AppState } from "../AppState.js"

class ItemsService {
    constructor() {
        console.log("Items service init")
    }

    buyItem(itemName) {
        let foundItem = AppState.items.find((item) => item.name == itemName)
        if (AppState.balance >= foundItem.price) {
            AppState.balance -= foundItem.price
            AppState.activeItem = foundItem
        }
    }
}

export const itemsService = new ItemsService()

