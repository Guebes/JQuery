
    $('#abrir').on('click', function(){

        $('.adicionar').slideDown(1000)
    })

    $('#adicionarTarefa').on('click', function(e){

        e.preventDefault()

        const campo_tarefa = $('#tarefa').val()

        const lista = $('<li></li>')

        $(lista).text(campo_tarefa)
        $('ul').append(lista)
        $('#tarefa').val('')

    })

    $('ul').on('click', 'li', function(){

        $(this).toggleClass('linha')
    })
