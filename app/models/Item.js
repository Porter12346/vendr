export class Item {
    constructor(itemName, itemImg, itemPrice) {
        this.name = itemName
        this.img = itemImg
        this.price = itemPrice
    }

    get itemHTMLTemplate() {
        /*HTML*/
        return (`<div class="col-12 col-md-4 d-flex flex-column align-content-center justify-content-center bg-secondary">
        <h4 class="text-center my-2"${this.name}></h4>
        <img
        src="${this.img}"
        alt="${this.name}" class="img-fluid my-2">
        </img>
        <button class="btn btn-primary my-2 mx-5">$${this.price}</button>
    </div>`)
    }
}