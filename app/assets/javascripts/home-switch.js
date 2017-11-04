$(function(){
  $(".tab-list li").on('click', function(){
    $('.tab-content').css('display', 'none');
    $('.active').removeClass("active");
    $(this).addClass("active");
    var id = this.getAttribute("id");
    $("#" + id + "-content").css("display", "block");
  });
});
