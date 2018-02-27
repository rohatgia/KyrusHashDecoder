
var InvalidInputError = require('./InvalidInput')

/**
 * Errors thrown due to malformed byte encoded text.
 */
module.exports = class TextEncodingError extends InvalidInputError {
  /**
   * Constructor
   * @param {string} message
   * @param {number} [index=null] Index of invalid byte
   */
  constructor (message, index = null) {
    super(message)
    this.byteIndex = index
  }
}
