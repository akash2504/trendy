require 'restclient'
class TrendController < ApplicationController
  def home
    searchTerms="shirt"
    @trends=RestClient.get('http://172.20.44.29:3000/sizzles/search?tags='+searchTerms)
    @trends
  end
end