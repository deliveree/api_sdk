package sdk_java.sdk.model.domain;

import java.io.Serializable;
import java.util.Date;

import com.google.common.base.MoreObjects;

public class PositionTracking implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;
	private double latitude;
	private double longitude;
	private Date tracked_at;
	private String tracking_type;

	// Initializes a new instance
	public PositionTracking(Integer id, double latitude, double longitude, Date tracked_at, String tracking_type) {
		this.id = id;
		this.latitude = latitude;
		this.longitude = longitude;
		this.tracked_at = tracked_at;
		this.tracking_type = tracking_type;
	}

	// Gets and Sets
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public Date getTracked_at() {
		return tracked_at;
	}

	public void setTracked_at(Date tracked_at) {
		this.tracked_at = tracked_at;
	}

	public String getTracking_type() {
		return tracking_type;
	}

	public void setTracking_type(String tracking_type) {
		this.tracking_type = tracking_type;
	}

	// Returns the string presentation of the object
	// <returns>String presentation of the object</returns>
	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this).omitNullValues().add("class PositionTracking ", "{\n")
				.add("  Id: ", this.id).add("  Latitude: ", this.latitude).add("  Longitude: ", this.longitude)
				.add("  TrackedAt: ", this.tracked_at).add("  TrackingType: ", this.tracking_type).add("", "}\n")
				.toString();
	}

	// Gets the hash code
	// returns Hash code
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		long temp;
		temp = Double.doubleToLongBits(latitude);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(longitude);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((tracked_at == null) ? 0 : tracked_at.hashCode());
		result = prime * result + ((tracking_type == null) ? 0 : tracking_type.hashCode());
		return result;
	}

	/// Returns true if objects are equal
	/// <param name="input">Object to be compared</param>
	/// <returns>Boolean</returns>
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PositionTracking other = (PositionTracking) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (Double.doubleToLongBits(latitude) != Double.doubleToLongBits(other.latitude))
			return false;
		if (Double.doubleToLongBits(longitude) != Double.doubleToLongBits(other.longitude))
			return false;
		if (tracked_at == null) {
			if (other.tracked_at != null)
				return false;
		} else if (!tracked_at.equals(other.tracked_at))
			return false;
		if (tracking_type == null) {
			if (other.tracking_type != null)
				return false;
		} else if (!tracking_type.equals(other.tracking_type))
			return false;
		return true;
	}

}
