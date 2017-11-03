class GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)
    id = current_user.id
    @group.user_ids = @group.user_ids.push(id)
    @group.save
    respond_to do |format|
      format.html
      format.json
    end
  end

  def dm
    currentUserDmId = current_user.groups.dm.pluck(:id)
    selectedUserDmId = User.find(params[:user_id]).groups.dm.pluck(:id)
    dm_id = currentUserDmId & selectedUserDmId
    @dm_id = dm_id[0]
  end

  private
  def group_params
    params.permit(:user_ids)
  end
end
