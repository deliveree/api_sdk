package sdk_java.sdk.model.domain;


import com.google.common.base.MoreObjects;

public class ApiException extends Exception{
	private Integer errorCode;
	private String errorContent;

	public ApiException(Integer errorCode, String errorContent) {
		this.errorCode = errorCode;
		this.errorContent = errorContent;
	}

	public Integer getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(Integer errorCode) {
		this.errorCode = errorCode;
	}

	public String getErrorContent() {
		return errorContent;
	}

	public void setErrorContent(String errorContent) {
		this.errorContent = errorContent;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this).omitNullValues().add("class ApiException ", "{\n")
				.add("  ErrorCode: ", errorCode).add("  ErrorContent: ", errorContent).add("", "}\n").toString();
		
	}
	
}
