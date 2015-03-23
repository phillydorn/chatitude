(function () {

  window.Messages = {};

  Messages.view = function(messagesView) {
    return messagesView.empty()
    .append(
      $('<h2>').text('Messages:'),
      MessageList.map(Message.view)
    );
  }
  Messages.render = function(messagesView) {
   var messages
    return Messages.view(messagesView);
  }

  Messages.controller = {

  };
  
  window.Message = {};

  Message.view = function(message) {
    return $('<div class="message" >').append(
      $('<p class="username" >').append(message.user),
      $('<p class="messageText" >').append(message.message)
      )
    }


})();