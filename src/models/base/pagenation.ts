/**
 * All collection endpoints are paginated with the following optional parameters
 */
export interface PagenationParameters {
  /**
   * The page number to use in pagination.
   * Type: integer
   * Default: 1
   * Range: 1 or more
   */
  page: number;

  /**
   * The number of records to return per page.
   * Type: integer
   * Default: 100
   * Range: 1 to 100
   */
  per_page: number;
}

/**
 * Response
 */
export interface PagenationResponse {
  /**
   * The current page
   */
  page: number;

  /**
   * Total number of pages
   */
  total_pages: number;

  /**
   * Total number of entries
   */
  total_entries: number;

  /**
   * The next page number
   */
  next_page: number | null;

  /**
   * The previous page number
   */
  previous_page: number | null;

  /**
   * Links to other pages
   */
  links: {
    /**
     * The first page of entries
     */
    first: string;

    /**
     * The next page of entries
     */
    next: string | null;

    /**
     * The previous page of entries
     */
    previous: string | null;

    /**
     * The last page of entries
     */
    last: string;
  };
}
