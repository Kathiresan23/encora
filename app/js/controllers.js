angular.module('Test.controllers', []).

  /* Contact list controller */
  controller('contactListController', function($scope, $routeParams, ergastAPIservice) {
    $scope.List = [
      {
        "firstName": "Amit",
        "lastName": "Roy",
        "phone": "9876543210",
        "id": 1,
        "editable" : false
      },
      {
        "firstName": "Aakash",
        "lastName": "Choudhury",
        "phone": "9876584431",
        "id": 2,
        "editable" : false
      },
      {
        "firstName": "Arun",
        "lastName": "Dey",
        "phone": "5748493812",
        "id": 3,
        "editable" : false
      },
      {
        "firstName": "Vikash",
        "lastName": "Trivedi",
        "phone": "9873625261",
        "id": 4
      },
      {
        "firstName": "Gaurav",
        "lastName": "Gupta",
        "phone": "7002873284",
        "id": 5,
        "editable" : false
      }
    ]


    $scope.add = function(){
      $scope.List.push({
         firstName : "",
         lastName : "",
         phone : "",
         editable : true
      })
    }
    $scope.entity = {}
	    
	  $scope.edit = function(index){
      $scope.entity = $scope.List[index];
      $scope.entity.index = index;
      $scope.entity.editable = true;
	  }
    $scope.save = function(index){
      $scope.List[index].editable = false;
      
    }
    $scope.delete = function(index){
      $scope.List.splice(index,1);
    }

  });