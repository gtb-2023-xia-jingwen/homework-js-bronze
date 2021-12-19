/**
 * This class is used to calculate the total price of the products bought.
 *
 * Each products contains an `id`, which will be printed on the box. The
 * `RecepitCalculator` will scan the ids of the products and give the total price
 * of the selected products.
 */
class RecepitCalculator {
  constructor(products) {
    this.products = [...products];
  }

  /**
   * Calculate total price according to the selected product ids. Please note that
   * the `id` list can contain duplicated ids (a product can be bought multiple times).
   *
   * @param {string[]} selectProductIds An array of selected product ids. Please note
   *   that this array will contains at most 3000 items.
   * @returns The total price of the selected products.
   * @throws the `selectProductIds` is `null` or `undefined`.
   */
  getTotalPrice(selectProductIds) {
    // TODO: Please implement the method
    // <-start-
    // --end->
  }

  // TODO:
  //
  // You can add addtional helper functions if you want
  // <-start-
  // --end-->
}

export default RecepitCalculator;
