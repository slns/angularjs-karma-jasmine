(function() {
    'use strict';

    angular.module('filtros.data', [])
        .filter('data', function($filter)
    {
        return function(entrada) {
            if(entrada == null) {
                return "";
            }

            let _data = $filter('date')(entrada, 'dd-MM-yyyy');

            console.log(entrada);
            console.log(_data);

            return _data.toUpperCase();
        };
    });
})();