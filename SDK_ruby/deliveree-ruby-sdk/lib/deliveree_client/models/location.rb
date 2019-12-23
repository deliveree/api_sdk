=begin
#Deliveree SDK
#With Deliveree API, developers can integrate our on-demand local delivery platform into their applications. The API is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
Contact: duke@deliveree.com
=end

require 'date'

module Deliveree
  class Location
    attr_accessor :address

    attr_accessor :latitude

    attr_accessor :longitude

    attr_accessor :recipient_name

    attr_accessor :recipient_phone

    attr_accessor :note

    attr_accessor :need_cod

    attr_accessor :cod_note

    attr_accessor :cod_invoice_fees

    attr_accessor :need_pod

    attr_accessor :pod_note

    attr_accessor :position_trackings

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'address' => :'address',
        :'latitude' => :'latitude',
        :'longitude' => :'longitude',
        :'recipient_name' => :'recipient_name',
        :'recipient_phone' => :'recipient_phone',
        :'note' => :'note',
        :'need_cod' => :'need_cod',
        :'cod_note' => :'cod_note',
        :'cod_invoice_fees' => :'cod_invoice_fees',
        :'need_pod' => :'need_pod',
        :'pod_note' => :'pod_note',
        :'position_trackings' => :'position_trackings'
      }
    end

    # Attribute type mapping.
    def self.attribute_types
      {
        :'address' => :'String',
        :'latitude' => :'Float',
        :'longitude' => :'Float',
        :'recipient_name' => :'String',
        :'recipient_phone' => :'String',
        :'note' => :'String',
        :'need_cod' => :'BOOLEAN',
        :'cod_note' => :'String',
        :'cod_invoice_fees' => :'Float',
        :'need_pod' => :'BOOLEAN',
        :'pod_note' => :'String',
        :'position_trackings' => :'Array<PositionTracking>'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      # To make sure attribute mandatory
      self.address = attributes[:'address']
      self.latitude = attributes[:'latitude']
      self.longitude = attributes[:'longitude']

      if attributes.has_key?(:'recipient_name')
        self.recipient_name = attributes[:'recipient_name']
      end

      if attributes.has_key?(:'recipient_phone')
        self.recipient_phone = attributes[:'recipient_phone']
      end

      if attributes.has_key?(:'note')
        self.note = attributes[:'note']
      end

      if attributes.has_key?(:'need_cod')
        self.need_cod = attributes[:'need_cod']
      end

      if attributes.has_key?(:'cod_note')
        self.cod_note = attributes[:'cod_note']
      end

      if attributes.has_key?(:'cod_invoice_fees')
        self.cod_invoice_fees = attributes[:'cod_invoice_fees']
      end

      if attributes.has_key?(:'need_pod')
        self.need_pod = attributes[:'need_pod']
      end

      if attributes.has_key?(:'pod_note')
        self.pod_note = attributes[:'pod_note']
      end

      if attributes.has_key?(:'position_trackings')
        if (value = attributes[:'position_trackings']).is_a?(Array)
          self.position_trackings = value
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
          address == o.address &&
          latitude == o.latitude &&
          longitude == o.longitude &&
          recipient_name == o.recipient_name &&
          recipient_phone == o.recipient_phone &&
          note == o.note &&
          need_cod == o.need_cod &&
          cod_note == o.cod_note &&
          cod_invoice_fees == o.cod_invoice_fees &&
          need_pod == o.need_pod &&
          pod_note == o.pod_note &&
          position_trackings == o.position_trackings
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [address, latitude, longitude, recipient_name, recipient_phone, note, need_cod, cod_note, cod_invoice_fees, need_pod, pod_note, position_trackings].hash
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
