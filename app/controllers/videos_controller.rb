class VideosController < ApplicationController

  caches_action :index, :expires_in => 15.minutes

  def index
    @videos = FbVideo.new.list
  end

end