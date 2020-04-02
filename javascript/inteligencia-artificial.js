var config = {
  lang: "pt",
  continuous: true,
  debug: false,
  listen: true,
  soundex: true
}

artyom.initialize(config);

// var saudacao = [
//   "Bom dia", "Boa tarde", "Boa Noite", "Olá", "olá", "ola", "oi", "ooie", "Oi", "Oiie", "E aí", "e aí", "E aí, beleza", "Beleza", "beleza"
// ]


// artyom.say("Seja Bem vindo ao site Developer Circles de Santa Rita do Sapucaí");
// artyom.say("Me chame se precisar de algo, meu nome é Lisa", {
//   onStart:function(){
//     artyom.fatality();
//     artyom.dontObey();
//   },
//   onEnd:function(){
//     artyom.initialize(config);
//   }
// });
var funcSaudacao = {
  indexes: ['lisa', 'hey, lisa', 'ola, lisa'],
  action: function(){
    artyom.say("Ainda sou um bebê, mas posso te ajudar com algumas coisas: ");
    artyom.say("Fale 'Abrir Sorteador' eu abro o meu sorteador", {
      onStart:function(){
        artyom.fatality();
        artyom.dontObey();
      },
      onEnd:function(){
        artyom.initialize(config);
      }
    });
    artyom.say("Fale 'Sobre' eu conto a você mais sobre a gente");
  }
}

var openSorteador = {
  indexes: ['abrir sorteador', 'Abrir Sorteador', 'sorteador'],
  action: function(){
    // artyom.say("Abrindo sorteador", {
    //   onStart:function(){
    //     artyom.fatality();
    //     artyom.dontObey();
    //   },
    //   onEnd:function(){
    //     artyom.initialize(config);
    //   }
    // });
    document.getElementById("sorteio").click();
    // artyom.say("Fale exemplo: 'Minimo recebe 10' para atribuir o valor minimo");
  }
}

var closeSorteador = {
  indexes: ['fechar sorteador', 'Fechar Sorteador'],
  action: function(){
    artyom.say("Fechando sorteador");
    document.getElementById("fecharSorteador").click();
  }
}

var gerarNumero = {
  indexes: ['Gerar', 'gerar', 'sortear', 'Sortear'],
  action: function(){
    // artyom.say("Sorteando");
    document.getElementById("gerador").click();
  }
}

var openSnack = {
  indexes: ['Abrir jogo', 'cobrinha', 'jogo da cobrinha', 'snack'],
  action: function(){
    artyom.say("Abrindo jogo", {
      onStart:function(){
        artyom.fatality();
        artyom.dontObey();
      },
      onEnd:function(){
        artyom.initialize(config);
      }
    });
    $('#snake').modal('show');
  }
}

var clsoeSnack = {
  indexes: ['fechar jogo', 'fechar jogo da cobrinha', 'fechar snack'],
  action: function(){
    artyom.say("Fechando jogo");
    $('#snake').modal('hide');
  }
}

var palavroes = {
  indexes: ['Toma no Cu', 'fodase', 'fodac', 'chupa', 'filho da mãe', 'filho da puta', 'desgraça', 'Desgraça'],
  action: function(){
      artyom.say("Olha a boca, jovem");
  }
}

var minimo = {
  smart:true,
  indexes: ["Mínimo Recebe *"],
  action: function(i, wildcard){
      // Speak alterable value
      if(wildcard == "um"){
        document.getElementById('min').value=1;
      } else {
        document.getElementById('min').value=wildcard;
      }
  }
}

var maximo = {
  smart:true,
  indexes: ["Máximo Recebe *"],
  action: function(i, wildcard){
      // Speak alterable value
      document.getElementById('max').value=wildcard;
  }
}

artyom.addCommands(funcSaudacao);
artyom.addCommands(openSorteador);
artyom.addCommands(closeSorteador);
artyom.addCommands(openSnack);
artyom.addCommands(clsoeSnack);
artyom.addCommands(gerarNumero);
artyom.addCommands(palavroes);
artyom.addCommands(minimo);
artyom.addCommands(maximo);






// artyom.fatality();

// artyom.sayRandom(saudacao, {
//   onStart:function(){
//     artyom.fatality();
//     artyom.dontObey();
//   },
//   onEnd:function(){
//     artyom.initialize(config);
//   }
// });
