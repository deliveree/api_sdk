using IO.Deliveree.Client;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IO.Deliveree.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ICancelBookingApi
    {
        #region Synchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of delivery</param>
        /// <param name="acceptLanguage"> (optional)</param>
        void CancelBooking(int? id, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of delivery</param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse</returns>
        ApiResponse CancelBookingWithHttpInfo(int? id, string acceptLanguage = null);

        #endregion Synchronous Operations

        #region Asynchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of delivery</param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task</returns>
        System.Threading.Tasks.Task CancelBookingAsync(int? id, string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of delivery</param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse> CancelBookingAsyncWithHttpInfo(int? id, string acceptLanguage = null);

        #endregion Asynchronous Operations
    }
    public partial class DelivereeApi
    {
        #region Private Methods

        private void CreateCancelBookingParams(int? id, string acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method)
        {
            // verify the required parameter 'id' is set
            if (id == null)
                throw new ApiException(400, $"Missing required parameter '{nameof(id)}' when calling {nameof(DelivereeApi)}->{nameof(CancelBooking)}");
            localVarPath = "/deliveries/{id}/cancel";
            localVarPathParams = new Dictionary<string, string> { 
                [nameof(id)] = id.ToString()
            };
            localVarQueryParams = new List<KeyValuePair<string, string>> { }; // path parameter

            localVarPostBody = null;

            localVarHeaderParams = CreateHeaderParams(acceptLanguage, new string[] {});

            localVarFormParams = new Dictionary<string, string>();
            localVarFileParams = new Dictionary<string, FileParameter>();

            // to determine the Content-Type header
            string[] localVarHttpContentTypes = new string[] {};
            localVarHttpContentType = Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            methodName = nameof(CancelBooking);
            method = Method.POST;
        }

        #endregion

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of delivery</param>
        /// <param name="acceptLanguage"> (optional)</param>
        public void CancelBooking(int? id, string acceptLanguage = null) =>
             CancelBookingWithHttpInfo(id, acceptLanguage);

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of delivery</param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse</returns>
        public ApiResponse CancelBookingWithHttpInfo(int? id, string acceptLanguage = null)
        {
            CreateCancelBookingParams(id, acceptLanguage,
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
        /// <param name="id">ID of delivery</param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task</returns>
        public System.Threading.Tasks.Task CancelBookingAsync(int? id, string acceptLanguage = null) =>
             CancelBookingAsyncWithHttpInfo(id, acceptLanguage);

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">ID of delivery</param>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<ApiResponse> CancelBookingAsyncWithHttpInfo(int? id, string acceptLanguage = null)
        {

            CreateCancelBookingParams(id, acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = await Configuration.ApiClient.CallApiAsync(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, "CancelBooking");

            return new ApiResponse((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)));
        }
    }
}
