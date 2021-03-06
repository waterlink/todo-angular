// Generated by CoffeeScript 1.7.1
(function() {
  var module;

  module = angular.module('TodosModule', []);

  module.controller('TodosController', [
    '$scope', function($scope) {
      var groupNameHash;
      $scope.todos = [
        {
          text: 'Meet with friend',
          when: 'Expired'
        }, {
          text: 'A little workout',
          when: 'Done',
          when_was: 'Today'
        }, {
          text: 'Shopping',
          when: 'Today'
        }, {
          text: 'Pay taxes',
          when: 'This week'
        }, {
          text: 'Read that book',
          when: 'This month'
        }, {
          text: 'Make a TodoApp',
          when: 'This month'
        }
      ];
      $scope.groups = [];
      groupNameHash = {};
      $scope.todos.forEach(function(todo) {
        todo.editedText = todo.text;
        if (!groupNameHash[todo.when]) {
          groupNameHash[todo.when] = 1;
          return $scope.groups.push({
            name: todo.when
          });
        }
      });
      $scope.groups.byType = function(type) {
        if (type === 'active') {
          return $scope.groups.filter(function(group) {
            return group.name !== 'Done';
          });
        } else if (type === 'done') {
          return $scope.groups.filter(function(group) {
            return group.name === 'Done';
          });
        } else {
          return $scope.groups;
        }
      };
      $scope.groups.forEach(function(group) {
        return group.todos = $scope.todos.filter(function(todo) {
          return todo.when === group.name;
        });
      });
      $scope.toggle = function(todo) {
        if (todo.when === 'Done') {
          return todo.when = todo.when_was;
        } else {
          todo.when_was = todo.when;
          return todo.when = 'Done';
        }
      };
      $scope.toggleEditing = function(todo) {
        return todo.editing = todo.editing ? false : true;
      };
      $scope.finishEditing = function(todo) {
        todo.text = todo.editedText;
        return $scope.toggleEditing(todo);
      };
      return $scope.remove = function(todo) {
        return console.log("TodosController#remove(todo)::STUB");
      };
    }
  ]);

}).call(this);
