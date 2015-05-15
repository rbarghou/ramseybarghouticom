angular
    .module('ramseybarghouticom', [])
    .controller('navbarController', ['$scope',
        function ($scope) {
            // jQuery to collapse the navbar on scroll
            $(window).scroll(function () {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });

            // jQuery for page scrolling feature - requires jQuery Easing plugin
            $(function () {
                $('a.page-scroll').bind('click', function (event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500, 'easeInOutExpo');
                    event.preventDefault();
                });
            });

            // Closes the Responsive Menu on Menu Item Click
            $('.navbar-collapse ul li a').click(function () {
                $('.navbar-toggle:visible').click();
            });
    }])
    .controller('dataScienceSectionController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('data/DataScienceBadgeData.json', {
                headers: {
                    'Content-Type': 'text/javascript'
                }
            }).success(function (data, status, headers, config) {
                $scope.badges = data.badges;
            });
    }])
    .controller('developerSectionController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('data/DeveloperBadgeData.json', {
                headers: {
                    'Content-Type': 'text/javascript'
                }
            }).success(function (data, status, headers, config) {
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