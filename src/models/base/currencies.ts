/**
 * Provides a type for a timezone
 */
export interface Currency {
  /**
   * Harvest Name
   */
  name: string;

  /**
   * Code
   */
  code: string;
}

export const SupportedCurrency: Currency[] = [
  {
    name: 'United States Dollar',
    code: 'USD'
  },
  {
    name: 'Euro',
    code: 'EUR'
  },
  {
    name: 'British Pound',
    code: 'GBP'
  },
  {
    name: 'Australian Dollar',
    code: 'AUD'
  },
  {
    name: 'Canadian Dollar',
    code: 'CAD'
  },
  {
    name: 'Japanese Yen',
    code: 'JPY'
  },
  {
    name: 'United Arab Emirates Dirham',
    code: 'AED'
  },
  {
    name: 'Afghan Afghani',
    code: 'AFN'
  },
  {
    name: 'Albanian Lek',
    code: 'ALL'
  },
  {
    name: 'Armenian Dram',
    code: 'AMD'
  },
  {
    name: 'Netherlands Antillean Gulden',
    code: 'ANG'
  },
  {
    name: 'Angolan Kwanza',
    code: 'AOA'
  },
  {
    name: 'Argentine Peso',
    code: 'ARS'
  },
  {
    name: 'Aruban Florin',
    code: 'AWG'
  },
  {
    name: 'Azerbaijani Manat',
    code: 'AZN'
  },
  {
    name: 'Bosnia and Herzegovina Convertible Mark',
    code: 'BAM'
  },
  {
    name: 'Barbadian Dollar',
    code: 'BBD'
  },
  {
    name: 'Bangladeshi Taka',
    code: 'BDT'
  },
  {
    name: 'Bulgarian Lev',
    code: 'BGN'
  },
  {
    name: 'Bahraini Dinar',
    code: 'BHD'
  },
  {
    name: 'Burundian Franc',
    code: 'BIF'
  },
  {
    name: 'Bermudian Dollar',
    code: 'BMD'
  },
  {
    name: 'Brunei Dollar',
    code: 'BND'
  },
  {
    name: 'Bolivian Boliviano',
    code: 'BOB'
  },
  {
    name: 'Brazilian Real',
    code: 'BRL'
  },
  {
    name: 'Bahamian Dollar',
    code: 'BSD'
  },
  {
    name: 'Bhutanese Ngultrum',
    code: 'BTN'
  },
  {
    name: 'Botswana Pula',
    code: 'BWP'
  },
  {
    name: 'Belarusian Ruble',
    code: 'BYN'
  },
  {
    name: 'Belarusian Ruble',
    code: 'BYR'
  },
  {
    name: 'Belize Dollar',
    code: 'BZD'
  },
  {
    name: 'Congolese Franc',
    code: 'CDF'
  },
  {
    name: 'Swiss Franc',
    code: 'CHF'
  },
  {
    name: 'Unidad de Fomento',
    code: 'CLF'
  },
  {
    name: 'Chilean Peso',
    code: 'CLP'
  },
  {
    name: 'Chinese Renminbi Yuan',
    code: 'CNY'
  },
  {
    name: 'Colombian Peso',
    code: 'COP'
  },
  {
    name: 'Costa Rican Colón',
    code: 'CRC'
  },
  {
    name: 'Cuban Convertible Peso',
    code: 'CUC'
  },
  {
    name: 'Cuban Peso',
    code: 'CUP'
  },
  {
    name: 'Cape Verdean Escudo',
    code: 'CVE'
  },
  {
    name: 'Czech Koruna',
    code: 'CZK'
  },
  {
    name: 'Djiboutian Franc',
    code: 'DJF'
  },
  {
    name: 'Danish Krone',
    code: 'DKK'
  },
  {
    name: 'Dominican Peso',
    code: 'DOP'
  },
  {
    name: 'Algerian Dinar',
    code: 'DZD'
  },
  {
    name: 'Egyptian Pound',
    code: 'EGP'
  },
  {
    name: 'Eritrean Nakfa',
    code: 'ERN'
  },
  {
    name: 'Ethiopian Birr',
    code: 'ETB'
  },
  {
    name: 'Fijian Dollar',
    code: 'FJD'
  },
  {
    name: 'Falkland Pound',
    code: 'FKP'
  },
  {
    name: 'Georgian Lari',
    code: 'GEL'
  },
  {
    name: 'Ghanaian Cedi',
    code: 'GHS'
  },
  {
    name: 'Gibraltar Pound',
    code: 'GIP'
  },
  {
    name: 'Gambian Dalasi',
    code: 'GMD'
  },
  {
    name: 'Guinean Franc',
    code: 'GNF'
  },
  {
    name: 'Guatemalan Quetzal',
    code: 'GTQ'
  },
  {
    name: 'Guyanese Dollar',
    code: 'GYD'
  },
  {
    name: 'Hong Kong Dollar',
    code: 'HKD'
  },
  {
    name: 'Honduran Lempira',
    code: 'HNL'
  },
  {
    name: 'Croatian Kuna',
    code: 'HRK'
  },
  {
    name: 'Haitian Gourde',
    code: 'HTG'
  },
  {
    name: 'Hungarian Forint',
    code: 'HUF'
  },
  {
    name: 'Indonesian Rupiah',
    code: 'IDR'
  },
  {
    name: 'Israeli New Sheqel',
    code: 'ILS'
  },
  {
    name: 'Indian Rupee',
    code: 'INR'
  },
  {
    name: 'Iraqi Dinar',
    code: 'IQD'
  },
  {
    name: 'Iranian Rial',
    code: 'IRR'
  },
  {
    name: 'Icelandic Króna',
    code: 'ISK'
  },
  {
    name: 'Jamaican Dollar',
    code: 'JMD'
  },
  {
    name: 'Jordanian Dinar',
    code: 'JOD'
  },
  {
    name: 'Kenyan Shilling',
    code: 'KES'
  },
  {
    name: 'Kyrgyzstani Som',
    code: 'KGS'
  },
  {
    name: 'Cambodian Riel',
    code: 'KHR'
  },
  {
    name: 'Comorian Franc',
    code: 'KMF'
  },
  {
    name: 'North Korean Won',
    code: 'KPW'
  },
  {
    name: 'South Korean Won',
    code: 'KRW'
  },
  {
    name: 'Kuwaiti Dinar',
    code: 'KWD'
  },
  {
    name: 'Cayman Islands Dollar',
    code: 'KYD'
  },
  {
    name: 'Kazakhstani Tenge',
    code: 'KZT'
  },
  {
    name: 'Lao Kip',
    code: 'LAK'
  },
  {
    name: 'Lebanese Pound',
    code: 'LBP'
  },
  {
    name: 'Sri Lankan Rupee',
    code: 'LKR'
  },
  {
    name: 'Liberian Dollar',
    code: 'LRD'
  },
  {
    name: 'Lesotho Loti',
    code: 'LSL'
  },
  {
    name: 'Lithuanian Litas',
    code: 'LTL'
  },
  {
    name: 'Latvian Lats',
    code: 'LVL'
  },
  {
    name: 'Libyan Dinar',
    code: 'LYD'
  },
  {
    name: 'Moroccan Dirham',
    code: 'MAD'
  },
  {
    name: 'Moldovan Leu',
    code: 'MDL'
  },
  {
    name: 'Malagasy Ariary',
    code: 'MGA'
  },
  {
    name: 'Macedonian Denar',
    code: 'MKD'
  },
  {
    name: 'Myanmar Kyat',
    code: 'MMK'
  },
  {
    name: 'Mongolian Tögrög',
    code: 'MNT'
  },
  {
    name: 'Macanese Pataca',
    code: 'MOP'
  },
  {
    name: 'Mauritanian Ouguiya',
    code: 'MRO'
  },
  {
    name: 'Mauritian Rupee',
    code: 'MUR'
  },
  {
    name: 'Maldivian Rufiyaa',
    code: 'MVR'
  },
  {
    name: 'Malawian Kwacha',
    code: 'MWK'
  },
  {
    name: 'Mexican Peso',
    code: 'MXN'
  },
  {
    name: 'Malaysian Ringgit',
    code: 'MYR'
  },
  {
    name: 'Mozambican Metical',
    code: 'MZN'
  },
  {
    name: 'Namibian Dollar',
    code: 'NAD'
  },
  {
    name: 'Nigerian Naira',
    code: 'NGN'
  },
  {
    name: 'Nicaraguan Córdoba',
    code: 'NIO'
  },
  {
    name: 'Norwegian Krone',
    code: 'NOK'
  },
  {
    name: 'Nepalese Rupee',
    code: 'NPR'
  },
  {
    name: 'New Zealand Dollar',
    code: 'NZD'
  },
  {
    name: 'Omani Rial',
    code: 'OMR'
  },
  {
    name: 'Panamanian Balboa',
    code: 'PAB'
  },
  {
    name: 'Peruvian Sol',
    code: 'PEN'
  },
  {
    name: 'Papua New Guinean Kina',
    code: 'PGK'
  },
  {
    name: 'Philippine Peso',
    code: 'PHP'
  },
  {
    name: 'Pakistani Rupee',
    code: 'PKR'
  },
  {
    name: 'Polish Złoty',
    code: 'PLN'
  },
  {
    name: 'Paraguayan Guaraní',
    code: 'PYG'
  },
  {
    name: 'Qatari Riyal',
    code: 'QAR'
  },
  {
    name: 'Romanian Leu',
    code: 'RON'
  },
  {
    name: 'Serbian Dinar',
    code: 'RSD'
  },
  {
    name: 'Russian Ruble',
    code: 'RUB'
  },
  {
    name: 'Rwandan Franc',
    code: 'RWF'
  },
  {
    name: 'Saudi Riyal',
    code: 'SAR'
  },
  {
    name: 'Solomon Islands Dollar',
    code: 'SBD'
  },
  {
    name: 'Seychellois Rupee',
    code: 'SCR'
  },
  {
    name: 'Sudanese Pound',
    code: 'SDG'
  },
  {
    name: 'Swedish Krona',
    code: 'SEK'
  },
  {
    name: 'Singapore Dollar',
    code: 'SGD'
  },
  {
    name: 'Saint Helenian Pound',
    code: 'SHP'
  },
  {
    name: 'Slovak Koruna',
    code: 'SKK'
  },
  {
    name: 'Sierra Leonean Leone',
    code: 'SLL'
  },
  {
    name: 'Somali Shilling',
    code: 'SOS'
  },
  {
    name: 'Surinamese Dollar',
    code: 'SRD'
  },
  {
    name: 'South Sudanese Pound',
    code: 'SSP'
  },
  {
    name: 'São Tomé and Príncipe Dobra',
    code: 'STD'
  },
  {
    name: 'Salvadoran Colón',
    code: 'SVC'
  },
  {
    name: 'Syrian Pound',
    code: 'SYP'
  },
  {
    name: 'Swazi Lilangeni',
    code: 'SZL'
  },
  {
    name: 'Thai Baht',
    code: 'THB'
  },
  {
    name: 'Tajikistani Somoni',
    code: 'TJS'
  },
  {
    name: 'Turkmenistani Manat',
    code: 'TMT'
  },
  {
    name: 'Tunisian Dinar',
    code: 'TND'
  },
  {
    name: 'Tongan Paʻanga',
    code: 'TOP'
  },
  {
    name: 'Turkish Lira',
    code: 'TRY'
  },
  {
    name: 'Trinidad and Tobago Dollar',
    code: 'TTD'
  },
  {
    name: 'New Taiwan Dollar',
    code: 'TWD'
  },
  {
    name: 'Tanzanian Shilling',
    code: 'TZS'
  },
  {
    name: 'Ukrainian Hryvnia',
    code: 'UAH'
  },
  {
    name: 'Ugandan Shilling',
    code: 'UGX'
  },
  {
    name: 'Uruguayan Peso',
    code: 'UYU'
  },
  {
    name: 'Uzbekistan Som',
    code: 'UZS'
  },
  {
    name: 'Venezuelan Bolívar',
    code: 'VEF'
  },
  {
    name: 'Vietnamese Đồng',
    code: 'VND'
  },
  {
    name: 'Vanuatu Vatu',
    code: 'VUV'
  },
  {
    name: 'Samoan Tala',
    code: 'WST'
  },
  {
    name: 'Central African Cfa Franc',
    code: 'XAF'
  },
  {
    name: 'Silver (Troy Ounce)',
    code: 'XAG'
  },
  {
    name: 'Gold (Troy Ounce)',
    code: 'XAU'
  },
  {
    name: 'European Composite Unit',
    code: 'XBA'
  },
  {
    name: 'European Monetary Unit',
    code: 'XBB'
  },
  {
    name: 'European Unit of Account 9',
    code: 'XBC'
  },
  {
    name: 'European Unit of Account 17',
    code: 'XBD'
  },
  {
    name: 'East Caribbean Dollar',
    code: 'XCD'
  },
  {
    name: 'Special Drawing Rights',
    code: 'XDR'
  },
  {
    name: 'West African Cfa Franc',
    code: 'XOF'
  },
  {
    name: 'Palladium',
    code: 'XPD'
  },
  {
    name: 'Cfp Franc',
    code: 'XPF'
  },
  {
    name: 'Platinum',
    code: 'XPT'
  },
  {
    name: 'Yemeni Rial',
    code: 'YER'
  },
  {
    name: 'South African Rand',
    code: 'ZAR'
  },
  {
    name: 'Zambian Kwacha',
    code: 'ZMK'
  },
  {
    name: 'Zambian Kwacha',
    code: 'ZMW'
  }
];
