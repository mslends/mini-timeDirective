angular.module('timeApp').directive('showTime', function() {
  return {
    restrict: 'E',
    template: '<div>Current time is {{time | date: format}}</div><div>GMT time is {{gmtTime | date: format}}</div>',
    scope: {
      format: '=',
      update: '&'
    },
    link: function(scope, element, attrs){
      var currentTime = new Date();

      element.css({
        fontWeight: "bold",
        color: "#ff33ee"
      })

      element.on('mousedown', function() {
        // scope.time = new Date();
        // scope.gmtTime = new Date(scope.time.toGMTString());
        scope.$apply();
        scope.update();
      })

      scope.time = currentTime;
      scope.gmtTime = new Date(currentTime.toGMTString());
    },
    controller: function($scope, myService, $timeout) {
      myService.validateEmail($scope.email).then(function() {
        
      })
    }

  }
});
