using IO.Deliveree.Client;
using IO.Deliveree.Model.Reponse;
using Newtonsoft.Json.Linq;
using RestSharp;
using System.Collections.Generic;
using System.Linq;

namespace IO.Deliveree.Api
{
    public interface IVehicleTypesGetApi
    {
        #region Synchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>JToken</returns>
        VehicleTypeResponses VehicleTypesGet(string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse of JToken</returns>
        ApiResponse<VehicleTypeResponses> VehicleTypesGetWithHttpInfo(string acceptLanguage = null);
        #endregion Synchronous Operations

        #region Asynchronous Operations

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of JToken</returns>
        System.Threading.Tasks.Task<VehicleTypeResponses> VehicleTypesGetAsync(string acceptLanguage = null);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse (JToken)</returns>
        System.Threading.Tasks.Task<ApiResponse<VehicleTypeResponses>> VehicleTypesGetAsyncWithHttpInfo(string acceptLanguage = null);

        #endregion Asynchronous Operations
    }

    public partial class DelivereeApi
    {

        #region Private Methods

        private void CreateVehicleTypesGetParams(string acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method)
        {
            localVarPath = "/vehicle_types";
            localVarPathParams = new Dictionary<string, string>();
            localVarQueryParams = new List<KeyValuePair<string, string>> { }; // path parameter

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

            methodName = nameof(VehicleTypesGet);
            method = Method.GET;
        }

        #endregion

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>JToken</returns>
        public VehicleTypeResponses VehicleTypesGet(string acceptLanguage = null) =>
             VehicleTypesGetWithHttpInfo(acceptLanguage).Data;

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>ApiResponse of JToken</returns>
        public ApiResponse<VehicleTypeResponses> VehicleTypesGetWithHttpInfo(string acceptLanguage = null)
        {
            CreateVehicleTypesGetParams(acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = Configuration.ApiClient.CallApi(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse<VehicleTypeResponses>((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                Configuration.ApiClient.Deserialize<VehicleTypeResponses>(localVarResponse));
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of JToken</returns>
        public async System.Threading.Tasks.Task<VehicleTypeResponses> VehicleTypesGetAsync(string acceptLanguage = null)
        {
            ApiResponse<VehicleTypeResponses> localVarResponse = await VehicleTypesGetAsyncWithHttpInfo(acceptLanguage);
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Deliveree.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="acceptLanguage"> (optional)</param>
        /// <returns>Task of ApiResponse (JToken)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<VehicleTypeResponses>> VehicleTypesGetAsyncWithHttpInfo(string acceptLanguage = null)
        {
            CreateVehicleTypesGetParams(acceptLanguage,
            out string localVarPath, out Dictionary<string, string> localVarPathParams, out List<KeyValuePair<string, string>> localVarQueryParams,
            out object localVarPostBody, out Dictionary<string, string> localVarHeaderParams, out Dictionary<string, string> localVarFormParams,
            out Dictionary<string, FileParameter> localVarFileParams, out string localVarHttpContentType, out string methodName, out Method method);

            // make the HTTP request
            IRestResponse localVarResponse = await Configuration.ApiClient.CallApiAsync(localVarPath,
                method, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            HandleResponse(localVarResponse, methodName);

            return new ApiResponse<VehicleTypeResponses>((int)localVarResponse.StatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                Configuration.ApiClient.Deserialize<VehicleTypeResponses>(localVarResponse));
        }
    }
}
