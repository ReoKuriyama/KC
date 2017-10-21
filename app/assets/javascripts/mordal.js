$(function(){
  function addMordal(){
    var html =
    '<div id="group-mordal">' +
    '</div>' +
    '<div id="modal-overlay">' +
    '</div>'
    return html;
  }

  $(".user-box").on('click', function(){
    $(this).blur();
    if($("#mordal-overlay")[0]) return false;
    var html = addMordal();
    $("body").append(html);
  });

  $("#mordal-overlay").unbind().on('click', function(){
    console.log("jgofdis;")
    $("#mordal-overlay", "#group-mordal").remove();
  });

  $('#mordal-overlay').on('click')
});
