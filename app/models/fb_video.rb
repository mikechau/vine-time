require 'open-uri'

class FbVideo

  FB_URL = URI::encode("https://graph.facebook.com/170901143077174?fields=posts.limit(5000).fields(source,name,type)&access_token=#{ENV['FB_APP_TOKEN']}")
  BASE_URL = "https://graph.facebook.com/"
  TOKEN = "&access_token=#{ENV['FB_APP_TOKEN']}"

  def json_response(url)
    response = open(url).read
    JSON.parse(response)
  end

  def get_videos
    json = json_response(FB_URL)
    json['posts']['data'].select { |p| p['type'] == 'video' && p['source'] =~ /mp4/ }
  end

  def list
    get_videos.map do |v|
      {
        source: v['source'],
        name: v['name'],
        id: v['id'],
        ts: v['created_time']
      }
    end
  end

  def get_video(id)
    url = URI::encode("#{BASE_URL + id}?fields=source,name#{TOKEN}")
    video = json_response(url)
    { 
      source: video['source'],
      name: video['name'],
      id: video['id'],
      ts: video['created_time']
    }
  end

  def api_list
    {
      response: "200",
      data: list
    }
  end

end