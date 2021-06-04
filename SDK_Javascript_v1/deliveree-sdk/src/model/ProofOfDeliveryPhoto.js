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
    root.DelivereeApi.ProofOfDeliveryPhoto = factory(
      root.DelivereeApi.ApiClient
    );
  }
})(this, function (ApiClient) {
  "use strict";

  /**
   * The ProofOfDeliveryPhoto model module.
   * @module model/ProofOfDeliveryPhoto
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProofOfDeliveryPhoto</code>.
   * @alias module:model/ProofOfDeliveryPhoto
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>ProofOfDeliveryPhoto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProofOfDeliveryPhoto} obj Optional instance to populate.
   * @return {module:model/ProofOfDeliveryPhoto} The populated <code>ProofOfDeliveryPhoto</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("photo_type"))
        obj.photoType = ApiClient.convertToType(data["photo_type"], "String");

      if (data.hasOwnProperty("photo_name"))
        obj.photoName = ApiClient.convertToType(data["photo_name"], "String");

      if (data.hasOwnProperty("image_url"))
        obj.imageUrl = ApiClient.convertToType(data["image_url"], "String");

      if (data.hasOwnProperty("image_content_type"))
        obj.imageContentType = ApiClient.convertToType(
          data["image_content_type"],
          "String"
        );
    }
    return obj;
  };

  /**
   * @member {String} photoType
   */
  exports.prototype.photoType = undefined;

  /**
   * @member {String} photoName
   */
  exports.prototype.photoName = undefined;

  /**
   * @member {String} imageUrl
   */
  exports.prototype.imageUrl = undefined;

  /**
   * @member {String} imageContentType
   */
  exports.prototype.imageContentType = undefined;

  return exports;
});
