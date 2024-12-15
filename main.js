$(document).ready(function() {


    $('#add').on('click', function(e) {
        e.preventDefault()

        const campo_tarefa = $('#cmp_tarefa').val()

        if (campo_tarefa != "") {

            const lista = $('<li></li>')

            $(lista).text(campo_tarefa)

            $('ul').append(lista)

            $('#cmp_tarefa').val('')
        } else {
            alert('[ERRO]Digite uma tarefa')
        }
    })

    $('ul').on('click', 'li', function() {
        $(this).addClass('feito')
    })

})
