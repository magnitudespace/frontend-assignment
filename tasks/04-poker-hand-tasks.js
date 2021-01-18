/**
 * Returns the rank of the specified poker hand.
 * See the ranking rules here: https://en.wikipedia.org/wiki/List_of_poker_hands.
 *
 * @param {array} hand
 * @return {PokerRank} rank
 *
 * @example
 *   [ '4♥','5♥','6♥','7♥','8♥' ] => PokerRank.StraightFlush
 *   [ 'A♠','4♠','3♠','5♠','2♠' ] => PokerRank.StraightFlush
 *   [ '4♣','4♦','4♥','4♠','10♥' ] => PokerRank.FourOfKind
 *   [ '4♣','4♦','5♦','5♠','5♥' ] => PokerRank.FullHouse
 *   [ '4♣','5♣','6♣','7♣','Q♣' ] => PokerRank.Flush
 *   [ '2♠','3♥','4♥','5♥','6♥' ] => PokerRank.Straight
 *   [ '2♥','4♦','5♥','A♦','3♠' ] => PokerRank.Straight
 *   [ '2♥','2♠','2♦','7♥','A♥' ] => PokerRank.ThreeOfKind
 *   [ '2♥','4♦','4♥','A♦','A♠' ] => PokerRank.TwoPairs
 *   [ '3♥','4♥','10♥','3♦','A♠' ] => PokerRank.OnePair
 *   [ 'A♥','K♥','Q♥','2♦','3♠' ] =>  PokerRank.HighCard
 */
const PokerRank = {
  StraightFlush: 8,
  FourOfKind: 7,
  FullHouse: 6,
  Flush: 5,
  Straight: 4,
  ThreeOfKind: 3,
  TwoPairs: 2,
  OnePair: 1,
  HighCard: 0,
};

const getPokerHandRank = hand => {
  const cardOrder = '23456789TJQKA';

  // Replace "10" with T for easy suit/face extraction
  const handWithT = hand.map(card => {
    if (card.includes('10')) return card.replace('10', 'T');
    return card;
  });

  // Extract faces
  const faces = handWithT.map(card => card.slice(0, 1));

  const orderedFaces = faces
    .map(face => {
      // convert faces to their number value
      if (face === 'T') return '10';
      if (face === 'J') return '11';
      if (face === 'Q') return '12';
      if (face === 'K') return '13';
      if (face === 'A') return '14';
      return face;
    })
    .sort((a, b) => a - b) // sort ascending
    .map(face => {
      // convert back to the original values
      if (face === '10') return 'T';
      if (face === '11') return 'J';
      if (face === '12') return 'Q';
      if (face === '13') return 'K';
      if (face === '14') return 'A';
      return face;
    });

  // Convert to string
  const orderedFacesStr = orderedFaces.join('');

  // Extract suits
  const suits = handWithT.map(card => card.slice(1));

  const orderedSuits = suits
    .map(suit => suit.charCodeAt(0)) // convert to comparable number values
    .sort((a, b) => a - b); // sort ascending

  // When suits and faces are ordered ascending by values,
  // the following minimum conditions will be true
  // (minimum, because e.g. four of a kind would also pass a two pair test)

  const flush = orderedSuits[0] === orderedSuits[4]; // first and last suit will always match

  const straight =
    cardOrder.includes(orderedFacesStr) || orderedFacesStr === '2345A';

  const fourOfKind =
    orderedFaces[0] === orderedFaces[3] || orderedFaces[1] === orderedFaces[4];

  const fullHouse =
    (orderedFaces[0] === orderedFaces[2] &&
      orderedFaces[3] === orderedFaces[4]) ||
    (orderedFaces[0] === orderedFaces[1] &&
      orderedFaces[2] === orderedFaces[4]);

  const threeOfKind =
    orderedFaces[0] === orderedFaces[2] ||
    orderedFaces[4] === orderedFaces[2] ||
    orderedFaces[1] === orderedFaces[3];

  const twoPairs =
    (orderedFaces[0] === orderedFaces[1] &&
      orderedFaces[2] === orderedFaces[3]) ||
    (orderedFaces[0] === orderedFaces[1] &&
      orderedFaces[3] === orderedFaces[4]) ||
    (orderedFaces[1] === orderedFaces[2] &&
      orderedFaces[3] === orderedFaces[4]);

  // If there are exactly 4 unique faces then one of them has to be paired
  const onePair =
    faces.filter((face, index, self) => self.indexOf(face) === index).length ===
    4;

  if (straight && flush) return PokerRank.StraightFlush;
  if (fourOfKind) return PokerRank.FourOfKind;
  if (fullHouse) return PokerRank.FullHouse;
  if (flush) return PokerRank.Flush;
  if (straight) return PokerRank.Straight;
  if (threeOfKind) return PokerRank.ThreeOfKind;
  if (twoPairs) return PokerRank.TwoPairs;
  if (onePair) return PokerRank.OnePair;
  return PokerRank.HighCard;
};

module.exports = {
  PokerRank,
  getPokerHandRank,
};
