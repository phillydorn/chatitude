(function(){
  
  var messageStorage = [];
  var token;
  window.App = {};
  App.pubsub = new Events();

  window.MessageList = {

  	store: function(data) {
  		messageStorage = [];
  		for (var i = data.length-1; i>=0; i--) {
  			messageStorage.push(data[i]);
  		}
  	},
    
    signup: function (username, password){
    	$.ajax({
           type: 'POST',
           url: 'http://chat.api.mks.io/signup',
           data: {'username': username, 'password': password},
    	success: function (response) {
			  console.log(response);
		 },
		error: function () {
			console.error('signup failed')
		}

    })
},
    
    signin: function (username, password) {
    	$.ajax({
           type: 'POST',
           url: 'http://chat.api.mks.io/signin',
           data: {'username': username, 'password': password},
    	success: function (response) {
			  token = response.apiToken;
			  console.log('token:', token);
			  sessionStorage.setItem('apiToken', token)
		 },
		error: function () {
			console.error('signin failed')
		}

      })
    },
    post: function (message) {
    	$.ajax({
           type: 'POST',
           url: 'http://chat.api.mks.io/chats',
           async: false,
           data: {'apiToken': sessionStorage.getItem('apiToken'), 'message': message},
    	success: function (response) {
			  MessageList.fetch();

		 },
		error: function () {
			console.error('signup failed')
		}
        
      })
  
    },
    fetch: function () {
    	$.ajax({
           type: 'GET',
           url: 'http://chat.api.mks.io/chats',
           async: false,
    	success: function (data) {
    	  MessageList.spamFilter(data);
		  MessageList.store(data);
		  console.log(data);
		  console.log (messageStorage);
		 },
		error: function () {
			console.error('fetch failed');
		}

      })
    App.pubsub.emit('BrianRules')

    },
    map: function(callback) {
	  return messageStorage.map(callback);
    },
    spamFilter: function(data){
    	return _.filter(data, function(val){
    		return val[0] !== '<';
    	})
    }
  }
    
})()