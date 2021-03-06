export const FETCH_REPO_DATA = 'FETCH_REPO_DATA ';
export const FETCH_REPO_DETAILS = 'FETCH_REPO_DATA_DETAILS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_BEGIN = 'FETCH_BEGIN';
export const SET_QUERIES = 'FETCH_SET_QUERIES';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_KEYWORDS  = 'SET_KEYWORDS';
const initialState = {
  repos: [],
  repoDetails: null,
  owner: '',
  page: '',
  repoName: '',
  sortType: '',
  language: '',
  keyword: '',
  loading: false,
  error: null
};

export default function reposReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BEGIN:
      // Mark the state as "loading" 
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_REPO_DATA:
      // All done: set loading "false".
      return {
        ...state,
        loading: false,
        repos: action.payload.repos
      };

    // store single repo fetched data
    case FETCH_REPO_DETAILS:
      return {
        ...state,
        loading: false,
        repoDetails: action.payload.details
      };

    // store queries to fetch information: page, language, and sort
    case SET_QUERIES:
      return {
        ...state,
        language: action.payload.queries.language,
        page: action.payload.queries.page,
        sortType: action.payload.queries.sortType,
      };

    // store keywords from search input
    case SET_KEYWORDS:
      return {
          ...state,
          keyword: action.payload.keyword.keyword,
      };

    // store owner and repo name info
    case SET_USER_DATA:
      return {
        ...state,
        owner: action.payload.userInfo.owner,
        repoName: action.payload.userInfo.repoName
      };

    case FETCH_FAILURE:
      // The request failed
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}