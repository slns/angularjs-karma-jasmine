(function () {
	'use strict';

	angular.module('componentes.contatos', [])
		.controller('ContatoControlador', function (resolveContato, Social, $state) {

			let vm = this;
			let API = 'http://localhost:3000/social';

			console.log("Resolve", resolveContato);

			if (resolveContato) {
				vm.contato = resolveContato;
			} else {
				return $state.go('404');
			}

			//if ($state.params.id) {
			if (angular.isDefined(vm.contato.social)) {
				Social.localizarPorNome(API + '?nome_like=' + vm.contato.social.nome)
					.then(function (resultado) {
						if (!resultado[0]) {
							vm.contato.social.id = undefined;
							vm.contato.social.erro = 'Nao Encontrado';
						} else {
							vm.contato.social.id = resultado[0].id;
							vm.contato.social.url = resultado[0].url;
							vm.contato.social.icone = resultado[0].icone;
						}
					}).catch(function (resultado) {
					// Add the default placeholder image
					vm.contato.social.erro = 'Nao Encontrado';
				});
			}
		})
		.config(function ($stateProvider) {

			$stateProvider
				// Contatos
				.state('contatos',
					{
						url: '/contatos'
						, templateUrl: 'app/components/contacts/contacts.html'
						, controller: 'ContatoControlador as cc',
						resolve: {
							resolveContato: function (Contatos) {
								return Contatos.todos();
							}
						}
					})
				// Contato
				.state('contato',
					{
						url: '/contato/:id'
						, templateUrl: 'app/components/contacts/contato.html'
						, controller: 'ContatoControlador as cc',
						resolve: {
							resolveContato: function (Contatos, $stateParams) {
								return Contatos.localizarContatoPorId($stateParams.id);
							}
						}
					});
		});
})();
