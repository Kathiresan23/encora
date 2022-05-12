angular.module('F1FeederApp', [
  'Test.services',
  'Test.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/contactlist", {templateUrl: "partials/contactList.html", controller: "contactListController"}).
	otherwise({redirectTo: '/contactlist'});
}]);