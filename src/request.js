const API_KEY = "a4c6533c91beb4f384a29a203d3e28f6";

const requests={
    fetchTrendingNow: `/trending/all/week?api_keys=${API_KEY}&language=en-US`,
    fetchNetflixOriinal: `/discover/tv?api_keys=${API_KEY}&with_networks=213`
};

export default requests;
