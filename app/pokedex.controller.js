(function () {
    "use strict";

    // MODULO
    angular.module('pokedexApp')
        .controller('PokedexController', pokedexController);

        pokedexController.$inject = ['PokedexService'];
    function pokedexController(service){
        var vm = this;

        
        vm.img = 'fundo.png';
        vm.buscar = buscar;
        vm.info = "Olá! Essa é a pokédex!\nPesquise pelo número do Pokemon!";

        function buscar(){
            return service.busca(vm.numero)
                .then(function (response) {
                    //Trata a resposta inválida!
                    if(response.status == '404'){
                        vm.img = 'not_found.jpg';
                        vm.name = "";
                        vm.info = "Pokémon não encontrado!"
                    } else{
                        vm.name = response.name;
                        vm.img = response.sprites.front_default;
                        vm.info = info(response.species.url);
                    }
                });
        }

        //Busca a descrição do pokemon em outra requisição, pois está em outra URL da API
        function info(_url){
            return service.desc(_url)
                .then(function(response){
                    vm.info = response.flavor_text_entries[1].flavor_text;
                })
            
        }

    }


})();