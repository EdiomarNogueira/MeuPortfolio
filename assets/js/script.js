const typed = new Typed('.typed', {
    strings: [
        '<i class="atividades">Curso BSI no IFBA...</i>',
        '<i class="atividades">Estudo todos os dias...</i>',
        '<i class="atividades">Para me tornar Dev.Full Stack</i>',
        '<i class="atividades">Trabalho com Infraestrutura</i>'
    ],
    typeSpeed: 20, // Velocidade para acrescentar letra.
    startDelay: 300, // Tempo de atraso.
    backSpeed: 25, // Velocidade para remover letra.
    smartBackspace: true, // Remover somente palavras novas na sequência.
    shuffle: false, // Mude a ordenação e a redação das palabras.
    backDelay: 3000, // Tempo de espera segue de que termina de escribir una palabra.
    loop: true, // Repetir o array de strings.
    loopCount: false, // Número de vezes para repetir a matriz. false = infinito
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para o cursor
    contentType: 'html', // 'html' ou 'null' para texto sem formato

});