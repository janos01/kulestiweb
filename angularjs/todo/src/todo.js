var todo = angular.module('todo', []);
todo.controller("todoCtrl", function($scope){
    $scope.tens = [];
   
    $scope.hozzaad = function(){
        var most = new Date();
        var ora = most.getHours();
        var perc = most.getMinutes();
        var ido = ora + ':' + perc;
       
        var ten = $scope.tennivalo;

        var t = {ten: ten, ido: ido};
        $scope.tens.push(t);
        delete $scope.tennivalo;
    };
    $scope.ment = function(){
        localStorage.setItem('todo', 
            $scope.tens[0].ten);
    };
    $scope.tolt = function(){
        var most = new Date();
        var ora = most.getHours();
        var perc = most.getMinutes();
        var ido = ora + ':' + perc;
        var ten = localStorage.getItem('todo');
        var t = {ten: ten, ido: ido};
        $scope.tens.push(t);
    };

});
