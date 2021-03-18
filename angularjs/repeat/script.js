
var park = angular.module('parkolas', []);

park.controller("parkolasCtrl", function($scope){
    $scope.kocsik = [
        "abc-123",
        "bdd-555"
    ];
});
