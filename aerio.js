readline=require('readline-sync');
var op=null
var nome=null
var sobrenome=null
var idade=null
var assento=null
var origem=null
var destino=null

console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +")
console.log(" |                                        | ")
console.log(" |    1 - Comprar Passagem                | ")
console.log(" |    2 - Consultar Voos                  | ")
console.log(" |    3 - Mapa de assentos                | ")
console.log(" |    4 - Emitir Ticket                   | ")
console.log(" |    0 - Encessar o Programa             | ")
console.log("+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ +")
console.log("                                            ")
while(op!=0){
    op=readline.question("Selecione uma das opcoes acima: ")
    if(op==1){
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +")
        console.log("                                            ")
        console.log("Voce esta em -> Comprar Passagem            ")
        nome=readline.question("Nome:")
        sobrenome=readline.question("Sobrenome:")
        idade=readline.question("Idade:")
        assento=readline.question("Assento:(disponível:A1;A2;B3)")
        origem=readline.question("Origem:")
        while(origem!="Presidente Prudente"){
            origem=readline.question("digite novamente:")
        }
        destino=readline.question("Destino:")
        while(destino!="Dublin"){
            destino=readline.question("digite novamente:")
        }
        console.log("+ _ _ _ _ _ _ Resumo da compra _ _ _ _ _ _ +")
        console.log("  Nome:"+nome)
        console.log("  Sobrenome:"+sobrenome)
        console.log("  Idade:"+idade)
        console.log("  Assento:"+assento)
        console.log("  Voo: "+origem+" X "+destino)
        console.log("  Status do Voo: confirmado")
        console.log("  ")
        console.log("+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  +")
    }
    else if(op==2){
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +")
        console.log("                                            ")
        console.log("  Voce esta em -> Consulta de Voos          ")
        console.log("                                            ")
        console.log("  Origem                X    Destino        ")
        console.log("____________________________________________")
        console.log("  Presidente Prudente        Dublin         ")
        console.log("  Presidente Prudente        Ceara          ")
        console.log("  Presidente Prudente        Sao Paulo      ")
        console.log("  Presidente Prudente        New York       ")
        console.log("+__________________________________________+")
    }
    else if(op==3){
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +")
        console.log("                                            ")
        console.log("  Voce esta em -> Mapa de Assentos          ")
        if(assento=="A1"){
            console.log("----------------------------------------")
            console.log(" X  A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12")
            console.log(" B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12")
            console.log("----------------------------------------")
        }
        else if(assento="A2"){
            console.log("----------------------------------------")
            console.log(" A1 X A3 A4 A5 A6 A7 A8 A9 A10 A11 A12")
            console.log(" B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12")
            console.log("----------------------------------------")
        }
        else if(assento="B3"){
            console.log("----------------------------------------")
            console.log(" A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12")
            console.log(" B1 B2 X B4 B5 B6 B7 B8 B9 B10 B11 B12")
            console.log("----------------------------------------")
        }
    }
    else if(op==4){
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +")
        console.log("                                            ")
        console.log("  Voce esta em -> Consulta de Voos          ")
        console.log("                                            ")
        console.log("********************************************")
        console.log("*OBRIGADO POR VIAJAR CONOSCO               *")
        console.log("*                                          *")
        console.log("*Cliente: "+nome+" "+sobrenome+"           *")
        console.log("*Idade: "+idade+"   Assento: "+assento+"   *")
        console.log("*Orugem/Destino: "+origem+" > "+destino+"  *")
        console.log("Status de Voo: confirmado                  *")
        console.log("*                                          *")
        console.log("********************************************")
    }
}