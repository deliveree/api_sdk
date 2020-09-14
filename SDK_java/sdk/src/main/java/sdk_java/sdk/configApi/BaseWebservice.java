package sdk_java.sdk.configApi;

import com.google.gson.Gson;

import sdk_java.sdk.util.Helper;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.security.KeyStore;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

public abstract class BaseWebservice {

	public static Gson gson = new Gson();
	private static final String TAG = "BaseWebservice";
	public static final int TIME_OUT = 100000;
	private static final String USER_AGENT = "Deliveree/1.0.0/csharp";
	private HttpClient client;
	public static final String BASEPATH = "https://api.sandbox.deliveree.com/public_api/v1";

	public static void init() {

	}

	public BaseWebservice() {
		// Initializes a new instance of the Configuration
		if (Configuration.ApiKeyPrefix.get("Authorization") == null) {
			throw new Error("apiKey is null");
		}
		RequestConfig config = RequestConfig.custom().setConnectTimeout(TIME_OUT).setConnectionRequestTimeout(TIME_OUT)
				.build();
		this.client = HttpClientBuilder.create().setDefaultRequestConfig(config).build();

	}

	protected ApiResponse<JSONObject> doGet(String wsUrl, List<NameValuePair> listHeader,
			List<NameValuePair> localVarQueryParams, List<NameValuePair> localVarPathParams) throws JSONException {
		JSONObject ret = null;
		try {
			if (localVarPathParams != null) {
				for (int i = 0; i < localVarPathParams.size(); i++) {
					wsUrl = wsUrl.replace("{" + localVarPathParams.get(i).getName() + "}",
							localVarPathParams.get(i).getValue());
				}
			}

			URIBuilder builder = new URIBuilder(BASEPATH + wsUrl);
			if (localVarQueryParams != null) {
				for (int i = 0; i < localVarQueryParams.size(); i++) {
					builder.addParameter(localVarQueryParams.get(i).getName(), localVarQueryParams.get(i).getValue());
				}
			}

			wsUrl = wsUrl.replace(" ", "%20");
			HttpGet request = new HttpGet(builder.build());
			if (listHeader != null) {
				for (int i = 0; i < listHeader.size(); i++) {
					request.setHeader(listHeader.get(i).getName(), listHeader.get(i).getValue());
				}
			}

			request.setHeader("Authorization", Configuration.ApiKeyPrefix.get("Authorization"));
			HttpResponse response = client.execute(request);
			HttpEntity entity = response.getEntity();
			
			if (entity != null) {
				InputStream is = entity.getContent();
				String str = Helper.toString(is);
				ret = new JSONObject(str);
				is.close();
				return new ApiResponse<JSONObject>(response.getStatusLine().getStatusCode(), listHeader, ret);
			}

		} catch (Exception ex) {
			ret = new JSONObject("{\"message\":" + "error " + ex.getMessage() + "}");
			return new ApiResponse<JSONObject>(400, listHeader, ret);
		}
		ret = new JSONObject("Error");
		return new ApiResponse<JSONObject>(400, listHeader, ret);

	}

	public ApiResponse<JSONObject> doPost(String wsUrl, List<NameValuePair> listHeader, List<NameValuePair> listParams,
			List<NameValuePair> listBodys, StringEntity dataPost) throws JSONException {
		JSONObject ret = null;
		if (listParams.size() > 0) {
			for (int i = 0; i < listParams.size(); i++) {
				wsUrl = BASEPATH + wsUrl.replace("{" + listParams.get(i).getName() + "}", listParams.get(i).getValue());
			}
		} else {
			wsUrl = BASEPATH + wsUrl;
		}
		try {
			HttpPost post = new HttpPost(wsUrl);
			post.setHeader("Authorization", Configuration.ApiKeyPrefix.get("Authorization"));
			// Set HTTP parameters
			post.setHeader("Accept", "application/json");
			post.setHeader("Content-type", "application/json");

			if (listBodys != null) {
				post.setEntity(new UrlEncodedFormEntity(listBodys));
			}

			if (dataPost != null) {
				post.setEntity(dataPost);
			}

			HttpResponse response = client.execute(post);
			HttpEntity entity = response.getEntity();
			if(response.getStatusLine().getStatusCode() == 204) {
				ret = new JSONObject("{\"message\":" + "Success "+ "}");
				return new ApiResponse<JSONObject>(response.getStatusLine().getStatusCode(), listHeader, ret);
			}
			
			if (entity != null) {
				InputStream is = entity.getContent();
				String str = Helper.toString(is);
				ret = new JSONObject(str);
				is.close();
				return new ApiResponse<JSONObject>(response.getStatusLine().getStatusCode(), listHeader, ret);
			}
		} catch (Exception ex) {
			ret = new JSONObject("{\"message\":" + "error " + ex.getMessage() + "}");
			return new ApiResponse<JSONObject>(400, listHeader, ret);
		}
		ret = new JSONObject("Error");
		return new ApiResponse<JSONObject>(400, listHeader, ret);
	}

	public static HttpClient getHttpClient() {

		try {
			SSLContext sslContext = SSLContext.getInstance("SSL");

			sslContext.init(null, new TrustManager[] { new X509TrustManager() {
				@Override
				public X509Certificate[] getAcceptedIssuers() {

					return null;
				}

				@Override
				public void checkClientTrusted(X509Certificate[] certs, String authType) {

				}

				@Override
				public void checkServerTrusted(X509Certificate[] certs, String authType) {

				}
			} }, new SecureRandom());

			SSLConnectionSocketFactory socketFactory = new SSLConnectionSocketFactory(sslContext,
					SSLConnectionSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER);

			HttpClient httpClient = HttpClientBuilder.create().setSSLSocketFactory(socketFactory).build();

			return httpClient;

		} catch (Exception e) {
			e.printStackTrace();
			return HttpClientBuilder.create().build();
		}
	}

}
