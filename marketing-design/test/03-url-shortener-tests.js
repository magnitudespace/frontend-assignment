const assert = require('assert');
const tasks = require('../tasks/03-url-shortener-tasks');
it.optional = require('../extensions/it-optional');

describe('03-url-shortener-tasks', function() {
  it.optional('urlShortener should return encoded string shorter than original url', () => {
    [
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul',
        'https://en.wikipedia.org/wiki/Percent-encoding#Types_of_URI_characters',
        'https://en.wikipedia.org/wiki/Binary-to-text_encoding#Encoding_plain_text'
    ].forEach(data => {
        var urlShortener = new tasks.UrlShortener();
        var actual = urlShortener.encode(data);
        assert(
            data.length / actual.length > 1.5,
            `urlShortener.encode for "${data}" returns "${actual}" that is only ${data.length/actual.length} times less than original url`
        );
    });
  });


  it.optional('urlShortener should decode shorten link to to the original url', () => {
    [
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul',
        'https://www.example.com/catalog.html?search=mobile+phones&price=100-200&year=2016#top_links',
    ].forEach(data => {
        var urlShortener = new tasks.UrlShortener();
        var encoded = urlShortener.encode(data);
        var actual = urlShortener.decode(encoded);
        assert.equal(
            data,
            actual,
            `urlShortener.encode for "${data}" returns "${encoded}" but decode returns "${actual}"`
        );
    });
  });
});
