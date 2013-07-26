class VideosController < ApplicationController

  def index
    @videos = FbVideo.new.list
  end

end