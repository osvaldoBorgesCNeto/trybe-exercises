let player = {
    name: 'Osvaldo',
    lastName: 'Borges',
    age: 25,
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        golden: 2,
        silver: 3,
    }
};

console.log('O jogador ' + player.name + ' tem ' + player.age + ' anos de idade');

console.log('O jogador ' + player.name + ' ' + player.lastName + ' foi eleito a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

console.log('O jogador ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');
