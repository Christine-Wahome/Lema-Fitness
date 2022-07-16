export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bf4a6ce0abmsh0d4d3c0787b825dp13ca74jsne5c922054d5f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bf4a6ce0abmsh0d4d3c0787b825dp13ca74jsne5c922054d5f',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };

export const fetchData = async ( url, options) => {
 const response = await fetch(url, options);
 const data = await response.json();

 return data;

};