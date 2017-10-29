class MessagesController < ApplicationController
  before_action :set_group
  def index
    if @group.users.count == 2
      user = @group.users.where.not(name: current_user.name )
      @talk = user[0]
    end
    @messages = @group.messages
    @message = Message.new
  end

  def create
    # @groups = current_user.groups.includes(:messages)
    @message = Message.new(message_params)

    respond_to do |format|
      if @message.save
        format.html do
        redirect_to group_messages_path(@group)
        end
        format.json
      else
        format.html do
        flash[:alert] = "failed to send a message"
        render :index
        end
        format.json
      end
    end
  end

  private
  def set_group
    @group = Group.find(params[:group_id])
  end

  def message_params
    params.require(:message).permit(:body).merge(user_id: current_user.id, group_id: params[:group_id])
  end
end
