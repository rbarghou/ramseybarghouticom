angular
.module('ramseybarghouticom', [])
.controller('ramseybarghouticomController', ['$scope',
  function($scope){
    // jQuery to collapse the navbar on scroll
    $(window).scroll(function(){
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event){
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
      $('.navbar-toggle:visible').click();
    });

    $scope.dataScienceBadges = [
      {
        "title": "Python",
        "iconUrl": "img/icons/python-logo.svg",
        "url": "https://www.python.org/",
        "description": "Python is more than a language, it's access to a mature and active community of development."
      }, {
        "title": "Octave",
        "iconUrl": "img/icons/octave-logo.svg",
        "url": "https://www.gnu.org/software/octave/",
        "description": "Octave and Matlab provide an efficient environment for rapid prototyping of algorithms and statistical methods."
      }, {
        "title": "Scipy",
        "iconUrl": "img/icons/scipy-logo.svg",
        "url": "http://www.scipy.org/",
        "description": "Scipy along with Numpy and other related software packages provide great toolbelts for data analysis and processing."
      }, {
        "title": "Sklearn",
        "iconUrl": "img/icons/sklearn-logo.svg",
        "url": "http://scikit-learn.org/stable/",
        "description": "Sklearn has become the standard python toolkit for building interesting and complicated machine learning systems."
      }, {
        "title": "Pandas",
        "iconUrl": "img/icons/pandas-logo.svg",
        "url": "http://pandas.pydata.org/",
        "description": "Pandas is a great system for connecting data sources to statistical analysis systems."
      }, {
        "title": "NLTK",
        "iconUrl": "img/icons/nltk-logo.svg",
        "url": "http://www.nltk.org/",
        "description": "NLTK gives access to a wide array of text processing systems like tokenizers, part of speech taggers, parsers, classifiers."
      }
    ]
    $scope.developerBadges = [
      {
        "title": "Node",
        "iconUrl": "img/icons/nodejs-logo.svg",
        "url": "http://nodejs.org/",
        "description": "Vibrant Community • Modern Webapp Server • Rapid Results"
      }, {
        "title": "Spring",
        "iconUrl": "img/icons/spring-logo.svg",
        "url": "http://spring.io/",
        "description": "Scalable • Robust Integration • Proven Technology"
      }, {
        "title": "Django",
        "iconUrl": "img/icons/django-logo.svg",
        "url": "https://www.djangoproject.com/",
        "description": "Python Applications • Easy Deployment • Great Packages"
      }, {
        "title": "Angular",
        "iconUrl": "img/icons/angular-logo.svg",
        "url": "https://angularjs.org/",
        "description": "Modular Front-End • Reuable • Readable"
      }, {
        "title": "D3",
        "iconUrl": "img/icons/d3-logo.svg",
        "url": "http://d3js.org/",
        "description": "Flexible Visualizations • Interactive • Approachable Code"
      }, {
        "title": "Bootstrap",
        "iconUrl": "img/icons/bootstrap-logo.svg",
        "url": "http://getbootstrap.com/",
        "description": "Beautiful Web • Easy Templating • Rapid Integration"
      }
    ]
  }
]);
