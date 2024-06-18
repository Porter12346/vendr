import { AppState } from "../AppState.js"
import { moneyService } from "../services/moneyService.js"
import { setText } from "../utils/Writer.js"

export class MoneyController {
    constructor() {
        console.log('Money Controller init')
        this.drawBalance()
        AppState.on('balance', this.drawBalance)
    }

    insertQuarter() {
        moneyService.insertQuarter()
    }

    drawBalance() {
        let TextInject = 'Balance : $'
        TextInject += `${AppState.balance.toFixed(2)}`
        setText('balanceLabel', TextInject)
    }


}