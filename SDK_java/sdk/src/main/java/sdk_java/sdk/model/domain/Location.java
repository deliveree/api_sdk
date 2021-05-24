package sdk_java.sdk.model.domain;

import java.io.Serializable;
import java.util.List;

import com.google.common.base.MoreObjects;

public class Location implements Serializable {
	private static final long serialVersionUID = 1L;

	private String address;
	private double latitude;
	private double longitude;
	private String recipient_name;
	private String recipient_phone;
	private String note;
	private boolean need_cod;
	private String cod_note;
	private double cod_invoice_fees;
	private boolean need_pod;
	private String pod_note;
	private List<PositionTracking> position_trackings;

	// Initializes a new instance
	public Location(String address, double latitude, double longitude, String recipient_name, String recipient_phone,
			String note, boolean need_cod, String cod_note, double cod_invoice_fees, boolean need_pod, String pod_note,
			List<PositionTracking> position_trackings) {
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.recipient_name = recipient_name;
		this.recipient_phone = recipient_phone;
		this.note = note;
		this.need_cod = need_cod;
		this.cod_note = cod_note;
		this.cod_invoice_fees = cod_invoice_fees;
		this.need_pod = need_pod;
		this.pod_note = pod_note;
		this.position_trackings = position_trackings;
	}

	// Gets and Sets
	public String getAddress() {
		return address;
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

	public String getRecipient_name() {
		return recipient_name;
	}

	public void setRecipient_name(String recipient_name) {
		this.recipient_name = recipient_name;
	}

	public String getRecipient_phone() {
		return recipient_phone;
	}

	public void setRecipient_phone(String recipient_phone) {
		this.recipient_phone = recipient_phone;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public boolean isNeed_cod() {
		return need_cod;
	}

	public void setNeed_cod(boolean need_cod) {
		this.need_cod = need_cod;
	}

	public String getCod_note() {
		return cod_note;
	}

	public void setCod_note(String cod_note) {
		this.cod_note = cod_note;
	}

	public double getCod_invoice_fees() {
		return cod_invoice_fees;
	}

	public void setCod_invoice_fees(double cod_invoice_fees) {
		this.cod_invoice_fees = cod_invoice_fees;
	}

	public boolean isNeed_pod() {
		return need_pod;
	}

	public void setNeed_pod(boolean need_pod) {
		this.need_pod = need_pod;
	}

	public String getPod_note() {
		return pod_note;
	}

	public void setPod_note(String pod_note) {
		this.pod_note = pod_note;
	}

	public List<PositionTracking> getPosition_trackings() {
		return position_trackings;
	}

	public void setPosition_trackings(List<PositionTracking> position_trackings) {
		this.position_trackings = position_trackings;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	// Returns the string presentation of the object
	// <returns>String presentation of the object</returns>
	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this).omitNullValues().add("class Location ", "{\n")
				.add("  Address: ", this.address).add("  Latitude: ", latitude).add("  Longitude: ", this.longitude)
				.add("  RecipientName: ", this.recipient_name).add("  RecipientPhone: ", this.recipient_phone)
				.add("  Note: ", this.note).add("  NeedCod: ", this.need_cod).add("  CodNote: ", this.cod_note)
				.add("  CodInvoiceFees: ", this.cod_invoice_fees).add("  NeedPod: ", this.need_pod)
				.add("  PodNote: ", this.pod_note).add("  PositionTrackings: ", this.position_trackings).add("", "}\n")
				.toString();
	}

	// Gets the hash code
	// <returns>Hash code</returns>
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((address == null) ? 0 : address.hashCode());
		long temp;
		temp = Double.doubleToLongBits(cod_invoice_fees);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((cod_note == null) ? 0 : cod_note.hashCode());
		temp = Double.doubleToLongBits(latitude);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(longitude);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + (need_cod ? 1231 : 1237);
		result = prime * result + (need_pod ? 1231 : 1237);
		result = prime * result + ((note == null) ? 0 : note.hashCode());
		result = prime * result + ((pod_note == null) ? 0 : pod_note.hashCode());
		result = prime * result + ((position_trackings == null) ? 0 : position_trackings.hashCode());
		result = prime * result + ((recipient_name == null) ? 0 : recipient_name.hashCode());
		result = prime * result + ((recipient_phone == null) ? 0 : recipient_phone.hashCode());
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
		Location other = (Location) obj;
		if (address == null) {
			if (other.address != null)
				return false;
		} else if (!address.equals(other.address))
			return false;
		if (Double.doubleToLongBits(cod_invoice_fees) != Double.doubleToLongBits(other.cod_invoice_fees))
			return false;
		if (cod_note == null) {
			if (other.cod_note != null)
				return false;
		} else if (!cod_note.equals(other.cod_note))
			return false;
		if (Double.doubleToLongBits(latitude) != Double.doubleToLongBits(other.latitude))
			return false;
		if (Double.doubleToLongBits(longitude) != Double.doubleToLongBits(other.longitude))
			return false;
		if (need_cod != other.need_cod)
			return false;
		if (need_pod != other.need_pod)
			return false;
		if (note == null) {
			if (other.note != null)
				return false;
		} else if (!note.equals(other.note))
			return false;
		if (pod_note == null) {
			if (other.pod_note != null)
				return false;
		} else if (!pod_note.equals(other.pod_note))
			return false;
		if (position_trackings == null) {
			if (other.position_trackings != null)
				return false;
		} else if (!position_trackings.equals(other.position_trackings))
			return false;
		if (recipient_name == null) {
			if (other.recipient_name != null)
				return false;
		} else if (!recipient_name.equals(other.recipient_name))
			return false;
		if (recipient_phone == null) {
			if (other.recipient_phone != null)
				return false;
		} else if (!recipient_phone.equals(other.recipient_phone))
			return false;
		return true;
	}

}
