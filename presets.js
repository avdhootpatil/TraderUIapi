var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.get("/categories", function(req, res) {
  res.status(200).send([
    {
      id: 1242,
      name: "Tea"
    },
    {
      id: 2454,
      name: "Tractor Engines"
    }
  ]);
});

app.get("/countries", function(req, res) {
  res.status(200).send([
    // {
    //   name: "India",
    //   callingCode: "91",
    //   alpha2Code: "IN",
    //   alpha3code: "IND",
    //   id: 97,
    //   createdOn: "2019-10-23T06:10:17.0752187",
    //   deletedOn: null,
    //   lastModifiedOn: "2019-10-23T06:10:17.0752238",
    //   rowVersion: "AAAAAAAACIs="
    // },
    // {
    //   name: "United Kingdom",
    //   callingCode: "44",
    //   alpha2Code: "GB",
    //   alpha3code: "GBR",
    //   id: 226,
    //   createdOn: "2019-10-23T06:10:17.076638",
    //   deletedOn: null,
    //   lastModifiedOn: "2019-10-23T06:10:17.0766429",
    //   rowVersion: "AAAAAAAACCk="
    // },
    // {
    //   name: "United States",
    //   callingCode: "1",
    //   alpha2Code: "US",
    //   alpha3code: "USA",
    //   id: 229,
    //   createdOn: "2019-10-23T06:10:17.0766969",
    //   deletedOn: null,
    //   lastModifiedOn: "2019-10-23T06:10:17.0767042",
    //   rowVersion: "AAAAAAAACB8="
    // }
    {
      name: "Afghanistan",
      callingCode: "93",
      alpha2Code: "AF",
      alpha3code: "AFG",
      id: 1,
      createdOn: "2019-10-23T06:10:17.069039",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0738197",
      rowVersion: "AAAAAAAAB9E="
    },
    {
      name: "Albania",
      callingCode: "355",
      alpha2Code: "AL",
      alpha3code: "ALB",
      id: 2,
      createdOn: "2019-10-23T06:10:17.0741076",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741199",
      rowVersion: "AAAAAAAACGk="
    },
    {
      name: "Algeria",
      callingCode: "213",
      alpha2Code: "DZ",
      alpha3code: "DZA",
      id: 3,
      createdOn: "2019-10-23T06:10:17.074127",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741326",
      rowVersion: "AAAAAAAACGo="
    },
    {
      name: "American Samoa",
      callingCode: "1-684",
      alpha2Code: "AS",
      alpha3code: "ASM",
      id: 4,
      createdOn: "2019-10-23T06:10:17.0741379",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074143",
      rowVersion: "AAAAAAAACGs="
    },
    {
      name: "Andorra",
      callingCode: "376",
      alpha2Code: "AD",
      alpha3code: "AND",
      id: 5,
      createdOn: "2019-10-23T06:10:17.0741537",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741595",
      rowVersion: "AAAAAAAACGw="
    },
    {
      name: "Angola",
      callingCode: "244",
      alpha2Code: "AO",
      alpha3code: "AGO",
      id: 6,
      createdOn: "2019-10-23T06:10:17.0741649",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.07417",
      rowVersion: "AAAAAAAACG0="
    },
    {
      name: "Anguilla",
      callingCode: "1-264",
      alpha2Code: "AI",
      alpha3code: "AIA",
      id: 7,
      createdOn: "2019-10-23T06:10:17.0741751",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741802",
      rowVersion: "AAAAAAAACG4="
    },
    {
      name: "Antarctica",
      callingCode: "672",
      alpha2Code: "AQ",
      alpha3code: "ATA",
      id: 8,
      createdOn: "2019-10-23T06:10:17.0741854",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741906",
      rowVersion: "AAAAAAAACG8="
    },
    {
      name: "Antigua and Barbuda",
      callingCode: "1-268",
      alpha2Code: "AG",
      alpha3code: "ATG",
      id: 9,
      createdOn: "2019-10-23T06:10:17.0741957",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742007",
      rowVersion: "AAAAAAAACHA="
    },
    {
      name: "Argentina",
      callingCode: "54",
      alpha2Code: "AR",
      alpha3code: "ARG",
      id: 10,
      createdOn: "2019-10-23T06:10:17.0742059",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074211",
      rowVersion: "AAAAAAAACHE="
    },
    {
      name: "Armenia",
      callingCode: "374",
      alpha2Code: "AM",
      alpha3code: "ARM",
      id: 11,
      createdOn: "2019-10-23T06:10:17.074219",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742245",
      rowVersion: "AAAAAAAACHI="
    },
    {
      name: "Aruba",
      callingCode: "297",
      alpha2Code: "AW",
      alpha3code: "ABW",
      id: 12,
      createdOn: "2019-10-23T06:10:17.0742297",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742349",
      rowVersion: "AAAAAAAACHM="
    },
    {
      name: "Australia",
      callingCode: "61",
      alpha2Code: "AU",
      alpha3code: "AUS",
      id: 13,
      createdOn: "2019-10-23T06:10:17.07424",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742451",
      rowVersion: "AAAAAAAACHQ="
    },
    {
      name: "Austria",
      callingCode: "43",
      alpha2Code: "AT",
      alpha3code: "AUT",
      id: 14,
      createdOn: "2019-10-23T06:10:17.0742502",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742552",
      rowVersion: "AAAAAAAACHY="
    },
    {
      name: "Azerbaijan",
      callingCode: "994",
      alpha2Code: "AZ",
      alpha3code: "AZE",
      id: 15,
      createdOn: "2019-10-23T06:10:17.0742602",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742653",
      rowVersion: "AAAAAAAACIM="
    },
    {
      name: "Bahamas",
      callingCode: "1-242",
      alpha2Code: "BS",
      alpha3code: "BHS",
      id: 16,
      createdOn: "2019-10-23T06:10:17.0742704",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742755",
      rowVersion: "AAAAAAAACHc="
    },
    {
      name: "Bahrain",
      callingCode: "973",
      alpha2Code: "BH",
      alpha3code: "BHR",
      id: 17,
      createdOn: "2019-10-23T06:10:17.0742806",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742929",
      rowVersion: "AAAAAAAACHg="
    },
    {
      name: "Bangladesh",
      callingCode: "880",
      alpha2Code: "BD",
      alpha3code: "BGD",
      id: 18,
      createdOn: "2019-10-23T06:10:17.0742989",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074304",
      rowVersion: "AAAAAAAACHk="
    },
    {
      name: "Barbados",
      callingCode: "1-246",
      alpha2Code: "BB",
      alpha3code: "BRB",
      id: 19,
      createdOn: "2019-10-23T06:10:17.0743091",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743143",
      rowVersion: "AAAAAAAACHo="
    },
    {
      name: "Belarus",
      callingCode: "375",
      alpha2Code: "BY",
      alpha3code: "BLR",
      id: 20,
      createdOn: "2019-10-23T06:10:17.0743195",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743246",
      rowVersion: "AAAAAAAACHs="
    },
    {
      name: "Belgium",
      callingCode: "32",
      alpha2Code: "BE",
      alpha3code: "BEL",
      id: 21,
      createdOn: "2019-10-23T06:10:17.0743297",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743347",
      rowVersion: "AAAAAAAACHw="
    },
    {
      name: "Belize",
      callingCode: "501",
      alpha2Code: "BZ",
      alpha3code: "BLZ",
      id: 22,
      createdOn: "2019-10-23T06:10:17.0743398",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074345",
      rowVersion: "AAAAAAAACH0="
    },
    {
      name: "Benin",
      callingCode: "229",
      alpha2Code: "BJ",
      alpha3code: "BEN",
      id: 23,
      createdOn: "2019-10-23T06:10:17.0743501",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743588",
      rowVersion: "AAAAAAAACH4="
    },
    {
      name: "Bermuda",
      callingCode: "1-441",
      alpha2Code: "BM",
      alpha3code: "BMU",
      id: 24,
      createdOn: "2019-10-23T06:10:17.0743646",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743698",
      rowVersion: "AAAAAAAACH8="
    },
    {
      name: "Bhutan",
      callingCode: "975",
      alpha2Code: "BT",
      alpha3code: "BTN",
      id: 25,
      createdOn: "2019-10-23T06:10:17.074375",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743801",
      rowVersion: "AAAAAAAACIA="
    },
    {
      name: "Bolivia",
      callingCode: "591",
      alpha2Code: "BO",
      alpha3code: "BOL",
      id: 26,
      createdOn: "2019-10-23T06:10:17.0743852",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743903",
      rowVersion: "AAAAAAAACIE="
    },
    {
      name: "Bosnia and Herzegovina",
      callingCode: "387",
      alpha2Code: "BA",
      alpha3code: "BIH",
      id: 27,
      createdOn: "2019-10-23T06:10:17.0743954",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744005",
      rowVersion: "AAAAAAAACII="
    },
    {
      name: "Botswana",
      callingCode: "267",
      alpha2Code: "BW",
      alpha3code: "BWA",
      id: 28,
      createdOn: "2019-10-23T06:10:17.0744055",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744106",
      rowVersion: "AAAAAAAACGg="
    },
    {
      name: "Brazil",
      callingCode: "55",
      alpha2Code: "BR",
      alpha3code: "BRA",
      id: 29,
      createdOn: "2019-10-23T06:10:17.0744157",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744282",
      rowVersion: "AAAAAAAACHU="
    },
    {
      name: "British Indian Ocean Territory",
      callingCode: "246",
      alpha2Code: "IO",
      alpha3code: "IOT",
      id: 30,
      createdOn: "2019-10-23T06:10:17.0744347",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744398",
      rowVersion: "AAAAAAAACGc="
    },
    {
      name: "British Virgin Islands",
      callingCode: "1-284",
      alpha2Code: "VG",
      alpha3code: "VGB",
      id: 31,
      createdOn: "2019-10-23T06:10:17.0744449",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.07445",
      rowVersion: "AAAAAAAACFc="
    },
    {
      name: "Brunei",
      callingCode: "673",
      alpha2Code: "BN",
      alpha3code: "BRN",
      id: 32,
      createdOn: "2019-10-23T06:10:17.0744551",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744603",
      rowVersion: "AAAAAAAACEs="
    },
    {
      name: "Bulgaria",
      callingCode: "359",
      alpha2Code: "BG",
      alpha3code: "BGR",
      id: 33,
      createdOn: "2019-10-23T06:10:17.0744654",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744705",
      rowVersion: "AAAAAAAACEw="
    },
    {
      name: "Burkina Faso",
      callingCode: "226",
      alpha2Code: "BF",
      alpha3code: "BFA",
      id: 34,
      createdOn: "2019-10-23T06:10:17.0744757",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744807",
      rowVersion: "AAAAAAAACE0="
    },
    {
      name: "Burundi",
      callingCode: "257",
      alpha2Code: "BI",
      alpha3code: "BDI",
      id: 36,
      createdOn: "2019-10-23T06:10:17.0744987",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745041",
      rowVersion: "AAAAAAAACE8="
    },
    {
      name: "Cambodia",
      callingCode: "855",
      alpha2Code: "KH",
      alpha3code: "KHM",
      id: 37,
      createdOn: "2019-10-23T06:10:17.0745094",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745145",
      rowVersion: "AAAAAAAACFA="
    },
    {
      name: "Cameroon",
      callingCode: "237",
      alpha2Code: "CM",
      alpha3code: "CMR",
      id: 38,
      createdOn: "2019-10-23T06:10:17.0745197",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745249",
      rowVersion: "AAAAAAAACFE="
    },
    {
      name: "Canada",
      callingCode: "1",
      alpha2Code: "CA",
      alpha3code: "CAN",
      id: 39,
      createdOn: "2019-10-23T06:10:17.0745304",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745355",
      rowVersion: "AAAAAAAACFI="
    },
    {
      name: "Cape Verde",
      callingCode: "238",
      alpha2Code: "CV",
      alpha3code: "CPV",
      id: 40,
      createdOn: "2019-10-23T06:10:17.0745407",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745461",
      rowVersion: "AAAAAAAACFM="
    },
    {
      name: "Cayman Islands",
      callingCode: "1-345",
      alpha2Code: "KY",
      alpha3code: "CYM",
      id: 41,
      createdOn: "2019-10-23T06:10:17.0745512",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745565",
      rowVersion: "AAAAAAAACFQ="
    },
    {
      name: "Central African Republic",
      callingCode: "236",
      alpha2Code: "CF",
      alpha3code: "CAF",
      id: 42,
      createdOn: "2019-10-23T06:10:17.0745645",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.07457",
      rowVersion: "AAAAAAAACFU="
    },
    {
      name: "Chad",
      callingCode: "235",
      alpha2Code: "TD",
      alpha3code: "TCD",
      id: 43,
      createdOn: "2019-10-23T06:10:17.0745752",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745803",
      rowVersion: "AAAAAAAACFY="
    },
    {
      name: "Chile",
      callingCode: "56",
      alpha2Code: "CL",
      alpha3code: "CHL",
      id: 44,
      createdOn: "2019-10-23T06:10:17.0745855",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745906",
      rowVersion: "AAAAAAAACFg="
    },
    {
      name: "China",
      callingCode: "86",
      alpha2Code: "CN",
      alpha3code: "CHN",
      id: 45,
      createdOn: "2019-10-23T06:10:17.0745957",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746008",
      rowVersion: "AAAAAAAACGU="
    },
    {
      name: "Christmas Island",
      callingCode: "61",
      alpha2Code: "CX",
      alpha3code: "CXR",
      id: 46,
      createdOn: "2019-10-23T06:10:17.0746059",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074611",
      rowVersion: "AAAAAAAACFk="
    },
    {
      name: "Cocos Islands",
      callingCode: "61",
      alpha2Code: "CC",
      alpha3code: "CCK",
      id: 47,
      createdOn: "2019-10-23T06:10:17.0746163",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746214",
      rowVersion: "AAAAAAAACFo="
    },
    {
      name: "Colombia",
      callingCode: "57",
      alpha2Code: "CO",
      alpha3code: "COL",
      id: 48,
      createdOn: "2019-10-23T06:10:17.0746264",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746344",
      rowVersion: "AAAAAAAACFs="
    },
    {
      name: "Comoros",
      callingCode: "269",
      alpha2Code: "KM",
      alpha3code: "COM",
      id: 49,
      createdOn: "2019-10-23T06:10:17.0746399",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746471",
      rowVersion: "AAAAAAAACFw="
    },
    {
      name: "Cook Islands",
      callingCode: "682",
      alpha2Code: "CK",
      alpha3code: "COK",
      id: 52,
      createdOn: "2019-10-23T06:10:17.0747007",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747087",
      rowVersion: "AAAAAAAACF8="
    },
    {
      name: "Costa Rica",
      callingCode: "506",
      alpha2Code: "CR",
      alpha3code: "CRI",
      id: 53,
      createdOn: "2019-10-23T06:10:17.0747142",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747194",
      rowVersion: "AAAAAAAACGA="
    },
    {
      name: "Croatia",
      callingCode: "385",
      alpha2Code: "HR",
      alpha3code: "HRV",
      id: 54,
      createdOn: "2019-10-23T06:10:17.0747245",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747341",
      rowVersion: "AAAAAAAACGE="
    },
    {
      name: "Cuba",
      callingCode: "53",
      alpha2Code: "CU",
      alpha3code: "CUB",
      id: 55,
      createdOn: "2019-10-23T06:10:17.0747402",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747453",
      rowVersion: "AAAAAAAACGI="
    },
    {
      name: "Curacao",
      callingCode: "599",
      alpha2Code: "CW",
      alpha3code: "CUW",
      id: 56,
      createdOn: "2019-10-23T06:10:17.0747504",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747554",
      rowVersion: "AAAAAAAACGM="
    },
    {
      name: "Cyprus",
      callingCode: "357",
      alpha2Code: "CY",
      alpha3code: "CYP",
      id: 57,
      createdOn: "2019-10-23T06:10:17.0747606",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747657",
      rowVersion: "AAAAAAAACGQ="
    },
    {
      name: "Czech Republic",
      callingCode: "420",
      alpha2Code: "CZ",
      alpha3code: "CZE",
      id: 58,
      createdOn: "2019-10-23T06:10:17.0747708",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747759",
      rowVersion: "AAAAAAAACGY="
    },
    {
      name: "Democratic Republic of the Congo",
      callingCode: "243",
      alpha2Code: "CD",
      alpha3code: "COD",
      id: 51,
      createdOn: "2019-10-23T06:10:17.0746627",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746677",
      rowVersion: "AAAAAAAACF4="
    },
    {
      name: "Denmark",
      callingCode: "45",
      alpha2Code: "DK",
      alpha3code: "DNK",
      id: 59,
      createdOn: "2019-10-23T06:10:17.074781",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747859",
      rowVersion: "AAAAAAAACIQ="
    },
    {
      name: "Djibouti",
      callingCode: "253",
      alpha2Code: "DJ",
      alpha3code: "DJI",
      id: 60,
      createdOn: "2019-10-23T06:10:17.074791",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747988",
      rowVersion: "AAAAAAAACIU="
    },
    {
      name: "Dominica",
      callingCode: "1-767",
      alpha2Code: "DM",
      alpha3code: "DMA",
      id: 61,
      createdOn: "2019-10-23T06:10:17.0748047",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748097",
      rowVersion: "AAAAAAAACIY="
    },
    {
      name: "Dominican Republic",
      callingCode: "1-809",
      alpha2Code: "DO",
      alpha3code: "DOM",
      id: 62,
      createdOn: "2019-10-23T06:10:17.0748148",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748198",
      rowVersion: "AAAAAAAACKU="
    },
    {
      name: "East Timor",
      callingCode: "670",
      alpha2Code: "TL",
      alpha3code: "TLS",
      id: 63,
      createdOn: "2019-10-23T06:10:17.074825",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748299",
      rowVersion: "AAAAAAAACKY="
    },
    {
      name: "Ecuador",
      callingCode: "593",
      alpha2Code: "EC",
      alpha3code: "ECU",
      id: 64,
      createdOn: "2019-10-23T06:10:17.0748351",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748401",
      rowVersion: "AAAAAAAACKc="
    },
    {
      name: "Egypt",
      callingCode: "20",
      alpha2Code: "EG",
      alpha3code: "EGY",
      id: 65,
      createdOn: "2019-10-23T06:10:17.0748451",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.07485",
      rowVersion: "AAAAAAAACKg="
    },
    {
      name: "El Salvador",
      callingCode: "503",
      alpha2Code: "SV",
      alpha3code: "SLV",
      id: 66,
      createdOn: "2019-10-23T06:10:17.0748552",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748602",
      rowVersion: "AAAAAAAACKk="
    },
    {
      name: "Equatorial Guinea",
      callingCode: "240",
      alpha2Code: "GQ",
      alpha3code: "GNQ",
      id: 67,
      createdOn: "2019-10-23T06:10:17.0748682",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748735",
      rowVersion: "AAAAAAAACKo="
    },
    {
      name: "Eritrea",
      callingCode: "291",
      alpha2Code: "ER",
      alpha3code: "ERI",
      id: 68,
      createdOn: "2019-10-23T06:10:17.0748942",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074904",
      rowVersion: "AAAAAAAACKs="
    },
    {
      name: "Estonia",
      callingCode: "372",
      alpha2Code: "EE",
      alpha3code: "EST",
      id: 69,
      createdOn: "2019-10-23T06:10:17.0749099",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749151",
      rowVersion: "AAAAAAAACKw="
    },
    {
      name: "Ethiopia",
      callingCode: "251",
      alpha2Code: "ET",
      alpha3code: "ETH",
      id: 70,
      createdOn: "2019-10-23T06:10:17.0749203",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749254",
      rowVersion: "AAAAAAAACK0="
    },
    {
      name: "Falkland Islands",
      callingCode: "500",
      alpha2Code: "FK",
      alpha3code: "FLK",
      id: 71,
      createdOn: "2019-10-23T06:10:17.0749306",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749357",
      rowVersion: "AAAAAAAACK4="
    },
    {
      name: "Faroe Islands",
      callingCode: "298",
      alpha2Code: "FO",
      alpha3code: "FRO",
      id: 72,
      createdOn: "2019-10-23T06:10:17.0749408",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749458",
      rowVersion: "AAAAAAAACK8="
    },
    {
      name: "Fiji",
      callingCode: "679",
      alpha2Code: "FJ",
      alpha3code: "FJI",
      id: 73,
      createdOn: "2019-10-23T06:10:17.0749562",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074962",
      rowVersion: "AAAAAAAACLA="
    },
    {
      name: "Finland",
      callingCode: "358",
      alpha2Code: "FI",
      alpha3code: "FIN",
      id: 74,
      createdOn: "2019-10-23T06:10:17.0749673",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749724",
      rowVersion: "AAAAAAAACLE="
    },
    {
      name: "France",
      callingCode: "33",
      alpha2Code: "FR",
      alpha3code: "FRA",
      id: 75,
      createdOn: "2019-10-23T06:10:17.0749777",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749827",
      rowVersion: "AAAAAAAACLI="
    },
    {
      name: "French Polynesia",
      callingCode: "689",
      alpha2Code: "PF",
      alpha3code: "PYF",
      id: 76,
      createdOn: "2019-10-23T06:10:17.074988",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749931",
      rowVersion: "AAAAAAAACLM="
    },
    {
      name: "Gabon",
      callingCode: "241",
      alpha2Code: "GA",
      alpha3code: "GAB",
      id: 77,
      createdOn: "2019-10-23T06:10:17.0749983",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750033",
      rowVersion: "AAAAAAAACLQ="
    },
    {
      name: "Gambia",
      callingCode: "220",
      alpha2Code: "GM",
      alpha3code: "GMB",
      id: 78,
      createdOn: "2019-10-23T06:10:17.0750086",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750138",
      rowVersion: "AAAAAAAACLU="
    },
    {
      name: "Georgia",
      callingCode: "995",
      alpha2Code: "GE",
      alpha3code: "GEO",
      id: 79,
      createdOn: "2019-10-23T06:10:17.075019",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750301",
      rowVersion: "AAAAAAAACLY="
    },
    {
      name: "Germany",
      callingCode: "49",
      alpha2Code: "DE",
      alpha3code: "DEU",
      id: 80,
      createdOn: "2019-10-23T06:10:17.0750363",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750415",
      rowVersion: "AAAAAAAACLc="
    },
    {
      name: "Ghana",
      callingCode: "233",
      alpha2Code: "GH",
      alpha3code: "GHA",
      id: 81,
      createdOn: "2019-10-23T06:10:17.0750467",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750518",
      rowVersion: "AAAAAAAACLg="
    },
    {
      name: "Gibraltar",
      callingCode: "350",
      alpha2Code: "GI",
      alpha3code: "GIB",
      id: 82,
      createdOn: "2019-10-23T06:10:17.0750569",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.075062",
      rowVersion: "AAAAAAAACLk="
    },
    {
      name: "Greece",
      callingCode: "30",
      alpha2Code: "GR",
      alpha3code: "GRC",
      id: 83,
      createdOn: "2019-10-23T06:10:17.0750672",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750722",
      rowVersion: "AAAAAAAACLo="
    },
    {
      name: "Greenland",
      callingCode: "299",
      alpha2Code: "GL",
      alpha3code: "GRL",
      id: 84,
      createdOn: "2019-10-23T06:10:17.0750774",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750825",
      rowVersion: "AAAAAAAACLs="
    },
    {
      name: "Grenada",
      callingCode: "1-473",
      alpha2Code: "GD",
      alpha3code: "GRD",
      id: 85,
      createdOn: "2019-10-23T06:10:17.0750877",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750958",
      rowVersion: "AAAAAAAACLw="
    },
    {
      name: "Guam",
      callingCode: "1-671",
      alpha2Code: "GU",
      alpha3code: "GUM",
      id: 86,
      createdOn: "2019-10-23T06:10:17.0751016",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751067",
      rowVersion: "AAAAAAAACL0="
    },
    {
      name: "Guatemala",
      callingCode: "502",
      alpha2Code: "GT",
      alpha3code: "GTM",
      id: 87,
      createdOn: "2019-10-23T06:10:17.0751119",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.075117",
      rowVersion: "AAAAAAAACL4="
    },
    {
      name: "Guernsey",
      callingCode: "44-1481",
      alpha2Code: "GG",
      alpha3code: "GGY",
      id: 88,
      createdOn: "2019-10-23T06:10:17.0751222",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751274",
      rowVersion: "AAAAAAAACL8="
    },
    {
      name: "Guinea",
      callingCode: "224",
      alpha2Code: "GN",
      alpha3code: "GIN",
      id: 89,
      createdOn: "2019-10-23T06:10:17.0751325",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751377",
      rowVersion: "AAAAAAAACKQ="
    },
    {
      name: "Guinea-Bissau",
      callingCode: "245",
      alpha2Code: "GW",
      alpha3code: "GNB",
      id: 90,
      createdOn: "2019-10-23T06:10:17.075143",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751481",
      rowVersion: "AAAAAAAACKM="
    },
    {
      name: "Guyana",
      callingCode: "592",
      alpha2Code: "GY",
      alpha3code: "GUY",
      id: 91,
      createdOn: "2019-10-23T06:10:17.0751533",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751584",
      rowVersion: "AAAAAAAACKI="
    },
    {
      name: "Haiti",
      callingCode: "509",
      alpha2Code: "HT",
      alpha3code: "HTI",
      id: 92,
      createdOn: "2019-10-23T06:10:17.0751667",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751719",
      rowVersion: "AAAAAAAACJM="
    },
    {
      name: "Honduras",
      callingCode: "504",
      alpha2Code: "HN",
      alpha3code: "HND",
      id: 93,
      createdOn: "2019-10-23T06:10:17.0751772",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751823",
      rowVersion: "AAAAAAAACIc="
    }
  ]);
});

app.get("/countries/:id/states", function(req, res) {
  console.log(req.params.id);
  if (req.params.id == 97) {
    res.status(200).send([
      {
        name: "Andaman and Nicobar Islands",
        countryId: 97,
        id: 1,
        createdOn: "2019-10-23T06:10:17.4060142",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4072313",
        rowVersion: "AAAAAAAACMI="
      },
      {
        name: "Andhra Pradesh",
        countryId: 97,
        id: 2,
        createdOn: "2019-10-23T06:10:17.4074077",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074171",
        rowVersion: "AAAAAAAACNY="
      },
      {
        name: "Arunachal Pradesh",
        countryId: 97,
        id: 3,
        createdOn: "2019-10-23T06:10:17.4074228",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074278",
        rowVersion: "AAAAAAAACNc="
      },
      {
        name: "Assam",
        countryId: 97,
        id: 4,
        createdOn: "2019-10-23T06:10:17.4074328",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074376",
        rowVersion: "AAAAAAAACNg="
      },
      {
        name: "Bihar",
        countryId: 97,
        id: 5,
        createdOn: "2019-10-23T06:10:17.4074425",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074473",
        rowVersion: "AAAAAAAACNk="
      },
      {
        name: "Chandigarh",
        countryId: 97,
        id: 6,
        createdOn: "2019-10-23T06:10:17.4074522",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074571",
        rowVersion: "AAAAAAAACNo="
      },
      {
        name: "Chhattisgarh",
        countryId: 97,
        id: 7,
        createdOn: "2019-10-23T06:10:17.4074619",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074667",
        rowVersion: "AAAAAAAACNs="
      },
      {
        name: "Dadra and Nagar Haveli",
        countryId: 97,
        id: 8,
        createdOn: "2019-10-23T06:10:17.4074714",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074762",
        rowVersion: "AAAAAAAACNw="
      },
      {
        name: "Daman and Diu",
        countryId: 97,
        id: 9,
        createdOn: "2019-10-23T06:10:17.4074842",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074896",
        rowVersion: "AAAAAAAACN0="
      },
      {
        name: "Delhi",
        countryId: 97,
        id: 10,
        createdOn: "2019-10-23T06:10:17.4074947",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074995",
        rowVersion: "AAAAAAAACN4="
      },
      {
        name: "Goa",
        countryId: 97,
        id: 11,
        createdOn: "2019-10-23T06:10:17.4075044",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075091",
        rowVersion: "AAAAAAAACN8="
      },
      {
        name: "Gujarat",
        countryId: 97,
        id: 12,
        createdOn: "2019-10-23T06:10:17.407514",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075188",
        rowVersion: "AAAAAAAACOA="
      },
      {
        name: "Haryana",
        countryId: 97,
        id: 13,
        createdOn: "2019-10-23T06:10:17.4075237",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075286",
        rowVersion: "AAAAAAAACOE="
      },
      {
        name: "Himachal Pradesh",
        countryId: 97,
        id: 14,
        createdOn: "2019-10-23T06:10:17.4075334",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075381",
        rowVersion: "AAAAAAAACOI="
      },
      {
        name: "Jammu and Kashmir",
        countryId: 97,
        id: 15,
        createdOn: "2019-10-23T06:10:17.407543",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075477",
        rowVersion: "AAAAAAAACOM="
      }
    ]);
  } else {
    res.status(200).send([]);
  }
});

app.get("/countries/:id/states/:sId/cities", function(req, res) {
  console.log("Params", req.params.sId, req.params.id);

  res.status(200).send([
    {
      id: 19,
      name: "Mumbai"
    },
    {
      id: 29,
      name: "New Delhi"
    }
  ]);
});

app.listen(8002, () => {
  console.log("Preset server started at 8002");
});
