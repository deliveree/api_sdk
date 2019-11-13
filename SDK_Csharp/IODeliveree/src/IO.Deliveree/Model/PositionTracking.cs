/* 
 * Deliveree API
 *
 * With Deliveree API, developers can integrate our on-demand local delivery platform into their applications. The API is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *
 * 
 * Contact: duke@deliveree.com
 * Generated by: https://deliveree.com
 */
using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using IDateTimeConverter = IO.Deliveree.Client.IDateTimeConverter;

namespace IO.Deliveree.Model
{
    /// <summary>
    /// PositionTracking
    /// </summary>
    [DataContract]
    public partial class PositionTracking : IEquatable<PositionTracking>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PositionTracking" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="latitude">latitude.</param>
        /// <param name="longitude">longitude.</param>
        /// <param name="trackedAt">trackedAt.</param>
        /// <param name="trackingType">trackingType.</param>
        public PositionTracking(int? id = default(int?), double? latitude = default(double?), double? longitude = default(double?), DateTime? trackedAt = default(DateTime?), string trackingType = default(string))
        {
            this.Id = id;
            this.Latitude = latitude;
            this.Longitude = longitude;
            this.TrackedAt = trackedAt;
            this.TrackingType = trackingType;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public int? Id { get; set; }

        /// <summary>
        /// Gets or Sets Latitude
        /// </summary>
        [DataMember(Name = "latitude", EmitDefaultValue = false)]
        public double? Latitude { get; set; }

        /// <summary>
        /// Gets or Sets Longitude
        /// </summary>
        [DataMember(Name = "longitude", EmitDefaultValue = false)]
        public double? Longitude { get; set; }

        /// <summary>
        /// Gets or Sets TrackedAt
        /// </summary>
        [DataMember(Name = "tracked_at", EmitDefaultValue = false)]
        public DateTime? TrackedAt { get; set; }

        /// <summary>
        /// Gets or Sets TrackingType
        /// </summary>
        [DataMember(Name = "tracking_type", EmitDefaultValue = false)]
        public string TrackingType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PositionTracking {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Latitude: ").Append(Latitude).Append("\n");
            sb.Append("  Longitude: ").Append(Longitude).Append("\n");
            sb.Append("  TrackedAt: ").Append(TrackedAt).Append("\n");
            sb.Append("  TrackingType: ").Append(TrackingType).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as PositionTracking);
        }

        /// <summary>
        /// Returns true if PositionTracking instances are equal
        /// </summary>
        /// <param name="input">Instance of PositionTracking to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PositionTracking input)
        {
            if (input == null)
                return false;

            return
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) &&
                (
                    this.Latitude == input.Latitude ||
                    (this.Latitude != null &&
                    this.Latitude.Equals(input.Latitude))
                ) &&
                (
                    this.Longitude == input.Longitude ||
                    (this.Longitude != null &&
                    this.Longitude.Equals(input.Longitude))
                ) &&
                (
                    this.TrackedAt == input.TrackedAt ||
                    (this.TrackedAt != null &&
                    this.TrackedAt.Equals(input.TrackedAt))
                ) &&
                (
                    this.TrackingType == input.TrackingType ||
                    (this.TrackingType != null &&
                    this.TrackingType.Equals(input.TrackingType))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Latitude != null)
                    hashCode = hashCode * 59 + this.Latitude.GetHashCode();
                if (this.Longitude != null)
                    hashCode = hashCode * 59 + this.Longitude.GetHashCode();
                if (this.TrackedAt != null)
                    hashCode = hashCode * 59 + this.TrackedAt.GetHashCode();
                if (this.TrackingType != null)
                    hashCode = hashCode * 59 + this.TrackingType.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }
}
