import queryString from 'query-string';

const WORD_API_URL = 'http://api.wordnik.com:80/v4/words.json';

function get(path, params) {
  return fetch(`${WORD_API_URL}${path}?${queryString.stringify(params)}`)
  .then(res => res.json())
  .then(json => json.word);
}

export default {
  fetchRandomWord() {
    const wordParams = {
      hasDictionaryDef: 'true',
      excludePartOfSpeech: 'proper-noun',
      minCorpusCount: '20000',
      minLength: 6,
      maxLength: 6,
      api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
    };
    return get('/randomWord', wordParams);
  },
};
