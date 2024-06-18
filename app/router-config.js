
import { ItemsController } from "./controllers/itemsController.js";
import { MoneyController } from "./controllers/moneyController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ItemsController, MoneyController],
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])