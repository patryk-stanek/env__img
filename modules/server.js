var http = require('http');
var colors = require('colors');

var handlers = require('./handlers');

function start() {
    function onRequest(request, response) {
        console.log('Odebrano zapytanie.'.yellow);
        console.log('Zapytanie ' + request.url + ' odebrane.');

        switch (request.url) {
            case '/css/style.css':
                handlers.style(response);
                break;
            case '/': //case ten i poniższy wywołuje te same zdarzenia
            case '/start':
                handlers.welcome(request, response);
                break;
            case '/upload':
                handlers.upload(request, response);
                break;
            case '/show':
                handlers.show(request, response);
                break;
            default:
                handlers.error(request, response);
        }
    }

    http.createServer(onRequest).listen(9000);

    console.log('Uruchomiono serwer!'.green);
}

exports.start = start;