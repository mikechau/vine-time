class VideosController < ApplicationController

  before_filter :set_headers

  caches_action :index, :expires_in => 15.minutes
  caches_action :show, :cache_path => Proc.new { |c| c.params }, :expires_in => 1.hour

  def index
    @videos = FbVideo.new.list
  end

  def show
    @video = FbVideo.new.get_video(params[:id])
  end

  def api_list_all
    @videos = FbVideo.new.list
    # request.format = :json
    render :json => @videos
  end

  def api_get_one
    @video = FbVideo.new.get_video(params[:id])
    render :json => @video
  end

  private

  def set_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end

end