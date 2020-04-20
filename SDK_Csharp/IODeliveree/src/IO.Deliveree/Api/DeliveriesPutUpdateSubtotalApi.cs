using IO.Deliveree.Client;
using RestSharp;
using System.Collections.Generic;
using System.Linq;

namespace IO.Deliveree.Api
{
    public interface IDeliveriesPutUpdateSubtotalApi
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
        /// <param name="subtotal "></param>
        /// <param name="acceptLanguage"> (optional)</param>
        void DeliveriesPutUpdateSubtotal(int? id, decimal subtotal, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="subtotal "></param>
        /// <returns>ApiResponse</returns>
        ApiResponse DeliveriesPutUpdateSubtotalWithHttpInfo(int? id, decimal subtotal, string acceptLanguage = null);
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
        /// <param name="subtotal "></param>
        /// <returns>Task</returns>
        System.Threading.Tasks.Task DeliveriesPutUpdateSubtotalAsync(int? id, decimal subtotal, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="subtotal "></param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse> DeliveriesPutUpdateSubtotalAsyncWithHttpInfo(int? id, decimal subtotal, string acceptLanguage = null);

        #endregion Asynchronous Operations
    }

    public partial class DelivereeApi
    {

        #region Private Methods

        private void CreateDeliveriesPutUpdateSubtotalParams(int? id, decimal subtotal, string acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method)
        {
            // verify the required parameter 'id' is set
            if (id == null)
                throw new ApiException(400, $"Missing required parameter '{nameof(id)}' when calling {nameof(DelivereeApi)}->{nameof(DeliveriesPutUpdateSubtotal)}");
            localVarPath = "/deliveries/{id}/update_subtotal";
            localVarPathParams = new Dictionary<string, string>
            {
                ["id"] =  id.ToString()
            };
            localVarQueryParams = new List<KeyValuePair<string, string>>
            {
            }; // path parameter

            localVarPostBody = null;

            localVarHeaderParams = CreateHeaderParams(acceptLanguage, new string[] {
                "application/xml",
                "application/json"
            });

            localVarFormParams = new Dictionary<string, string>{
                [nameof(subtotal)] = subtotal.ToString()
            };
            localVarFileParams = new Dictionary<string, FileParameter>();

            // to determine the Content-Type header
            string[] localVarHttpContentTypes = new string[] { };
            localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            methodName = nameof(DeliveriesPutUpdateSubtotal);
            method = Method.PUT;
        }

        #endregion

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="subtotal "></param>
        public object DeliveriesPutUpdateSubtotal(int? id, decimal subtotal, string acceptLanguage = null) =>
             DeliveriesPutUpdateSubtotalWithHttpInfo(id, subtotal, acceptLanguage);

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="subtotal "></param>
        /// <returns>ApiResponse</returns>
        public ApiResponse DeliveriesPutUpdateSubtotalWithHttpInfo(int? id, decimal subtotal, string acceptLanguage = null)
        {
            CreateDeliveriesPutUpdateSubtotalParams(id, subtotal, acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = Configuration.ApiClient.CallApi(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)));
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="subtotal "></param>
        /// <returns>Task</returns>
        public System.Threading.Tasks.Task DeliveriesPutUpdateSubtotalAsync(int? id, decimal subtotal, string acceptLanguage = null) =>
            DeliveriesPutUpdateSubtotalAsyncWithHttpInfo(id, subtotal, acceptLanguage);

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id"></param>
        /// <param name="subtotal "></param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<ApiResponse> DeliveriesPutUpdateSubtotalAsyncWithHttpInfo(int? id, decimal subtotal, string acceptLanguage = null)
        {
            CreateDeliveriesPutUpdateSubtotalParams(id, subtotal, acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = await Configuration.ApiClient.CallApiAsync(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)));
        }
    }

}
