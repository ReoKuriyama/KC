class HomeController < ApplicationController
  def index
    @users = User.all
    @groups = current_user.groups
    session[:user_id] = current_user.id
    @friends = current_user.friends
  end
end
