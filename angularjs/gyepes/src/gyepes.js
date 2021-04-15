/* Nagy János, 2021-04-15 esti Szoft I 
 Copyright(c) Nagy János, 2021
 Licenc: Minden jog fenntartva.
*/

var gyepes = angular.module("gyepes", []);
gyepes.controller("gyepesCtrl", function($scope){
    
    
    $scope.szamit = function(evt) {
        
        var atmero = Number($scope.atmero);
        var sugar = atmero / 2;
        var terulet = Math.pow(sugar, 2) * Math.PI;
        var terulet_fele = terulet / 2;
        var ar = terulet_fele * 2500;
        $scope.terulet = terulet_fele.toFixed(2);
        $scope.ar = ar.toFixed(2);
        $scope.eredmeny = terulet_fele.toFixed(2);

    }
});
