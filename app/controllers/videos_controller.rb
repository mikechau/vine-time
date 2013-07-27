class VideosController < ApplicationController

  caches_action :index, :expires_in => 15.minutes
  caches_action :show, :cache_path => Proc.new { |c| c.params }, :expires_in => 1.hour

  def index
    @videos = FbVideo.new.list
  end

  def show
    @video = FbVideo.new.get_video(params[:id])
  end

end