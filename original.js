var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.languages = [        
    {name:"English", value:0}
  ];
  $scope.lang1 = [        
    {name:"Eng", value:0}
  ];
$(function() {


   var people = [];

   $.getJSON('people.json', function(data) {
       $.each(data.person, function(f, i) {
          var tblRow = "<tr>" + "<td>" + i.firstName + "</td>" 
           $(tblRow).appendTo("#userdata tbody");
     });

   });
}
  $scope.save = function() {
    
   	if ($scope.languages.value === $scope.lang1.value) {
   	$scope.IsMatch=true;

	alert("Works in if!");
    	
 	 }
  	else{$scope.IsMatch=false;
	alert("Works in else!");
	}

  }
 
});
  
