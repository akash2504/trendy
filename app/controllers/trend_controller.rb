require 'restclient'
class TrendController < ApplicationController
  def index
    @response = JSON.parse(RestClient.get("http://172.20.44.29:3000/sizzles/top10"))
  end

  def search
    response = JSON.parse(RestClient.get("http://172.20.44.29:3000/sizzles/search?#{URI::encode(params[:attr_name])}=#{URI::encode(params[:attr_value])}&count=20"))
    # response.each do |r|
    #   tags =r['metadatas'].select{|a| a['attr_name'] == 'tag'}.collect{|a| a['attr_value']}
    #   r['attr_tags'] = tags
    # end
    render json: response
  end
  def home
    searchTerms="shirt,clothing,bollywood"
    @trends=JSON.parse(RestClient.get('http://172.20.44.29:3000/sizzles/search?tags='+searchTerms))
    @trends
  end
  def downvote
    id=params["id"]
    RestClient.post('http://172.20.44.29:3000/sizzles/invalidate?id='+id,{}.to_json)
    render json: {:message => "Done"}
  end
end