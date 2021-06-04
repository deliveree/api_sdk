/*
 * Deliveree SDK
 * With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *
 * Contact: duke@deliveree.com
 *
 */

(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      "./ApiClient",
      "./model/CreateDeliveryResponse",
      "./model/QuoteResponse",
      "./model/QuoteResponseData",
      "./model/Location",
      "./model/PositionTracking",
      "./model/Driver",
      "./model/DeliveryResponse",
      "./model/Pagination",
      "./model/DeliveryResponseList",
      "./model/ProofOfDeliveryPhoto",
      "./model/VehicleAttribute",
      "./model/Vehicle",
      "./model/VehicleTypeResponse",
      "./model/VehicleTypeResponseList",
      "./api/DelivereeApi",
    ], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("./ApiClient"),
      require("./model/CreateDeliveryResponse"),
      require("./model/QuoteResponse"),
      require("./model/QuoteResponseData"),
      require("./model/Location"),
      require("./model/PositionTracking"),
      require("./model/Driver"),
      require("./model/DeliveryResponse"),
      require("./model/Pagination"),
      require("./model/ProofOfDeliveryPhoto"),
      require("./model/VehicleAttribute"),
      require("./model/Vehicle"),
      require("./model/DeliveryResponseList"),
      require("./model/VehicleTypeResponse"),
      require("./model/VehicleTypeResponseList"),
      require("./api/DelivereeApi")
    );
  }
})(function (
  ApiClient,
  CreateDeliveryResponse,
  QuoteResponse,
  QuoteResponseData,
  Location,
  PositionTracking,
  Driver,
  DeliveryResponse,
  Pagination,
  ProofOfDeliveryPhoto,
  VehicleAttribute,
  Vehicle,
  DeliveryResponseList,
  VehicleTypeResponse,
  VehicleTypeResponseList,
  DelivereeApi
) {
  "use strict";
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
     * The CreateDeliveryResponse model constructor.
     * @property {module:model/CreateDeliveryResponse}
     */
    CreateDeliveryResponse: CreateDeliveryResponse,
    /**
     * The QuoteResponse model constructor.
     * @property {module:model/QuoteResponse}
     */
    QuoteResponse: QuoteResponse,
    /**
     * The QuoteResponseData model constructor.
     * @property {module:model/QuoteResponseData}
     */
    QuoteResponseData: QuoteResponseData,
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
     * The Driver model constructor.
     * @property {module:model/Driver}
     */
    Driver: Driver,
    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The ProofOfDeliveryPhoto model constructor.
     * @property {module:model/ProofOfDeliveryPhoto}
     */
    ProofOfDeliveryPhoto: ProofOfDeliveryPhoto,
    /**
     * The VehicleAttribute model constructor.
     * @property {module:model/VehicleAttribute}
     */
    VehicleAttribute: VehicleAttribute,
    /**
     * The Vehicle model constructor.
     * @property {module:model/Vehicle}
     */
    Vehicle: Vehicle,
    /**
     * The DeliveryResponseList model constructor.
     * @property {module:model/DeliveryResponseList}
     */
    DeliveryResponseList: DeliveryResponseList,
    /**
     * The DeliveryResponse model constructor.
     * @property {module:model/DeliveryResponse}
     */
    DeliveryResponse: DeliveryResponse,
    /**
     * The VehicleTypeResponse model constructor.
     * @property {module:model/VehicleTypeResponse}
     */
    VehicleTypeResponse: VehicleTypeResponse,
    /**
     * The VehicleTypeResponseList model constructor.
     * @property {module:model/VehicleTypeResponseList}
     */
    VehicleTypeResponseList: VehicleTypeResponseList,
    /**
     * The DelivereeApi service constructor.
     * @property {module:api/DelivereeApi}
     */
    DelivereeApi: DelivereeApi,
  };

  return exports;
});
