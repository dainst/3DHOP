'use strict';

angular.module('arachne.controllers')

    .controller('ThreeDHopController', ['$scope', '$location', '$http', '$rootScope',
        function ($scope, $location, $http, $rootScope) {

            var presenter = null;

            function setup3dhop() {
              presenter = new Presenter("draw-canvas");

              presenter.setScene({
                  meshes: {
              			"cow" : { url: "3DHOP/models/cow.ply" }
              		},
              		modelInstances : {
              			"Model1" : { mesh : "cow" }
              		}
              });
              
            }
        }
    ]);
