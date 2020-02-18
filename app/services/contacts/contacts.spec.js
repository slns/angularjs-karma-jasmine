describe('Conjunto de testes', function () {
    let ContactosTestes;

    let unicoContato = {
		id: '2',
		nome: 'Matheus',
		sexo: 'Masculino',
		cidade: 'Valinhos',
		nascimento: '2008-03-25',
		social: {
			nome: 'Facebook'
		}
	};

	let listaDeContatosTeste = [
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

    beforeEach(angular.mock.module('api.contactos'));

    beforeEach(inject(function (Contatos) {
        ContactosTestes = Contatos;
    }));

    it('Serviço existe', function () {
        expect(ContactosTestes).toBeDefined();
    });

    describe('todos()', function () {

        it('Method existe ', function () {
            expect(ContactosTestes.todos).toBeDefined();
        });

        it('Deveria retornar uma lista hard code de contactos ', function () {
            expect(ContactosTestes.todos()).toEqual(listaDeContatosTeste);
        });

    });

    describe('localizarContactosPorId()', function () {
        it('Metodo existe ', function () {
            expect(ContactosTestes.localizarContatoPorId).toBeDefined();
        });

        it('Retornar um objecto do tipo contato se  ele exister ', function () {
            expect(ContactosTestes.localizarContatoPorId('2')).toEqual(unicoContato);
        });

        it('Retornar indefinido se o contato não for encontrado', function () {
            expect(ContactosTestes.localizarContatoPorId('XPTO')).not.toBeDefined();
        });
    });

});
