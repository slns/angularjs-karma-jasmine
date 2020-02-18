(function () {
    'use strict';

    angular.module('api.contactos', [])
        .factory('Contatos', function () {
            let Contactos = {};

			let listaDeContatos = [
				{
					id: '1',
					nome: 'Paulo',
					sexo: 'Masculino',
					cidade: 'Valinhos',
					nascimento: '2010-05-01',
					social: {
						nome: 'Facebook'

					}
				},
				{
					id: '2',
					nome: 'Matheus',
					sexo: 'Masculino',
					cidade: 'Valinhos',
					nascimento: '2008-03-25',
					social: {
						nome: 'Facebook'

					}
				},
				{
					id: '3',
					nome: 'Marcia',
					sexo: 'Feminino',
					cidade: 'Sao Paulo',
					nascimento: '1996-01-15',
					social: {
						nome: 'Twitter'
					}
				},
				{
					id: '4',
					nome: 'Elisa',
					sexo: 'Feminino',
					cidade: 'Curitiba',
					nascimento: '2015-10-05',
					social: {
						nome: 'Youtube'
					}
				}
			];

            Contactos.todos = function () {
                return listaDeContatos;
            }

            Contactos.localizarContatoPorId = function (id) {
               return listaDeContatos.find(function (user) {
                   //console.log(user.id === id  + ' ' + user.id)
                   return user.id === id;
               });
            };

            return Contactos;
        });
})();
