(function() {
  'use strict';

  //Definindo módulo e controlador
  angular.module('componentes.404', [])
  .controller('Controlador404', function() {
    var vm = this;
  })
  .config(function ($stateProvider) {
      $stateProvider
      .state('404',
      {
        url: '/404'
        ,templateUrl: "app/componentes/404/404.html"
        , controller: "Controlador404 as 404"

      });
  });
  
})();
