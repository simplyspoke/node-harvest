export default class CompanyAPI {
  harvest;

  constructor(harvest) {
    this.harvest = harvest;
  }

  public get() {
    return this.harvest.request('GET', '/v2/company', {});
  }
}

/**
 * An response from the Company API
 */
export interface Company {
  // The Harvest URL for the company.
  base_uri: string;

  // The Harvest domain for the company.
  full_domain: string;

  // The name of the company.
  name: string;

  // Whether the company is active or archived.
  is_active: boolean;

  // The week day used as the start of the week. Returns one of: Saturday, Sunday, or Monday.
  week_start_day: string;

  // Whether time is tracked via duration or start and end times.
  wants_timestamp_timers: boolean;

  // The format used to display time in Harvest. Returns either decimal or hours_minutes.
  time_format: string;

  // The type of plan the company is on. Examples: trial, free, or simple-v4
  plan_type: string;

  // Used to represent whether the company is using a 12-hour or 24-hour clock. Returns either 12h or 24h.
  clock: string;

  // Symbol used when formatting decimals.
  decimal_symbol: string;

  // Separator used when formatting numbers.
  thousands_separator: string;

  // The color scheme being used in the Harvest web client.
  color_scheme: string;

  // Whether the expense module is enabled.
  expense_feature: boolean;

  // Whether the invoice module is enabled.
  invoice_feature: boolean;

  // Whether the estimate module is enabled.
  estimate_feature: boolean;

  // Whether the approval module is enabled.
  approval_feature: boolean;
}
