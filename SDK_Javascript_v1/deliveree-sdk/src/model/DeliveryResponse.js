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
    define(["../ApiClient", "./Location", "./Driver", "./Vehicle"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("../ApiClient"),
      require("./Location"),
      require("./Driver"),
      require("./Vehicle")
    );
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.DeliveryResponse = factory(
      root.DelivereeApi.ApiClient,
      root.DelivereeApi.Location,
      root.DelivereeApi.Driver,
      root.DelivereeApi.Vehicle
    );
  }
})(this, function (ApiClient, Location, Driver, Vehicle) {
  "use strict";

  /**
   * The DeliveryResponse model module.
   * @module model/DeliveryResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeliveryResponse</code>.
   * @alias module:model/DeliveryResponse
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>DeliveryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryResponse} obj Optional instance to populate.
   * @return {module:model/DeliveryResponse} The populated <code>DeliveryResponse</code> instance.
   */

  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");

      if (data.hasOwnProperty("customer_id"))
        obj.customerId = ApiClient.convertToType(data["customer_id"], "Number");

      if (data.hasOwnProperty("driver_id"))
        obj.driverId = ApiClient.convertToType(data["driver_id"], "Number");

      if (data.hasOwnProperty("driver"))
        obj.driver = ApiClient.convertToType(data["driver"], Driver);

      if (data.hasOwnProperty("vehicle_type_id"))
        obj.vehicleTypeId = ApiClient.convertToType(
          data["vehicle_type_id"],
          "Number"
        );
      if (data.hasOwnProperty("company_id"))
        obj.companyId = ApiClient.convertToType(data["company_id"], "Number");

      if (data.hasOwnProperty("time_type"))
        obj.timeType = ApiClient.convertToType(data["time_type"], "String");

      if (data.hasOwnProperty("status"))
        obj.status = ApiClient.convertToType(data["status"], "String");

      if (data.hasOwnProperty("note"))
        obj.note = ApiClient.convertToType(data["note"], "String");

      if (data.hasOwnProperty("total_fees"))
        obj.totalFees = ApiClient.convertToType(data["total_fees"], "Number");

      if (data.hasOwnProperty("currency"))
        obj.currency = ApiClient.convertToType(data["currency"], "String");

      if (data.hasOwnProperty("tracking_url"))
        obj.trackingUrl = ApiClient.convertToType(
          data["tracking_url"],
          "String"
        );

      if (data.hasOwnProperty("created_at"))
        obj.createdAt = ApiClient.convertToType(data["created_at"], "Date");

      if (data.hasOwnProperty("eta_from_driver_to_pickup"))
        obj.etaFromDriverToPickup = ApiClient.convertToType(
          data["eta_from_driver_to_pickup"],
          "Number"
        );

      if (data.hasOwnProperty("vehicle"))
        obj.vehicle = ApiClient.convertToType(data["vehicle"], Vehicle);

      if (data.hasOwnProperty("plate_number"))
        obj.plateNumber = ApiClient.convertToType(
          data["plate_number"],
          "String"
        );

      if (data.hasOwnProperty("locations"))
        obj.locations = ApiClient.convertToType(data["locations"], [Location]);
    }
    return obj;
  };

  /**
   * @member {Number}
   */
  exports.prototype.id = undefined;
  /**
   * @member {Number} customerId
   */
  exports.prototype.customerId = undefined;
  /**
   * @member {Number} driverId
   */
  exports.prototype.driverId = undefined;
  /**
   * @member {<module:model/Driver>} driver
   */
  exports.prototype.driver = undefined;
  /**
   * @member {Number} vehicleTypeId
   */
  exports.prototype.vehicleTypeId = undefined;
  /**
   * @member {Number} companyId
   */
  exports.prototype.companyId = undefined;
  /**
   * Only accept now or schedule
   * @member {String} timeType
   */
  exports.prototype.timeType = undefined;
  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;
  /**
   * @member {String} note
   */
  exports.prototype.note = undefined;
  /**
   * @member {Number} totalFees
   */
  exports.prototype.totalFees = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype.currency = undefined;
  /**
   * @member {String} trackingUrl
   */
  exports.prototype.trackingUrl = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;
  /**
   * @member {Number} etaFromDriverToPickup
   */
  exports.prototype.etaFromDriverToPickup = undefined;
  /**
   * @member {module:model/Vehicle} vehicle
   */
  exports.prototype.vehicle = undefined;
  /**
   * @member {String} plateNumber
   */
  exports.prototype.plateNumber = undefined;
  /**
   * @member {{Array.<module:model/Location>}} locations
   */
  exports.prototype.locations = undefined;

  return exports;
});
