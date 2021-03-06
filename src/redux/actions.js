export const FETCH_REPO_DATA = 'FETCH_REPO_DATA ';
export const FETCH_REPO_DETAILS = 'FETCH_REPO_DATA_DETAILS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_BEGIN = 'FETCH_BEGIN';
export const SET_QUERIES = 'FETCH_SET_QUERIES';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_KEYWORDS = 'SET_KEYWORDS';

export const fetchRepoData = (repos) => ({
  type: FETCH_REPO_DATA,
  payload: { repos }
});

export const setQueries = (queries) => ({
  type: SET_QUERIES,
  payload: { queries }
});

export const setKeywords = (keyword) => ({
  type: SET_KEYWORDS,
  payload: { keyword }
});

export const fetchRepoDataDetails = (details) => ({
  type: FETCH_REPO_DETAILS,
  payload: { details }
});

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error }
});

export const fetchBegin = (loading) => ({
  type: FETCH_BEGIN,
  payload: { loading }
});

export const setUserData = (userInfo) => ({
  type: SET_USER_DATA,
  payload: { userInfo }
});