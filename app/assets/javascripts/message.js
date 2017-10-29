$(function(){
  function buildHTML(message){
    var html =
      '<li class="myself" data-message-id="' + message.id + '">' +
      '<span class="message-time">' + message.time + '</span>' +
      '<p class="message-text">' +
      message.body +
      '</p>' +
      '</li>';
    return html
  }

   function insertNew(message, lastId){
    if (message.id > lastId){
      html += buildHTML(message);
    }
  }

  $('form#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.message-box ul').append(html)
      $("form#new_message")[0].reset();

      // formの入力を再度有効化する
      $("input").prop('disabled', false);

      $(".message-box").scrollTop($(".message-box")[0].scrollHeight);
    })
    .fail(function() {
      alert('error');
    })
  });
});
