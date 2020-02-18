describe('Controlador para os contatos', function() {

	let $controller, ContatoServiceTeste;

	let SocialTeste, $q, $httpBackend, $state;

	let API = 'http://localhost:3000/social';

	//Mock Resposta API
	let RESPONSE_SUCCESS = {

		'id': 1,
		'nome': 'Facebook',
		'icone': '',
		'url': 'facebook.com/sw9br',

	};

	let RESPONSE_ERROR_NOT_FOUND = {
		'id': undefined,
		'erro': 'Nao Encontrado'
	};

	let RESPONSE_ERROR_404 = {
		'erro': 'Nao Encontrado'
	};


	let listaDeContatos = [
		{
			id: '1',
			nome: 'Paulo',
			sexo: 'Masculino',
			cidade: 'Valinhos',
			nascimento: '2010-05-01'
		},
		{
			id: '2',
			nome: 'Matheus',
			sexo: 'Masculino',
			cidade: 'Valinhos',
			nascimento: '2008-03-25'
		},
		{
			id: '3',
			nome: 'Marcia',
			sexo: 'Feminino',
			cidade: 'Sao Paulo',
			nascimento: '1996-01-15'
		},
		{
			id: '4',
			nome: 'Elisa',
			sexo: 'Feminino',
			cidade: 'Curitiba',
			nascimento: '2015-10-05'
		}
	];

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('api.social'))
	beforeEach(angular.mock.module('componentes.contatos'));


	beforeEach(inject(function(_$controller_, _Social_, _$q_, _$httpBackend_, _$state_) {
		$controller = _$controller_;
		SocialTeste = _Social_;
		$q = _$q_;
		$httpBackend = _$httpBackend_;
		$state = _$state_;
	}));

	describe('Controlador recebendo um contato válido e um social válido', function() {
		let unicoContato, ContatoControladorTeste;

		beforeEach(function(){
			//Mock um contato válido
			unicoContato = {
				id: '2',
				nome: 'Matheus',
				sexo: 'Masculino',
				cidade: 'Valinhos',
				nascimento: '2008-03-25',
				social: {
					nome: 'Facebook',
				}
			};

			spyOn(SocialTeste, "localizarPorNome").and.callThrough();


			ContatoControladorTeste = $controller('ContatoControlador', {
				resolveContato: unicoContato, Social: SocialTeste
			});

		});

		it('Controlador foi definido?', function() {
			expect(ContatoControladorTeste).toBeDefined();
		});

		it('Setar a camada de visualização com o objeto contato enviado como parâmetro no controlador', function() {
			expect(ContatoControladorTeste.contato).toEqual(unicoContato);
		});

		/*it('A chamada ao localizarPorNome deve retornar um social válido', function() {

			//Verificação antes da chamada ao serviço Social
			expect(ContatoControladorTeste.contato.social.id).toBeUndefined();
			expect(ContatoControladorTeste.contato.social.nome).toEqual('Facebook');
			expect(ContatoControladorTeste.contato.social.url).toBeUndefined();
			expect(ContatoControladorTeste.contato.social.icone).toBeUndefined();

			//Verificando resultado após chamada a API social a partir do controlador
			$httpBackend.whenGET(API + '?nome_like=' + unicoContato.social.nome).respond(200, $q.when(RESPONSE_SUCCESS));

			$httpBackend.flush();

			//Espera-se que o objeto contato seja preenchido com as informações Social Media
			expect(SocialTeste.localizarPorNome).toHaveBeenCalledWith(API + '?nome_like=' + 'Facebook');
			expect(ContatoControladorTeste.contato.social.id).toEqual(1);
			expect(ContatoControladorTeste.contato.social.nome).toEqual('Facebook');
			expect(ContatoControladorTeste.contato.social.url).toContain('facebook');
			expect(ContatoControladorTeste.contato.social.icone).toEqual('');

		});*/



	});

	describe('Controlador recebendo um contato válido e um social inválido', function(){

		let unicoContato, ContatoControladorTeste;

		beforeEach(function(){

			//Mock um contato válido
			unicoContato = {
				id: '2',
				nome: 'Matheus',
				sexo: 'Masculino',
				cidade: 'Valinhos',
				nascimento: '2008-03-25',
				social: {
					nome: 'Teste',
				}
			};

			spyOn(SocialTeste, "localizarPorNome").and.callThrough();

			ContatoControladorTeste = $controller('ContatoControlador', {resolveContato: unicoContato, Social: SocialTeste});

		});

		it('Controlador foi definido?', function(){
			expect(ContatoControladorTeste).toBeDefined();
		});

		it('Setar a camada de visualização com o objeto contato enviado como parâmetro no controlador', function() {
			expect(ContatoControladorTeste.contato).toEqual(unicoContato);
		});

		it('A chamada ao localizarPorNome nao localiza social pelo nome, retornando undefined e mensagem de erro', function() {

			//Verificando resultado após chamada a API social a partir do controlador
			$httpBackend.whenGET(API + '?nome_like=' + unicoContato.social.nome).respond(200, $q.when(RESPONSE_ERROR_NOT_FOUND));

			$httpBackend.flush();

			//Espera-se que o objeto contato seja preenchido com as informações Social Media
			expect(SocialTeste.localizarPorNome).toHaveBeenCalledWith(API + '?nome_like=' + 'Teste');
			expect(ContatoControladorTeste.contato.social.id).toBeUndefined();
			expect(ContatoControladorTeste.contato.social.erro).toEqual('Nao Encontrado');
		});



	});

	describe('Controlador Contatos recebendo um contato inválido', function() {
		let unicoContato, ContatoControlador;

		beforeEach(function() {

			spyOn($state, "go");
			spyOn(SocialTeste, "localizarPorNome");

			ContatoControladorTeste = $controller('ContatoControlador', {resolveContato: unicoContato, Social: SocialTeste, $state: $state});
		});

		it('Direciona para a página 404', function() {
			expect(ContatoControladorTeste.contato).toBeUndefined();
			expect(SocialTeste.localizarPorNome).not.toHaveBeenCalled();
			expect($state.go).toHaveBeenCalledWith('404');
		});
	});


});
