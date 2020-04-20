using IO.Deliveree.Client;
using Newtonsoft.Json.Linq;
using RestSharp;
using System.Collections.Generic;
using System.Linq;

namespace IO.Deliveree.Api
{
    public interface IFleetsGetApi
    {
        #region Synchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="vehicleTypeId"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>JToken</returns>
        JToken FleetsGet(int? vehicleTypeId, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="vehicleTypeId"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse of JToken</returns>
        ApiResponse<JToken> FleetsGetWithHttpInfo(int? vehicleTypeId, string acceptLanguage = null);
        #endregion Synchronous Operations

        #region Asynchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="vehicleTypeId"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of JToken</returns>
        System.Threading.Tasks.Task<JToken> FleetsGetAsync(int? vehicleTypeId, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="vehicleTypeId"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse (JToken)</returns>
        System.Threading.Tasks.Task<ApiResponse<JToken>> FleetsGetAsyncWithHttpInfo(int? vehicleTypeId, string acceptLanguage = null);

        #endregion Asynchronous Operations
    }

    public partial class DelivereeApi
    {

        #region Private Methods

        private void CreateFleetsGetParams(int? vehicleTypeId, string acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method)
        {
            // verify the required parameter 'vehicleTypeId' is set
            if (vehicleTypeId == null)
                throw new ApiException(400, $"Missing required parameter '{nameof(vehicleTypeId)}' when calling {nameof(DelivereeApi)}->{nameof(FleetsGet)}");
            localVarPath = "/fleet_partners";
            localVarPathParams = new Dictionary<string, string>();
            localVarQueryParams = new List<KeyValuePair<string, string>>
            {
                new KeyValuePair<string, string>("vehicle_type_id", vehicleTypeId.ToString())
            }; // path parameter

            localVarPostBody = null;

            localVarHeaderParams = CreateHeaderParams(acceptLanguage, new string[] {
                "application/xml",
                "application/json"
            });

            localVarFormParams = new Dictionary<string, string>();
            localVarFileParams = new Dictionary<string, FileParameter>();

            // to determine the Content-Type header
            string[] localVarHttpContentTypes = new string[] { };
            localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            methodName = nameof(FleetsGet);
            method = Method.GET;
        }

        #endregion

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="vehicleTypeId"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>JToken</returns>
        public JToken FleetsGet(int? vehicleTypeId, string acceptLanguage = null) =>
             FleetsGetWithHttpInfo(vehicleTypeId, acceptLanguage).Data;

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="vehicleTypeId"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse of JToken</returns>
        public ApiResponse<JToken> FleetsGetWithHttpInfo(int? vehicleTypeId, string acceptLanguage = null)
        {
            CreateFleetsGetParams(vehicleTypeId, acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = Configuration.ApiClient.CallApi(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse<JToken>((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                Configuration.ApiClient.Deserialize<JToken>(localVarResponse));
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="vehicleTypeId"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of JToken</returns>
        public async System.Threading.Tasks.Task<JToken> FleetsGetAsync(int? vehicleTypeId, string acceptLanguage = null)
        {
            ApiResponse<JToken> localVarResponse = await FleetsGetAsyncWithHttpInfo(vehicleTypeId, acceptLanguage);
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="vehicleTypeId"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse (JToken)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<JToken>> FleetsGetAsyncWithHttpInfo(int? vehicleTypeId, string acceptLanguage = null)
        {
            CreateFleetsGetParams(vehicleTypeId, acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = await Configuration.ApiClient.CallApiAsync(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse<JToken>((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                Configuration.ApiClient.Deserialize<JToken>(localVarResponse));
        }
    }

}
