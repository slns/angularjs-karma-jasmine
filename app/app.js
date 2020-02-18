/**
 * AngularJS - Jasmine + Karma
 * @author Sergio Santos
 */
'use strict';
/**
 * Modulo do App
 */
var app = angular.module('meuApp', [
	'ngAnimate', 'ngTouch', 'ui.router', 'ngMessages', 'api.contactos', 'componentes.contatos',
	'filtros.data', 'api.social', 'componentes.404'
]);

/**
 * Configurando as rotas para  modulo
 */
app.config(function ($urlRouterProvider, $stateProvider) {
	$stateProvider
		.state("home",
		{
			url: '/home'
			, templateUrl: 'partials/home.html'});
	$urlRouterProvider.otherwise('home');
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function () {

});

app.controller('HomeCtrl', [
	'$scope', '$http', '$window', '$q',
	function ($scope, $http, $window, $q) {

}]);
