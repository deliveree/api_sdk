=begin
#Deliveree SDK
#With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
Contact: duke@deliveree.com
=end

# Common files
require 'deliveree_client/api_client'
require 'deliveree_client/api_error'
require 'deliveree_client/version'
require 'deliveree_client/configuration'

# Models
require 'deliveree_client/models/delivery'
require 'deliveree_client/models/response_default'
require 'deliveree_client/models/response_with_data'
require 'deliveree_client/models/response_get_quote'
require 'deliveree_client/models/location'
require 'deliveree_client/models/position_tracking'
require 'deliveree_client/models/quote'

# APIs
require 'deliveree_client/api/deliveree_api'

module Deliveree
  class << self
    # Customize default settings for the SDK using block.
    #   Deliveree.configure do |config|
    #     config.username = "xxx"
    #     config.password = "xxx"
    #   end
    # If no block given, return the default Configuration object.
    def configure
      if block_given?
        yield(Configuration.default)
      else
        Configuration.default
      end
    end
  end
end
