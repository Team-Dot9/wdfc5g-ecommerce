const initialState = {
	personalInfo: {
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		gender: "",
		nationality: "",
		passport: "",
		email: "",
		contact: "",
		allergies: "",
	},
	genderOptions: [
		{ value: "Female", label: "Female", id: 1 },
		{ value: "Male", label: "Male", id: 2 },
		{ value: "Transgender Female", label: "Transgender Female", id: 3 },
		{ value: "Transgender Male", label: "Transgender Male", id: 4 },
		{ value: "Prefer not to answer", label: "Prefer not to answer", id: 5 },
	],
	nationalityOptions: [
		{
			id: 158,
			value: "Singaporean",
			label: "Singaporean",
		},
		{
			id: 108,
			value: "Malaysian",
			label: "Malaysian",
		},
		{
			id: 0,
			value: "Afghan",
			label: "Afghan",
		},
		{
			id: 1,
			value: "Albanian",
			label: "Albanian",
		},
		{
			id: 2,
			value: "Algerian",
			label: "Algerian",
		},
		{
			id: 3,
			value: "American",
			label: "American",
		},
		{
			id: 4,
			value: "Andorran",
			label: "Andorran",
		},
		{
			id: 5,
			value: "Angolan",
			label: "Angolan",
		},
		{
			id: 6,
			value: "Antiguans",
			label: "Antiguans",
		},
		{
			id: 7,
			value: "Argentinean",
			label: "Argentinean",
		},
		{
			id: 8,
			value: "Armenian",
			label: "Armenian",
		},
		{
			id: 9,
			value: "Australian",
			label: "Australian",
		},
		{
			id: 10,
			value: "Austrian",
			label: "Austrian",
		},
		{
			id: 11,
			value: "Azerbaijani",
			label: "Azerbaijani",
		},
		{
			id: 12,
			value: "Bahamian",
			label: "Bahamian",
		},
		{
			id: 13,
			value: "Bahraini",
			label: "Bahraini",
		},
		{
			id: 14,
			value: "Bangladeshi",
			label: "Bangladeshi",
		},
		{
			id: 15,
			value: "Barbadian",
			label: "Barbadian",
		},
		{
			id: 16,
			value: "Barbudans",
			label: "Barbudans",
		},
		{
			id: 17,
			value: "Batswana",
			label: "Batswana",
		},
		{
			id: 18,
			value: "Belarusian",
			label: "Belarusian",
		},
		{
			id: 19,
			value: "Belgian",
			label: "Belgian",
		},
		{
			id: 20,
			value: "Belizean",
			label: "Belizean",
		},
		{
			id: 21,
			value: "Beninese",
			label: "Beninese",
		},
		{
			id: 22,
			value: "Bhutanese",
			label: "Bhutanese",
		},
		{
			id: 23,
			value: "Bolivian",
			label: "Bolivian",
		},
		{
			id: 24,
			value: "Bosnian",
			label: "Bosnian",
		},
		{
			id: 25,
			value: "Brazilian",
			label: "Brazilian",
		},
		{
			id: 26,
			value: "British",
			label: "British",
		},
		{
			id: 27,
			value: "Bruneian",
			label: "Bruneian",
		},
		{
			id: 28,
			value: "Bulgarian",
			label: "Bulgarian",
		},
		{
			id: 29,
			value: "Burkinabe",
			label: "Burkinabe",
		},
		{
			id: 30,
			value: "Burmese",
			label: "Burmese",
		},
		{
			id: 31,
			value: "Burundian",
			label: "Burundian",
		},
		{
			id: 32,
			value: "Cambodian",
			label: "Cambodian",
		},
		{
			id: 33,
			value: "Cameroonian",
			label: "Cameroonian",
		},
		{
			id: 34,
			value: "Canadian",
			label: "Canadian",
		},
		{
			id: 35,
			value: "Cape Verdean",
			label: "Cape Verdean",
		},
		{
			id: 36,
			value: "Central African",
			label: "Central African",
		},
		{
			id: 37,
			value: "Chadian",
			label: "Chadian",
		},
		{
			id: 38,
			value: "Chilean",
			label: "Chilean",
		},
		{
			id: 39,
			value: "Chinese",
			label: "Chinese",
		},
		{
			id: 40,
			value: "Colombian",
			label: "Colombian",
		},
		{
			id: 41,
			value: "Comoran",
			label: "Comoran",
		},
		{
			id: 42,
			value: "Congolese",
			label: "Congolese",
		},
		{
			id: 43,
			value: "Costa Rican",
			label: "Costa Rican",
		},
		{
			id: 44,
			value: "Croatian",
			label: "Croatian",
		},
		{
			id: 45,
			value: "Cuban",
			label: "Cuban",
		},
		{
			id: 46,
			value: "Cypriot",
			label: "Cypriot",
		},
		{
			id: 47,
			value: "Czech",
			label: "Czech",
		},
		{
			id: 48,
			value: "Danish",
			label: "Danish",
		},
		{
			id: 49,
			value: "Djibouti",
			label: "Djibouti",
		},
		{
			id: 50,
			value: "Dominican",
			label: "Dominican",
		},
		{
			id: 51,
			value: "Dutch",
			label: "Dutch",
		},
		{
			id: 52,
			value: "East Timorese",
			label: "East Timorese",
		},
		{
			id: 53,
			value: "Ecuadorean",
			label: "Ecuadorean",
		},
		{
			id: 54,
			value: "Egyptian",
			label: "Egyptian",
		},
		{
			id: 55,
			value: "Emirian",
			label: "Emirian",
		},
		{
			id: 56,
			value: "Equatorial Guinean",
			label: "Equatorial Guinean",
		},
		{
			id: 57,
			value: "Eritrean",
			label: "Eritrean",
		},
		{
			id: 58,
			value: "Estonian",
			label: "Estonian",
		},
		{
			id: 59,
			value: "Ethiopian",
			label: "Ethiopian",
		},
		{
			id: 60,
			value: "Fijian",
			label: "Fijian",
		},
		{
			id: 61,
			value: "Filipino",
			label: "Filipino",
		},
		{
			id: 62,
			value: "Finnish",
			label: "Finnish",
		},
		{
			id: 63,
			value: "French",
			label: "French",
		},
		{
			id: 64,
			value: "Gabonese",
			label: "Gabonese",
		},
		{
			id: 65,
			value: "Gambian",
			label: "Gambian",
		},
		{
			id: 66,
			value: "Georgian",
			label: "Georgian",
		},
		{
			id: 67,
			value: "German",
			label: "German",
		},
		{
			id: 68,
			value: "Ghanaian",
			label: "Ghanaian",
		},
		{
			id: 69,
			value: "Greek",
			label: "Greek",
		},
		{
			id: 70,
			value: "Grenadian",
			label: "Grenadian",
		},
		{
			id: 71,
			value: "Guatemalan",
			label: "Guatemalan",
		},
		{
			id: 72,
			value: "Guinea-Bissauan",
			label: "Guinea-Bissauan",
		},
		{
			id: 73,
			value: "Guinean",
			label: "Guinean",
		},
		{
			id: 74,
			value: "Guyanese",
			label: "Guyanese",
		},
		{
			id: 75,
			value: "Haitian",
			label: "Haitian",
		},
		{
			id: 76,
			value: "Herzegovinian",
			label: "Herzegovinian",
		},
		{
			id: 77,
			value: "Honduran",
			label: "Honduran",
		},
		{
			id: 78,
			value: "Hungarian",
			label: "Hungarian",
		},
		{
			id: 79,
			value: "I-Kiribati",
			label: "I-Kiribati",
		},
		{
			id: 80,
			value: "Icelander",
			label: "Icelander",
		},
		{
			id: 81,
			value: "Indian",
			label: "Indian",
		},
		{
			id: 82,
			value: "Indonesian",
			label: "Indonesian",
		},
		{
			id: 83,
			value: "Iranian",
			label: "Iranian",
		},
		{
			id: 84,
			value: "Iraqi",
			label: "Iraqi",
		},
		{
			id: 85,
			value: "Irish",
			label: "Irish",
		},
		{
			id: 86,
			value: "Israeli",
			label: "Israeli",
		},
		{
			id: 87,
			value: "Italian",
			label: "Italian",
		},
		{
			id: 88,
			value: "Ivorian",
			label: "Ivorian",
		},
		{
			id: 89,
			value: "Jamaican",
			label: "Jamaican",
		},
		{
			id: 90,
			value: "Japanese",
			label: "Japanese",
		},
		{
			id: 91,
			value: "Jordanian",
			label: "Jordanian",
		},
		{
			id: 92,
			value: "Kazakhstani",
			label: "Kazakhstani",
		},
		{
			id: 93,
			value: "Kenyan",
			label: "Kenyan",
		},
		{
			id: 94,
			value: "Kittian and Nevisian",
			label: "Kittian and Nevisian",
		},
		{
			id: 95,
			value: "Kuwaiti",
			label: "Kuwaiti",
		},
		{
			id: 96,
			value: "Kyrgyz",
			label: "Kyrgyz",
		},
		{
			id: 97,
			value: "Laotian",
			label: "Laotian",
		},
		{
			id: 98,
			value: "Latvian",
			label: "Latvian",
		},
		{
			id: 99,
			value: "Lebanese",
			label: "Lebanese",
		},
		{
			id: 100,
			value: "Liberian",
			label: "Liberian",
		},
		{
			id: 101,
			value: "Libyan",
			label: "Libyan",
		},
		{
			id: 102,
			value: "Liechtensteiner",
			label: "Liechtensteiner",
		},
		{
			id: 103,
			value: "Lithuanian",
			label: "Lithuanian",
		},
		{
			id: 104,
			value: "Luxembourger",
			label: "Luxembourger",
		},
		{
			id: 105,
			value: "Macedonian",
			label: "Macedonian",
		},
		{
			id: 106,
			value: "Malagasy",
			label: "Malagasy",
		},
		{
			id: 107,
			value: "Malawian",
			label: "Malawian",
		},
		{
			id: 109,
			value: "Maldivan",
			label: "Maldivan",
		},
		{
			id: 110,
			value: "Malian",
			label: "Malian",
		},
		{
			id: 111,
			value: "Maltese",
			label: "Maltese",
		},
		{
			id: 112,
			value: "Marshallese",
			label: "Marshallese",
		},
		{
			id: 113,
			value: "Mauritanian",
			label: "Mauritanian",
		},
		{
			id: 114,
			value: "Mauritian",
			label: "Mauritian",
		},
		{
			id: 115,
			value: "Mexican",
			label: "Mexican",
		},
		{
			id: 116,
			value: "Micronesian",
			label: "Micronesian",
		},
		{
			id: 117,
			value: "Moldovan",
			label: "Moldovan",
		},
		{
			id: 118,
			value: "Monacan",
			label: "Monacan",
		},
		{
			id: 119,
			value: "Mongolian",
			label: "Mongolian",
		},
		{
			id: 120,
			value: "Moroccan",
			label: "Moroccan",
		},
		{
			id: 121,
			value: "Mosotho",
			label: "Mosotho",
		},
		{
			id: 122,
			value: "Motswana",
			label: "Motswana",
		},
		{
			id: 123,
			value: "Mozambican",
			label: "Mozambican",
		},
		{
			id: 124,
			value: "Namibian",
			label: "Namibian",
		},
		{
			id: 125,
			value: "Nauruan",
			label: "Nauruan",
		},
		{
			id: 126,
			value: "Nepalese",
			label: "Nepalese",
		},
		{
			id: 127,
			value: "New Zealander",
			label: "New Zealander",
		},
		{
			id: 128,
			value: "Nicaraguan",
			label: "Nicaraguan",
		},
		{
			id: 129,
			value: "Nigerian",
			label: "Nigerian",
		},
		{
			id: 130,
			value: "Nigerien",
			label: "Nigerien",
		},
		{
			id: 131,
			value: "North Korean",
			label: "North Korean",
		},
		{
			id: 132,
			value: "Northern Irish",
			label: "Northern Irish",
		},
		{
			id: 133,
			value: "Norwegian",
			label: "Norwegian",
		},
		{
			id: 134,
			value: "Omani",
			label: "Omani",
		},
		{
			id: 135,
			value: "Pakistani",
			label: "Pakistani",
		},
		{
			id: 136,
			value: "Palauan",
			label: "Palauan",
		},
		{
			id: 137,
			value: "Panamanian",
			label: "Panamanian",
		},
		{
			id: 138,
			value: "Papua New Guinean",
			label: "Papua New Guinean",
		},
		{
			id: 139,
			value: "Paraguayan",
			label: "Paraguayan",
		},
		{
			id: 140,
			value: "Peruvian",
			label: "Peruvian",
		},
		{
			id: 141,
			value: "Polish",
			label: "Polish",
		},
		{
			id: 142,
			value: "Portuguese",
			label: "Portuguese",
		},
		{
			id: 143,
			value: "Qatari",
			label: "Qatari",
		},
		{
			id: 144,
			value: "Romanian",
			label: "Romanian",
		},
		{
			id: 145,
			value: "Russian",
			label: "Russian",
		},
		{
			id: 146,
			value: "Rwandan",
			label: "Rwandan",
		},
		{
			id: 147,
			value: "Saint Lucian",
			label: "Saint Lucian",
		},
		{
			id: 148,
			value: "Salvadoran",
			label: "Salvadoran",
		},
		{
			id: 149,
			value: "Samoan",
			label: "Samoan",
		},
		{
			id: 150,
			value: "San Marinese",
			label: "San Marinese",
		},
		{
			id: 151,
			value: "Sao Tomean",
			label: "Sao Tomean",
		},
		{
			id: 152,
			value: "Saudi",
			label: "Saudi",
		},
		{
			id: 153,
			value: "Scottish",
			label: "Scottish",
		},
		{
			id: 154,
			value: "Senegalese",
			label: "Senegalese",
		},
		{
			id: 155,
			value: "Serbian",
			label: "Serbian",
		},
		{
			id: 156,
			value: "Seychellois",
			label: "Seychellois",
		},
		{
			id: 157,
			value: "Sierra Leonean",
			label: "Sierra Leonean",
		},
		{
			id: 159,
			value: "Slovakian",
			label: "Slovakian",
		},
		{
			id: 160,
			value: "Slovenian",
			label: "Slovenian",
		},
		{
			id: 161,
			value: "Solomon Islander",
			label: "Solomon Islander",
		},
		{
			id: 162,
			value: "Somali",
			label: "Somali",
		},
		{
			id: 163,
			value: "South African",
			label: "South African",
		},
		{
			id: 164,
			value: "South Korean",
			label: "South Korean",
		},
		{
			id: 165,
			value: "Spanish",
			label: "Spanish",
		},
		{
			id: 166,
			value: "Sri Lankan",
			label: "Sri Lankan",
		},
		{
			id: 167,
			value: "Sudanese",
			label: "Sudanese",
		},
		{
			id: 168,
			value: "Surinamer",
			label: "Surinamer",
		},
		{
			id: 169,
			value: "Swazi",
			label: "Swazi",
		},
		{
			id: 170,
			value: "Swedish",
			label: "Swedish",
		},
		{
			id: 171,
			value: "Swiss",
			label: "Swiss",
		},
		{
			id: 172,
			value: "Syrian",
			label: "Syrian",
		},
		{
			id: 173,
			value: "Taiwanese",
			label: "Taiwanese",
		},
		{
			id: 174,
			value: "Tajik",
			label: "Tajik",
		},
		{
			id: 175,
			value: "Tanzanian",
			label: "Tanzanian",
		},
		{
			id: 176,
			value: "Thai",
			label: "Thai",
		},
		{
			id: 177,
			value: "Togolese",
			label: "Togolese",
		},
		{
			id: 178,
			value: "Tongan",
			label: "Tongan",
		},
		{
			id: 179,
			value: "Trinidadian/Tobagonian",
			label: "Trinidadian/Tobagonian",
		},
		{
			id: 180,
			value: "Tunisian",
			label: "Tunisian",
		},
		{
			id: 181,
			value: "Turkish",
			label: "Turkish",
		},
		{
			id: 182,
			value: "Tuvaluan",
			label: "Tuvaluan",
		},
		{
			id: 183,
			value: "Ugandan",
			label: "Ugandan",
		},
		{
			id: 184,
			value: "Ukrainian",
			label: "Ukrainian",
		},
		{
			id: 185,
			value: "Uruguayan",
			label: "Uruguayan",
		},
		{
			id: 186,
			value: "Uzbekistani",
			label: "Uzbekistani",
		},
		{
			id: 187,
			value: "Venezuelan",
			label: "Venezuelan",
		},
		{
			id: 188,
			value: "Vietnamese",
			label: "Vietnamese",
		},
		{
			id: 189,
			value: "Welsh",
			label: "Welsh",
		},
		{
			id: 190,
			value: "Yemenite",
			label: "Yemenite",
		},
		{
			id: 191,
			value: "Zambian",
			label: "Zambian",
		},
		{
			id: 192,
			value: "Zimbabwean",
			label: "Zimbabwean",
		},
	],
};

export const personalInfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_PERSONAL_INFO":
			return { ...state, personalInfo: action.payload };
		default:
			return state;
	}
};
