package sdk_java.sdk.model.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.google.common.base.MoreObjects;

public class Delivery implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer vehicle_type_id;
	private String note;
	private String time_type;
	private Date pickup_time;
	private String job_order_number;
	private boolean allow_parking_fees;
	private boolean allow_tolls_fees;
	private boolean allow_waiting_time_fees;
	private Integer fleet_partner_id;
	private String container_size;
	private List<Location> locations;

	// Initializes a new instance
	public Delivery(Integer vehicle_type_id, String note, String time_type, Date pickup_time, String job_order_number,
			boolean allow_parking_fees, boolean allow_tolls_fees, boolean allow_waiting_time_fees,
			Integer fleet_partner_id, String container_size, List<Location> locations) {
		this.vehicle_type_id = vehicle_type_id;
		this.note = note;
		this.time_type = time_type;
		this.pickup_time = pickup_time;
		this.job_order_number = job_order_number;
		this.allow_parking_fees = allow_parking_fees;
		this.allow_tolls_fees = allow_tolls_fees;
		this.allow_waiting_time_fees = allow_waiting_time_fees;
		this.fleet_partner_id = fleet_partner_id;
		this.container_size = container_size;
		this.locations = locations;
	}

	// Gets and Sets
	public List<Location> getLocations() {
		return locations;
	}

	public Integer getVehicle_type_id() {
		return vehicle_type_id;
	}

	public void setVehicle_type_id(Integer vehicle_type_id) {
		this.vehicle_type_id = vehicle_type_id;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getTime_type() {
		return time_type;
	}

	public void setTime_type(String time_type) {
		this.time_type = time_type;
	}

	public Date getPickup_time() {
		return pickup_time;
	}

	public void setPickup_time(Date pickup_time) {
		this.pickup_time = pickup_time;
	}

	public String getJob_order_number() {
		return job_order_number;
	}

	public void setJob_order_number(String job_order_number) {
		this.job_order_number = job_order_number;
	}

	public boolean isAllow_parking_fees() {
		return allow_parking_fees;
	}

	public void setAllow_parking_fees(boolean allow_parking_fees) {
		this.allow_parking_fees = allow_parking_fees;
	}

	public boolean isAllow_tolls_fees() {
		return allow_tolls_fees;
	}

	public void setAllow_tolls_fees(boolean allow_tolls_fees) {
		this.allow_tolls_fees = allow_tolls_fees;
	}

	public boolean isAllow_waiting_time_fees() {
		return allow_waiting_time_fees;
	}

	public void setAllow_waiting_time_fees(boolean allow_waiting_timeFees) {
		this.allow_waiting_time_fees = allow_waiting_timeFees;
	}

	public Integer getFleet_partner_id() {
		return fleet_partner_id;
	}

	public void setFleet_partner_id(Integer fleet_partner_id) {
		this.fleet_partner_id = fleet_partner_id;
	}

	public String getContainer_size() {
		return container_size;
	}

	public void setContainer_size(String container_size) {
		this.container_size = container_size;
	}

	public void setLocations(List<Location> locations) {
		this.locations = locations;
	}

	// Returns the string presentation of the object
	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this).omitNullValues().add("class Delivery ", "{\n")
				.add("  VehicleTypeId: ", this.vehicle_type_id).add("  Note: ", this.note)
				.add("  TimeType: ", this.time_type).add("  PickupTime: ", this.pickup_time)
				.add("  JobOrderNumber: ", this.job_order_number).add("  AllowParkingFees: ", this.allow_parking_fees)
				.add("  AllowTollsFees: ", this.allow_tolls_fees)
				.add("  AllowWaitingTimeFees: ", this.allow_waiting_time_fees)
				.add("  FleetPartnerId: ", this.fleet_partner_id).add("  ContainerSize: ", this.container_size)
				.add("  Locations: ", locations).add("", "}\n").toString();
	}

	// Gets the hash code
	// returns Hash code
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (allow_parking_fees ? 1231 : 1237);
		result = prime * result + (allow_tolls_fees ? 1231 : 1237);
		result = prime * result + (allow_waiting_time_fees ? 1231 : 1237);
		result = prime * result + ((container_size == null) ? 0 : container_size.hashCode());
		result = prime * result + ((fleet_partner_id == null) ? 0 : fleet_partner_id.hashCode());
		result = prime * result + ((job_order_number == null) ? 0 : job_order_number.hashCode());
		result = prime * result + ((locations == null) ? 0 : locations.hashCode());
		result = prime * result + ((note == null) ? 0 : note.hashCode());
		result = prime * result + ((pickup_time == null) ? 0 : pickup_time.hashCode());
		result = prime * result + ((time_type == null) ? 0 : time_type.hashCode());
		result = prime * result + ((vehicle_type_id == null) ? 0 : vehicle_type_id.hashCode());
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
		Delivery other = (Delivery) obj;
		if (allow_parking_fees != other.allow_parking_fees)
			return false;
		if (allow_tolls_fees != other.allow_tolls_fees)
			return false;
		if (allow_waiting_time_fees != other.allow_waiting_time_fees)
			return false;
		if (container_size == null) {
			if (other.container_size != null)
				return false;
		} else if (!container_size.equals(other.container_size))
			return false;
		if (fleet_partner_id == null) {
			if (other.fleet_partner_id != null)
				return false;
		} else if (!fleet_partner_id.equals(other.fleet_partner_id))
			return false;
		if (job_order_number == null) {
			if (other.job_order_number != null)
				return false;
		} else if (!job_order_number.equals(other.job_order_number))
			return false;
		if (locations == null) {
			if (other.locations != null)
				return false;
		} else if (!locations.equals(other.locations))
			return false;
		if (note == null) {
			if (other.note != null)
				return false;
		} else if (!note.equals(other.note))
			return false;
		if (pickup_time == null) {
			if (other.pickup_time != null)
				return false;
		} else if (!pickup_time.equals(other.pickup_time))
			return false;
		if (time_type == null) {
			if (other.time_type != null)
				return false;
		} else if (!time_type.equals(other.time_type))
			return false;
		if (vehicle_type_id == null) {
			if (other.vehicle_type_id != null)
				return false;
		} else if (!vehicle_type_id.equals(other.vehicle_type_id))
			return false;
		return true;
	}

}
