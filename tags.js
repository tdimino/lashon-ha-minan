var tagValues = [
  [ "HT9a" , 'wrong total'],
  [ "HT11a" , 'wrong total'],
  [ "HT13" , 'wrong total'],
  [ "HT93a" , 'longest text'],
  [ "HT93b" , 'longest text'],
  [ "HT102" , 'wrong total'],
  [ "HT117" , 'longest text'],
  [ "HT118" , 'wrong total'],
  [ "HT119" , 'wrong total'],
  [ "IOZa6" , 'libation formula'],
  [ "IOZa2" , 'libation formula'],
  [ "IOZa9" , 'libation formula'],
  [ "IOZa9" , 'written right to left'],
  [ "IOZa11" , 'written right to left'],
  [ "KNZa19" , 'written right to left'],
  [ "PLZf1" , 'written right to left'],
  [ "PSZa2" , 'libation formula'],
  [ "TLZa1" , 'libation formula'],
  [ "VRYZa1" , 'written right to left'],
  [ "ZA15b" , 'wrong total'],
  [ "ZAZb3" , 'libation formula'],
  ["APZa2", "libation formula"],
  ["ARZf1", "libation formula"],
  ["ARZf2", "libation formula"],
  ["IOZa2", "libation formula"],
  ["IOZa3", "libation formula"],
  ["IOZa4", "libation formula"],
  ["IOZa6", "libation formula"],
  ["IOZa7", "libation formula"],
  ["IOZa8", "libation formula"],
  ["IOZa9", "libation formula"],
  ["IOZb10", "libation formula"],
  ["KNZa10", "libation formula"],
  ["KNZc7", "libation formula"],
  ["KNZe44", "libation formula"],
  ["KOZa1", "libation formula"],
  ["KYZc2", "libation formula"],
  ["MAZb8", "libation formula"],
  ["PKZa11", "libation formula"],
  ["PKZa12", "libation formula"],
  ["PKZa15", "libation formula"],
  ["PKZa17", "libation formula"],
  ["PKZa18", "libation formula"],
  ["PKZa4", "libation formula"],
  ["PKZa8", "libation formula"],
  ["PLZf1", "libation formula"],
  ["PRZa1", "libation formula"],
  ["PSZa2", "libation formula"],
  ["SYZa1", "libation formula"],
  ["SYZa3", "libation formula"],
  ["TLZa1", "libation formula"],
  ["VRYZa1", "libation formula"],
  ["SYZa2", "religious contributions"],
  ["ZAZb3", "religious contributions"],
  ["APZa1", "religious contributions"],
  ["CR(?)Zf1", "religious objects"],
  ["IOZa5", "religious objects"],
  ["KAZf1", "religious objects"],
  ["KNZa17", "religious objects"],
  ["KNZa18", "religious objects"],
  ["KNZa19", "religious objects"],
  ["KNZc6", "religious objects"],
  ["KNZf13", "religious objects"],
  ["KNZf31", "religious objects"],
  ["KO(?)Zf2", "religious objects"],
  ["PKZa14", "religious objects"],
  ["PKZa16", "religious objects"],
  ["PKZa9", "religious objects"],
  ["PKZc13", "religious objects"],
];

var tags = new Map();
for (var tag of tagValues) {
  if (tags.has(tag[0])) {
    tags.get(tag[0]).push(tag[1]);
    continue;
  }
  tags.set(tag[0], [tag[1]]);
}

var contextValues = [
["ARKH1", "LMIB"],
["ARKH2", "LMIB"],
["ARKH3", "LMIB"],
["ARKH4", "LMIB"],
["ARKH5", "LMIB"],
["ARKH6", "LMIB"],
["ARKH7", "LMIB"],
["ARKHZc8", "EMII"],
["ARKHZc8", "MMIA"],
["ARKHZf9", "LMI"],
["ARMZg1", "MMII"],
["GO2", "LMIB"],
["GOWc3", "LMIB"],
["IOZa12", "LMI"],
["IOZa6", "LMIA"],
["IOZa7", "LMI"],
["IOZa8", "LMI"],
["IOZb10", "LMI"],
["KE1", "MMIII"],
["KEWc2", "MMIII"],
["KEZb3", "LMIB"],
["KEZb4", "MMIII"],
["KEZb5", "LMIB"],
["KH10", "LMIB"],
["KH100", "LMIIIA"],
["KH102", "LMIIIA"],
["KH11", "LMIB"],
["KH12", "LMIB"],
["KH13", "LMIB"],
["KH14", "LMIB"],
["KH15", "LMIB"],
["KH16", "LMIB"],
["KH17", "LMIB"],
["KH18", "LMIB"],
["KH19", "LMIB"],
["KH20", "LMIB"],
["KH21", "LMIB"],
["KH22", "LMIB"],
["KH23", "LMIB"],
["KH24", "LMIB"],
["KH25", "LMIB"],
["KH26", "LMIB"],
["KH27", "LMIB"],
["KH28", "LMIB"],
["KH29", "LMIB"],
["KH30", "LMIB"],
["KH31", "LMIB"],
["KH32", "LMIB"],
["KH33", "LMIB"],
["KH34", "LMIB"],
["KH35", "LMIB"],
["KH36", "LMIB"],
["KH37", "LMIB"],
["KH38", "LMIB"],
["KH39", "LMIB"],
["KH40", "LMIB"],
["KH41", "LMIB"],
["KH42", "LMIB"],
["KH43", "LMIB"],
["KH44", "LMIB"],
["KH45", "LMIB"],
["KH46", "LMIB"],
["KH47", "LMIB"],
["KH49", "LMIB"],
["KH5", "LMIB"],
["KH50", "LMIB"],
["KH51", "LMIB"],
["KH52", "LMIB"],
["KH53", "LMIB"],
["KH54", "LMIB"],
["KH55", "LMIB"],
["KH56", "LMIB"],
["KH57", "LMIB"],
["KH58", "LMIB"],
["KH59", "LMIB"],
["KH6", "LMIB"],
["KH60", "LMIB"],
["KH61", "LMIB"],
["KH62", "LMIB"],
["KH63", "LMIB"],
["KH64", "LMIB"],
["KH65", "LMIB"],
["KH66", "LMIB"],
["KH67", "LMIB"],
["KH68+71", "LMIB"],
["KH69", "LMIB"],
["KH7", "LMIB"],
["KH70", "LMIB"],
["KH72", "LMIB"],
["KH73", "LMIB"],
["KH74", "LMIB"],
["KH75", "LMIB"],
["KH76", "LMIB"],
["KH77", "LMIB"],
["KH78", "LMIB"],
["KH8", "LMIB"],
["KH80", "LMIB"],
["KH81", "LMIB"],
["KH82", "LMIB"],
["KH83", "LMIB"],
["KH84", "LMIB"],
["KH85", "LMIB"],
["KH86", "LMIB"],
["KH87", "LMIB"],
["KH9", "LMIB"],
["KH91", "LMIB"],
["KHWa1001", "LMIB"],
["KHWa1003", "LMIB"],
["KHWa1005", "LMIB"],
["KHWa1006-1008", "LMIB"],
["KHWa1009", "LMIB"],
["KHWa1011", "LMIB"],
["KHWa1012", "LMIB"],
["KHWa1013", "LMIB"],
["KHWa1014", "LMIB"],
["KHWa1016", "LMIB"],
["KHWa1017", "LMIB"],
["KHWa1018", "LMIB"],
["KHWa1019", "LMIB"],
["KHWa1020", "LMIB"],
["KHWc2006", "LMIB"],
["KHWc2007", "LMIB"],
["KHWc2008", "LMIB"],
["KHWc2009", "LMIB"],
["KHWc2010", "LMIB"],
["KHWc2011", "LMIB"],
["KHWc2012", "LMIB"],
["KHWc2013", "LMIB"],
["KHWc2014", "LMIB"],
["KHWc2015", "LMIB"],
["KHWc2016", "LMIB"],
["KHWc2017", "LMIB"],
["KHWc2018", "LMIB"],
["KHWc2019", "LMIB"],
["KHWc2020", "LMIB"],
["KHWc2021", "LMIB"],
["KHWc2022", "LMIB"],
["KHWc2023", "LMIB"],
["KHWc2024", "LMIB"],
["KHWc2025", "LMIB"],
["KHWc2026", "LMIB"],
["KHWc2027", "LMIB"],
["KHWc2028", "LMIB"],
["KHWc2029", "LMIB"],
["KHWc2031", "LMIB"],
["KHWc2032", "LMIB"],
["KHWc2033", "LMIB"],
["KHWc2034", "LMIB"],
["KHWc2035", "LMIB"],
["KHWc2036", "LMIB"],
["KHWc2037", "LMIB"],
["KHWc2038", "LMIB"],
["KHWc2039", "LMIB"],
["KHWc2040", "LMIB"],
["KHWc2041", "LMIB"],
["KHWc2042", "LMIB"],
["KHWc2043", "LMIB"],
["KHWc2044+2096", "LMIB"],
["KHWc2045", "LMIB"],
["KHWc2046", "LMIB"],
["KHWc2047", "LMIB"],
["KHWc2048", "LMIB"],
["KHWc2049", "LMIB"],
["KHWc2050", "LMIB"],
["KHWc2051", "LMIB"],
["KHWc2052", "LMIB"],
["KHWc2053", "LMIB"],
["KHWc2054", "LMIB"],
["KHWc2055", "LMIB"],
["KHWc2056", "LMIB"],
["KHWc2057", "LMIB"],
["KHWc2058", "LMIB"],
["KHWc2059+2091+2092", "LMIB"],
["KHWc2060", "LMIB"],
["KHWc2061", "LMIB"],
["KHWc2062", "LMIB"],
["KHWc2063", "LMIB"],
["KHWc2064", "LMIB"],
["KHWc2065", "LMIB"],
["KHWc2066", "LMIB"],
["KHWc2067", "LMIB"],
["KHWc2068", "LMIB"],
["KHWc2069", "LMIB"],
["KHWc2070", "LMIB"],
["KHWc2074", "LMIB"],
["KHWc2079", "LMIB"],
["KHWc2084", "LMIB"],
["KHWc2088+2089+fr", "LMIB"],
["KHWc2095", "LMIB"],
["KHWc2097", "LMIB"],
["KHWc2098", "LMIB"],
["KHWc2099", "LMIB"],
["KHWc2100", "LMIB"],
["KHWc2101", "LMIB"],
["KHWc2102", "LMIB"],
["KHWc2103", "LMIB"],
["KHWc2104", "LMIB"],
["KHWc2105", "LMIB"],
["KHWc2106", "LMIB"],
["KHWc2109", "LMIB"],
["KHWc2110", "LMIB"],
["KHWc2111", "LMIB"],
["KHWc2113", "LMIB"],
["KHWc2114", "LMIB"],
["KHWc2115", "LMIB"],
["KHWc2117", "LMIIIA"],
["KHWc2122", "LMIB"],
["KHWc2123", "Geometric"],
["KHZb98", "MMIII"],
["KN1", "MMIIIB"],
["KNWc29", "MMIIIB"],
["KNWc3", "MMIIIB"],
["KNWc30", "MMIIIB"],
["KNZa10", "LMIA"],
["KNZb20", "LMIA"],
["KNZb5", "MMIIIB"],
["KNZb52", "LMIA"],
["KNZb<27>", "MMIIIB"],
["KNZf13", "LMIA"],
["KNZg55", "LMI"],
["KNZg<21>", "LMIA"],
["KYZg1", "LMIA"],
["MA1", "MMIII"],
["MA10", "MMIII"],
["MA2", "MMIII"],
["MA4", "MMIII"],
["MA6", "MMIII"],
["MA9", "MMIII"],
["MAWc7", "MMIII"],
["MAWc7", "MMIIIB"],
["MAZb8", "LMIA"],
["MI2", "LBI"],
["PEZb3", "LMIB"],
["PEZb7", "LMIB"],
["PEZb8", "LMIB"],
["PEZc4", "LMIB"],
["PEZg5", "LMIB"],
["PH10", "MMII"],
["PH11", "MMII"],
["PH12", "MMII"],
["PH13", "MMII"],
["PH14", "MMII"],
["PH15", "MMII"],
["PH16", "MMII"],
["PH17", "MMII"],
["PH18", "MMII"],
["PH19", "MMII"],
["PH22", "MMII"],
["PH24", "MMII"],
["PH25", "MMII"],
["PH26", "MMII"],
["PH27", "MMII"],
["PH28", "MMII"],
["PH3", "MMIII"],
["PH30", "MMII"],
["PH6", "MMII"],
["PH7", "MMII"],
["PH8", "MMII"],
["PH9", "MMII"],
["PHWa32", "MMIII"],
["PHWb33", "MMII"],
["PHWb34", "MMII"],
["PHWb35", "MMII"],
["PHWb36", "MMII"],
["PHWb55", "MMII"],
["PHWc37", "MMII"],
["PHWc38", "MMII"],
["PHWc39", "MMII"],
["PHWc40", "MMII"],
["PHWc41", "MMII"],
["PHWc43", "MMII"],
["PHWc44", "MMII"],
["PHWc46", "MMII"],
["PHWc52", "MMII"],
["PHWg45", "MMII"],
["PHWy42", "MMII"],
["PHZb48", "MMI"],
["PHZb48", "MMIII"],
["PHZb<47>", "MMI"],
["PHZb<47>", "MMIII"],
["PK1", "LMI"],
["POZc1", "LMIIIA"],
["PRZa1", "LMIA"],
["PSIZa1", "LMIB"],
["PSIZa2", "LMIB"],
["PYR1", "LMIB"],
["PYRZb5", "LMI"],
["SAMWa1", "MMII"],
["SYZa1", "MMIIIB"],
["SYZa10", "LMIA"],
["SYZa11", "LMIA"],
["SYZa12", "LMIA"],
["SYZa2", "LMI"],
["SYZa3", "LMIA"],
["SYZa4", "LMIA"],
["SYZa6", "MMIIIA"],
["SYZa8", "LMIA"],
["SYZa9", "LMIA"],
["THEZb2", "LMIA"],
["THEZb3", "LMIA"],
["THEZb4", "LMIA"],
["THE4", "LMIA"],
["THE5", "LMIA"],
["THE6", "LMIA"],
["TYZg1", "LMI"],
["ZA10", "LMIB"],
["ZA11", "LMIB"],
["ZA12", "LMIB"],
["ZA14", "LMIB"],
["ZA15", "LMIB"],
["ZA16", "LMIB"],
["ZA20", "LMIB"],
["ZA4", "LMIB"],
["ZA5", "LMIB"],
["ZA6", "LMIB"],
["ZA7", "LMIB"],
["ZA8", "LMIB"],
["ZA9", "LMIB"],
["ZAWc2", "LMIB"],
["ZAZb3", "LMIB"],
["ZAZb34", "LMIB"],
["ZAZg35", "LMIA"],
["HT1", "LMIB"],
["HT100", "LMIB"],
["HT101", "LMIB"],
["HT102", "LMIB"],
["HT103", "LMIB"],
["HT104", "LMIB"],
["HT105", "LMIB"],
["HT106", "LMIB"],
["HT107", "LMIB"],
["HT108", "LMIB"],
["HT109", "LMIB"],
["HT10a", "LMIB"],
["HT10b", "LMIB"],
["HT110a", "LMIB"],
["HT110b", "LMIB"],
["HT111a", "LMIB"],
["HT111b", "LMIB"],
["HT112a", "LMIB"],
["HT112b", "LMIB"],
["HT113", "LMIB"],
["HT114a", "LMIB"],
["HT114b", "LMIB"],
["HT115a", "LMIB"],
["HT115b", "LMIB"],
["HT116a", "LMIB"],
["HT116b", "LMIB"],
["HT117a", "LMIB"],
["HT117b", "LMIB"],
["HT118", "LMIB"],
["HT119", "LMIB"],
["HT11a", "LMIB"],
["HT11b", "LMIB"],
["HT12", "LMIB"],
["HT120", "LMIB"],
["HT121", "LMIB"],
["HT122a", "LMIB"],
["HT122b", "LMIB"],
["HT123a", "LMIB"],
["HT123b", "LMIB"],
["HT125a", "LMIB"],
["HT125b", "LMIB"],
["HT126a", "LMIB"],
["HT126b", "LMIB"],
["HT127a", "LMIB"],
["HT127b", "LMIB"],
["HT128a", "LMIB"],
["HT128b", "LMIB"],
["HT129", "LMIB"],
["HT13", "LMIB"],
["HT130", "LMIB"],
["HT131a", "LMIB"],
["HT131b", "LMIB"],
["HT132", "LMIB"],
["HT133", "LMIB"],
["HT135a", "LMIB"],
["HT135b", "LMIB"],
["HT136", "LMIB"],
["HT136a", "LMIB"],
["HT136b", "LMIB"],
["HT137", "LMIB"],
["HT139", "LMIB"],
["HT14", "LMIB"],
["HT140", "LMIB"],
["HT141", "LMIB"],
["HT142", "LMIB"],
["HT144", "LMIB"],
["HT146", "LMIB"],
["HT147", "LMIB"],
["HT15", "LMIB"],
["HT154.", "LMIB"],
["HT154a", "LMIB"],
["HT154b", "LMIB"],
["HT154c", "LMIB"],
["HT154e", "LMIB"],
["HT154g", "LMIB"],
["HT154ja", "LMIB"],
["HT154jb", "LMIB"],
["HT154k", "LMIB"],
["HT154l", "LMIB"],
["HT154m", "LMIB"],
["HT154n", "LMIB"],
["HT16", "LMIB"],
["HT17", "LMIB"],
["HT18", "LMIB"],
["HT19", "LMIB"],
["HT2", "LMIB"],
["HT20", "LMIB"],
["HT21", "LMIB"],
["HT22", "LMIB"],
["HT23a", "LMIB"],
["HT23b", "LMIB"],
["HT24a", "LMIB"],
["HT24b", "LMIB"],
["HT25a", "LMIB"],
["HT25b", "LMIB"],
["HT26a", "LMIB"],
["HT26b", "LMIB"],
["HT27a", "LMIB"],
["HT27b", "LMIB"],
["HT28a", "LMIB"],
["HT28b", "LMIB"],
["HT29", "LMIB"],
["HT3", "LMIB"],
["HT30", "LMIB"],
["HT31", "LMIB"],
["HT32", "LMIB"],
["HT33", "LMIB"],
["HT34", "LMIB"],
["HT35", "LMIB"],
["HT36", "LMIB"],
["HT37", "LMIB"],
["HT38", "LMIB"],
["HT39", "LMIB"],
["HT4", "LMIB"],
["HT40", "LMIB"],
["HT41a", "LMIB"],
["HT41b", "LMIB"],
["HT42+59", "LMIB"],
["HT43", "LMIB"],
["HT44a", "LMIB"],
["HT44b", "LMIB"],
["HT45a", "LMIB"],
["HT45b", "LMIB"],
["HT46a", "LMIB"],
["HT46b", "LMIB"],
["HT47a", "LMIB"],
["HT47b", "LMIB"],
["HT49a", "LMIB"],
["HT49b", "LMIB"],
["HT5", "LMIB"],
["HT50a", "LMIB"],
["HT50b", "LMIB"],
["HT51a", "LMIB"],
["HT51b", "LMIB"],
["HT52a", "LMIB"],
["HT52b", "LMIB"],
["HT53a", "LMIB"],
["HT53b", "LMIB"],
["HT54a", "LMIB"],
["HT54b", "LMIB"],
["HT55a", "LMIB"],
["HT55b", "LMIB"],
["HT56a", "LMIB"],
["HT56b", "LMIB"],
["HT57a", "LMIB"],
["HT57b", "LMIB"],
["HT58", "LMIB"],
["HT60", "LMIB"],
["HT61", "LMIB"],
["HT62", "LMIB"],
["HT62+73", "LMIB"],
["HT63", "LMIB"],
["HT64", "LMIB"],
["HT65", "LMIB"],
["HT66", "LMIB"],
["HT67", "LMIB"],
["HT68", "LMIB"],
["HT69", "LMIB"],
["HT6a", "LMIB"],
["HT6b", "LMIB"],
["HT70", "LMIB"],
["HT72", "LMIB"],
["HT73", "LMIB"],
["HT73+62", "LMIB"],
["HT74", "LMIB"],
["HT75", "LMIB"],
["HT78", "LMIB"],
["HT79+83", "LMIB"],
["HT7a", "LMIB"],
["HT7b", "LMIB"],
["HT80", "LMIB"],
["HT81", "LMIB"],
["HT82", "LMIB"],
["HT84", "LMIB"],
["HT85a", "LMIB"],
["HT85b", "LMIB"],
["HT86a", "LMIB"],
["HT86b", "LMIB"],
["HT87", "LMIB"],
["HT88", "LMIB"],
["HT89", "LMIB"],
["HT8a", "LMIB"],
["HT8b", "LMIB"],
["HT90", "LMIB"],
["HT91", "LMIB"],
["HT92", "LMIB"],
["HT93a", "LMIB"],
["HT93b", "LMIB"],
["HT94a", "LMIB"],
["HT94b", "LMIB"],
["HT95a", "LMIB"],
["HT95b", "LMIB"],
["HT96a", "LMIB"],
["HT96b", "LMIB"],
["HT97a", "LMIB"],
["HT97b", "LMIB"],
["HT98a", "LMIB"],
["HT98b", "LMIB"],
["HT99a", "LMIB"],
["HT99b", "LMIB"],
["HT9a", "LMIB"],
["HT9b", "LMIB"],
["HTW231a", "LMIB"],
["HTW231b", "LMIB"],
["HTW231c", "LMIB"],
["HTW231d-f", "LMIB"],
["HTWd1617", "LMIB"],
["HTWd1663", "LMIB"],
["HTWe/Wc3020", "LMIB"],
["HTZb158a", "LMIB"],
["HTZb158b", "LMIB"],
["HTZb159", "LMIB"],
["HTZb160", "LMIB"],
["HTZb161", "LMIB"],
["HTZb162", "LMIB"],
["HTZb162bis", "LMIB"],
["HTZd155", "LMIB"],
["HTZd157+156", "LMIB"],
["HTZd157,156,155", "LMIB"],
["HTZf163", "LMIB"],
["HTZf164", "LMIB"],
["HTZf165", "LMIB"],
["HTZf166", "LMIB"],
["HTZf167", "LMIB"],
["HTZf168", "LMIB"],
["HTZf169", "LMIB"],
["HTZg163", "MMIIIB"],
["HTZg163", "LMIA"],
];

var periodNames = new Map([
["EM", "Pre-palace period 3500-1900 BCE"],
["EMI", "Early Minoan I  3500-2900 BCE"],
["EMII", "Early Minoan IIA, IIB  2900-2300 BCE"],
["EMIIIi", "Early Minoan III, Middle Minoan IA  2300-1900 BCE"],
["MHIII", "Middle Helladic 2000-1550 BCE"],
["MM", "Old Palace period 1900-1650 BCE"],
["MMI", "Middle Minoan I  1900-1800 BCE"],
["MMIA", "Middle Minoan IA  1900-1850 BCE"],
["MMIB", "Middle Minoan IB  1900-1800 BCE"],
["MMII", "Middle Minoan II  1800-1650 BCE"],
["MMIIA", "Middle Minoan IIA  1800-1750 BCE"],
["MMIIB", "Middle Minoan IIB, IIIA 1750-1650 BCE"],
["MMIII", "Middle Minoan III 1750-1600 BCE"],
["MMIIIA", "Middle Minoan IIB, IIIA 1750-1650 BCE"],
["NP",  "New Palace period 1650-1450 BCE"],
["MMIIIB", "(first) Middle Minoan IIIB  1650-1600 BCE"],
["LMI", "Late Minoan I 1600-1450 BCE"],
["LMIA", "Late Minoan IA 1600-1500 BCE"],
["LMIB", "Late Minoan IB  1500-1450 BCE"],
["CM",  "Creto-Mycenaean period  1450-1100 BCE"],
["LHI",  "1550-1450 BCE"],
["LBI",  "1550-1400 BCE"],
["LMII", "Third Palace period, Late Minoan II, IIIA1  1450-1350 BCE"],
["LMIII",  "Post Palace period. Late Minoan IIIA2, IIIB, IIIC 1400-1100 BCE"],
["LMIIIA",  "Post Palace period. Late Minoan IIIB 1350-1100 BCE"],
["SM",  "Sub-Minoan period 1100-1000 BCE"],
["Geometric",  "1000BCE"],
]);
var contexts = new Map();
for (var context of contextValues) {
  if (contexts.has(context[0])) {
    contexts.get(context[0]).push(periodNames.get(context[1]));
    continue;
  }
	if (!periodNames.has(context[1])) {
		console.log(context[0]);
	}
  contexts.set(context[0], [periodNames.get(context[1])]);
}

var supports = [];
var scribes = [];
function loadInscriptionLevelTags() {
  for (var inscription of inscriptions.values()) {
    for (var item of [[supports, inscription.support],
                      [scribes, inscription.scribe]]) {
      var tag = item[1];
      if (!tag) {
        continue;
      }
      if (item[0].includes(tag)) {
        continue;
      }
      item[0].push(tag);
    }
  }
}

var wordtags = [];
function loadAnnotations() {
  var collectedWordTags = [];
  for (var annotation of wordAnnotations) {
    var inscription = inscriptions.get(annotation.name);
    inscription.wordTags = [];
    for (var word of annotation.tagsForWords) {
      inscription.wordTags.push(word.tags);
      collectedWordTags.push(...word.tags);
    }
  }
  wordtags = collectedWordTags.filter((v, i, a) => a.indexOf(v) === i);
}

