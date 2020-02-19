describe('Controlador 404', function() {
  var $controller, Controlador404;

  //Carregar módulos
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('componentes.404'));

  //inject
  beforeEach(inject(function(_$controller_) {
     $controller = _$controller_;
     Controlador404 = $controller('Controlador404', {});
   }));

   //Valida se controlador existe
   it('Controlador 404 existe?', function() {
   expect(Controlador404).toBeDefined();
 });

});
