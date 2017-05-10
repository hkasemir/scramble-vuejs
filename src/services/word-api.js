import queryString from 'query-string';

const WORD_API_URL = 'https://wordsapiv1.p.mashape.com';

function get(path, params) {
  const mashapeKey = 'bi98GDrJgzmshfD9vHg2PDpNANYRp10LW8Tjsn444SBzAudoOL';

  return fetch(`${WORD_API_URL}${path}${params ? `?${queryString.stringify(params)}` : ''}`, {
    headers: { 'X-Mashape-Key': mashapeKey },
  })
  .then(res => res.json())
  .then(json => json.word);
}

export default {
  fetchRandomWord() {
    const wordParams = {
      random: true,
      letterPattern: '^[a-z]{6}',
      frequencymin: 8,
      letters: 6,
    };
    return get('/words', wordParams);
  },
};
