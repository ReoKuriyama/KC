$(function(){
  $(".tab-list li i").on('click', function(){
    $('.tab-content').css('display', 'none');
    var id = this.getAttribute("id");
    var currentId = ("#" + id + "-content");
    $(currentId).css("display", "block")
  });
});
