KEYSModulo.controller('KEYSController', function (KEYSService, $scope) {
    $scope.adm = [];

    $scope.adicionaAdm = function () {
        $scope.adm.push({
            id: $scope.adm.id,
            nome: $scope.adm.nome,
            email: $scope.aluno.email
        });
    };

 
});
