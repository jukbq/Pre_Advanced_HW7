$('.serchBtn').click(function(e) {
    e.preventDefault();
    let serch = $('.serchArr').val()
    class Movie_List {
        constructor(poster, title, type, year) {
            this.poster = poster;
            this.title = title;
            this.type = type;
            this.year = year;
        }
    }


    console.log(serch);

    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=bc91fe78&s=*' +
        serch +
        '*&page=10' +
        '&plot=full';

    async function get() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            let movirList = $.each(data, function(index, value) {
                /*  function postData() {
                     return fetch('http://localhost:3000/posts', {
                             method: 'POST',
                             body: JSON.stringify(new Movie_List(index, value)),
                             headers: {
                                 'Content-type': 'application/json'
                             }
                         })
                         .then(() => console.log('POST DONE'))
                         .catch(err => console.log(err))

                 } */

            });
            return console.log(movirList);
        } catch (err) {
            return console.log(err);
        }


    }

    function postData() {
        return fetch('http://localhost:3000/posts', {
                method: 'POST',
                body: JSON.stringify(new Post('first post', 'Ivan')),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(() => console.log('POST DONE'))
            .catch(err => console.log(err))

    }
    get()
    console.log();

});