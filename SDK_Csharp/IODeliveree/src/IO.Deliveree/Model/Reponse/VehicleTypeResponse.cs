using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IO.Deliveree.Model.Reponse
{
    [DataContract]
    public class VehicleTypeResponse
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }
        [DataMember(Name = "name")]
        public string Name { get; set; }
        [DataMember(Name = "cargo_length")]
        public float? CargoLength { get; set; }
        [DataMember(Name = "cargo_height")]
        public float? CargoHeight { get; set; }
        [DataMember(Name = "cargo_width")]
        public float? CargoWidth { get; set; }
        [DataMember(Name = "cargo_weight")]
        public float? CargoWeight { get; set; }
        [DataMember(Name = "cargo_cubic_meter")]
        public float? CargoCubicMeter { get; set; }
    }
    [DataContract]
    public class VehicleTypeResponses
    {
        [DataMember(Name = "data")]
        public List<VehicleTypeResponse> Data { get; set; }
    }
}
