using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IO.Deliveree.Model.Reponse
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum Status
    {
        [EnumMember(Value = "locating_driver")]
        LocatingDriver = 1,
        [EnumMember(Value = "locating_driver_timeout")]
        LocatingDriverTimeout,
        [EnumMember(Value = "driver_accept_booking")]
        DriverAcceptBooking,
        [EnumMember(Value = "delivery_in_progress")]
        DeliveryInProgress,
        [EnumMember(Value = "delivery_completed")]
        DeliveryCompleted,
        [EnumMember(Value = "undeliverable")]
        UnDeliverable,
        [EnumMember(Value = "canceled")]
        Canceled,
        [EnumMember(Value = "cs_finding_driver")]
        CSFindingDriver
    }
    [JsonConverter(typeof(StringEnumConverter))]
    public enum TrackingType
    {
        [EnumMember(Value = "location_stuffing")]
        LocationStuffing = 1,
        [EnumMember(Value = "location_have_arrived")]
        LocationHave_arrived,
        [EnumMember(Value = "location_accept_delivery")]
        LocationAcceptDelivery,
        [EnumMember(Value = "location_inside_radius")]
        LocationInside_Radius,
        [EnumMember(Value = "location_outside_radius")]
        LocationOutside_radius
    }
    [DataContract]
    public class DriverResponse
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }
        [DataMember(Name = "name")]
        public string Name { get; set; }
        [DataMember(Name = "phone")]
        public string Phone { get; set; }
        [DataMember(Name = "driver_image_url")]
        public string DriverImageUrl { get; set; }
        [DataMember(Name = "last_known_position_lat")]
        public float? LastKnownPositionLat { get; set; }
        [DataMember(Name = "last_known_position_lng")]
        public int? LastKnownPositionLng { get; set; }
    }

    [DataContract]
    public class VehicleResponse
    {
        [DataMember(Name = "vehicle_attributes")]
        public VehicleAttributes VehicleAttributes { get; set; }
    }
    [DataContract]
    public class VehicleAttributes
    {
        [DataMember(Name = "plate_number")]
        public string PlateNumber { get; set; }

    }
    [DataContract]
    public class LocationReponse
    {
        [DataMember(Name = "id")]
        public string Id { get; set; }
        [DataMember(Name = "Name")]
        public string Name { get; set; }
        [DataMember(Name = "driver_note")]
        public string DriverNote { get; set; }
        [DataMember(Name = "recipient_name")]
        public string RecipientName { get; set; }
        [DataMember(Name = "position_trackings")]
        public List<PositionTrackingResponse> PositionTrackings { get; set; }
    }
    [DataContract]
    public class PositionTrackingResponse
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }
        [DataMember(Name = "latitude")]
        public float Latitude { get; set; }
        [DataMember(Name = "longitude")]
        public float Longitude { get; set; }
        [DataMember(Name = "tracked_at")]
        public DateTime TrackedAt { get; set; }
        [DataMember(Name = "tracking_type")]
        public TrackingType TrackingType { get; set; }
    }
    [DataContract]
    public class DeliveryResponse
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }
        [DataMember(Name = "customer_id")]
        public int? CustomerId { get; set; }
        [DataMember(Name = "driver_id")]
        public int? DriverId { get; set; }
        [DataMember(Name = "vehicle_type_id")]
        public int? VehicleTypeId { get; set; }
        [DataMember(Name = "company_id")]
        public int? CompanyId { get; set; }
        [DataMember(Name = "time_type")]
        public TimeType TimeType { get; set; }
        [DataMember(Name = "status")]
        public Status Status { get; set; }
        [DataMember(Name = "note")]
        public string Note { get; set; }
        [DataMember(Name = "total_fees")]
        public float TotalFees { get; set; }
        [DataMember(Name = "currency")]
        public string Currency { get; set; }
        [DataMember(Name = "tracking_url")]
        public string TrackingUrl { get; set; }
        [DataMember(Name = "job_order_number")]
        public string JobOrderNumber { get; set; }
        [DataMember(Name = "eta_from_driver_to_pickup")]
        public int? EtaFromDriverToPickup { get; set; }
        [DataMember(Name = "distance_from_driver_to_pickup")]
        public float? DistanceFromDriverToPickup { get; set; }
        [DataMember(Name = "created_at")]
        public DateTime? CreatedAt { get; set; }
        [DataMember(Name = "pickup_time")]
        public DateTime? PickupTime { get; set; }
        [DataMember(Name = "completed_at")]
        public DateTime? CompletedAt { get; set; }
        [DataMember(Name = "driver")]
        public DriverResponse Driver { get; set; }
        [DataMember(Name = "vehicle")]
        public VehicleResponse Vehicle { get; set; }
        [DataMember(Name = "locations")]
        public List<LocationReponse> Locations { get; set; }
    }
}
