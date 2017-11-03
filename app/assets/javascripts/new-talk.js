$(function(){
  function addMordal(id, name, image, dm_id){
    var talkIconHtml = dm_id.dmId ?
    '<a href="/groups/' + dm_id.dmId + '/messages"><i class="fa fa-commenting" aria-hidden="true"></i>':  '<i class="fa fa-commenting new-talk" aria-hidden="true"></i></label>';
    var html =
    '<div id="mordal" data-user-id="' + id + '" data-user-name="' + name + '">' +
      '<div class="mordal-image-box">' +
        '<img src ="' + image + '">' +
      '</div>' +
      '<div class="mordal-box">' +
        '<p>' + name + '</p>' +
        talkIconHtml +
      '</div>' +
    '</div>' +
    '<div id="mordal-overlay">' +
    '</div>'
    return html;
  }

  $(".user-box").on('click', function(){
    $(this).blur();
    if($("#mordal-overlay")[0]) return false; //モーダルがすでにある時はここで終了
    var id = $(this).data('userId');
    var name = $(this).children('.user-box__name').text();
    var image = $(this).children('img').attr("src");
    $.ajax({
      type: 'GET',
      url: '/dm',
      data: {
        user_id: id
      },
      dataType: 'json'
    })
    .done(function(dm_id) {
      var html = addMordal(id, name, image, dm_id);
      $("body").append(html);
    })
  });

  $('body').on('click', '#mordal-overlay', function(){
    $("#new-talk-mordal, #mordal-overlay").remove();
  });

  // トーク画面遷移
  $("body").on('click', '.new-talk', function(){
    var id = $('#mordal').data('userId')
     $.ajax({
      type: 'POST',
      url: '/groups',
      data: {
        user_ids: id
      },
      dataType: 'json'
    })
    .done(function(group) {
      var url = "/groups/" + group.id + "/messages"
      window.location = url;
    })
    .fail(function() {
    })
  });
});
