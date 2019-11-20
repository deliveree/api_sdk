<?php 
namespace ApiSample {
  require_once("../deliveree-sdk/vendor/autoload.php");
  use Deliveree\Client\Model\Delivery;
  use Deliveree\Client\Configuration;
  use Deliveree\Client\Api\DelivereeApi;
  use Deliveree\Client\Model\Location;
  use Deliveree\Client\Model\Quote;
  use Deliveree\Client\ApiException;
  use Exception;
  use GuzzleHttp\Exception\GuzzleException;

    class Sample {
    public function __construct()
    {
      $this->config = Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'ZrfYRQAzqMS9BH8QQhxa');
    }

      /**
       * @return object|null
       * @throws ApiException
       * @throws GuzzleException
       */
    public function getQuotes() {
        $result = null;
        $apiInstance = new DelivereeApi(
            null,
            $this->config
        );
        $accept_language = "en"; // string | 
        $quote = new Quote(["time_type" => "now"]);
        $location = new Location([
            "address" => "Jl. Sultan Iskandar Muda",
            "latitude" => -6.2608232,
            "longitude" => 106.7884168
        ]);
        $quote->setLocations([$location]);
          
        try {
            $result = $apiInstance->deliveriesGetQuotePost($quote, $accept_language);
        } catch (Exception $e) {
            echo 'Exception: ', $e->getMessage(), PHP_EOL;
        }

        return $result;
      }

      /**
       * @return string
       * @throws ApiException
       * @throws ApiException
       */
    public function addDelivery()
    {
        $today = date("Y-m-d H:i:s");

        $fromLocation = new Location([

            "address" =>   $today . " New Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
            "latitude" => -6.2608232,
            "longitude" => 106.7884168,
            "recipient_name" => "Duke",
            "recipient_phone" => "+84903398399",
            "note" => "Second floor, room 609"

        ]);
        $toLocation = new Location([
            "address" => $today . " Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1, Bangka, Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
            "latitude" => -6.2608232,
            "longitude" => 106.7884168,
            "recipient_name" => "Nam",
            "recipient_phone" => "+84903856534",
            "note" => "First floor, right room.",
            "need_cod" => true,
            "cod_note" => "You need to get money from Nam",
            "cod_invoice_fees" => 5000,
            "need_pod" => true,
            "pod_note" => "You need to ..."
        ]);
        $delivery = new Delivery([

            "vehicle_type_id" => 62,
            "note" => "Default Fragile item that needs good care Welcome.",
            "time_type" => "schedule",
            "pickup_time" => "2016-05-13T09:51:16+07:00",
            "job_order_number" => "66666"
        ]);

        $delivery->setLocations([$fromLocation, $toLocation]);
        $rs = null;
        try {
            $apiInstance = new DelivereeApi(
                null,
                $this->config
            );
            $rs = $apiInstance->deliveriesPost($delivery);
        } catch (Exception $e) {
            echo 'Exception: ', $e->getMessage(), PHP_EOL;

        }
        return $rs;

    }

      /**
       * @param $id
       * @return string
       * @throws GuzzleException
       */
    public  function cancelBooking($id)
    {   $result = null;
        $apiInstance = new DelivereeApi(null, $this->config);
        try {
            $apiInstance->cancelBooking($id);
            return "Success";
            
        } catch (Exception $e) {
            //Echo "Exception: " . $e->getMessage();
            return $e->getMessage();
        }

    }

  }
}