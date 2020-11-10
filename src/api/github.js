import axios from 'axios';
import qs from 'qs';
import parseLink from 'parse-link-header';

function isLastPage(pageLinks) {
  return (
    pageLinks.first && pageLinks.prev && !pageLinks.last && !pageLinks.next
  );
}

function getPageCount(pageLinks) {
  if (!pageLinks) {
    return 0;
  }
  if (isLastPage(pageLinks)) {
    return parseInt(pageLinks.prev.page, 10) + 1;
  } else if (pageLinks.last) {
    return parseInt(pageLinks.last.page, 10);
  } else {
    return 0;
  }
}

/**
 *
 * @typedef User
 * @property {number} id
 * @property {string} html_url
 * @property {string} login
 */

/**
 *
 * @typedef Repo
 * @property {number} id
 * @property {string} full_name
 * @property {User} owner
 * @property {string} html_url
 * @property {string} description
 */

/**
 *
 * @typedef SearchReposResult
 * @property {number} repoCount
 * @property {number} pageCount
 * @property {Repo[]} repos
 */

/**
 *
 *
 * @param {Object} params
 * @param {string} params.q **Required**. The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See "[Searching for repositories](https://help.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
 * @param {string} [params.sort] Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
 * @param {string} [params.order] Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`. Default: `desc`
 * @param {number|string} [params.perPage = 10] Integer. Results per page (max 100)
 * @param {number|string} [params.page = 1] Integer. Page number of the results to fetch. (start from 1)
 * @return {Promise<SearchReposResult>}
 */
export async function searchRepos({ q = '', sort, order, perPage, page }) {
  const query = qs.stringify(
    {
      q,
      sort,
      order,
      per_page: perPage,
      page,
    },
    { addQueryPrefix: false }
  );
  const url = `https://api.github.com/search/repositories?${query}`;
  const response = await axios.get(url, {
    headers: { accept: 'application/vnd.github.v3+jso' },
  });
  const { data } = response;
  const pageLinks = parseLink(response.headers.link);
  const pageCount = getPageCount(pageLinks);
  return {
    repoCount: data?.total_count,
    pageCount,
    repos: data?.items,
  };
}
