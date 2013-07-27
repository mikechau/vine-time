require 'open-uri'

class FbVideo

  FB_URL = URI::encode("https://graph.facebook.com/170901143077174?fields=posts.limit(100).fields(source,name,type)&access_token=#{ENV['FB_APP_TOKEN']}")

  def json_response
    response = open(FB_URL).read
    JSON.parse(response)
  end

  def get_videos
    json_response['posts']['data'].select { |p| p['type'] == 'video' && p['source'] =~ /mp4/ }
  end

  def list
    get_videos.map do |v|
      {
        source: v['source'],
        name: v['name'],
        ts: v['created_time']
      }
    end
  end

end