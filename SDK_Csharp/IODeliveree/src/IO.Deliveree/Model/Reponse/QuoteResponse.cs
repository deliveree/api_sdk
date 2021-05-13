using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IO.Deliveree.Model.Reponse
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum TimeType
    {
        [EnumMember(Value = "now")]
        Now = 1,
        [EnumMember(Value = "schedule")]
        Schedule
    }

    [DataContract]
    public class QuoteResponse
    {
        [DataMember(Name = "vehicle_type_id")]
        public int VehicleTypeId { get; set; }
        [DataMember(Name = "vehicle_type_name")]
        public string VehicleTypeName { get; set; }
        [DataMember(Name = "time_type")]
        public TimeType TimeType { get; set; }
        [DataMember(Name = "total_fees")]
        public string TotalFees { get; set; }
        [DataMember(Name = "currency")]
        public string Currency { get; set; }
        [DataMember(Name = "total_distance")]
        public float TotalDistance { get; set; }
        [DataMember(Name = "vehicle_type")]
        public VehicleTypeReponse VehicleType { get; set; }
    }
    [DataContract]
    public class QuoteResponses
    {
        [DataMember(Name = "data")]
        public List<QuoteResponse> Data { get; set; }
    }
}
