using IO.Deliveree.Client;
using IO.Deliveree.Model.Reponse;
using Newtonsoft.Json.Linq;
using RestSharp;
using System.Collections.Generic;
using System.Linq;

namespace IO.Deliveree.Api
{
    public interface IDeliveriesGetApi
    {
        #region Synchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>JToken</returns>
        DeliveryResponse DeliveriesGet(int? id, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse of JToken</returns>
        ApiResponse<DeliveryResponse> DeliveriesGetWithHttpInfo(int? id, string acceptLanguage = null);
        #endregion Synchronous Operations

        #region Asynchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of JToken</returns>
        System.Threading.Tasks.Task<DeliveryResponse> DeliveriesGetAsync(int? id, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse (JToken)</returns>
        System.Threading.Tasks.Task<ApiResponse<DeliveryResponse>> DeliveriesGetAsyncWithHttpInfo(int? id, string acceptLanguage = null);

        #endregion Asynchronous Operations
    }

    public partial class DelivereeApi
    {

        #region Private Methods

        private void CreateDeliveriesGetParams(int? id, string acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method)
        {
            // verify the required parameter 'id' is set
            if (id == null)
                throw new ApiException(400, $"Missing required parameter '{nameof(id)}' when calling {nameof(DelivereeApi)}->{nameof(DeliveriesGet)}");
            localVarPath = "/deliveries/{id}";
            localVarPathParams = new Dictionary<string, string>
            {
                [nameof(id)] = id.ToString()
            };
            localVarQueryParams = new List<KeyValuePair<string, string>> { }; // path parameter

            localVarPostBody = null;

            localVarHeaderParams = CreateHeaderParams(acceptLanguage, new string[] {
                "application/xml",
                "application/json"
            });

            localVarFormParams = new Dictionary<string, string>();
            localVarFileParams = new Dictionary<string, FileParameter>();

            // to determine the Content-Type header
            string[] localVarHttpContentTypes = new string[] {};
            localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            methodName = nameof(DeliveriesGet);
            method = Method.GET;
        }

        #endregion

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>JToken</returns>
        public DeliveryResponse DeliveriesGet(int? id, string acceptLanguage = null) =>
             DeliveriesGetWithHttpInfo(id, acceptLanguage).Data;

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse of JToken</returns>
        public ApiResponse<DeliveryResponse> DeliveriesGetWithHttpInfo(int? id, string acceptLanguage = null)
        {
            CreateDeliveriesGetParams(id, acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = Configuration.ApiClient.CallApi(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse<DeliveryResponse>((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                Configuration.ApiClient.Deserialize<DeliveryResponse>(localVarResponse));
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of JToken</returns>
        public async System.Threading.Tasks.Task<DeliveryResponse> DeliveriesGetAsync(int? id, string acceptLanguage = null)
        {
            ApiResponse<DeliveryResponse> localVarResponse = await DeliveriesGetAsyncWithHttpInfo(id, acceptLanguage);
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse (JToken)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<DeliveryResponse>> DeliveriesGetAsyncWithHttpInfo(int? id, string acceptLanguage = null)
        {
            CreateDeliveriesGetParams(id, acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = await Configuration.ApiClient.CallApiAsync(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse<DeliveryResponse>((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                Configuration.ApiClient.Deserialize<DeliveryResponse>(localVarResponse));
        }
    }

}
