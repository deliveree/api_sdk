<?php

/**
 * Delivery
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Deliveree
 * @link     https://deliveree.com
 */

/**
 * Deliveree API
 *
 * With Deliveree API, developers can integrate our on-demand local delivery platform into their applications. The API is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: duke@deliveree.com
 * Generated by: https://deliveree.com

 */


namespace Deliveree\Client\Model;

use \ArrayAccess;
use \Deliveree\Client\ObjectSerializer;

/**
 * Delivery Class Doc Comment
 *
 * @category Class
 * @package  Deliveree\Client
 * @author   Deliveree
 * @link     https://deliveree.com
 */
class Delivery implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     *
     * @var string
     */
    protected static $swaggerModelName = 'Delivery';

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @var string[]
     */
    protected static $swaggerTypes = [
        'vehicle_type_id' => 'int',
        'note' => 'string',
        'time_type' => 'string',
        'pickup_time' => '\DateTime',
        'job_order_number' => 'string',
        'allow_parking_fees' => 'bool',
        'allow_tolls_fees' => 'bool',
        'allow_waiting_time_fees' => 'bool',
        'fleet_partner_id' => 'int',
        'container_size' => 'string',
        'locations' => '\Swagger\Client\Model\Location[]'
    ];

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @var string[]
     */
    protected static $swaggerFormats = [
        'vehicle_type_id' => 'int32',
        'note' => null,
        'time_type' => null,
        'pickup_time' => 'date-time',
        'job_order_number' => null,
        'allow_parking_fees' => null,
        'allow_tolls_fees' => null,
        'allow_waiting_time_fees' => null,
        'fleet_partner_id' => null,
        'container_size' => null,
        'locations' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'vehicle_type_id' => 'vehicle_type_id',
        'note' => 'note',
        'time_type' => 'time_type',
        'pickup_time' => 'pickup_time',
        'job_order_number' => 'job_order_number',
        'allow_parking_fees' => 'allow_parking_fees',
        'allow_tolls_fees' => 'allow_tolls_fees',
        'allow_waiting_time_fees' => 'allow_waiting_time_fees',
        'fleet_partner_id' => 'fleet_partner_id',
        'container_size' => 'container_size',
        'locations' => 'locations'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'vehicle_type_id' => 'setVehicleTypeId',
        'note' => 'setNote',
        'time_type' => 'setTimeType',
        'pickup_time' => 'setPickupTime',
        'job_order_number' => 'setJobOrderNumber',
        'allow_parking_fees' => 'setAllowParkingFees',
        'allow_tolls_fees' => 'setAllowTollsFees',
        'allow_waiting_time_fees' => 'setAllowWaitingTimeFees',
        'fleet_partner_id' => 'setFleetPartnerId',
        'container_size' => 'setContainerSize',
        'locations' => 'setLocations'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'vehicle_type_id' => 'getVehicleTypeId',
        'note' => 'getNote',
        'time_type' => 'getTimeType',
        'pickup_time' => 'getPickupTime',
        'job_order_number' => 'getJobOrderNumber',
        'allow_parking_fees' => 'getAllowParkingFees',
        'allow_tolls_fees' => 'getAllowTollsFees',
        'allow_waiting_time_fees' => 'getAllowWaitingTimeFees',
        'fleet_partner_id' => 'getFleetPartnerId',
        'container_size' => 'getContainerSize',
        'locations' => 'getLocations'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }



    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['vehicle_type_id'] = isset($data['vehicle_type_id']) ? $data['vehicle_type_id'] : null;
        $this->container['note'] = isset($data['note']) ? $data['note'] : null;
        $this->container['time_type'] = isset($data['time_type']) ? $data['time_type'] : null;
        $this->container['pickup_time'] = isset($data['pickup_time']) ? $data['pickup_time'] : null;
        $this->container['job_order_number'] = isset($data['job_order_number']) ? $data['job_order_number'] : null;
        $this->container['allow_parking_fees'] = isset($data['allow_parking_fees']) ? $data['allow_parking_fees'] : null;
        $this->container['allow_tolls_fees'] = isset($data['allow_tolls_fees']) ? $data['allow_tolls_fees'] : null;
        $this->container['allow_waiting_time_fees'] = isset($data['allow_waiting_time_fees']) ? $data['allow_waiting_time_fees'] : null;
        $this->container['fleet_partner_id'] = isset($data['fleet_partner_id']) ? $data['fleet_partner_id'] : null;
        $this->container['container_size'] = isset($data['container_size']) ? $data['container_size'] : null;
        $this->container['locations'] = isset($data['locations']) ? $data['locations'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets vehicle_type_id
     *
     * @return int
     */
    public function getVehicleTypeId()
    {
        return $this->container['vehicle_type_id'];
    }

    /**
     * Sets vehicle_type_id
     *
     * @param int $vehicle_type_id vehicle_type_id
     *
     * @return $this
     */
    public function setVehicleTypeId($vehicle_type_id)
    {
        $this->container['vehicle_type_id'] = $vehicle_type_id;

        return $this;
    }

    /**
     * Gets note
     *
     * @return string
     */
    public function getNote()
    {
        return $this->container['note'];
    }

    /**
     * Sets note
     *
     * @param string $note note
     *
     * @return $this
     */
    public function setNote($note)
    {
        $this->container['note'] = $note;

        return $this;
    }

    /**
     * Gets time_type
     *
     * @return string
     */
    public function getTimeType()
    {
        return $this->container['time_type'];
    }

    /**
     * Sets time_type
     *
     * @param string $time_type time_type
     *
     * @return $this
     */
    public function setTimeType($time_type)
    {
        $this->container['time_type'] = $time_type;

        return $this;
    }

    /**
     * Gets pickup_time
     *
     * @return \DateTime
     */
    public function getPickupTime()
    {
        return $this->container['pickup_time'];
    }

    /**
     * Sets pickup_time
     *
     * @param \DateTime $pickup_time pickup_time
     *
     * @return $this
     */
    public function setPickupTime($pickup_time)
    {
        $this->container['pickup_time'] = $pickup_time;

        return $this;
    }

    /**
     * Gets job_order_number
     *
     * @return string
     */
    public function getJobOrderNumber()
    {
        return $this->container['job_order_number'];
    }

    /**
     * Sets job_order_number
     *
     * @param string $job_order_number job_order_number
     *
     * @return $this
     */
    public function setJobOrderNumber($job_order_number)
    {
        $this->container['job_order_number'] = $job_order_number;

        return $this;
    }

    /**
     * Gets allow_parking_fees
     *
     * @return bool
     */
    public function getAllowParkingFees()
    {
        return $this->container['allow_parking_fees'];
    }

    /**
     * Sets allow_parking_fees
     *
     * @param bool $allow_parking_fees allow_parking_fees
     *
     * @return $this
     */
    public function setAllowParkingFees($allow_parking_fees)
    {
        $this->container['allow_parking_fees'] = $allow_parking_fees;

        return $this;
    }

    /**
     * Gets allow_tolls_fees
     *
     * @return bool
     */
    public function getAllowTollsFees()
    {
        return $this->container['allow_tolls_fees'];
    }

    /**
     * Sets allow_tolls_fees
     *
     * @param bool $allow_tolls_fees allow_tolls_fees
     *
     * @return $this
     */
    public function setAllowTollsFees($allow_tolls_fees)
    {
        $this->container['allow_tolls_fees'] = $allow_tolls_fees;

        return $this;
    }

    /**
     * Gets allow_waiting_time_fees
     *
     * @return bool
     */
    public function getAllowWaitingTimeFees()
    {
        return $this->container['allow_waiting_time_fees'];
    }

    /**
     * Sets allow_waiting_time_fees
     *
     * @param bool $allow_waiting_time_fees allow_waiting_time_fees
     *
     * @return $this
     */
    public function setAllowWaitingTimeFees($allow_waiting_time_fees)
    {
        $this->container['allow_waiting_time_fees'] = $allow_waiting_time_fees;

        return $this;
    }

    /**
     * Gets fleet_partner_id
     *
     * @return int
     */
    public function getFleetPartnerId()
    {
        return $this->container['fleet_partner_id'];
    }

    /**
     * Sets fleet_partner_id
     *
     * @param int $fleet_partner_id fleet_partner_id
     *
     * @return $this
     */
    public function setFleetPartnerId($fleet_partner_id)
    {
        $this->container['fleet_partner_id'] = $fleet_partner_id;

        return $this;
    }

    /**
     * Gets container_size
     *
     * @return string
     */
    public function getContainerSize()
    {
        return $this->container['container_size'];
    }

    /**
     * Sets container_size
     *
     * @param string $container_size container_size
     *
     * @return $this
     */
    public function setContainerSize($container_size)
    {
        $this->container['container_size'] = $container_size;

        return $this;
    }

    /**
     * Gets locations
     *
     * @return \Swagger\Client\Model\Location[]
     */
    public function getLocations()
    {
        return $this->container['locations'];
    }

    /**
     * Sets locations
     *
     * @param \Swagger\Client\Model\Location[] $locations locations
     *
     * @return $this
     */
    public function setLocations($locations)
    {
        $this->container['locations'] = $locations;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unset offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}
