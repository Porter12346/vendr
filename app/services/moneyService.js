import { AppState } from "../AppState.js"

class MoneyService {
    constructor() {
        console.log('money Service init')
    }

    insertQuarter() {
        AppState.balance += 0.25
    }
}

export const moneyService = new MoneyService