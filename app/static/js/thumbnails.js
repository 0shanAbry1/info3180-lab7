//Thumbnail >> AngularJS Service

app.factory('thumbnailsrvc', ['$http', function($http){
    return $http.get('https://info3180-lab7-thumbnailapi-a0shanabry1.c9users.io/api/thumbnails')
        .then(function(response){ 
            console.log(response.data); return response.data; //Data handler
        },function(error){ 
            console.log(error); return error; //Error handler  
        });
}]);