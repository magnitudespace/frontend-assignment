/**
* Class representing the url shorting helper.
* Feel free to implement any algorithm, but do not store link in the key\value stores.
* The short link can be at least 1.5 times shorter than the original url.
*
* @class
*
* @example
*
*     var urlShortener = new UrlShortener();
*     var shortLink = urlShortener.encode('https://en.wikipedia.org/wiki/URL_shortening');
*     var original  = urlShortener.decode(shortLink); // => 'https://en.wikipedia.org/wiki/URL_shortening'
*
*/
function UrlShortener() {
  this.urlAllowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.~!*'();:@&=+$,/?#[]";
}

UrlShortener.prototype = {
  encode(url) {
    throw new Error('Not implemented');
  },

  decode(code) {
    throw new Error('Not implemented');
  },
};

module.exports = {
  UrlShortener,
};
