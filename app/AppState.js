import { Item } from './models/item.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  balance = 0

  items = [
    new Item('MTN DEW', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPTuWaelpUi7lHfuNnih2uRZK2mX87OlOTg&s', 1.00),
    new Item('Voltage', 'https://m.media-amazon.com/images/I/51jfXpelXmL.jpg', 2.75),
    new Item('Code red', 'https://i5.walmartimages.com/seo/Mountain-Dew-Code-Red-Soda-20oz-Bottles-Quantity-of-24_f01733a5-f60e-40da-bb80-7e781ac15614.6b6d8612c6f024123a436948a97a207b.jpeg', 2.50),
    new Item('Baja blast', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoa5LKioOmLRjfQk22KcMColCUDqFrLv8SbA&s', 5.00),
    new Item('live wire', 'https://i5.walmartimages.com/seo/Mountain-Dew-Live-Wire-Soda-20oz-Bottles-Quantity-of-10_a7ab1e8f-17c7-4d56-82b0-55a5c0953e38.f8fc7f6c148b1ee993e62852849d1664.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF', 1.50),
    new Item('purple thunder', 'https://www.kroger.com/product/images/large/back/0001200021368', 1.75),
    new Item('diet', 'https://i5.walmartimages.com/seo/Diet-Mountain-Dew-20-Oz-Plastic-Bottles-Pack-of-24_7d6edeba-df9e-4a25-930a-517b008c0817.a2ed22638f70a5e02e5355f2c1f045fc.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF', 1.25),
    new Item('zero sugar', 'https://i5.walmartimages.com/seo/Mountain-Dew-Zero-Sugar-Soda-20oz-Bottles-Quantity-of-24_b766628b-b72d-43a3-96bd-bdcae5d4808e.fba1bcf4b3fda6423c4e647dac73e51e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF', 1.25),
    new Item('spark', 'https://i5.walmartimages.com/seo/Mountain-Dew-Spark-Raspberry-Lemonade-Soda-Pop-20-fl-oz-Bottle_9b13f33f-ff49-4877-bbbb-e1d9efda53c4.7ddd1bc9e5c1fe1ab2c8c9f6b9a9970a.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF', 1.75),
    new Item('Major Melon', 'https://i5.walmartimages.com/seo/Mountain-Dew-Major-Melon-Watermelon-Citrus-Soda-Pop-20-fl-oz-Bottle_619aa8c3-7075-49b3-aed3-ac8469b903e4.1c180107c1c90c7b8da05ac865270259.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF', 0.50),
    new Item('frost bite', 'https://i5.walmartimages.com/seo/Mountain-Dew-Frost-Bite-Melon-Citrus-Soda-Pop-20-fl-oz-Bottle_7595125a-f1d9-4aca-ac89-59d51114dc1e.c161f1bbaaf748fa4f159a6b4a62e01b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF', 1.75),
    new Item('liberty', 'https://i5.walmartimages.com/seo/Mountain-Dew-Liberty-Chill-50-Flavor-Citrus-Soda-Pop-20-fl-oz-Bottle_b7444272-fb9d-45ea-a27b-1fa79de7dad1.ad4f8ec9ac036f7feb40e0fcb6867c90.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF', 2.50),
    new Item('real sugar', 'https://i5.walmartimages.com/asr/e8f0b38b-574f-4052-bc00-60a3996ea819.6552380530462fbef9b2018b0ac4b57a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF', 1.50),
    new Item('diet baja', 'https://i5.walmartimages.com/seo/Mountain-Dew-Baja-Blast-Zero-Sugar-20-Oz-Bottles-24-Pack_232f40f6-8b17-41fa-bbf7-1f4425d0278a.544e993053b362039ce0502a7c104ff4.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF', 5.50),
    new Item('diet melon', 'https://i5.walmartimages.com/seo/Mountain-Dew-Major-Melon-Zero-20-Oz-Bottle_bcc15b65-0a2d-4d56-bbb3-ac983016d789.a9f6d3c85ee5b4c86a4eb2d84eab2b6c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF', 0.25),
  ]

  activeItem = null
}

export const AppState = createObservableProxy(new ObservableAppState())