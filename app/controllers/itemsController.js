import { AppState } from "../AppState.js";
import { itemsService } from "../services/ItemsService.js";
import { setHTML } from "../utils/Writer.js";


export class ItemsController {
    constructor() {
        console.log("items controller init");
        this.drawItems()
        AppState.on('activeItem', this.drawActiveItem)
    }

    drawActiveItem() {
        let img = AppState.activeItem.img
        let HTMLInject = `<img
        src="${img}"
        alt="active item" class="img-fluid my-2 img-rotate">`
        setHTML('activeItemImg', HTMLInject)
    }

    buyItem(itemName) {
        itemsService.buyItem(itemName)
    }

    drawItems() {
        console.log('drawing the items')
        const itemsArray = AppState.items
        let htmlInject = ''
        itemsArray.forEach(item => {
            htmlInject += item.itemHTMLTemplate
        });
        setHTML('itemsArea', htmlInject)
    }
}