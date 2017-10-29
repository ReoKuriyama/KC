$(function(){
  function addMordal(){
    var html =
    '<div id="new-talk-mordal">' +
    '</div>' +
    '<div id="mordal-overlay">' +
    '</div>'
    return html;
  }

  $(".user-box").on('click', function(){
    $(this).blur();
    if($("#mordal-overlay")[0]) return false; //モーダルがすでにある時はここで終了
    var html = addMordal();
    $("body").append(html);
  });

  $('body').on('click', '#mordal-overlay', function(){
    $("#new-talk-mordal, #mordal-overlay").remove();
  });
});
