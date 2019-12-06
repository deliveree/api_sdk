=begin
#Deliveree SDK
#With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
Contact: duke@deliveree.com
=end

require 'uri'

module Deliveree
  class DelivereeApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # @param id ID of delivery
    # @param [Hash] opts the optional parameters
    # @option opts [String] :accept_language  (default to en)
    # @return [nil]
    def cancel_booking(id, opts = {})
      cancel_booking_with_http_info(id, opts)
      nil
    end

    # @param id ID of delivery
    # @param [Hash] opts the optional parameters
    # @option opts [String] :accept_language 
    # @return [Array<(nil, Fixnum, Hash)>] nil, response status code and response headers
    def cancel_booking_with_http_info(id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: DelivereeApi.cancel_booking ...'
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling DelivereeApi.cancel_booking"
      end
      # resource path
      local_var_path = '/deliveries/{id}/cancel'.sub('{' + 'id' + '}', id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/xml', 'application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json', 'application/xml'])
      header_params[:'Accept-Language'] = opts[:'accept_language'] if !opts[:'accept_language'].nil?

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['ApiKeyAuth']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: DelivereeApi#cancel_booking\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # @param body 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :accept_language  (default to en)
    # @return [ResponseWithData]
    def deliveries_get_quote(body, opts = {})
      data, _status_code, _headers = deliveries_get_quote_with_http_info(body, opts)
      data
    end

    # @param body 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :accept_language 
    # @return [Array<(ResponseWithData, Fixnum, Hash)>] ResponseWithData data, response status code and response headers
    def deliveries_get_quote_with_http_info(body, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: DelivereeApi.deliveries_get_quote ...'
      end
      # verify the required parameter 'body' is set
      if @api_client.config.client_side_validation && body.nil?
        fail ArgumentError, "Missing the required parameter 'body' when calling DelivereeApi.deliveries_get_quote"
      end
      # resource path
      local_var_path = '/deliveries/get_quote'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/xml', 'application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json', 'application/xml'])
      header_params[:'Accept-Language'] = opts[:'accept_language'] if !opts[:'accept_language'].nil?

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(body)
      auth_names = ['ApiKeyAuth']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'ResponseWithData')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: DelivereeApi#deliveries_get_quote\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # @param body 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :accept_language  (default to en)
    # @return [ResponseDefault]
    def deliveries_post(body, opts = {})
      data, _status_code, _headers = deliveries_post_with_http_info(body, opts)
      data
    end

    # @param body 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :accept_language 
    # @return [Array<(ResponseDefault, Fixnum, Hash)>] ResponseDefault data, response status code and response headers
    def deliveries_post_with_http_info(body, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: DelivereeApi.deliveries_post ...'
      end
      # verify the required parameter 'body' is set
      if @api_client.config.client_side_validation && body.nil?
        fail ArgumentError, "Missing the required parameter 'body' when calling DelivereeApi.deliveries_post"
      end
      # resource path
      local_var_path = '/deliveries'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/xml', 'application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json', 'application/xml'])
      header_params[:'Accept-Language'] = opts[:'accept_language'] if !opts[:'accept_language'].nil?

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(body)
      auth_names = ['ApiKeyAuth']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'ResponseDefault')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: DelivereeApi#deliveries_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
