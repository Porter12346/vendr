import { AppState } from "../AppState.js"

class ItemsService {
    constructor() {
        console.log("Items service init")
    }

    buyItem(itemName) {
        let foundItem = AppState.items.find((item) => item.name == itemName)
        AppState.activeItem = foundItem
    }
}

export const itemsService = new ItemsService()

