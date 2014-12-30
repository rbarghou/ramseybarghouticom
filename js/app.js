angular
    .module('ramseybarghouticom', [])
    .controller('dataScienceSectionController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('data/DataScienceBadgeData.json')
                .success(function (data, status, headers, config) {
                    $scope.badges = data.badges;
                });
    }])
    .controller('developerSectionController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('data/DeveloperBadgeData.json')
                .success(function (data, status, headers, config) {
                    console.log(data);
                    $scope.badges = data.badges;
                });
    }])
    .directive('contact', function () {
        return {
            templateUrl: 'templates/contact.html'
        };
    })
    .directive('about', function () {
        return {
            templateUrl: 'templates/about.html'
        }
    })
    .directive('datascience', function () {
        return {
            templateUrl: 'templates/datascience.html'
        }
    })
    .directive('developer', function () {
        return {
            templateUrl: 'templates/developer.html'
        }
    })
    .directive('intro', function () {
        return {
            templateUrl: 'templates/intro.html'
        };
    })
    .directive('copyright', function () {
        return {
            templateUrl: 'templates/copyright.html'
        }
    })
    .directive('navigation', function () {
        return {
            templateUrl: 'templates/navigation.html'
        }
    });