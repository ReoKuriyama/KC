json.id @message.id
json.name @message.user.name
json.time @message.created_at.strftime('%H:%M')
json.body @message.body

