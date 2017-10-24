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
  '<div id="friends-request-mordal">' +
  '<img src ="' + image + '">' +
  '<p>' + name + '</p>' +
  '</div>' +
  '<div id="mordal-overlay">' +
  '</div>'
  return html;
  }

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
});
