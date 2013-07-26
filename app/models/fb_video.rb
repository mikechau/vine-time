require 'open-uri'

class FbVideo

  FB_URL = URI::encode("https://graph.facebook.com/671552819526809/feed?access_token=#{ENV['FB_APP_TOKEN']}&limit=100")

  def json_response
    response = open(FB_URL).read
    JSON.parse(response)
  end

  def get_videos
    json_response['data'].select { |p| p['type'] == 'video' }
  end

  def list
    get_videos.map do |v|
      {
        source: v['source'],
        name: v['name'],
        poster: v['from']['name'],
        ts: v['created_time']
      }
    end
  end

end