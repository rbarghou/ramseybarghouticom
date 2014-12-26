angular
    .module('ramseybarghouticom', [])
    .controller('dataScienceSectionController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('DataScienceBadgeData.json')
                .success(function (data, status, headers, config) {
                    $scope.badges = data;
                });
    }])
    .directive('contact', function () {
        return {
            templateUrl: 'contact.html'
        };
    })
    .directive('about', function () {
        return {
            templateUrl: 'about.html'
        }
    })
    .directive('datascience', function () {
        return {
            templateUrl: 'datascience.html'
        }
    })
    .directive('developer', function () {
        return {
            templateUrl: 'developer.html'
        }
    })
    .directive('intro', function () {
        return {
            templateUrl: 'intro.html'
        };
    })
    .directive('copyright', function () {
        return {
            templateUrl: 'copyright.html'
        }
    });