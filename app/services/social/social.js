(function() {
  'use strict';

  angular.module('api.social', [])
  .factory('Social', function($http, $q) {
    let Social = {};

    //Usamos spy on neste método para interceptá-lo.  o callThrought() usado em seguida permite continuar
    //a interceptação para a chamada $http.get dentro do método localizarPorNome
    Social.localizarPorNome = function(apiETermoDePesquisa) {
      return $http.get(apiETermoDePesquisa)
      .then(function(res) {

        return res.data;

      }, function(res){
        return $q.reject({'erro':'Nao Encontrado'});
      })


      //}).catch(function(res) {
        //console.log("Erro");
      //  return res.data;

      //});
    };

    return Social;
  });
})();
