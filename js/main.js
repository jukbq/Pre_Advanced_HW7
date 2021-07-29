$('.serchBtn').click(function(e) {

    let serch = $('.serchArr').val()



    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=bc91fe78&s=*' +
        serch;

    async function get() {
        e.preventDefault();
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response == "False") {
                $('#movieList').empty();
                let error = '<h1>!!!NO ONE FOUND FOR YOUR INQUIRY!!!</h1>'
                $('#error').html(error);
            } else {
                $('#error').empty();
                let listCreat = '<ul>'
                $.each(data.Search, function(index, value) {
                    listCreat += '<li>';
                    if (value.Poster == 'N/A') {
                        listCreat += '<img src="/img/noposter.png"> ';
                    } else {
                        listCreat += '<img src="' + value.Poster + '"> ';
                    }
                    listCreat += '<div class="movie_titel">' + value.Title + '</div> ';
                    listCreat += '<p class="movie_type">' + value.Type + '</p> ';
                    listCreat += '<p class="movie_year">' + value.Year + '</p> ';
                    listCreat += ' <button class="btn supBtn btn-success moreDetail" type="submit">Nore details</button> ';
                    listCreat += '</li>';
                });
                listCreat += '</ul>';
                $('#movieList').html(listCreat);
            }

        } catch (err) {

            return console.log(error);
        }


    }

    get()


});