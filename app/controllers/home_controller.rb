class HomeController < ApplicationController
  def index
    @users = User.all
    @groups = current_user.groups
    session[:user_id] = current_user.id
  end
end
