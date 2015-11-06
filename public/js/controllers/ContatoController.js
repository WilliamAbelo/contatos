angular.module('contatos').
controller('ContatoController', 
	function($scope, $routeParams, Contato){
		
		if($routeParams.contatoId){
			Contato.get({id: $routeParams.contatoId},
				function(contato){
					$scope.contato = contato;
				},
				function(erro){
					$scope.mensagem = {
						texto: 'Não foi possivel obter o contato'
					};
				}
			);
		} else{
				$scope.contato = {};
		}
		
		$scope.salva = function(){
			$scope.contato = new Contato();
			$scope.contato.$save()
				.then(function(){
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					//limpa o formulario
					$scope.contato = new Contato();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possivel salvar'};
				});
		};
		
		
});