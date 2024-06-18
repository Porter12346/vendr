import { Item } from './models/item.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  balance = 20

  items = [
    new Item('Dr pepper', 'https://i5.walmartimages.com/seo/Dr-Pepper-Soda-Pop-20-fl-oz-Bottle_c1bd00b2-50a3-44ce-bb27-04177224fbd6.25a6500f2249f58f1fbd5909f2a264f7.jpeg', 1.50),
    new Item('Dr pepper', 'https://i5.walmartimages.com/seo/Dr-Pepper-Soda-Pop-20-fl-oz-Bottle_c1bd00b2-50a3-44ce-bb27-04177224fbd6.25a6500f2249f58f1fbd5909f2a264f7.jpeg', 1.50),
    new Item('Dr pepper', 'https://i5.walmartimages.com/seo/Dr-Pepper-Soda-Pop-20-fl-oz-Bottle_c1bd00b2-50a3-44ce-bb27-04177224fbd6.25a6500f2249f58f1fbd5909f2a264f7.jpeg', 1.50)
  ]

  activeItem = null
}

export const AppState = createObservableProxy(new ObservableAppState())