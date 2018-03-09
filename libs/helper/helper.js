/*
* @Author: Marte
* @Date:   2018-03-07 18:33:19
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-08 09:12:21
*/
const helper = {
  randItem(items) {
    return items[Math.floor(Math.random() * items.length)]
  },

}

export { helper as default}