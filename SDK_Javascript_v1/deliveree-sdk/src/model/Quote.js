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
    define(['../ApiClient', './Location'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Location'));
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.Quote = factory(root.DelivereeApi.ApiClient, root.DelivereeApi.Location);
  }
}(this, function(ApiClient, Location) {
  'use strict';

  /**
   * The Quote model module.
   * @module model/Quote
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Quote</code>.
   * @alias module:model/Quote
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Quote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Quote} obj Optional instance to populate.
   * @return {module:model/Quote} The populated <code>Quote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('time_type'))
        obj.timeType = ApiClient.convertToType(data['time_type'], 'String');
      if (data.hasOwnProperty('locations'))
        obj.locations = ApiClient.convertToType(data['locations'], [Location]);
    }
    return obj;
  }

  /**
   * Only accept now or schedule
   * @member {String} timeType
   */
  exports.prototype.timeType = undefined;

  /**
   * @member {Array.<module:model/Location>} locations
   */
  exports.prototype.locations = undefined;

  return exports;

}));
