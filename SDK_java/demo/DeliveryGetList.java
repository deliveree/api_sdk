package test;

import org.json.JSONObject;

import sdk_java.sdk.api.DelivereeApi;
import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.Configuration;

public class DeliveryGetList {

	
	public static void main(String[] args) throws Exception {
		Configuration.ApiKeyPrefix.put("Authorization", "YOUR_API_KEY");
		DelivereeApi delivery = new DelivereeApi();
		
		try {
			ApiResponse<JSONObject> result = delivery.getListDelivery(1, 20, null);
			System.out.print(result.getData().toString());
		} catch (Exception ex) {
			System.out.print(ex);
		}
	};
	
}
