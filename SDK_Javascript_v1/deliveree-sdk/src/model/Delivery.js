/*
 * Deliveree SDK
 * With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *
 * Contact: duke@deliveree.com
 */

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["../ApiClient", "./Location"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require("../ApiClient"), require("./Location"));
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.Delivery = factory(
      root.DelivereeApi.ApiClient,
      root.DelivereeApi.Location
    );
  }
})(this, function (ApiClient, Location) {
  "use strict";

  /**
   * The Delivery model module.
   * @module model/Delivery
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Delivery</code>.
   * @alias module:model/Delivery
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>Delivery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Delivery} obj Optional instance to populate.
   * @return {module:model/Delivery} The populated <code>Delivery</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("id"))
        obj.vehicleTypeId = ApiClient.convertToType(data["id"], "Number");

      if (data.hasOwnProperty("customer_id"))
        obj.vehicleTypeId = ApiClient.convertToType(
          data["customer_id"],
          "Number"
        );

      if (data.hasOwnProperty("driver_id"))
        obj.vehicleTypeId = ApiClient.convertToType(
          data["driver_id"],
          "Number"
        );

      if (data.hasOwnProperty("vehicle_type_id"))
        obj.vehicleTypeId = ApiClient.convertToType(
          data["vehicle_type_id"],
          "Number"
        );
      if (data.hasOwnProperty("note"))
        obj.note = ApiClient.convertToType(data["note"], "String");

      if (data.hasOwnProperty("time_type"))
        obj.timeType = ApiClient.convertToType(data["time_type"], "String");

      if (data.hasOwnProperty("pickup_time"))
        obj.pickupTime = ApiClient.convertToType(data["pickup_time"], "Date");

      if (data.hasOwnProperty("job_order_number"))
        obj.jobOrderNumber = ApiClient.convertToType(
          data["job_order_number"],
          "String"
        );

      if (data.hasOwnProperty("allow_parking_fees"))
        obj.allowParkingFees = ApiClient.convertToType(
          data["allow_parking_fees"],
          "Boolean"
        );

      if (data.hasOwnProperty("allow_tolls_fees"))
        obj.allowTollsFees = ApiClient.convertToType(
          data["allow_tolls_fees"],
          "Boolean"
        );

      if (data.hasOwnProperty("allow_waiting_time_fees"))
        obj.allowWaitingTimeFees = ApiClient.convertToType(
          data["allow_waiting_time_fees"],
          "Boolean"
        );

      if (data.hasOwnProperty("fleet_partner_id"))
        obj.fleetPartnerId = ApiClient.convertToType(
          data["fleet_partner_id"],
          "Number"
        );

      if (data.hasOwnProperty("container_size"))
        obj.containerSize = ApiClient.convertToType(
          data["container_size"],
          "String"
        );

      if (data.hasOwnProperty("locations"))
        obj.locations = ApiClient.convertToType(data["locations"], [Location]);
    }
    return obj;
  };

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number}
   */
  exports.prototype.customerId = undefined;
  /**
   * @member {Number}
   */
  exports.prototype.driverId = undefined;

  /**
   * @member {Number} vehicleTypeId
   */
  exports.prototype.vehicleTypeId = undefined;

  /**
   * @member {Number} company_id
   */
  exports.prototype.company_id = undefined;

  /**
   * @member {Number} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number}
   */
  exports.prototype.totalFees = undefined;
  /**
   * @member {String}
   */
  exports.prototype.currency = undefined;
  /**
   * @member {String}
   */
  exports.prototype.trackingUrl = undefined;

  /**
   * @member {String} note
   */
  exports.prototype.note = undefined;

  /**
   * @member {String} timeType
   */
  exports.prototype.timeType = undefined;

  /**
   * @member {Date} pickupTime
   */
  exports.prototype.pickupTime = undefined;

  /**
   * @member {String} jobOrderNumber
   */
  exports.prototype.jobOrderNumber = undefined;

  /**
   * @member {Boolean} allowParkingFees
   */
  exports.prototype.allowParkingFees = undefined;

  /**
   * @member {Boolean} allowTollsFees
   */
  exports.prototype.allowTollsFees = undefined;

  /**
   * @member {Boolean} allowWaitingTimeFees
   */
  exports.prototype.allowWaitingTimeFees = undefined;

  /**
   * @member {Number} fleetPartnerId
   */
  exports.prototype.fleetPartnerId = undefined;

  /**
   * @member {String} containerSize
   */
  exports.prototype.containerSize = undefined;

  /**
   * @member {Array.<module:model/Location>} locations
   */
  exports.prototype.locations = undefined;

  return exports;
});
