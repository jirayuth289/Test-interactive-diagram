(function() {
    "use strict";
    angular.module('app')
        .controller('AppCtrl', ['$scope', function($scope) {
            $scope.openNav = function() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("mySidenav").style.transition = "0.3s";

                $('#mySidenav').mouseleave(function() {
                    $scope.closeNav();
                });

                document.getElementById("mySidenav").style.zIndex = 2;
            }

            $scope.closeNav = function() {
                document.getElementById("mySidenav").style.zIndex = 0;
                document.getElementById("mySidenav").style.width = "4%";
                document.getElementById("mySidenav").style.transition = "0.2s";
            }
        }]);
})();