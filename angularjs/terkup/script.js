var terkup = angular.module("terkup", []);
terkup.controller("terkupCtrl", function($scope){
    $scope.szamit = function(){
        var sugar = Number($scope.sugar);
        var magassag = Number($scope.magassag);
        var terfogat = 1.0/3.0 * 
        Math.pow(sugar, 2)* Math.PI*magassag;
        console.log(terfogat);
        $scope.terfogat = terfogat.toFixed(2);
    }
});
