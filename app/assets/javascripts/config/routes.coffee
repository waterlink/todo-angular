
app = angular.module 'TodoApp', [
  'ngRoute'
  'TodosModule'
]

app.config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider
      .when('', redirectTo: '/todos')
      .when('/', redirectTo: '/todos')
      .when('/todos', templateUrl: 'todos/index.html', controller: 'TodosController')
      .when('/todos/active', templateUrl: 'todos/active.html', controller: 'TodosController')
      .when('/todos/done', templateUrl: 'todos/done.html', controller: 'TodosController')
]

