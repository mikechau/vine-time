class StaticPagesController < ApplicationController

  caches_action :about
  caches_action :contact

  def about
  end

  def contact
  end

end