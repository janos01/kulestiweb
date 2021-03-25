
var park = angular.module('parkolas', []);

park.controller("parkolasCtrl", function($scope){
    $scope.kocsik = [
        {rendszam: "abc-123", tulaj: "Nagy János" },
        {rendszam: "bdd-555", tulaj: "Erős Béla" },
        {rendszam: "cda-234", tulaj: "Lali Imre" },
        {rendszam: "ada-832", tulaj: "Tengő Barbara" }
    ];
});
