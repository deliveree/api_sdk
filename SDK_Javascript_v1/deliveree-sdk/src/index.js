/*
 * Deliveree SDK
 * With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *
 * Contact: duke@deliveree.com
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Delivery', './model/InlineResponse200', './model/InlineResponse2001', './model/InlineResponse2001Data', './model/Location', './model/PositionTracking', './model/Quote', './api/DelivereeApi'], factory);
  } else
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Delivery'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2001Data'), require('./model/Location'), require('./model/PositionTracking'), require('./model/Quote'), require('./api/DelivereeApi'));
  }
}(function(ApiClient, Delivery, InlineResponse200, InlineResponse2001, InlineResponse2001Data, Location, PositionTracking, Quote, DelivereeApi) {
  'use strict';
  /*
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Delivery model constructor.
     * @property {module:model/Delivery}
     */
    Delivery: Delivery,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2001Data model constructor.
     * @property {module:model/InlineResponse2001Data}
     */
    InlineResponse2001Data: InlineResponse2001Data,
    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location: Location,
    /**
     * The PositionTracking model constructor.
     * @property {module:model/PositionTracking}
     */
    PositionTracking: PositionTracking,
    /**
     * The Quote model constructor.
     * @property {module:model/Quote}
     */
    Quote: Quote,
    /**
     * The DelivereeApi service constructor.
     * @property {module:api/DelivereeApi}
     */
    DelivereeApi: DelivereeApi
  };

  return exports;
}));
