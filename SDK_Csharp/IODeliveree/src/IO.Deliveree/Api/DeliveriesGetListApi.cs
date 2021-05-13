using IO.Deliveree.Client;
using IO.Deliveree.Model.Reponse;
using Newtonsoft.Json.Linq;
using RestSharp;
using System.Collections.Generic;
using System.Linq;

namespace IO.Deliveree.Api
{
    public interface IDeliveriesGetListApi
    {
        #region Synchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page"></param>
        /// <param name="perPage"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>JToken</returns>
        ListDeliveryResponse DeliveriesGetList(int? page, int? perPage, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page"></param>
        /// <param name="perPage"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse of JToken</returns>
        ApiResponse<ListDeliveryResponse> DeliveriesGetListWithHttpInfo(int? page, int? perPage, string acceptLanguage = null);
        #endregion Synchronous Operations

        #region Asynchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page"></param>
        /// <param name="perPage"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of JToken</returns>
        System.Threading.Tasks.Task<ListDeliveryResponse> DeliveriesGetListAsync(int? page, int? perPage, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page"></param>
        /// <param name="perPage"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse (JToken)</returns>
        System.Threading.Tasks.Task<ApiResponse<ListDeliveryResponse>> DeliveriesGetListAsyncWithHttpInfo(int? page, int? perPage, string acceptLanguage = null);

        #endregion Asynchronous Operations
    }
    public partial class DelivereeApi
    {

        #region Private Methods

        private void CreateDeliveriesGetListParams(int? page, int? perPage, string acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method)
        {
            // verify the required parameter 'page' is set
            if (page == null)
                throw new ApiException(400, $"Missing required parameter '{nameof(page)}' when calling {nameof(DelivereeApi)}->{nameof(DeliveriesGetList)}");
            else if (page < 1)
                throw new ApiException(400, $"Out of Range parameter '{nameof(page)}' when calling {nameof(DelivereeApi)}->{nameof(DeliveriesGetList)}");
            // verify the required parameter 'perPage' is set
            if (perPage == null)
                throw new ApiException(400, $"Missing required parameter '{nameof(perPage)}' when calling {nameof(DelivereeApi)}->{nameof(DeliveriesGetList)}");
            else if(perPage < 1 || perPage > 100)
                throw new ApiException(400, $"Out of Range parameter '{nameof(perPage)}' when calling {nameof(DelivereeApi)}->{nameof(DeliveriesGetList)}");
            localVarPath = "/deliveries";
            localVarPathParams = new Dictionary<string, string>();
            localVarQueryParams = new List<KeyValuePair<string, string>>
            {
                new KeyValuePair<string, string>(nameof(page), page.ToString()),
                new KeyValuePair<string, string>("per_page", perPage.ToString()),
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

            methodName = nameof(DeliveriesGetList);
            method = Method.GET;
        }

        #endregion

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page"></param>
        /// <param name="perPage"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>JToken</returns>
        public ListDeliveryResponse DeliveriesGetList(int? page, int? perPage, string acceptLanguage = null) =>
             DeliveriesGetListWithHttpInfo(page, perPage, acceptLanguage).Data;

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page"></param>
        /// <param name="perPage"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse of JToken</returns>
        public ApiResponse<ListDeliveryResponse> DeliveriesGetListWithHttpInfo(int? page, int? perPage, string acceptLanguage = null)
        {
            CreateDeliveriesGetListParams(page, perPage, acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = Configuration.ApiClient.CallApi(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse<ListDeliveryResponse>((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                Configuration.ApiClient.Deserialize<ListDeliveryResponse>(localVarResponse));
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page"></param>
        /// <param name="perPage"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of JToken</returns>
        public async System.Threading.Tasks.Task<ListDeliveryResponse> DeliveriesGetListAsync(int? page, int? perPage, string acceptLanguage = null)
        {
            ApiResponse<ListDeliveryResponse> localVarResponse = await DeliveriesGetListAsyncWithHttpInfo(page, perPage, acceptLanguage);
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="page"></param>
        /// <param name="perPage"></param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse (JToken)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<ListDeliveryResponse>> DeliveriesGetListAsyncWithHttpInfo(int? page, int? perPage, string acceptLanguage = null)
        {
            CreateDeliveriesGetListParams(page, perPage, acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = await Configuration.ApiClient.CallApiAsync(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse<ListDeliveryResponse>((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                Configuration.ApiClient.Deserialize<ListDeliveryResponse>(localVarResponse));
        }
    }
}
