$(function() {
  function appendUser(user){
    var html =
    '<li class="user-box" data-user-id="' + user.id + '" data-user-name="' + user.name + '"' + '" data-user-image="' + user.image["url"] + '">' +
      '<img src=' + user.image["url"] + '>' +
      '<h2 class="user-box__name">' + user.name +
      '</h2>' +
      '</li>';
    return html;
  }

  function addMordal(id, name, image){
  var html =
  '<div id="friends-request-mordal" data-user-id="' + id + '" data-user-name="' + name + '">' +
    '<div class="mordal-image-box">' +
      '<img src ="' + image + '">' +
    '</div>' +
    '<div class="mordal-box">' +
      '<p>' + name + '</p>' +
      '<p> 友達に追加する </p>' +
      '<i class="fa fa-plus" aria-hidden="true"></i>' +
    '</div>' +
  '</div>' +
  '<div id="mordal-overlay">' +
  '</div>'
  return html;
  }

  // ユーザー検索機能
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/search',
      data: {
        keyword: input
      },
      dataType: 'json'
    })

    .done(function(users) {
      var html = "";
      users.forEach(function(user){
        html += appendUser(user);
      });
      $('#user-search-result').html(html)
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });

  // モーダル
  $("#user-search-result").on('click', '.user-box', function(){
    $(this).blur();
    if($("#mordal-overlay")[0]) return false; //モーダルがすでにある時はここで終了
    var id = $(this).data('userId');
    var name = $(this).data('userName');
    var image = $(this).data('userImage');
    var html = addMordal(id, name, image);
    $("body").append(html);
  });

  $('body').on('click', '#mordal-overlay', function(){
    $("#friends-request-mordal, #mordal-overlay").remove();
  });

  //友達追加機能
  $("body").on('click', '.fa-plus', function(){
    var id = $('#friends-request-mordal').data('userId')
    var name = $('#friends-request-mordal').data('userName')
     $.ajax({
      type: 'GET',
      url: '/friend',
      data: {
        to_user_id: id
      },
      dataType: 'json'
    })
     .done(function(users) {
      $("#user-search-result").empty();
      $(".mordal-box").empty();

      var html = '<h3 class="friends-add">' + name + 'さんと<br>友達になりました！</h3>'

      $('.mordal-box').append(html);
    })
    .fail(function() {

    })
  });

});
