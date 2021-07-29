$('.serchBtn').click(function(e) {
    e.preventDefault();
    let serch = $('.serchArr').val()

    console.log(serch);

    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=bc91fe78&s=*' +
        serch;

    async function get() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            let listCreat = '<ul>'
            let movirList = $.each(data.Search, function(index, value) {
                listCreat += '<li>';
                listCreat += '<img src="' + value.Poster + '"> ';
                listCreat += '' + value.Title + ' ';
                listCreat += '' + value.Type + ' ';
                listCreat += '' + value.Year + ' ';

            });
            listCreat += '</ul>';
            $('#movieList').html(listCreat);

            return console.log(data);
        } catch (err) {
            return console.log(err);
        }


    }

    get()


});