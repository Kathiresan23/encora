angular.module('Test.services', [])
  .factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getContact = function() {
      return $http({
        method: 'JSONP', 
        url: 'https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts'
      });
    }

    return ergastAPI;
  });