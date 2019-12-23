=begin
#Deliveree SDK

#With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
Contact: duke@deliveree.com
=end

require 'date'

module Deliveree
  class Delivery
    attr_accessor :vehicle_type_id

    attr_accessor :note

    attr_accessor :time_type

    attr_accessor :pickup_time

    attr_accessor :job_order_number

    attr_accessor :allow_parking_fees

    attr_accessor :allow_tolls_fees

    attr_accessor :allow_waiting_time_fees

    attr_accessor :fleet_partner_id

    attr_accessor :container_size

    attr_accessor :locations

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'vehicle_type_id' => :'vehicle_type_id',
        :'note' => :'note',
        :'time_type' => :'time_type',
        :'pickup_time' => :'pickup_time',
        :'job_order_number' => :'job_order_number',
        :'allow_parking_fees' => :'allow_parking_fees',
        :'allow_tolls_fees' => :'allow_tolls_fees',
        :'allow_waiting_time_fees' => :'allow_waiting_time_fees',
        :'fleet_partner_id' => :'fleet_partner_id',
        :'container_size' => :'container_size',
        :'locations' => :'locations'
      }
    end

    # Attribute type mapping.
    def self.delivery_types
      {
        :'vehicle_type_id' => :'Integer',
        :'note' => :'String',
        :'time_type' => :'String',
        :'pickup_time' => :'DateTime',
        :'job_order_number' => :'String',
        :'allow_parking_fees' => :'BOOLEAN',
        :'allow_tolls_fees' => :'BOOLEAN',
        :'allow_waiting_time_fees' => :'BOOLEAN',
        :'fleet_partner_id' => :'Integer',
        :'container_size' => :'String',
        :'locations' => :'Array<Location>'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }
      # To make sure attribute mandatory
      self.vehicle_type_id = attributes[:'vehicle_type_id']
      self.time_type = attributes[:'time_type']

      if attributes.has_key?(:'note')
        self.note = attributes[:'note']
      end

      if attributes.has_key?(:'pickup_time')
        self.pickup_time = attributes[:'pickup_time']
      end

      if attributes.has_key?(:'job_order_number')
        self.job_order_number = attributes[:'job_order_number']
      end

      if attributes.has_key?(:'allow_parking_fees')
        self.allow_parking_fees = attributes[:'allow_parking_fees']
      end

      if attributes.has_key?(:'allow_tolls_fees')
        self.allow_tolls_fees = attributes[:'allow_tolls_fees']
      end

      if attributes.has_key?(:'allow_waiting_time_fees')
        self.allow_waiting_time_fees = attributes[:'allow_waiting_time_fees']
      end

      if attributes.has_key?(:'fleet_partner_id')
        self.fleet_partner_id = attributes[:'fleet_partner_id']
      end

      if attributes.has_key?(:'container_size')
        self.container_size = attributes[:'container_size']
      end

      if attributes.has_key?(:'locations')
        if (value = attributes[:'locations']).is_a?(Array)
          self.locations = value
        end
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = []
      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          vehicle_type_id == o.vehicle_type_id &&
          note == o.note &&
          time_type == o.time_type &&
          pickup_time == o.pickup_time &&
          job_order_number == o.job_order_number &&
          allow_parking_fees == o.allow_parking_fees &&
          allow_tolls_fees == o.allow_tolls_fees &&
          allow_waiting_time_fees == o.allow_waiting_time_fees &&
          fleet_partner_id == o.fleet_partner_id &&
          container_size == o.container_size &&
          locations == o.locations
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [vehicle_type_id, note, time_type, pickup_time, job_order_number, allow_parking_fees, allow_tolls_fees, allow_waiting_time_fees, fleet_partner_id, container_size, locations].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.delivery_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :DateTime
        DateTime.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :BOOLEAN
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        temp_model = Deliveree.const_get(type).new
        temp_model.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        next if value.nil?
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end
  end
end
