/*
 * Deliveree SDK
 * With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *
 * Contact: duke@deliveree.com
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.PositionTracking = factory(root.DelivereeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PositionTracking model module.
   * @module model/PositionTracking
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PositionTracking</code>.
   * @alias module:model/PositionTracking
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PositionTracking</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PositionTracking} obj Optional instance to populate.
   * @return {module:model/PositionTracking} The populated <code>PositionTracking</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('latitude'))
        obj.latitude = ApiClient.convertToType(data['latitude'], 'Number');
      if (data.hasOwnProperty('longitude'))
        obj.longitude = ApiClient.convertToType(data['longitude'], 'Number');
      if (data.hasOwnProperty('tracked_at'))
        obj.trackedAt = ApiClient.convertToType(data['tracked_at'], 'Date');
      if (data.hasOwnProperty('tracking_type'))
        obj.trackingType = ApiClient.convertToType(data['tracking_type'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} latitude
   */
  exports.prototype.latitude = undefined;

  /**
   * @member {Number} longitude
   */
  exports.prototype.longitude = undefined;

  /**
   * @member {Date} trackedAt
   */
  exports.prototype.trackedAt = undefined;

  /**
   * @member {String} trackingType
   */
  exports.prototype.trackingType = undefined;

  return exports;

}));
