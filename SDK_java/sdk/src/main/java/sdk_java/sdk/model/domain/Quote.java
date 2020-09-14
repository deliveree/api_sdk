package sdk_java.sdk.model.domain;

import java.io.Serializable;
import java.util.List;

import com.google.common.base.MoreObjects;

public class Quote implements Serializable {

	private static final long serialVersionUID = 1L;

	private String time_type;
	private List<Location> locations;

	// Initializes a new instance
	public Quote(String time_type, List<Location> locations) {
		this.time_type = time_type;
		this.locations = locations;
	}

	// Gets and Sets
	public String getTime_type() {
		return time_type;
	}

	public void setTime_type(String time_type) {
		this.time_type = time_type;
	}

	public List<Location> getLocations() {
		return locations;
	}

	public void setLocations(List<Location> locations) {
		this.locations = locations;
	}

	// Returns the string presentation of the object
	// <returns>String presentation of the object</returns>
	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this).omitNullValues().add("class Quote ", "{\n")
				.add("  TimeType: ", this.time_type).add("  Locations: ", this.locations).add("", "}\n").toString();
	}

	// Gets the hash code
	// <returns>Hash code</returns>
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((locations == null) ? 0 : locations.hashCode());
		result = prime * result + ((time_type == null) ? 0 : time_type.hashCode());
		return result;
	}

	// Returns true if objects are equal
	// <param name="input">Object to be compared</param>
	// <returns>Boolean</returns>
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Quote other = (Quote) obj;
		if (locations == null) {
			if (other.locations != null)
				return false;
		} else if (!locations.equals(other.locations))
			return false;
		if (time_type == null) {
			if (other.time_type != null)
				return false;
		} else if (!time_type.equals(other.time_type))
			return false;
		return true;
	}

}