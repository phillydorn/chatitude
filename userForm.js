(function() {

  window.userForm = {};
  userForm.viewModel = {
    name: '',
    password: '',
    set : function(key, value) {
      userForm.viewModel[key] = value;
      App.pubsub.emit('change:userFormViewModel')
    }
  };

  userForm.model = {

  }
  userForm.view = function() {
    var vm = userForm.viewModel;
    return $('<div class = "header">').append(
      $('<h1>').text('Chatitude'),
      $('<form class = "postForm">')
        .on('click', '.update', function (e) {
          e.preventDefault();
          MessageList.fetch();
        })
        .on('click', '.submit', function (e) {
          e.preventDefault();
          var message = this.post.value;
          MessageList.post(message);
        })
      .append(
        $('<button class = "update" onclick = "submit();">').text('Update Posts'),
        $('<input type = "text" class = "enterPost" name = "post">'),
         $('<button class = "submit" onclick = "submit();">').text('Submit Posts')
        ),
      $('<form class = "userForm">')
        .on('click', '.signUp', function (e) {
          e.preventDefault();
          MessageList.signup(name, pw);
        })
        .on('click', '.signIn', function (e) {
          e.preventDefault();
          vm.set('name', $('.userName').val());
          vm.set('password', $('.password').val());
          userForm.controller.signin(vm.name, vm.password);
        })
      .append (
       $('<input type = "text" class = "userName" name = "userName">'),
        $('<label for = "username">').val('User Name'),
        $('<input type = "text" class = "password" name = "password">'),      
        $('<label for = "password">').val('Password'),
        $('<input type = "submit">').val('Sign Up'),
        $('<button class = "signIn" onclick="submit();">').text('Sign In')
        )
      )
/*append(
      $('<label>').text('name: '),
      $('<input type="text" name="name">'),
      $('<br>'),

      $('<label>').text('age: '),
      $('<input type="text" name="age">'),
      $('<br>'),

      $('<input type="submit">').text("Add Person")
    )*/
      
  }
  userForm.render = function() {
    return userForm.view();

  }

  userForm.controller = {
    signin: function(name, password) {
      MessageList.signin(name, password);
      
    }
  }


})();