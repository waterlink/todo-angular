
module = angular.module 'TodosModule', []

module.controller 'TodosController', ['$scope', ($scope) ->
  $scope.todos = [
      text: 'Meet with friend', when: 'Expired'
    ,
      text: 'A little workout', when: 'Done'
    ,
      text: 'Shopping',         when: 'Today'
    ,
      text: 'Pay taxes',        when: 'This week'
    ,
      text: 'Read that book',   when: 'This month'
    ,
      text: 'Make a TodoApp',   when: 'This month'
  ]

  $scope.groups = []

  groupNameHash = {}
  $scope.todos.forEach (todo) ->
    unless groupNameHash[todo.when]
      groupNameHash[todo.when] = 1
      $scope.groups.push name: todo.when

  $scope.groups.forEach (group) ->
    group.todos = $scope.todos.filter (todo) -> todo.when is group.name
]

