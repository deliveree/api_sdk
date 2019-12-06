=begin
#Deliveree SDK
#With Deliveree API, developers can integrate our on-demand local delivery platform into their applications. The API is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
Contact: duke@deliveree.com
=end

require 'date'

module Deliveree
  class ResponseDefault
    attr_accessor :id

    attr_accessor :customer_id

    attr_accessor :driver_id

    attr_accessor :vehicle_type_id

    attr_accessor :company_id

    # Only accept now or schedule
    attr_accessor :time_type

    attr_accessor :status

    attr_accessor :note

    attr_accessor :total_fees

    attr_accessor :currency

    attr_accessor :tracking_url

    attr_accessor :job_order_number

    attr_accessor :created_at

    attr_accessor :eta_from_driver_to_pickup

    attr_accessor :distance_from_driver_to_pickup

    attr_accessor :pickup_time

    attr_accessor :locations

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'id' => :'id',
        :'customer_id' => :'customer_id',
        :'driver_id' => :'driver_id',
        :'vehicle_type_id' => :'vehicle_type_id',
        :'company_id' => :'company_id',
        :'time_type' => :'time_type',
        :'status' => :'status',
        :'note' => :'note',
        :'total_fees' => :'total_fees',
        :'currency' => :'currency',
        :'tracking_url' => :'tracking_url',
        :'job_order_number' => :'job_order_number',
        :'created_at' => :'created_at',
        :'eta_from_driver_to_pickup' => :'eta_from_driver_to_pickup',
        :'distance_from_driver_to_pickup' => :'distance_from_driver_to_pickup',
        :'pickup_time' => :'pickup_time',
        :'locations' => :'locations'
      }
    end

    # Attribute type mapping.
    def self.attribute_types
      {
        :'id' => :'Integer',
        :'customer_id' => :'Integer',
        :'driver_id' => :'Integer',
        :'vehicle_type_id' => :'Integer',
        :'company_id' => :'Integer',
        :'time_type' => :'String',
        :'status' => :'String',
        :'note' => :'String',
        :'total_fees' => :'Float',
        :'currency' => :'String',
        :'tracking_url' => :'String',
        :'job_order_number' => :'String',
        :'created_at' => :'DateTime',
        :'eta_from_driver_to_pickup' => :'Integer',
        :'distance_from_driver_to_pickup' => :'Float',
        :'pickup_time' => :'DateTime',
        :'locations' => :'Array<Location>'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'customer_id')
        self.customer_id = attributes[:'customer_id']
      end

      if attributes.has_key?(:'driver_id')
        self.driver_id = attributes[:'driver_id']
      end

      if attributes.has_key?(:'vehicle_type_id')
        self.vehicle_type_id = attributes[:'vehicle_type_id']
      end

      if attributes.has_key?(:'company_id')
        self.company_id = attributes[:'company_id']
      end

      if attributes.has_key?(:'time_type')
        self.time_type = attributes[:'time_type']
      end

      if attributes.has_key?(:'status')
        self.status = attributes[:'status']
      end

      if attributes.has_key?(:'note')
        self.note = attributes[:'note']
      end

      if attributes.has_key?(:'total_fees')
        self.total_fees = attributes[:'total_fees']
      end

      if attributes.has_key?(:'currency')
        self.currency = attributes[:'currency']
      end

      if attributes.has_key?(:'tracking_url')
        self.tracking_url = attributes[:'tracking_url']
      end

      if attributes.has_key?(:'job_order_number')
        self.job_order_number = attributes[:'job_order_number']
      end

      if attributes.has_key?(:'created_at')
        self.created_at = attributes[:'created_at']
      end

      if attributes.has_key?(:'eta_from_driver_to_pickup')
        self.eta_from_driver_to_pickup = attributes[:'eta_from_driver_to_pickup']
      end

      if attributes.has_key?(:'distance_from_driver_to_pickup')
        self.distance_from_driver_to_pickup = attributes[:'distance_from_driver_to_pickup']
      end

      if attributes.has_key?(:'pickup_time')
        self.pickup_time = attributes[:'pickup_time']
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
      invalid_properties = Array.new
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
          id == o.id &&
          customer_id == o.customer_id &&
          driver_id == o.driver_id &&
          vehicle_type_id == o.vehicle_type_id &&
          company_id == o.company_id &&
          time_type == o.time_type &&
          status == o.status &&
          note == o.note &&
          total_fees == o.total_fees &&
          currency == o.currency &&
          tracking_url == o.tracking_url &&
          job_order_number == o.job_order_number &&
          created_at == o.created_at &&
          eta_from_driver_to_pickup == o.eta_from_driver_to_pickup &&
          distance_from_driver_to_pickup == o.distance_from_driver_to_pickup &&
          pickup_time == o.pickup_time &&
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
      [id, customer_id, driver_id, vehicle_type_id, company_id, time_type, status, note, total_fees, currency, tracking_url, job_order_number, created_at, eta_from_driver_to_pickup, distance_from_driver_to_pickup, pickup_time, locations].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.attribute_types.each_pair do |key, type|
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
