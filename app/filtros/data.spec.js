describe('Filtro de data', function () {

    let filtroTeste;

    beforeEach(angular.mock.module('filtros.data'));
    beforeEach(inject(function (_$filter_) {
        filtroTeste = _$filter_('data');
    }));

    it('Deve converter uma data para o formato dd-mm-yyyy, se  for passado o formato yyy-mm-dd ', function () {
        expect(filtroTeste('2020-02-14')).toEqual('14-02-2020');
    });

    it('Nao filtra conforme o resultado esperado', function () {
        expect(filtroTeste('02-10-2010')).not.toEqual('10-02-2010');
    });
});