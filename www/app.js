// Define the `eclipselitic` module
var eclipselitic = angular.module('eclipselitic', ['akoenig.deckgrid', 'emguo.poller', 'ngYoutubeEmbed']);
eclipselitic.config(function(pollerConfig) {
    pollerConfig.smart = true;
});
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';

// Define the `eclipseliticBodyController` controller on the `eclipselitic` module
eclipselitic.controller('eclipseliticBodyController', function eclipseliticBodyController($scope, $http, poller) {
  $scope.cors = cors_api_url;
  $http.get('webcams/webcams.json')
       .then(function(res){
          $scope.webcams = res.data.webcams;
          res.data.remote.forEach((link)=>{
            $http.get(cors_api_url+link)
            .then(function(res){
              angular.extend($scope.webcams, res.data);
            });
          });
        });
});