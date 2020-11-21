var tagValues = [
  ["APZa1", "Religious Contributions"],
  ["APZa2", "Libation Formula"],
  ["ARZf1", "Libation Formula"],
  ["ARZf2", "Libation Formula"],
  ["CR(?)Zf1", "Religious Objects"],
  ["HT102", "Wrong Total"],
  ["HT94a", "Wrong Total"],
  ["HT117", "longest text"],
  ["HT118", "Wrong Total"],
  ["HT119", "Wrong Total"],
  ["HT11a", "Wrong Total"],
  ["HT13", "Wrong Total"],
  ["HT93a", "longest text"],
  ["HT93b", "longest text"],
  ["HT9a", "Wrong Total"],
  ["IOZa11", "written right to left"],
  ["IOZa2", "Libation Formula"],
  ["IOZa3", "Libation Formula"],
  ["IOZa4", "Libation Formula"],
  ["IOZa5", "Religious Objects"],
  ["IOZa6", "Libation Formula"],
  ["IOZa7", "Libation Formula"],
  ["IOZa8", "Libation Formula"],
  ["IOZa9", "Libation Formula"],
  ["IOZa9", "written right to left"],
  ["IOZb10", "Libation Formula"],
  ["KAZf1", "Religious Objects"],
  ["KNZa10", "Libation Formula"],
  ["KNZa17", "Religious Objects"],
  ["KNZa18", "Religious Objects"],
  ["KNZa19", "Religious Objects"],
  ["KNZa19", "written right to left"],
  ["KNZc6", "Religious Objects"],
  ["KNZc7", "Libation Formula"],
  ["KNZe44", "Libation Formula"],
  ["KNZf13", "Religious Objects"],
  ["KNZf31", "Religious Objects"],
  ["KO(?)Zf2", "Religious Objects"],
  ["KOZa1", "Libation Formula"],
  ["KYZc2", "Libation Formula"],
  ["MAZb8", "Libation Formula"],
  ["PKZa11", "Libation Formula"],
  ["PKZa12", "Libation Formula"],
  ["PKZa14", "Religious Objects"],
  ["PKZa15", "Libation Formula"],
  ["PKZa16", "Religious Objects"],
  ["PKZa17", "Libation Formula"],
  ["PKZa18", "Libation Formula"],
  ["PKZa4", "Libation Formula"],
  ["PKZa8", "Libation Formula"],
  ["PKZa9", "Religious Objects"],
  ["PKZc13", "Religious Objects"],
  ["PLZf1", "Libation Formula"],
  ["PLZf1", "written right to left"],
  ["PRZa1", "Libation Formula"],
  ["PSZa2", "Libation Formula"],
  ["SYZa1", "Libation Formula"],
  ["SYZa2", "Religious Contributions"],
  ["SYZa3", "Libation Formula"],
  ["TLZa1", "Libation Formula"],
  ["VRYZa1", "Libation Formula"],
  ["VRYZa1", "written right to left"],
  ["ZA15b", "Wrong Total"],
  ["ZAZb3", "Libation Formula"],
  ["ZAZb3", "Religious Contributions"],
  ["ARKH3a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["ARKH3b", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT2", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT100", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["HT101", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT114a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT116a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT116b", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT12", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT121", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT125a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT125b", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT129", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT131a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT131b", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT137", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT139", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT14", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT18", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT21", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT23a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT23b", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT27a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT27b", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["HT28a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT28b", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT30", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT30", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["HT32", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT33", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT34", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT35", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["HT44a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT50a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT58", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT90", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["HT91", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT94a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT96b", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT99a", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["HT102", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT106", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT128a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["HT130", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["KH5", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["KH8", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["KH9", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["KH9", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["KH11", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["KH12", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["KH21", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["KH55", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["KH61", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["KNZb35", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["TY3a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["ZA18a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["ZA6a", "Violation of grain-cyperus, oil, olive, figs, wine word order"],
  ["ZA6b", "Uses grain-cyperus, oil, olive, figs, wine word order"],
  ["ZA11a", "Uses grain-cyperus, oil, olive, figs, wine word order"],
];

var tags = new Map();
for (var tag of tagValues) {
  if (tags.has(tag[0])) {
    tags.get(tag[0]).push(tag[1]);
    continue;
  }
  tags.set(tag[0], [tag[1]]);
}

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
for (var inscription of inscriptions.values()) {
  var key = inscription.name;
  var context = inscription.context;
  if (contexts.has(key)) {
    contexts.get(key).push(periodNames.get(context));
    continue;
  }
  if (!context) {
    continue;
  }
  if (!periodNames.has(context)) {
    console.log("Missing context: " + context);
  }
  contexts.set(key, [periodNames.get(context)]);
}

var grasses = ["𐙉", "𐛟","𐛬","𐛭","𐛮","𐛯","𐛱","𐛲","𐜠𐛱","𐙗","𐜙","𐜙","𐜚","𐜚","𐜛"];
var oilProducts = ["𐙖", "𐙜", "𐙘", "𐜉","𐜉","𐜊","𐜋","𐜋","𐜌","𐜍","𐜍","𐜎","𐜎","𐜏","𐜏",
                      "𐜐","𐜐","𐜑","𐜒","𐜓","𐜓","𐜔","𐜕","𐜖","𐜗","𐜗","𐜘"];
var MIProducts = ["𐘻","𐛚","𐛜","𐛜","𐛛","𐛙","𐛝"];
var vineProducts = ["𐙍","𐛾","𐙍","𐛽","𐙍","𐘞𐙍","𐛼","𐜀","𐜂", "𐛻","𐛿","𐜁","𐘋𐙍","𐙍𐘻"];
var QAProducts = ["𐚻","𐚹", "𐚻","𐚼","𐚹","𐚺","𐚻","𐚹","𐚻"];
var olive = ["𐙋"];
var figs = ["𐘝"];
var bronze = ["𐙈"];

var magazineRooms = new Map();
magazineRooms.set("57", {"x":61, "y":354, "width":58, "height":91});
magazineRooms.set("7a", {"x":372, "y":359, "width":41, "height":117});
magazineRooms.set("7", {"x":36, "y":486, "width":105, "height":23});
magazineRooms.set("17", {"x":477, "y":378, "width":106, "height":104});
magazineRooms.set("61", {"x":701, "y":445, "width":78, "height":87});
magazineRooms.set("8", {"x":711, "y":374, "width":72, "height":53});
magazineRooms.set("5", {"x":848, "y":314, "width":97, "height":137});
magazineRooms.set("findspot", {"x":699, "y":315, "width":33, "height":16});
magazineRooms.set("59", {"x":657, "y":193, "width":130, "height":117});
magazineRooms.set("58", {"x":415, "y":132, "width":140, "height":148});

var magazineRoomForProduct = new Map();
grasses.forEach(x => magazineRoomForProduct.set(x, "58"));
oilProducts.forEach(x => magazineRoomForProduct.set(x, "8"));
MIProducts.forEach(x => magazineRoomForProduct.set(x, "5"));
vineProducts.forEach(x => magazineRoomForProduct.set(x, "61"));
QAProducts.forEach(x => magazineRoomForProduct.set(x, "17"));
olive.forEach(x => magazineRoomForProduct.set(x, "58"));
figs.forEach(x => magazineRoomForProduct.set(x, "58"));
bronze.forEach(x => magazineRoomForProduct.set(x, "7a"));

var porticoRooms = new Map();
porticoRooms.set("findspot", {"x":280, "y":122, "width":75, "height":50});

var mainPlanRooms = new Map();
mainPlanRooms.set("9", {"x":613, "y":2322, "width":87, "height":93});

var casaDelLebeteRooms = new Map();
casaDelLebeteRooms.set("9", {"x":145, "y":126, "width":27, "height":32});
casaDelLebeteRooms.set("7", {"x":170, "y":75, "width":17, "height":41});

var maliaRooms = new Map();
maliaRooms.set("8",{"x":625, "y":1216, "width":114, "height":102});
maliaRooms.set("NW",{"x":1193, "y":773, "width":134, "height":106});
maliaRooms.set("E", {"x":1933, "y":1014, "width":114, "height":75});

var syllableValues = [
  ["𐘕", "BOS"],
  ["𐘖", "BOSM"],
  ["𐘒", "CAP"],
  ["𐘓", "CAPF"],
  ["𐘔", "CAPM"],
  ["𐙗", "CYP"],
  ["𐘝", "FIC"],
  ["𐙉", "GRA"],
  ["𐙊", "GRAB"],
  ["𐙖", "OLE"],
  ["𐙋", "OLIV"],
  ["𐘏", "OVIS"],
  ["𐘐", "OVISF"],
  ["𐘑", "OVISM"],
  ["𐙄", "SUS"],
  ["𐘮", "TELA"],
  ["𐙍", "VIN"],
  ["𐙎", "VINB"],
  ["𐙏", "VINC"],
  ["𐙇", "VIR"],
  ["𐙇", "MUL"],
  ["𐚠", "VAS"],
  ["𐚡", "VAS"],
  ["𐚢", "VAS"],
  ["𐚣", "VAS"],
  ["𐚤", "VAS"],
  ["𐚥", "VAS"],
  ["𐚦", "VAS"],
  ["𐚧", "VAS"],
  ["𐚨", "VAS"],
  ["𐚩", "VAS"],
  ["𐚪", "VAS"],
  ["𐙌", "AROM"],
  ["𐙔", "GAL"],
  ["𐙆", "TWE"],
  ["𐝁", "B"],
  ["𐝂", "D"],
  ["𐝃", "E"],
  ["𐝄", "F"],
  ["𐝅", "H"],
  ["𐝆", "J"],
  ["𐝇", "K"],
  ["𐝈", "L"],
  ["𐝉", "L2"],
  ["𐝊", "L3"],
  ["𐝋", "L4"],
  ["𐝌", "L6"],
  ["𐝍", "W"],
  ["𐝎", "X"],
  ["𐝏", "Y"],
  ["𐝐", "Ω"],
  ["𐝑", "B"],
  ["𐝒", "BB"],
  ["𐝁𐝌", "BL6"],
  ["𐝓", "DD"],
  ["𐝂𐝂𐝂𐝂", "DDDD"],
  ["𐝃𐝁", "EB"],
  ["𐝃𐝃", "EE"],
  ["𐝃𐝄", "EF"],
  ["𐝃𐝆", "EJ"],
  ["𐝃𐝉", "EL2"],
  ["𐝃𐝋", "EL4"],
  ["𐝃𐝌", "EL6"],
  ["𐝔", "EYYY"],
  ["𐝄𐝇", "FK"],
  ["𐝄𐝈", "FL"],
  ["𐝅𐝇", "HK"],
  ["𐝆𐝀", "J"],
  ["𐝆𐝁", "JB"],
  ["𐝕", "JE"],
  ["𐝆𐝃𐝁", "JEB"],
  ["𐝆𐝃𐝉", "JEL2"],
  ["𐝆𐝄", "JF"],
  ["𐝆𐝅", "JH"],
  ["𐝆𐝆", "JJ"],
  ["𐝆𐝇", "JK"],
  ["𐝆𐝉", "JL2"],
  ["𐝇𐝉", "KL2"],
  ["𐝈𐝈", "LL"],
  ["𐝈𐝉", "LL2"],
  ["𐝉𐝋", "L2L4"],
["𐘀", "DA"],
["𐘁", "RO"],
["𐘂", "PA"],
["𐘃", "TE"],
["𐘄", "TO"],
["𐘅", "NA"],
["𐘆", "DI"],
["𐘇", "A"],
["𐘈", "SE"],
["𐘉", "U"],
["𐘊", "PO"],
["𐘋", "ME"],
["𐘌", "QA"],
["𐘍", "ZA"],
["𐘎", "ZO"],
["𐘏", "QI"],
["𐘕", "MU"],
["𐘗", "NE"],
["𐘘", "RU"],
["𐘙", "RE"],
["𐘚", "I"],
["𐘜", "PU2"],
["𐘝", "NI"],
["𐘞", "SA"],
["𐘠", "TI"],
["𐘡", "E"],
["𐘢", "PI"],
["𐘣", "WI"],
["𐘤", "SI"],
["𐘥", "KE"],
["𐘦", "DE"],
["𐘧", "JE"],
["𐘩", "NWA"],
["𐘫", "PU"],
["𐘬", "DU"],
["𐘭", "RI"],
["𐘮", "WA"],
["𐘯", "NU"],
["𐘰", "PA3"],
["𐘱", "JA"],
["𐘲", "SU"],
["𐘳", "TA"],
["𐘴", "RA"],
["𐘵", "O"],
["𐘶", "JU"],
["𐘷", "TA2"],
["𐘸", "KI"],
["𐘹", "TU"],
["𐘺", "KO"],
["𐘻", "MI"],
["𐘼", "ZE"],
["𐘽", "RA2"],
["𐘾", "KA"],
["𐘿", "QE"],
["𐙁", "MA"],
["𐙂", "KU"],
["𐙄", "AU"],
["𐙆", "TWE"],
  ["𐘁", "RO"],
  ["𐘂", "PA"],
  ["𐘃", "TE"],
  ["𐘄", "TO"],
  ["𐘅", "NA"],
  ["𐘆", "DI"],
  ["𐘇", "A"],
  ["𐘈", "SE"],
  ["𐘉", "U"],
  ["𐘊", "PO"],
  ["𐘋", "ME"],
  ["𐘌", "QA"],
  ["𐘍", "ZA"],
  ["𐘎", "ZO"],
  ["𐘏", "QI"],
  ["𐘕", "MU"],
  ["𐘗", "NE"],
  ["𐘘", "RU"],
  ["𐘙", "RE"],
  ["𐘚", "I"],
  ["𐘜", "PU₂"],
  ["𐘝", "NI"],
  ["𐘞", "SA"],
  ["𐘠", "TI"],
  ["𐘡", "E"],
  ["𐘢", "PI"],
  ["𐘣", "WI"],
  ["𐘤", "SI"],
  ["𐘥", "KE"],
  ["𐘦", "DE"],
  ["𐘧", "JE"],
  ["𐘩", "NWA"],
  ["𐘫", "PU"],
  ["𐘬", "DU"],
  ["𐘭", "RI"],
  ["𐘮", "WA"],
  ["𐘯", "NU"],
  ["𐘰", "PA₂"],
  ["𐘱", "JA"],
  ["𐘲", "SU"],
  ["𐘳", "TA"],
  ["𐘴", "RA"],
  ["𐘵", "O"],
  ["𐘶", "JU"],
  ["𐘷", "TA₂"],
  ["𐘸", "KI"],
  ["𐘹", "TU"],
  ["𐘺", "KO"],
  ["𐘻", "MI"],
  ["𐘼", "ZE"],
  ["𐘽", "RA₂"],
  ["𐘾", "KA"],
  ["𐘿", "QE"],
  ["𐙁", "MA"],
  ["𐙂", "KU"],
  ["𐙄", "AU"],
  ["𐙆", "TWE"],
  ["𐘐", "*21F"],
  ["𐘑", "*21M"],
  ["𐘒", "*22"],
  ["𐘓", "*22F"],
  ["𐘔", "*22M"],
  ["𐘖", "*23M"],
  ["𐘛", "*28B"],
  ["𐘟", "*34"],
  ["𐘨", "*47"],
  ["𐘪", "*49"],
  ["𐙀", "*79"],
  ["𐙃", "*82"],
  ["𐙅", "*86"],
  ["𐙇", "*100-102"],
  ["𐙈", "*118"],
  ["𐙉", "*120"],
  ["𐙊", "*120B"],
  ["𐙋", "*122"],
  ["𐙌", "*123"],
  ["𐙍", "*131"],
  ["𐙎", "*131B"],
  ["𐙏", "*131C"],
  ["𐙐", "*164"],
  ["𐙑", "*171"],
  ["𐙒", "*180"],
  ["𐙓", "*188"],
  ["𐙔", "*191"],
  ["𐙕", "*301"],
  ["𐙖", "*302"],
  ["𐙗", "*303"],
  ["𐙘", "*304"],
  ["𐙙", "*305"],
  ["𐙚", "*306"],
  ["𐙛", "*307"],
  ["𐙜", "*308"],
  ["𐙝", "*309"],
  ["𐙞", "*309B"],
  ["𐙟", "*309C"],
  ["𐙠", "*310"],
  ["𐙡", "*311"],
  ["𐙢", "*312"],
  ["𐙣", "*313"],
  ["𐙤", "*313B"],
  ["𐙥", "*313C"],
  ["𐙦", "*314"],
  ["𐙧", "*315"],
  ["𐙨", "*316"],
  ["𐙩", "*317"],
  ["𐙪", "*318"],
  ["𐙫", "*319"],
  ["𐙬", "*320"],
  ["𐙭", "*321"],
  ["𐙮", "*322"],
  ["𐙯", "*323"],
  ["𐙰", "*324"],
  ["𐙱", "*325"],
  ["𐙲", "*326"],
  ["𐙳", "*327"],
  ["𐙴", "*328"],
  ["𐙵", "*329"],
  ["𐙶", "*330"],
  ["𐙷", "*331"],
  ["𐙸", "*332"],
  ["𐙹", "*333"],
  ["𐙺", "*334"],
  ["𐙻", "*335"],
  ["𐙼", "*336"],
  ["𐙽", "*337"],
  ["𐙾", "*338"],
  ["𐙿", "*339"],
  ["𐚀", "*340"],
  ["𐚁", "*341"],
  ["𐚂", "*342"],
  ["𐚃", "*343"],
  ["𐚄", "*344"],
  ["𐚅", "*345"],
  ["𐚆", "*346"],
  ["𐚇", "*347"],
  ["𐚈", "*348"],
  ["𐚉", "*349"],
  ["𐚊", "*350"],
  ["𐚋", "*351"],
  ["𐚌", "*352"],
  ["𐚍", "*353"],
  ["𐚎", "*354"],
  ["𐚏", "*355"],
  ["𐚐", "*356"],
  ["𐚑", "*357"],
  ["𐚒", "*358"],
  ["𐚓", "*359"],
  ["𐚔", "*360"],
  ["𐚕", "*361"],
  ["𐚖", "*362"],
  ["𐚗", "*363"],
  ["𐚘", "*364"],
  ["𐚙", "*365"],
  ["𐚚", "*366"],
  ["𐚛", "*367"],
  ["𐚜", "*368"],
  ["𐚝", "*369"],
  ["𐚞", "*370"],
  ["𐚟", "*371"],
  ["𐚠", "*400-VS"],
  ["𐚡", "*401-VS"],
  ["𐚢", "*402-VS"],
  ["𐚣", "*403-VS"],
  ["𐚤", "*404-VS"],
  ["𐚥", "*405-VS"],
  ["𐚦", "*406-VS"],
  ["𐚧", "*407-VS"],
  ["𐚨", "*408-VS"],
  ["𐚩", "*409-VS"],
  ["𐚪", "*410-VS"],
  ["𐚫", "*411-VS"],
  ["𐚬", "*412-VS"],
  ["𐚭", "*413-VS"],
  ["𐚮", "*414-VS"],
  ["𐚯", "*415-VS"],
  ["𐚰", "*416-VS"],
  ["𐚱", "*417-VS"],
  ["𐚲", "*418-VS"],
  ["𐚳", "*501"],
  ["𐚴", "*502"],
  ["𐚵", "*503"],
  ["𐚶", "*504"],
  ["𐚷", "*505"],
  ["𐚸", "*506"],
  ["𐘋𐙍", "*507"],
  ["𐚹", "*508"],
  ["𐚺", "*509"],
  ["𐚻", "*510"],
  ["𐚼", "*511"],
  ["𐚽", "*512"],
  ["𐚾", "*513"],
  ["𐘗𐘸", "*514"],
  ["𐚿", "*515"],
  ["𐛀", "*516"],
  ["𐘚𐛭", "*517"],
  ["𐘚𐙋", "*518"],
  ["𐘚𐙕", "*519"],
  ["𐛁", "*520"],
  ["𐛂", "*521"],
  ["𐘞𐙍", "*522"],
  ["𐛃", "*523"],
  ["𐛄", "*524"],
  ["𐛅", "*525"],
  ["𐛆", "*526"],
  ["𐛇", "*527"],
  ["𐛈", "*528"],
  ["𐛉", "*529"],
  ["𐛊", "*530"],
  ["𐛋", "*531"],
  ["𐛌", "*532"],
  ["𐘤𐙗", "*533"],
  ["𐛍", "*534"],
  ["𐛎", "*535"],
  ["𐛏", "*536"],
  ["𐛐", "*537"],
  ["𐛑", "*538"],
  ["𐛒", "*539"],
  ["𐛓", "*540"],
  ["𐛔", "*541"],
  ["𐛕", "*542"],
  ["𐘷𐙗", "*543"],
  ["𐛖", "*545"],
  ["𐘸𐙁𐘘", "*546"],
  ["𐛗", "*547"],
  ["𐛘", "*548"],
  ["𐛙", "*549"],
  ["𐛚", "*550"],
  ["𐛛", "*551"],
  ["𐛜", "*552"],
  ["𐛝", "*553"],
  ["𐛞", "*554"],
  ["𐛟", "*555"],
  ["𐛠", "*556"],
  ["𐛡", "*557"],
  ["𐛢", "*558"],
  ["𐛢", "*559"],
  ["𐛢", "*560"],
  ["𐙁𐘘𐘋", "*561"],
  ["𐙁𐘘𐘙", "*562"],
  ["𐛣", "*563"],
  ["𐛤", "*564"],
  ["𐛥", "*565"],
  ["𐛦", "*566"],
  ["𐙇", "*567"],
  ["𐛧", "*568"],
  ["𐛨", "*569"],
  ["𐛩", "*570"],
  ["𐛪", "*571"],
  ["𐛫", "*572"],
  ["𐛬", "*573"],
  ["𐛭", "*574"],
  ["𐛮", "*575"],
  ["𐛯", "*576"],
  ["𐛰", "*577"],
  ["𐛱", "*578"],
  ["𐛲", "*579"],
  ["𐛳", "*580"],
  ["𐛴", "*581"],
  ["𐛵", "*582"],
  ["𐛶", "*583"],
  ["𐛷", "*584"],
  ["𐛸", "*585"],
  ["𐛹", "*586"],
  ["𐛺", "*587"],
  ["𐛻", "*588"],
  ["𐛼", "*589"],
  ["𐙍𐘤", "*590"],
  ["𐛽", "*591"],
  ["𐛾", "*592"],
  ["𐙍𐘲", "*593"],
  ["𐛿", "*594"],
  ["𐜀", "*595"],
  ["𐜁", "*596"],
  ["𐙍𐙉", "*597"],
  ["𐜂", "*598"],
  ["𐙒", "*599"],
  ["𐜃", "*600"],
  ["𐜄", "*601"],
  ["𐜅", "*602"],
  ["𐜆", "*603"],
  ["𐜇", "*604"],
  ["𐝥𐘻", "*605"],
  ["𐜈", "*606"],
  ["𐝥𐚋", "*607"],
  ["𐜉", "*608"],
  ["𐜊", "*609"],
  ["𐜋", "*610"],
  ["𐜌", "*611"],
  ["𐜍", "*612"],
  ["𐜎", "*613"],
  ["𐜏", "*614"],
  ["𐜐", "*615"],
  ["𐜑", "*616"],
  ["𐜒", "*617"],
  ["𐜓", "*618"],
  ["𐜔", "*619"],
  ["𐜕", "*620"],
  ["𐜖", "*621"],
  ["𐜗", "*622"],
  ["𐜘", "*623"],
  ["𐜙", "*624"],
  ["𐙗𐝂𐜝", "*625"],
  ["𐜚", "*626"],
  ["𐜛", "*627"],
  ["𐜜", "*628"],
  ["𐜝", "*629"],
  ["𐜝𐙗𐝂", "*630"],
  ["𐜝𐙨𐝂", "*631"],
  ["𐙘𐙨", "*632"],
  ["𐙘𐙨", "*633"],
  ["𐜞", "*634"],
  ["𐙚𐙇𐙛", "*635"],
  ["𐙚𐙗𐝃", "*636"],
  ["𐜟", "*637"],
  ["𐜠", "*638"],
  ["𐙨𐘁𐙍", "*639"],
  ["𐜡", "*640"],
  ["𐙩𐘸𐙺", "*641"],
  ["𐜢", "*642"],
  ["𐜣", "*643"],
  ["𐜤", "*644"],
  ["𐜥", "*645"],
  ["𐜦", "*646"],
  ["𐚈𐙗", "*647"],
  ["𐜧", "*648"],
  ["𐜨", "*649"],
  ["𐚡𐘇", "*650"],
  ["𐜩", "*651"],
  ["𐜪", "*652"],
  ["𐜫", "*653"],
  ["𐜬", "*654"],
  ["𐜭", "*655"],
  ["𐜮", "*656"],
  ["𐜯", "*657"],
  ["𐜰", "*658"],
  ["𐜱", "*659"],
  ["𐜲", "*660"],
  ["𐜳", "*661"],
  ["𐜴", "*662"],
  ["𐜵", "*663"],
  ["𐜶", "*664"],
  ["𐝀", "*701"],
  ["𐝁", "*702B"],
  ["𐝂", "*703D"],
  ["𐝃", "*704E"],
  ["𐝄", "*705F"],
  ["𐝅", "*706H"],
  ["𐝆", "*707J"],
  ["𐝇", "*708K"],
  ["𐝈", "*709L"],
  ["𐝉", "*709-2L2"],
  ["𐝊", "*709-3L3"],
  ["𐝋", "*709-4L4"],
  ["𐝌", "*709-6L6"],
  ["𐝍", "*710W"],
  ["𐝎", "*711X"],
  ["𐝏", "*712Y"],
  ["𐝐", "*713Ω"],
  ["𐝑", "*714B"],
  ["𐝒", "*715BB"],
  ["𐝁𐝌", "*716BL6"],
  ["𐝓", "*717DD"],
  ["𐝂𐝂𐝂𐝂", "*718DDDD"],
  ["𐝃𐝁", "*719EB"],
  ["𐝃𐝃", "*720EE"],
  ["𐝃𐝄", "*721EF"],
  ["𐝃𐝆", "*722EJ"],
  ["𐝃𐝉", "*723EL2"],
  ["𐝃𐝋", "*724EL4"],
  ["𐝃𐝌", "*725EL6"],
  ["𐝔", "*726EYYY"],
  ["𐝄𐝇", "*727FK"],
  ["𐝄𐝈", "*728FL"],
  ["𐝅𐝇", "*729HK"],
  ["𐝆𐝀", "*730J"],
  ["𐝆𐝁", "*731JB"],
  ["𐝕", "*732JE"],
  ["𐝆𐝃𐝁", "*733JEB"],
  ["𐝆𐝃𐝉", "*734JEL2"],
  ["𐝆𐝄", "*735JF"],
  ["𐝆𐝅", "*736JH"],
  ["𐝆𐝆", "*737JJ"],
  ["𐝆𐝇", "*738JK"],
  ["𐝆𐝉", "*739JL2"],
  ["𐝇𐝉", "*740KL2"],
  ["𐝈𐝈", "*741LL"],
  ["𐝈𐝉", "*742LL2"],
  ["𐝉𐝋", "*743L2L4"],
  ["𐝠", "*800"],
  ["𐝡", "*801"],
  ["𐝢", "*802"],
  ["𐝣", "*803"],
  ["𐝤", "*804"],
  ["𐝥", "*805"],
  ["𐝦", "*806"],
  ["𐝧", "*807"],
  ["𐙇𐘍", "*808"],
  ["𐄁", "*900"],
  ["𐄀", "*901"],
  ["𐄀", "*902"],
  ["𐄂", "*903"],
  ["𐙫", "*904"],
  ["𐝆", "*905"],
  ["𐝇", "*906"],
  ["𐝬", "*809"],
  ["𐝭", "*810"],
  ["𐝮", "*811"],
  ["𐚢𐘌𐘰", "*812"],
  ["𐚯𐘲𐘫", "*813"],
  ["𐚰𐘾𐘁𐘰", "*814"],
  ["𐚢", "*815"],
  ["𐚢𐘲𐘰𐘴", "*816"],
  ["𐚢𐘂𐘳𐘿", "*817"],
  ["𐙞𐘸𐘫", "*818"],
  ["𐙝𐘀𐘫", "*819"],
  ["𐙝𐘶𐘸", "*820"],
  ["𐙝𐘭𐘶", "*821"],
  ["𐙟𐘀𐘶", "*822"],
  ["𐙟𐘘𐘾", "*823"],
  ["𐙝𐘭", "*824"],
  ["𐙞𐘭𐘶", "*825"],
  ["𐚥𐝇", "*826"],
  ["𐙄𐘤𐘙", "*827"],
  ["𐘮𐘃", "*828"],
  ["𐝯", "*829"],
  ["𐄇", "1"],
  ["𐄈", "2"],
  ["𐄈𐄊", "6"],
  ["𐄉", "3"],
  ["𐄊", "4"],
  ["𐄋", "5"],
  ["𐄌", "6"],
  ["𐄍", "7"],
  ["𐄎", "8"],
  ["𐄏", "9"],
  ["𐄐", "10"],
  ["𐄐𐄇", "11"],
  ["𐄐𐄈", "12"],
  ["𐄐𐄉", "13"],
  ["𐄐𐄊", "14"],
  ["𐄐𐄋", "15"],
  ["𐄐𐄌", "16"],
  ["𐄐𐄍", "17"],
  ["𐄐𐄎", "18"],
  ["𐄐𐄏", "19"],
  ["𐄑", "20"],
  ["𐄑𐄇", "21"],
  ["𐄑𐄈", "22"],
  ["𐄑𐄉", "23"],
  ["𐄑𐄊", "24"],
  ["𐄑𐄋", "25"],
  ["𐄑𐄌", "26"],
  ["𐄑𐄍", "27"],
  ["𐄑𐄎", "28"],
  ["𐄑𐄏", "29"],
  ["𐄑𐄓𐄊", "64"],
  ["𐄒", "30"],
  ["𐄒𐄇", "31"],
  ["𐄒𐄈", "32"],
  ["𐄒𐄉", "33"],
  ["𐄒𐄊", "34"],
  ["𐄒𐄋", "35"],
  ["𐄒𐄌", "36"],
  ["𐄒𐄍", "37"],
  ["𐄓", "40"],
  ["𐄓𐄇", "41"],
  ["𐄓𐄈", "42"],
  ["𐄓𐄉", "43"],
  ["𐄓𐄋", "45"],
  ["𐄓𐄌", "46"],
  ["𐄓𐄍", "47"],
  ["𐄓𐄎", "48"],
  ["𐄔", "50"],
  ["𐄔𐄇", "51"],
  ["𐄔𐄈", "52"],
  ["𐄔𐄉", "53"],
  ["𐄔𐄊", "54"],
  ["𐄔𐄋", "55"],
  ["𐄔𐄌", "56"],
  ["𐄔𐄍", "57"],
  ["𐄔𐄎", "58"],
  ["𐄕", "60"],
  ["𐄕𐄇", "61"],
  ["𐄕𐄊", "64"],
  ["𐄕𐄋", "65"],
  ["𐄕𐄌", "66"],
  ["𐄕𐄍", "67"],
  ["𐄖", "70"],
  ["𐄖𐄇", "71"],
  ["𐄖𐄊", "74"],
  ["𐄖𐄋", "75"],
  ["𐄖𐄎", "78"],
  ["𐄖𐄎", "78"],
  ["𐄗", "80"],
  ["𐄗𐄇", "81"],
  ["𐄗𐄊", "82"],
  ["𐄗𐄌", "84"],
  ["𐄗𐄍", "87"],
  ["𐄘", "90"],
  ["𐄘𐄉", "93"],
  ["𐄘𐄋", "95"],
  ["𐄘𐄍", "97"],
  ["𐄙", "100"],
  ["𐄙𐄈", "102"],
  ["𐄙𐄊", "104"],
  ["𐄙𐄋", "105"],
  ["𐄙𐄎", "108"],
  ["𐄙𐄏", "109"],
  ["𐄙𐄐", "110"],
  ["𐄙𐄐𐄉", "113"],
  ["𐄙𐄑", "120"],
  ["𐄙𐄑𐄉", "123"],
  ["𐄙𐄑𐄏", "129"],
  ["𐄙𐄒", "130"],
  ["𐄙𐄒𐄊", "134"],
  ["𐄙𐄓", "140"],
  ["𐄙𐄔𐄌", "156"],
  ["𐄙𐄕", "160"],
  ["𐄙𐄕𐄇", "161"],
  ["𐄙𐄕𐄋", "165"],
  ["𐄙𐄗", "180"],
  ["𐄙𐄘𐄍", "197"],
  ["𐄚", "200"],
  ["𐄚𐄇", "201"],
  ["𐄚𐄍", "207"],
  ["𐄚𐄑", "220"],
  ["𐄚𐄒", "230"],
  ["𐄚𐄒𐄉", "233"],
  ["𐄚𐄒𐄊", "234"],
  ["𐄚𐄒𐄋", "235"],
  ["𐄚𐄓", "240"],
  ["𐄚𐄓𐄋", "245"],
  ["𐄚𐄔", "250"],
  ["𐄚𐄘", "290"],
  ["𐄚𐄘𐄈", "291"],
  ["𐄛", "300"],
  ["𐄛𐄒𐄋", "335"],
  ["𐄛𐄔𐄉", "353"],
  ["𐄜", "400"],
  ["𐄜𐄑", "402"],
  ["𐄜𐄔𐄈", "451"],
  ["𐄝", "500"],
  ["𐄝𐄖", "570"],
  ["𐄞", "600"],
  ["𐄞𐄑", "620"],
  ["𐄞𐄗", "680"],
  ["𐄞𐄗𐄊", "684"],
  ["𐄟", "700"],
  ["𐄠", "800"],
  ["𐄡", "900"],
  ["𐄡𐄓𐄇", "941"],
  ["𐄡𐄖𐄌", "976"],
  ["𐄢", "1000"],
  ["𐄣", "2000"],
  ["𐄤", "3000"],
  ["𐄥", "4000"],
  ["𐄦", "5000"],
  ["𐄧", "6000"],
  ["𐄨", "7000"],
  ["𐄩", "8000"],
  ["𐄪", "9000"],
  ["𐄫", "10000"],
  ["𐄬", "20000"],
  ["𐄭", "30000"],
  ["𐄮", "40000"],
  ["𐄯", "50000"],
  ["𐄰", "60000"],
  ["𐄱", "70000"],
  ["𐄲", "80000"],
  ["𐄳", "90000"],
  ["𐝀", "6/10", ""],
  ["𐝀", "≈ ¹⁄₆", ""],
  ["𐝁", "¹⁄₃", ""],
  ["𐝂", "¹⁄₅", ""],
  ["𐝂𐝂", "double mina"],
  ["𐝃", "¹⁄₄", ""],
  ["𐝃𐝄", "³⁄₈", ""],
  ["𐝄", "¹⁄₈", ""],
  ["𐝅", "≈ ¹⁄₆", ""],
  ["𐝆", "¹⁄₂", ""],
  ["𐝆𐝃", "³⁄₄"],
  ["𐝕", "³⁄₄"],
  ["𐝆𐝄", "⅝"],
  ["𐝇", "¹⁄₁₆", ""],
  ["𐝌", "cum 𐙕", ""],
  ["𐝎", ".3"],
  ["𐝏", "≈ ¹⁄₄", ""],
  ["𐝐", "cum 𐚥 ≈ ¹⁄₂", ""],
  ["𐝆𐝉", "13/20"],
];

var ligToGlyph = new Map([
  ["DA+RO", "𐚳"],
  ["DA+RE+SE", "𐚴"],
  ["DA+*301", "𐚵"],
  ["RO+RO[", "𐚶"],
  ["TE+RO[", "𐚷"],
  ["DI+QE", "𐚸"],
  ["ME+VINA", "𐘋𐙍"],
  ["QA2+[?]+RE", "𐚹"],
  ["QA2+[?]+RE+PU", "𐚺"],
  ["QA2+[?]+PU", "𐚻"],
  ["QA2+[?]+PU+RE", "𐚼"],
  ["QI+SI", "𐚽"],
  ["CAPM+KU", "𐚾"],
  ["RE+SE", "𐚿"],
  ["I-GRA+PA", "𐘚𐛭"],
  ["I+*301", "𐛁"],
  ["SA+MU+KU", "𐛂"],
  ["TI+A", "𐛃"],
  ["TI+*412VAS", "𐛄"],
  ["E+[ ]", "𐛅"],
  ["E+KA", "𐛆"],
  ["WI+ZE[", "𐛇"],
  ["SI+SE", "𐛉"],
  ["SI+ME", "𐛊"],
  ["SI+ME-KI", "𐛋"],
  ["SI+TA2", "𐛌"],
  ["DU+[ ]", "𐛍"],
  ["TELA+KU", "𐛎"],
  ["TELA+*312", "𐛏"],
  ["PA3+QE", "𐛐"],
  ["JA+RU", "𐛑"],
  ["SU+MI", "𐛓"],
  ["RA+KA", "𐛔"],
  ["JU+*317+QE", "𐛕"],
  ["TA2+CYP", "𐘷𐙗"],
  ["KI+[ ]", "𐘸"],
  ["KI+MU", "𐛖"],
  ["]TU+RO", "𐛗"],
  ["]MI+JA", "𐛘"],
  ["MI+JA+[ ]", "𐛙"],
  ["MI+JA+RU", "𐛚"],
  ["MI+JA+I", "𐛛"],
  ["MI+JA+KA", "𐛜"],
  ["MI+*301", "𐛝"],
  ["QE+GRA+PA", "𐛟"],
  ["MA+RU", "𐛢"],
  ["MA+RU+ME", "𐙁𐘘𐘋"],
  ["MA+RU+RU", "𐙁𐘘𐘙"],
  ["KU+[ ]", "𐛤"],
  ["*86+'*188'", "𐛥"],
  ["*86+*188", "𐛦"],
  ["VIR+[?]", "𐙇"],
  ["VIR+KA", "𐛧"],
  ["VIR+*307", "𐛨"],
  ["VIR+*313A", "𐛩"],
  ["VIR+*313B", "𐛪"],
  ["VIR+*313C", "𐛫"],
  ["GRA+DA", "𐛬"],
  ["GRA+PA", "𐛭"],
  ["GRA+QIF", "𐛮"],
  ["GRA+BOSM", "𐛯"],
  ["GRA+PA3", "𐛰"],
  ["GRA+QE", "𐛱"],
  ["GRA+KU", "𐛲"],
  ["GRA+B", "𐛳"],
  ["GRA+E", "𐛴"],
  ["GRA+F", "𐛵"],
  ["GRA+H", "𐛶"],
  ["GRA+K+L", "𐛷"],
  ["GRA+L2", "𐛸"],
  ["GRA+L4+L4", "𐛹"],
  ["*OLIV+TU", "𐛺"],
  ["VIN+TE", "𐛻"],
  ["VIN+SA", "𐛼"],
  ["VIN+WA", "𐛽"],
  ["VIN+WA", "𐛾"],
  ["VIN+SU", "𐙍𐘲"],
  ["VIN+RA", "𐛿"],
  ["VIN+RA", "𐜀"],
  ["VIN+KA", "𐜁"],
  ["VINB+WI", "𐜂"],
  ["HIDE+[?]", "𐙒"],
  ["HIDE+SA+B", "𐜃"],
  ["HIDE+SA+L", "𐜄"],
  ["HIDE+B", "𐜅"],
  ["HIDE+L", "𐜆"],
  ["*188+KU", "𐜇"],
  ["*301+MI", "𐝥𐘻"],
  ["*301+*311", "𐜈"],
  ["*351+*351", "𐝥𐚋"],
  ["OLE+DI", "𐜉"],
  ["OLE+A", "𐜊"],
  ["OLE+U", "𐜋"],
  ["OLE+QIF", "𐜌"],
  ["OLE+NE", "𐜍"],
  ["OLE+E", "𐜎"],
  ["OLE+RI", "𐜏"],
  ["OLE+TA", "𐜐"],
  ["OLE+RA", "𐜑"],
  ["OLE+KI", "𐜒"],
  ["OLE+KI", "𐜓"],
  ["OLE+KI+U", "𐜔"],
  ["OLE+KI+ME", "𐜕"],
  ["OLE+TU", "𐜖"],
  ["OLE+MI", "𐜗"],
  ["OLE+QE+DI", "𐜘"],
  ["CYP+D", "𐜙"],
  ["CYP+D+*304+PA", "𐙗𐝂𐜝"],
  ["CYP+E", "𐜚"],
  ["CYP+K", "𐜛"],
  ["*304+[ ]", "𐜜"],
  ["*304+PA", "𐜝"],
  ["*304+PA+CYP+D", "𐜝𐙗𐝂"],
  ["*304+PA+*316+D", "𐜝𐙨𐝂"],
  ["*304+[ ]+CYP", "𐙘𐙨"],
  ["*304+[ ]+CYP+[ ]", "𐙘𐙨"],
  ["*306+MI", "𐜞"],
  ["*306+VIR+*307", "𐙚𐙇𐙛"],
  ["*306+CYP+E", "𐙚𐙗𐝃"],
  ["*307+*301[", "𐜟"],
  ["*307+*387", "𐜠"],
  ["*316+TO+VINA", "𐙨𐘁𐙍"],
  ["*316+KI", "𐜡"],
  ["*317+KU+*334", "𐙩𐘸𐙺"],
  ["*318+[ ]", "𐜢"],
  ["*330+DA", "𐜣"],
  ["*330+SA", "𐜤"],
  ["*337+*188", "𐜥"],
  ["*341+PI", "𐜦"],
  ["CYP+*348", "𐚈𐙗"],
  ["*401+[ ]", "𐜨"],
  ["*401+A", "𐚡𐘇"],
  ["*401+RU", "𐜩"],
  ["*401+RO", "𐜪"],
  ["*401+*304", "𐜫"],
  ["*402+A", "𐜬"],
  ["*405+Ω", "𐜭"],
  ["*406VAS+KE", "𐜮"],
  ["*414+A", "𐜯"],
  ["*412+E", "𐜰"],
  ["*413+SU", "𐜲"],
  ["*414+[ ]", "𐜳"],
  ["*414+F", "𐜴"],
  ["*416+L2", "𐜵"],
  ["*418+L2", "𐜶"],
]);

var glyphToLig = new Map();
ligToGlyph.forEach( (value, key, map) => {
    glyphToLig.set(value, key);
});

var syllableToGlyph = new Map();
var glyphToSyllable = new Map();
for (var syllableValue of syllableValues) {
  var glyph = syllableValue[0];
  var syllable = syllableValue[1];
  if (!syllableToGlyph.has(key)) {
    syllableToGlyph.set(syllable, glyph);
  }
  if (!glyphToSyllable.has(key)) {
    glyphToSyllable.set(glyph, syllable);
  }
}

