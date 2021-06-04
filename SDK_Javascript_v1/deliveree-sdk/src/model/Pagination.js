/*
 * Deliveree SDK
 * With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *

 * Contact: duke@deliveree.com
 *
 */

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["../ApiClient"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require("../ApiClient"));
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.Pagination = factory(root.DelivereeApi.ApiClient);
  }
})(this, function (ApiClient) {
  "use strict";

  /**
   * The Pagination model module.
   * @module model/Pagination
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * @alias module:model/Pagination
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pagination} obj Optional instance to populate.
   * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty("total_count"))
        obj.totalCount = ApiClient.convertToType(data["total_count"], "Number");

      if (data.hasOwnProperty("per_page"))
        obj.perPage = ApiClient.convertToType(data["per_page"], "Number");

      if (data.hasOwnProperty("next_page"))
        obj.nextPage = ApiClient.convertToType(data["next_page"], "String");

      if (data.hasOwnProperty("previous_page"))
        obj.previousPage = ApiClient.convertToType(
          data["previous_page"],
          "String"
        );
    }

    return obj;
  };

  /**
   * @member {Number} totalCount
   */
  exports.prototype.totalCount = undefined;

  /**
   * @member {Number} perPage
   */
  exports.prototype.perPage = undefined;

  /**
   * @member {String} nextPage
   */
  exports.prototype.nextPage = undefined;

  /**
   * @member {String} previousPage
   */
  exports.prototype.previousPage = undefined;

  return exports;
});
