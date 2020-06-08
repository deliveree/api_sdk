# -*- encoding: utf-8 -*-
=begin
#Deliveree SDK
#With Deliveree API, developers can integrate our on-demand local delivery platform into their applications. The API is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
Contact: duke@deliveree.com
=end

$:.push File.expand_path("../lib", __FILE__)
require "deliveree_client/version"

Gem::Specification.new do |s|
  s.name        = "deliveree_sdk"
  s.version     = Deliveree::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Deliveree"]
  s.email       = ["duke@deliveree.com"]
  s.homepage    = "http://deliveree.com"
  s.summary     = "Deliveree SDK "
  s.description = "With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion"
  s.license     = 'MIT'
  s.required_ruby_version = ">= 1.9"

  s.add_runtime_dependency 'typhoeus', '~> 1.0', '>= 1.0.1'
  s.add_runtime_dependency 'json', '~> 2.1', '>= 2.1.0'

  s.add_development_dependency 'vcr', '~> 3.0', '>= 3.0.1'

  s.files         = `find *`.split("\n").uniq.sort.select { |f| !f.empty? }
  s.executables   = []
  s.require_paths = ["lib"]
end
