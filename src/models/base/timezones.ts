/**
 * Provides a type for a timezone
 */
export interface TimeZone {
  /**
   * Harvest 'name
   */
  name: string;

  /**
   * TZ 'name
   */
  tz: string;

  /**
   * UTC Offset
   */
  offset: string;

  /**
   * The UTC DST Offset
   */
  offsetDST: string;
}

export const SupportedTimeZones: TimeZone[] = [
  {
    name: 'American Samoa',
    tz: 'Pacific/Pago_Pago',
    offset: '-11:00',
    offsetDST: '-11:00'
  },
  {
    name: 'International Date Line West',
    tz: 'Pacific/Midway',
    offset: '-11:00',
    offsetDST: '-11:00'
  },
  {
    name: 'Midway Island',
    tz: 'Pacific/Midway',
    offset: '-11:00',
    offsetDST: '-11:00'
  },
  {
    name: 'Hawaii',
    tz: 'Pacific/Honolulu',
    offset: '-10:00',
    offsetDST: '-10:00'
  },
  {
    name: 'Alaska',
    tz: 'America/Juneau',
    offset: '-09:00',
    offsetDST: '-08:00'
  },
  {
    name: 'Pacific Time (US & Canada)',
    tz: 'America/Los_Angeles',
    offset: '-08:00',
    offsetDST: '-07:00'
  },
  {
    name: 'Tijuana',
    tz: 'America/Tijuana',
    offset: '-08:00',
    offsetDST: '-07:00'
  },
  {
    name: 'Arizona',
    tz: 'America/Phoenix',
    offset: '-07:00',
    offsetDST: '-07:00'
  },
  {
    name: 'Chihuahua',
    tz: 'America/Chihuahua',
    offset: '-07:00',
    offsetDST: '-06:00'
  },
  {
    name: 'Mazatlan',
    tz: 'America/Mazatlan',
    offset: '-07:00',
    offsetDST: '-06:00'
  },
  {
    name: 'Mountain Time (US & Canada)',
    tz: 'America/Denver',
    offset: '-07:00',
    offsetDST: '-06:00'
  },
  {
    name: 'Central America',
    tz: 'America/Guatemala',
    offset: '-06:00',
    offsetDST: '-06:00'
  },
  {
    name: 'Central Time (US & Canada)',
    tz: 'America/Chicago',
    offset: '-06:00',
    offsetDST: '-05:00'
  },
  {
    name: 'Guadalajara',
    tz: 'America/Mexico_City',
    offset: '-06:00',
    offsetDST: '-05:00'
  },
  {
    name: 'Mexico City',
    tz: 'America/Mexico_City',
    offset: '-06:00',
    offsetDST: '-05:00'
  },
  {
    name: 'Monterrey',
    tz: 'America/Monterrey',
    offset: '-06:00',
    offsetDST: '-05:00'
  },
  {
    name: 'Saskatchewan',
    tz: 'America/Regina',
    offset: '-06:00',
    offsetDST: '-06:00'
  },
  {
    name: 'Bogota',
    tz: 'America/Bogota',
    offset: '-05:00',
    offsetDST: '-05:00'
  },
  {
    name: 'Eastern Time (US & Canada)',
    tz: 'America/New_York',
    offset: '-05:00',
    offsetDST: '-04:00'
  },
  {
    name: 'Indiana (East)',
    tz: 'America/Indiana/Indianapolis',
    offset: '-05:00',
    offsetDST: '-04:00'
  },
  {
    name: 'Lima',
    tz: 'America/Lima',
    offset: '-05:00',
    offsetDST: '-05:00'
  },
  {
    name: 'Quito',
    tz: 'America/Lima',
    offset: '-05:00',
    offsetDST: '-05:00'
  },
  {
    name: 'Atlantic Time (Canada)',
    tz: 'America/Halifax',
    offset: '-04:00',
    offsetDST: '-03:00'
  },
  {
    name: 'Caracas',
    tz: 'America/Caracas',
    offset: '-04:00',
    offsetDST: '-04:00'
  },
  {
    name: 'Georgetown',
    tz: 'America/Guyana',
    offset: '-04:00',
    offsetDST: '-04:00'
  },
  {
    name: 'La Paz',
    tz: 'America/La_Paz',
    offset: '-04:00',
    offsetDST: '-04:00'
  },
  {
    name: 'Santiago',
    tz: 'America/Santiago',
    offset: '-03:00',
    offsetDST: '-04:00'
  },
  {
    name: 'Newfoundland',
    tz: 'America/St_Johns',
    offset: '-03:30',
    offsetDST: '-02:30'
  },
  {
    name: 'Brasilia',
    tz: 'America/Sao_Paulo',
    offset: '-02:00',
    offsetDST: '-03:00'
  },
  {
    name: 'Buenos Aires',
    tz: 'America/Argentina/Buenos_Aires',
    offset: '-03:00',
    offsetDST: '-03:00'
  },
  {
    name: 'Greenland',
    tz: 'America/Godthab',
    offset: '-03:00',
    offsetDST: '-02:00'
  },
  {
    name: 'Montevideo',
    tz: 'America/Montevideo',
    offset: '-03:00',
    offsetDST: '-03:00'
  },
  {
    name: 'Mid-Atlantic',
    tz: 'Atlantic/South_Georgia',
    offset: '-02:00',
    offsetDST: '-02:00'
  },
  {
    name: 'Azores',
    tz: 'Atlantic/Azores',
    offset: '-01:00',
    offsetDST: '+00:00'
  },
  {
    name: 'Cape Verde Is.',
    tz: 'Atlantic/Cape_Verde',
    offset: '-01:00',
    offsetDST: '-01:00'
  },
  {
    name: 'Casablanca',
    tz: 'Africa/Casablanca',
    offset: '+00:00',
    offsetDST: '+01:00'
  },
  {
    name: 'Dublin',
    tz: 'Europe/Dublin',
    offset: '+00:00',
    offsetDST: '+01:00'
  },
  {
    name: 'Edinburgh',
    tz: 'Europe/London',
    offset: '+00:00',
    offsetDST: '+01:00'
  },
  {
    name: 'Lisbon',
    tz: 'Europe/Lisbon',
    offset: '+00:00',
    offsetDST: '+01:00'
  },
  {
    name: 'London',
    tz: 'Europe/London',
    offset: '+00:00',
    offsetDST: '+01:00'
  },
  {
    name: 'Monrovia',
    tz: 'Africa/Monrovia',
    offset: '+00:00',
    offsetDST: '+00:00'
  },
  {
    name: 'UTC',
    tz: 'Etc/UTC',
    offset: '+00:00',
    offsetDST: '+00:00'
  },
  {
    name: 'Amsterdam',
    tz: 'Europe/Amsterdam',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Belgrade',
    tz: 'Europe/Belgrade',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Berlin',
    tz: 'Europe/Berlin',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Bern',
    tz: 'Europe/Zurich',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Bratislava',
    tz: 'Europe/Bratislava',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Brussels',
    tz: 'Europe/Brussels',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Budapest',
    tz: 'Europe/Budapest',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Copenhagen',
    tz: 'Europe/Copenhagen',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Ljubljana',
    tz: 'Europe/Ljubljana',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Madrid',
    tz: 'Europe/Madrid',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Paris',
    tz: 'Europe/Paris',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Prague',
    tz: 'Europe/Prague',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Rome',
    tz: 'Europe/Rome',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Sarajevo',
    tz: 'Europe/Sarajevo',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Skopje',
    tz: 'Europe/Skopje',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Stockholm',
    tz: 'Europe/Stockholm',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Vienna',
    tz: 'Europe/Vienna',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Warsaw',
    tz: 'Europe/Warsaw',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'West Central Africa',
    tz: 'Africa/Algiers',
    offset: '+01:00',
    offsetDST: '+01:00'
  },
  {
    name: 'Zagreb',
    tz: 'Europe/Zagreb',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Zurich',
    tz: 'Europe/Zurich',
    offset: '+01:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Athens',
    tz: 'Europe/Athens',
    offset: '+02:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Bucharest',
    tz: 'Europe/Bucharest',
    offset: '+02:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Cairo',
    tz: 'Africa/Cairo',
    offset: '+02:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Harare',
    tz: 'Africa/Harare',
    offset: '+02:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Helsinki',
    tz: 'Europe/Helsinki',
    offset: '+02:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Jerusalem',
    tz: 'Asia/Jerusalem',
    offset: '+02:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Kaliningrad',
    tz: 'Europe/Kaliningrad',
    offset: '+02:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Kyiv',
    tz: 'Europe/Kiev',
    offset: '+02:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Pretoria',
    tz: 'Africa/Johannesburg',
    offset: '+02:00',
    offsetDST: '+02:00'
  },
  {
    name: 'Riga',
    tz: 'Europe/Riga',
    offset: '+02:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Sofia',
    tz: 'Europe/Sofia',
    offset: '+02:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Tallinn',
    tz: 'Europe/Tallinn',
    offset: '+02:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Vilnius',
    tz: 'Europe/Vilnius',
    offset: '+02:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Baghdad',
    tz: 'Asia/Baghdad',
    offset: '+03:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Istanbul',
    tz: 'Europe/Istanbul',
    offset: '+03:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Kuwait',
    tz: 'Asia/Kuwait',
    offset: '+03:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Minsk',
    tz: 'Europe/Minsk',
    offset: '+03:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Moscow',
    tz: 'Europe/Moscow',
    offset: '+03:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Nairobi',
    tz: 'Africa/Nairobi',
    offset: '+03:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Riyadh',
    tz: 'Asia/Riyadh',
    offset: '+03:00',
    offsetDST: '+03:00'
  },
  {
    name: 'St. Petersburg',
    tz: 'Europe/Moscow',
    offset: '+03:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Volgograd',
    tz: 'Europe/Volgograd',
    offset: '+03:00',
    offsetDST: '+03:00'
  },
  {
    name: 'Tehran',
    tz: 'Asia/Tehran',
    offset: '+03:30',
    offsetDST: '+04:30'
  },
  {
    name: 'Abu Dhabi',
    tz: 'Asia/Muscat',
    offset: '+04:00',
    offsetDST: '+04:00'
  },
  {
    name: 'Baku',
    tz: 'Asia/Baku',
    offset: '+04:00',
    offsetDST: '+04:00'
  },
  {
    name: 'Muscat',
    tz: 'Asia/Muscat',
    offset: '+04:00',
    offsetDST: '+04:00'
  },
  {
    name: 'Samara',
    tz: 'Europe/Samara',
    offset: '+04:00',
    offsetDST: '+04:00'
  },
  {
    name: 'Tbilisi',
    tz: 'Asia/Tbilisi',
    offset: '+04:00',
    offsetDST: '+04:00'
  },
  {
    name: 'Yerevan',
    tz: 'Asia/Yerevan',
    offset: '+04:00',
    offsetDST: '+04:00'
  },
  {
    name: 'Kabul',
    tz: 'Asia/Kabul',
    offset: '+04:30',
    offsetDST: '+04:30'
  },
  {
    name: 'Ekaterinburg',
    tz: 'Asia/Yekaterinburg',
    offset: '+05:00',
    offsetDST: '+05:00'
  },
  {
    name: 'Islamabad',
    tz: 'Asia/Karachi',
    offset: '+05:00',
    offsetDST: '+05:00'
  },
  {
    name: 'Karachi',
    tz: 'Asia/Karachi',
    offset: '+05:00',
    offsetDST: '+05:00'
  },
  {
    name: 'Tashkent',
    tz: 'Asia/Tashkent',
    offset: '+05:00',
    offsetDST: '+05:00'
  },
  {
    name: 'Chennai',
    tz: 'Asia/Kolkata',
    offset: '+05:30',
    offsetDST: '+05:30'
  },
  {
    name: 'Kolkata',
    tz: 'Asia/Kolkata',
    offset: '+05:30',
    offsetDST: '+05:30'
  },
  {
    name: 'Mumbai',
    tz: 'Asia/Kolkata',
    offset: '+05:30',
    offsetDST: '+05:30'
  },
  {
    name: 'New Delhi',
    tz: 'Asia/Kolkata',
    offset: '+05:30',
    offsetDST: '+05:30'
  },
  {
    name: 'Sri Jayawardenepura',
    tz: 'Asia/Colombo',
    offset: '+05:30',
    offsetDST: '+05:30'
  },
  {
    name: 'Kathmandu',
    tz: 'Asia/Kathmandu',
    offset: '+05:45',
    offsetDST: '+05:45'
  },
  {
    name: 'Almaty',
    tz: 'Asia/Almaty',
    offset: '+06:00',
    offsetDST: '+06:00'
  },
  {
    name: 'Astana',
    tz: 'Asia/Dhaka',
    offset: '+06:00',
    offsetDST: '+06:00'
  },
  {
    name: 'Dhaka',
    tz: 'Asia/Dhaka',
    offset: '+06:00',
    offsetDST: '+06:00'
  },
  {
    name: 'Urumqi',
    tz: 'Asia/Urumqi',
    offset: '+06:00',
    offsetDST: '+06:00'
  },
  {
    name: 'Rangoon',
    tz: 'Asia/Rangoon',
    offset: '+06:30',
    offsetDST: '+06:30'
  },
  {
    name: 'Bangkok',
    tz: 'Asia/Bangkok',
    offset: '+07:00',
    offsetDST: '+07:00'
  },
  {
    name: 'Hanoi',
    tz: 'Asia/Bangkok',
    offset: '+07:00',
    offsetDST: '+07:00'
  },
  {
    name: 'Jakarta',
    tz: 'Asia/Jakarta',
    offset: '+07:00',
    offsetDST: '+07:00'
  },
  {
    name: 'Krasnoyarsk',
    tz: 'Asia/Krasnoyarsk',
    offset: '+07:00',
    offsetDST: '+07:00'
  },
  {
    name: 'Novosibirsk',
    tz: 'Asia/Novosibirsk',
    offset: '+07:00',
    offsetDST: '+07:00'
  },
  {
    name: 'Beijing',
    tz: 'Asia/Shanghai',
    offset: '+08:00',
    offsetDST: '+08:00'
  },
  {
    name: 'Chongqing',
    tz: 'Asia/Chongqing',
    offset: '+08:00',
    offsetDST: '+08:00'
  },
  {
    name: 'Hong Kong',
    tz: 'Asia/Hong_Kong',
    offset: '+08:00',
    offsetDST: '+08:00'
  },
  {
    name: 'Irkutsk',
    tz: 'Asia/Irkutsk',
    offset: '+08:00',
    offsetDST: '+08:00'
  },
  {
    name: 'Kuala Lumpur',
    tz: 'Asia/Kuala_Lumpur',
    offset: '+08:00',
    offsetDST: '+08:00'
  },
  {
    name: 'Perth',
    tz: 'Australia/Perth',
    offset: '+08:00',
    offsetDST: '+08:00'
  },
  {
    name: 'Singapore',
    tz: 'Asia/Singapore',
    offset: '+08:00',
    offsetDST: '+08:00'
  },
  {
    name: 'Taipei',
    tz: 'Asia/Taipei',
    offset: '+08:00',
    offsetDST: '+08:00'
  },
  {
    name: 'Ulaanbaatar',
    tz: 'Asia/Ulaanbaatar',
    offset: '+08:00',
    offsetDST: '+08:00'
  },
  {
    name: 'Osaka',
    tz: 'Asia/Tokyo',
    offset: '+09:00',
    offsetDST: '+09:00'
  },
  {
    name: 'Sapporo',
    tz: 'Asia/Tokyo',
    offset: '+09:00',
    offsetDST: '+09:00'
  },
  {
    name: 'Seoul',
    tz: 'Asia/Seoul',
    offset: '+09:00',
    offsetDST: '+09:00'
  },
  {
    name: 'Tokyo',
    tz: 'Asia/Tokyo',
    offset: '+09:00',
    offsetDST: '+09:00'
  },
  {
    name: 'Yakutsk',
    tz: 'Asia/Yakutsk',
    offset: '+09:00',
    offsetDST: '+09:00'
  },
  {
    name: 'Adelaide',
    tz: 'Australia/Adelaide',
    offset: '+10:30',
    offsetDST: '+09:30'
  },
  {
    name: 'Darwin',
    tz: 'Australia/Darwin',
    offset: '+09:30',
    offsetDST: '+09:30'
  },
  {
    name: 'Brisbane',
    tz: 'Australia/Brisbane',
    offset: '+10:00',
    offsetDST: '+10:00'
  },
  {
    name: 'Canberra',
    tz: 'Australia/Melbourne',
    offset: '+11:00',
    offsetDST: '+10:00'
  },
  {
    name: 'Guam',
    tz: 'Pacific/Guam',
    offset: '+10:00',
    offsetDST: '+10:00'
  },
  {
    name: 'Hobart',
    tz: 'Australia/Hobart',
    offset: '+11:00',
    offsetDST: '+10:00'
  },
  {
    name: 'Melbourne',
    tz: 'Australia/Melbourne',
    offset: '+11:00',
    offsetDST: '+10:00'
  },
  {
    name: 'Port Moresby',
    tz: 'Pacific/Port_Moresby',
    offset: '+10:00',
    offsetDST: '+10:00'
  },
  {
    name: 'Sydney',
    tz: 'Australia/Sydney',
    offset: '+11:00',
    offsetDST: '+10:00'
  },
  {
    name: 'Vladivostok',
    tz: 'Asia/Vladivostok',
    offset: '+10:00',
    offsetDST: '+10:00'
  },
  {
    name: 'Magadan',
    tz: 'Asia/Magadan',
    offset: '+11:00',
    offsetDST: '+11:00'
  },
  {
    name: 'New Caledonia',
    tz: 'Pacific/Noumea',
    offset: '+11:00',
    offsetDST: '+11:00'
  },
  {
    name: 'Solomon Is.',
    tz: 'Pacific/Guadalcanal',
    offset: '+11:00',
    offsetDST: '+11:00'
  },
  {
    name: 'Srednekolymsk',
    tz: 'Asia/Srednekolymsk',
    offset: '+11:00',
    offsetDST: '+11:00'
  },
  {
    name: 'Auckland',
    tz: 'Pacific/Auckland',
    offset: '+13:00',
    offsetDST: '+12:00'
  },
  {
    name: 'Fiji',
    tz: 'Pacific/Fiji',
    offset: '+13:00',
    offsetDST: '+12:00'
  },
  {
    name: 'Kamchatka',
    tz: 'Asia/Kamchatka',
    offset: '+12:00',
    offsetDST: '+12:00'
  },
  {
    name: 'Marshall Is.',
    tz: 'Pacific/Majuro',
    offset: '+12:00',
    offsetDST: '+12:00'
  },
  {
    name: 'Wellington',
    tz: 'Pacific/Auckland',
    offset: '+13:00',
    offsetDST: '+12:00'
  },
  {
    name: 'Chatham Is.',
    tz: 'Pacific/Chatham',
    offset: '+13:45',
    offsetDST: '+12:45'
  },
  {
    name: 'Nuku’alofa',
    tz: 'Pacific/Tongatapu',
    offset: '+13:00',
    offsetDST: '+13:00'
  },
  {
    name: 'Samoa',
    tz: 'Pacific/Apia',
    offset: '+14:00',
    offsetDST: '+13:00'
  },
  {
    name: 'Tokelau Is.',
    tz: 'Pacific/Fakaofo',
    offset: '+13:00',
    offsetDST: '+13:00'
  }
];
