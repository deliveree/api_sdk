package test;

import org.json.JSONObject;

import com.google.gson.Gson;

import sdk_java.sdk.api.DelivereeApi;
import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.Configuration;
import sdk_java.sdk.model.domain.Quote;

public class QuoteCreated {
	
	public static void main(String[] args) throws Exception {
		Configuration.ApiKeyPrefix.put("Authorization", "YOUR_API_KEY");
		DelivereeApi delivery = new DelivereeApi();
		String body = "{\n" + 
				"              \"time_type\": \"now\",\n" + 
				"              \n" + 
				"              \"locations\": [\n" + 
				"                {\n" + 
				"                  \"address\": \"Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia\",\n" + 
				"                  \"latitude\": -6.2608232,\n" + 
				"                  \"longitude\": 106.7884168\n" + 
				"                },\n" + 
				"                {\n" + 
				"                  \"address\": \"Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1, Bangka, Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia\",\n" + 
				"                  \"latitude\": -6.2608232,\n" + 
				"                  \"longitude\": 106.7884168,\n" + 
				"                  \"need_cod\": true,\n" + 
				"                  \"cod_invoice_fees\": 5000,\n" + 
				"                  \"need_pod\":true\n" + 
				"                }\n" + 
				"              ]\n" + 
				"            }";
		Quote convertedObject = new Gson().fromJson(body, Quote.class);
		try {
			ApiResponse<JSONObject> result = delivery.createdQuote(convertedObject, null);
			System.out.print(result.getData().toString());
		} catch (Exception ex) {
			System.out.print(ex);
		}
	};

}
