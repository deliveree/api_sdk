package sdk_java.sdk.configApi;

import java.util.List;

import org.apache.http.NameValuePair;

public class ApiResponse<T> {
	private Integer statusCode;
	private List<NameValuePair> header;
	private T data;
	
	
	public ApiResponse(Integer statusCode, List<NameValuePair> header, T data) {
		super();
		this.statusCode = statusCode;
		this.header = header;
		this.data = data;
	}
	public Integer getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}
	public List<NameValuePair> getHeader() {
		return header;
	}
	public void setHeader(List<NameValuePair> header) {
		this.header = header;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	
	
	
}
