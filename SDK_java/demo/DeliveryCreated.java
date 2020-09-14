package test;


import com.google.gson.Gson;

import sdk_java.sdk.model.domain.Delivery;
import org.json.JSONObject;
import sdk_java.sdk.api.DelivereeApi;
import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.Configuration;
public class DeliveryCreated {
		public static void main(String[] args) throws Exception {
			Configuration.ApiKeyPrefix.put("Authorization", "YOUR_API_KEY");
			DelivereeApi delivery = new DelivereeApi();
			String body = " {\n" + 
					"              \"vehicle_type_id\": 14,\n" + 
					"              \"note\": \"Fragile item that needs good care.\",\n" + 
					"              \"time_type\": \"schedule\",\n" + 
					"              \"pickup_time\": \"2016-05-13T09:51:16+07:00\",\n" + 
					"              \"job_order_number\": \"66666\",\n" + 
					"              \"locations\": [\n" + 
					"                {\n" + 
					"                  \"address\": \"Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia\",\n" + 
					"                  \"latitude\": 10.8469033,\n" + 
					"                  \"longitude\": 106.6409201,\n" + 
					"                  \"recipient_name\": \"Duke\",\n" + 
					"                  \"recipient_phone\": \"+84903398399\",\n" + 
					"                  \"note\": \"Second floor, room 609\"\n" + 
					"                },\n" + 
					"                {\n" + 
					"                  \"address\": \"Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1, Bangka, Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia\",\n" + 
					"                  \"latitude\": 10.8434215,\n" + 
					"                  \"longitude\": 106.6389281,\n" + 
					"                  \"recipient_name\": \"Nam\",\n" + 
					"                  \"recipient_phone\": \"+84903856534\",\n" + 
					"                  \"note\": \"First floor, right room.\",\n" + 
					"                  \"need_cod\": true,\n" + 
					"                  \"cod_note\": \"You need to get money from Nam\",\n" + 
					"                  \"cod_invoice_fees\": 5000,\n" + 
					"                  \"need_pod\":true,\n" + 
					"                  \"pod_note\": \"You need to ...\"\n" + 
					"                }\n" + 
					"              ]\n" + 
					"            }\n" + 
					"";
			Delivery convertedObject = new Gson().fromJson(body, Delivery.class);
			try {
				ApiResponse<JSONObject> result = delivery.createdDelivery(convertedObject, null);
				System.out.print(result.getData().toString());
			} catch (Exception ex) {
				System.out.print(ex);
			}
		};

}
