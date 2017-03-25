KEYSModulo.controller('KEYSController', function ($scope) {
    $scope.adms = [];

    $scope.adicionaAdm = function () {
        $scope.adms.push({
            id: $scope.adm.id,
            nome: $scope.adm.nome,
            email: $scope.adm.email
        });
    };
});
