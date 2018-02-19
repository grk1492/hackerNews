angular.module("myApp").controller("myCtrl",function($scope,$http){
      $scope.tabArticle = [];
      $http.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(function(response){
        for(var i=0; i < 30; i++) {
        	$http.get("https://hacker-news.firebaseio.com/v0/item/"+response.data[i]+".json?print=pretty").then(function(res){
        		 console.log(res.data);
                 $scope.tabArticle.push(res.data);
                 console.log($scope.tabArticle);
        	})
       
      	     }
      });

});