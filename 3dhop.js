var presenter = null;

function setup3dhop() {
  presenter = new Presenter("draw-canvas");

  presenter.setScene({
      meshes: {
          "mesh_1" : { url: "models/gargo.nxz" }
      },
      modelInstances : {
          "model_1" : { mesh : "mesh_1" }
      }
  });
}

$(document).ready(function(){
  init3dhop();

  setup3dhop();
});
