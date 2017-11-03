class HomeController < ApplicationController
  def index
    @users = User.all
    @groups = current_user.groups.dm.includes(:messages)
    @friends = current_user.friends
  end
end
