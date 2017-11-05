class HomeController < ApplicationController
  def index
    @user = current_user
    @users = User.all
    @groups = current_user.groups.dm.includes(:messages)
    @friends = current_user.friends
  end
end
