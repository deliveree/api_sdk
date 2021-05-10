using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IO.Deliveree.Model.Reponse
{

    [DataContract]
    public class Pagination
    {
        [DataMember(Name = "total_count")]
        public int TotalCount { get; set; }
        [DataMember(Name = "per_page")]
        public int PerPage { get; set; }
        [DataMember(Name = "next_page")]
        public string NextPage { get; set; }
        [DataMember(Name = "previous_page")]
        public string PreviousPage { get; set; }
    }
    [DataContract]
    public class ListDeliveryResponse
    {
        [DataMember(Name = "data")]
        public List<DeliveryResponse> Data { get; set; }
        [DataMember(Name = "pagination")]
        public Pagination Pagination { get; set; }
    }
}
