app.factory("ProductFactory", function($http) {
    return {
        products: function() {
          return $http.get('/teas.json')
        },
        bag: [    {
                "_id": "55c8ee82152165d244b98303",
                "name": "Pressor leaf",
                "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
                "caffeineScale": 153,
                "price": 5496,
                "inStock": true,
                "rating": 1,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
                "__v": 0,
                "categories": ["dry", "hot", "awesome"],
                "qty": 3
            },
            {
                "_id": "55c8ee82152165d244b98309",
                "name": "Angular mix",
                "ingredients": "hot sauce, lawn clippings, fennel, parsley, quinine",
                "caffeineScale": 196,
                "price": 4158,
                "inStock": true,
                "rating": 2,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
                "__v": 0,
                "categories": ["spring", "warm","winter"],
                "qty": 2
            }
          ],
          subTotal: function(bag){
            var priceArray = []
            for (var i = 0; i < bag.length; i++) {
              var totalAmt = bag[i].price/100 * bag[i].qty;
              priceArray.push(totalAmt)
            }
            return priceArray.reduce(function(a, b){
              return a+b;
            })
          }
        }
    })
