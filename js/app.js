var app = angular.module('shopping', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/listing.html',
            controller: 'products'
        })
        .when('/cart', {
            templateUrl: 'partials/cart.html',
            controller: 'checkoutCart'
        })
})

app.directive('caffeineMeter', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/meter.html',
        scope: {
            caffeinemg: "=caffeineScale"
        },
        link: function(scope, el, attrs) {
            angular.element(document).ready(function() {
              console.log(scope);
                var scale = Number($('#scale').html())
                console.log(scale);
                var newVal;
                if (scale > 180) {
                    newVal = 150;
                } else if (scale < 100) {
                    newVal = 100
                } else {
                    $('.gauge--3 .semi-circle--mask').attr({
                        style: 'transform: rotate(' + newVal + 'deg);'
                    }, 1000);
                }
            })
        }
    }
});


// .directive('slider', function (DataModel) {
//      return {
//         restrict: 'A',
//         scope: true,
//         controller: function ($scope, $element, $attrs) {
//            $scope.onSlide = function (e, ui) {
//              $scope.model = ui.value;
//              // or set it on the model
//              // DataModel.model = ui.value;
//              // add to angular digest cycle
//              $scope.$digest();
//            };
//         },
//      }
//  });
