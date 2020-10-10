(function () {
    "use strict";

    angular.module('pokedexApp')
        .service('PokedexService', pokedexService);

        pokedexService.$inject = ['$http'];

    function pokedexService($http) {
        
        return {
            busca: busca,
            desc: desc
        }

        //Requisição pra buscar o nome e a imagem do pokémon
        function busca(_params) {
            return $http.get('https://pokeapi.co/api/v2/pokemon/' + _params)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    return error;
                });
        }

        //Requisição para buscar a descrição do pokémon
        function desc(_params){
            // o parametro passado é a URL que traz a descrição. URL obtida com a requisição anterior
            return $http.get(_params)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    return error;
                });
        }
    }


})();