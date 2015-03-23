
(function () {


  window.Page = {}

  Page.mount = function(elem) {
    elem.append(userForm.render());
    App.pubsub.on('BrianRules', function() {
      elem.append(Messages.render($('<div class = "messages">')));
    })
    MessageList.fetch();
  }
//   window.Messages = {}

// 	Messages.Presenter = function (element) {
// 	  var $view = $(element)
//       var that = this;
// 	  $view.on('click', '.update', function(e) {
//          MessageList.fetch();
//          // that.render();
// 	  })

// 	  $view.on('click', '.submit', function(e) {
// 	  	e.preventDefault();
//         var post = $('input.enterPost').val();
//         console.log(post);
//         MessageList.post(post);
//         // MessageLixst.signin(name, password)
// 	  })

// 	  $view.on('click', '.signUp', function(e) {
// 	  	var name = prompt('Enter User Name:');
// 	    var password = prompt('Enter Password:');

//          MessageList.signup(name, password);
// 	  })

// 	  $view.on('click', '.signIn', function(e) {
//          var name = prompt('Enter User Name:');
// 	     var password = prompt('Enter Password:');
// 	     MessageList.signin(name, password);
// 	  })

// 	  this.render = function() {
// 	  	$('#allMessages').empty().append(
//           Messages.view())
// 	  	$('.messageContainer').append(
// 	  	  MessageList.map(messageView)
// 	  	  )
// 	  }	
// 	  App.pubsub.on('BrianRules', this.render)
// 	}
// 	Messages.view = function () {
// 	  return $('<div class = "messages">').append(
//          $('<h2>').text("Messages:"), 
//          $('<div class="messageContainer">')
// 	  	)
// 	}
// 			)
// 	}
// 	Messages.mount = function (element) {
// 		var presenter = new Messages.Presenter(element);
// 		presenter.render();
// 	}


})();