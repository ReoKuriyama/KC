class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update]
  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to edit_user_path(@user)
    else
      render :edit
    end
  end

  def search
    @keyword = params[:keyword]
    if @keyword.blank?
      @users  = []
    else
      @users = User.where('name LIKE(?)', "%#{params[:keyword]}%").where.not(name: current_user.name )

    end
    respond_to do |format|
      format.json
    end
  end

  private
  def set_user
    @user = current_user
  end

  def user_params
    params.require(:user).permit(:age, :profile_image)
  end
end
