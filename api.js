// var rootUrl = 'https://www.google.com/finance/info';
var rootUrl = 'https://l7-stock-api.herokuapp.com/stock';

export default function (code) {
    var url = `${rootUrl}/${code}`;

    return fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            console.log(text);
            let json = JSON.parse(text.replace("//", ''))[0];
            return {
                stockIndex: json.l,
                stockChangeRaw: json.c,
                stockChangePercent: json.cp
            };
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
}