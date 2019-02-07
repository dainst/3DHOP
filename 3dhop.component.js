'use strict';

function ThreeDHopController(){
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

angular.module('3DHOP')component('3DHOPviewer',{
        templateUrl: 'app/3DHOP/3dhop.html',
        controller: ThreeDHopController,
        bindings: {

        }
});
