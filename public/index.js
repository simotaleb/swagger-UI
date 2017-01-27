/*console.log('ok');
var app = angular.module('app',[]);
app.controller('AppController',function($scope,$http){
  console.log('yay');

  $scope.addPerson = function(){
    console.log("works");
  };
});*/

angular.module('app',[]).controller('ctrl',function($scope,$http){
  var refresh = function(){
    $http.get("http://localhost:10010/people").then(function(response){
        $scope.people = response.data['people'];
        $scope.person = null;
    });
  };
  refresh();
  $scope.addPerson = function(){
    $http.post("http://localhost:10010/people",$scope.person).then(function(response){
      refresh();
    });
  };
  $scope.removePerson = function(id){
    $http.delete('http://localhost:10010/people/'+id).then(function(response){
      refresh();
    });
  };
  $scope.editPerson = function(id){
    $http.get('http://localhost:10010/people/'+id).then(function(response){
      $scope.person = response.data;
    });
  };
  $scope.updatePerson = function(id){
    $http.put('http://localhost:10010/people/'+$scope.person.id,$scope.person).then(function(response){
      refresh();
    });
  };
});
