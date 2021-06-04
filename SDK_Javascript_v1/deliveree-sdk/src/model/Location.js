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
    define([
      "../ApiClient",
      "./PositionTracking",
      "./ProofOfDeliveryPhoto",
    ], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("../ApiClient"),
      require("./PositionTracking"),
      require("./ProofOfDeliveryPhoto")
    );
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.Location = factory(
      root.DelivereeApi.ApiClient,
      root.DelivereeApi.PositionTracking,
      root.DelivereeApi.ProofOfDeliveryPhoto
    );
  }
})(this, function (ApiClient, PositionTracking, ProofOfDeliveryPhoto) {
  "use strict";

  /**
   * The Location model module.
   * @module model/Location
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Location</code>.
   * @alias module:model/Location
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location} obj Optional instance to populate.
   * @return {module:model/Location} The populated <code>Location</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("address"))
        obj.address = ApiClient.convertToType(data["address"], "String");

      if (data.hasOwnProperty("latitude"))
        obj.latitude = ApiClient.convertToType(data["latitude"], "Number");

      if (data.hasOwnProperty("longitude"))
        obj.longitude = ApiClient.convertToType(data["longitude"], "Number");

      if (data.hasOwnProperty("recipient_name"))
        obj.recipientName = ApiClient.convertToType(
          data["recipient_name"],
          "String"
        );

      if (data.hasOwnProperty("recipient_phone"))
        obj.recipientPhone = ApiClient.convertToType(
          data["recipient_phone"],
          "String"
        );

      if (data.hasOwnProperty("note"))
        obj.note = ApiClient.convertToType(data["note"], "String");

      if (data.hasOwnProperty("need_cod"))
        obj.needCod = ApiClient.convertToType(data["need_cod"], "Boolean");

      if (data.hasOwnProperty("cod_note"))
        obj.codNote = ApiClient.convertToType(data["cod_note"], "String");

      if (data.hasOwnProperty("cod_invoice_fees"))
        obj.codInvoiceFees = ApiClient.convertToType(
          data["cod_invoice_fees"],
          "Number"
        );

      if (data.hasOwnProperty("need_pod"))
        obj.needPod = ApiClient.convertToType(data["need_pod"], "Boolean");

      if (data.hasOwnProperty("pod_note"))
        obj.podNote = ApiClient.convertToType(data["pod_note"], "String");

      if (data.hasOwnProperty("position_trackings"))
        obj.positionTrackings = ApiClient.convertToType(
          data["position_trackings"],
          [PositionTracking]
        );

      if (data.hasOwnProperty("proof_of_delivery_photos"))
        obj.proofOfDeliveryPhotos = ApiClient.convertToType(
          data["proof_of_delivery_photos"],
          [ProofOfDeliveryPhoto]
        );

      if (data.hasOwnProperty("signature_url"))
        obj.signatureUrl = ApiClient.convertToType(
          data["signature_url"],
          "String"
        );
    }
    return obj;
  };

  /**
   * @member {String} address
   */
  exports.prototype.address = undefined;

  /**
   * @member {Number} latitude
   */
  exports.prototype.latitude = undefined;

  /**
   * @member {Number} longitude
   */
  exports.prototype.longitude = undefined;

  /**
   * @member {String} recipientName
   */
  exports.prototype.recipientName = undefined;

  /**
   * @member {String} recipientPhone
   */
  exports.prototype.recipientPhone = undefined;

  /**
   * @member {String} note
   */
  exports.prototype.note = undefined;

  /**
   * @member {Boolean} needCod
   */
  exports.prototype.needCod = undefined;

  /**
   * @member {String} codNote
   */
  exports.prototype.codNote = undefined;

  /**
   * @member {Number} codInvoiceFees
   */
  exports.prototype.codInvoiceFees = undefined;

  /**
   * @member {Boolean} needPod
   */
  exports.prototype.needPod = undefined;

  /**
   * @member {String} podNote
   */
  exports.prototype.podNote = undefined;

  /**
   * @member {Array.<module:model/PositionTracking>} positionTrackings
   */
  exports.prototype.positionTrackings = undefined;

  /**
   * @member {Array.<module:model/ProofOfDeliveryPhoto>} proofOfDeliveryPhotos
   */
  exports.prototype.proofOfDeliveryPhotos = undefined;

  /**
   * @member {String} signatureUrl
   */
  exports.prototype.signatureUrl = undefined;

  return exports;
});
