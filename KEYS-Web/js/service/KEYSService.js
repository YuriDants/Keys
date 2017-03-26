KEYSModulo.factory("KEYSService", function($http) {

    var urlBase = "http://localhost:8080/RestEasyApp";
    
      var _cadastrarAdm = function(adm){
		return $http.post(urlBase + "/adm/cadastrar", adm)
	};
    
     return {
        cadastrarAluno: _cadastrarAluno
    };

});
