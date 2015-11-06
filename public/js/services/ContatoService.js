angular.module('contatos').factory('Contato',
	function($resource) {
		
	return $resource('/contatos/:id');
});