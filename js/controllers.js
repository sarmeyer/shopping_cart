app.controller('products', function($scope, ProductFactory, $location) {
    $scope.vw = {};
    $scope.vw.catArray = []
    $scope.vw.numItems = 0;
    $scope.sortType = 'name'; // set the default sort type
    ProductFactory.products().then(function(data) {
        $scope.vw.teas = data.data;
        for (var i = 0; i < $scope.vw.teas.length; i++) {
            for (var j = 0; j < $scope.vw.teas[i].categories.length; j++) {
                if ($scope.vw.catArray.indexOf($scope.vw.teas[i].categories[j]) === -1) {
                    $scope.vw.catArray.push($scope.vw.teas[i].categories[j])
                }
            }
        }
    })
    $scope.addToBag = function(qty, tea) {
      if(tea.qty){
        tea.qty += Number(qty)
      } else {
        ProductFactory.bag.push(tea);
        tea.qty = Number(qty) || 1;
      }
        $scope.vw.numItems = ProductFactory.bag.length;
    }
    $scope.checkout = function() {
        $location.path('/cart')
    }
})
app.controller('checkoutCart', function($scope, ProductFactory) {
    $scope.vw = {};
    $scope.vw.cartItems = ProductFactory.bag;
    ProductFactory.subTotal(ProductFactory.bag);
    $scope.vw.subtotal = ProductFactory.subTotal(ProductFactory.bag);
    $scope.remove = function(item) {
        item.qty = 0
        var start = ProductFactory.bag.indexOf(item)
        ProductFactory.bag.splice(start, 1);
        $scope.vw.subtotal = ProductFactory.subTotal(ProductFactory.bag);
    }
    $scope.edit = true;
    $scope.editItems = function(item, newQty) {
        if (!$scope.edit) {
            item.qty = newQty;
        }
        $scope.vw.subtotal = ProductFactory.subTotal(ProductFactory.bag);
        $scope.edit = !$scope.edit;
    }
})
