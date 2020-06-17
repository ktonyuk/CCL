// Copyright @ ColorCodedLyrics
var syl;
function hanToRom () {
syl = document.romanization.han.value + " ";
syl = syl.replace(/뀩/g, "gyuk");
syl = syl.replace(/가/g, "ga");
syl = syl.replace(/각/g, "gak");
syl = syl.replace(/간/g, "gan");
syl = syl.replace(/갇/g, "gad");
syl = syl.replace(/갈/g, "gal");
syl = syl.replace(/갉/g, "gak"); //galk
syl = syl.replace(/갊/g, "gam"); //galm
syl = syl.replace(/감/g, "gam");
syl = syl.replace(/갑/g, "gap");
syl = syl.replace(/값/g, "gap"); //gaps
syl = syl.replace(/갓/g, "gas"); //gan when followed by consonant. s when followed by ng
syl = syl.replace(/갔/g, "gass");
syl = syl.replace(/강/g, "gang");
syl = syl.replace(/갖/g, "gaj");
syl = syl.replace(/갗/g, "gach");
syl = syl.replace(/같/g, "gat");
syl = syl.replace(/갚/g, "gap");
syl = syl.replace(/갛/g, "gah");
syl = syl.replace(/개/g, "gae");
syl = syl.replace(/객/g, "gaek");
syl = syl.replace(/갠/g, "gaen");
syl = syl.replace(/갤/g, "gael");
syl = syl.replace(/갬/g, "gaem");
syl = syl.replace(/갭/g, "gaep");
syl = syl.replace(/갯/g, "gaes");
syl = syl.replace(/갰/g, "gaess");
syl = syl.replace(/갱/g, "gaeng");
syl = syl.replace(/갸/g, "gya");
syl = syl.replace(/갹/g, "gyak");
syl = syl.replace(/갼/g, "gyan");
syl = syl.replace(/걀/g, "gyal");
syl = syl.replace(/걋/g, "gyas");
syl = syl.replace(/걍/g, "gyang");
syl = syl.replace(/걔/g, "gyae");
syl = syl.replace(/걘/g, "gyaen");
syl = syl.replace(/걜/g, "gyael");
syl = syl.replace(/거/g, "geo");
syl = syl.replace(/걱/g, "geok");
syl = syl.replace(/건/g, "geon");
syl = syl.replace(/걷/g, "geot");
syl = syl.replace(/걸/g, "geol");
syl = syl.replace(/걺/g, "geolm");
syl = syl.replace(/검/g, "geom");
syl = syl.replace(/겁/g, "geop");
syl = syl.replace(/것/g, "geos");
syl = syl.replace(/겄/g, "geoss");
syl = syl.replace(/겅/g, "geong");
syl = syl.replace(/겆/g, "geoj");
syl = syl.replace(/겉/g, "geot");
syl = syl.replace(/겊/g, "geop");
syl = syl.replace(/겋/g, "geoh");
syl = syl.replace(/게/g, "ge");
syl = syl.replace(/겐/g, "gen");
syl = syl.replace(/겔/g, "gel");
syl = syl.replace(/겜/g, "gem");
syl = syl.replace(/겝/g, "gep");
syl = syl.replace(/겟/g, "ges");
syl = syl.replace(/겠/g, "gess");
syl = syl.replace(/겡/g, "geng");
syl = syl.replace(/겨/g, "gyeo");
syl = syl.replace(/격/g, "gyeok");
syl = syl.replace(/겪/g, "gyeokk");
syl = syl.replace(/견/g, "gyeon");
syl = syl.replace(/겯/g, "gyeot");
syl = syl.replace(/결/g, "gyeol");
syl = syl.replace(/겸/g, "gyeom");
syl = syl.replace(/겹/g, "gyeop");
syl = syl.replace(/겻/g, "gyeos");
syl = syl.replace(/겼/g, "gyeoss");
syl = syl.replace(/경/g, "gyeong");
syl = syl.replace(/곁/g, "gyeot");
syl = syl.replace(/계/g, "gye");
syl = syl.replace(/곈/g, "gyen");
syl = syl.replace(/곌/g, "gyel");
syl = syl.replace(/곕/g, "gyep");
syl = syl.replace(/곗/g, "gyes");
syl = syl.replace(/고/g, "go");
syl = syl.replace(/곡/g, "gok");
syl = syl.replace(/곤/g, "gon");
syl = syl.replace(/곧/g, "god");
syl = syl.replace(/골/g, "gol");
syl = syl.replace(/곪/g, "golm");
syl = syl.replace(/곬/g, "gols");
syl = syl.replace(/곯/g, "golh");
syl = syl.replace(/곰/g, "gom");
syl = syl.replace(/곱/g, "gop");
syl = syl.replace(/곳/g, "gos");
syl = syl.replace(/공/g, "gong");
syl = syl.replace(/곶/g, "goj");
syl = syl.replace(/과/g, "gwa");
syl = syl.replace(/곽/g, "gwak");
syl = syl.replace(/관/g, "gwan");
syl = syl.replace(/괄/g, "gwal");
syl = syl.replace(/괆/g, "gwalm");
syl = syl.replace(/괌/g, "gwam");
syl = syl.replace(/괍/g, "gwap");
syl = syl.replace(/괏/g, "gwas");
syl = syl.replace(/광/g, "gwang");
syl = syl.replace(/괘/g, "gwae");
syl = syl.replace(/괜/g, "gwaen");
syl = syl.replace(/괠/g, "gwael");
syl = syl.replace(/괩/g, "gwaep");
syl = syl.replace(/괬/g, "gwaess");
syl = syl.replace(/괭/g, "gwaeng");
syl = syl.replace(/괴/g, "gwe");
syl = syl.replace(/괵/g, "gwek");
syl = syl.replace(/괸/g, "gwen");
syl = syl.replace(/괼/g, "gwel");
syl = syl.replace(/굄/g, "gwem");
syl = syl.replace(/굅/g, "gwep");
syl = syl.replace(/굇/g, "gwes");
syl = syl.replace(/굉/g, "gweng");
syl = syl.replace(/교/g, "gyo");
syl = syl.replace(/굔/g, "gyon");
syl = syl.replace(/굘/g, "gyol");
syl = syl.replace(/굡/g, "gyop");
syl = syl.replace(/굣/g, "gyos");
syl = syl.replace(/구/g, "gu");
syl = syl.replace(/국/g, "guk");
syl = syl.replace(/군/g, "gun");
syl = syl.replace(/굳/g, "gud");
syl = syl.replace(/굴/g, "gul");
syl = syl.replace(/굵/g, "gulk");
syl = syl.replace(/굶/g, "gulm");
syl = syl.replace(/굻/g, "gulh");
syl = syl.replace(/굼/g, "gum");
syl = syl.replace(/굽/g, "gup");
syl = syl.replace(/굿/g, "gus");
syl = syl.replace(/궁/g, "gung");
syl = syl.replace(/궂/g, "guj");
syl = syl.replace(/궈/g, "gweo");
syl = syl.replace(/궉/g, "gweok");
syl = syl.replace(/권/g, "gwen");
syl = syl.replace(/궐/g, "gwel");
syl = syl.replace(/궜/g, "gweoss");
syl = syl.replace(/궝/g, "gweong");
syl = syl.replace(/궤/g, "gwe");
syl = syl.replace(/궷/g, "gwes");
syl = syl.replace(/귀/g, "gwi");
syl = syl.replace(/귁/g, "gwik");
syl = syl.replace(/귄/g, "gwin");
syl = syl.replace(/귈/g, "gwil");
syl = syl.replace(/귐/g, "gwim");
syl = syl.replace(/귑/g, "gwip");
syl = syl.replace(/귓/g, "gwis");
syl = syl.replace(/규/g, "gyu");
syl = syl.replace(/균/g, "gyun");
syl = syl.replace(/귤/g, "gyul");
syl = syl.replace(/그/g, "geu");
syl = syl.replace(/극/g, "geuk");
syl = syl.replace(/근/g, "geun");
syl = syl.replace(/귿/g, "geud");
syl = syl.replace(/글/g, "geul");
syl = syl.replace(/긁/g, "geulk");
syl = syl.replace(/금/g, "geum");
syl = syl.replace(/급/g, "geup");
syl = syl.replace(/긋/g, "geus");
syl = syl.replace(/긍/g, "geung");
syl = syl.replace(/긔/g, "gi");
syl = syl.replace(/기/g, "gi");
syl = syl.replace(/긱/g, "gik");
syl = syl.replace(/긴/g, "gin");
syl = syl.replace(/긷/g, "gid");
syl = syl.replace(/길/g, "gil");
syl = syl.replace(/긺/g, "gilm");
syl = syl.replace(/김/g, "gim");
syl = syl.replace(/깁/g, "gip");
syl = syl.replace(/깃/g, "gis");
syl = syl.replace(/깅/g, "ging");
syl = syl.replace(/깆/g, "gij");
syl = syl.replace(/깊/g, "gip");
syl = syl.replace(/까/g, "kka");
syl = syl.replace(/깍/g, "kkak");
syl = syl.replace(/깎/g, "kkakk");
syl = syl.replace(/깐/g, "kkan");
syl = syl.replace(/깔/g, "kkal");
syl = syl.replace(/깖/g, "kkalm");
syl = syl.replace(/깜/g, "kkam");
syl = syl.replace(/깝/g, "kkap");
syl = syl.replace(/깟/g, "kkas");
syl = syl.replace(/깠/g, "kkass");
syl = syl.replace(/깡/g, "kkang");
syl = syl.replace(/깥/g, "kkat");
syl = syl.replace(/깨/g, "kkae");
syl = syl.replace(/깩/g, "kkaek");
syl = syl.replace(/깬/g, "kkaen");
syl = syl.replace(/깰/g, "kkael");
syl = syl.replace(/깸/g, "kkaem");
syl = syl.replace(/깹/g, "kkaep");
syl = syl.replace(/깻/g, "kkaes");
syl = syl.replace(/깼/g, "kkaess");
syl = syl.replace(/깽/g, "kkaeng");
syl = syl.replace(/꺄/g, "kkya");
syl = syl.replace(/꺅/g, "kkyak");
syl = syl.replace(/꺌/g, "kkyal");
syl = syl.replace(/꺼/g, "kkeo");
syl = syl.replace(/꺽/g, "kkeok");
syl = syl.replace(/꺾/g, "kkeokk");
syl = syl.replace(/껀/g, "kkeon");
syl = syl.replace(/껄/g, "kkeol");
syl = syl.replace(/껌/g, "kkeom");
syl = syl.replace(/껍/g, "kkeop");
syl = syl.replace(/껏/g, "kkeos");
syl = syl.replace(/껐/g, "kkeoss");
syl = syl.replace(/껑/g, "kkeong");
syl = syl.replace(/께/g, "kke");
syl = syl.replace(/껙/g, "kkek");
syl = syl.replace(/껜/g, "kken");
syl = syl.replace(/껨/g, "kkem");
syl = syl.replace(/껫/g, "kkes");
syl = syl.replace(/껭/g, "kkeng");
syl = syl.replace(/껴/g, "kkyeo");
syl = syl.replace(/껸/g, "kkyeon");
syl = syl.replace(/껼/g, "kkyeol");
syl = syl.replace(/꼇/g, "kkyeos");
syl = syl.replace(/꼈/g, "kkyeoss");
syl = syl.replace(/꼍/g, "kkyeot");
syl = syl.replace(/꼐/g, "kkye");
syl = syl.replace(/꼬/g, "kko");
syl = syl.replace(/꼭/g, "kkok");
syl = syl.replace(/꼰/g, "kkon");
syl = syl.replace(/꼲/g, "kkonh");
syl = syl.replace(/꼴/g, "kkol");
syl = syl.replace(/꼼/g, "kkom");
syl = syl.replace(/꼽/g, "kkop");
syl = syl.replace(/꼿/g, "kkos");
syl = syl.replace(/꽁/g, "kkong");
syl = syl.replace(/꽂/g, "kkoj");
syl = syl.replace(/꽃/g, "kkoch");
syl = syl.replace(/꽈/g, "kkwa");
syl = syl.replace(/꽉/g, "kkwak");
syl = syl.replace(/꽐/g, "kkwal");
syl = syl.replace(/꽜/g, "kkwass");
syl = syl.replace(/꽝/g, "kkwang");
syl = syl.replace(/꽤/g, "kkwae");
syl = syl.replace(/꽥/g, "kkwaek");
syl = syl.replace(/꽹/g, "kkwaeng");
syl = syl.replace(/꾀/g, "kkwe");
syl = syl.replace(/꾄/g, "kkwen");
syl = syl.replace(/꾈/g, "kkwel");
syl = syl.replace(/꾐/g, "kkwem");
syl = syl.replace(/꾑/g, "kkwep");
syl = syl.replace(/꾕/g, "kkweng");
syl = syl.replace(/꾜/g, "kkyo");
syl = syl.replace(/꾸/g, "kku");
syl = syl.replace(/꾹/g, "kkuk");
syl = syl.replace(/꾼/g, "kkun");
syl = syl.replace(/꿀/g, "kkul");
syl = syl.replace(/꿇/g, "kkulh");
syl = syl.replace(/꿈/g, "kkum");
syl = syl.replace(/꿉/g, "kkup");
syl = syl.replace(/꿋/g, "kkus");
syl = syl.replace(/꿍/g, "kkung");
syl = syl.replace(/꿎/g, "kkuj");
syl = syl.replace(/꿔/g, "kkweo");
syl = syl.replace(/꿜/g, "kkweol");
syl = syl.replace(/꿨/g, "kkweoss");
syl = syl.replace(/꿩/g, "kkweong");
syl = syl.replace(/꿰/g, "kkwe");
syl = syl.replace(/꿱/g, "kkwek");
syl = syl.replace(/꿴/g, "kkwen");
syl = syl.replace(/꿸/g, "kkwel");
syl = syl.replace(/뀀/g, "kkwem");
syl = syl.replace(/뀁/g, "kkwep");
syl = syl.replace(/뀄/g, "kkwess");
syl = syl.replace(/뀌/g, "kkwi");
syl = syl.replace(/뀐/g, "kkwin");
syl = syl.replace(/뀔/g, "kkwil");
syl = syl.replace(/뀜/g, "kkwim");
syl = syl.replace(/뀝/g, "kkwip");
syl = syl.replace(/뀨/g, "kkyu");
syl = syl.replace(/끄/g, "kkeu");
syl = syl.replace(/끅/g, "kkeuk");
syl = syl.replace(/끈/g, "kkeun");
syl = syl.replace(/끊/g, "kkeunh");
syl = syl.replace(/끌/g, "kkeul");
syl = syl.replace(/끎/g, "kkeulm");
syl = syl.replace(/끓/g, "kkeulh");
syl = syl.replace(/끔/g, "kkeum");
syl = syl.replace(/끕/g, "kkeup");
syl = syl.replace(/끗/g, "kkeus");
syl = syl.replace(/끙/g, "kkeung");
syl = syl.replace(/끝/g, "kkeut");
syl = syl.replace(/끼/g, "kki");
syl = syl.replace(/끽/g, "kkik");
syl = syl.replace(/낀/g, "kkin");
syl = syl.replace(/낄/g, "kkil");
syl = syl.replace(/낌/g, "kkim");
syl = syl.replace(/낍/g, "kkip");
syl = syl.replace(/낏/g, "kkis");
syl = syl.replace(/낑/g, "kking");
syl = syl.replace(/나/g, "na");
syl = syl.replace(/낙/g, "nak");
syl = syl.replace(/낚/g, "nakk");
syl = syl.replace(/난/g, "nan");
syl = syl.replace(/낟/g, "nad");
syl = syl.replace(/날/g, "nal");
syl = syl.replace(/낡/g, "nalk");
syl = syl.replace(/낢/g, "nalm");
syl = syl.replace(/남/g, "nam");
syl = syl.replace(/납/g, "nap");
syl = syl.replace(/낫/g, "nas");
syl = syl.replace(/났/g, "nass");
syl = syl.replace(/낭/g, "nang");
syl = syl.replace(/낮/g, "naj");
syl = syl.replace(/낯/g, "nach");
syl = syl.replace(/낱/g, "nat");
syl = syl.replace(/낳/g, "nah");
syl = syl.replace(/내/g, "nae");
syl = syl.replace(/낵/g, "naek");
syl = syl.replace(/낸/g, "naen");
syl = syl.replace(/낼/g, "nael");
syl = syl.replace(/냄/g, "naem");
syl = syl.replace(/냅/g, "naep");
syl = syl.replace(/냇/g, "naes");
syl = syl.replace(/냈/g, "naess");
syl = syl.replace(/냉/g, "naeng");
syl = syl.replace(/냐/g, "nya");
syl = syl.replace(/냑/g, "nyak");
syl = syl.replace(/냔/g, "nyan");
syl = syl.replace(/냘/g, "nyal");
syl = syl.replace(/냠/g, "nyam");
syl = syl.replace(/냥/g, "nyang");
syl = syl.replace(/너/g, "neo");
syl = syl.replace(/넉/g, "neok");
syl = syl.replace(/넋/g, "neoks");
syl = syl.replace(/넌/g, "neon");
syl = syl.replace(/널/g, "neol");
syl = syl.replace(/넒/g, "neolm");
syl = syl.replace(/넓/g, "neolp");
syl = syl.replace(/넘/g, "neom");
syl = syl.replace(/넙/g, "neop");
syl = syl.replace(/넛/g, "neos");
syl = syl.replace(/넜/g, "neoss");
syl = syl.replace(/넝/g, "neong");
syl = syl.replace(/넣/g, "neoh");
syl = syl.replace(/네/g, "ne");
syl = syl.replace(/넥/g, "nek");
syl = syl.replace(/넨/g, "nen");
syl = syl.replace(/넬/g, "nel");
syl = syl.replace(/넴/g, "nem");
syl = syl.replace(/넵/g, "nep");
syl = syl.replace(/넷/g, "nes");
syl = syl.replace(/넸/g, "ness");
syl = syl.replace(/넹/g, "neng");
syl = syl.replace(/녀/g, "nyeo");
syl = syl.replace(/녁/g, "nyeok");
syl = syl.replace(/년/g, "nyeon");
syl = syl.replace(/녈/g, "nyeol");
syl = syl.replace(/념/g, "nyeom");
syl = syl.replace(/녑/g, "nyeop");
syl = syl.replace(/녔/g, "nyeoss");
syl = syl.replace(/녕/g, "nyeong");
syl = syl.replace(/녘/g, "nyeok");
syl = syl.replace(/녜/g, "nye");
syl = syl.replace(/녠/g, "nyen");
syl = syl.replace(/노/g, "no");
syl = syl.replace(/녹/g, "nok");
syl = syl.replace(/논/g, "non");
syl = syl.replace(/놀/g, "nol");
syl = syl.replace(/놂/g, "nolm");
syl = syl.replace(/놈/g, "nom");
syl = syl.replace(/놉/g, "nop");
syl = syl.replace(/놋/g, "nos");
syl = syl.replace(/농/g, "nong");
syl = syl.replace(/높/g, "nop");
syl = syl.replace(/놓/g, "noh");
syl = syl.replace(/놔/g, "nwa");
syl = syl.replace(/놘/g, "nwan");
syl = syl.replace(/놜/g, "nwal");
syl = syl.replace(/놨/g, "nwass");
syl = syl.replace(/뇌/g, "nwe");
syl = syl.replace(/뇐/g, "nwen");
syl = syl.replace(/뇔/g, "nwel");
syl = syl.replace(/뇜/g, "nwem");
syl = syl.replace(/뇝/g, "nwep");
syl = syl.replace(/뇟/g, "nwes");
syl = syl.replace(/뇨/g, "nyo");
syl = syl.replace(/뇩/g, "nyok");
syl = syl.replace(/뇬/g, "nyon");
syl = syl.replace(/뇸/g, "nyom");
syl = syl.replace(/뇰/g, "nyol");
syl = syl.replace(/뇹/g, "nyop");
syl = syl.replace(/뇻/g, "nyos");
syl = syl.replace(/뇽/g, "nyong");
syl = syl.replace(/누/g, "nu");
syl = syl.replace(/눅/g, "nuk");
syl = syl.replace(/눈/g, "nun");
syl = syl.replace(/눋/g, "nud");
syl = syl.replace(/눌/g, "nul");
syl = syl.replace(/눔/g, "num");
syl = syl.replace(/눕/g, "nup");
syl = syl.replace(/눗/g, "nus");
syl = syl.replace(/눙/g, "nung");
syl = syl.replace(/눠/g, "nweo");
syl = syl.replace(/눴/g, "nweoss");
syl = syl.replace(/눼/g, "nwe");
syl = syl.replace(/뉘/g, "nwi");
syl = syl.replace(/뉜/g, "nwin");
syl = syl.replace(/뉠/g, "nwil");
syl = syl.replace(/뉨/g, "nwim");
syl = syl.replace(/뉩/g, "nwip");
syl = syl.replace(/뉴/g, "nyu");
syl = syl.replace(/뉵/g, "nyuk");
syl = syl.replace(/뉼/g, "nyul");
syl = syl.replace(/늄/g, "nyum");
syl = syl.replace(/늅/g, "nyup");
syl = syl.replace(/늉/g, "nyung");
syl = syl.replace(/느/g, "neu");
syl = syl.replace(/늑/g, "neuk");
syl = syl.replace(/는/g, "neun");
syl = syl.replace(/늘/g, "neul");
syl = syl.replace(/늙/g, "neulk");
syl = syl.replace(/늚/g, "neulm");
syl = syl.replace(/늠/g, "neum");
syl = syl.replace(/늡/g, "neup");
syl = syl.replace(/늣/g, "neus");
syl = syl.replace(/능/g, "neung");
syl = syl.replace(/늦/g, "neuj");
syl = syl.replace(/늪/g, "neup");
syl = syl.replace(/늬/g, "ni");
syl = syl.replace(/늰/g, "nuin");
syl = syl.replace(/늴/g, "nuil");
syl = syl.replace(/니/g, "ni");
syl = syl.replace(/닉/g, "nik");
syl = syl.replace(/닌/g, "nin");
syl = syl.replace(/닐/g, "nil");
syl = syl.replace(/닒/g, "nilm");
syl = syl.replace(/님/g, "nim");
syl = syl.replace(/닙/g, "nip");
syl = syl.replace(/닛/g, "nis");
syl = syl.replace(/닝/g, "ning");
syl = syl.replace(/닢/g, "nip");
syl = syl.replace(/다/g, "da");
syl = syl.replace(/닥/g, "dak");
syl = syl.replace(/닦/g, "dakk");
syl = syl.replace(/단/g, "dan");
syl = syl.replace(/닫/g, "dad");
syl = syl.replace(/달/g, "dal");
syl = syl.replace(/닭/g, "dalk");
syl = syl.replace(/닮/g, "dalm");
syl = syl.replace(/닯/g, "dalp");
syl = syl.replace(/닳/g, "dalh");
syl = syl.replace(/담/g, "dam");
syl = syl.replace(/답/g, "dap");
syl = syl.replace(/닷/g, "das");
syl = syl.replace(/닸/g, "dass");
syl = syl.replace(/당/g, "dang");
syl = syl.replace(/닺/g, "daj");
syl = syl.replace(/닻/g, "dach");
syl = syl.replace(/닿/g, "dah");
syl = syl.replace(/대/g, "dae");
syl = syl.replace(/댁/g, "daek");
syl = syl.replace(/댄/g, "daen");
syl = syl.replace(/댈/g, "dael");
syl = syl.replace(/댐/g, "daem");
syl = syl.replace(/댑/g, "daep");
syl = syl.replace(/댓/g, "daes");
syl = syl.replace(/댔/g, "daess");
syl = syl.replace(/댕/g, "daeng");
syl = syl.replace(/댜/g, "dya");
syl = syl.replace(/더/g, "deo");
syl = syl.replace(/덕/g, "deok");
syl = syl.replace(/덖/g, "deokk");
syl = syl.replace(/던/g, "deon");
syl = syl.replace(/덛/g, "deod");
syl = syl.replace(/덜/g, "deol");
syl = syl.replace(/덞/g, "deolm");
syl = syl.replace(/덟/g, "deolp");
syl = syl.replace(/덤/g, "deom");
syl = syl.replace(/덥/g, "deop");
syl = syl.replace(/덧/g, "deos");
syl = syl.replace(/덩/g, "deong");
syl = syl.replace(/덫/g, "deoch");
syl = syl.replace(/덮/g, "deop");
syl = syl.replace(/데/g, "de");
syl = syl.replace(/덱/g, "dek");
syl = syl.replace(/덴/g, "den");
syl = syl.replace(/델/g, "del");
syl = syl.replace(/뎀/g, "dem");
syl = syl.replace(/뎁/g, "dep");
syl = syl.replace(/뎃/g, "des");
syl = syl.replace(/뎄/g, "dess");
syl = syl.replace(/뎅/g, "deng");
syl = syl.replace(/뎌/g, "dyeo");
syl = syl.replace(/뎐/g, "dyeon");
syl = syl.replace(/뎔/g, "dyeol");
syl = syl.replace(/뎠/g, "dyeoss");
syl = syl.replace(/뎡/g, "dyeong");
syl = syl.replace(/뎨/g, "dye");
syl = syl.replace(/뎬/g, "dyen");
syl = syl.replace(/도/g, "do");
syl = syl.replace(/독/g, "dok");
syl = syl.replace(/돈/g, "don");
syl = syl.replace(/돋/g, "dod");
syl = syl.replace(/돌/g, "dol");
syl = syl.replace(/돎/g, "dolm");
syl = syl.replace(/돐/g, "dols");
syl = syl.replace(/돔/g, "dom");
syl = syl.replace(/돕/g, "dop");
syl = syl.replace(/돗/g, "dos");
syl = syl.replace(/동/g, "dong");
syl = syl.replace(/돛/g, "doch");
syl = syl.replace(/돝/g, "dot");
syl = syl.replace(/돠/g, "dwa");
syl = syl.replace(/돤/g, "dwan");
syl = syl.replace(/돨/g, "dwal");
syl = syl.replace(/돼/g, "dwae");
syl = syl.replace(/됐/g, "dwaet");
syl = syl.replace(/되/g, "dwe");
syl = syl.replace(/된/g, "dwen");
syl = syl.replace(/될/g, "dwel");
syl = syl.replace(/됨/g, "dwem");
syl = syl.replace(/됩/g, "dwep");
syl = syl.replace(/됫/g, "dwes");
syl = syl.replace(/됴/g, "dyo");
syl = syl.replace(/두/g, "du");
syl = syl.replace(/둑/g, "duk");
syl = syl.replace(/둔/g, "dun");
syl = syl.replace(/둘/g, "dul");
syl = syl.replace(/둠/g, "dum");
syl = syl.replace(/둡/g, "dup");
syl = syl.replace(/둣/g, "dut");
syl = syl.replace(/둥/g, "dung");
syl = syl.replace(/둬/g, "dweo");
syl = syl.replace(/뒀/g, "dweot");
syl = syl.replace(/뒈/g, "dwe");
syl = syl.replace(/뒝/g, "dweng");
syl = syl.replace(/뒤/g, "dwi");
syl = syl.replace(/뒨/g, "dwin");
syl = syl.replace(/뒬/g, "dwil");
syl = syl.replace(/뒵/g, "dwip");
syl = syl.replace(/뒷/g, "dwit");
syl = syl.replace(/뒹/g, "dwing");
syl = syl.replace(/듀/g, "dyu");
syl = syl.replace(/듄/g, "dyun");
syl = syl.replace(/듈/g, "dyul");
syl = syl.replace(/듐/g, "dyum");
syl = syl.replace(/듕/g, "dyung");
syl = syl.replace(/드/g, "deu");
syl = syl.replace(/득/g, "deuk");
syl = syl.replace(/든/g, "deun");
syl = syl.replace(/듣/g, "deud");
syl = syl.replace(/들/g, "deul");
syl = syl.replace(/듦/g, "deulm");
syl = syl.replace(/듬/g, "deum");
syl = syl.replace(/듭/g, "deup");
syl = syl.replace(/듯/g, "deut");
syl = syl.replace(/등/g, "deung");
syl = syl.replace(/듸/g, "di");
syl = syl.replace(/디/g, "di");
syl = syl.replace(/딕/g, "dik");
syl = syl.replace(/딘/g, "din");
syl = syl.replace(/딛/g, "did");
syl = syl.replace(/딜/g, "dil");
syl = syl.replace(/딤/g, "dim");
syl = syl.replace(/딥/g, "dip");
syl = syl.replace(/딧/g, "dit");
syl = syl.replace(/딨/g, "diss");
syl = syl.replace(/딩/g, "ding");
syl = syl.replace(/딪/g, "dij");
syl = syl.replace(/따/g, "tta");
syl = syl.replace(/딱/g, "ttak");
syl = syl.replace(/딴/g, "ttan");
syl = syl.replace(/딸/g, "ttal");
syl = syl.replace(/땀/g, "ttam");
syl = syl.replace(/땁/g, "ttap");
syl = syl.replace(/땃/g, "ttas");
syl = syl.replace(/땄/g, "ttass");
syl = syl.replace(/땅/g, "ttang");
syl = syl.replace(/땋/g, "ttah");
syl = syl.replace(/때/g, "ttae");
syl = syl.replace(/땍/g, "ttaek");
syl = syl.replace(/땐/g, "ttaen");
syl = syl.replace(/땔/g, "ttael");
syl = syl.replace(/땜/g, "ttaem");
syl = syl.replace(/땝/g, "ttaep");
syl = syl.replace(/땟/g, "ttaet");
syl = syl.replace(/땠/g, "ttaess");
syl = syl.replace(/땡/g, "ttaeng");
syl = syl.replace(/떠/g, "tteo");
syl = syl.replace(/떡/g, "tteok");
syl = syl.replace(/떤/g, "tteon");
syl = syl.replace(/떨/g, "tteol");
syl = syl.replace(/떪/g, "tteolm");
syl = syl.replace(/떫/g, "tteolp");
syl = syl.replace(/떰/g, "tteom");
syl = syl.replace(/떱/g, "tteop");
syl = syl.replace(/떳/g, "tteos");
syl = syl.replace(/떴/g, "tteoss");
syl = syl.replace(/떵/g, "tteong");
syl = syl.replace(/떻/g, "tteoh");
syl = syl.replace(/떼/g, "tte");
syl = syl.replace(/떽/g, "ttek");
syl = syl.replace(/뗀/g, "tten");
syl = syl.replace(/뗄/g, "ttel");
syl = syl.replace(/뗌/g, "ttem");
syl = syl.replace(/뗍/g, "ttep");
syl = syl.replace(/뗏/g, "ttet");
syl = syl.replace(/뗐/g, "ttess");
syl = syl.replace(/뗑/g, "tteng");
syl = syl.replace(/뗘/g, "ttyeo");
syl = syl.replace(/뗬/g, "ttyeoss");
syl = syl.replace(/또/g, "tto");
syl = syl.replace(/똑/g, "ttok");
syl = syl.replace(/똔/g, "tton");
syl = syl.replace(/똘/g, "ttol");
syl = syl.replace(/똥/g, "ttong");
syl = syl.replace(/똬/g, "ttwa");
syl = syl.replace(/똴/g, "ttwal");
syl = syl.replace(/뙈/g, "ttwae");
syl = syl.replace(/뙤/g, "ttwe");
syl = syl.replace(/뙨/g, "ttwen");
syl = syl.replace(/뚜/g, "ttu");
syl = syl.replace(/뚝/g, "ttuk");
syl = syl.replace(/뚠/g, "ttun");
syl = syl.replace(/뚤/g, "ttul");
syl = syl.replace(/뚫/g, "ttulh");
syl = syl.replace(/뚬/g, "ttum");
syl = syl.replace(/뚱/g, "ttung");
syl = syl.replace(/뛔/g, "ttwe");
syl = syl.replace(/뛰/g, "ttwi");
syl = syl.replace(/뛴/g, "ttwin");
syl = syl.replace(/뛸/g, "ttwil");
syl = syl.replace(/뜀/g, "ttwim");
syl = syl.replace(/뜁/g, "ttwip");
syl = syl.replace(/뜅/g, "ttwing");
syl = syl.replace(/뜨/g, "tteu");
syl = syl.replace(/뜩/g, "tteuk");
syl = syl.replace(/뜬/g, "tteun");
syl = syl.replace(/뜯/g, "tteud");
syl = syl.replace(/뜰/g, "tteul");
syl = syl.replace(/뜸/g, "tteum");
syl = syl.replace(/뜹/g, "tteup");
syl = syl.replace(/뜻/g, "tteus");
syl = syl.replace(/띄/g, "tti");
syl = syl.replace(/띈/g, "ttuin");
syl = syl.replace(/띌/g, "ttuil");
syl = syl.replace(/띔/g, "ttuim");
syl = syl.replace(/띕/g, "ttuip");
syl = syl.replace(/띠/g, "tti");
syl = syl.replace(/띤/g, "ttin");
syl = syl.replace(/띨/g, "ttil");
syl = syl.replace(/띰/g, "ttim");
syl = syl.replace(/띱/g, "ttip");
syl = syl.replace(/띳/g, "ttis");
syl = syl.replace(/띵/g, "tting");
syl = syl.replace(/라/g, "ra");
syl = syl.replace(/락/g, "rak");
syl = syl.replace(/란/g, "ran");
syl = syl.replace(/랄/g, "ral");
syl = syl.replace(/람/g, "ram");
syl = syl.replace(/랍/g, "rap");
syl = syl.replace(/랏/g, "ras");
syl = syl.replace(/랐/g, "rass");
syl = syl.replace(/랑/g, "rang");
syl = syl.replace(/랒/g, "raj");
syl = syl.replace(/랖/g, "rap");
syl = syl.replace(/랗/g, "rah");
syl = syl.replace(/래/g, "rae");
syl = syl.replace(/랙/g, "raek");
syl = syl.replace(/랜/g, "raen");
syl = syl.replace(/랠/g, "rael");
syl = syl.replace(/램/g, "raem");
syl = syl.replace(/랩/g, "raep");
syl = syl.replace(/랫/g, "raes");
syl = syl.replace(/랬/g, "raess");
syl = syl.replace(/랭/g, "raeng");
syl = syl.replace(/랴/g, "rya");
syl = syl.replace(/략/g, "ryak");
syl = syl.replace(/랸/g, "ryan");
syl = syl.replace(/럇/g, "ryas");
syl = syl.replace(/량/g, "ryang");
syl = syl.replace(/러/g, "reo");
syl = syl.replace(/럭/g, "reok");
syl = syl.replace(/런/g, "reon");
syl = syl.replace(/럴/g, "reol");
syl = syl.replace(/럼/g, "reom");
syl = syl.replace(/럽/g, "reop");
syl = syl.replace(/럿/g, "reos");
syl = syl.replace(/렀/g, "reoss");
syl = syl.replace(/렁/g, "reong");
syl = syl.replace(/렇/g, "reoh");
syl = syl.replace(/레/g, "re");
syl = syl.replace(/렉/g, "rek");
syl = syl.replace(/렌/g, "ren");
syl = syl.replace(/렐/g, "rel");
syl = syl.replace(/렘/g, "rem");
syl = syl.replace(/렙/g, "rep");
syl = syl.replace(/렛/g, "res");
syl = syl.replace(/렜/g, "ret");
syl = syl.replace(/렝/g, "reng");
syl = syl.replace(/려/g, "ryeo");
syl = syl.replace(/력/g, "ryeok");
syl = syl.replace(/련/g, "ryeon");
syl = syl.replace(/렬/g, "ryeol");
syl = syl.replace(/렴/g, "ryeom");
syl = syl.replace(/렵/g, "ryeop");
syl = syl.replace(/렷/g, "ryeos");
syl = syl.replace(/렸/g, "ryeoss");
syl = syl.replace(/령/g, "ryeong");
syl = syl.replace(/례/g, "rye");
syl = syl.replace(/롄/g, "ryen");
syl = syl.replace(/롑/g, "ryep");
syl = syl.replace(/롓/g, "ryes");
syl = syl.replace(/로/g, "ro");
syl = syl.replace(/록/g, "rok");
syl = syl.replace(/론/g, "ron");
syl = syl.replace(/롤/g, "rol");
syl = syl.replace(/롬/g, "rom");
syl = syl.replace(/롭/g, "rop");
syl = syl.replace(/롯/g, "ros");
syl = syl.replace(/롱/g, "rong");
syl = syl.replace(/롸/g, "rwa");
syl = syl.replace(/롼/g, "rwan");
syl = syl.replace(/뢍/g, "rwang");
syl = syl.replace(/뢨/g, "rwaess");
syl = syl.replace(/뢰/g, "rwe");
syl = syl.replace(/뢴/g, "rwen");
syl = syl.replace(/뢸/g, "rwel");
syl = syl.replace(/룀/g, "rwem");
syl = syl.replace(/룁/g, "rwep");
syl = syl.replace(/룃/g, "rwes");
syl = syl.replace(/룅/g, "rweng");
syl = syl.replace(/료/g, "ryo");
syl = syl.replace(/룐/g, "ryon");
syl = syl.replace(/룔/g, "ryol");
syl = syl.replace(/룝/g, "ryop");
syl = syl.replace(/룟/g, "ryos");
syl = syl.replace(/룡/g, "ryong");
syl = syl.replace(/루/g, "ru");
syl = syl.replace(/룩/g, "ruk");
syl = syl.replace(/룬/g, "run");
syl = syl.replace(/룰/g, "rul");
syl = syl.replace(/룸/g, "rum");
syl = syl.replace(/룹/g, "rup");
syl = syl.replace(/룻/g, "rus");
syl = syl.replace(/룽/g, "rung");
syl = syl.replace(/뤄/g, "rweo");
syl = syl.replace(/뤘/g, "rweoss");
syl = syl.replace(/뤠/g, "rwe");
syl = syl.replace(/뤼/g, "rwi");
syl = syl.replace(/뤽/g, "rwik");
syl = syl.replace(/륀/g, "rwin");
syl = syl.replace(/륄/g, "rwil");
syl = syl.replace(/륌/g, "rwim");
syl = syl.replace(/륏/g, "rwis");
syl = syl.replace(/륑/g, "rwing");
syl = syl.replace(/류/g, "ryu");
syl = syl.replace(/륙/g, "ryuk");
syl = syl.replace(/륜/g, "ryun");
syl = syl.replace(/률/g, "ryul");
syl = syl.replace(/륨/g, "ryum");
syl = syl.replace(/륩/g, "ryup");
syl = syl.replace(/륫/g, "ryus");
syl = syl.replace(/륭/g, "ryung");
syl = syl.replace(/르/g, "reu");
syl = syl.replace(/륵/g, "reuk");
syl = syl.replace(/른/g, "reun");
syl = syl.replace(/를/g, "reul");
syl = syl.replace(/름/g, "reum");
syl = syl.replace(/릅/g, "reup");
syl = syl.replace(/릇/g, "reus");
syl = syl.replace(/릉/g, "reung");
syl = syl.replace(/릊/g, "reuj");
syl = syl.replace(/릍/g, "reut");
syl = syl.replace(/릎/g, "reup");
syl = syl.replace(/리/g, "ri");
syl = syl.replace(/릭/g, "rik");
syl = syl.replace(/린/g, "rin");
syl = syl.replace(/릴/g, "ril");
syl = syl.replace(/림/g, "rim");
syl = syl.replace(/립/g, "rip");
syl = syl.replace(/릿/g, "ris");
syl = syl.replace(/링/g, "ring");
syl = syl.replace(/마/g, "ma");
syl = syl.replace(/막/g, "mak");
syl = syl.replace(/만/g, "man");
syl = syl.replace(/많/g, "manh");
syl = syl.replace(/맏/g, "mad");
syl = syl.replace(/말/g, "mal");
syl = syl.replace(/맑/g, "malk");
syl = syl.replace(/맒/g, "malm");
syl = syl.replace(/맘/g, "mam");
syl = syl.replace(/맙/g, "map");
syl = syl.replace(/맛/g, "mas");
syl = syl.replace(/망/g, "mang");
syl = syl.replace(/맞/g, "maj");
syl = syl.replace(/맡/g, "mat");
syl = syl.replace(/맣/g, "mah");
syl = syl.replace(/매/g, "mae");
syl = syl.replace(/맥/g, "maek");
syl = syl.replace(/맨/g, "maen");
syl = syl.replace(/맬/g, "mael");
syl = syl.replace(/맴/g, "maem");
syl = syl.replace(/맵/g, "maep");
syl = syl.replace(/맷/g, "maes");
syl = syl.replace(/맸/g, "maess");
syl = syl.replace(/맹/g, "maeng");
syl = syl.replace(/맺/g, "maej");
syl = syl.replace(/먀/g, "mya");
syl = syl.replace(/먁/g, "myak");
syl = syl.replace(/먈/g, "myal");
syl = syl.replace(/먕/g, "myang");
syl = syl.replace(/머/g, "meo");
syl = syl.replace(/먹/g, "meok");
syl = syl.replace(/먼/g, "meon");
syl = syl.replace(/멀/g, "meol");
syl = syl.replace(/멂/g, "meolm");
syl = syl.replace(/멈/g, "meom");
syl = syl.replace(/멉/g, "meop");
syl = syl.replace(/멋/g, "meos");
syl = syl.replace(/멍/g, "meong");
syl = syl.replace(/멎/g, "meoj");
syl = syl.replace(/멓/g, "meoh");
syl = syl.replace(/메/g, "me");
syl = syl.replace(/멕/g, "mek");
syl = syl.replace(/멘/g, "men");
syl = syl.replace(/멜/g, "mel");
syl = syl.replace(/멤/g, "mem");
syl = syl.replace(/멥/g, "mep");
syl = syl.replace(/멧/g, "mes");
syl = syl.replace(/멨/g, "mess");
syl = syl.replace(/멩/g, "meng");
syl = syl.replace(/며/g, "myeo");
syl = syl.replace(/멱/g, "myeok");
syl = syl.replace(/면/g, "myeon");
syl = syl.replace(/멸/g, "myeol");
syl = syl.replace(/몃/g, "myeos");
syl = syl.replace(/몄/g, "myeoss");
syl = syl.replace(/명/g, "myeong");
syl = syl.replace(/몇/g, "myeoch");
syl = syl.replace(/몌/g, "mye");
syl = syl.replace(/모/g, "mo");
syl = syl.replace(/목/g, "mok");
syl = syl.replace(/몫/g, "moks");
syl = syl.replace(/몬/g, "mon");
syl = syl.replace(/몰/g, "mol");
syl = syl.replace(/몲/g, "molm");
syl = syl.replace(/몸/g, "mom");
syl = syl.replace(/몹/g, "mop");
syl = syl.replace(/못/g, "mos");
syl = syl.replace(/몽/g, "mong");
syl = syl.replace(/뫄/g, "mwa");
syl = syl.replace(/뫈/g, "mwan");
syl = syl.replace(/뫘/g, "mwass");
syl = syl.replace(/뫙/g, "mwang");
syl = syl.replace(/뫼/g, "mwe");
syl = syl.replace(/묀/g, "mwen");
syl = syl.replace(/묄/g, "mwel");
syl = syl.replace(/묍/g, "mwep");
syl = syl.replace(/묏/g, "mwes");
syl = syl.replace(/묑/g, "mweng");
syl = syl.replace(/묘/g, "myo");
syl = syl.replace(/묜/g, "myon");
syl = syl.replace(/묠/g, "myol");
syl = syl.replace(/묩/g, "myop");
syl = syl.replace(/묫/g, "myos");
syl = syl.replace(/무/g, "mu");
syl = syl.replace(/묵/g, "muk");
syl = syl.replace(/묶/g, "mukk");
syl = syl.replace(/문/g, "mun");
syl = syl.replace(/묻/g, "mud");
syl = syl.replace(/물/g, "mul");
syl = syl.replace(/묽/g, "mulk");
syl = syl.replace(/묾/g, "mulm");
syl = syl.replace(/뭄/g, "mum");
syl = syl.replace(/뭅/g, "mup");
syl = syl.replace(/뭇/g, "mus");
syl = syl.replace(/뭉/g, "mung");
syl = syl.replace(/뭍/g, "mut");
syl = syl.replace(/뭏/g, "muh");
syl = syl.replace(/뭐/g, "mweo");
syl = syl.replace(/뭔/g, "mweon");
syl = syl.replace(/뭘/g, "mweol");
syl = syl.replace(/뭡/g, "mweop");
syl = syl.replace(/뭣/g, "mweos");
syl = syl.replace(/뭬/g, "mwe");
syl = syl.replace(/뮈/g, "mwi");
syl = syl.replace(/뮌/g, "mwin");
syl = syl.replace(/뮐/g, "mwil");
syl = syl.replace(/뮤/g, "myu");
syl = syl.replace(/뮨/g, "myun");
syl = syl.replace(/뮬/g, "myul");
syl = syl.replace(/뮴/g, "myum");
syl = syl.replace(/뮷/g, "myus");
syl = syl.replace(/므/g, "meu");
syl = syl.replace(/믄/g, "meun");
syl = syl.replace(/믈/g, "meul");
syl = syl.replace(/믐/g, "meum");
syl = syl.replace(/믓/g, "meus");
syl = syl.replace(/미/g, "mi");
syl = syl.replace(/믹/g, "mik");
syl = syl.replace(/민/g, "min");
syl = syl.replace(/믿/g, "mid");
syl = syl.replace(/밀/g, "mil");
syl = syl.replace(/밂/g, "milm");
syl = syl.replace(/밈/g, "mim");
syl = syl.replace(/밉/g, "mip");
syl = syl.replace(/밋/g, "mis");
syl = syl.replace(/밌/g, "miss");
syl = syl.replace(/밍/g, "ming");
syl = syl.replace(/및/g, "mich");
syl = syl.replace(/밑/g, "mit");
syl = syl.replace(/바/g, "ba");
syl = syl.replace(/박/g, "bak");
syl = syl.replace(/밖/g, "bakk");
syl = syl.replace(/밗/g, "baks");
syl = syl.replace(/반/g, "ban");
syl = syl.replace(/받/g, "bad");
syl = syl.replace(/발/g, "bal");
syl = syl.replace(/밝/g, "balk");
syl = syl.replace(/밞/g, "balm");
syl = syl.replace(/밟/g, "bap");
syl = syl.replace(/밤/g, "bam");
syl = syl.replace(/밥/g, "bap");
syl = syl.replace(/밧/g, "bas");
syl = syl.replace(/방/g, "bang");
syl = syl.replace(/밭/g, "bat");
syl = syl.replace(/배/g, "bae");
syl = syl.replace(/백/g, "baek");
syl = syl.replace(/밴/g, "baen");
syl = syl.replace(/밸/g, "bael");
syl = syl.replace(/뱀/g, "baem");
syl = syl.replace(/뱁/g, "baep");
syl = syl.replace(/뱃/g, "baes");
syl = syl.replace(/뱄/g, "baess");
syl = syl.replace(/뱅/g, "baeng");
syl = syl.replace(/뱉/g, "baet");
syl = syl.replace(/뱌/g, "bya");
syl = syl.replace(/뱍/g, "byak");
syl = syl.replace(/뱐/g, "byan");
syl = syl.replace(/뱝/g, "byap");
syl = syl.replace(/버/g, "beo");
syl = syl.replace(/벅/g, "beok");
syl = syl.replace(/번/g, "beon");
syl = syl.replace(/벋/g, "beod");
syl = syl.replace(/벌/g, "beol");
syl = syl.replace(/벎/g, "beolm");
syl = syl.replace(/범/g, "beom");
syl = syl.replace(/법/g, "beop");
syl = syl.replace(/벗/g, "beos");
syl = syl.replace(/벙/g, "beong");
syl = syl.replace(/벚/g, "beoj");
syl = syl.replace(/베/g, "be");
syl = syl.replace(/벡/g, "bek");
syl = syl.replace(/벤/g, "ben");
syl = syl.replace(/벧/g, "bed");
syl = syl.replace(/벨/g, "bel");
syl = syl.replace(/벰/g, "bem");
syl = syl.replace(/벱/g, "bep");
syl = syl.replace(/벳/g, "bes");
syl = syl.replace(/벴/g, "bess");
syl = syl.replace(/벵/g, "beng");
syl = syl.replace(/벼/g, "byeo");
syl = syl.replace(/벽/g, "byeok");
syl = syl.replace(/변/g, "byeon");
syl = syl.replace(/별/g, "byeol");
syl = syl.replace(/볍/g, "byeop");
syl = syl.replace(/볏/g, "byeos");
syl = syl.replace(/볐/g, "byeoss");
syl = syl.replace(/병/g, "byeong");
syl = syl.replace(/볕/g, "byeot");
syl = syl.replace(/볘/g, "bye");
syl = syl.replace(/볜/g, "byen");
syl = syl.replace(/보/g, "bo");
syl = syl.replace(/복/g, "bok");
syl = syl.replace(/볶/g, "bokk");
syl = syl.replace(/본/g, "bon");
syl = syl.replace(/볼/g, "bol");
syl = syl.replace(/봄/g, "bom");
syl = syl.replace(/봅/g, "bop");
syl = syl.replace(/봇/g, "bos");
syl = syl.replace(/봉/g, "bong");
syl = syl.replace(/봐/g, "bwa");
syl = syl.replace(/봔/g, "bwan");
syl = syl.replace(/봤/g, "bwass");
syl = syl.replace(/봬/g, "bwae");
syl = syl.replace(/뵀/g, "bwaess");
syl = syl.replace(/뵈/g, "bwe");
syl = syl.replace(/뵉/g, "bwek");
syl = syl.replace(/뵌/g, "bwen");
syl = syl.replace(/뵐/g, "bwel");
syl = syl.replace(/뵘/g, "bwem");
syl = syl.replace(/뵙/g, "bwep");
syl = syl.replace(/뵤/g, "byo");
syl = syl.replace(/뵨/g, "byon");
syl = syl.replace(/부/g, "bu");
syl = syl.replace(/북/g, "buk");
syl = syl.replace(/분/g, "bun");
syl = syl.replace(/붇/g, "bud");
syl = syl.replace(/불/g, "bul");
syl = syl.replace(/붉/g, "bulk");
syl = syl.replace(/붊/g, "bulm");
syl = syl.replace(/붐/g, "bum");
syl = syl.replace(/붑/g, "bup");
syl = syl.replace(/붓/g, "bus");
syl = syl.replace(/붕/g, "bung");
syl = syl.replace(/붙/g, "but");
syl = syl.replace(/붚/g, "bup");
syl = syl.replace(/붜/g, "bweo");
syl = syl.replace(/붤/g, "bweol");
syl = syl.replace(/붰/g, "bweoss");
syl = syl.replace(/붸/g, "bwe");
syl = syl.replace(/뷔/g, "bwi");
syl = syl.replace(/뷕/g, "bwik");
syl = syl.replace(/뷘/g, "bwin");
syl = syl.replace(/뷜/g, "bwil");
syl = syl.replace(/뷩/g, "bwing");
syl = syl.replace(/뷰/g, "byu");
syl = syl.replace(/뷴/g, "byun");
syl = syl.replace(/뷸/g, "byul");
syl = syl.replace(/븀/g, "byum");
syl = syl.replace(/븃/g, "byus");
syl = syl.replace(/븅/g, "byung");
syl = syl.replace(/브/g, "beu");
syl = syl.replace(/븍/g, "beuk");
syl = syl.replace(/븐/g, "beun");
syl = syl.replace(/블/g, "beul");
syl = syl.replace(/븜/g, "beum");
syl = syl.replace(/븝/g, "beup");
syl = syl.replace(/븟/g, "beus");
syl = syl.replace(/비/g, "bi");
syl = syl.replace(/빅/g, "bik");
syl = syl.replace(/빈/g, "bin");
syl = syl.replace(/빌/g, "bil");
syl = syl.replace(/빎/g, "bilm");
syl = syl.replace(/빔/g, "bim");
syl = syl.replace(/빕/g, "bip");
syl = syl.replace(/빗/g, "bis");
syl = syl.replace(/빙/g, "bing");
syl = syl.replace(/빚/g, "bij");
syl = syl.replace(/빛/g, "bich");
syl = syl.replace(/빠/g, "ppa");
syl = syl.replace(/빡/g, "ppak");
syl = syl.replace(/빤/g, "ppan");
syl = syl.replace(/빨/g, "ppal");
syl = syl.replace(/빪/g, "ppalm");
syl = syl.replace(/빰/g, "ppam");
syl = syl.replace(/빱/g, "ppap");
syl = syl.replace(/빳/g, "ppas");
syl = syl.replace(/빴/g, "ppass");
syl = syl.replace(/빵/g, "ppang");
syl = syl.replace(/빻/g, "ppah");
syl = syl.replace(/빼/g, "ppae");
syl = syl.replace(/빽/g, "ppaek");
syl = syl.replace(/뺀/g, "ppaen");
syl = syl.replace(/뺄/g, "ppael");
syl = syl.replace(/뺌/g, "ppaem");
syl = syl.replace(/뺍/g, "ppaep");
syl = syl.replace(/뺏/g, "ppaes");
syl = syl.replace(/뺐/g, "ppaess");
syl = syl.replace(/뺑/g, "ppaeng");
syl = syl.replace(/뺘/g, "ppya");
syl = syl.replace(/뺙/g, "ppyak");
syl = syl.replace(/뺨/g, "ppyam");
syl = syl.replace(/뻐/g, "ppeo");
syl = syl.replace(/뻑/g, "ppeok");
syl = syl.replace(/뻔/g, "ppeon");
syl = syl.replace(/뻗/g, "ppeod");
syl = syl.replace(/뻘/g, "ppeol");
syl = syl.replace(/뻠/g, "ppeom");
syl = syl.replace(/뻣/g, "ppeos");
syl = syl.replace(/뻤/g, "ppeoss");
syl = syl.replace(/뻥/g, "ppeong");
syl = syl.replace(/뻬/g, "ppe");
syl = syl.replace(/뼁/g, "ppeng");
syl = syl.replace(/뼈/g, "ppyeo");
syl = syl.replace(/뼉/g, "ppyeok");
syl = syl.replace(/뼘/g, "ppyeom");
syl = syl.replace(/뼙/g, "ppyeop");
syl = syl.replace(/뼛/g, "ppyeos");
syl = syl.replace(/뼜/g, "ppyeoss");
syl = syl.replace(/뼝/g, "ppyeong");
syl = syl.replace(/뽀/g, "ppo");
syl = syl.replace(/뽁/g, "ppok");
syl = syl.replace(/뽄/g, "ppon");
syl = syl.replace(/뽈/g, "ppol");
syl = syl.replace(/뽐/g, "ppom");
syl = syl.replace(/뽑/g, "ppop");
syl = syl.replace(/뽕/g, "ppong");
syl = syl.replace(/뾔/g, "ppwe");
syl = syl.replace(/뾰/g, "ppyo");
syl = syl.replace(/뿅/g, "ppyong");
syl = syl.replace(/뿌/g, "ppu");
syl = syl.replace(/뿍/g, "ppuk");
syl = syl.replace(/뿐/g, "ppun");
syl = syl.replace(/뿔/g, "ppul");
syl = syl.replace(/뿜/g, "ppum");
syl = syl.replace(/뿟/g, "ppus");
syl = syl.replace(/뿡/g, "ppung");
syl = syl.replace(/쀼/g, "ppyu");
syl = syl.replace(/쁑/g, "ppyung");
syl = syl.replace(/쁘/g, "ppeu");
syl = syl.replace(/쁜/g, "ppeun");
syl = syl.replace(/쁠/g, "ppeul");
syl = syl.replace(/쁨/g, "ppeum");
syl = syl.replace(/쁩/g, "ppeup");
syl = syl.replace(/삐/g, "ppi");
syl = syl.replace(/삑/g, "ppik");
syl = syl.replace(/삔/g, "ppin");
syl = syl.replace(/삘/g, "ppil");
syl = syl.replace(/삠/g, "ppim");
syl = syl.replace(/삡/g, "ppip");
syl = syl.replace(/삣/g, "ppis");
syl = syl.replace(/삥/g, "pping");
syl = syl.replace(/사/g, "sa");
syl = syl.replace(/삭/g, "sak");
syl = syl.replace(/삯/g, "saks");
syl = syl.replace(/산/g, "san");
syl = syl.replace(/삳/g, "sad");
syl = syl.replace(/살/g, "sal");
syl = syl.replace(/삵/g, "salk");
syl = syl.replace(/삶/g, "salm");
syl = syl.replace(/삼/g, "sam");
syl = syl.replace(/삽/g, "sap");
syl = syl.replace(/삿/g, "sas");
syl = syl.replace(/샀/g, "sass");
syl = syl.replace(/상/g, "sang");
syl = syl.replace(/샅/g, "sat");
syl = syl.replace(/새/g, "sae");
syl = syl.replace(/색/g, "saek");
syl = syl.replace(/샌/g, "saen");
syl = syl.replace(/샐/g, "sael");
syl = syl.replace(/샘/g, "saem");
syl = syl.replace(/샙/g, "saep");
syl = syl.replace(/샛/g, "saes");
syl = syl.replace(/샜/g, "saess");
syl = syl.replace(/생/g, "saeng");
syl = syl.replace(/샤/g, "sya");
syl = syl.replace(/샥/g, "syak");
syl = syl.replace(/샨/g, "syan");
syl = syl.replace(/샬/g, "syal");
syl = syl.replace(/샴/g, "syam");
syl = syl.replace(/샵/g, "syap");
syl = syl.replace(/샷/g, "syas");
syl = syl.replace(/샹/g, "syang");
syl = syl.replace(/섀/g, "syae");
syl = syl.replace(/섄/g, "syaen");
syl = syl.replace(/섈/g, "syael");
syl = syl.replace(/섐/g, "syaem");
syl = syl.replace(/섕/g, "syaeng");
syl = syl.replace(/서/g, "seo");
syl = syl.replace(/석/g, "seok");
syl = syl.replace(/섞/g, "seokk");
syl = syl.replace(/섟/g, "seoks");
syl = syl.replace(/선/g, "seon");
syl = syl.replace(/섣/g, "seod");
syl = syl.replace(/설/g, "seol");
syl = syl.replace(/섦/g, "seolm");
syl = syl.replace(/섧/g, "seolb");
syl = syl.replace(/섬/g, "seom");
syl = syl.replace(/섭/g, "seop");
syl = syl.replace(/섯/g, "seos");
syl = syl.replace(/섰/g, "seoss");
syl = syl.replace(/성/g, "seong");
syl = syl.replace(/섶/g, "seop");
syl = syl.replace(/세/g, "se");
syl = syl.replace(/섹/g, "sek");
syl = syl.replace(/센/g, "sen");
syl = syl.replace(/셀/g, "sel");
syl = syl.replace(/셈/g, "sem");
syl = syl.replace(/셉/g, "sep");
syl = syl.replace(/셋/g, "ses");
syl = syl.replace(/셌/g, "sess");
syl = syl.replace(/셍/g, "seng");
syl = syl.replace(/셔/g, "syeo");
syl = syl.replace(/셕/g, "syeok");
syl = syl.replace(/션/g, "syeon");
syl = syl.replace(/셜/g, "syeol");
syl = syl.replace(/셤/g, "syeom");
syl = syl.replace(/셥/g, "syeop");
syl = syl.replace(/셧/g, "syeos");
syl = syl.replace(/셨/g, "syeoss");
syl = syl.replace(/셩/g, "syeong");
syl = syl.replace(/셰/g, "sye");
syl = syl.replace(/셴/g, "syen");
syl = syl.replace(/셸/g, "syel");
syl = syl.replace(/솅/g, "syeng");
syl = syl.replace(/소/g, "so");
syl = syl.replace(/속/g, "sok");
syl = syl.replace(/솎/g, "sokk");
syl = syl.replace(/손/g, "son");
syl = syl.replace(/솔/g, "sol");
syl = syl.replace(/솖/g, "solm");
syl = syl.replace(/솜/g, "som");
syl = syl.replace(/솝/g, "sop");
syl = syl.replace(/솟/g, "sos");
syl = syl.replace(/송/g, "song");
syl = syl.replace(/솥/g, "sot");
syl = syl.replace(/솨/g, "swa");
syl = syl.replace(/솩/g, "swak");
syl = syl.replace(/솬/g, "swan");
syl = syl.replace(/솰/g, "swal");
syl = syl.replace(/솽/g, "swang");
syl = syl.replace(/쇄/g, "swae");
syl = syl.replace(/쇈/g, "swaen");
syl = syl.replace(/쇌/g, "swael");
syl = syl.replace(/쇔/g, "swaem");
syl = syl.replace(/쇗/g, "swaes");
syl = syl.replace(/쇘/g, "swaess");
syl = syl.replace(/쇠/g, "swe");
syl = syl.replace(/쇤/g, "swen");
syl = syl.replace(/쇨/g, "swel");
syl = syl.replace(/쇰/g, "swem");
syl = syl.replace(/쇱/g, "swep");
syl = syl.replace(/쇳/g, "swes");
syl = syl.replace(/쇼/g, "syo");
syl = syl.replace(/쇽/g, "syok");
syl = syl.replace(/숀/g, "syon");
syl = syl.replace(/숄/g, "syol");
syl = syl.replace(/숌/g, "syom");
syl = syl.replace(/숍/g, "syop");
syl = syl.replace(/숏/g, "syos");
syl = syl.replace(/숑/g, "syong");
syl = syl.replace(/수/g, "su");
syl = syl.replace(/숙/g, "suk");
syl = syl.replace(/순/g, "sun");
syl = syl.replace(/숟/g, "sud");
syl = syl.replace(/술/g, "sul");
syl = syl.replace(/숨/g, "sum");
syl = syl.replace(/숩/g, "sup");
syl = syl.replace(/숫/g, "sus");
syl = syl.replace(/숭/g, "sung");
syl = syl.replace(/숯/g, "such");
syl = syl.replace(/숱/g, "sut");
syl = syl.replace(/숲/g, "sup");
syl = syl.replace(/숴/g, "sweo");
syl = syl.replace(/쉈/g, "sweoss");
syl = syl.replace(/쉐/g, "swe");
syl = syl.replace(/쉑/g, "swek");
syl = syl.replace(/쉔/g, "swen");
syl = syl.replace(/쉘/g, "swel");
syl = syl.replace(/쉠/g, "swem");
syl = syl.replace(/쉥/g, "sweng");
syl = syl.replace(/쉬/g, "shwi");
syl = syl.replace(/쉭/g, "shwik");
syl = syl.replace(/쉰/g, "shwin");
syl = syl.replace(/쉴/g, "shwil");
syl = syl.replace(/쉼/g, "shwim");
syl = syl.replace(/쉽/g, "shwip");
syl = syl.replace(/쉿/g, "shwis");
syl = syl.replace(/슁/g, "shwing");
syl = syl.replace(/슈/g, "syu");
syl = syl.replace(/슉/g, "syuk");
syl = syl.replace(/슐/g, "syul");
syl = syl.replace(/슘/g, "syum");
syl = syl.replace(/슛/g, "syus");
syl = syl.replace(/슝/g, "syung");
syl = syl.replace(/스/g, "seu");
syl = syl.replace(/슥/g, "seuk");
syl = syl.replace(/슨/g, "seun");
syl = syl.replace(/슬/g, "seul");
syl = syl.replace(/슭/g, "seulk");
syl = syl.replace(/슴/g, "seum");
syl = syl.replace(/습/g, "seup");
syl = syl.replace(/슷/g, "seus");
syl = syl.replace(/승/g, "seung");
syl = syl.replace(/시/g, "shi");
syl = syl.replace(/식/g, "shik");
syl = syl.replace(/신/g, "shin");
syl = syl.replace(/싣/g, "shid");
syl = syl.replace(/실/g, "shil");
syl = syl.replace(/싫/g, "shilh");
syl = syl.replace(/심/g, "shim");
syl = syl.replace(/십/g, "ship");
syl = syl.replace(/싯/g, "shis");
syl = syl.replace(/싱/g, "shing");
syl = syl.replace(/싶/g, "ship");
syl = syl.replace(/싸/g, "ssa");
syl = syl.replace(/싹/g, "ssak");
syl = syl.replace(/싻/g, "ssaks");
syl = syl.replace(/싼/g, "ssan");
syl = syl.replace(/쌀/g, "ssal");
syl = syl.replace(/쌈/g, "ssam");
syl = syl.replace(/쌉/g, "ssap");
syl = syl.replace(/쌌/g, "ssass");
syl = syl.replace(/쌍/g, "ssang");
syl = syl.replace(/쌓/g, "ssah");
syl = syl.replace(/쌔/g, "ssae");
syl = syl.replace(/쌕/g, "ssaek");
syl = syl.replace(/쌘/g, "ssaen");
syl = syl.replace(/쌜/g, "ssael");
syl = syl.replace(/쌤/g, "ssaem");
syl = syl.replace(/쌥/g, "ssaep");
syl = syl.replace(/쌨/g, "ssaess");
syl = syl.replace(/쌩/g, "ssaeng");
syl = syl.replace(/썅/g, "ssyang");
syl = syl.replace(/써/g, "sseo");
syl = syl.replace(/썩/g, "sseok");
syl = syl.replace(/썬/g, "sseon");
syl = syl.replace(/썰/g, "sseol");
syl = syl.replace(/썲/g, "sseolm");
syl = syl.replace(/썸/g, "sseom");
syl = syl.replace(/썹/g, "sseop");
syl = syl.replace(/썼/g, "sseoss");
syl = syl.replace(/썽/g, "sseong");
syl = syl.replace(/쎄/g, "sse");
syl = syl.replace(/쎈/g, "ssen");
syl = syl.replace(/쎌/g, "ssel");
syl = syl.replace(/쏀/g, "ssyen");
syl = syl.replace(/쏘/g, "sso");
syl = syl.replace(/쏙/g, "ssok");
syl = syl.replace(/쏜/g, "sson");
syl = syl.replace(/쏟/g, "ssod");
syl = syl.replace(/쏠/g, "ssol");
syl = syl.replace(/쏢/g, "ssolm");
syl = syl.replace(/쏨/g, "ssom");
syl = syl.replace(/쏩/g, "ssop");
syl = syl.replace(/쏭/g, "ssong");
syl = syl.replace(/쏴/g, "sswa");
syl = syl.replace(/쏵/g, "sswak");
syl = syl.replace(/쏸/g, "sswan");
syl = syl.replace(/쐈/g, "sswass");
syl = syl.replace(/쐐/g, "sswae");
syl = syl.replace(/쐤/g, "sswaess");
syl = syl.replace(/쐬/g, "sswe");
syl = syl.replace(/쐰/g, "sswen");
syl = syl.replace(/쐴/g, "sswel");
syl = syl.replace(/쐼/g, "sswem");
syl = syl.replace(/쐽/g, "sswep");
syl = syl.replace(/쑈/g, "ssyo");
syl = syl.replace(/쑤/g, "ssu");
syl = syl.replace(/쑥/g, "ssuk");
syl = syl.replace(/쑨/g, "ssun");
syl = syl.replace(/쑬/g, "ssul");
syl = syl.replace(/쑴/g, "ssum");
syl = syl.replace(/쑵/g, "ssup");
syl = syl.replace(/쑹/g, "ssung");
syl = syl.replace(/쒀/g, "ssweo");
syl = syl.replace(/쒔/g, "ssweoss");
syl = syl.replace(/쒜/g, "sswe");
syl = syl.replace(/쒸/g, "sswi");
syl = syl.replace(/쒼/g, "sswin");
syl = syl.replace(/쓩/g, "ssyung");
syl = syl.replace(/쓰/g, "sseu");
syl = syl.replace(/쓱/g, "sseuk");
syl = syl.replace(/쓴/g, "sseun");
syl = syl.replace(/쓸/g, "sseul");
syl = syl.replace(/쓺/g, "sseulm");
syl = syl.replace(/쓿/g, "sseulh");
syl = syl.replace(/씀/g, "sseum");
syl = syl.replace(/씁/g, "sseup");
syl = syl.replace(/씌/g, "sshi");
syl = syl.replace(/씐/g, "ssuin");
syl = syl.replace(/씔/g, "ssuil");
syl = syl.replace(/씜/g, "ssuim");
syl = syl.replace(/씨/g, "sshi");
syl = syl.replace(/씩/g, "sshik");
syl = syl.replace(/씬/g, "sshin");
syl = syl.replace(/씰/g, "sshil");
syl = syl.replace(/씸/g, "sshim");
syl = syl.replace(/씹/g, "sship");
syl = syl.replace(/씻/g, "sshis");
syl = syl.replace(/씽/g, "sshing");
syl = syl.replace(/아/g, "a");
syl = syl.replace(/악/g, "ak");
syl = syl.replace(/안/g, "an");
syl = syl.replace(/앉/g, "anj");
syl = syl.replace(/않/g, "anh");
syl = syl.replace(/알/g, "al");
syl = syl.replace(/앍/g, "alk");
syl = syl.replace(/앎/g, "alm");
syl = syl.replace(/앓/g, "alh");
syl = syl.replace(/암/g, "am");
syl = syl.replace(/압/g, "ap");
syl = syl.replace(/앗/g, "as");
syl = syl.replace(/았/g, "ass");
syl = syl.replace(/앙/g, "ang");
syl = syl.replace(/앝/g, "at");
syl = syl.replace(/앞/g, "ap");
syl = syl.replace(/애/g, "ae");
syl = syl.replace(/액/g, "aek");
syl = syl.replace(/앤/g, "aen");
syl = syl.replace(/앨/g, "ael");
syl = syl.replace(/앰/g, "aem");
syl = syl.replace(/앱/g, "aep");
syl = syl.replace(/앳/g, "aes");
syl = syl.replace(/앴/g, "aess");
syl = syl.replace(/앵/g, "aeng");
syl = syl.replace(/야/g, "ya");
syl = syl.replace(/약/g, "yak");
syl = syl.replace(/얀/g, "yan");
syl = syl.replace(/얄/g, "yal");
syl = syl.replace(/얇/g, "yalb");
syl = syl.replace(/얌/g, "yam");
syl = syl.replace(/얍/g, "yap");
syl = syl.replace(/얏/g, "yas");
syl = syl.replace(/양/g, "yang");
syl = syl.replace(/얕/g, "yat");
syl = syl.replace(/얗/g, "yah");
syl = syl.replace(/얘/g, "yae");
syl = syl.replace(/얜/g, "yaen");
syl = syl.replace(/얠/g, "yael");
syl = syl.replace(/얩/g, "yaep");
syl = syl.replace(/어/g, "eo");
syl = syl.replace(/억/g, "eok");
syl = syl.replace(/언/g, "eon");
syl = syl.replace(/얹/g, "eonj");
syl = syl.replace(/얻/g, "eod");
syl = syl.replace(/얼/g, "eol");
syl = syl.replace(/얽/g, "eolk");
syl = syl.replace(/얾/g, "eolm");
syl = syl.replace(/엄/g, "eom");
syl = syl.replace(/업/g, "eop");
syl = syl.replace(/없/g, "eops");
syl = syl.replace(/엇/g, "eos");
syl = syl.replace(/었/g, "eoss");
syl = syl.replace(/엉/g, "eong");
syl = syl.replace(/엊/g, "eoj");
syl = syl.replace(/엌/g, "eok");
syl = syl.replace(/엎/g, "eop");
syl = syl.replace(/에/g, "e");
syl = syl.replace(/엑/g, "ek");
syl = syl.replace(/엔/g, "en");
syl = syl.replace(/엘/g, "el");
syl = syl.replace(/엠/g, "em");
syl = syl.replace(/엡/g, "ep");
syl = syl.replace(/엣/g, "es");
syl = syl.replace(/엥/g, "eng");
syl = syl.replace(/여/g, "yeo");
syl = syl.replace(/역/g, "yeok");
syl = syl.replace(/엮/g, "yeokk");
syl = syl.replace(/연/g, "yeon");
syl = syl.replace(/열/g, "yeol");
syl = syl.replace(/엶/g, "yeolm");
syl = syl.replace(/엷/g, "yeolb");
syl = syl.replace(/염/g, "yeom");
syl = syl.replace(/엽/g, "yeop");
syl = syl.replace(/엾/g, "yeops");
syl = syl.replace(/엿/g, "yeos");
syl = syl.replace(/였/g, "yeoss");
syl = syl.replace(/영/g, "yeong");
syl = syl.replace(/옅/g, "yeot");
syl = syl.replace(/옆/g, "yeop");
syl = syl.replace(/옇/g, "yeoh");
syl = syl.replace(/예/g, "ye");
syl = syl.replace(/옌/g, "yen");
syl = syl.replace(/옐/g, "yel");
syl = syl.replace(/옘/g, "yem");
syl = syl.replace(/옙/g, "yep");
syl = syl.replace(/옛/g, "yes");
syl = syl.replace(/옜/g, "yess");
syl = syl.replace(/오/g, "o");
syl = syl.replace(/옥/g, "ok");
syl = syl.replace(/온/g, "on");
syl = syl.replace(/올/g, "ol");
syl = syl.replace(/옭/g, "olk");
syl = syl.replace(/옮/g, "olm");
syl = syl.replace(/옰/g, "ols");
syl = syl.replace(/옳/g, "olh");
syl = syl.replace(/옴/g, "om");
syl = syl.replace(/옵/g, "op");
syl = syl.replace(/옷/g, "os");
syl = syl.replace(/옹/g, "ong");
syl = syl.replace(/옻/g, "och");
syl = syl.replace(/와/g, "wa");
syl = syl.replace(/왁/g, "wak");
syl = syl.replace(/완/g, "wan");
syl = syl.replace(/왈/g, "wal");
syl = syl.replace(/왐/g, "wam");
syl = syl.replace(/왑/g, "wap");
syl = syl.replace(/왓/g, "was");
syl = syl.replace(/왔/g, "wass");
syl = syl.replace(/왕/g, "wang");
syl = syl.replace(/왜/g, "wae");
syl = syl.replace(/왤/g, "wael");	
syl = syl.replace(/왝/g, "waek");
syl = syl.replace(/왠/g, "waen");
syl = syl.replace(/왬/g, "waem");
syl = syl.replace(/왯/g, "waes");
syl = syl.replace(/왱/g, "waeng");
syl = syl.replace(/외/g, "we");
syl = syl.replace(/왹/g, "wek");
syl = syl.replace(/왼/g, "wen");
syl = syl.replace(/욀/g, "wel");
syl = syl.replace(/욈/g, "wem");
syl = syl.replace(/욉/g, "wep");
syl = syl.replace(/욋/g, "wes");
syl = syl.replace(/욍/g, "weng");
syl = syl.replace(/요/g, "yo");
syl = syl.replace(/욕/g, "yok");
syl = syl.replace(/욘/g, "yon");
syl = syl.replace(/욜/g, "yol");
syl = syl.replace(/욤/g, "yom");
syl = syl.replace(/욥/g, "yop");
syl = syl.replace(/욧/g, "yos");
syl = syl.replace(/용/g, "yong");
syl = syl.replace(/우/g, "u");
syl = syl.replace(/욱/g, "uk");
syl = syl.replace(/운/g, "un");
syl = syl.replace(/울/g, "ul");
syl = syl.replace(/욹/g, "ulk");
syl = syl.replace(/욺/g, "ulm");
syl = syl.replace(/움/g, "um");
syl = syl.replace(/웁/g, "up");
syl = syl.replace(/웃/g, "us");
syl = syl.replace(/웅/g, "ung");
syl = syl.replace(/워/g, "weo");
syl = syl.replace(/웍/g, "weok");
syl = syl.replace(/원/g, "weon");
syl = syl.replace(/월/g, "weol");
syl = syl.replace(/웜/g, "weom");
syl = syl.replace(/웝/g, "weop");
syl = syl.replace(/웠/g, "weoss");
syl = syl.replace(/웡/g, "weong");
syl = syl.replace(/웨/g, "we");
syl = syl.replace(/웩/g, "wek");
syl = syl.replace(/웬/g, "wen");
syl = syl.replace(/웰/g, "wel");
syl = syl.replace(/웸/g, "wem");
syl = syl.replace(/웹/g, "wep");
syl = syl.replace(/웽/g, "weng");
syl = syl.replace(/위/g, "wi");
syl = syl.replace(/윅/g, "wik");
syl = syl.replace(/윈/g, "win");
syl = syl.replace(/윌/g, "wil");
syl = syl.replace(/윔/g, "wim");
syl = syl.replace(/윕/g, "wip");
syl = syl.replace(/윗/g, "wis");
syl = syl.replace(/윙/g, "wing");
syl = syl.replace(/유/g, "yu");
syl = syl.replace(/육/g, "yuk");
syl = syl.replace(/윤/g, "yun");
syl = syl.replace(/율/g, "yul");
syl = syl.replace(/윰/g, "yum");
syl = syl.replace(/윱/g, "yup");
syl = syl.replace(/윳/g, "yus");
syl = syl.replace(/융/g, "yung");
syl = syl.replace(/윷/g, "yuch");
syl = syl.replace(/으/g, "eu");
syl = syl.replace(/윽/g, "euk");
syl = syl.replace(/은/g, "eun");
syl = syl.replace(/을/g, "eul");
syl = syl.replace(/읊/g, "eulp");
syl = syl.replace(/음/g, "eum");
syl = syl.replace(/읍/g, "eup");
syl = syl.replace(/읏/g, "eus");
syl = syl.replace(/응/g, "eung");
syl = syl.replace(/읒/g, "euj");
syl = syl.replace(/읓/g, "euch");
syl = syl.replace(/읔/g, "euk");
syl = syl.replace(/읕/g, "eut");
syl = syl.replace(/읖/g, "eup");
syl = syl.replace(/읗/g, "euh");
syl = syl.replace(/의/g, "ye"); //ui
syl = syl.replace(/읜/g, "in");
syl = syl.replace(/읠/g, "il");
syl = syl.replace(/읨/g, "im");
syl = syl.replace(/읫/g, "is");
syl = syl.replace(/이/g, "i");
syl = syl.replace(/익/g, "ik");
syl = syl.replace(/잌/g, "ik");
syl = syl.replace(/인/g, "in");
syl = syl.replace(/일/g, "il");
syl = syl.replace(/읽/g, "ilk");
syl = syl.replace(/읾/g, "ilm");
syl = syl.replace(/잃/g, "ilh");
syl = syl.replace(/임/g, "im");
syl = syl.replace(/입/g, "ib");
syl = syl.replace(/잇/g, "is");
syl = syl.replace(/있/g, "iss");
syl = syl.replace(/잉/g, "ing");
syl = syl.replace(/잊/g, "ij");
syl = syl.replace(/잎/g, "ip");
syl = syl.replace(/자/g, "ja");
syl = syl.replace(/작/g, "jak");
syl = syl.replace(/잔/g, "jan");
syl = syl.replace(/잖/g, "janh");
syl = syl.replace(/잗/g, "jad");
syl = syl.replace(/잘/g, "jal");
syl = syl.replace(/잚/g, "jalm");
syl = syl.replace(/잠/g, "jam");
syl = syl.replace(/잡/g, "jab");
syl = syl.replace(/잣/g, "jas");
syl = syl.replace(/잤/g, "jass");
syl = syl.replace(/장/g, "jang");
syl = syl.replace(/잦/g, "jaj");
syl = syl.replace(/재/g, "jae");
syl = syl.replace(/잭/g, "jaek");
syl = syl.replace(/잰/g, "jaen");
syl = syl.replace(/잴/g, "jael");
syl = syl.replace(/잼/g, "jaem");
syl = syl.replace(/잽/g, "jaep");
syl = syl.replace(/잿/g, "jaes");
syl = syl.replace(/쟀/g, "jaess");
syl = syl.replace(/쟁/g, "jaeng");
syl = syl.replace(/쟈/g, "jya");
syl = syl.replace(/쟉/g, "jyak");
syl = syl.replace(/쟌/g, "jyan");
syl = syl.replace(/쟎/g, "jyanh");
syl = syl.replace(/쟐/g, "jyal");
syl = syl.replace(/쟘/g, "jyam");
syl = syl.replace(/쟝/g, "jyang");
syl = syl.replace(/쟤/g, "jyae");
syl = syl.replace(/쟨/g, "jyaen");
syl = syl.replace(/쟬/g, "jyael");
syl = syl.replace(/저/g, "jeo");
syl = syl.replace(/적/g, "jeok");
syl = syl.replace(/전/g, "jeon");
syl = syl.replace(/절/g, "jeol");
syl = syl.replace(/젊/g, "jeolm");
syl = syl.replace(/점/g, "jeom");
syl = syl.replace(/접/g, "jeop");
syl = syl.replace(/젓/g, "jeos");
syl = syl.replace(/정/g, "jeong");
syl = syl.replace(/젖/g, "jeoj");
syl = syl.replace(/제/g, "je");
syl = syl.replace(/젝/g, "jek");
syl = syl.replace(/젠/g, "jen");
syl = syl.replace(/젤/g, "jel");
syl = syl.replace(/젬/g, "jem");
syl = syl.replace(/젭/g, "jep");
syl = syl.replace(/젯/g, "jes");
syl = syl.replace(/젱/g, "jeng");
syl = syl.replace(/져/g, "jyeo");
syl = syl.replace(/젼/g, "jyeon");
syl = syl.replace(/졀/g, "jyeol");
syl = syl.replace(/졈/g, "jyeom");
syl = syl.replace(/졉/g, "jyeop");
syl = syl.replace(/졌/g, "jyeoss");
syl = syl.replace(/졍/g, "jyeong");
syl = syl.replace(/졔/g, "jye");
syl = syl.replace(/조/g, "jo");
syl = syl.replace(/족/g, "jok");
syl = syl.replace(/존/g, "jon");
syl = syl.replace(/졸/g, "jol");
syl = syl.replace(/졺/g, "jolm");
syl = syl.replace(/좀/g, "jom");
syl = syl.replace(/좁/g, "jop");
syl = syl.replace(/좃/g, "jos");
syl = syl.replace(/종/g, "jong");
syl = syl.replace(/좆/g, "joj");
syl = syl.replace(/좇/g, "joch");
syl = syl.replace(/좋/g, "joh");
syl = syl.replace(/좌/g, "jwa");
syl = syl.replace(/좍/g, "jwak");
syl = syl.replace(/좔/g, "jwal");
syl = syl.replace(/좝/g, "jwab");
syl = syl.replace(/좟/g, "jwas");
syl = syl.replace(/좡/g, "jwang");
syl = syl.replace(/좨/g, "jwae");
syl = syl.replace(/좼/g, "jwaess");
syl = syl.replace(/좽/g, "jwaeng");
syl = syl.replace(/죄/g, "jwe"); 
syl = syl.replace(/죈/g, "jwen");
syl = syl.replace(/죌/g, "jwel");
syl = syl.replace(/죔/g, "jwem");
syl = syl.replace(/죕/g, "jwep");
syl = syl.replace(/죗/g, "jwes");
syl = syl.replace(/죙/g, "jweng");
syl = syl.replace(/죠/g, "jyo");
syl = syl.replace(/죡/g, "jyok");
syl = syl.replace(/죤/g, "jyon");
syl = syl.replace(/죵/g, "jyong");
syl = syl.replace(/주/g, "ju");
syl = syl.replace(/죽/g, "juk");
syl = syl.replace(/준/g, "jun");
syl = syl.replace(/줄/g, "jul");
syl = syl.replace(/줅/g, "julk");
syl = syl.replace(/줆/g, "julm");
syl = syl.replace(/줌/g, "jum");
syl = syl.replace(/줍/g, "jup");
syl = syl.replace(/줏/g, "jus");
syl = syl.replace(/중/g, "jung");
syl = syl.replace(/줘/g, "jweo");
syl = syl.replace(/줬/g, "jweoss");
syl = syl.replace(/줴/g, "jwe");
syl = syl.replace(/쥐/g, "jwi");
syl = syl.replace(/쥑/g, "jwik");
syl = syl.replace(/쥔/g, "jwin");
syl = syl.replace(/쥘/g, "jwil");
syl = syl.replace(/쥠/g, "jwim");
syl = syl.replace(/쥡/g, "jwip");
syl = syl.replace(/쥣/g, "jwis");
syl = syl.replace(/쥬/g, "jyu");
syl = syl.replace(/쥰/g, "jyun");
syl = syl.replace(/쥴/g, "jyul");
syl = syl.replace(/쥼/g, "jyum");
syl = syl.replace(/즈/g, "jeu");
syl = syl.replace(/즉/g, "jeuk");
syl = syl.replace(/즌/g, "jeun");
syl = syl.replace(/즐/g, "jeul");
syl = syl.replace(/즘/g, "jeum");
syl = syl.replace(/즙/g, "jeup");
syl = syl.replace(/즛/g, "jeus");
syl = syl.replace(/증/g, "jeung");
syl = syl.replace(/지/g, "ji");
syl = syl.replace(/직/g, "jik");
syl = syl.replace(/진/g, "jin");
syl = syl.replace(/짇/g, "jid");
syl = syl.replace(/질/g, "jil");
syl = syl.replace(/짊/g, "jilm");
syl = syl.replace(/짐/g, "jim");
syl = syl.replace(/집/g, "jip");
syl = syl.replace(/짓/g, "jis");
syl = syl.replace(/징/g, "jing");
syl = syl.replace(/짖/g, "jij");
syl = syl.replace(/짙/g, "jit");
syl = syl.replace(/짚/g, "jip");
syl = syl.replace(/짜/g, "jja");
syl = syl.replace(/짝/g, "jjak");
syl = syl.replace(/짠/g, "jjan");
syl = syl.replace(/짢/g, "jjanh");
syl = syl.replace(/짤/g, "jjal");
syl = syl.replace(/짧/g, "jjalb");
syl = syl.replace(/짬/g, "jjam");
syl = syl.replace(/짭/g, "jjab");
syl = syl.replace(/짯/g, "jjas");
syl = syl.replace(/짰/g, "jjass");
syl = syl.replace(/짱/g, "jjang");
syl = syl.replace(/째/g, "jjae");
syl = syl.replace(/짹/g, "jjaek");
syl = syl.replace(/짼/g, "jjaen");
syl = syl.replace(/쨀/g, "jjael");
syl = syl.replace(/쨈/g, "jjaem");
syl = syl.replace(/쨉/g, "jjaeb");
syl = syl.replace(/쨋/g, "jjaes");
syl = syl.replace(/쨌/g, "jjaess");
syl = syl.replace(/쨍/g, "jjaeng");
syl = syl.replace(/쨔/g, "jjya");
syl = syl.replace(/쨘/g, "jjyan");
syl = syl.replace(/쨩/g, "jjyang");
syl = syl.replace(/쩌/g, "jjeo");
syl = syl.replace(/쩍/g, "jjeok");
syl = syl.replace(/쩐/g, "jjeon");
syl = syl.replace(/쩔/g, "jjeol");
syl = syl.replace(/쩜/g, "jjeom");
syl = syl.replace(/쩝/g, "jjeob");
syl = syl.replace(/쩟/g, "jjeos");
syl = syl.replace(/쩠/g, "jjeoss");
syl = syl.replace(/쩡/g, "jjeong");
syl = syl.replace(/쩨/g, "jje");
syl = syl.replace(/쩽/g, "jjeng");
syl = syl.replace(/쪄/g, "jjyeo");
syl = syl.replace(/쪘/g, "jjyeoss");
syl = syl.replace(/쪼/g, "jjo");
syl = syl.replace(/쪽/g, "jjok");
syl = syl.replace(/쫀/g, "jjon");
syl = syl.replace(/쫄/g, "jjol");
syl = syl.replace(/쫌/g, "jjom");
syl = syl.replace(/쫍/g, "jjob");
syl = syl.replace(/쫏/g, "jjos");
syl = syl.replace(/쫑/g, "jjong");
syl = syl.replace(/쫓/g, "jjoch");
syl = syl.replace(/쫘/g, "jjwa");
syl = syl.replace(/쫙/g, "jjwak");
syl = syl.replace(/쫠/g, "jjwal");
syl = syl.replace(/쫬/g, "jjwass");
syl = syl.replace(/쫴/g, "jjwae");
syl = syl.replace(/쬈/g, "jjwaess");
syl = syl.replace(/쬐/g, "jjwe");
syl = syl.replace(/쬔/g, "jjwen");
syl = syl.replace(/쬘/g, "jjwel");
syl = syl.replace(/쬠/g, "jjwem");
syl = syl.replace(/쬡/g, "jjweb");
syl = syl.replace(/쭁/g, "jjyong");
syl = syl.replace(/쭈/g, "jju");
syl = syl.replace(/쭉/g, "jjuk");
syl = syl.replace(/쭌/g, "jjun");
syl = syl.replace(/쭐/g, "jjul");
syl = syl.replace(/쭘/g, "jjum");
syl = syl.replace(/쭙/g, "jjub");
syl = syl.replace(/쭝/g, "jjung");
syl = syl.replace(/쭤/g, "jjweo");
syl = syl.replace(/쭸/g, "jjweoss");
syl = syl.replace(/쭹/g, "jjweong");
syl = syl.replace(/쮜/g, "jjwi");
syl = syl.replace(/쮸/g, "jjyu");
syl = syl.replace(/쯔/g, "jjeu");
syl = syl.replace(/쯤/g, "jjeum");
syl = syl.replace(/쯧/g, "jjeus");
syl = syl.replace(/쯩/g, "jjeung");
syl = syl.replace(/찌/g, "jji");
syl = syl.replace(/찍/g, "jjik");
syl = syl.replace(/찐/g, "jjin");
syl = syl.replace(/찔/g, "jjil");
syl = syl.replace(/찜/g, "jjim");
syl = syl.replace(/찝/g, "jjib");
syl = syl.replace(/찡/g, "jjing");
syl = syl.replace(/찢/g, "jjij");
syl = syl.replace(/찧/g, "jjih");
syl = syl.replace(/차/g, "cha");
syl = syl.replace(/착/g, "chak");
syl = syl.replace(/찬/g, "chan");
syl = syl.replace(/찮/g, "chanh");
syl = syl.replace(/찰/g, "chal");
syl = syl.replace(/참/g, "cham");
syl = syl.replace(/찹/g, "chab");
syl = syl.replace(/찻/g, "chas");
syl = syl.replace(/찼/g, "chass");
syl = syl.replace(/창/g, "chang");
syl = syl.replace(/찾/g, "chaj");
syl = syl.replace(/채/g, "chae");
syl = syl.replace(/책/g, "chaek");
syl = syl.replace(/챈/g, "chaen");
syl = syl.replace(/챌/g, "chael");
syl = syl.replace(/챔/g, "chaem");
syl = syl.replace(/챕/g, "chaeb");
syl = syl.replace(/챗/g, "chaes");
syl = syl.replace(/챘/g, "chaess");
syl = syl.replace(/챙/g, "chaeng");
syl = syl.replace(/챠/g, "chya");
syl = syl.replace(/챤/g, "chyan");
syl = syl.replace(/챦/g, "chyanh");
syl = syl.replace(/챨/g, "chyal");
syl = syl.replace(/챰/g, "chyam");
syl = syl.replace(/챵/g, "chyang");
syl = syl.replace(/처/g, "cheo");
syl = syl.replace(/척/g, "cheok");
syl = syl.replace(/천/g, "cheon");
syl = syl.replace(/철/g, "cheol");
syl = syl.replace(/첨/g, "cheom");
syl = syl.replace(/첩/g, "cheob");
syl = syl.replace(/첫/g, "cheos");
syl = syl.replace(/첬/g, "cheoss");
syl = syl.replace(/청/g, "cheong");
syl = syl.replace(/체/g, "che");
syl = syl.replace(/첵/g, "chek");
syl = syl.replace(/첸/g, "chen");
syl = syl.replace(/첼/g, "chel");
syl = syl.replace(/쳄/g, "chem");
syl = syl.replace(/쳅/g, "cheb");
syl = syl.replace(/쳇/g, "ches");
syl = syl.replace(/쳉/g, "cheng");
syl = syl.replace(/쳐/g, "chyeo");
syl = syl.replace(/쳔/g, "chyeon");
syl = syl.replace(/쳤/g, "chyeoss");
syl = syl.replace(/쳬/g, "chye");
syl = syl.replace(/쳰/g, "chyen");
syl = syl.replace(/촁/g, "chyeng");
syl = syl.replace(/초/g, "cho");
syl = syl.replace(/촉/g, "chok");
syl = syl.replace(/촌/g, "chon");
syl = syl.replace(/촐/g, "chol");
syl = syl.replace(/촘/g, "chom");
syl = syl.replace(/촙/g, "chob");
syl = syl.replace(/촛/g, "chos");
syl = syl.replace(/총/g, "chong");
syl = syl.replace(/촤/g, "chwa");
syl = syl.replace(/촨/g, "chwan");
syl = syl.replace(/촬/g, "chwal");
syl = syl.replace(/촹/g, "chwang");
syl = syl.replace(/최/g, "chwe");
syl = syl.replace(/쵠/g, "chwen");
syl = syl.replace(/쵤/g, "chwel");
syl = syl.replace(/쵬/g, "chwem");
syl = syl.replace(/쵭/g, "chweb");
syl = syl.replace(/쵯/g, "chwes");
syl = syl.replace(/쵱/g, "chweng");
syl = syl.replace(/쵸/g, "chyo");
syl = syl.replace(/춈/g, "chyom");
syl = syl.replace(/추/g, "chu");
syl = syl.replace(/축/g, "chuk");
syl = syl.replace(/춘/g, "chun");
syl = syl.replace(/출/g, "chul");
syl = syl.replace(/춤/g, "chum");
syl = syl.replace(/춥/g, "chub");
syl = syl.replace(/춧/g, "chus");
syl = syl.replace(/충/g, "chung");
syl = syl.replace(/춰/g, "chweo");
syl = syl.replace(/췄/g, "chwoss");
syl = syl.replace(/췌/g, "chwe");
syl = syl.replace(/췐/g, "chwen");
syl = syl.replace(/취/g, "chwi");
syl = syl.replace(/췬/g, "chwin");
syl = syl.replace(/췰/g, "chwil");
syl = syl.replace(/췸/g, "chwim");
syl = syl.replace(/췹/g, "chwib");
syl = syl.replace(/췻/g, "chwis");
syl = syl.replace(/췽/g, "chwing");
syl = syl.replace(/츄/g, "chyu");
syl = syl.replace(/츈/g, "chyun");
syl = syl.replace(/츌/g, "chyul");
syl = syl.replace(/츔/g, "chyum");
syl = syl.replace(/츙/g, "chyung");
syl = syl.replace(/츠/g, "cheu");
syl = syl.replace(/측/g, "cheuk");
syl = syl.replace(/츤/g, "cheun");
syl = syl.replace(/츨/g, "cheul");
syl = syl.replace(/츰/g, "cheum");
syl = syl.replace(/츱/g, "cheub");
syl = syl.replace(/츳/g, "cheus");
syl = syl.replace(/층/g, "cheung");
syl = syl.replace(/치/g, "chi");
syl = syl.replace(/칙/g, "chik");
syl = syl.replace(/친/g, "chin");
syl = syl.replace(/칟/g, "chid");
syl = syl.replace(/칠/g, "chil");
syl = syl.replace(/칡/g, "chilk");
syl = syl.replace(/침/g, "chim");
syl = syl.replace(/칩/g, "chib");
syl = syl.replace(/칫/g, "chis");
syl = syl.replace(/칭/g, "ching");
syl = syl.replace(/카/g, "ka");
syl = syl.replace(/칵/g, "kak");
syl = syl.replace(/칸/g, "kan");
syl = syl.replace(/칼/g, "kal");
syl = syl.replace(/캄/g, "kam");
syl = syl.replace(/캅/g, "kab");
syl = syl.replace(/캇/g, "kas");
syl = syl.replace(/캉/g, "kang");
syl = syl.replace(/캐/g, "kae");
syl = syl.replace(/캑/g, "kaek");
syl = syl.replace(/캔/g, "kaen");
syl = syl.replace(/캘/g, "kael");
syl = syl.replace(/캠/g, "kaem");
syl = syl.replace(/캡/g, "kaeb");
syl = syl.replace(/캣/g, "kaes");
syl = syl.replace(/캤/g, "kaess");
syl = syl.replace(/캥/g, "kaeng");
syl = syl.replace(/캬/g, "kya");
syl = syl.replace(/캭/g, "kyak");
syl = syl.replace(/컁/g, "kyang");
syl = syl.replace(/커/g, "keo");
syl = syl.replace(/컥/g, "keok");
syl = syl.replace(/컨/g, "keon");
syl = syl.replace(/컫/g, "keod");
syl = syl.replace(/컬/g, "keol");
syl = syl.replace(/컴/g, "keom");
syl = syl.replace(/컵/g, "keob");
syl = syl.replace(/컷/g, "keos");
syl = syl.replace(/컸/g, "keoss");
syl = syl.replace(/컹/g, "keong");
syl = syl.replace(/케/g, "ke");
syl = syl.replace(/켁/g, "kek");
syl = syl.replace(/켄/g, "ken");
syl = syl.replace(/켈/g, "kel");
syl = syl.replace(/켐/g, "kem");
syl = syl.replace(/켑/g, "keb");
syl = syl.replace(/켓/g, "kes");
syl = syl.replace(/켕/g, "keng");
syl = syl.replace(/켜/g, "kyeo");
syl = syl.replace(/켠/g, "kyeon");
syl = syl.replace(/켤/g, "kyeol");
syl = syl.replace(/켬/g, "kyeom");
syl = syl.replace(/켭/g, "kyeob");
syl = syl.replace(/켯/g, "kyeos");
syl = syl.replace(/켰/g, "kyeoss");
syl = syl.replace(/켱/g, "kyeong");
syl = syl.replace(/켸/g, "kye");
syl = syl.replace(/코/g, "ko");
syl = syl.replace(/콕/g, "kok");
syl = syl.replace(/콘/g, "kon");
syl = syl.replace(/콜/g, "kol");
syl = syl.replace(/콤/g, "kom");
syl = syl.replace(/콥/g, "kob");
syl = syl.replace(/콧/g, "kos");
syl = syl.replace(/콩/g, "kong");
syl = syl.replace(/콰/g, "kwa");
syl = syl.replace(/콱/g, "kwak");
syl = syl.replace(/콴/g, "kwan");
syl = syl.replace(/콸/g, "kwal");
syl = syl.replace(/쾀/g, "kwam");
syl = syl.replace(/쾅/g, "kwang");
syl = syl.replace(/쾌/g, "kwae");
syl = syl.replace(/쾡/g, "kwaeng");
syl = syl.replace(/쾨/g, "kwe");
syl = syl.replace(/쾰/g, "kwel");
syl = syl.replace(/쿄/g, "kyo");
syl = syl.replace(/쿠/g, "ku");
syl = syl.replace(/쿡/g, "kuk");
syl = syl.replace(/쿤/g, "kun");
syl = syl.replace(/쿨/g, "kul");
syl = syl.replace(/쿰/g, "kum");
syl = syl.replace(/쿱/g, "kub");
syl = syl.replace(/쿳/g, "kus");
syl = syl.replace(/쿵/g, "kung");
syl = syl.replace(/쿼/g, "kweo");
syl = syl.replace(/퀀/g, "kweon");
syl = syl.replace(/퀄/g, "kweol");
syl = syl.replace(/퀑/g, "kweong");
syl = syl.replace(/퀘/g, "kwe");
syl = syl.replace(/퀭/g, "kweng");
syl = syl.replace(/퀴/g, "kwi");
syl = syl.replace(/퀵/g, "kwik");
syl = syl.replace(/퀸/g, "kwin");
syl = syl.replace(/퀼/g, "kwil");
syl = syl.replace(/큄/g, "kwim");
syl = syl.replace(/큅/g, "kwib");
syl = syl.replace(/큇/g, "kwis");
syl = syl.replace(/큉/g, "kwing");
syl = syl.replace(/큐/g, "kyu");
syl = syl.replace(/큔/g, "kyun");
syl = syl.replace(/큘/g, "kyul");
syl = syl.replace(/큠/g, "kyum");
syl = syl.replace(/크/g, "keu");
syl = syl.replace(/큭/g, "keuk");
syl = syl.replace(/큰/g, "keun");
syl = syl.replace(/클/g, "keul");
syl = syl.replace(/큼/g, "keum");
syl = syl.replace(/큽/g, "keub");
syl = syl.replace(/킁/g, "keung");
syl = syl.replace(/키/g, "ki");
syl = syl.replace(/킥/g, "kik");
syl = syl.replace(/킨/g, "kin");
syl = syl.replace(/킬/g, "kil");
syl = syl.replace(/킴/g, "kim");
syl = syl.replace(/킵/g, "kib");
syl = syl.replace(/킷/g, "kis");
syl = syl.replace(/킹/g, "king");
syl = syl.replace(/타/g, "ta");
syl = syl.replace(/탁/g, "tak");
syl = syl.replace(/탄/g, "tan");
syl = syl.replace(/탈/g, "tal");
syl = syl.replace(/탉/g, "talk");
syl = syl.replace(/탐/g, "tam");
syl = syl.replace(/탑/g, "tab");
syl = syl.replace(/탓/g, "tas");
syl = syl.replace(/탔/g, "tass");
syl = syl.replace(/탕/g, "tang");
syl = syl.replace(/태/g, "tae");
syl = syl.replace(/택/g, "taek");
syl = syl.replace(/탠/g, "taen");
syl = syl.replace(/탤/g, "tael");
syl = syl.replace(/탬/g, "taem");
syl = syl.replace(/탭/g, "taeb");
syl = syl.replace(/탯/g, "taes");
syl = syl.replace(/탰/g, "taess");
syl = syl.replace(/탱/g, "taeng");
syl = syl.replace(/탸/g, "tya");
syl = syl.replace(/턍/g, "tyang");
syl = syl.replace(/터/g, "teo");
syl = syl.replace(/턱/g, "teok");
syl = syl.replace(/턴/g, "teon");
syl = syl.replace(/털/g, "teol");
syl = syl.replace(/턺/g, "teolm");
syl = syl.replace(/텀/g, "teom");
syl = syl.replace(/텁/g, "teob");
syl = syl.replace(/텃/g, "teos");
syl = syl.replace(/텄/g, "teoss");
syl = syl.replace(/텅/g, "teong");
syl = syl.replace(/테/g, "te");
syl = syl.replace(/텍/g, "tek");
syl = syl.replace(/텐/g, "ten");
syl = syl.replace(/텔/g, "tel");
syl = syl.replace(/템/g, "tem");
syl = syl.replace(/텝/g, "teb");
syl = syl.replace(/텟/g, "tes");
syl = syl.replace(/텡/g, "teng");
syl = syl.replace(/텨/g, "tyeo");
syl = syl.replace(/텬/g, "tyeon");
syl = syl.replace(/텼/g, "tyeoss");
syl = syl.replace(/톄/g, "tye");
syl = syl.replace(/톈/g, "tyen");
syl = syl.replace(/토/g, "to");
syl = syl.replace(/톡/g, "tok");
syl = syl.replace(/톤/g, "ton");
syl = syl.replace(/톨/g, "tol");
syl = syl.replace(/톰/g, "tom");
syl = syl.replace(/톱/g, "tob");
syl = syl.replace(/톳/g, "tos");
syl = syl.replace(/통/g, "tong");
syl = syl.replace(/톺/g, "top");
syl = syl.replace(/톼/g, "twa");
syl = syl.replace(/퇀/g, "twan");
syl = syl.replace(/퇘/g, "twae");
syl = syl.replace(/퇴/g, "twe");
syl = syl.replace(/퇸/g, "twen");
syl = syl.replace(/툇/g, "twes");
syl = syl.replace(/툉/g, "tweng");
syl = syl.replace(/툐/g, "tyo");
syl = syl.replace(/투/g, "tu");
syl = syl.replace(/툭/g, "tuk");
syl = syl.replace(/툰/g, "tun");
syl = syl.replace(/툴/g, "tul");
syl = syl.replace(/툼/g, "tum");
syl = syl.replace(/툽/g, "tub");
syl = syl.replace(/툿/g, "tus");
syl = syl.replace(/퉁/g, "tung");
syl = syl.replace(/퉈/g, "tweo");
syl = syl.replace(/퉜/g, "tweoss");
syl = syl.replace(/퉤/g, "twe");
syl = syl.replace(/튀/g, "twi");
syl = syl.replace(/튁/g, "twik");
syl = syl.replace(/튄/g, "twin");
syl = syl.replace(/튈/g, "twil");
syl = syl.replace(/튐/g, "twim");
syl = syl.replace(/튑/g, "twib");
syl = syl.replace(/튕/g, "twing");
syl = syl.replace(/튜/g, "tyu");
syl = syl.replace(/튠/g, "tyun");
syl = syl.replace(/튤/g, "tyul");
syl = syl.replace(/튬/g, "tyum");
syl = syl.replace(/튱/g, "tyung");
syl = syl.replace(/트/g, "teu");
syl = syl.replace(/특/g, "teuk");
syl = syl.replace(/튼/g, "teun");
syl = syl.replace(/튿/g, "teud");
syl = syl.replace(/틀/g, "teul");
syl = syl.replace(/틂/g, "teulm");
syl = syl.replace(/틈/g, "teum");
syl = syl.replace(/틉/g, "teub");
syl = syl.replace(/틋/g, "teus");
syl = syl.replace(/틔/g, "ti");
syl = syl.replace(/틘/g, "tuin");
syl = syl.replace(/틜/g, "tuil");
syl = syl.replace(/틤/g, "tuim");
syl = syl.replace(/틥/g, "tuib");
syl = syl.replace(/티/g, "ti");
syl = syl.replace(/틱/g, "tik");
syl = syl.replace(/틴/g, "tin");
syl = syl.replace(/틸/g, "til");
syl = syl.replace(/팀/g, "tim");
syl = syl.replace(/팁/g, "tib");
syl = syl.replace(/팃/g, "tis");
syl = syl.replace(/팅/g, "ting");
syl = syl.replace(/파/g, "pa");
syl = syl.replace(/팍/g, "pak");
syl = syl.replace(/팎/g, "pakk");
syl = syl.replace(/판/g, "pan");
syl = syl.replace(/팔/g, "pal");
syl = syl.replace(/팖/g, "palm");
syl = syl.replace(/팜/g, "pam");
syl = syl.replace(/팝/g, "pab");
syl = syl.replace(/팟/g, "pas");
syl = syl.replace(/팠/g, "pass");
syl = syl.replace(/팡/g, "pang");
syl = syl.replace(/팥/g, "pat");
syl = syl.replace(/패/g, "pae");
syl = syl.replace(/팩/g, "paek");
syl = syl.replace(/팬/g, "paen");
syl = syl.replace(/팰/g, "pael");
syl = syl.replace(/팸/g, "paem");
syl = syl.replace(/팹/g, "paeb");
syl = syl.replace(/팻/g, "paes");
syl = syl.replace(/팼/g, "paess");
syl = syl.replace(/팽/g, "paeng");
syl = syl.replace(/퍄/g, "pya");
syl = syl.replace(/퍅/g, "pyak");
syl = syl.replace(/퍼/g, "peo");
syl = syl.replace(/퍽/g, "peok");
syl = syl.replace(/펀/g, "peon");
syl = syl.replace(/펄/g, "peol");
syl = syl.replace(/펌/g, "peom");
syl = syl.replace(/펍/g, "peob");
syl = syl.replace(/펏/g, "peos");
syl = syl.replace(/펐/g, "peoss");
syl = syl.replace(/펑/g, "peong");
syl = syl.replace(/페/g, "pe");
syl = syl.replace(/펙/g, "pek");
syl = syl.replace(/펜/g, "pen");
syl = syl.replace(/펠/g, "pel");
syl = syl.replace(/펨/g, "pem");
syl = syl.replace(/펩/g, "peb");
syl = syl.replace(/펫/g, "pes");
syl = syl.replace(/펭/g, "peng");
syl = syl.replace(/펴/g, "pyeo");
syl = syl.replace(/편/g, "pyeon");
syl = syl.replace(/펼/g, "pyeol");
syl = syl.replace(/폄/g, "pyeom");
syl = syl.replace(/폅/g, "pyeob");
syl = syl.replace(/폈/g, "pyeoss");
syl = syl.replace(/평/g, "pyeong");
syl = syl.replace(/폐/g, "pye");
syl = syl.replace(/폘/g, "pyel");
syl = syl.replace(/폡/g, "pyeb");
syl = syl.replace(/폣/g, "pyes");
syl = syl.replace(/포/g, "po");
syl = syl.replace(/폭/g, "pok");
syl = syl.replace(/폰/g, "pon");
syl = syl.replace(/폴/g, "pol");
syl = syl.replace(/폼/g, "pom");
syl = syl.replace(/폽/g, "pob");
syl = syl.replace(/폿/g, "pos");
syl = syl.replace(/퐁/g, "pong");
syl = syl.replace(/퐈/g, "pwa");
syl = syl.replace(/퐝/g, "pwang");
syl = syl.replace(/푀/g, "pwe");
syl = syl.replace(/푄/g, "pwen");
syl = syl.replace(/표/g, "pyo");
syl = syl.replace(/푠/g, "pyon");
syl = syl.replace(/푤/g, "pyol");
syl = syl.replace(/푭/g, "pyob");
syl = syl.replace(/푯/g, "pyos");
syl = syl.replace(/푸/g, "pu");
syl = syl.replace(/푹/g, "puk");
syl = syl.replace(/푼/g, "pun");
syl = syl.replace(/푿/g, "pud");
syl = syl.replace(/풀/g, "pul");
syl = syl.replace(/풂/g, "pulm");
syl = syl.replace(/품/g, "pum");
syl = syl.replace(/풉/g, "pub");
syl = syl.replace(/풋/g, "pus");
syl = syl.replace(/풍/g, "pung");
syl = syl.replace(/풔/g, "pweo");
syl = syl.replace(/풩/g, "pweong");
syl = syl.replace(/퓌/g, "pwi");
syl = syl.replace(/퓐/g, "pwin");
syl = syl.replace(/퓔/g, "pwil");
syl = syl.replace(/퓜/g, "pwim");
syl = syl.replace(/퓟/g, "pwis");
syl = syl.replace(/퓨/g, "pyu");
syl = syl.replace(/퓬/g, "pyun");
syl = syl.replace(/퓰/g, "pyul");
syl = syl.replace(/퓸/g, "pyum");
syl = syl.replace(/퓻/g, "pyus");
syl = syl.replace(/퓽/g, "pyung");
syl = syl.replace(/프/g, "peu");
syl = syl.replace(/픈/g, "peun");
syl = syl.replace(/플/g, "peul");
syl = syl.replace(/픔/g, "peum");
syl = syl.replace(/픕/g, "peub");
syl = syl.replace(/픗/g, "peus");
syl = syl.replace(/피/g, "pi");
syl = syl.replace(/픽/g, "pik");
syl = syl.replace(/핀/g, "pin");
syl = syl.replace(/필/g, "pil");
syl = syl.replace(/핌/g, "pim");
syl = syl.replace(/핍/g, "pib");
syl = syl.replace(/핏/g, "pis");
syl = syl.replace(/핑/g, "ping");
syl = syl.replace(/하/g, "ha");
syl = syl.replace(/학/g, "hak");
syl = syl.replace(/한/g, "han");
syl = syl.replace(/할/g, "hal");
syl = syl.replace(/핥/g, "halt");
syl = syl.replace(/함/g, "ham");
syl = syl.replace(/합/g, "hab");
syl = syl.replace(/핫/g, "has");
syl = syl.replace(/항/g, "hang");
syl = syl.replace(/해/g, "hae");
syl = syl.replace(/핵/g, "haek");
syl = syl.replace(/핸/g, "haen");
syl = syl.replace(/핼/g, "hael");
syl = syl.replace(/햄/g, "haem");
syl = syl.replace(/햅/g, "haeb");
syl = syl.replace(/햇/g, "haes");
syl = syl.replace(/했/g, "haess");
syl = syl.replace(/행/g, "haeng");
syl = syl.replace(/햐/g, "hya");
syl = syl.replace(/향/g, "hyang");
syl = syl.replace(/허/g, "heo");
syl = syl.replace(/헉/g, "heok");
syl = syl.replace(/헌/g, "heon");
syl = syl.replace(/헐/g, "heol");
syl = syl.replace(/헒/g, "heolm");
syl = syl.replace(/험/g, "heom");
syl = syl.replace(/헙/g, "heob");
syl = syl.replace(/헛/g, "heos");
syl = syl.replace(/헝/g, "heong");
syl = syl.replace(/헤/g, "he");
syl = syl.replace(/헥/g, "hek");
syl = syl.replace(/헨/g, "hen");
syl = syl.replace(/헬/g, "hel");
syl = syl.replace(/헴/g, "hem");
syl = syl.replace(/헵/g, "heb");
syl = syl.replace(/헷/g, "hes");
syl = syl.replace(/헹/g, "heng");
syl = syl.replace(/혀/g, "hyeo");
syl = syl.replace(/혁/g, "hyeok");
syl = syl.replace(/현/g, "hyeon");
syl = syl.replace(/혈/g, "hyeol");
syl = syl.replace(/혐/g, "hyeom");
syl = syl.replace(/협/g, "hyeob");
syl = syl.replace(/혓/g, "hyeos");
syl = syl.replace(/혔/g, "hyeoss");
syl = syl.replace(/형/g, "hyeong");
syl = syl.replace(/혜/g, "hye");
syl = syl.replace(/혠/g, "hyen");
syl = syl.replace(/혤/g, "hyel");
syl = syl.replace(/혭/g, "hyeb");
syl = syl.replace(/호/g, "ho");
syl = syl.replace(/혹/g, "hok");
syl = syl.replace(/혼/g, "hon");
syl = syl.replace(/홀/g, "hol");
syl = syl.replace(/홅/g, "holt");
syl = syl.replace(/홈/g, "hom");
syl = syl.replace(/홉/g, "hob");
syl = syl.replace(/홋/g, "hos");
syl = syl.replace(/홍/g, "hong");
syl = syl.replace(/홑/g, "hot");
syl = syl.replace(/화/g, "hwa");
syl = syl.replace(/확/g, "hwak");
syl = syl.replace(/환/g, "hwan");
syl = syl.replace(/활/g, "hwal");
syl = syl.replace(/홧/g, "hwas");
syl = syl.replace(/황/g, "hwang");
syl = syl.replace(/홰/g, "hwae");
syl = syl.replace(/홱/g, "hwaek");
syl = syl.replace(/홴/g, "hwaen");
syl = syl.replace(/횃/g, "hwaes");
syl = syl.replace(/횅/g, "hwaeng");
syl = syl.replace(/회/g, "hwe");
syl = syl.replace(/획/g, "hwek");
syl = syl.replace(/횐/g, "hwen");
syl = syl.replace(/횔/g, "hwel");
syl = syl.replace(/횝/g, "hweb");
syl = syl.replace(/횟/g, "hwes");
syl = syl.replace(/횡/g, "hweng");
syl = syl.replace(/효/g, "hyo");
syl = syl.replace(/횬/g, "hyon");
syl = syl.replace(/횰/g, "hyol");
syl = syl.replace(/횹/g, "hyob");
syl = syl.replace(/횻/g, "hyos");
syl = syl.replace(/후/g, "hu");
syl = syl.replace(/훅/g, "huk");
syl = syl.replace(/훈/g, "hun");
syl = syl.replace(/훌/g, "hul");
syl = syl.replace(/훑/g, "hult");
syl = syl.replace(/훔/g, "hum");
syl = syl.replace(/훗/g, "hus");
syl = syl.replace(/훙/g, "hung");
syl = syl.replace(/훠/g, "hweo");
syl = syl.replace(/훤/g, "hweon");
syl = syl.replace(/훨/g, "hweol");
syl = syl.replace(/훰/g, "hweom");
syl = syl.replace(/훵/g, "hweong");
syl = syl.replace(/훼/g, "hwe");
syl = syl.replace(/훽/g, "hwek");
syl = syl.replace(/휀/g, "hwen");
syl = syl.replace(/휄/g, "hwel");
syl = syl.replace(/휑/g, "hweng");
syl = syl.replace(/휘/g, "hwi");
syl = syl.replace(/휙/g, "hwik");
syl = syl.replace(/휜/g, "hwin");
syl = syl.replace(/휠/g, "hwil");
syl = syl.replace(/휨/g, "hwim");
syl = syl.replace(/휩/g, "hwip");
syl = syl.replace(/휫/g, "hwis");
syl = syl.replace(/휭/g, "hwing");
syl = syl.replace(/휴/g, "hyu");
syl = syl.replace(/휵/g, "hyuk");
syl = syl.replace(/휸/g, "hyun");
syl = syl.replace(/휼/g, "hyul");
syl = syl.replace(/흄/g, "hyum");
syl = syl.replace(/흇/g, "hyus");
syl = syl.replace(/흉/g, "hyung");
syl = syl.replace(/흐/g, "heu");
syl = syl.replace(/흑/g, "heuk");
syl = syl.replace(/흔/g, "heun");
syl = syl.replace(/흖/g, "heunh");
syl = syl.replace(/흗/g, "heud");
syl = syl.replace(/흘/g, "heul");
syl = syl.replace(/흙/g, "heulk");
syl = syl.replace(/흠/g, "heum");
syl = syl.replace(/흡/g, "heub");
syl = syl.replace(/흣/g, "heus");
syl = syl.replace(/흥/g, "heung");
syl = syl.replace(/흩/g, "heut");
syl = syl.replace(/희/g, "hi");
syl = syl.replace(/흰/g, "hin");
syl = syl.replace(/흴/g, "hil");
syl = syl.replace(/흼/g, "him");
syl = syl.replace(/흽/g, "hib");
syl = syl.replace(/힁/g, "hing");
syl = syl.replace(/히/g, "hi");
syl = syl.replace(/힉/g, "hik");
syl = syl.replace(/힌/g, "hin");
syl = syl.replace(/힐/g, "hil");
syl = syl.replace(/힘/g, "him");
syl = syl.replace(/힙/g, "hib");
syl = syl.replace(/힛/g, "his");
syl = syl.replace(/힝/g, "hing");

// ga
syl = syl.replace(/gakh/g, "gak");
syl = syl.replace(/gakn/g, "gang");
syl = syl.replace(/gakr/g, "gagn");
syl = syl.replace(/gakg/g, "gakk");
syl = syl.replace(/gakm/g, "gagm");

syl = syl.replace(/gand/g, "gand");
syl = syl.replace(/ganr/g, "gall");

syl = syl.replace(/gadh/g, "gat");
syl = syl.replace(/gadg/g, "gatg");
syl = syl.replace(/gadd/g, "gatt");
syl = syl.replace(/gadm/g, "gatm");

syl = syl.replace(/galn/g, "gall");
syl = syl.replace(/galr/g, "gall");

syl = syl.replace(/gamr/g, "gamm");
syl = syl.replace(/gaml/g, "gamm");

syl = syl.replace(/gaph/g, "gap");
syl = syl.replace(/gapg/g, "gabg");
syl = syl.replace(/gapn/g, "gamn");
syl = syl.replace(/gapr/g, "gamn");
syl = syl.replace(/gapm/g, "gamm");

syl = syl.replace(/gash/g, "gat");
syl = syl.replace(/gasg/g, "gatg");
syl = syl.replace(/gasn/g, "gatn");
syl = syl.replace(/gasd/g, "gatt");
syl = syl.replace(/gasm/g, "ganm");
syl = syl.replace(/gasb/g, "gatb");
syl = syl.replace(/gasshi/g, "gatshi");

syl = syl.replace(/gassn/g, "gann");
syl = syl.replace(/gassd/g, "gatt");
syl = syl.replace(/gassj/g, "gatj");

syl = syl.replace(/gangr/g, "gangn");

syl = syl.replace(/gajh/g, "gatj");
syl = syl.replace(/gajg/g, "gatg");
syl = syl.replace(/gajn/g, "gatn");
syl = syl.replace(/gajd/g, "gatt");
syl = syl.replace(/gajm/g, "gatm");

syl = syl.replace(/gachh/g, "gatj");
syl = syl.replace(/gachg/g, "gatg");
syl = syl.replace(/gachn/g, "gatn");
syl = syl.replace(/gachd/g, "gatt");
syl = syl.replace(/gachm/g, "gatm");

syl = syl.replace(/gath/g, "gat");
syl = syl.replace(/gatd/g, "gatt");

syl = syl.replace(/gaph/g, "gap");

syl = syl.replace(/gahg/g, "gahk");
syl = syl.replace(/gahr/g, "gar");

//gae
syl = syl.replace(/gaekh/g, "gaek");
syl = syl.replace(/gaekn/g, "gaeng");
syl = syl.replace(/gaekr/g, "gaegn");
syl = syl.replace(/gaekg/g, "gaekk");
syl = syl.replace(/gaekm/g, "gaegm");

syl = syl.replace(/gaend/g, "gaend");
syl = syl.replace(/gaenr/g, "gaell");

syl = syl.replace(/gaedh/g, "gaedt");
syl = syl.replace(/gaedg/g, "gaetg");
syl = syl.replace(/gaedd/g, "gaett");
syl = syl.replace(/gaedm/g, "gaetm");

syl = syl.replace(/gaeln/g, "gaell");
syl = syl.replace(/gaelr/g, "gaell");

syl = syl.replace(/gaemr/g, "gaemm");
syl = syl.replace(/gaeml/g, "gaemm");

syl = syl.replace(/gaeph/g, "gaep");
syl = syl.replace(/gaepg/g, "gaebg");
syl = syl.replace(/gaepn/g, "gaemn");
syl = syl.replace(/gaepr/g, "gaemn");
syl = syl.replace(/gaepm/g, "gaemm");

syl = syl.replace(/gaesh/g, "gaet");
syl = syl.replace(/gaesg/g, "gaetg");
syl = syl.replace(/gaesn/g, "gaetn");
syl = syl.replace(/gaesd/g, "gaett");
syl = syl.replace(/gaesm/g, "gaenm");
syl = syl.replace(/gaesb/g, "gaetb");
syl = syl.replace(/gaesshi/g, "gaetshi");

syl = syl.replace(/gaessn/g, "gaenn");
syl = syl.replace(/gaessd/g, "gaett");
syl = syl.replace(/gaessj/g, "gaetj");

syl = syl.replace(/gaengr/g, "gaengn");

syl = syl.replace(/gaejh/g, "gaetj");
syl = syl.replace(/gaejg/g, "gaetg");
syl = syl.replace(/gaejn/g, "gaetn");
syl = syl.replace(/gaejd/g, "gaett");
syl = syl.replace(/gaejm/g, "gaetm");

syl = syl.replace(/gaechh/g, "gaetj");
syl = syl.replace(/gaechg/g, "gaetg");
syl = syl.replace(/gaechn/g, "gaetn");
syl = syl.replace(/gaechd/g, "gaett");
syl = syl.replace(/gaechm/g, "gaetm");

syl = syl.replace(/gaeth/g, "gaet");
syl = syl.replace(/gaetd/g, "gaett");

syl = syl.replace(/gaeph/g, "gaep");

syl = syl.replace(/gaehg/g, "gaehk");
syl = syl.replace(/gaehr/g, "gaer");


//gya
syl = syl.replace(/gyakh/g, "gyak");
syl = syl.replace(/gyakn/g, "gyang");
syl = syl.replace(/gyakr/g, "gyagn");
syl = syl.replace(/gyakg/g, "gyakk");
syl = syl.replace(/gyakm/g, "gyagm");

syl = syl.replace(/gyand/g, "gyand");
syl = syl.replace(/gyanr/g, "gyall");

syl = syl.replace(/gyadh/g, "gyat");
syl = syl.replace(/gyadg/g, "gyatg");
syl = syl.replace(/gyadd/g, "gyatt");
syl = syl.replace(/gyadm/g, "gyatm");

syl = syl.replace(/gyaln/g, "gyall");
syl = syl.replace(/gyalr/g, "gyall");

syl = syl.replace(/gyamr/g, "gyamm");
syl = syl.replace(/gyaml/g, "gyamm");

syl = syl.replace(/gyaph/g, "gyap");
syl = syl.replace(/gyapg/g, "gyabg");
syl = syl.replace(/gyapn/g, "gyamn");
syl = syl.replace(/gyapr/g, "gyamn");
syl = syl.replace(/gyapm/g, "gyamm");

syl = syl.replace(/gyash/g, "gyat");
syl = syl.replace(/gyasg/g, "gyatg");
syl = syl.replace(/gyasn/g, "gyatn");
syl = syl.replace(/gyasd/g, "gyatt");
syl = syl.replace(/gyasm/g, "gyanm");
syl = syl.replace(/gyasb/g, "gyatb");
syl = syl.replace(/gyasshi/g, "gyatshi");

syl = syl.replace(/gyassn/g, "gyann");
syl = syl.replace(/gyassd/g, "gyatt");
syl = syl.replace(/gyassj/g, "gyatj");

syl = syl.replace(/gyangr/g, "gyangn");

syl = syl.replace(/gyajh/g, "gyatj");
syl = syl.replace(/gyajg/g, "gyatg");
syl = syl.replace(/gyajn/g, "gyatn");
syl = syl.replace(/gyajd/g, "gyatt");
syl = syl.replace(/gyajm/g, "gyatm");

syl = syl.replace(/gyachh/g, "gyatj");
syl = syl.replace(/gyachg/g, "gyatg");
syl = syl.replace(/gyachn/g, "gyatn");
syl = syl.replace(/gyachd/g, "gyatt");
syl = syl.replace(/gyachm/g, "gyatm");

syl = syl.replace(/gyath/g, "gyat");
syl = syl.replace(/gyatd/g, "gyatt");

syl = syl.replace(/gyaph/g, "gyap");

syl = syl.replace(/gyahg/g, "gyahk");
syl = syl.replace(/gyahr/g, "gyar");

//geo
syl = syl.replace(/geokh/g, "geok");
syl = syl.replace(/geokn/g, "geong");
syl = syl.replace(/geokr/g, "geogn");
syl = syl.replace(/geokg/g, "geokk");
syl = syl.replace(/geokm/g, "geogm");

syl = syl.replace(/geond/g, "geond");
syl = syl.replace(/geonr/g, "geoll");

syl = syl.replace(/geodh/g, "geodt");
syl = syl.replace(/geodg/g, "geotg");
syl = syl.replace(/geodd/g, "geott");
syl = syl.replace(/geodm/g, "geotm");

syl = syl.replace(/geoln/g, "geoll");
syl = syl.replace(/geolr/g, "geoll");

syl = syl.replace(/geomr/g, "geomm");
syl = syl.replace(/geoml/g, "geomm");

syl = syl.replace(/geoph/g, "geop");
syl = syl.replace(/geopg/g, "geobg");
syl = syl.replace(/geopn/g, "geomn");
syl = syl.replace(/geopr/g, "geomn");
syl = syl.replace(/geopm/g, "geomm");

syl = syl.replace(/geosh/g, "geot");
syl = syl.replace(/geosg/g, "geotg");
syl = syl.replace(/geosn/g, "geotn");
syl = syl.replace(/geosd/g, "geott");
syl = syl.replace(/geosm/g, "geonm");
syl = syl.replace(/geosb/g, "geotb");
syl = syl.replace(/geosshi/g, "geotshi");

syl = syl.replace(/geossn/g, "geonn");
syl = syl.replace(/geossd/g, "geott");
syl = syl.replace(/geossj/g, "geotj");

syl = syl.replace(/geongr/g, "geongn");

syl = syl.replace(/geojh/g, "geotj");
syl = syl.replace(/geojg/g, "geotg");
syl = syl.replace(/geojn/g, "geotn");
syl = syl.replace(/geojd/g, "geott");
syl = syl.replace(/geojm/g, "geotm");

syl = syl.replace(/geochh/g, "geotj");
syl = syl.replace(/geochg/g, "geotg");
syl = syl.replace(/geochn/g, "geotn");
syl = syl.replace(/geochd/g, "geott");
syl = syl.replace(/geochm/g, "geotm");

syl = syl.replace(/geoth/g, "geot");
syl = syl.replace(/geotd/g, "geott");

syl = syl.replace(/geoph/g, "geop");

syl = syl.replace(/geohg/g, "geohk");
syl = syl.replace(/geohr/g, "geor");

//ge
	
syl = syl.replace(/gekh/g, "gek");
syl = syl.replace(/gekn/g, "geng");
syl = syl.replace(/gekr/g, "gegn");
syl = syl.replace(/gekg/g, "gekk");
syl = syl.replace(/gekm/g, "gegm");

syl = syl.replace(/gend/g, "gend");
syl = syl.replace(/genr/g, "gell");

syl = syl.replace(/gedh/g, "gedt");
syl = syl.replace(/gedg/g, "getg");
syl = syl.replace(/gedd/g, "gett");
syl = syl.replace(/gedm/g, "getm");

syl = syl.replace(/geln/g, "gell");
syl = syl.replace(/gelr/g, "gell");

syl = syl.replace(/gemr/g, "gemm");
syl = syl.replace(/geml/g, "gemm");

syl = syl.replace(/geph/g, "gep");
syl = syl.replace(/gepg/g, "gebg");
syl = syl.replace(/gepn/g, "gemn");
syl = syl.replace(/gepr/g, "gemn");
syl = syl.replace(/gepm/g, "gemm");

syl = syl.replace(/gesh/g, "get");
syl = syl.replace(/gesg/g, "getg");
syl = syl.replace(/gesn/g, "getn");
syl = syl.replace(/gesd/g, "gett");
syl = syl.replace(/gesm/g, "genm");
syl = syl.replace(/gesb/g, "getb");
syl = syl.replace(/gesshi/g, "getshi");

syl = syl.replace(/gessn/g, "genn");
syl = syl.replace(/gessd/g, "gett");
syl = syl.replace(/gessj/g, "getj");

syl = syl.replace(/gengr/g, "gengn");

syl = syl.replace(/gejh/g, "getj");
syl = syl.replace(/gejg/g, "getg");
syl = syl.replace(/gejn/g, "getn");
syl = syl.replace(/gejd/g, "gett");
syl = syl.replace(/gejm/g, "getm");

syl = syl.replace(/gechh/g, "getj");
syl = syl.replace(/gechg/g, "getg");
syl = syl.replace(/gechn/g, "getn");
syl = syl.replace(/gechd/g, "gett");
syl = syl.replace(/gechm/g, "getm");

syl = syl.replace(/geth/g, "get");
syl = syl.replace(/getd/g, "gett");

syl = syl.replace(/geph/g, "gep");

syl = syl.replace(/gehg/g, "gehk");
syl = syl.replace(/gehr/g, "ger");
	
//gye
syl = syl.replace(/gyekh/g, "gyek");
syl = syl.replace(/gyekn/g, "gyeng");
syl = syl.replace(/gyekr/g, "gyegn");
syl = syl.replace(/gyekg/g, "gyekk");
syl = syl.replace(/gyekm/g, "gyegm");

syl = syl.replace(/gyend/g, "gyend");
syl = syl.replace(/gyenr/g, "gyell");

syl = syl.replace(/gyedh/g, "gyedt");
syl = syl.replace(/gyedg/g, "gyetg");
syl = syl.replace(/gyedd/g, "gyett");
syl = syl.replace(/gyedm/g, "gyetm");

syl = syl.replace(/gyeln/g, "gyell");
syl = syl.replace(/gyelr/g, "gyell");

syl = syl.replace(/gyemr/g, "gyemm");
syl = syl.replace(/gyeml/g, "gyemm");

syl = syl.replace(/gyeph/g, "gyep");
syl = syl.replace(/gyepg/g, "gyebg");
syl = syl.replace(/gyepn/g, "gyemn");
syl = syl.replace(/gyepr/g, "gyemn");
syl = syl.replace(/gyepm/g, "gyemm");

syl = syl.replace(/gyesh/g, "gyet");
syl = syl.replace(/gyesg/g, "gyetg");
syl = syl.replace(/gyesn/g, "gyetn");
syl = syl.replace(/gyesd/g, "gyett");
syl = syl.replace(/gyesm/g, "gyenm");
syl = syl.replace(/gyesb/g, "gyetb");
syl = syl.replace(/gyesshi/g, "gyetshi");

syl = syl.replace(/gyessn/g, "gyenn");
syl = syl.replace(/gyessd/g, "gyett");
syl = syl.replace(/gyessj/g, "gyetj");

syl = syl.replace(/gyengr/g, "gyengn");

syl = syl.replace(/gyejh/g, "gyetj");
syl = syl.replace(/gyejg/g, "gyetg");
syl = syl.replace(/gyejn/g, "gyetn");
syl = syl.replace(/gyejd/g, "gyett");
syl = syl.replace(/gyejm/g, "gyetm");

syl = syl.replace(/gyechh/g, "gyetj");
syl = syl.replace(/gyechg/g, "gyetg");
syl = syl.replace(/gyechn/g, "gyetn");
syl = syl.replace(/gyechd/g, "gyett");
syl = syl.replace(/gyechm/g, "gyetm");

syl = syl.replace(/gyeth/g, "gyet");
syl = syl.replace(/gyetd/g, "gyett");

syl = syl.replace(/gyeph/g, "gyep");

syl = syl.replace(/gyehg/g, "gyehk");
syl = syl.replace(/gyehr/g, "gyer");

//go
syl = syl.replace(/gokh/g, "gok");
syl = syl.replace(/gokn/g, "gong");
syl = syl.replace(/gokr/g, "gogn");
syl = syl.replace(/gokg/g, "gokk");
syl = syl.replace(/gokm/g, "gogm");

syl = syl.replace(/gond/g, "gond");
syl = syl.replace(/gonr/g, "goll");

syl = syl.replace(/godh/g, "godt");
syl = syl.replace(/godg/g, "gotg");
syl = syl.replace(/godd/g, "gott");
syl = syl.replace(/godm/g, "gotm");

syl = syl.replace(/goln/g, "goll");
syl = syl.replace(/golr/g, "goll");

syl = syl.replace(/gomr/g, "gomm");
syl = syl.replace(/goml/g, "gomm");

syl = syl.replace(/goph/g, "gop");
syl = syl.replace(/gopg/g, "gobg");
syl = syl.replace(/gopn/g, "gomn");
syl = syl.replace(/gopr/g, "gomn");
syl = syl.replace(/gopm/g, "gomm");

syl = syl.replace(/gos /g, "got");

syl = syl.replace(/gosh/g, "got");
syl = syl.replace(/gosg/g, "gotg");
syl = syl.replace(/gosn/g, "gotn");
syl = syl.replace(/gosd/g, "gott");
syl = syl.replace(/gosm/g, "gonm");
syl = syl.replace(/gosb/g, "gotb");
syl = syl.replace(/gosshi/g, "gotshi");

syl = syl.replace(/gossn/g, "gonn");
syl = syl.replace(/gossd/g, "gott");
syl = syl.replace(/gossj/g, "gotj");

syl = syl.replace(/gongr/g, "gongn");

syl = syl.replace(/gojh/g, "gotj");
syl = syl.replace(/gojg/g, "gotg");
syl = syl.replace(/gojn/g, "gotn");
syl = syl.replace(/gojd/g, "gott");
syl = syl.replace(/gojm/g, "gotm");

syl = syl.replace(/gochh/g, "gotj");
syl = syl.replace(/gochg/g, "gotg");
syl = syl.replace(/gochn/g, "gotn");
syl = syl.replace(/gochd/g, "gott");
syl = syl.replace(/gochm/g, "gotm");

syl = syl.replace(/goth/g, "got");
syl = syl.replace(/gotd/g, "gott");

syl = syl.replace(/goph/g, "gop");

syl = syl.replace(/gohg/g, "gohk");
syl = syl.replace(/gohr/g, "gor");

//gu
syl = syl.replace(/gukh/g, "guk");
syl = syl.replace(/gukn/g, "gung");
syl = syl.replace(/gukr/g, "gugn");
syl = syl.replace(/gukg/g, "gukk");
syl = syl.replace(/gukm/g, "gugm");

syl = syl.replace(/gund/g, "gund");
syl = syl.replace(/gunr/g, "gull");

syl = syl.replace(/gudh/g, "gudt");
syl = syl.replace(/gudg/g, "gutg");
syl = syl.replace(/gudd/g, "gutt");
syl = syl.replace(/gudm/g, "gutm");

syl = syl.replace(/guln/g, "gull");
syl = syl.replace(/gulr/g, "gull");

syl = syl.replace(/gumr/g, "gumm");
syl = syl.replace(/guml/g, "gumm");

syl = syl.replace(/guph/g, "gup");
syl = syl.replace(/gupg/g, "gubg");
syl = syl.replace(/gupn/g, "gumn");
syl = syl.replace(/gupr/g, "gumn");
syl = syl.replace(/gupm/g, "gumm");

syl = syl.replace(/gush/g, "gut");
syl = syl.replace(/gusg/g, "gutg");
syl = syl.replace(/gusn/g, "gutn");
syl = syl.replace(/gusd/g, "gutt");
syl = syl.replace(/gusm/g, "gunm");
syl = syl.replace(/gusb/g, "gutb");
syl = syl.replace(/gusshi/g, "gutshi");

syl = syl.replace(/gussn/g, "gunn");
syl = syl.replace(/gussd/g, "gutt");
syl = syl.replace(/gussj/g, "gutj");

syl = syl.replace(/gungr/g, "gungn");

syl = syl.replace(/gujh/g, "gutj");
syl = syl.replace(/gujg/g, "gutg");
syl = syl.replace(/gujn/g, "gutn");
syl = syl.replace(/gujd/g, "gutt");
syl = syl.replace(/gujm/g, "gutm");

syl = syl.replace(/guchh/g, "gutj");
syl = syl.replace(/guchg/g, "gutg");
syl = syl.replace(/guchn/g, "gutn");
syl = syl.replace(/guchd/g, "gutt");
syl = syl.replace(/guchm/g, "gutm");

syl = syl.replace(/guth/g, "gut");
syl = syl.replace(/gutd/g, "gutt");

syl = syl.replace(/guph/g, "gup");

syl = syl.replace(/guhg/g, "guhk");
syl = syl.replace(/guhr/g, "gur");

//gi
syl = syl.replace(/gikh/g, "gik");
syl = syl.replace(/gikn/g, "ging");
syl = syl.replace(/gikr/g, "gign");
syl = syl.replace(/gikg/g, "gikk");
syl = syl.replace(/gikm/g, "gigm");

syl = syl.replace(/gind/g, "gind");
syl = syl.replace(/ginr/g, "gill");

syl = syl.replace(/gidh/g, "gidt");
syl = syl.replace(/gidg/g, "gitg");
syl = syl.replace(/gidd/g, "gitt");
syl = syl.replace(/gidm/g, "gitm");

syl = syl.replace(/giln/g, "gill");
syl = syl.replace(/gilr/g, "gill");

syl = syl.replace(/gimr/g, "gimm");
syl = syl.replace(/giml/g, "gimm");

syl = syl.replace(/giph/g, "gip");
syl = syl.replace(/gipg/g, "gibg");
syl = syl.replace(/gipn/g, "gimn");
syl = syl.replace(/gipr/g, "gimn");
syl = syl.replace(/gipm/g, "gimm");

syl = syl.replace(/gish/g, "git");
syl = syl.replace(/gisg/g, "gitg");
syl = syl.replace(/gisn/g, "gitn");
syl = syl.replace(/gisd/g, "gitt");
syl = syl.replace(/gism/g, "ginm");
syl = syl.replace(/gisb/g, "gitb");
syl = syl.replace(/gisshi/g, "gitshi");

syl = syl.replace(/gissn/g, "ginn");
syl = syl.replace(/gissd/g, "gitt");
syl = syl.replace(/gissj/g, "gitj");

syl = syl.replace(/gingr/g, "gingn");

syl = syl.replace(/gijh/g, "gitj");
syl = syl.replace(/gijg/g, "gitg");
syl = syl.replace(/gijn/g, "gitn");
syl = syl.replace(/gijd/g, "gitt");
syl = syl.replace(/gijm/g, "gitm");

syl = syl.replace(/gichh/g, "gitj");
syl = syl.replace(/gichg/g, "gitg");
syl = syl.replace(/gichn/g, "gitn");
syl = syl.replace(/gichd/g, "gitt");
syl = syl.replace(/gichm/g, "gitm");

syl = syl.replace(/gith/g, "git");
syl = syl.replace(/gitd/g, "gitt");

syl = syl.replace(/giph/g, "gip");

syl = syl.replace(/gihg/g, "gihk");
syl = syl.replace(/gihr/g, "gir");

//yae
syl = syl.replace(/yaekh/g, "yaek");
syl = syl.replace(/yaekn/g, "yaeng");
syl = syl.replace(/yaekr/g, "yaegn");
syl = syl.replace(/yaekg/g, "yaekk");
syl = syl.replace(/yaekm/g, "yaegm");

syl = syl.replace(/yaend/g, "yaend");
syl = syl.replace(/yaenr/g, "yaell");

syl = syl.replace(/yaedh/g, "yaedt");
syl = syl.replace(/yaedg/g, "yaetg");
syl = syl.replace(/yaedd/g, "yaett");
syl = syl.replace(/yaedm/g, "yaetm");

syl = syl.replace(/yaeln/g, "yaell");
syl = syl.replace(/yaelr/g, "yaell");

syl = syl.replace(/yaemr/g, "yaemm");
syl = syl.replace(/yaeml/g, "yaemm");

syl = syl.replace(/yaeph/g, "yaep");
syl = syl.replace(/yaepg/g, "yaebg");
syl = syl.replace(/yaepn/g, "yaemn");
syl = syl.replace(/yaepr/g, "yaemn");
syl = syl.replace(/yaepm/g, "yaemm");

syl = syl.replace(/yaesh/g, "yaet");
syl = syl.replace(/yaesg/g, "yaetg");
syl = syl.replace(/yaesn/g, "yaetn");
syl = syl.replace(/yaesd/g, "yaett");
syl = syl.replace(/yaesm/g, "yaenm");
syl = syl.replace(/yaesb/g, "yaetb");
syl = syl.replace(/yaesshi/g, "yaetshi");

syl = syl.replace(/yaessn/g, "yaenn");
syl = syl.replace(/yaessd/g, "yaett");
syl = syl.replace(/yaessj/g, "yaetj");

syl = syl.replace(/yaengr/g, "yaengn");

syl = syl.replace(/yaejh/g, "yaetj");
syl = syl.replace(/yaejg/g, "yaetg");
syl = syl.replace(/yaejn/g, "yaetn");
syl = syl.replace(/yaejd/g, "yaett");
syl = syl.replace(/yaejm/g, "yaetm");

syl = syl.replace(/yaechh/g, "yaetj");
syl = syl.replace(/yaechg/g, "yaetg");
syl = syl.replace(/yaechn/g, "yaetn");
syl = syl.replace(/yaechd/g, "yaett");
syl = syl.replace(/yaechm/g, "yaetm");

syl = syl.replace(/yaeth/g, "yaet");
syl = syl.replace(/yaetd/g, "yaett");

syl = syl.replace(/yaeph/g, "yaep");

syl = syl.replace(/yaehg/g, "yaehk");
syl = syl.replace(/yaehr/g, "yaer");
	
	
//yeo
syl = syl.replace(/yeokh/g, "yeok");
syl = syl.replace(/yeokn/g, "yeong");
syl = syl.replace(/yeokr/g, "yeogn");
syl = syl.replace(/yeokg/g, "yeokk");
syl = syl.replace(/yeokm/g, "yeogm");

syl = syl.replace(/yeond/g, "yeond");
syl = syl.replace(/yeonr/g, "yeoll");

syl = syl.replace(/yeodh/g, "yeodt");
syl = syl.replace(/yeodg/g, "yeotg");
syl = syl.replace(/yeodd/g, "yeott");
syl = syl.replace(/yeodm/g, "yeotm");

syl = syl.replace(/yeoln/g, "yeoll");
syl = syl.replace(/yeolr/g, "yeoll");

syl = syl.replace(/yeomr/g, "yeomm");
syl = syl.replace(/yeoml/g, "yeomm");

syl = syl.replace(/yeoph/g, "yeop");
syl = syl.replace(/yeopg/g, "yeobg");
syl = syl.replace(/yeopn/g, "yeomn");
syl = syl.replace(/yeopr/g, "yeomn");
syl = syl.replace(/yeopm/g, "yeomm");

syl = syl.replace(/yeosh/g, "yeot");
syl = syl.replace(/yeosg/g, "yeotg");
syl = syl.replace(/yeosn/g, "yeotn");
syl = syl.replace(/yeosd/g, "yeott");
syl = syl.replace(/yeosm/g, "yeonm");
syl = syl.replace(/yeosb/g, "yeotb");
syl = syl.replace(/yeosshi/g, "yeotshi");

syl = syl.replace(/yeossn/g, "yeonn");
syl = syl.replace(/yeossd/g, "yeott");
syl = syl.replace(/yeossj/g, "yeotj");

syl = syl.replace(/yeongr/g, "yeongn");

syl = syl.replace(/yeojh/g, "yeotj");
syl = syl.replace(/yeojg/g, "yeotg");
syl = syl.replace(/yeojn/g, "yeotn");
syl = syl.replace(/yeojd/g, "yeott");
syl = syl.replace(/yeojm/g, "yeotm");

syl = syl.replace(/yeochh/g, "yeotj");
syl = syl.replace(/yeochg/g, "yeotg");
syl = syl.replace(/yeochn/g, "yeotn");
syl = syl.replace(/yeochd/g, "yeott");
syl = syl.replace(/yeochm/g, "yeotm");

syl = syl.replace(/yeoth/g, "yeot");
syl = syl.replace(/yeotd/g, "yeott");

syl = syl.replace(/yeoph/g, "yeop");

syl = syl.replace(/yeohg/g, "yeohk");
syl = syl.replace(/yeohr/g, "yeor");

//wa
syl = syl.replace(/wakh/g, "wak");
syl = syl.replace(/wakn/g, "wang");
syl = syl.replace(/wakr/g, "wagn");
syl = syl.replace(/wakg/g, "wakk");
syl = syl.replace(/wakm/g, "wagm");

syl = syl.replace(/wand/g, "wand");
syl = syl.replace(/wanr/g, "wall");
syl = syl.replace(/wanga/g, "wakka");
syl = syl.replace(/wangi/g, "wakki");
syl = syl.replace(/wangu/g, "wakku");
syl = syl.replace(/wange/g, "wakke");
syl = syl.replace(/wango/g, "wakko");
syl = syl.replace(/wangy/g, "wakky");
syl = syl.replace(/wangw/g, "wakkw");

syl = syl.replace(/wadh/g, "wat");
syl = syl.replace(/wadg/g, "watg");
syl = syl.replace(/wadd/g, "watt");
syl = syl.replace(/wadm/g, "watm");

syl = syl.replace(/waln/g, "wall");
syl = syl.replace(/walr/g, "wall");

syl = syl.replace(/wamr/g, "wamm");
syl = syl.replace(/waml/g, "wamm");

syl = syl.replace(/waph/g, "wap");
syl = syl.replace(/wapg/g, "wabg");
syl = syl.replace(/wapn/g, "wamn");
syl = syl.replace(/wapr/g, "wamn");
syl = syl.replace(/wapm/g, "wamm");

syl = syl.replace(/wash/g, "wat");
syl = syl.replace(/wasg/g, "watg");
syl = syl.replace(/wasn/g, "watn");
syl = syl.replace(/wasd/g, "watt");
syl = syl.replace(/wasm/g, "wanm");
syl = syl.replace(/wasb/g, "watb");
syl = syl.replace(/wasshi/g, "watshi");

syl = syl.replace(/wassn/g, "wann");
syl = syl.replace(/wassd/g, "watt");
syl = syl.replace(/wassj/g, "watj");

syl = syl.replace(/wangr/g, "wangn");

syl = syl.replace(/wajh/g, "watj");
syl = syl.replace(/wajg/g, "watg");
syl = syl.replace(/wajn/g, "watn");
syl = syl.replace(/wajd/g, "watt");
syl = syl.replace(/wajm/g, "watm");

syl = syl.replace(/wachh/g, "watj");
syl = syl.replace(/wachg/g, "watg");
syl = syl.replace(/wachn/g, "watn");
syl = syl.replace(/wachd/g, "watt");
syl = syl.replace(/wachm/g, "watm");

syl = syl.replace(/wath/g, "wat");
syl = syl.replace(/watd/g, "watt");

syl = syl.replace(/waph/g, "wap");

syl = syl.replace(/wahg/g, "wahk");
syl = syl.replace(/wahr/g, "war");

//wae
syl = syl.replace(/waekh/g, "waek");
syl = syl.replace(/waekn/g, "waeng");
syl = syl.replace(/waekr/g, "waegn");
syl = syl.replace(/waekg/g, "waekk");
syl = syl.replace(/waekm/g, "waegm");

syl = syl.replace(/waend/g, "waend");
syl = syl.replace(/waenr/g, "waell");

syl = syl.replace(/waedh/g, "waedt");
syl = syl.replace(/waedg/g, "waetg");
syl = syl.replace(/waedd/g, "waett");
syl = syl.replace(/waedm/g, "waetm");

syl = syl.replace(/waeln/g, "waell");
syl = syl.replace(/waelr/g, "waell");

syl = syl.replace(/waemr/g, "waemm");
syl = syl.replace(/waeml/g, "waemm");

syl = syl.replace(/waeph/g, "waep");
syl = syl.replace(/waepg/g, "waebg");
syl = syl.replace(/waepn/g, "waemn");
syl = syl.replace(/waepr/g, "waemn");
syl = syl.replace(/waepm/g, "waemm");

syl = syl.replace(/waesh/g, "waet");
syl = syl.replace(/waesg/g, "waetg");
syl = syl.replace(/waesn/g, "waetn");
syl = syl.replace(/waesd/g, "waett");
syl = syl.replace(/waesm/g, "waenm");
syl = syl.replace(/waesb/g, "waetb");
syl = syl.replace(/waesshi/g, "waetshi");

syl = syl.replace(/waessn/g, "waenn");
syl = syl.replace(/waessd/g, "waett");
syl = syl.replace(/waessj/g, "waetj");

syl = syl.replace(/waengr/g, "waengn");

syl = syl.replace(/waejh/g, "waetj");
syl = syl.replace(/waejg/g, "waetg");
syl = syl.replace(/waejn/g, "waetn");
syl = syl.replace(/waejd/g, "waett");
syl = syl.replace(/waejm/g, "waetm");

syl = syl.replace(/waechh/g, "waetj");
syl = syl.replace(/waechg/g, "waetg");
syl = syl.replace(/waechn/g, "waetn");
syl = syl.replace(/waechd/g, "waett");
syl = syl.replace(/waechm/g, "waetm");

syl = syl.replace(/waeth/g, "waet");
syl = syl.replace(/waetd/g, "waett");

syl = syl.replace(/waeph/g, "waep");

syl = syl.replace(/waehg/g, "waehk");
syl = syl.replace(/waehr/g, "waer");

//wo
syl = syl.replace(/wokh/g, "wok");
syl = syl.replace(/wokn/g, "wong");
syl = syl.replace(/wokr/g, "wogn");
syl = syl.replace(/wokg/g, "wokk");
syl = syl.replace(/wokm/g, "wogm");

syl = syl.replace(/wond/g, "wond");
syl = syl.replace(/wonr/g, "woll");

syl = syl.replace(/wodh/g, "wodt");
syl = syl.replace(/wodg/g, "wotg");
syl = syl.replace(/wodd/g, "wott");
syl = syl.replace(/wodm/g, "wotm");

syl = syl.replace(/woln/g, "woll");
syl = syl.replace(/wolr/g, "woll");

syl = syl.replace(/womr/g, "womm");
syl = syl.replace(/woml/g, "womm");

syl = syl.replace(/woph/g, "wop");
syl = syl.replace(/wopg/g, "wobg");
syl = syl.replace(/wopn/g, "womn");
syl = syl.replace(/wopr/g, "womn");
syl = syl.replace(/wopm/g, "womm");

syl = syl.replace(/wosh/g, "wot");
syl = syl.replace(/wosg/g, "wotg");
syl = syl.replace(/wosn/g, "wotn");
syl = syl.replace(/wosd/g, "wott");
syl = syl.replace(/wosm/g, "wonm");
syl = syl.replace(/wosb/g, "wotb");
syl = syl.replace(/wosshi/g, "wotshi");

syl = syl.replace(/wossn/g, "wonn");
syl = syl.replace(/wossd/g, "wott");
syl = syl.replace(/wossj/g, "wotj");

syl = syl.replace(/wongr/g, "wongn");

syl = syl.replace(/wojh/g, "wotj");
syl = syl.replace(/wojg/g, "wotg");
syl = syl.replace(/wojn/g, "wotn");
syl = syl.replace(/wojd/g, "wott");
syl = syl.replace(/wojm/g, "wotm");

syl = syl.replace(/wochh/g, "wotj");
syl = syl.replace(/wochg/g, "wotg");
syl = syl.replace(/wochn/g, "wotn");
syl = syl.replace(/wochd/g, "wott");
syl = syl.replace(/wochm/g, "wotm");

syl = syl.replace(/woth/g, "wot");
syl = syl.replace(/wotd/g, "wott");

syl = syl.replace(/woph/g, "wop");

syl = syl.replace(/wohg/g, "wohk");
syl = syl.replace(/wohr/g, "wor");

//we
syl = syl.replace(/wekh/g, "wek");
syl = syl.replace(/wekn/g, "weng");
syl = syl.replace(/wekr/g, "wegn");
syl = syl.replace(/wekg/g, "wekk");
syl = syl.replace(/wekm/g, "wegm");

syl = syl.replace(/wend/g, "wend");
syl = syl.replace(/wenr/g, "well");

syl = syl.replace(/wedh/g, "wedt");
syl = syl.replace(/wedg/g, "wetg");
syl = syl.replace(/wedd/g, "wett");
syl = syl.replace(/wedm/g, "wetm");

syl = syl.replace(/weln/g, "well");
syl = syl.replace(/welr/g, "well");

syl = syl.replace(/wemr/g, "wemm");
syl = syl.replace(/weml/g, "wemm");

syl = syl.replace(/weph/g, "wep");
syl = syl.replace(/wepg/g, "webg");
syl = syl.replace(/wepn/g, "wemn");
syl = syl.replace(/wepr/g, "wemn");
syl = syl.replace(/wepm/g, "wemm");

syl = syl.replace(/wesh/g, "wet");
syl = syl.replace(/wesg/g, "wetg");
syl = syl.replace(/wesn/g, "wetn");
syl = syl.replace(/wesd/g, "wett");
syl = syl.replace(/wesm/g, "wenm");
syl = syl.replace(/wesb/g, "wetb");
syl = syl.replace(/wesshi/g, "wetshi");

syl = syl.replace(/wessn/g, "wenn");
syl = syl.replace(/wessd/g, "wett");
syl = syl.replace(/wessj/g, "wetj");

syl = syl.replace(/wengr/g, "wengn");

syl = syl.replace(/wejh/g, "wetj");
syl = syl.replace(/wejg/g, "wetg");
syl = syl.replace(/wejn/g, "wetn");
syl = syl.replace(/wejd/g, "wett");
syl = syl.replace(/wejm/g, "wetm");

syl = syl.replace(/wechh/g, "wetj");
syl = syl.replace(/wechg/g, "wetg");
syl = syl.replace(/wechn/g, "wetn");
syl = syl.replace(/wechd/g, "wett");
syl = syl.replace(/wechm/g, "wetm");

syl = syl.replace(/weth/g, "wet");
syl = syl.replace(/wetd/g, "wett");

syl = syl.replace(/weph/g, "wep");

syl = syl.replace(/wehg/g, "wehk");
syl = syl.replace(/wehr/g, "wer");
	
//wi
syl = syl.replace(/wikh/g, "wik");
syl = syl.replace(/wikn/g, "wing");
syl = syl.replace(/wikr/g, "wign");
syl = syl.replace(/wikg/g, "wikk");
syl = syl.replace(/wikm/g, "wigm");

syl = syl.replace(/wind/g, "wind");
syl = syl.replace(/winr/g, "will");

syl = syl.replace(/widh/g, "widt");
syl = syl.replace(/widg/g, "witg");
syl = syl.replace(/widd/g, "witt");
syl = syl.replace(/widm/g, "witm");

syl = syl.replace(/wiln/g, "will");
syl = syl.replace(/wilr/g, "will");

syl = syl.replace(/wimr/g, "wimm");
syl = syl.replace(/wiml/g, "wimm");

syl = syl.replace(/wiph/g, "wip");
syl = syl.replace(/wipg/g, "wibg");
syl = syl.replace(/wipn/g, "wimn");
syl = syl.replace(/wipr/g, "wimn");
syl = syl.replace(/wipm/g, "wimm");

syl = syl.replace(/wish/g, "wit");
syl = syl.replace(/wisg/g, "witg");
syl = syl.replace(/wisn/g, "witn");
syl = syl.replace(/wisd/g, "witt");
syl = syl.replace(/wism/g, "winm");
syl = syl.replace(/wisb/g, "witb");
syl = syl.replace(/wisshi/g, "witshi");

syl = syl.replace(/wissn/g, "winn");
syl = syl.replace(/wissd/g, "witt");
syl = syl.replace(/wissj/g, "witj");

syl = syl.replace(/wingr/g, "wingn");

syl = syl.replace(/wijh/g, "witj");
syl = syl.replace(/wijg/g, "witg");
syl = syl.replace(/wijn/g, "witn");
syl = syl.replace(/wijd/g, "witt");
syl = syl.replace(/wijm/g, "witm");

syl = syl.replace(/wichh/g, "witj");
syl = syl.replace(/wichg/g, "witg");
syl = syl.replace(/wichn/g, "witn");
syl = syl.replace(/wichd/g, "witt");
syl = syl.replace(/wichm/g, "witm");

//syl = syl.replace(/with/g, "wit"); english word "with"
syl = syl.replace(/witd/g, "witt");

syl = syl.replace(/wiph/g, "wip");

syl = syl.replace(/wihg/g, "wihk");
syl = syl.replace(/wihr/g, "wir");
	
//yu
syl = syl.replace(/yukh/g, "yuk");
syl = syl.replace(/yukn/g, "yung");
syl = syl.replace(/yukr/g, "yugn");
syl = syl.replace(/yukg/g, "yukk");
syl = syl.replace(/yukm/g, "yugm");

syl = syl.replace(/yund/g, "yund");
syl = syl.replace(/yunr/g, "yull");

syl = syl.replace(/yudh/g, "yudt");
syl = syl.replace(/yudg/g, "yutg");
syl = syl.replace(/yudd/g, "yutt");
syl = syl.replace(/yudm/g, "yutm");

syl = syl.replace(/yuln/g, "yull");
syl = syl.replace(/yulr/g, "yull");

syl = syl.replace(/yumr/g, "yumm");
syl = syl.replace(/yuml/g, "yumm");

syl = syl.replace(/yuph/g, "yup");
syl = syl.replace(/yupg/g, "yubg");
syl = syl.replace(/yupn/g, "yumn");
syl = syl.replace(/yupr/g, "yumn");
syl = syl.replace(/yupm/g, "yumm");

syl = syl.replace(/yush/g, "yut");
syl = syl.replace(/yusg/g, "yutg");
syl = syl.replace(/yusn/g, "yutn");
syl = syl.replace(/yusd/g, "yutt");
syl = syl.replace(/yusm/g, "yunm");
syl = syl.replace(/yusb/g, "yutb");
syl = syl.replace(/yusshi/g, "yutshi");

syl = syl.replace(/yussn/g, "yunn");
syl = syl.replace(/yussd/g, "yutt");
syl = syl.replace(/yussj/g, "yutj");

syl = syl.replace(/yungr/g, "yungn");

syl = syl.replace(/yujh/g, "yutj");
syl = syl.replace(/yujg/g, "yutg");
syl = syl.replace(/yujn/g, "yutn");
syl = syl.replace(/yujd/g, "yutt");
syl = syl.replace(/yujm/g, "yutm");

syl = syl.replace(/yuchh/g, "yutj");
syl = syl.replace(/yuchg/g, "yutg");
syl = syl.replace(/yuchn/g, "yutn");
syl = syl.replace(/yuchd/g, "yutt");
syl = syl.replace(/yuchm/g, "yutm");

syl = syl.replace(/yuth/g, "yut");
syl = syl.replace(/yutd/g, "yutt");

syl = syl.replace(/yuph/g, "yup");

syl = syl.replace(/yuhg/g, "yuhk");
syl = syl.replace(/yuhr/g, "yur");

//eu
//syl = syl.replace(/eukh/g, "euk");
syl = syl.replace(/eukn/g, "eung");
syl = syl.replace(/eukr/g, "eugn");
syl = syl.replace(/eukg/g, "eukk");
syl = syl.replace(/eukm/g, "eugm");

syl = syl.replace(/eund/g, "eund");
syl = syl.replace(/eunr/g, "eull");

syl = syl.replace(/eudh/g, "eudt");
syl = syl.replace(/eudg/g, "eutg");
syl = syl.replace(/eudd/g, "eutt");
syl = syl.replace(/eudm/g, "eutm");

syl = syl.replace(/euln/g, "eull");
syl = syl.replace(/eulr/g, "eull");

syl = syl.replace(/eumr/g, "eumm");
syl = syl.replace(/euml/g, "eumm");

syl = syl.replace(/euph/g, "eup");
syl = syl.replace(/eupg/g, "eubg");
syl = syl.replace(/eupn/g, "eumn");
syl = syl.replace(/eupr/g, "eumn");
syl = syl.replace(/eupm/g, "eumm");

syl = syl.replace(/eush/g, "eut");
syl = syl.replace(/eusg/g, "eutg");
syl = syl.replace(/eusn/g, "eutn");
syl = syl.replace(/eusd/g, "eutt");
syl = syl.replace(/eusm/g, "eunm");
syl = syl.replace(/eusb/g, "eutb");
syl = syl.replace(/eusshi/g, "eutshi");

syl = syl.replace(/eussn/g, "eunn");
syl = syl.replace(/eussd/g, "eutt");
syl = syl.replace(/eussj/g, "eutj");

syl = syl.replace(/eungr/g, "eungn");

syl = syl.replace(/eujh/g, "eutj");
syl = syl.replace(/eujg/g, "eutg");
syl = syl.replace(/eujn/g, "eutn");
syl = syl.replace(/eujd/g, "eutt");
syl = syl.replace(/eujm/g, "eutm");

syl = syl.replace(/euchh/g, "eutj");
syl = syl.replace(/euchg/g, "eutg");
syl = syl.replace(/euchn/g, "eutn");
syl = syl.replace(/euchd/g, "eutt");
syl = syl.replace(/euchm/g, "eutm");

syl = syl.replace(/euth/g, "eut");
syl = syl.replace(/eutd/g, "eutt");

syl = syl.replace(/euph/g, "eup");

syl = syl.replace(/euhg/g, "euhk");
syl = syl.replace(/euhr/g, "eur");
	

	
//we
syl = syl.replace(/wekh/g, "wek");
syl = syl.replace(/wekn/g, "weng");
syl = syl.replace(/wekr/g, "wegn");
syl = syl.replace(/wekg/g, "wekk");
syl = syl.replace(/wekm/g, "wegm");

syl = syl.replace(/wend/g, "wend");
syl = syl.replace(/wenr/g, "well");

syl = syl.replace(/wedh/g, "wedt");
syl = syl.replace(/wedg/g, "wetg");
syl = syl.replace(/wedd/g, "wett");
syl = syl.replace(/wedm/g, "wetm");

syl = syl.replace(/weln/g, "well");
syl = syl.replace(/welr/g, "well");

syl = syl.replace(/wemr/g, "wemm");
syl = syl.replace(/weml/g, "wemm");

syl = syl.replace(/weph/g, "wep");
syl = syl.replace(/wepg/g, "webg");
syl = syl.replace(/wepn/g, "wemn");
syl = syl.replace(/wepr/g, "wemn");
syl = syl.replace(/wepm/g, "wemm");

syl = syl.replace(/wesh/g, "wet");
syl = syl.replace(/wesg/g, "wetg");
syl = syl.replace(/wesn/g, "wetn");
syl = syl.replace(/wesd/g, "wett");
syl = syl.replace(/wesm/g, "wenm");
syl = syl.replace(/wesb/g, "wetb");
syl = syl.replace(/wesshi/g, "wetshi");

syl = syl.replace(/wessn/g, "wenn");
syl = syl.replace(/wessd/g, "wett");
syl = syl.replace(/wessj/g, "wetj");

syl = syl.replace(/wengr/g, "wengn");

syl = syl.replace(/wejh/g, "wetj");
syl = syl.replace(/wejg/g, "wetg");
syl = syl.replace(/wejn/g, "wetn");
syl = syl.replace(/wejd/g, "wett");
syl = syl.replace(/wejm/g, "wetm");

syl = syl.replace(/wechh/g, "wetj");
syl = syl.replace(/wechg/g, "wetg");
syl = syl.replace(/wechn/g, "wetn");
syl = syl.replace(/wechd/g, "wett");
syl = syl.replace(/wechm/g, "wetm");

syl = syl.replace(/weth/g, "wet");
syl = syl.replace(/wetd/g, "wett");

syl = syl.replace(/weph/g, "wep");

syl = syl.replace(/wehg/g, "wehk");
syl = syl.replace(/wehr/g, "wer");

//ae
syl = syl.replace(/aekh/g, "aek");
syl = syl.replace(/aekn/g, "aeng");
syl = syl.replace(/aekr/g, "aegn");
syl = syl.replace(/aekg/g, "aekk");
syl = syl.replace(/aekm/g, "aegm");

syl = syl.replace(/aend/g, "aend");
syl = syl.replace(/aenr/g, "aell");

syl = syl.replace(/aedh/g, "aedt");
syl = syl.replace(/aedg/g, "aetg");
syl = syl.replace(/aedd/g, "aett");
syl = syl.replace(/aedm/g, "aetm");

syl = syl.replace(/aeln/g, "aell");
syl = syl.replace(/aelr/g, "aell");

syl = syl.replace(/aemr/g, "aemm");
syl = syl.replace(/aeml/g, "aemm");

syl = syl.replace(/aeph/g, "aep");
syl = syl.replace(/aepg/g, "aebg");
syl = syl.replace(/aepn/g, "aemn");
syl = syl.replace(/aepr/g, "aemn");
syl = syl.replace(/aepm/g, "aemm");

//syl = syl.replace(/aesh/g, "aet"); daeshin
syl = syl.replace(/aesg/g, "aetg");
syl = syl.replace(/aesn/g, "aetn");
syl = syl.replace(/aesd/g, "aett");
syl = syl.replace(/aesm/g, "aenm");
syl = syl.replace(/aesb/g, "aetb");
syl = syl.replace(/aesshi/g, "aetshi");

syl = syl.replace(/aessn/g, "aenn");
syl = syl.replace(/aessd/g, "aett");
syl = syl.replace(/aessj/g, "aetj");

syl = syl.replace(/aengr/g, "aengn");

syl = syl.replace(/aejh/g, "aetj");
syl = syl.replace(/aejg/g, "aetg");
syl = syl.replace(/aejn/g, "aetn");
syl = syl.replace(/aejd/g, "aett");
syl = syl.replace(/aejm/g, "aetm");

syl = syl.replace(/aechh/g, "aetj");
syl = syl.replace(/aechg/g, "aetg");
syl = syl.replace(/aechn/g, "aetn");
syl = syl.replace(/aechd/g, "aett");
syl = syl.replace(/aechm/g, "aetm");

syl = syl.replace(/aeth/g, "aet");
syl = syl.replace(/aetd/g, "aett");

syl = syl.replace(/aeph/g, "aep");

syl = syl.replace(/aehg/g, "aehk");
syl = syl.replace(/aehr/g, "aer");

//eo
syl = syl.replace(/eokh/g, "eok");
syl = syl.replace(/eokn/g, "eong");
syl = syl.replace(/eokr/g, "eogn");
syl = syl.replace(/eokg/g, "eokk");
syl = syl.replace(/eokm/g, "eogm");

syl = syl.replace(/eond/g, "eond");
syl = syl.replace(/eonr/g, "eoll");

syl = syl.replace(/eodh/g, "eodt");
syl = syl.replace(/eodg/g, "eotg");
syl = syl.replace(/eodd/g, "eott");
syl = syl.replace(/eodm/g, "eotm");

syl = syl.replace(/eoln/g, "eoll");
syl = syl.replace(/eolr/g, "eoll");

syl = syl.replace(/eomr/g, "eomm");
syl = syl.replace(/eoml/g, "eomm");

syl = syl.replace(/eoph/g, "eop");
syl = syl.replace(/eopg/g, "eobg");
syl = syl.replace(/eopn/g, "eomn");
syl = syl.replace(/eopr/g, "eomn");
syl = syl.replace(/eopm/g, "eomm");

syl = syl.replace(/eosh/g, "eot");
syl = syl.replace(/eosg/g, "eotg");
syl = syl.replace(/eosn/g, "eotn");
syl = syl.replace(/eosd/g, "eott");
syl = syl.replace(/eosm/g, "eonm");
syl = syl.replace(/eosb/g, "eotb");
syl = syl.replace(/eosshi/g, "eotshi");

syl = syl.replace(/eossn/g, "eonn");
syl = syl.replace(/eossd/g, "eott");
syl = syl.replace(/eossj/g, "eotj");

syl = syl.replace(/eongr/g, "eongn");

syl = syl.replace(/eojh/g, "eotj");
syl = syl.replace(/eojg/g, "eotg");
syl = syl.replace(/eojn/g, "eotn");
syl = syl.replace(/eojd/g, "eott");
syl = syl.replace(/eojm/g, "eotm");

syl = syl.replace(/eochh/g, "eotj");
syl = syl.replace(/eochg/g, "eotg");
syl = syl.replace(/eochn/g, "eotn");
syl = syl.replace(/eochd/g, "eott");
syl = syl.replace(/eochm/g, "eotm");

syl = syl.replace(/eoth/g, "eot");
syl = syl.replace(/eotd/g, "eott");

syl = syl.replace(/eoph/g, "eop");

syl = syl.replace(/eohg/g, "eohk");
syl = syl.replace(/eohr/g, "eor");

//ye
syl = syl.replace(/yekh/g, "yek");
syl = syl.replace(/yekn/g, "yeng");
syl = syl.replace(/yekr/g, "yegn");
syl = syl.replace(/yekg/g, "yekk");
syl = syl.replace(/yekm/g, "yegm");

syl = syl.replace(/yend/g, "yend");
syl = syl.replace(/yenr/g, "yell");

syl = syl.replace(/yedh/g, "yedt");
syl = syl.replace(/yedg/g, "yetg");
syl = syl.replace(/yedd/g, "yett");
syl = syl.replace(/yedm/g, "yetm");

syl = syl.replace(/yeln/g, "yell");
syl = syl.replace(/yelr/g, "yell");

syl = syl.replace(/yemr/g, "yemm");
syl = syl.replace(/yeml/g, "yemm");

syl = syl.replace(/yeph/g, "yep");
syl = syl.replace(/yepg/g, "yebg");
syl = syl.replace(/yepn/g, "yemn");
syl = syl.replace(/yepr/g, "yemn");
syl = syl.replace(/yepm/g, "yemm");

syl = syl.replace(/yesh/g, "yet");
syl = syl.replace(/yesg/g, "yetg");
syl = syl.replace(/yesn/g, "yetn");
syl = syl.replace(/yesd/g, "yett");
syl = syl.replace(/yesm/g, "yenm");
syl = syl.replace(/yesb/g, "yetb");
syl = syl.replace(/yesshi/g, "yetshi");

syl = syl.replace(/yessn/g, "yenn");
syl = syl.replace(/yessd/g, "yett");
syl = syl.replace(/yessj/g, "yetj");

syl = syl.replace(/yengr/g, "yengn");

syl = syl.replace(/yejh/g, "yetj");
syl = syl.replace(/yejg/g, "yetg");
syl = syl.replace(/yejn/g, "yetn");
syl = syl.replace(/yejd/g, "yett");
syl = syl.replace(/yejm/g, "yetm");

syl = syl.replace(/yechh/g, "yetj");
syl = syl.replace(/yechg/g, "yetg");
syl = syl.replace(/yechn/g, "yetn");
syl = syl.replace(/yechd/g, "yett");
syl = syl.replace(/yechm/g, "yetm");

syl = syl.replace(/yeth/g, "yet");
syl = syl.replace(/yetd/g, "yett");

syl = syl.replace(/yeph/g, "yep");

syl = syl.replace(/yehg/g, "yehk");
syl = syl.replace(/yehr/g, "yer");
	

//yo
syl = syl.replace(/yokh/g, "yok");
syl = syl.replace(/yokn/g, "yong");
syl = syl.replace(/yokr/g, "yogn");
syl = syl.replace(/yokg/g, "yokk");
syl = syl.replace(/yokm/g, "yogm");

syl = syl.replace(/yond/g, "yond");
syl = syl.replace(/yonr/g, "yoll");

syl = syl.replace(/yodh/g, "yodt");
syl = syl.replace(/yodg/g, "yotg");
syl = syl.replace(/yodd/g, "yott");
syl = syl.replace(/yodm/g, "yotm");

syl = syl.replace(/yoln/g, "yoll");
syl = syl.replace(/yolr/g, "yoll");

syl = syl.replace(/yomr/g, "yomm");
syl = syl.replace(/yoml/g, "yomm");

syl = syl.replace(/yoph/g, "yop");
syl = syl.replace(/yopg/g, "yobg");
syl = syl.replace(/yopn/g, "yomn");
syl = syl.replace(/yopr/g, "yomn");
syl = syl.replace(/yopm/g, "yomm");

syl = syl.replace(/yosh/g, "yot");
syl = syl.replace(/yosg/g, "yotg");
syl = syl.replace(/yosn/g, "yotn");
syl = syl.replace(/yosd/g, "yott");
syl = syl.replace(/yosm/g, "yonm");
syl = syl.replace(/yosb/g, "yotb");
syl = syl.replace(/yosshi/g, "yotshi");

syl = syl.replace(/yossn/g, "yonn");
syl = syl.replace(/yossd/g, "yott");
syl = syl.replace(/yossj/g, "yotj");

syl = syl.replace(/yongr/g, "yongn");

syl = syl.replace(/yojh/g, "yotj");
syl = syl.replace(/yojg/g, "yotg");
syl = syl.replace(/yojn/g, "yotn");
syl = syl.replace(/yojd/g, "yott");
syl = syl.replace(/yojm/g, "yotm");

syl = syl.replace(/yochh/g, "yotj");
syl = syl.replace(/yochg/g, "yotg");
syl = syl.replace(/yochn/g, "yotn");
syl = syl.replace(/yochd/g, "yott");
syl = syl.replace(/yochm/g, "yotm");

syl = syl.replace(/yoth/g, "yot");
syl = syl.replace(/yotd/g, "yott");

syl = syl.replace(/yoph/g, "yop");

syl = syl.replace(/yohg/g, "yohk");
syl = syl.replace(/yohr/g, "yor");

//ya
syl = syl.replace(/yakh/g, "yak");
syl = syl.replace(/yakn/g, "yang");
syl = syl.replace(/yakr/g, "yagn");
syl = syl.replace(/yakg/g, "yakk");
syl = syl.replace(/yakm/g, "yagm");

syl = syl.replace(/yand/g, "yand");
syl = syl.replace(/yanr/g, "yall");

syl = syl.replace(/yadh/g, "yat");
syl = syl.replace(/yadg/g, "yatg");
syl = syl.replace(/yadd/g, "yatt");
syl = syl.replace(/yadm/g, "yatm");

syl = syl.replace(/yaln/g, "yall");
syl = syl.replace(/yalr/g, "yall");

syl = syl.replace(/yamr/g, "yamm");
syl = syl.replace(/yaml/g, "yamm");

syl = syl.replace(/yaph/g, "yap");
syl = syl.replace(/yapg/g, "yabg");
syl = syl.replace(/yapn/g, "yamn");
syl = syl.replace(/yapr/g, "yamn");
syl = syl.replace(/yapm/g, "yamm");

syl = syl.replace(/yash/g, "yat");
syl = syl.replace(/yasg/g, "yatg");
syl = syl.replace(/yasn/g, "yatn");
syl = syl.replace(/yasd/g, "yatt");
syl = syl.replace(/yasm/g, "yanm");
syl = syl.replace(/yasb/g, "yatb");
syl = syl.replace(/yasshi/g, "yatshi");

syl = syl.replace(/yassn/g, "yann");
syl = syl.replace(/yassd/g, "yatt");
syl = syl.replace(/yassj/g, "yatj");

syl = syl.replace(/yangr/g, "yangn");

syl = syl.replace(/yajh/g, "yatj");
syl = syl.replace(/yajg/g, "yatg");
syl = syl.replace(/yajn/g, "yatn");
syl = syl.replace(/yajd/g, "yatt");
syl = syl.replace(/yajm/g, "yatm");

syl = syl.replace(/yachh/g, "yatj");
syl = syl.replace(/yachg/g, "yatg");
syl = syl.replace(/yachn/g, "yatn");
syl = syl.replace(/yachd/g, "yatt");
syl = syl.replace(/yachm/g, "yatm");

syl = syl.replace(/yath/g, "yat");
syl = syl.replace(/yatd/g, "yatt");

syl = syl.replace(/yaph/g, "yap");

syl = syl.replace(/yahg/g, "yahk");
syl = syl.replace(/yahr/g, "yar");
	
//ni
syl = syl.replace(/nikh/g, "nik");
syl = syl.replace(/nikn/g, "ning");
syl = syl.replace(/nikr/g, "nign");
syl = syl.replace(/nikg/g, "nikk");
syl = syl.replace(/nikm/g, "nigm");

syl = syl.replace(/nind/g, "nind");
syl = syl.replace(/ninr/g, "nill");

syl = syl.replace(/nidh/g, "nidt");
syl = syl.replace(/nidg/g, "nitg");
syl = syl.replace(/nidd/g, "nitt");
syl = syl.replace(/nidm/g, "nitm");

syl = syl.replace(/niln/g, "nill");
syl = syl.replace(/nilr/g, "nill");

syl = syl.replace(/nimr/g, "nimm");
syl = syl.replace(/niml/g, "nimm");

syl = syl.replace(/niph/g, "nip");
syl = syl.replace(/nipg/g, "nibg");
syl = syl.replace(/nipn/g, "nimn");
syl = syl.replace(/nipr/g, "nimn");
syl = syl.replace(/nipm/g, "nimm");

syl = syl.replace(/nish/g, "nit");
syl = syl.replace(/nisg/g, "nitg");
syl = syl.replace(/nisn/g, "nitn");
syl = syl.replace(/nisd/g, "nitt");
syl = syl.replace(/nism/g, "ninm");
syl = syl.replace(/nisb/g, "nitb");
syl = syl.replace(/nisshi/g, "nitshi");

syl = syl.replace(/nissn/g, "ninn");
syl = syl.replace(/nissd/g, "nitt");
syl = syl.replace(/nissj/g, "nitj");

syl = syl.replace(/ningr/g, "ningn");

syl = syl.replace(/nijh/g, "nitj");
syl = syl.replace(/nijg/g, "nitg");
syl = syl.replace(/nijn/g, "nitn");
syl = syl.replace(/nijd/g, "nitt");
syl = syl.replace(/nijm/g, "nitm");

syl = syl.replace(/nichh/g, "nitj");
syl = syl.replace(/nichg/g, "nitg");
syl = syl.replace(/nichn/g, "nitn");
syl = syl.replace(/nichd/g, "nitt");
syl = syl.replace(/nichm/g, "nitm");

syl = syl.replace(/nith/g, "nit");
syl = syl.replace(/nitd/g, "nitt");

syl = syl.replace(/niph/g, "nip");

syl = syl.replace(/nihg/g, "nihk");
syl = syl.replace(/nihr/g, "nir");

//na
syl = syl.replace(/nakh/g, "nak");
syl = syl.replace(/nakn/g, "nang");
syl = syl.replace(/nakr/g, "nagn");
syl = syl.replace(/nakg/g, "nakk");
syl = syl.replace(/nakm/g, "nagm");

syl = syl.replace(/nand/g, "nand");
syl = syl.replace(/nanr/g, "nall");
	
syl = syl.replace(/nadh/g, "nat");
syl = syl.replace(/nadg/g, "natg");
syl = syl.replace(/nadd/g, "natt");
syl = syl.replace(/nadm/g, "natm");

syl = syl.replace(/naln/g, "nall");
syl = syl.replace(/nalr/g, "nall");

syl = syl.replace(/namr/g, "namm");
syl = syl.replace(/naml/g, "namm");

syl = syl.replace(/naph/g, "nap");
syl = syl.replace(/napg/g, "nabg");
syl = syl.replace(/napn/g, "namn");
syl = syl.replace(/napr/g, "namn");
syl = syl.replace(/napm/g, "namm");

syl = syl.replace(/nash/g, "nat");
syl = syl.replace(/nasg/g, "natg");
syl = syl.replace(/nasn/g, "natn");
syl = syl.replace(/nasd/g, "natt");
syl = syl.replace(/nasm/g, "nanm");
syl = syl.replace(/nasb/g, "natb");
syl = syl.replace(/nasshi/g, "natshi");

syl = syl.replace(/nassn/g, "nann");
syl = syl.replace(/nassd/g, "natt");
syl = syl.replace(/nassj/g, "natj");

syl = syl.replace(/nangr/g, "nangn");

syl = syl.replace(/najh/g, "natj");
syl = syl.replace(/najg/g, "natg");
syl = syl.replace(/najn/g, "natn");
syl = syl.replace(/najd/g, "natt");
syl = syl.replace(/najm/g, "natm");

syl = syl.replace(/nachh/g, "natj");
syl = syl.replace(/nachg/g, "natg");
syl = syl.replace(/nachn/g, "natn");
syl = syl.replace(/nachd/g, "natt");
syl = syl.replace(/nachm/g, "natm");

syl = syl.replace(/nath/g, "nat");
syl = syl.replace(/natd/g, "natt");

syl = syl.replace(/naph/g, "nap");

syl = syl.replace(/nahg/g, "nahk");
syl = syl.replace(/nahr/g, "nar");

//ne
syl = syl.replace(/nekh/g, "nek");
syl = syl.replace(/nekn/g, "neng");
syl = syl.replace(/nekr/g, "negn");
syl = syl.replace(/nekg/g, "nekk");
syl = syl.replace(/nekm/g, "negm");

syl = syl.replace(/nend/g, "nend");
syl = syl.replace(/nenr/g, "nell");

syl = syl.replace(/nedh/g, "nedt");
syl = syl.replace(/nedg/g, "netg");
syl = syl.replace(/nedd/g, "nett");
syl = syl.replace(/nedm/g, "netm");

syl = syl.replace(/neln/g, "nell");
syl = syl.replace(/nelr/g, "nell");

syl = syl.replace(/nemr/g, "nemm");
syl = syl.replace(/neml/g, "nemm");

syl = syl.replace(/neph/g, "nep");
syl = syl.replace(/nepg/g, "nebg");
syl = syl.replace(/nepn/g, "nemn");
syl = syl.replace(/nepr/g, "nemn");
syl = syl.replace(/nepm/g, "nemm");

syl = syl.replace(/nesh/g, "net");
syl = syl.replace(/nesg/g, "netg");
syl = syl.replace(/nesn/g, "netn");
syl = syl.replace(/nesd/g, "nett");
syl = syl.replace(/nesm/g, "nenm");
syl = syl.replace(/nesb/g, "netb");
syl = syl.replace(/nesshi/g, "netshi");

syl = syl.replace(/nessn/g, "nenn");
syl = syl.replace(/nessd/g, "nett");
syl = syl.replace(/nessj/g, "netj");

syl = syl.replace(/nengr/g, "nengn");

syl = syl.replace(/nejh/g, "netj");
syl = syl.replace(/nejg/g, "netg");
syl = syl.replace(/nejn/g, "netn");
syl = syl.replace(/nejd/g, "nett");
syl = syl.replace(/nejm/g, "netm");

syl = syl.replace(/nechh/g, "netj");
syl = syl.replace(/nechg/g, "netg");
syl = syl.replace(/nechn/g, "netn");
syl = syl.replace(/nechd/g, "nett");
syl = syl.replace(/nechm/g, "netm");

syl = syl.replace(/neth/g, "net");
syl = syl.replace(/netd/g, "nett");

syl = syl.replace(/neph/g, "nep");

syl = syl.replace(/nehg/g, "nehk");
syl = syl.replace(/nehr/g, "ner");
	
//no
syl = syl.replace(/nokh/g, "nok");
syl = syl.replace(/nokn/g, "nong");
syl = syl.replace(/nokr/g, "nogn");
syl = syl.replace(/nokg/g, "nokk");
syl = syl.replace(/nokm/g, "nogm");

syl = syl.replace(/nond/g, "nond");
syl = syl.replace(/nonr/g, "noll");

syl = syl.replace(/nodh/g, "nodt");
syl = syl.replace(/nodg/g, "notg");
syl = syl.replace(/nodd/g, "nott");
syl = syl.replace(/nodm/g, "notm");

syl = syl.replace(/noln/g, "noll");
syl = syl.replace(/nolr/g, "noll");

syl = syl.replace(/nomr/g, "nomm");
syl = syl.replace(/noml/g, "nomm");

syl = syl.replace(/noph/g, "nop");
syl = syl.replace(/nopg/g, "nobg");
syl = syl.replace(/nopn/g, "nomn");
syl = syl.replace(/nopr/g, "nomn");
syl = syl.replace(/nopm/g, "nomm");

syl = syl.replace(/nosh/g, "not");
syl = syl.replace(/nosg/g, "notg");
syl = syl.replace(/nosn/g, "notn");
syl = syl.replace(/nosd/g, "nott");
syl = syl.replace(/nosm/g, "nonm");
syl = syl.replace(/nosb/g, "notb");
syl = syl.replace(/nosshi/g, "notshi");

syl = syl.replace(/nossn/g, "nonn");
syl = syl.replace(/nossd/g, "nott");
syl = syl.replace(/nossj/g, "notj");

syl = syl.replace(/nongr/g, "nongn");

syl = syl.replace(/nojh/g, "notj");
syl = syl.replace(/nojg/g, "notg");
syl = syl.replace(/nojn/g, "notn");
syl = syl.replace(/nojd/g, "nott");
syl = syl.replace(/nojm/g, "notm");

syl = syl.replace(/nochh/g, "notj");
syl = syl.replace(/nochg/g, "notg");
syl = syl.replace(/nochn/g, "notn");
syl = syl.replace(/nochd/g, "nott");
syl = syl.replace(/nochm/g, "notm");

syl = syl.replace(/noth/g, "not");
syl = syl.replace(/notd/g, "nott");

syl = syl.replace(/noph/g, "nop");

syl = syl.replace(/nohg/g, "nohk");
syl = syl.replace(/nohr/g, "nor");

//nu
syl = syl.replace(/nukh/g, "nuk");
syl = syl.replace(/nukn/g, "nung");
syl = syl.replace(/nukr/g, "nugn");
syl = syl.replace(/nukg/g, "nukk");
syl = syl.replace(/nukm/g, "nugm");

syl = syl.replace(/nund/g, "nund");
syl = syl.replace(/nunr/g, "null");

syl = syl.replace(/nudh/g, "nudt");
syl = syl.replace(/nudg/g, "nutg");
syl = syl.replace(/nudd/g, "nutt");
syl = syl.replace(/nudm/g, "nutm");

syl = syl.replace(/nuln/g, "null");
syl = syl.replace(/nulr/g, "null");

syl = syl.replace(/numr/g, "numm");
syl = syl.replace(/numl/g, "numm");

syl = syl.replace(/nuph/g, "nup");
syl = syl.replace(/nupg/g, "nubg");
syl = syl.replace(/nupn/g, "numn");
syl = syl.replace(/nupr/g, "numn");
syl = syl.replace(/nupm/g, "numm");

syl = syl.replace(/nush/g, "nut");
syl = syl.replace(/nusg/g, "nutg");
syl = syl.replace(/nusn/g, "nutn");
syl = syl.replace(/nusd/g, "nutt");
syl = syl.replace(/nusm/g, "nunm");
syl = syl.replace(/nusb/g, "nutb");
syl = syl.replace(/nusshi/g, "nutshi");

syl = syl.replace(/nussn/g, "nunn");
syl = syl.replace(/nussd/g, "nutt");
syl = syl.replace(/nussj/g, "nutj");

syl = syl.replace(/nungr/g, "nungn");

syl = syl.replace(/nujh/g, "nutj");
syl = syl.replace(/nujg/g, "nutg");
syl = syl.replace(/nujn/g, "nutn");
syl = syl.replace(/nujd/g, "nutt");
syl = syl.replace(/nujm/g, "nutm");

syl = syl.replace(/nuchh/g, "nutj");
syl = syl.replace(/nuchg/g, "nutg");
syl = syl.replace(/nuchn/g, "nutn");
syl = syl.replace(/nuchd/g, "nutt");
syl = syl.replace(/nuchm/g, "nutm");

syl = syl.replace(/nuth/g, "nut");
syl = syl.replace(/nutd/g, "nutt");

syl = syl.replace(/nuph/g, "nup");

syl = syl.replace(/nuhg/g, "nuhk");
syl = syl.replace(/nuhr/g, "nur");

//da
syl = syl.replace(/dakh/g, "dak");
syl = syl.replace(/dakn/g, "dang");
syl = syl.replace(/dakr/g, "dagn");
syl = syl.replace(/dakg/g, "dakk");
syl = syl.replace(/dakm/g, "dagm");

syl = syl.replace(/dand/g, "dand");
syl = syl.replace(/danr/g, "dall");

syl = syl.replace(/dadh/g, "dat");
syl = syl.replace(/dadg/g, "datg");
syl = syl.replace(/dadd/g, "datt");
syl = syl.replace(/dadm/g, "datm");

syl = syl.replace(/daln/g, "dall");
syl = syl.replace(/dalr/g, "dall");

syl = syl.replace(/damr/g, "damm");
syl = syl.replace(/daml/g, "damm");

syl = syl.replace(/daph/g, "dap");
syl = syl.replace(/dapg/g, "dabg");
syl = syl.replace(/dapn/g, "damn");
syl = syl.replace(/dapr/g, "damn");
syl = syl.replace(/dapm/g, "damm");

//syl = syl.replace(/dash/g, "dat"); messes with Dashi
syl = syl.replace(/dasg/g, "datg");
syl = syl.replace(/dasn/g, "datn");
syl = syl.replace(/dasd/g, "datt");
syl = syl.replace(/dasm/g, "danm");
syl = syl.replace(/dasb/g, "datb");
syl = syl.replace(/dasshi/g, "datshi");

syl = syl.replace(/dassn/g, "dann");
syl = syl.replace(/dassd/g, "datt");
syl = syl.replace(/dassj/g, "datj");

syl = syl.replace(/dangr/g, "dangn");

syl = syl.replace(/dajh/g, "datj");
syl = syl.replace(/dajg/g, "datg");
syl = syl.replace(/dajn/g, "datn");
syl = syl.replace(/dajd/g, "datt");
syl = syl.replace(/dajm/g, "datm");

syl = syl.replace(/dachh/g, "datj");
syl = syl.replace(/dachg/g, "datg");
syl = syl.replace(/dachn/g, "datn");
syl = syl.replace(/dachd/g, "datt");
syl = syl.replace(/dachm/g, "datm");

syl = syl.replace(/dath/g, "dat");
syl = syl.replace(/datd/g, "datt");

syl = syl.replace(/daph/g, "dap");

syl = syl.replace(/dahg/g, "dahk");
syl = syl.replace(/dahr/g, "dar");

//de
syl = syl.replace(/dekh/g, "dek");
syl = syl.replace(/dekn/g, "deng");
syl = syl.replace(/dekr/g, "degn");
syl = syl.replace(/dekg/g, "dekk");
syl = syl.replace(/dekm/g, "degm");

syl = syl.replace(/dend/g, "dend");
syl = syl.replace(/denr/g, "dell");

syl = syl.replace(/dedh/g, "dedt");
syl = syl.replace(/dedg/g, "detg");
syl = syl.replace(/dedd/g, "dett");
syl = syl.replace(/dedm/g, "detm");

syl = syl.replace(/deln/g, "dell");
syl = syl.replace(/delr/g, "dell");

syl = syl.replace(/demr/g, "demm");
syl = syl.replace(/deml/g, "demm");

syl = syl.replace(/deph/g, "dep");
syl = syl.replace(/depg/g, "debg");
syl = syl.replace(/depn/g, "demn");
syl = syl.replace(/depr/g, "demn");
syl = syl.replace(/depm/g, "demm");

syl = syl.replace(/desh/g, "det");
syl = syl.replace(/desg/g, "detg");
syl = syl.replace(/desn/g, "detn");
syl = syl.replace(/desd/g, "dett");
syl = syl.replace(/desm/g, "denm");
syl = syl.replace(/desb/g, "detb");
syl = syl.replace(/desshi/g, "detshi");

syl = syl.replace(/dessn/g, "denn");
syl = syl.replace(/dessd/g, "dett");
syl = syl.replace(/dessj/g, "detj");

syl = syl.replace(/dengr/g, "dengn");

syl = syl.replace(/dejh/g, "detj");
syl = syl.replace(/dejg/g, "detg");
syl = syl.replace(/dejn/g, "detn");
syl = syl.replace(/dejd/g, "dett");
syl = syl.replace(/dejm/g, "detm");

syl = syl.replace(/dechh/g, "detj");
syl = syl.replace(/dechg/g, "detg");
syl = syl.replace(/dechn/g, "detn");
syl = syl.replace(/dechd/g, "dett");
syl = syl.replace(/dechm/g, "detm");

syl = syl.replace(/deth/g, "det");
syl = syl.replace(/detd/g, "dett");

syl = syl.replace(/deph/g, "dep");

syl = syl.replace(/dehg/g, "dehk");
syl = syl.replace(/dehr/g, "der");
	
//do
syl = syl.replace(/dokh/g, "dok");
syl = syl.replace(/dokn/g, "dong");
syl = syl.replace(/dokr/g, "dogn");
syl = syl.replace(/dokg/g, "dokk");
syl = syl.replace(/dokm/g, "dogm");

syl = syl.replace(/dond/g, "dond");
syl = syl.replace(/donr/g, "doll");

syl = syl.replace(/dodh/g, "dodt");
syl = syl.replace(/dodg/g, "dotg");
syl = syl.replace(/dodd/g, "dott");
syl = syl.replace(/dodm/g, "dotm");

syl = syl.replace(/doln/g, "doll");
syl = syl.replace(/dolr/g, "doll");

syl = syl.replace(/domr/g, "domm");
syl = syl.replace(/doml/g, "domm");

syl = syl.replace(/doph/g, "dop");
syl = syl.replace(/dopg/g, "dobg");
syl = syl.replace(/dopn/g, "domn");
syl = syl.replace(/dopr/g, "domn");
syl = syl.replace(/dopm/g, "domm");

syl = syl.replace(/dosh/g, "dot");
syl = syl.replace(/dosg/g, "dotg");
syl = syl.replace(/dosn/g, "dotn");
syl = syl.replace(/dosd/g, "dott");
syl = syl.replace(/dosm/g, "donm");
syl = syl.replace(/dosb/g, "dotb");
syl = syl.replace(/dosshi/g, "dotshi");

syl = syl.replace(/dossn/g, "donn");
syl = syl.replace(/dossd/g, "dott");
syl = syl.replace(/dossj/g, "dotj");

syl = syl.replace(/dongr/g, "dongn");

syl = syl.replace(/dojh/g, "dotj");
syl = syl.replace(/dojg/g, "dotg");
syl = syl.replace(/dojn/g, "dotn");
syl = syl.replace(/dojd/g, "dott");
syl = syl.replace(/dojm/g, "dotm");

syl = syl.replace(/dochh/g, "dotj");
syl = syl.replace(/dochg/g, "dotg");
syl = syl.replace(/dochn/g, "dotn");
syl = syl.replace(/dochd/g, "dott");
syl = syl.replace(/dochm/g, "dotm");

syl = syl.replace(/doth/g, "dot");
syl = syl.replace(/dotd/g, "dott");

syl = syl.replace(/doph/g, "dop");

syl = syl.replace(/dohg/g, "dohk");
syl = syl.replace(/dohr/g, "dor");
	
//du
syl = syl.replace(/dukh/g, "duk");
syl = syl.replace(/dukn/g, "dung");
syl = syl.replace(/dukr/g, "dugn");
syl = syl.replace(/dukg/g, "dukk");
syl = syl.replace(/dukm/g, "dugm");

syl = syl.replace(/dund/g, "dund");
syl = syl.replace(/dunr/g, "dull");

syl = syl.replace(/dudh/g, "dudt");
syl = syl.replace(/dudg/g, "dutg");
syl = syl.replace(/dudd/g, "dutt");
syl = syl.replace(/dudm/g, "dutm");

syl = syl.replace(/duln/g, "dull");
syl = syl.replace(/dulr/g, "dull");

syl = syl.replace(/dumr/g, "dumm");
syl = syl.replace(/duml/g, "dumm");

syl = syl.replace(/duph/g, "dup");
syl = syl.replace(/dupg/g, "dubg");
syl = syl.replace(/dupn/g, "dumn");
syl = syl.replace(/dupr/g, "dumn");
syl = syl.replace(/dupm/g, "dumm");

syl = syl.replace(/dush/g, "dut");
syl = syl.replace(/dusg/g, "dutg");
syl = syl.replace(/dusn/g, "dutn");
syl = syl.replace(/dusd/g, "dutt");
syl = syl.replace(/dusm/g, "dunm");
syl = syl.replace(/dusb/g, "dutb");
syl = syl.replace(/dusshi/g, "dutshi");

syl = syl.replace(/dussn/g, "dunn");
syl = syl.replace(/dussd/g, "dutt");
syl = syl.replace(/dussj/g, "dutj");

syl = syl.replace(/dungr/g, "dungn");

syl = syl.replace(/dujh/g, "dutj");
syl = syl.replace(/dujg/g, "dutg");
syl = syl.replace(/dujn/g, "dutn");
syl = syl.replace(/dujd/g, "dutt");
syl = syl.replace(/dujm/g, "dutm");

syl = syl.replace(/duchh/g, "dutj");
syl = syl.replace(/duchg/g, "dutg");
syl = syl.replace(/duchn/g, "dutn");
syl = syl.replace(/duchd/g, "dutt");
syl = syl.replace(/duchm/g, "dutm");

syl = syl.replace(/duth/g, "dut");
syl = syl.replace(/dutd/g, "dutt");

syl = syl.replace(/duph/g, "dup");

syl = syl.replace(/duhg/g, "duhk");
syl = syl.replace(/duhr/g, "dur");

//di
syl = syl.replace(/dikh/g, "dik");
syl = syl.replace(/dikn/g, "ding");
syl = syl.replace(/dikr/g, "dign");
syl = syl.replace(/dikg/g, "dikk");
syl = syl.replace(/dikm/g, "digm");

syl = syl.replace(/dind/g, "dind");
syl = syl.replace(/dinr/g, "dill");

syl = syl.replace(/didh/g, "didt");
syl = syl.replace(/didg/g, "ditg");
syl = syl.replace(/didd/g, "ditt");
syl = syl.replace(/didm/g, "ditm");

syl = syl.replace(/diln/g, "dill");
syl = syl.replace(/dilr/g, "dill");

syl = syl.replace(/dimr/g, "dimm");
syl = syl.replace(/diml/g, "dimm");

syl = syl.replace(/diph/g, "dip");
syl = syl.replace(/dipg/g, "dibg");
syl = syl.replace(/dipn/g, "dimn");
syl = syl.replace(/dipr/g, "dimn");
syl = syl.replace(/dipm/g, "dimm");

syl = syl.replace(/dish/g, "dit");
syl = syl.replace(/disg/g, "ditg");
syl = syl.replace(/disn/g, "ditn");
syl = syl.replace(/disd/g, "ditt");
syl = syl.replace(/dism/g, "dinm");
syl = syl.replace(/disb/g, "ditb");
syl = syl.replace(/disshi/g, "ditshi");

syl = syl.replace(/dissn/g, "dinn");
syl = syl.replace(/dissd/g, "ditt");
syl = syl.replace(/dissj/g, "ditj");

syl = syl.replace(/dingr/g, "dingn");

syl = syl.replace(/dijh/g, "ditj");
syl = syl.replace(/dijg/g, "ditg");
syl = syl.replace(/dijn/g, "ditn");
syl = syl.replace(/dijd/g, "ditt");
syl = syl.replace(/dijm/g, "ditm");

syl = syl.replace(/dichh/g, "ditj");
syl = syl.replace(/dichg/g, "ditg");
syl = syl.replace(/dichn/g, "ditn");
syl = syl.replace(/dichd/g, "ditt");
syl = syl.replace(/dichm/g, "ditm");

syl = syl.replace(/dith/g, "dit");
syl = syl.replace(/ditd/g, "ditt");

syl = syl.replace(/diph/g, "dip");

syl = syl.replace(/dihg/g, "dihk");
syl = syl.replace(/dihr/g, "dir");
	
//ma
syl = syl.replace(/makh/g, "mak");
syl = syl.replace(/makn/g, "mang");
syl = syl.replace(/makr/g, "magn");
syl = syl.replace(/makg/g, "makk");
syl = syl.replace(/makm/g, "magm");

syl = syl.replace(/mand/g, "mand");
syl = syl.replace(/manr/g, "mall");

syl = syl.replace(/madh/g, "mat");
syl = syl.replace(/madg/g, "matg");
syl = syl.replace(/madd/g, "matt");
syl = syl.replace(/madm/g, "matm");

syl = syl.replace(/maln/g, "mall");
syl = syl.replace(/malr/g, "mall");

syl = syl.replace(/mamr/g, "mamm");
syl = syl.replace(/maml/g, "mamm");

syl = syl.replace(/maph/g, "map");
syl = syl.replace(/mapg/g, "mabg");
syl = syl.replace(/mapn/g, "mamn");
syl = syl.replace(/mapr/g, "mamn");
syl = syl.replace(/mapm/g, "mamm");

syl = syl.replace(/masha/g, "mata");
//syl = syl.replace(/mashi/g, "mati"); dwesn't work for 야식에
syl = syl.replace(/mashu/g, "matu");
syl = syl.replace(/mashe/g, "mate");
syl = syl.replace(/masho/g, "mato");
	
syl = syl.replace(/masg/g, "matg");
syl = syl.replace(/masn/g, "matn");
syl = syl.replace(/masd/g, "matt");
syl = syl.replace(/masm/g, "manm");
syl = syl.replace(/masb/g, "matb");
syl = syl.replace(/masshi/g, "matshi");

syl = syl.replace(/massn/g, "mann");
syl = syl.replace(/massd/g, "matt");
syl = syl.replace(/massj/g, "matj");

syl = syl.replace(/mangr/g, "mangn");

syl = syl.replace(/majh/g, "matj");
syl = syl.replace(/majg/g, "matg");
syl = syl.replace(/majn/g, "matn");
syl = syl.replace(/majd/g, "matt");
syl = syl.replace(/majm/g, "matm");

syl = syl.replace(/machh/g, "matj");
syl = syl.replace(/machg/g, "matg");
syl = syl.replace(/machn/g, "matn");
syl = syl.replace(/machd/g, "matt");
syl = syl.replace(/machm/g, "matm");

syl = syl.replace(/math/g, "mat");
syl = syl.replace(/matd/g, "matt");

syl = syl.replace(/maph/g, "map");

syl = syl.replace(/mahg/g, "mahk");
syl = syl.replace(/mahr/g, "mar");
	
//me
syl = syl.replace(/mekh/g, "mek");
syl = syl.replace(/mekn/g, "meng");
syl = syl.replace(/mekr/g, "megn");
syl = syl.replace(/mekg/g, "mekk");
syl = syl.replace(/mekm/g, "megm");

syl = syl.replace(/mend/g, "mend");
syl = syl.replace(/menr/g, "mell");

syl = syl.replace(/medh/g, "medt");
syl = syl.replace(/medg/g, "metg");
syl = syl.replace(/medd/g, "mett");
syl = syl.replace(/medm/g, "metm");

syl = syl.replace(/meln/g, "mell");
syl = syl.replace(/melr/g, "mell");

syl = syl.replace(/memr/g, "memm");
syl = syl.replace(/meml/g, "memm");

syl = syl.replace(/meph/g, "mep");
syl = syl.replace(/mepg/g, "mebg");
syl = syl.replace(/mepn/g, "memn");
syl = syl.replace(/mepr/g, "memn");
syl = syl.replace(/mepm/g, "memm");

syl = syl.replace(/mesh/g, "met");
syl = syl.replace(/mesg/g, "metg");
syl = syl.replace(/mesn/g, "metn");
syl = syl.replace(/mesd/g, "mett");
syl = syl.replace(/mesm/g, "menm");
syl = syl.replace(/mesb/g, "metb");
syl = syl.replace(/messhi/g, "metshi");

syl = syl.replace(/messn/g, "menn");
syl = syl.replace(/messd/g, "mett");
syl = syl.replace(/messj/g, "metj");

syl = syl.replace(/mengr/g, "mengn");

syl = syl.replace(/mejh/g, "metj");
syl = syl.replace(/mejg/g, "metg");
syl = syl.replace(/mejn/g, "metn");
syl = syl.replace(/mejd/g, "mett");
syl = syl.replace(/mejm/g, "metm");

syl = syl.replace(/mechh/g, "metj");
syl = syl.replace(/mechg/g, "metg");
syl = syl.replace(/mechn/g, "metn");
syl = syl.replace(/mechd/g, "mett");
syl = syl.replace(/mechm/g, "metm");

syl = syl.replace(/meth/g, "met");
syl = syl.replace(/metd/g, "mett");

syl = syl.replace(/meph/g, "mep");

syl = syl.replace(/mehg/g, "mehk");
syl = syl.replace(/mehr/g, "mer");
	
//mo
syl = syl.replace(/mokh/g, "mok");
syl = syl.replace(/mokn/g, "mong");
syl = syl.replace(/mokr/g, "mogn");
syl = syl.replace(/mokg/g, "mokk");
syl = syl.replace(/mokm/g, "mogm");

syl = syl.replace(/mond/g, "mond");
syl = syl.replace(/monr/g, "moll");

syl = syl.replace(/modh/g, "modt");
syl = syl.replace(/modg/g, "motg");
syl = syl.replace(/modd/g, "mott");
syl = syl.replace(/modm/g, "motm");

syl = syl.replace(/moln/g, "moll");
syl = syl.replace(/molr/g, "moll");

syl = syl.replace(/momr/g, "momm");
syl = syl.replace(/moml/g, "momm");

syl = syl.replace(/moph/g, "mop");
syl = syl.replace(/mopg/g, "mobg");
syl = syl.replace(/mopn/g, "momn");
syl = syl.replace(/mopr/g, "momn");
syl = syl.replace(/mopm/g, "momm");

syl = syl.replace(/mosh/g, "mot");
syl = syl.replace(/mosg/g, "motg");
syl = syl.replace(/mosn/g, "motn");
syl = syl.replace(/mosd/g, "mott");
syl = syl.replace(/mosm/g, "monm");
syl = syl.replace(/mosb/g, "motb");
syl = syl.replace(/mosshi/g, "motshi");

syl = syl.replace(/mossn/g, "monn");
syl = syl.replace(/mossd/g, "mott");
syl = syl.replace(/mossj/g, "motj");

syl = syl.replace(/mongr/g, "mongn");

syl = syl.replace(/mojh/g, "motj");
syl = syl.replace(/mojg/g, "motg");
syl = syl.replace(/mojn/g, "motn");
syl = syl.replace(/mojd/g, "mott");
syl = syl.replace(/mojm/g, "motm");

syl = syl.replace(/mochh/g, "motj");
syl = syl.replace(/mochg/g, "motg");
syl = syl.replace(/mochn/g, "motn");
syl = syl.replace(/mochd/g, "mott");
syl = syl.replace(/mochm/g, "motm");

syl = syl.replace(/moth/g, "mot");
syl = syl.replace(/motd/g, "mott");

syl = syl.replace(/moph/g, "mop");

syl = syl.replace(/mohg/g, "mohk");
syl = syl.replace(/mohr/g, "mor");
	
//mu
syl = syl.replace(/mukh/g, "muk");
syl = syl.replace(/mukn/g, "mung");
syl = syl.replace(/mukr/g, "mugn");
syl = syl.replace(/mukg/g, "mukk");
syl = syl.replace(/mukm/g, "mugm");

syl = syl.replace(/mund/g, "mund");
syl = syl.replace(/munr/g, "mull");

syl = syl.replace(/mudh/g, "mudt");
syl = syl.replace(/mudg/g, "mutg");
syl = syl.replace(/mudd/g, "mutt");
syl = syl.replace(/mudm/g, "mutm");

syl = syl.replace(/muln/g, "mull");
syl = syl.replace(/mulr/g, "mull");

syl = syl.replace(/mumr/g, "mumm");
syl = syl.replace(/muml/g, "mumm");

syl = syl.replace(/muph/g, "mup");
syl = syl.replace(/mupg/g, "mubg");
syl = syl.replace(/mupn/g, "mumn");
syl = syl.replace(/mupr/g, "mumn");
syl = syl.replace(/mupm/g, "mumm");

// syl = syl.replace(/mush/g, "mut"); dwens't work for 무심
syl = syl.replace(/musg/g, "mutg");
syl = syl.replace(/musn/g, "mutn");
syl = syl.replace(/musd/g, "mutt");
syl = syl.replace(/musm/g, "munm");
syl = syl.replace(/musb/g, "mutb");
syl = syl.replace(/musshi/g, "mutshi");

syl = syl.replace(/mussn/g, "munn");
syl = syl.replace(/mussd/g, "mutt");
syl = syl.replace(/mussj/g, "mutj");

syl = syl.replace(/mungr/g, "mungn");

syl = syl.replace(/mujh/g, "mutj");
syl = syl.replace(/mujg/g, "mutg");
syl = syl.replace(/mujn/g, "mutn");
syl = syl.replace(/mujd/g, "mutt");
syl = syl.replace(/mujm/g, "mutm");

syl = syl.replace(/muchh/g, "mutj");
syl = syl.replace(/muchg/g, "mutg");
syl = syl.replace(/muchn/g, "mutn");
syl = syl.replace(/muchd/g, "mutt");
syl = syl.replace(/muchm/g, "mutm");

syl = syl.replace(/muth/g, "mut");
syl = syl.replace(/mutd/g, "mutt");

syl = syl.replace(/muph/g, "mup");

syl = syl.replace(/muhg/g, "muhk");
syl = syl.replace(/muhr/g, "mur");

//mi
syl = syl.replace(/mikh/g, "mik");
syl = syl.replace(/mikn/g, "ming");
syl = syl.replace(/mikr/g, "mign");
syl = syl.replace(/mikg/g, "mikk");
syl = syl.replace(/mikm/g, "migm");

syl = syl.replace(/mind/g, "mind");
syl = syl.replace(/minr/g, "mill");

syl = syl.replace(/midh/g, "midt");
syl = syl.replace(/midg/g, "mitg");
syl = syl.replace(/midd/g, "mitt");
syl = syl.replace(/midm/g, "mitm");

syl = syl.replace(/miln/g, "mill");
syl = syl.replace(/milr/g, "mill");

syl = syl.replace(/mimr/g, "mimm");
syl = syl.replace(/miml/g, "mimm");

syl = syl.replace(/miph/g, "mip");
syl = syl.replace(/mipg/g, "mibg");
syl = syl.replace(/mipn/g, "mimn");
syl = syl.replace(/mipr/g, "mimn");
syl = syl.replace(/mipm/g, "mimm");

syl = syl.replace(/mish/g, "mit");
syl = syl.replace(/misg/g, "mitg");
syl = syl.replace(/misn/g, "mitn");
syl = syl.replace(/misd/g, "mitt");
syl = syl.replace(/mism/g, "minm");
syl = syl.replace(/misb/g, "mitb");
syl = syl.replace(/misshi/g, "mitshi");

syl = syl.replace(/missn/g, "minn");
syl = syl.replace(/missd/g, "mitt");
syl = syl.replace(/missj/g, "mitj");

syl = syl.replace(/mingr/g, "mingn");

syl = syl.replace(/mijh/g, "mitj");
syl = syl.replace(/mijg/g, "mitg");
syl = syl.replace(/mijn/g, "mitn");
syl = syl.replace(/mijd/g, "mitt");
syl = syl.replace(/mijm/g, "mitm");

syl = syl.replace(/michh/g, "mitj");
syl = syl.replace(/michg/g, "mitg");
syl = syl.replace(/michn/g, "mitn");
syl = syl.replace(/michd/g, "mitt");
syl = syl.replace(/michm/g, "mitm");

syl = syl.replace(/mith/g, "mit");
syl = syl.replace(/mitd/g, "mitt");

syl = syl.replace(/miph/g, "mip");

syl = syl.replace(/mihg/g, "mihk");
syl = syl.replace(/mihr/g, "mir");

//ba
syl = syl.replace(/bakh/g, "bak");
syl = syl.replace(/bakn/g, "bang");
syl = syl.replace(/bakr/g, "bagn");
syl = syl.replace(/bakg/g, "bakk");
syl = syl.replace(/bakm/g, "bagm");

syl = syl.replace(/band/g, "band");
syl = syl.replace(/banr/g, "ball");

syl = syl.replace(/badh/g, "bat");
syl = syl.replace(/badg/g, "batg");
syl = syl.replace(/badd/g, "batt");
syl = syl.replace(/badm/g, "batm");

syl = syl.replace(/baln/g, "ball");
syl = syl.replace(/balr/g, "ball");

syl = syl.replace(/bamr/g, "bamm");
syl = syl.replace(/baml/g, "bamm");

syl = syl.replace(/baph/g, "bap");
syl = syl.replace(/bapg/g, "babg");
syl = syl.replace(/bapn/g, "bamn");
syl = syl.replace(/bapr/g, "bamn");
syl = syl.replace(/bapm/g, "bamm");

syl = syl.replace(/bash/g, "bat");
syl = syl.replace(/basg/g, "batg");
syl = syl.replace(/basn/g, "batn");
syl = syl.replace(/basd/g, "batt");
syl = syl.replace(/basm/g, "banm");
syl = syl.replace(/basb/g, "batb");
syl = syl.replace(/basshi/g, "batshi");

syl = syl.replace(/bassn/g, "bann");
syl = syl.replace(/bassd/g, "batt");
syl = syl.replace(/bassj/g, "batj");

syl = syl.replace(/bangr/g, "bangn");

syl = syl.replace(/bajh/g, "batj");
syl = syl.replace(/bajg/g, "batg");
syl = syl.replace(/bajn/g, "batn");
syl = syl.replace(/bajd/g, "batt");
syl = syl.replace(/bajm/g, "batm");

syl = syl.replace(/bachh/g, "batj");
syl = syl.replace(/bachg/g, "batg");
syl = syl.replace(/bachn/g, "batn");
syl = syl.replace(/bachd/g, "batt");
syl = syl.replace(/bachm/g, "batm");

syl = syl.replace(/bath/g, "bat");
syl = syl.replace(/batd/g, "batt");

syl = syl.replace(/baph/g, "bap");

syl = syl.replace(/bahg/g, "bahk");
syl = syl.replace(/bahr/g, "bar");

//be
syl = syl.replace(/bekh/g, "bek");
syl = syl.replace(/bekn/g, "beng");
syl = syl.replace(/bekr/g, "begn");
syl = syl.replace(/bekg/g, "bekk");
syl = syl.replace(/bekm/g, "begm");

syl = syl.replace(/bend/g, "bend");
syl = syl.replace(/benr/g, "bell");

syl = syl.replace(/bedh/g, "bedt");
syl = syl.replace(/bedg/g, "betg");
syl = syl.replace(/bedd/g, "bett");
syl = syl.replace(/bedm/g, "betm");

syl = syl.replace(/beln/g, "bell");
syl = syl.replace(/belr/g, "bell");

syl = syl.replace(/bemr/g, "bemm");
syl = syl.replace(/beml/g, "bemm");

syl = syl.replace(/beph/g, "bep");
syl = syl.replace(/bepg/g, "bebg");
syl = syl.replace(/bepn/g, "bemn");
syl = syl.replace(/bepr/g, "bemn");
syl = syl.replace(/bepm/g, "bemm");

syl = syl.replace(/besh/g, "bet");
syl = syl.replace(/besg/g, "betg");
syl = syl.replace(/besn/g, "betn");
syl = syl.replace(/besd/g, "bett");
syl = syl.replace(/besm/g, "benm");
syl = syl.replace(/besb/g, "betb");
syl = syl.replace(/besshi/g, "betshi");

syl = syl.replace(/bessn/g, "benn");
syl = syl.replace(/bessd/g, "bett");
syl = syl.replace(/bessj/g, "betj");

syl = syl.replace(/bengr/g, "bengn");

syl = syl.replace(/bejh/g, "betj");
syl = syl.replace(/bejg/g, "betg");
syl = syl.replace(/bejn/g, "betn");
syl = syl.replace(/bejd/g, "bett");
syl = syl.replace(/bejm/g, "betm");

syl = syl.replace(/bechh/g, "betj");
syl = syl.replace(/bechg/g, "betg");
syl = syl.replace(/bechn/g, "betn");
syl = syl.replace(/bechd/g, "bett");
syl = syl.replace(/bechm/g, "betm");

syl = syl.replace(/beth/g, "bet");
syl = syl.replace(/betd/g, "bett");

syl = syl.replace(/beph/g, "bep");

syl = syl.replace(/behg/g, "behk");
syl = syl.replace(/behr/g, "ber");
	
//bo
syl = syl.replace(/bokh/g, "bok");
syl = syl.replace(/bokn/g, "bong");
syl = syl.replace(/bokr/g, "bogn");
syl = syl.replace(/bokg/g, "bokk");
syl = syl.replace(/bokm/g, "bogm");

syl = syl.replace(/bond/g, "bond");
syl = syl.replace(/bonr/g, "boll");

syl = syl.replace(/bodh/g, "bodt");
syl = syl.replace(/bodg/g, "botg");
syl = syl.replace(/bodd/g, "bott");
syl = syl.replace(/bodm/g, "botm");

syl = syl.replace(/boln/g, "boll");
syl = syl.replace(/bolr/g, "boll");

syl = syl.replace(/bomr/g, "bomm");
syl = syl.replace(/boml/g, "bomm");

syl = syl.replace(/boph/g, "bop");
syl = syl.replace(/bopg/g, "bobg");
syl = syl.replace(/bopn/g, "bomn");
syl = syl.replace(/bopr/g, "bomn");
syl = syl.replace(/bopm/g, "bomm");

syl = syl.replace(/bosh/g, "bot");
syl = syl.replace(/bosg/g, "botg");
syl = syl.replace(/bosn/g, "botn");
syl = syl.replace(/bosd/g, "bott");
syl = syl.replace(/bosm/g, "bonm");
syl = syl.replace(/bosb/g, "botb");
syl = syl.replace(/bosshi/g, "botshi");

syl = syl.replace(/bossn/g, "bonn");
syl = syl.replace(/bossd/g, "bott");
syl = syl.replace(/bossj/g, "botj");

syl = syl.replace(/bongr/g, "bongn");

syl = syl.replace(/bojh/g, "botj");
syl = syl.replace(/bojg/g, "botg");
syl = syl.replace(/bojn/g, "botn");
syl = syl.replace(/bojd/g, "bott");
syl = syl.replace(/bojm/g, "botm");

syl = syl.replace(/bochh/g, "botj");
syl = syl.replace(/bochg/g, "botg");
syl = syl.replace(/bochn/g, "botn");
syl = syl.replace(/bochd/g, "bott");
syl = syl.replace(/bochm/g, "botm");

syl = syl.replace(/both/g, "bot");
syl = syl.replace(/botd/g, "bott");

syl = syl.replace(/boph/g, "bop");

syl = syl.replace(/bohg/g, "bohk");
syl = syl.replace(/bohr/g, "bor");

//bu
syl = syl.replace(/bukh/g, "buk");
syl = syl.replace(/bukn/g, "bung");
syl = syl.replace(/bukr/g, "bugn");
syl = syl.replace(/bukg/g, "bukk");
syl = syl.replace(/bukm/g, "bugm");

syl = syl.replace(/bund/g, "bund");
syl = syl.replace(/bunr/g, "bull");

syl = syl.replace(/budh/g, "budt");
syl = syl.replace(/budg/g, "butg");
syl = syl.replace(/budd/g, "butt");
syl = syl.replace(/budm/g, "butm");

syl = syl.replace(/buln/g, "bull");
syl = syl.replace(/bulr/g, "bull");

syl = syl.replace(/bumr/g, "bumm");
syl = syl.replace(/buml/g, "bumm");

syl = syl.replace(/buph/g, "bup");
syl = syl.replace(/bupg/g, "bubg");
syl = syl.replace(/bupn/g, "bumn");
syl = syl.replace(/bupr/g, "bumn");
syl = syl.replace(/bupm/g, "bumm");

syl = syl.replace(/bush/g, "but");
syl = syl.replace(/busg/g, "butg");
syl = syl.replace(/busn/g, "butn");
syl = syl.replace(/busd/g, "butt");
syl = syl.replace(/busm/g, "bunm");
syl = syl.replace(/busb/g, "butb");
syl = syl.replace(/busshi/g, "butshi");

syl = syl.replace(/bussn/g, "bunn");
syl = syl.replace(/bussd/g, "butt");
syl = syl.replace(/bussj/g, "butj");

syl = syl.replace(/bungr/g, "bungn");

syl = syl.replace(/bujh/g, "butj");
syl = syl.replace(/bujg/g, "butg");
syl = syl.replace(/bujn/g, "butn");
syl = syl.replace(/bujd/g, "butt");
syl = syl.replace(/bujm/g, "butm");

syl = syl.replace(/buchh/g, "butj");
syl = syl.replace(/buchg/g, "butg");
syl = syl.replace(/buchn/g, "butn");
syl = syl.replace(/buchd/g, "butt");
syl = syl.replace(/buchm/g, "butm");

syl = syl.replace(/buth/g, "but");
syl = syl.replace(/butd/g, "butt");

syl = syl.replace(/buph/g, "bup");

syl = syl.replace(/buhg/g, "buhk");
syl = syl.replace(/buhr/g, "bur");
	
//bi
syl = syl.replace(/bikh/g, "bik");
syl = syl.replace(/bikn/g, "bing");
syl = syl.replace(/bikr/g, "bign");
syl = syl.replace(/bikg/g, "bikk");
syl = syl.replace(/bikm/g, "bigm");

syl = syl.replace(/bind/g, "bind");
syl = syl.replace(/binr/g, "bill");

syl = syl.replace(/bidh/g, "bidt");
syl = syl.replace(/bidg/g, "bitg");
syl = syl.replace(/bidd/g, "bitt");
syl = syl.replace(/bidm/g, "bitm");

syl = syl.replace(/biln/g, "bill");
syl = syl.replace(/bilr/g, "bill");

syl = syl.replace(/bimr/g, "bimm");
syl = syl.replace(/biml/g, "bimm");

syl = syl.replace(/biph/g, "bip");
syl = syl.replace(/bipg/g, "bibg");
syl = syl.replace(/bipn/g, "bimn");
syl = syl.replace(/bipr/g, "bimn");
syl = syl.replace(/bipm/g, "bimm");

syl = syl.replace(/bish/g, "bit");
syl = syl.replace(/bisg/g, "bitg");
syl = syl.replace(/bisn/g, "bitn");
syl = syl.replace(/bisd/g, "bitt");
syl = syl.replace(/bism/g, "binm");
syl = syl.replace(/bisb/g, "bitb");
syl = syl.replace(/bisshi/g, "bitshi");

syl = syl.replace(/bissn/g, "binn");
syl = syl.replace(/bissd/g, "bitt");
syl = syl.replace(/bissj/g, "bitj");

syl = syl.replace(/bingr/g, "bingn");

syl = syl.replace(/bijh/g, "bitj");
syl = syl.replace(/bijg/g, "bitg");
syl = syl.replace(/bijn/g, "bitn");
syl = syl.replace(/bijd/g, "bitt");
syl = syl.replace(/bijm/g, "bitm");

syl = syl.replace(/bichh/g, "bitj");
syl = syl.replace(/bichg/g, "bitg");
syl = syl.replace(/bichn/g, "bitn");
syl = syl.replace(/bichd/g, "bitt");
syl = syl.replace(/bichm/g, "bitm");

syl = syl.replace(/bith/g, "bit");
syl = syl.replace(/bitd/g, "bitt");

syl = syl.replace(/biph/g, "bip");

syl = syl.replace(/bihg/g, "bihk");
syl = syl.replace(/bihr/g, "bir");
	
//ja
syl = syl.replace(/jakh/g, "jak");
syl = syl.replace(/jakn/g, "jang");
syl = syl.replace(/jakr/g, "jagn");
syl = syl.replace(/jakg/g, "jakk");
syl = syl.replace(/jakm/g, "jagm");

syl = syl.replace(/jand/g, "jand");
syl = syl.replace(/janr/g, "jall");

syl = syl.replace(/jadh/g, "jat");
syl = syl.replace(/jadg/g, "jatg");
syl = syl.replace(/jadd/g, "jatt");
syl = syl.replace(/jadm/g, "jatm");

syl = syl.replace(/jaln/g, "jall");
syl = syl.replace(/jalr/g, "jall");

syl = syl.replace(/jamr/g, "jamm");
syl = syl.replace(/jaml/g, "jamm");

syl = syl.replace(/japh/g, "jap");
syl = syl.replace(/japg/g, "jabg");
syl = syl.replace(/japn/g, "jamn");
syl = syl.replace(/japr/g, "jamn");
syl = syl.replace(/japm/g, "jamm");

syl = syl.replace(/jash/g, "jat");
syl = syl.replace(/jasg/g, "jatg");
syl = syl.replace(/jasn/g, "jatn");
syl = syl.replace(/jasd/g, "jatt");
syl = syl.replace(/jasm/g, "janm");
syl = syl.replace(/jasb/g, "jatb");
syl = syl.replace(/jasshi/g, "jatshi");

syl = syl.replace(/jassn/g, "jann");
syl = syl.replace(/jassd/g, "jatt");
syl = syl.replace(/jassj/g, "jatj");

syl = syl.replace(/jangr/g, "jangn");

syl = syl.replace(/jajh/g, "jatj");
syl = syl.replace(/jajg/g, "jatg");
syl = syl.replace(/jajn/g, "jatn");
syl = syl.replace(/jajd/g, "jatt");
syl = syl.replace(/jajm/g, "jatm");

syl = syl.replace(/jachh/g, "jatj");
syl = syl.replace(/jachg/g, "jatg");
syl = syl.replace(/jachn/g, "jatn");
syl = syl.replace(/jachd/g, "jatt");
syl = syl.replace(/jachm/g, "jatm");

syl = syl.replace(/jath/g, "jat");
syl = syl.replace(/jatd/g, "jatt");

syl = syl.replace(/japh/g, "jap");

syl = syl.replace(/jahg/g, "jahk");
syl = syl.replace(/jahr/g, "jar");
	
//je
syl = syl.replace(/jekh/g, "jek");
syl = syl.replace(/jekn/g, "jeng");
syl = syl.replace(/jekr/g, "jegn");
syl = syl.replace(/jekg/g, "jekk");
syl = syl.replace(/jekm/g, "jegm");

syl = syl.replace(/jend/g, "jend");
syl = syl.replace(/jenr/g, "jell");

syl = syl.replace(/jedh/g, "jedt");
syl = syl.replace(/jedg/g, "jetg");
syl = syl.replace(/jedd/g, "jett");
syl = syl.replace(/jedm/g, "jetm");

syl = syl.replace(/jeln/g, "jell");
syl = syl.replace(/jelr/g, "jell");

syl = syl.replace(/jemr/g, "jemm");
syl = syl.replace(/jeml/g, "jemm");

syl = syl.replace(/jeph/g, "jep");
syl = syl.replace(/jepg/g, "jebg");
syl = syl.replace(/jepn/g, "jemn");
syl = syl.replace(/jepr/g, "jemn");
syl = syl.replace(/jepm/g, "jemm");

syl = syl.replace(/jesh/g, "jet");
syl = syl.replace(/jesg/g, "jetg");
syl = syl.replace(/jesn/g, "jetn");
syl = syl.replace(/jesd/g, "jett");
syl = syl.replace(/jesm/g, "jenm");
syl = syl.replace(/jesb/g, "jetb");
syl = syl.replace(/jesshi/g, "jetshi");

syl = syl.replace(/jessn/g, "jenn");
syl = syl.replace(/jessd/g, "jett");
syl = syl.replace(/jessj/g, "jetj");

syl = syl.replace(/jengr/g, "jengn");

syl = syl.replace(/jejh/g, "jetj");
syl = syl.replace(/jejg/g, "jetg");
syl = syl.replace(/jejn/g, "jetn");
syl = syl.replace(/jejd/g, "jett");
syl = syl.replace(/jejm/g, "jetm");

syl = syl.replace(/jechh/g, "jetj");
syl = syl.replace(/jechg/g, "jetg");
syl = syl.replace(/jechn/g, "jetn");
syl = syl.replace(/jechd/g, "jett");
syl = syl.replace(/jechm/g, "jetm");

syl = syl.replace(/jeth/g, "jet");
syl = syl.replace(/jetd/g, "jett");

syl = syl.replace(/jeph/g, "jep");

syl = syl.replace(/jehg/g, "jehk");
syl = syl.replace(/jehr/g, "jer");

//jo
syl = syl.replace(/jokh/g, "jok");
syl = syl.replace(/jokn/g, "jong");
syl = syl.replace(/jokr/g, "jogn");
syl = syl.replace(/jokg/g, "jokk");
syl = syl.replace(/jokm/g, "jogm");

syl = syl.replace(/jond/g, "jond");
syl = syl.replace(/jonr/g, "joll");

syl = syl.replace(/jodh/g, "jodt");
syl = syl.replace(/jodg/g, "jotg");
syl = syl.replace(/jodd/g, "jott");
syl = syl.replace(/jodm/g, "jotm");

syl = syl.replace(/joln/g, "joll");
syl = syl.replace(/jolr/g, "joll");

syl = syl.replace(/jomr/g, "jomm");
syl = syl.replace(/joml/g, "jomm");

syl = syl.replace(/joph/g, "jop");
syl = syl.replace(/jopg/g, "jobg");
syl = syl.replace(/jopn/g, "jomn");
syl = syl.replace(/jopr/g, "jomn");
syl = syl.replace(/jopm/g, "jomm");

syl = syl.replace(/josh/g, "jot");
syl = syl.replace(/josg/g, "jotg");
syl = syl.replace(/josn/g, "jotn");
syl = syl.replace(/josd/g, "jott");
syl = syl.replace(/josm/g, "jonm");
syl = syl.replace(/josb/g, "jotb");
syl = syl.replace(/josshi/g, "jotshi");

syl = syl.replace(/jossn/g, "jonn");
syl = syl.replace(/jossd/g, "jott");
syl = syl.replace(/jossj/g, "jotj");

syl = syl.replace(/jongr/g, "jongn");

syl = syl.replace(/jojh/g, "jotj");
syl = syl.replace(/jojg/g, "jotg");
syl = syl.replace(/jojn/g, "jotn");
syl = syl.replace(/jojd/g, "jott");
syl = syl.replace(/jojm/g, "jotm");

syl = syl.replace(/jochh/g, "jotj");
syl = syl.replace(/jochg/g, "jotg");
syl = syl.replace(/jochn/g, "jotn");
syl = syl.replace(/jochd/g, "jott");
syl = syl.replace(/jochm/g, "jotm");

syl = syl.replace(/joth/g, "jot");
syl = syl.replace(/jotd/g, "jott");

syl = syl.replace(/joph/g, "jop");

syl = syl.replace(/johg/g, "johk");
syl = syl.replace(/johr/g, "jor");
	
//ju
syl = syl.replace(/jukh/g, "juk");
syl = syl.replace(/jukn/g, "jung");
syl = syl.replace(/jukr/g, "jugn");
syl = syl.replace(/jukg/g, "jukk");
syl = syl.replace(/jukm/g, "jugm");

syl = syl.replace(/jund/g, "jund");
syl = syl.replace(/junr/g, "jull");

syl = syl.replace(/judh/g, "judt");
syl = syl.replace(/judg/g, "jutg");
syl = syl.replace(/judd/g, "jutt");
syl = syl.replace(/judm/g, "jutm");

syl = syl.replace(/juln/g, "jull");
syl = syl.replace(/julr/g, "jull");

syl = syl.replace(/jumr/g, "jumm");
syl = syl.replace(/juml/g, "jumm");

syl = syl.replace(/juph/g, "jup");
syl = syl.replace(/jupg/g, "jubg");
syl = syl.replace(/jupn/g, "jumn");
syl = syl.replace(/jupr/g, "jumn");
syl = syl.replace(/jupm/g, "jumm");

syl = syl.replace(/jush/g, "jut");
syl = syl.replace(/jusg/g, "jutg");
syl = syl.replace(/jusn/g, "jutn");
syl = syl.replace(/jusd/g, "jutt");
syl = syl.replace(/jusm/g, "junm");
syl = syl.replace(/jusb/g, "jutb");
syl = syl.replace(/jusshi/g, "jutshi");

syl = syl.replace(/jussn/g, "junn");
syl = syl.replace(/jussd/g, "jutt");
syl = syl.replace(/jussj/g, "jutj");

syl = syl.replace(/jungr/g, "jungn");

syl = syl.replace(/jujh/g, "jutj");
syl = syl.replace(/jujg/g, "jutg");
syl = syl.replace(/jujn/g, "jutn");
syl = syl.replace(/jujd/g, "jutt");
syl = syl.replace(/jujm/g, "jutm");

syl = syl.replace(/juchh/g, "jutj");
syl = syl.replace(/juchg/g, "jutg");
syl = syl.replace(/juchn/g, "jutn");
syl = syl.replace(/juchd/g, "jutt");
syl = syl.replace(/juchm/g, "jutm");

syl = syl.replace(/juth/g, "jut");
syl = syl.replace(/jutd/g, "jutt");

syl = syl.replace(/juph/g, "jup");

syl = syl.replace(/juhg/g, "juhk");
syl = syl.replace(/juhr/g, "jur");

//ji
syl = syl.replace(/jikh/g, "jik");
syl = syl.replace(/jikn/g, "jing");
syl = syl.replace(/jikr/g, "jign");
syl = syl.replace(/jikg/g, "jikk");
syl = syl.replace(/jikm/g, "jigm");

syl = syl.replace(/jind/g, "jind");
syl = syl.replace(/jinr/g, "jill");

syl = syl.replace(/jidh/g, "jidt");
syl = syl.replace(/jidg/g, "jitg");
syl = syl.replace(/jidd/g, "jitt");
syl = syl.replace(/jidm/g, "jitm");

syl = syl.replace(/jiln/g, "jill");
syl = syl.replace(/jilr/g, "jill");

syl = syl.replace(/jimr/g, "jimm");
syl = syl.replace(/jiml/g, "jimm");

syl = syl.replace(/jiph/g, "jip");
syl = syl.replace(/jipg/g, "jibg");
syl = syl.replace(/jipn/g, "jimn");
syl = syl.replace(/jipr/g, "jimn");
syl = syl.replace(/jipm/g, "jimm");

syl = syl.replace(/jish/g, "jit");
syl = syl.replace(/jisg/g, "jitg");
syl = syl.replace(/jisn/g, "jitn");
syl = syl.replace(/jisd/g, "jitt");
syl = syl.replace(/jism/g, "jinm");
syl = syl.replace(/jisb/g, "jitb");
syl = syl.replace(/jisshi/g, "jitshi");

syl = syl.replace(/jissn/g, "jinn");
syl = syl.replace(/jissd/g, "jitt");
syl = syl.replace(/jissj/g, "jitj");

syl = syl.replace(/jingr/g, "jingn");

syl = syl.replace(/jijh/g, "jitj");
syl = syl.replace(/jijg/g, "jitg");
syl = syl.replace(/jijn/g, "jitn");
syl = syl.replace(/jijd/g, "jitt");
syl = syl.replace(/jijm/g, "jitm");

syl = syl.replace(/jichh/g, "jitj");
syl = syl.replace(/jichg/g, "jitg");
syl = syl.replace(/jichn/g, "jitn");
syl = syl.replace(/jichd/g, "jitt");
syl = syl.replace(/jichm/g, "jitm");

syl = syl.replace(/jith/g, "jit");
syl = syl.replace(/jitd/g, "jitt");

syl = syl.replace(/jiph/g, "jip");

syl = syl.replace(/jihg/g, "jihk");
syl = syl.replace(/jihr/g, "jir");

//cha
syl = syl.replace(/chakh/g, "chak");
syl = syl.replace(/chakn/g, "chang");
syl = syl.replace(/chakr/g, "chagn");
syl = syl.replace(/chakg/g, "chakk");
syl = syl.replace(/chakm/g, "chagm");

syl = syl.replace(/chand/g, "chand");
syl = syl.replace(/chanr/g, "chall");

syl = syl.replace(/chadh/g, "chat");
syl = syl.replace(/chadg/g, "chatg");
syl = syl.replace(/chadd/g, "chatt");
syl = syl.replace(/chadm/g, "chatm");

syl = syl.replace(/chaln/g, "chall");
syl = syl.replace(/chalr/g, "chall");

syl = syl.replace(/chamr/g, "chamm");
syl = syl.replace(/chaml/g, "chamm");

syl = syl.replace(/chaph/g, "chap");
syl = syl.replace(/chapg/g, "chabg");
syl = syl.replace(/chapn/g, "chamn");
syl = syl.replace(/chapr/g, "chamn");
syl = syl.replace(/chapm/g, "chamm");

syl = syl.replace(/chash/g, "chat");
syl = syl.replace(/chasg/g, "chatg");
syl = syl.replace(/chasn/g, "chatn");
syl = syl.replace(/chasd/g, "chatt");
syl = syl.replace(/chasm/g, "chanm");
syl = syl.replace(/chasb/g, "chatb");
syl = syl.replace(/chasshi/g, "chatshi");

syl = syl.replace(/chassn/g, "chann");
syl = syl.replace(/chassd/g, "chatt");
syl = syl.replace(/chassj/g, "chatj");

syl = syl.replace(/changr/g, "changn");

syl = syl.replace(/chajh/g, "chatj");
syl = syl.replace(/chajg/g, "chatg");
syl = syl.replace(/chajn/g, "chatn");
syl = syl.replace(/chajd/g, "chatt");
syl = syl.replace(/chajm/g, "chatm");

syl = syl.replace(/chachh/g, "chatj");
syl = syl.replace(/chachg/g, "chatg");
syl = syl.replace(/chachn/g, "chatn");
syl = syl.replace(/chachd/g, "chatt");
syl = syl.replace(/chachm/g, "chatm");

syl = syl.replace(/chath/g, "chat");
syl = syl.replace(/chatd/g, "chatt");

syl = syl.replace(/chaph/g, "chap");

syl = syl.replace(/chahg/g, "chahk");
syl = syl.replace(/chahr/g, "char");

//che
syl = syl.replace(/chekh/g, "chek");
syl = syl.replace(/chekn/g, "cheng");
syl = syl.replace(/chekr/g, "chegn");
syl = syl.replace(/chekg/g, "chekk");
syl = syl.replace(/chekm/g, "chegm");

syl = syl.replace(/chend/g, "chend");
syl = syl.replace(/chenr/g, "chell");

syl = syl.replace(/chedh/g, "chedt");
syl = syl.replace(/chedg/g, "chetg");
syl = syl.replace(/chedd/g, "chett");
syl = syl.replace(/chedm/g, "chetm");

syl = syl.replace(/cheln/g, "chell");
syl = syl.replace(/chelr/g, "chell");

syl = syl.replace(/chemr/g, "chemm");
syl = syl.replace(/cheml/g, "chemm");

syl = syl.replace(/cheph/g, "chep");
syl = syl.replace(/chepg/g, "chebg");
syl = syl.replace(/chepn/g, "chemn");
syl = syl.replace(/chepr/g, "chemn");
syl = syl.replace(/chepm/g, "chemm");

syl = syl.replace(/chesh/g, "chet");
syl = syl.replace(/chesg/g, "chetg");
syl = syl.replace(/chesn/g, "chetn");
syl = syl.replace(/chesd/g, "chett");
syl = syl.replace(/chesm/g, "chenm");
syl = syl.replace(/chesb/g, "chetb");
syl = syl.replace(/chesshi/g, "chetshi");

syl = syl.replace(/chessn/g, "chenn");
syl = syl.replace(/chessd/g, "chett");
syl = syl.replace(/chessj/g, "chetj");

syl = syl.replace(/chengr/g, "chengn");

syl = syl.replace(/chejh/g, "chetj");
syl = syl.replace(/chejg/g, "chetg");
syl = syl.replace(/chejn/g, "chetn");
syl = syl.replace(/chejd/g, "chett");
syl = syl.replace(/chejm/g, "chetm");

syl = syl.replace(/chechh/g, "chetj");
syl = syl.replace(/chechg/g, "chetg");
syl = syl.replace(/chechn/g, "chetn");
syl = syl.replace(/chechd/g, "chett");
syl = syl.replace(/chechm/g, "chetm");

syl = syl.replace(/cheth/g, "chet");
syl = syl.replace(/chetd/g, "chett");

syl = syl.replace(/cheph/g, "chep");

syl = syl.replace(/chehg/g, "chehk");
syl = syl.replace(/chehr/g, "cher");

//cho
syl = syl.replace(/chokh/g, "chok");
syl = syl.replace(/chokn/g, "chong");
syl = syl.replace(/chokr/g, "chogn");
syl = syl.replace(/chokg/g, "chokk");
syl = syl.replace(/chokm/g, "chogm");

syl = syl.replace(/chond/g, "chond");
syl = syl.replace(/chonr/g, "choll");

syl = syl.replace(/chodh/g, "chodt");
syl = syl.replace(/chodg/g, "chotg");
syl = syl.replace(/chodd/g, "chott");
syl = syl.replace(/chodm/g, "chotm");

syl = syl.replace(/choln/g, "choll");
syl = syl.replace(/cholr/g, "choll");

syl = syl.replace(/chomr/g, "chomm");
syl = syl.replace(/choml/g, "chomm");

syl = syl.replace(/choph/g, "chop");
syl = syl.replace(/chopg/g, "chobg");
syl = syl.replace(/chopn/g, "chomn");
syl = syl.replace(/chopr/g, "chomn");
syl = syl.replace(/chopm/g, "chomm");

syl = syl.replace(/chosh/g, "chot");
syl = syl.replace(/chosg/g, "chotg");
syl = syl.replace(/chosn/g, "chotn");
syl = syl.replace(/chosd/g, "chott");
syl = syl.replace(/chosm/g, "chonm");
syl = syl.replace(/chosb/g, "chotb");
syl = syl.replace(/chosshi/g, "chotshi");

syl = syl.replace(/chossn/g, "chonn");
syl = syl.replace(/chossd/g, "chott");
syl = syl.replace(/chossj/g, "chotj");

syl = syl.replace(/chongr/g, "chongn");

syl = syl.replace(/chojh/g, "chotj");
syl = syl.replace(/chojg/g, "chotg");
syl = syl.replace(/chojn/g, "chotn");
syl = syl.replace(/chojd/g, "chott");
syl = syl.replace(/chojm/g, "chotm");

syl = syl.replace(/chochh/g, "chotj");
syl = syl.replace(/chochg/g, "chotg");
syl = syl.replace(/chochn/g, "chotn");
syl = syl.replace(/chochd/g, "chott");
syl = syl.replace(/chochm/g, "chotm");

syl = syl.replace(/choth/g, "chot");
syl = syl.replace(/chotd/g, "chott");

syl = syl.replace(/choph/g, "chop");

syl = syl.replace(/chohg/g, "chohk");
syl = syl.replace(/chohr/g, "chor");

//chu
syl = syl.replace(/chukh/g, "chuk");
syl = syl.replace(/chukn/g, "chung");
syl = syl.replace(/chukr/g, "chugn");
syl = syl.replace(/chukg/g, "chukk");
syl = syl.replace(/chukm/g, "chugm");

syl = syl.replace(/chund/g, "chund");
syl = syl.replace(/chunr/g, "chull");

syl = syl.replace(/chudh/g, "chudt");
syl = syl.replace(/chudg/g, "chutg");
syl = syl.replace(/chudd/g, "chutt");
syl = syl.replace(/chudm/g, "chutm");

syl = syl.replace(/chuln/g, "chull");
syl = syl.replace(/chulr/g, "chull");

syl = syl.replace(/chumr/g, "chumm");
syl = syl.replace(/chuml/g, "chumm");

syl = syl.replace(/chuph/g, "chup");
syl = syl.replace(/chupg/g, "chubg");
syl = syl.replace(/chupn/g, "chumn");
syl = syl.replace(/chupr/g, "chumn");
syl = syl.replace(/chupm/g, "chumm");

syl = syl.replace(/chush/g, "chut");
syl = syl.replace(/chusg/g, "chutg");
syl = syl.replace(/chusn/g, "chutn");
syl = syl.replace(/chusd/g, "chutt");
syl = syl.replace(/chusm/g, "chunm");
syl = syl.replace(/chusb/g, "chutb");
syl = syl.replace(/chusshi/g, "chutshi");

syl = syl.replace(/chussn/g, "chunn");
syl = syl.replace(/chussd/g, "chutt");
syl = syl.replace(/chussj/g, "chutj");

syl = syl.replace(/chungr/g, "chungn");

syl = syl.replace(/chujh/g, "chutj");
syl = syl.replace(/chujg/g, "chutg");
syl = syl.replace(/chujn/g, "chutn");
syl = syl.replace(/chujd/g, "chutt");
syl = syl.replace(/chujm/g, "chutm");

syl = syl.replace(/chuchh/g, "chutj");
syl = syl.replace(/chuchg/g, "chutg");
syl = syl.replace(/chuchn/g, "chutn");
syl = syl.replace(/chuchd/g, "chutt");
syl = syl.replace(/chuchm/g, "chutm");

syl = syl.replace(/chuth/g, "chut");
syl = syl.replace(/chutd/g, "chutt");

syl = syl.replace(/chuph/g, "chup");

syl = syl.replace(/chuhg/g, "chuhk");
syl = syl.replace(/chuhr/g, "chur");
	
//chi
syl = syl.replace(/chikh/g, "chik");
syl = syl.replace(/chikn/g, "ching");
syl = syl.replace(/chikr/g, "chign");
syl = syl.replace(/chikg/g, "chikk");
syl = syl.replace(/chikm/g, "chigm");

syl = syl.replace(/chind/g, "chind");
syl = syl.replace(/chinr/g, "chill");

syl = syl.replace(/chidh/g, "chidt");
syl = syl.replace(/chidg/g, "chitg");
syl = syl.replace(/chidd/g, "chitt");
syl = syl.replace(/chidm/g, "chitm");

syl = syl.replace(/chiln/g, "chill");
syl = syl.replace(/chilr/g, "chill");

syl = syl.replace(/chimr/g, "chimm");
syl = syl.replace(/chiml/g, "chimm");

syl = syl.replace(/chiph/g, "chip");
syl = syl.replace(/chipg/g, "chibg");
syl = syl.replace(/chipn/g, "chimn");
syl = syl.replace(/chipr/g, "chimn");
syl = syl.replace(/chipm/g, "chimm");

syl = syl.replace(/chish/g, "chit");
syl = syl.replace(/chisg/g, "chitg");
syl = syl.replace(/chisn/g, "chitn");
syl = syl.replace(/chisd/g, "chitt");
syl = syl.replace(/chism/g, "chinm");
syl = syl.replace(/chisb/g, "chitb");
syl = syl.replace(/chisshi/g, "chitshi");

syl = syl.replace(/chissn/g, "chinn");
syl = syl.replace(/chissd/g, "chitt");
syl = syl.replace(/chissj/g, "chitj");

syl = syl.replace(/chingr/g, "chingn");

syl = syl.replace(/chijh/g, "chitj");
syl = syl.replace(/chijg/g, "chitg");
syl = syl.replace(/chijn/g, "chitn");
syl = syl.replace(/chijd/g, "chitt");
syl = syl.replace(/chijm/g, "chitm");

syl = syl.replace(/chichh/g, "chitj");
syl = syl.replace(/chichg/g, "chitg");
syl = syl.replace(/chichn/g, "chitn");
syl = syl.replace(/chichd/g, "chitt");
syl = syl.replace(/chichm/g, "chitm");

syl = syl.replace(/chith/g, "chit");
syl = syl.replace(/chitd/g, "chitt");

syl = syl.replace(/chiph/g, "chip");

syl = syl.replace(/chihg/g, "chihk");
syl = syl.replace(/chihr/g, "chir");

//sa
syl = syl.replace(/sakh/g, "sak");
syl = syl.replace(/sakn/g, "sang");
syl = syl.replace(/sakr/g, "sagn");
syl = syl.replace(/sakg/g, "sakk");
syl = syl.replace(/sakm/g, "sagm");

syl = syl.replace(/sand/g, "sand");
syl = syl.replace(/sanr/g, "sall");

syl = syl.replace(/sadh/g, "sat");
syl = syl.replace(/sadg/g, "satg");
syl = syl.replace(/sadd/g, "satt");
syl = syl.replace(/sadm/g, "satm");

syl = syl.replace(/saln/g, "sall");
syl = syl.replace(/salr/g, "sall");

syl = syl.replace(/samr/g, "samm");
syl = syl.replace(/saml/g, "samm");

syl = syl.replace(/saph/g, "sap");
syl = syl.replace(/sapg/g, "sabg");
syl = syl.replace(/sapn/g, "samn");
syl = syl.replace(/sapr/g, "samn");
syl = syl.replace(/sapm/g, "samm");

syl = syl.replace(/sasg/g, "satg");
syl = syl.replace(/sasn/g, "satn");
syl = syl.replace(/sasd/g, "satt");
syl = syl.replace(/sasm/g, "sanm");
syl = syl.replace(/sasb/g, "satb");
syl = syl.replace(/sasshi/g, "satshi");

syl = syl.replace(/sassn/g, "sann");
syl = syl.replace(/sassd/g, "satt");
syl = syl.replace(/sassj/g, "satj");

syl = syl.replace(/sangr/g, "sangn");

syl = syl.replace(/sajh/g, "satj");
syl = syl.replace(/sajg/g, "satg");
syl = syl.replace(/sajn/g, "satn");
syl = syl.replace(/sajd/g, "satt");
syl = syl.replace(/sajm/g, "satm");

syl = syl.replace(/sachh/g, "satj");
syl = syl.replace(/sachg/g, "satg");
syl = syl.replace(/sachn/g, "satn");
syl = syl.replace(/sachd/g, "satt");
syl = syl.replace(/sachm/g, "satm");

syl = syl.replace(/sath/g, "sat");
syl = syl.replace(/satd/g, "satt");

syl = syl.replace(/saph/g, "sap");

syl = syl.replace(/sahg/g, "sahk");
syl = syl.replace(/sahr/g, "sar");
	
//se
syl = syl.replace(/sekh/g, "sek");
syl = syl.replace(/sekn/g, "seng");
syl = syl.replace(/sekr/g, "segn");
syl = syl.replace(/sekg/g, "sekk");
syl = syl.replace(/sekm/g, "segm");

syl = syl.replace(/send/g, "send");
syl = syl.replace(/senr/g, "sell");

syl = syl.replace(/sedh/g, "sedt");
syl = syl.replace(/sedg/g, "setg");
syl = syl.replace(/sedd/g, "sett");
syl = syl.replace(/sedm/g, "setm");

syl = syl.replace(/seln/g, "sell");
syl = syl.replace(/selr/g, "sell");

syl = syl.replace(/semr/g, "semm");
syl = syl.replace(/seml/g, "semm");

syl = syl.replace(/seph/g, "sep");
syl = syl.replace(/sepg/g, "sebg");
syl = syl.replace(/sepn/g, "semn");
syl = syl.replace(/sepr/g, "semn");
syl = syl.replace(/sepm/g, "semm");

syl = syl.replace(/sesh/g, "set");
syl = syl.replace(/sesg/g, "setg");
syl = syl.replace(/sesn/g, "setn");
syl = syl.replace(/sesd/g, "sett");
syl = syl.replace(/sesm/g, "senm");
syl = syl.replace(/sesb/g, "setb");
syl = syl.replace(/sesshi/g, "setshi");

syl = syl.replace(/sessn/g, "senn");
syl = syl.replace(/sessd/g, "sett");
syl = syl.replace(/sessj/g, "setj");

syl = syl.replace(/sengr/g, "sengn");

syl = syl.replace(/sejh/g, "setj");
syl = syl.replace(/sejg/g, "setg");
syl = syl.replace(/sejn/g, "setn");
syl = syl.replace(/sejd/g, "sett");
syl = syl.replace(/sejm/g, "setm");

syl = syl.replace(/sechh/g, "setj");
syl = syl.replace(/sechg/g, "setg");
syl = syl.replace(/sechn/g, "setn");
syl = syl.replace(/sechd/g, "sett");
syl = syl.replace(/sechm/g, "setm");

syl = syl.replace(/seth/g, "set");
syl = syl.replace(/setd/g, "sett");

syl = syl.replace(/seph/g, "sep");

syl = syl.replace(/sehg/g, "sehk");
syl = syl.replace(/sehr/g, "ser");
	
//so
syl = syl.replace(/sokh/g, "sok");
syl = syl.replace(/sokn/g, "song");
syl = syl.replace(/sokr/g, "sogn");
syl = syl.replace(/sokg/g, "sokk");
syl = syl.replace(/sokm/g, "sogm");

syl = syl.replace(/sond/g, "sond");
syl = syl.replace(/sonr/g, "soll");

syl = syl.replace(/sodh/g, "sodt");
syl = syl.replace(/sodg/g, "sotg");
syl = syl.replace(/sodd/g, "sott");
syl = syl.replace(/sodm/g, "sotm");

syl = syl.replace(/soln/g, "soll");
syl = syl.replace(/solr/g, "soll");

syl = syl.replace(/somr/g, "somm");
syl = syl.replace(/soml/g, "somm");

syl = syl.replace(/soph/g, "sop");
syl = syl.replace(/sopg/g, "sobg");
syl = syl.replace(/sopn/g, "somn");
syl = syl.replace(/sopr/g, "somn");
syl = syl.replace(/sopm/g, "somm");

syl = syl.replace(/sosh/g, "sot");
syl = syl.replace(/sosg/g, "sotg");
syl = syl.replace(/sosn/g, "sotn");
syl = syl.replace(/sosd/g, "sott");
syl = syl.replace(/sosm/g, "sonm");
syl = syl.replace(/sosb/g, "sotb");
syl = syl.replace(/sosshi/g, "sotshi");

syl = syl.replace(/sossn/g, "sonn");
syl = syl.replace(/sossd/g, "sott");
syl = syl.replace(/sossj/g, "sotj");

syl = syl.replace(/songr/g, "songn");

syl = syl.replace(/sojh/g, "sotj");
syl = syl.replace(/sojg/g, "sotg");
syl = syl.replace(/sojn/g, "sotn");
syl = syl.replace(/sojd/g, "sott");
syl = syl.replace(/sojm/g, "sotm");

syl = syl.replace(/sochh/g, "sotj");
syl = syl.replace(/sochg/g, "sotg");
syl = syl.replace(/sochn/g, "sotn");
syl = syl.replace(/sochd/g, "sott");
syl = syl.replace(/sochm/g, "sotm");

syl = syl.replace(/soth/g, "sot");
syl = syl.replace(/sotd/g, "sott");

syl = syl.replace(/soph/g, "sop");

syl = syl.replace(/sohg/g, "sohk");
syl = syl.replace(/sohr/g, "sor");

//su
syl = syl.replace(/sukh/g, "suk");
syl = syl.replace(/sukn/g, "sung");
syl = syl.replace(/sukr/g, "sugn");
syl = syl.replace(/sukg/g, "sukk");
syl = syl.replace(/sukm/g, "sugm");

syl = syl.replace(/sund/g, "sund");
syl = syl.replace(/sunr/g, "sull");

syl = syl.replace(/sudh/g, "sudt");
syl = syl.replace(/sudg/g, "sutg");
syl = syl.replace(/sudd/g, "sutt");
syl = syl.replace(/sudm/g, "sutm");

syl = syl.replace(/suln/g, "sull");
syl = syl.replace(/sulr/g, "sull");

syl = syl.replace(/sumr/g, "summ");
syl = syl.replace(/suml/g, "summ");

syl = syl.replace(/suph/g, "sup");
syl = syl.replace(/supg/g, "subg");
syl = syl.replace(/supn/g, "sumn");
syl = syl.replace(/supr/g, "sumn");
syl = syl.replace(/supm/g, "summ");

syl = syl.replace(/sush/g, "sut");
syl = syl.replace(/susg/g, "sutg");
syl = syl.replace(/susn/g, "sutn");
syl = syl.replace(/susd/g, "sutt");
syl = syl.replace(/susm/g, "sunm");
syl = syl.replace(/susb/g, "sutb");
syl = syl.replace(/susshi/g, "sutshi");

syl = syl.replace(/sussn/g, "sunn");
syl = syl.replace(/sussd/g, "sutt");
syl = syl.replace(/sussj/g, "sutj");

syl = syl.replace(/sungr/g, "sungn");

syl = syl.replace(/sujh/g, "sutj");
syl = syl.replace(/sujg/g, "sutg");
syl = syl.replace(/sujn/g, "sutn");
syl = syl.replace(/sujd/g, "sutt");
syl = syl.replace(/sujm/g, "sutm");

syl = syl.replace(/suchh/g, "sutj");
syl = syl.replace(/suchg/g, "sutg");
syl = syl.replace(/suchn/g, "sutn");
syl = syl.replace(/suchd/g, "sutt");
syl = syl.replace(/suchm/g, "sutm");

syl = syl.replace(/suth/g, "sut");
syl = syl.replace(/sutd/g, "sutt");

syl = syl.replace(/suph/g, "sup");

syl = syl.replace(/suhg/g, "suhk");
syl = syl.replace(/suhr/g, "sur");
	
//shi
syl = syl.replace(/shikh/g, "shik");
syl = syl.replace(/shikn/g, "shing");
syl = syl.replace(/shikr/g, "shign");
syl = syl.replace(/shikg/g, "shikk");
syl = syl.replace(/shikm/g, "shigm");

syl = syl.replace(/shind/g, "shind");
syl = syl.replace(/shinr/g, "shill");

syl = syl.replace(/shidh/g, "shidt");
syl = syl.replace(/shidg/g, "shitg");
syl = syl.replace(/shidd/g, "shitt");
syl = syl.replace(/shidm/g, "shitm");

syl = syl.replace(/shiln/g, "shill");
syl = syl.replace(/shilr/g, "shill");

syl = syl.replace(/shimr/g, "shimm");
syl = syl.replace(/shiml/g, "shimm");

syl = syl.replace(/shiph/g, "ship");
syl = syl.replace(/shipg/g, "shibg");
syl = syl.replace(/shipn/g, "shimn");
syl = syl.replace(/shipr/g, "shimn");
syl = syl.replace(/shipm/g, "shimm");

syl = syl.replace(/shish/g, "shit");
syl = syl.replace(/shisg/g, "shitg");
syl = syl.replace(/shisn/g, "shitn");
syl = syl.replace(/shisd/g, "shitt");
syl = syl.replace(/shism/g, "shinm");
syl = syl.replace(/shisb/g, "shitb");
syl = syl.replace(/shisshi/g, "shitshi");

syl = syl.replace(/shissn/g, "shinn");
syl = syl.replace(/shissd/g, "shitt");
syl = syl.replace(/shissj/g, "shitj");

syl = syl.replace(/shingr/g, "shingn");

syl = syl.replace(/shijh/g, "shitj");
syl = syl.replace(/shijg/g, "shitg");
syl = syl.replace(/shijn/g, "shitn");
syl = syl.replace(/shijd/g, "shitt");
syl = syl.replace(/shijm/g, "shitm");

syl = syl.replace(/shichh/g, "shitj");
syl = syl.replace(/shichg/g, "shitg");
syl = syl.replace(/shichn/g, "shitn");
syl = syl.replace(/shichd/g, "shitt");
syl = syl.replace(/shichm/g, "shitm");

syl = syl.replace(/shith/g, "shit");
syl = syl.replace(/shitd/g, "shitt");

syl = syl.replace(/shiph/g, "ship");

syl = syl.replace(/shihg/g, "shihk");
syl = syl.replace(/shihr/g, "shir");

//l followed by ng
syl = syl.replace(/ola/g, "ora");
syl = syl.replace(/ole/g, "ore");
syl = syl.replace(/oli/g, "ori");
syl = syl.replace(/olu/g, "oru");
syl = syl.replace(/olo/g, "oro");
syl = syl.replace(/oly/g, "ory");
syl = syl.replace(/olw/g, "orw");

syl = syl.replace(/ala/g, "ara");
syl = syl.replace(/ale/g, "are");
syl = syl.replace(/ali/g, "ari");
syl = syl.replace(/alu/g, "aru");
syl = syl.replace(/alo/g, "aro");
syl = syl.replace(/aly/g, "ary");
syl = syl.replace(/alw/g, "arw");

syl = syl.replace(/ila/g, "ira");
syl = syl.replace(/ile/g, "ire");
syl = syl.replace(/ili/g, "iri");
syl = syl.replace(/ilu/g, "iru");
syl = syl.replace(/ilo/g, "iro");
syl = syl.replace(/ily/g, "iry");
syl = syl.replace(/ilw/g, "irw");

syl = syl.replace(/ela/g, "era");
syl = syl.replace(/ele/g, "ere");
syl = syl.replace(/eli/g, "eri");
syl = syl.replace(/elu/g, "eru");
syl = syl.replace(/elo/g, "ero");
syl = syl.replace(/ely/g, "ery");
syl = syl.replace(/elw/g, "erw");

syl = syl.replace(/ula/g, "ura");
syl = syl.replace(/ule/g, "ure");
syl = syl.replace(/uli/g, "uri");
syl = syl.replace(/ulu/g, "uru");
syl = syl.replace(/ulo/g, "uro");
syl = syl.replace(/uly/g, "ury");
syl = syl.replace(/ulw/g, "urw");

syl = syl.replace(/ola/g, "ora");
syl = syl.replace(/ole/g, "ore");
syl = syl.replace(/oli/g, "ori");
syl = syl.replace(/olu/g, "oru");
syl = syl.replace(/olo/g, "oro");
syl = syl.replace(/oly/g, "ory");
syl = syl.replace(/olw/g, "orw");

syl = syl.replace(/olra/g, "olla");
syl = syl.replace(/olri/g, "olli");
syl = syl.replace(/olru/g, "ollu");
syl = syl.replace(/olre/g, "olle");
syl = syl.replace(/olro/g, "ollo");
syl = syl.replace(/olry/g, "olly");
	
syl = syl.replace(/alra/g, "alla");
syl = syl.replace(/alri/g, "alli");
syl = syl.replace(/alru/g, "allu");
syl = syl.replace(/alre/g, "alle");
syl = syl.replace(/alro/g, "allo");
syl = syl.replace(/alry/g, "ally");
	
syl = syl.replace(/ilra/g, "illa");
syl = syl.replace(/ilri/g, "illi");
syl = syl.replace(/ilru/g, "illu");
syl = syl.replace(/ilre/g, "ille");
syl = syl.replace(/ilro/g, "illo");
syl = syl.replace(/ilry/g, "illy");
	
syl = syl.replace(/ulra/g, "ulla");
syl = syl.replace(/ulri/g, "ulli");
syl = syl.replace(/ulru/g, "ullu");
syl = syl.replace(/ulre/g, "ulle");
syl = syl.replace(/ulro/g, "ullo");
syl = syl.replace(/ulry/g, "ully");
	
syl = syl.replace(/elra/g, "ella");
syl = syl.replace(/elri/g, "elli");
syl = syl.replace(/elru/g, "ellu");
syl = syl.replace(/elre/g, "elle");
syl = syl.replace(/elro/g, "ello");
syl = syl.replace(/elry/g, "elly");

//맛있는
syl = syl.replace(/atissn/g, "ashinn");
syl = syl.replace(/itissn/g, "ishinn");
syl = syl.replace(/etissn/g, "eshinn");
syl = syl.replace(/utissn/g, "ushinn");
syl = syl.replace(/otissn/g, "oshinn");

syl = syl.replace(/atassn/g, "ashann");
syl = syl.replace(/itassn/g, "ishann");
syl = syl.replace(/etassn/g, "eshann");
syl = syl.replace(/utassn/g, "ushann");
syl = syl.replace(/otassn/g, "oshann");

syl = syl.replace(/atessn/g, "ashenn");
syl = syl.replace(/itessn/g, "ishenn");
syl = syl.replace(/etessn/g, "eshenn");
syl = syl.replace(/utessn/g, "ushenn");
syl = syl.replace(/otessn/g, "oshenn");

syl = syl.replace(/atussn/g, "ashunn");
syl = syl.replace(/itussn/g, "ishunn");
syl = syl.replace(/etussn/g, "eshunn");
syl = syl.replace(/utussn/g, "ushunn");
syl = syl.replace(/otussn/g, "oshunn");

syl = syl.replace(/atossn/g, "ashonn");
syl = syl.replace(/itossn/g, "ishonn");
syl = syl.replace(/etossn/g, "eshonn");
syl = syl.replace(/utossn/g, "ushonn");
syl = syl.replace(/otossn/g, "oshonn");

//k followed by ng
syl = syl.replace(/chaka/g, "chaga");
syl = syl.replace(/gaka/g, "gaga");
syl = syl.replace(/saka/g, "saga");
syl = syl.replace(/naka/g, "naga");
syl = syl.replace(/paka/g, "paga");
syl = syl.replace(/baka/g, "baga");
syl = syl.replace(/maka/g, "maga");
syl = syl.replace(/daka/g, "daga");
syl = syl.replace(/jaka/g, "jaga");
syl = syl.replace(/kaka/g, "kaga");
syl = syl.replace(/taka/g, "taga");
syl = syl.replace(/haka/g, "haga");

syl = syl.replace(/cheka/g, "chega");
syl = syl.replace(/geka/g, "gega");
syl = syl.replace(/seka/g, "sega");
syl = syl.replace(/neka/g, "nega");
syl = syl.replace(/peka/g, "pega");
syl = syl.replace(/beka/g, "bega");
syl = syl.replace(/meka/g, "mega");
syl = syl.replace(/deka/g, "dega");
syl = syl.replace(/jeka/g, "jega");
syl = syl.replace(/keka/g, "kega");
syl = syl.replace(/teka/g, "tega");
syl = syl.replace(/heka/g, "hega");

syl = syl.replace(/choka/g, "choga");
syl = syl.replace(/goka/g, "goga");
syl = syl.replace(/soka/g, "soga");
syl = syl.replace(/noka/g, "noga");
syl = syl.replace(/poka/g, "poga");
syl = syl.replace(/boka/g, "boga");
syl = syl.replace(/moka/g, "moga");
syl = syl.replace(/doka/g, "doga");
syl = syl.replace(/joka/g, "joga");
syl = syl.replace(/koka/g, "koga");
syl = syl.replace(/toka/g, "toga");
syl = syl.replace(/hoka/g, "hoga");

syl = syl.replace(/chika/g, "chiga");
syl = syl.replace(/gika/g, "giga");
syl = syl.replace(/sika/g, "siga");
syl = syl.replace(/nika/g, "niga");
syl = syl.replace(/pika/g, "piga");
syl = syl.replace(/bika/g, "biga");
syl = syl.replace(/mika/g, "miga");
syl = syl.replace(/dika/g, "diga");
syl = syl.replace(/jika/g, "jiga");
syl = syl.replace(/kika/g, "kiga");
syl = syl.replace(/tika/g, "tiga");
syl = syl.replace(/hika/g, "higa");

syl = syl.replace(/chuka/g, "chuga");
syl = syl.replace(/guka/g, "guga");
syl = syl.replace(/suka/g, "suga");
syl = syl.replace(/nuka/g, "nuga");
syl = syl.replace(/puka/g, "puga");
syl = syl.replace(/buka/g, "buga");
syl = syl.replace(/muka/g, "muga");
syl = syl.replace(/duka/g, "duga");
syl = syl.replace(/juka/g, "juga");
syl = syl.replace(/kuka/g, "kuga");
syl = syl.replace(/tuka/g, "tuga");
syl = syl.replace(/huka/g, "huga");

syl = syl.replace(/chaeka/g, "chaega");
syl = syl.replace(/gaeka/g, "gaega");
syl = syl.replace(/saeka/g, "saega");
syl = syl.replace(/naeka/g, "naega");
syl = syl.replace(/paeka/g, "paega");
syl = syl.replace(/baeka/g, "baega");
syl = syl.replace(/maeka/g, "maega");
syl = syl.replace(/daeka/g, "daega");
syl = syl.replace(/jaeka/g, "jaega");
syl = syl.replace(/kaeka/g, "kaega");
syl = syl.replace(/taeka/g, "taega");
syl = syl.replace(/haeka/g, "haega");

syl = syl.replace(/chyeka/g, "chyega");
syl = syl.replace(/gyeka/g, "gyega");
syl = syl.replace(/syeka/g, "syega");
syl = syl.replace(/nyeka/g, "nyega");
syl = syl.replace(/pyeka/g, "pyega");
syl = syl.replace(/byeka/g, "byega");
syl = syl.replace(/myeka/g, "myega");
syl = syl.replace(/dyeka/g, "dyega");
syl = syl.replace(/jyeka/g, "jyega");
syl = syl.replace(/kyeka/g, "kyega");
syl = syl.replace(/tyeka/g, "tyega");
syl = syl.replace(/hyeka/g, "hyega");

syl = syl.replace(/cheoka/g, "cheoga");
syl = syl.replace(/geoka/g, "geoga");
syl = syl.replace(/seoka/g, "seoga");
syl = syl.replace(/neoka/g, "neoga");
syl = syl.replace(/peoka/g, "peoga");
syl = syl.replace(/beoka/g, "beoga");
syl = syl.replace(/meoka/g, "meoga");
syl = syl.replace(/deoka/g, "deoga");
syl = syl.replace(/jeoka/g, "jeoga");
syl = syl.replace(/keoka/g, "keoga");
syl = syl.replace(/teoka/g, "teoga");
syl = syl.replace(/heoka/g, "heoga");

syl = syl.replace(/chweka/g, "chwega");
syl = syl.replace(/gweka/g, "gwega");
syl = syl.replace(/sweka/g, "swega");
syl = syl.replace(/nweka/g, "nwega");
syl = syl.replace(/pweka/g, "pwega");
syl = syl.replace(/bweka/g, "bwega");
syl = syl.replace(/mweka/g, "mwega");
syl = syl.replace(/dweka/g, "dwega");
syl = syl.replace(/jweka/g, "jwega");
syl = syl.replace(/kweka/g, "kwega");
syl = syl.replace(/tweka/g, "twega");
syl = syl.replace(/hweka/g, "hwega");

syl = syl.replace(/cheuka/g, "cheuga");
syl = syl.replace(/geuka/g, "geuga");
syl = syl.replace(/seuka/g, "seuga");
syl = syl.replace(/neuka/g, "neuga");
syl = syl.replace(/peuka/g, "peuga");
syl = syl.replace(/beuka/g, "beuga");
syl = syl.replace(/meuka/g, "meuga");
syl = syl.replace(/deuka/g, "deuga");
syl = syl.replace(/jeuka/g, "jeuga");
syl = syl.replace(/keuka/g, "keuga");
syl = syl.replace(/teuka/g, "teuga");
syl = syl.replace(/heuka/g, "heuga");

syl = syl.replace(/chyaka/g, "chyaga");
syl = syl.replace(/gyaka/g, "gyaga");
syl = syl.replace(/syaka/g, "syaga");
syl = syl.replace(/nyaka/g, "nyaga");
syl = syl.replace(/pyaka/g, "pyaga");
syl = syl.replace(/byaka/g, "byaga");
syl = syl.replace(/myaka/g, "myaga");
syl = syl.replace(/dyaka/g, "dyaga");
syl = syl.replace(/jyaka/g, "jyaga");
syl = syl.replace(/kyaka/g, "kyaga");
syl = syl.replace(/tyaka/g, "tyaga");
syl = syl.replace(/hyaka/g, "hyaga");

syl = syl.replace(/chyoka/g, "chyoga");
syl = syl.replace(/gyoka/g, "gyoga");
syl = syl.replace(/syoka/g, "syoga");
syl = syl.replace(/nyoka/g, "nyoga");
syl = syl.replace(/pyoka/g, "pyoga");
syl = syl.replace(/byoka/g, "byoga");
syl = syl.replace(/myoka/g, "myoga");
syl = syl.replace(/dyoka/g, "dyoga");
syl = syl.replace(/jyoka/g, "jyoga");
syl = syl.replace(/kyoka/g, "kyoga");
syl = syl.replace(/tyoka/g, "tyoga");
syl = syl.replace(/hyoka/g, "hyoga");

syl = syl.replace(/chyuka/g, "chyuga");
syl = syl.replace(/gyuka/g, "gyuga");
syl = syl.replace(/syuka/g, "syuga");
syl = syl.replace(/nyuka/g, "nyuga");
syl = syl.replace(/pyuka/g, "pyuga");
syl = syl.replace(/byuka/g, "byuga");
syl = syl.replace(/myuka/g, "myuga");
syl = syl.replace(/dyuka/g, "dyuga");
syl = syl.replace(/jyuka/g, "jyuga");
syl = syl.replace(/kyuka/g, "kyuga");
syl = syl.replace(/tyuka/g, "tyuga");
syl = syl.replace(/hyuka/g, "hyuga");

syl = syl.replace(/chake/g, "chage");
syl = syl.replace(/gake/g, "gage");
syl = syl.replace(/sake/g, "sage");
syl = syl.replace(/nake/g, "nage");
syl = syl.replace(/pake/g, "page");
syl = syl.replace(/bake/g, "bage");
syl = syl.replace(/make/g, "mage");
syl = syl.replace(/dake/g, "dage");
syl = syl.replace(/jake/g, "jage");
syl = syl.replace(/kake/g, "kage");
syl = syl.replace(/hake/g, "hage");

syl = syl.replace(/cheke/g, "chege");
syl = syl.replace(/geke/g, "gege");
syl = syl.replace(/seke/g, "sege");
syl = syl.replace(/neke/g, "nege");
syl = syl.replace(/peke/g, "pege");
syl = syl.replace(/beke/g, "bege");
syl = syl.replace(/meke/g, "mege");
syl = syl.replace(/deke/g, "dege");
syl = syl.replace(/jeke/g, "jege");
syl = syl.replace(/keke/g, "kege");
syl = syl.replace(/teke/g, "tege");
syl = syl.replace(/heke/g, "hege");

syl = syl.replace(/choke/g, "choge");
syl = syl.replace(/goke/g, "goge");
syl = syl.replace(/soke/g, "soge");
syl = syl.replace(/noke/g, "noge");
syl = syl.replace(/poke/g, "poge");
syl = syl.replace(/boke/g, "boge");
syl = syl.replace(/moke/g, "moge");
syl = syl.replace(/doke/g, "doge");
syl = syl.replace(/joke/g, "joge");
syl = syl.replace(/koke/g, "koge");
syl = syl.replace(/toke/g, "toge");
syl = syl.replace(/hoke/g, "hoge");

syl = syl.replace(/chike/g, "chige");
syl = syl.replace(/gike/g, "gige");
syl = syl.replace(/sike/g, "sige");
syl = syl.replace(/nike/g, "nige");
syl = syl.replace(/pike/g, "pige");
syl = syl.replace(/bike/g, "bige");
syl = syl.replace(/mike/g, "mige");
syl = syl.replace(/dike/g, "dige");
syl = syl.replace(/jike/g, "jige");
syl = syl.replace(/kike/g, "kige");
syl = syl.replace(/tike/g, "tige");
syl = syl.replace(/hike/g, "hige");

syl = syl.replace(/chuke/g, "chuge");
syl = syl.replace(/guke/g, "guge");
syl = syl.replace(/suke/g, "suge");
syl = syl.replace(/nuke/g, "nuge");
syl = syl.replace(/puke/g, "puge");
syl = syl.replace(/buke/g, "buge");
syl = syl.replace(/muke/g, "muge");
syl = syl.replace(/duke/g, "duge");
syl = syl.replace(/juke/g, "juge");
syl = syl.replace(/kuke/g, "kuge");
syl = syl.replace(/tuke/g, "tuge");
syl = syl.replace(/huke/g, "huge");

syl = syl.replace(/chaeke/g, "chaege");
syl = syl.replace(/gaeke/g, "gaege");
syl = syl.replace(/saeke/g, "saege");
syl = syl.replace(/naeke/g, "naege");
syl = syl.replace(/paeke/g, "paege");
syl = syl.replace(/baeke/g, "baege");
syl = syl.replace(/maeke/g, "maege");
syl = syl.replace(/daeke/g, "daege");
syl = syl.replace(/jaeke/g, "jaege");
syl = syl.replace(/kaeke/g, "kaege");
syl = syl.replace(/taeke/g, "taege");
syl = syl.replace(/haeke/g, "haege");

syl = syl.replace(/chyeke/g, "chyege");
syl = syl.replace(/gyeke/g, "gyege");
syl = syl.replace(/syeke/g, "syege");
syl = syl.replace(/nyeke/g, "nyege");
syl = syl.replace(/pyeke/g, "pyege");
syl = syl.replace(/byeke/g, "byege");
syl = syl.replace(/myeke/g, "myege");
syl = syl.replace(/dyeke/g, "dyege");
syl = syl.replace(/jyeke/g, "jyege");
syl = syl.replace(/kyeke/g, "kyege");
syl = syl.replace(/tyeke/g, "tyege");
syl = syl.replace(/hyeke/g, "hyege");

syl = syl.replace(/cheoke/g, "cheoge");
syl = syl.replace(/geoke/g, "geoge");
syl = syl.replace(/seoke/g, "seoge");
syl = syl.replace(/neoke/g, "neoge");
syl = syl.replace(/peoke/g, "peoge");
syl = syl.replace(/beoke/g, "beoge");
syl = syl.replace(/meoke/g, "meoge");
syl = syl.replace(/deoke/g, "deoge");
syl = syl.replace(/jeoke/g, "jeoge");
syl = syl.replace(/keoke/g, "keoge");
syl = syl.replace(/teoke/g, "teoge");
syl = syl.replace(/heoke/g, "heoge");

syl = syl.replace(/chweke/g, "chwege");
syl = syl.replace(/gweke/g, "gwege");
syl = syl.replace(/sweke/g, "swege");
syl = syl.replace(/nweke/g, "nwege");
syl = syl.replace(/pweke/g, "pwege");
syl = syl.replace(/bweke/g, "bwege");
syl = syl.replace(/mweke/g, "mwege");
syl = syl.replace(/dweke/g, "dwege");
syl = syl.replace(/jweke/g, "jwege");
syl = syl.replace(/kweke/g, "kwege");
syl = syl.replace(/tweke/g, "twege");
syl = syl.replace(/hweke/g, "hwege");

syl = syl.replace(/cheuke/g, "cheuge");
syl = syl.replace(/geuke/g, "geuge");
syl = syl.replace(/seuke/g, "seuge");
syl = syl.replace(/neuke/g, "neuge");
syl = syl.replace(/peuke/g, "peuge");
syl = syl.replace(/beuke/g, "beuge");
syl = syl.replace(/meuke/g, "meuge");
syl = syl.replace(/deuke/g, "deuge");
syl = syl.replace(/jeuke/g, "jeuge");
syl = syl.replace(/keuke/g, "keuge");
syl = syl.replace(/teuke/g, "teuge");
syl = syl.replace(/heuke/g, "heuge");

syl = syl.replace(/chyake/g, "chyage");
syl = syl.replace(/gyake/g, "gyage");
syl = syl.replace(/syake/g, "syage");
syl = syl.replace(/nyake/g, "nyage");
syl = syl.replace(/pyake/g, "pyage");
syl = syl.replace(/byake/g, "byage");
syl = syl.replace(/myake/g, "myage");
syl = syl.replace(/dyake/g, "dyage");
syl = syl.replace(/jyake/g, "jyage");
syl = syl.replace(/kyake/g, "kyage");
syl = syl.replace(/tyake/g, "tyage");
syl = syl.replace(/hyake/g, "hyage");

syl = syl.replace(/chyoke/g, "chyoge");
syl = syl.replace(/gyoke/g, "gyoge");
syl = syl.replace(/syoke/g, "syoge");
syl = syl.replace(/nyoke/g, "nyoge");
syl = syl.replace(/pyoke/g, "pyoge");
syl = syl.replace(/byoke/g, "byoge");
syl = syl.replace(/myoke/g, "myoge");
syl = syl.replace(/dyoke/g, "dyoge");
syl = syl.replace(/jyoke/g, "jyoge");
syl = syl.replace(/kyoke/g, "kyoge");
syl = syl.replace(/tyoke/g, "tyoge");
syl = syl.replace(/hyoke/g, "hyoge");

syl = syl.replace(/chyuke/g, "chyuge");
syl = syl.replace(/gyuke/g, "gyuge");
syl = syl.replace(/syuke/g, "syuge");
syl = syl.replace(/nyuke/g, "nyuge");
syl = syl.replace(/pyuke/g, "pyuge");
syl = syl.replace(/byuke/g, "byuge");
syl = syl.replace(/myuke/g, "myuge");
syl = syl.replace(/dyuke/g, "dyuge");
syl = syl.replace(/jyuke/g, "jyuge");
syl = syl.replace(/kyuke/g, "kyuge");
syl = syl.replace(/tyuke/g, "tyuge");
syl = syl.replace(/hyuke/g, "hyuge");

syl = syl.replace(/chaky/g, "chagy");
syl = syl.replace(/gaky/g, "gagy");
syl = syl.replace(/saky/g, "sagy");
syl = syl.replace(/naky/g, "nagy");
syl = syl.replace(/paky/g, "pagy");
syl = syl.replace(/baky/g, "bagy");
syl = syl.replace(/maky/g, "magy");
syl = syl.replace(/daky/g, "dagy");
syl = syl.replace(/jaky/g, "jagy");
syl = syl.replace(/kaky/g, "kagy");
syl = syl.replace(/taky/g, "tagy");
syl = syl.replace(/haky/g, "hagy");

syl = syl.replace(/cheky/g, "chegy");
syl = syl.replace(/geky/g, "gegy");
syl = syl.replace(/seky/g, "segy");
syl = syl.replace(/neky/g, "negy");
syl = syl.replace(/peky/g, "pegy");
syl = syl.replace(/beky/g, "begy");
syl = syl.replace(/meky/g, "megy");
syl = syl.replace(/deky/g, "degy");
syl = syl.replace(/jeky/g, "jegy");
syl = syl.replace(/keky/g, "kegy");
syl = syl.replace(/teky/g, "tegy");
syl = syl.replace(/heky/g, "hegy");

syl = syl.replace(/choky/g, "chogy");
syl = syl.replace(/goky/g, "gogy");
syl = syl.replace(/soky/g, "sogy");
syl = syl.replace(/noky/g, "nogy");
syl = syl.replace(/poky/g, "pogy");
syl = syl.replace(/boky/g, "bogy");
syl = syl.replace(/moky/g, "mogy");
syl = syl.replace(/doky/g, "dogy");
syl = syl.replace(/joky/g, "jogy");
syl = syl.replace(/koky/g, "kogy");
syl = syl.replace(/toky/g, "togy");
syl = syl.replace(/hoky/g, "hogy");

syl = syl.replace(/chiky/g, "chigy");
syl = syl.replace(/giky/g, "gigy");
syl = syl.replace(/siky/g, "sigy");
syl = syl.replace(/niky/g, "nigy");
syl = syl.replace(/piky/g, "pigy");
syl = syl.replace(/biky/g, "bigy");
syl = syl.replace(/miky/g, "migy");
syl = syl.replace(/diky/g, "digy");
syl = syl.replace(/jiky/g, "jigy");
syl = syl.replace(/kiky/g, "kigy");
syl = syl.replace(/tiky/g, "tigy");
syl = syl.replace(/hiky/g, "higy");

syl = syl.replace(/chuky/g, "chugy");
syl = syl.replace(/guky/g, "gugy");
syl = syl.replace(/suky/g, "sugy");
syl = syl.replace(/nuky/g, "nugy");
syl = syl.replace(/puky/g, "pugy");
syl = syl.replace(/buky/g, "bugy");
syl = syl.replace(/muky/g, "mugy");
syl = syl.replace(/duky/g, "dugy");
syl = syl.replace(/juky/g, "jugy");
syl = syl.replace(/kuky/g, "kugy");
syl = syl.replace(/tuky/g, "tugy");
syl = syl.replace(/huky/g, "hugy");

syl = syl.replace(/chaeky/g, "chaegy");
syl = syl.replace(/gaeky/g, "gaegy");
syl = syl.replace(/saeky/g, "saegy");
syl = syl.replace(/naeky/g, "naegy");
syl = syl.replace(/paeky/g, "paegy");
syl = syl.replace(/baeky/g, "baegy");
syl = syl.replace(/maeky/g, "maegy");
syl = syl.replace(/daeky/g, "daegy");
syl = syl.replace(/jaeky/g, "jaegy");
syl = syl.replace(/kaeky/g, "kaegy");
syl = syl.replace(/taeky/g, "taegy");
syl = syl.replace(/haeky/g, "haegy");

syl = syl.replace(/chyeky/g, "chyegy");
syl = syl.replace(/gyeky/g, "gyegy");
syl = syl.replace(/syeky/g, "syegy");
syl = syl.replace(/nyeky/g, "nyegy");
syl = syl.replace(/pyeky/g, "pyegy");
syl = syl.replace(/byeky/g, "byegy");
syl = syl.replace(/myeky/g, "myegy");
syl = syl.replace(/dyeky/g, "dyegy");
syl = syl.replace(/jyeky/g, "jyegy");
syl = syl.replace(/kyeky/g, "kyegy");
syl = syl.replace(/tyeky/g, "tyegy");
syl = syl.replace(/hyeky/g, "hyegy");

syl = syl.replace(/cheoky/g, "cheogy");
syl = syl.replace(/geoky/g, "geogy");
syl = syl.replace(/seoky/g, "seogy");
syl = syl.replace(/neoky/g, "neogy");
syl = syl.replace(/peoky/g, "peogy");
syl = syl.replace(/beoky/g, "beogy");
syl = syl.replace(/meoky/g, "meogy");
syl = syl.replace(/deoky/g, "deogy");
syl = syl.replace(/jeoky/g, "jeogy");
syl = syl.replace(/keoky/g, "keogy");
syl = syl.replace(/teoky/g, "teogy");
syl = syl.replace(/heoky/g, "heogy");

syl = syl.replace(/chweky/g, "chwegy");
syl = syl.replace(/gweky/g, "gwegy");
syl = syl.replace(/sweky/g, "swegy");
syl = syl.replace(/nweky/g, "nwegy");
syl = syl.replace(/pweky/g, "pwegy");
syl = syl.replace(/bweky/g, "bwegy");
syl = syl.replace(/mweky/g, "mwegy");
syl = syl.replace(/dweky/g, "dwegy");
syl = syl.replace(/jweky/g, "jwegy");
syl = syl.replace(/kweky/g, "kwegy");
syl = syl.replace(/tweky/g, "twegy");
syl = syl.replace(/hweky/g, "hwegy");

syl = syl.replace(/cheuky/g, "cheugy");
syl = syl.replace(/geuky/g, "geugy");
syl = syl.replace(/seuky/g, "seugy");
syl = syl.replace(/neuky/g, "neugy");
syl = syl.replace(/peuky/g, "peugy");
syl = syl.replace(/beuky/g, "beugy");
syl = syl.replace(/meuky/g, "meugy");
syl = syl.replace(/deuky/g, "deugy");
syl = syl.replace(/jeuky/g, "jeugy");
syl = syl.replace(/keuky/g, "keugy");
syl = syl.replace(/teuky/g, "teugy");
syl = syl.replace(/heuky/g, "heugy");

syl = syl.replace(/chyaky/g, "chyagy");
syl = syl.replace(/gyaky/g, "gyagy");
syl = syl.replace(/syaky/g, "syagy");
syl = syl.replace(/nyaky/g, "nyagy");
syl = syl.replace(/pyaky/g, "pyagy");
syl = syl.replace(/byaky/g, "byagy");
syl = syl.replace(/myaky/g, "myagy");
syl = syl.replace(/dyaky/g, "dyagy");
syl = syl.replace(/jyaky/g, "jyagy");
syl = syl.replace(/kyaky/g, "kyagy");
syl = syl.replace(/tyaky/g, "tyagy");
syl = syl.replace(/hyaky/g, "hyagy");

syl = syl.replace(/chyoky/g, "chyogy");
syl = syl.replace(/gyoky/g, "gyogy");
syl = syl.replace(/syoky/g, "syogy");
syl = syl.replace(/nyoky/g, "nyogy");
syl = syl.replace(/pyoky/g, "pyogy");
syl = syl.replace(/byoky/g, "byogy");
syl = syl.replace(/myoky/g, "myogy");
syl = syl.replace(/dyoky/g, "dyogy");
syl = syl.replace(/jyoky/g, "jyogy");
syl = syl.replace(/kyoky/g, "kyogy");
syl = syl.replace(/tyoky/g, "tyogy");
syl = syl.replace(/hyoky/g, "hyogy");

syl = syl.replace(/chyuky/g, "chyugy");
syl = syl.replace(/gyuky/g, "gyugy");
syl = syl.replace(/syuky/g, "syugy");
syl = syl.replace(/nyuky/g, "nyugy");
syl = syl.replace(/pyuky/g, "pyugy");
syl = syl.replace(/byuky/g, "byugy");
syl = syl.replace(/myuky/g, "myugy");
syl = syl.replace(/dyuky/g, "dyugy");
syl = syl.replace(/jyuky/g, "jyugy");
syl = syl.replace(/kyuky/g, "kyugy");
syl = syl.replace(/tyuky/g, "tyugy");
syl = syl.replace(/hyuky/g, "hyugy");

syl = syl.replace(/chako/g, "chago");
syl = syl.replace(/gako/g, "gago");
syl = syl.replace(/sako/g, "sago");
syl = syl.replace(/nako/g, "nago");
syl = syl.replace(/pako/g, "pago");
syl = syl.replace(/bako/g, "bago");
syl = syl.replace(/mako/g, "mago");
syl = syl.replace(/dako/g, "dago");
syl = syl.replace(/jako/g, "jago");
syl = syl.replace(/kako/g, "kago");
syl = syl.replace(/tako/g, "tago");
syl = syl.replace(/hako/g, "hago");

syl = syl.replace(/cheko/g, "chego");
syl = syl.replace(/geko/g, "gego");
syl = syl.replace(/seko/g, "sego");
syl = syl.replace(/neko/g, "nego");
syl = syl.replace(/peko/g, "pego");
syl = syl.replace(/beko/g, "bego");
syl = syl.replace(/meko/g, "mego");
syl = syl.replace(/deko/g, "dego");
syl = syl.replace(/jeko/g, "jego");
syl = syl.replace(/keko/g, "kego");
syl = syl.replace(/teko/g, "tego");
syl = syl.replace(/heko/g, "hego");

syl = syl.replace(/choko/g, "chogo");
syl = syl.replace(/goko/g, "gogo");
syl = syl.replace(/soko/g, "sogo");
syl = syl.replace(/noko/g, "nogo");
syl = syl.replace(/poko/g, "pogo");
syl = syl.replace(/boko/g, "bogo");
syl = syl.replace(/moko/g, "mogo");
syl = syl.replace(/doko/g, "dogo");
syl = syl.replace(/joko/g, "jogo");
syl = syl.replace(/koko/g, "kogo");
syl = syl.replace(/toko/g, "togo");
syl = syl.replace(/hoko/g, "hogo");

syl = syl.replace(/chiko/g, "chigo");
syl = syl.replace(/giko/g, "gigo");
syl = syl.replace(/siko/g, "sigo");
syl = syl.replace(/niko/g, "nigo");
syl = syl.replace(/piko/g, "pigo");
syl = syl.replace(/biko/g, "bigo");
syl = syl.replace(/miko/g, "migo");
syl = syl.replace(/diko/g, "digo");
syl = syl.replace(/jiko/g, "jigo");
syl = syl.replace(/kiko/g, "kigo");
syl = syl.replace(/tiko/g, "tigo");
syl = syl.replace(/hiko/g, "higo");

syl = syl.replace(/chuko/g, "chugo");
syl = syl.replace(/guko/g, "gugo");
syl = syl.replace(/suko/g, "sugo");
syl = syl.replace(/nuko/g, "nugo");
syl = syl.replace(/puko/g, "pugo");
syl = syl.replace(/buko/g, "bugo");
syl = syl.replace(/muko/g, "mugo");
syl = syl.replace(/duko/g, "dugo");
syl = syl.replace(/juko/g, "jugo");
syl = syl.replace(/kuko/g, "kugo");
syl = syl.replace(/tuko/g, "tugo");
syl = syl.replace(/huko/g, "hugo");

syl = syl.replace(/chaeko/g, "chaego");
syl = syl.replace(/gaeko/g, "gaego");
syl = syl.replace(/saeko/g, "saego");
syl = syl.replace(/naeko/g, "naego");
syl = syl.replace(/paeko/g, "paego");
syl = syl.replace(/baeko/g, "baego");
syl = syl.replace(/maeko/g, "maego");
syl = syl.replace(/daeko/g, "daego");
syl = syl.replace(/jaeko/g, "jaego");
syl = syl.replace(/kaeko/g, "kaego");
syl = syl.replace(/taeko/g, "taego");
syl = syl.replace(/haeko/g, "haego");

syl = syl.replace(/chyeko/g, "chyego");
syl = syl.replace(/gyeko/g, "gyego");
syl = syl.replace(/syeko/g, "syego");
syl = syl.replace(/nyeko/g, "nyego");
syl = syl.replace(/pyeko/g, "pyego");
syl = syl.replace(/byeko/g, "byego");
syl = syl.replace(/myeko/g, "myego");
syl = syl.replace(/dyeko/g, "dyego");
syl = syl.replace(/jyeko/g, "jyego");
syl = syl.replace(/kyeko/g, "kyego");
syl = syl.replace(/tyeko/g, "tyego");
syl = syl.replace(/hyeko/g, "hyego");

syl = syl.replace(/cheoko/g, "cheogo");
syl = syl.replace(/geoko/g, "geogo");
syl = syl.replace(/seoko/g, "seogo");
syl = syl.replace(/neoko/g, "neogo");
syl = syl.replace(/peoko/g, "peogo");
syl = syl.replace(/beoko/g, "beogo");
syl = syl.replace(/meoko/g, "meogo");
syl = syl.replace(/deoko/g, "deogo");
syl = syl.replace(/jeoko/g, "jeogo");
syl = syl.replace(/keoko/g, "keogo");
syl = syl.replace(/teoko/g, "teogo");
syl = syl.replace(/heoko/g, "heogo");

syl = syl.replace(/chweko/g, "chwego");
syl = syl.replace(/gweko/g, "gwego");
syl = syl.replace(/sweko/g, "swego");
syl = syl.replace(/nweko/g, "nwego");
syl = syl.replace(/pweko/g, "pwego");
syl = syl.replace(/bweko/g, "bwego");
syl = syl.replace(/mweko/g, "mwego");
syl = syl.replace(/dweko/g, "dwego");
syl = syl.replace(/jweko/g, "jwego");
syl = syl.replace(/kweko/g, "kwego");
syl = syl.replace(/tweko/g, "twego");
syl = syl.replace(/hweko/g, "hwego");

syl = syl.replace(/cheuko/g, "cheugo");
syl = syl.replace(/geuko/g, "geugo");
syl = syl.replace(/seuko/g, "seugo");
syl = syl.replace(/neuko/g, "neugo");
syl = syl.replace(/peuko/g, "peugo");
syl = syl.replace(/beuko/g, "beugo");
syl = syl.replace(/meuko/g, "meugo");
syl = syl.replace(/deuko/g, "deugo");
syl = syl.replace(/jeuko/g, "jeugo");
syl = syl.replace(/keuko/g, "keugo");
syl = syl.replace(/teuko/g, "teugo");
syl = syl.replace(/heuko/g, "heugo");

syl = syl.replace(/chyako/g, "chyago");
syl = syl.replace(/gyako/g, "gyago");
syl = syl.replace(/syako/g, "syago");
syl = syl.replace(/nyako/g, "nyago");
syl = syl.replace(/pyako/g, "pyago");
syl = syl.replace(/byako/g, "byago");
syl = syl.replace(/myako/g, "myago");
syl = syl.replace(/dyako/g, "dyago");
syl = syl.replace(/jyako/g, "jyago");
syl = syl.replace(/kyako/g, "kyago");
syl = syl.replace(/tyako/g, "tyago");
syl = syl.replace(/hyako/g, "hyago");

syl = syl.replace(/chyoko/g, "chyogo");
syl = syl.replace(/gyoko/g, "gyogo");
syl = syl.replace(/syoko/g, "syogo");
syl = syl.replace(/nyoko/g, "nyogo");
syl = syl.replace(/pyoko/g, "pyogo");
syl = syl.replace(/byoko/g, "byogo");
syl = syl.replace(/myoko/g, "myogo");
syl = syl.replace(/dyoko/g, "dyogo");
syl = syl.replace(/jyoko/g, "jyogo");
syl = syl.replace(/kyoko/g, "kyogo");
syl = syl.replace(/tyoko/g, "tyogo");
syl = syl.replace(/hyoko/g, "hyogo");

syl = syl.replace(/chyuko/g, "chyugo");
syl = syl.replace(/gyuko/g, "gyugo");
syl = syl.replace(/syuko/g, "syugo");
syl = syl.replace(/nyuko/g, "nyugo");
syl = syl.replace(/pyuko/g, "pyugo");
syl = syl.replace(/byuko/g, "byugo");
syl = syl.replace(/myuko/g, "myugo");
syl = syl.replace(/dyuko/g, "dyugo");
syl = syl.replace(/jyuko/g, "jyugo");
syl = syl.replace(/kyuko/g, "kyugo");
syl = syl.replace(/tyuko/g, "tyugo");
syl = syl.replace(/hyuko/g, "hyugo");

syl = syl.replace(/chaku/g, "chagu");
syl = syl.replace(/gaku/g, "gagu");
syl = syl.replace(/saku/g, "sagu");
syl = syl.replace(/naku/g, "nagu");
syl = syl.replace(/paku/g, "pagu");
syl = syl.replace(/baku/g, "bagu");
syl = syl.replace(/maku/g, "magu");
syl = syl.replace(/daku/g, "dagu");
syl = syl.replace(/jaku/g, "jagu");
syl = syl.replace(/kaku/g, "kagu");
syl = syl.replace(/taku/g, "tagu");
syl = syl.replace(/haku/g, "hagu");

syl = syl.replace(/cheku/g, "chegu");
syl = syl.replace(/geku/g, "gegu");
syl = syl.replace(/seku/g, "segu");
syl = syl.replace(/neku/g, "negu");
syl = syl.replace(/peku/g, "pegu");
syl = syl.replace(/beku/g, "begu");
syl = syl.replace(/meku/g, "megu");
syl = syl.replace(/deku/g, "degu");
syl = syl.replace(/jeku/g, "jegu");
syl = syl.replace(/keku/g, "kegu");
syl = syl.replace(/teku/g, "tegu");
syl = syl.replace(/heku/g, "hegu");

syl = syl.replace(/choku/g, "chogu");
syl = syl.replace(/goku/g, "gogu");
syl = syl.replace(/soku/g, "sogu");
syl = syl.replace(/noku/g, "nogu");
syl = syl.replace(/poku/g, "pogu");
syl = syl.replace(/boku/g, "bogu");
syl = syl.replace(/moku/g, "mogu");
syl = syl.replace(/doku/g, "dogu");
syl = syl.replace(/joku/g, "jogu");
syl = syl.replace(/koku/g, "kogu");
syl = syl.replace(/toku/g, "togu");
syl = syl.replace(/hoku/g, "hogu");

syl = syl.replace(/chiku/g, "chigu");
syl = syl.replace(/giku/g, "gigu");
syl = syl.replace(/siku/g, "sigu");
syl = syl.replace(/niku/g, "nigu");
syl = syl.replace(/piku/g, "pigu");
syl = syl.replace(/biku/g, "bigu");
syl = syl.replace(/miku/g, "migu");
syl = syl.replace(/diku/g, "digu");
syl = syl.replace(/jiku/g, "jigu");
syl = syl.replace(/kiku/g, "kigu");
syl = syl.replace(/tiku/g, "tigu");
syl = syl.replace(/hiku/g, "higu");

syl = syl.replace(/chuku/g, "chugu");
syl = syl.replace(/guku/g, "gugu");
syl = syl.replace(/suku/g, "sugu");
syl = syl.replace(/nuku/g, "nugu");
syl = syl.replace(/puku/g, "pugu");
syl = syl.replace(/buku/g, "bugu");
syl = syl.replace(/muku/g, "mugu");
syl = syl.replace(/duku/g, "dugu");
syl = syl.replace(/juku/g, "jugu");
syl = syl.replace(/kuku/g, "kugu");
syl = syl.replace(/tuku/g, "tugu");
syl = syl.replace(/huku/g, "hugu");

syl = syl.replace(/chaeku/g, "chaegu");
syl = syl.replace(/gaeku/g, "gaegu");
syl = syl.replace(/saeku/g, "saegu");
syl = syl.replace(/naeku/g, "naegu");
syl = syl.replace(/paeku/g, "paegu");
syl = syl.replace(/baeku/g, "baegu");
syl = syl.replace(/maeku/g, "maegu");
syl = syl.replace(/daeku/g, "daegu");
syl = syl.replace(/jaeku/g, "jaegu");
syl = syl.replace(/kaeku/g, "kaegu");
syl = syl.replace(/taeku/g, "taegu");
syl = syl.replace(/haeku/g, "haegu");

syl = syl.replace(/chyeku/g, "chyegu");
syl = syl.replace(/gyeku/g, "gyegu");
syl = syl.replace(/syeku/g, "syegu");
syl = syl.replace(/nyeku/g, "nyegu");
syl = syl.replace(/pyeku/g, "pyegu");
syl = syl.replace(/byeku/g, "byegu");
syl = syl.replace(/myeku/g, "myegu");
syl = syl.replace(/dyeku/g, "dyegu");
syl = syl.replace(/jyeku/g, "jyegu");
syl = syl.replace(/kyeku/g, "kyegu");
syl = syl.replace(/tyeku/g, "tyegu");
syl = syl.replace(/hyeku/g, "hyegu");

syl = syl.replace(/cheoku/g, "cheogu");
syl = syl.replace(/geoku/g, "geogu");
syl = syl.replace(/seoku/g, "seogu");
syl = syl.replace(/neoku/g, "neogu");
syl = syl.replace(/peoku/g, "peogu");
syl = syl.replace(/beoku/g, "beogu");
syl = syl.replace(/meoku/g, "meogu");
syl = syl.replace(/deoku/g, "deogu");
syl = syl.replace(/jeoku/g, "jeogu");
syl = syl.replace(/keoku/g, "keogu");
syl = syl.replace(/teoku/g, "teogu");
syl = syl.replace(/heoku/g, "heogu");

syl = syl.replace(/chweku/g, "chwegu");
syl = syl.replace(/gweku/g, "gwegu");
syl = syl.replace(/sweku/g, "swegu");
syl = syl.replace(/nweku/g, "nwegu");
syl = syl.replace(/pweku/g, "pwegu");
syl = syl.replace(/bweku/g, "bwegu");
syl = syl.replace(/mweku/g, "mwegu");
syl = syl.replace(/dweku/g, "dwegu");
syl = syl.replace(/jweku/g, "jwegu");
syl = syl.replace(/kweku/g, "kwegu");
syl = syl.replace(/tweku/g, "twegu");
syl = syl.replace(/hweku/g, "hwegu");

syl = syl.replace(/cheuku/g, "cheugu");
syl = syl.replace(/geuku/g, "geugu");
syl = syl.replace(/seuku/g, "seugu");
syl = syl.replace(/neuku/g, "neugu");
syl = syl.replace(/peuku/g, "peugu");
syl = syl.replace(/beuku/g, "beugu");
syl = syl.replace(/meuku/g, "meugu");
syl = syl.replace(/deuku/g, "deugu");
syl = syl.replace(/jeuku/g, "jeugu");
syl = syl.replace(/keuku/g, "keugu");
syl = syl.replace(/teuku/g, "teugu");
syl = syl.replace(/heuku/g, "heugu");

syl = syl.replace(/chyaku/g, "chyagu");
syl = syl.replace(/gyaku/g, "gyagu");
syl = syl.replace(/syaku/g, "syagu");
syl = syl.replace(/nyaku/g, "nyagu");
syl = syl.replace(/pyaku/g, "pyagu");
syl = syl.replace(/byaku/g, "byagu");
syl = syl.replace(/myaku/g, "myagu");
syl = syl.replace(/dyaku/g, "dyagu");
syl = syl.replace(/jyaku/g, "jyagu");
syl = syl.replace(/kyaku/g, "kyagu");
syl = syl.replace(/tyaku/g, "tyagu");
syl = syl.replace(/hyaku/g, "hyagu");

syl = syl.replace(/chyoku/g, "chyogu");
syl = syl.replace(/gyoku/g, "gyogu");
syl = syl.replace(/syoku/g, "syogu");
syl = syl.replace(/nyoku/g, "nyogu");
syl = syl.replace(/pyoku/g, "pyogu");
syl = syl.replace(/byoku/g, "byogu");
syl = syl.replace(/myoku/g, "myogu");
syl = syl.replace(/dyoku/g, "dyogu");
syl = syl.replace(/jyoku/g, "jyogu");
syl = syl.replace(/kyoku/g, "kyogu");
syl = syl.replace(/tyoku/g, "tyogu");
syl = syl.replace(/hyoku/g, "hyogu");

syl = syl.replace(/chyuku/g, "chyugu");
syl = syl.replace(/gyuku/g, "gyugu");
syl = syl.replace(/syuku/g, "syugu");
syl = syl.replace(/nyuku/g, "nyugu");
syl = syl.replace(/pyuku/g, "pyugu");
syl = syl.replace(/byuku/g, "byugu");
syl = syl.replace(/myuku/g, "myugu");
syl = syl.replace(/dyuku/g, "dyugu");
syl = syl.replace(/jyuku/g, "jyugu");
syl = syl.replace(/kyuku/g, "kyugu");
syl = syl.replace(/tyuku/g, "tyugu");
syl = syl.replace(/hyuku/g, "hyugu");

syl = syl.replace(/chaki/g, "chagi");
syl = syl.replace(/gaki/g, "gagi");
syl = syl.replace(/saki/g, "sagi");
syl = syl.replace(/naki/g, "nagi");
syl = syl.replace(/paki/g, "pagi");
syl = syl.replace(/baki/g, "bagi");
syl = syl.replace(/maki/g, "magi");
syl = syl.replace(/daki/g, "dagi");
syl = syl.replace(/jaki/g, "jagi");
syl = syl.replace(/kaki/g, "kagi");
syl = syl.replace(/taki/g, "tagi");
syl = syl.replace(/haki/g, "hagi");

syl = syl.replace(/cheki/g, "chegi");
syl = syl.replace(/geki/g, "gegi");
syl = syl.replace(/seki/g, "segi");
syl = syl.replace(/neki/g, "negi");
syl = syl.replace(/peki/g, "pegi");
syl = syl.replace(/beki/g, "begi");
syl = syl.replace(/meki/g, "megi");
syl = syl.replace(/deki/g, "degi");
syl = syl.replace(/jeki/g, "jegi");
syl = syl.replace(/keki/g, "kegi");
syl = syl.replace(/teki/g, "tegi");
syl = syl.replace(/heki/g, "hegi");

syl = syl.replace(/choki/g, "chogi");
syl = syl.replace(/goki/g, "gogi");
syl = syl.replace(/soki/g, "sogi");
syl = syl.replace(/noki/g, "nogi");
syl = syl.replace(/poki/g, "pogi");
syl = syl.replace(/boki/g, "bogi");
syl = syl.replace(/moki/g, "mogi");
syl = syl.replace(/doki/g, "dogi");
syl = syl.replace(/joki/g, "jogi");
syl = syl.replace(/koki/g, "kogi");
syl = syl.replace(/toki/g, "togi");
syl = syl.replace(/hoki/g, "hogi");

syl = syl.replace(/chiki/g, "chigi");
syl = syl.replace(/giki/g, "gigi");
syl = syl.replace(/siki/g, "sigi");
syl = syl.replace(/niki/g, "nigi");
syl = syl.replace(/piki/g, "pigi");
syl = syl.replace(/biki/g, "bigi");
syl = syl.replace(/miki/g, "migi");
syl = syl.replace(/diki/g, "digi");
syl = syl.replace(/jiki/g, "jigi");
syl = syl.replace(/kiki/g, "kigi");
syl = syl.replace(/tiki/g, "tigi");
syl = syl.replace(/hiki/g, "higi");

syl = syl.replace(/chuki/g, "chugi");
syl = syl.replace(/guki/g, "gugi");
syl = syl.replace(/suki/g, "sugi");
syl = syl.replace(/nuki/g, "nugi");
syl = syl.replace(/puki/g, "pugi");
syl = syl.replace(/buki/g, "bugi");
syl = syl.replace(/muki/g, "mugi");
syl = syl.replace(/duki/g, "dugi");
syl = syl.replace(/juki/g, "jugi");
syl = syl.replace(/kuki/g, "kugi");
syl = syl.replace(/tuki/g, "tugi");
syl = syl.replace(/huki/g, "hugi");

syl = syl.replace(/chaeki/g, "chaegi");
syl = syl.replace(/gaeki/g, "gaegi");
syl = syl.replace(/saeki/g, "saegi");
syl = syl.replace(/naeki/g, "naegi");
syl = syl.replace(/paeki/g, "paegi");
syl = syl.replace(/baeki/g, "baegi");
syl = syl.replace(/maeki/g, "maegi");
syl = syl.replace(/daeki/g, "daegi");
syl = syl.replace(/jaeki/g, "jaegi");
syl = syl.replace(/kaeki/g, "kaegi");
syl = syl.replace(/taeki/g, "taegi");
syl = syl.replace(/haeki/g, "haegi");

syl = syl.replace(/chyeki/g, "chyegi");
syl = syl.replace(/gyeki/g, "gyegi");
syl = syl.replace(/syeki/g, "syegi");
syl = syl.replace(/nyeki/g, "nyegi");
syl = syl.replace(/pyeki/g, "pyegi");
syl = syl.replace(/byeki/g, "byegi");
syl = syl.replace(/myeki/g, "myegi");
syl = syl.replace(/dyeki/g, "dyegi");
syl = syl.replace(/jyeki/g, "jyegi");
syl = syl.replace(/kyeki/g, "kyegi");
syl = syl.replace(/tyeki/g, "tyegi");
syl = syl.replace(/hyeki/g, "hyegi");

syl = syl.replace(/cheoki/g, "cheogi");
syl = syl.replace(/geoki/g, "geogi");
syl = syl.replace(/seoki/g, "seogi");
syl = syl.replace(/neoki/g, "neogi");
syl = syl.replace(/peoki/g, "peogi");
syl = syl.replace(/beoki/g, "beogi");
syl = syl.replace(/meoki/g, "meogi");
syl = syl.replace(/deoki/g, "deogi");
syl = syl.replace(/jeoki/g, "jeogi");
syl = syl.replace(/keoki/g, "keogi");
syl = syl.replace(/teoki/g, "teogi");
syl = syl.replace(/heoki/g, "heogi");

syl = syl.replace(/chweki/g, "chwegi");
syl = syl.replace(/gweki/g, "gwegi");
syl = syl.replace(/sweki/g, "swegi");
syl = syl.replace(/nweki/g, "nwegi");
syl = syl.replace(/pweki/g, "pwegi");
syl = syl.replace(/bweki/g, "bwegi");
syl = syl.replace(/mweki/g, "mwegi");
syl = syl.replace(/dweki/g, "dwegi");
syl = syl.replace(/jweki/g, "jwegi");
syl = syl.replace(/kweki/g, "kwegi");
syl = syl.replace(/tweki/g, "twegi");
syl = syl.replace(/hweki/g, "hwegi");

syl = syl.replace(/cheuki/g, "cheugi");
syl = syl.replace(/geuki/g, "geugi");
syl = syl.replace(/seuki/g, "seugi");
syl = syl.replace(/neuki/g, "neugi");
syl = syl.replace(/peuki/g, "peugi");
syl = syl.replace(/beuki/g, "beugi");
syl = syl.replace(/meuki/g, "meugi");
syl = syl.replace(/deuki/g, "deugi");
syl = syl.replace(/jeuki/g, "jeugi");
syl = syl.replace(/keuki/g, "keugi");
syl = syl.replace(/teuki/g, "teugi");
syl = syl.replace(/heuki/g, "heugi");

syl = syl.replace(/chyaki/g, "chyagi");
syl = syl.replace(/gyaki/g, "gyagi");
syl = syl.replace(/syaki/g, "syagi");
syl = syl.replace(/nyaki/g, "nyagi");
syl = syl.replace(/pyaki/g, "pyagi");
syl = syl.replace(/byaki/g, "byagi");
syl = syl.replace(/myaki/g, "myagi");
syl = syl.replace(/dyaki/g, "dyagi");
syl = syl.replace(/jyaki/g, "jyagi");
syl = syl.replace(/kyaki/g, "kyagi");
syl = syl.replace(/tyaki/g, "tyagi");
syl = syl.replace(/hyaki/g, "hyagi");

syl = syl.replace(/chyoki/g, "chyogi");
syl = syl.replace(/gyoki/g, "gyogi");
syl = syl.replace(/syoki/g, "syogi");
syl = syl.replace(/nyoki/g, "nyogi");
syl = syl.replace(/pyoki/g, "pyogi");
syl = syl.replace(/byoki/g, "byogi");
syl = syl.replace(/myoki/g, "myogi");
syl = syl.replace(/dyoki/g, "dyogi");
syl = syl.replace(/jyoki/g, "jyogi");
syl = syl.replace(/kyoki/g, "kyogi");
syl = syl.replace(/tyoki/g, "tyogi");
syl = syl.replace(/hyoki/g, "hyogi");

syl = syl.replace(/chyuki/g, "chyugi");
syl = syl.replace(/gyuki/g, "gyugi");
syl = syl.replace(/syuki/g, "syugi");
syl = syl.replace(/nyuki/g, "nyugi");
syl = syl.replace(/pyuki/g, "pyugi");
syl = syl.replace(/byuki/g, "byugi");
syl = syl.replace(/myuki/g, "myugi");
syl = syl.replace(/dyuki/g, "dyugi");
syl = syl.replace(/jyuki/g, "jyugi");
syl = syl.replace(/kyuki/g, "kyugi");
syl = syl.replace(/tyuki/g, "tyugi");
syl = syl.replace(/hyuki/g, "hyugi");

syl = syl.replace(/chakw/g, "chagw");
syl = syl.replace(/gakw/g, "gagw");
syl = syl.replace(/sakw/g, "sagw");
syl = syl.replace(/nakw/g, "nagw");
syl = syl.replace(/pakw/g, "pagw");
syl = syl.replace(/bakw/g, "bagw");
syl = syl.replace(/makw/g, "magw");
syl = syl.replace(/dakw/g, "dagw");
syl = syl.replace(/jakw/g, "jagw");
syl = syl.replace(/kakw/g, "kagw");
syl = syl.replace(/takw/g, "tagw");
syl = syl.replace(/hakw/g, "hagw");

syl = syl.replace(/chekw/g, "chegw");
syl = syl.replace(/gekw/g, "gegw");
syl = syl.replace(/sekw/g, "segw");
syl = syl.replace(/nekw/g, "negw");
syl = syl.replace(/pekw/g, "pegw");
syl = syl.replace(/bekw/g, "begw");
syl = syl.replace(/mekw/g, "megw");
syl = syl.replace(/dekw/g, "degw");
syl = syl.replace(/jekw/g, "jegw");
syl = syl.replace(/kekw/g, "kegw");
syl = syl.replace(/tekw/g, "tegw");
syl = syl.replace(/hekw/g, "hegw");

syl = syl.replace(/chokw/g, "chogw");
syl = syl.replace(/gokw/g, "gogw");
syl = syl.replace(/sokw/g, "sogw");
syl = syl.replace(/nokw/g, "nogw");
syl = syl.replace(/pokw/g, "pogw");
syl = syl.replace(/bokw/g, "bogw");
syl = syl.replace(/mokw/g, "mogw");
syl = syl.replace(/dokw/g, "dogw");
syl = syl.replace(/jokw/g, "jogw");
syl = syl.replace(/kokw/g, "kogw");
syl = syl.replace(/tokw/g, "togw");
syl = syl.replace(/hokw/g, "hogw");

syl = syl.replace(/chikw/g, "chigw");
syl = syl.replace(/gikw/g, "gigw");
syl = syl.replace(/sikw/g, "sigw");
syl = syl.replace(/nikw/g, "nigw");
syl = syl.replace(/pikw/g, "pigw");
syl = syl.replace(/bikw/g, "bigw");
syl = syl.replace(/mikw/g, "migw");
syl = syl.replace(/dikw/g, "digw");
syl = syl.replace(/jikw/g, "jigw");
syl = syl.replace(/kikw/g, "kigw");
syl = syl.replace(/tikw/g, "tigw");
syl = syl.replace(/hikw/g, "higw");

syl = syl.replace(/chukw/g, "chugw");
syl = syl.replace(/gukw/g, "gugw");
syl = syl.replace(/sukw/g, "sugw");
syl = syl.replace(/nukw/g, "nugw");
syl = syl.replace(/pukw/g, "pugw");
syl = syl.replace(/bukw/g, "bugw");
syl = syl.replace(/mukw/g, "mugw");
syl = syl.replace(/dukw/g, "dugw");
syl = syl.replace(/jukw/g, "jugw");
syl = syl.replace(/kukw/g, "kugw");
syl = syl.replace(/tukw/g, "tugw");
syl = syl.replace(/hukw/g, "hugw");

syl = syl.replace(/chaekw/g, "chaegw");
syl = syl.replace(/gaekw/g, "gaegw");
syl = syl.replace(/saekw/g, "saegw");
syl = syl.replace(/naekw/g, "naegw");
syl = syl.replace(/paekw/g, "paegw");
syl = syl.replace(/baekw/g, "baegw");
syl = syl.replace(/maekw/g, "maegw");
syl = syl.replace(/daekw/g, "daegw");
syl = syl.replace(/jaekw/g, "jaegw");
syl = syl.replace(/kaekw/g, "kaegw");
syl = syl.replace(/taekw/g, "taegw");
syl = syl.replace(/haekw/g, "haegw");

syl = syl.replace(/chyekw/g, "chyegw");
syl = syl.replace(/gyekw/g, "gyegw");
syl = syl.replace(/syekw/g, "syegw");
syl = syl.replace(/nyekw/g, "nyegw");
syl = syl.replace(/pyekw/g, "pyegw");
syl = syl.replace(/byekw/g, "byegw");
syl = syl.replace(/myekw/g, "myegw");
syl = syl.replace(/dyekw/g, "dyegw");
syl = syl.replace(/jyekw/g, "jyegw");
syl = syl.replace(/kyekw/g, "kyegw");
syl = syl.replace(/tyekw/g, "tyegw");
syl = syl.replace(/hyekw/g, "hyegw");

syl = syl.replace(/cheokw/g, "cheogw");
syl = syl.replace(/geokw/g, "geogw");
syl = syl.replace(/seokw/g, "seogw");
syl = syl.replace(/neokw/g, "neogw");
syl = syl.replace(/peokw/g, "peogw");
syl = syl.replace(/beokw/g, "beogw");
syl = syl.replace(/meokw/g, "meogw");
syl = syl.replace(/deokw/g, "deogw");
syl = syl.replace(/jeokw/g, "jeogw");
syl = syl.replace(/keokw/g, "keogw");
syl = syl.replace(/teokw/g, "teogw");
syl = syl.replace(/heokw/g, "heogw");

syl = syl.replace(/chwekw/g, "chwegw");
syl = syl.replace(/gwekw/g, "gwegw");
syl = syl.replace(/swekw/g, "swegw");
syl = syl.replace(/nwekw/g, "nwegw");
syl = syl.replace(/pwekw/g, "pwegw");
syl = syl.replace(/bwekw/g, "bwegw");
syl = syl.replace(/mwekw/g, "mwegw");
syl = syl.replace(/dwekw/g, "dwegw");
syl = syl.replace(/jwekw/g, "jwegw");
syl = syl.replace(/kwekw/g, "kwegw");
syl = syl.replace(/twekw/g, "twegw");
syl = syl.replace(/hwekw/g, "hwegw");

syl = syl.replace(/cheukw/g, "cheugw");
syl = syl.replace(/geukw/g, "geugw");
syl = syl.replace(/seukw/g, "seugw");
syl = syl.replace(/neukw/g, "neugw");
syl = syl.replace(/peukw/g, "peugw");
syl = syl.replace(/beukw/g, "beugw");
syl = syl.replace(/meukw/g, "meugw");
syl = syl.replace(/deukw/g, "deugw");
syl = syl.replace(/jeukw/g, "jeugw");
syl = syl.replace(/keukw/g, "keugw");
syl = syl.replace(/teukw/g, "teugw");
syl = syl.replace(/heukw/g, "heugw");

syl = syl.replace(/chyakw/g, "chyagw");
syl = syl.replace(/gyakw/g, "gyagw");
syl = syl.replace(/syakw/g, "syagw");
syl = syl.replace(/nyakw/g, "nyagw");
syl = syl.replace(/pyakw/g, "pyagw");
syl = syl.replace(/byakw/g, "byagw");
syl = syl.replace(/myakw/g, "myagw");
syl = syl.replace(/dyakw/g, "dyagw");
syl = syl.replace(/jyakw/g, "jyagw");
syl = syl.replace(/kyakw/g, "kyagw");
syl = syl.replace(/tyakw/g, "tyagw");
syl = syl.replace(/hyakw/g, "hyagw");

syl = syl.replace(/chyokw/g, "chyogw");
syl = syl.replace(/gyokw/g, "gyogw");
syl = syl.replace(/syokw/g, "syogw");
syl = syl.replace(/nyokw/g, "nyogw");
syl = syl.replace(/pyokw/g, "pyogw");
syl = syl.replace(/byokw/g, "byogw");
syl = syl.replace(/myokw/g, "myogw");
syl = syl.replace(/dyokw/g, "dyogw");
syl = syl.replace(/jyokw/g, "jyogw");
syl = syl.replace(/kyokw/g, "kyogw");
syl = syl.replace(/tyokw/g, "tyogw");
syl = syl.replace(/hyokw/g, "hyogw");

syl = syl.replace(/chyukw/g, "chyugw");
syl = syl.replace(/gyukw/g, "gyugw");
syl = syl.replace(/syukw/g, "syugw");
syl = syl.replace(/nyukw/g, "nyugw");
syl = syl.replace(/pyukw/g, "pyugw");
syl = syl.replace(/byukw/g, "byugw");
syl = syl.replace(/myukw/g, "myugw");
syl = syl.replace(/dyukw/g, "dyugw");
syl = syl.replace(/jyukw/g, "jyugw");
syl = syl.replace(/kyukw/g, "kyugw");
syl = syl.replace(/tyukw/g, "tyugw");
syl = syl.replace(/hyukw/g, "hyugw");

//랐던 ss followed by n d j
syl = syl.replace(/issn/g, "inn");
syl = syl.replace(/issd/g, "itt");
syl = syl.replace(/issj/g, "itj");

syl = syl.replace(/assn/g, "ann");
syl = syl.replace(/assd/g, "att");
syl = syl.replace(/assj/g, "atj");

syl = syl.replace(/essn/g, "enn");
syl = syl.replace(/essd/g, "ett");
syl = syl.replace(/essj/g, "etj");

syl = syl.replace(/ossn/g, "onn");
syl = syl.replace(/ossd/g, "ott");
syl = syl.replace(/ossj/g, "otj");

syl = syl.replace(/ussn/g, "unn");
syl = syl.replace(/ussd/g, "utt");
syl = syl.replace(/ussj/g, "utj");
	
//ha
syl = syl.replace(/hakh/g, "hak");
syl = syl.replace(/hakn/g, "hang");
syl = syl.replace(/hakr/g, "hagn");
syl = syl.replace(/hakg/g, "hakk");
syl = syl.replace(/hakm/g, "hagm");

syl = syl.replace(/handa/g, "handa");
syl = syl.replace(/handi/g, "handi");
syl = syl.replace(/handu/g, "handu");
syl = syl.replace(/hande/g, "hande");
syl = syl.replace(/hando/g, "hando");
syl = syl.replace(/handy/g, "handy");
syl = syl.replace(/handw/g, "handw");
syl = syl.replace(/hanr/g, "hall");

syl = syl.replace(/hadh/g, "hat");
syl = syl.replace(/hadg/g, "hatg");
syl = syl.replace(/hadd/g, "hatt");
syl = syl.replace(/hadm/g, "hatm");

syl = syl.replace(/haln/g, "hall");
syl = syl.replace(/halr/g, "hall");

syl = syl.replace(/hamr/g, "hamm");
syl = syl.replace(/haml/g, "hamm");

syl = syl.replace(/haph/g, "hap");
syl = syl.replace(/hapg/g, "habg");
syl = syl.replace(/hapn/g, "hamn");
syl = syl.replace(/hapr/g, "hamn");
syl = syl.replace(/hapm/g, "hamm");

syl = syl.replace(/hash/g, "hat");
syl = syl.replace(/hasg/g, "hatg");
syl = syl.replace(/hasn/g, "hatn");
syl = syl.replace(/hasd/g, "hatt");
syl = syl.replace(/hasm/g, "hanm");
syl = syl.replace(/hasb/g, "hatb");
syl = syl.replace(/hasshi/g, "hatshi");

syl = syl.replace(/hassn/g, "hann");
syl = syl.replace(/hassd/g, "hatt");
syl = syl.replace(/hassj/g, "hatj");

syl = syl.replace(/hangr/g, "hangn");

syl = syl.replace(/hajh/g, "hatj");
syl = syl.replace(/hajg/g, "hatg");
syl = syl.replace(/hajn/g, "hatn");
syl = syl.replace(/hajd/g, "hatt");
syl = syl.replace(/hajm/g, "hatm");

syl = syl.replace(/hachh/g, "hatj");
syl = syl.replace(/hachg/g, "hatg");
syl = syl.replace(/hachn/g, "hatn");
syl = syl.replace(/hachd/g, "hatt");
syl = syl.replace(/hachm/g, "hatm");

syl = syl.replace(/hath/g, "hat");
syl = syl.replace(/hatd/g, "hatt");

syl = syl.replace(/haph/g, "hap");

syl = syl.replace(/hahg/g, "hahk");
syl = syl.replace(/hahr/g, "har");

//hae
syl = syl.replace(/haekh/g, "haek");
syl = syl.replace(/haekn/g, "haeng");
syl = syl.replace(/haekr/g, "haegn");
syl = syl.replace(/haekg/g, "haekk");
syl = syl.replace(/haekm/g, "haegm");

syl = syl.replace(/haend/g, "haend");
syl = syl.replace(/haenr/g, "haell");

syl = syl.replace(/haedh/g, "haedt");
syl = syl.replace(/haedg/g, "haetg");
syl = syl.replace(/haedd/g, "haett");
syl = syl.replace(/haedm/g, "haetm");

syl = syl.replace(/haeln/g, "haell");
syl = syl.replace(/haelr/g, "haell");

syl = syl.replace(/haemr/g, "haemm");
syl = syl.replace(/haeml/g, "haemm");

syl = syl.replace(/haeph/g, "haep");
syl = syl.replace(/haepg/g, "haebg");
syl = syl.replace(/haepn/g, "haemn");
syl = syl.replace(/haepr/g, "haemn");
syl = syl.replace(/haepm/g, "haemm");

syl = syl.replace(/haesh/g, "haet");
syl = syl.replace(/haesg/g, "haetg");
syl = syl.replace(/haesn/g, "haetn");
syl = syl.replace(/haesd/g, "haett");
syl = syl.replace(/haesm/g, "haenm");
syl = syl.replace(/haesb/g, "haetb");
syl = syl.replace(/haesshi/g, "haetshi");

syl = syl.replace(/haessn/g, "haenn");
syl = syl.replace(/haessd/g, "haett");
syl = syl.replace(/haessj/g, "haetj");

syl = syl.replace(/haengr/g, "haengn");

syl = syl.replace(/haejh/g, "haetj");
syl = syl.replace(/haejg/g, "haetg");
syl = syl.replace(/haejn/g, "haetn");
syl = syl.replace(/haejd/g, "haett");
syl = syl.replace(/haejm/g, "haetm");

syl = syl.replace(/haechh/g, "haetj");
syl = syl.replace(/haechg/g, "haetg");
syl = syl.replace(/haechn/g, "haetn");
syl = syl.replace(/haechd/g, "haett");
syl = syl.replace(/haechm/g, "haetm");

syl = syl.replace(/haeth/g, "haet");
syl = syl.replace(/haetd/g, "haett");

syl = syl.replace(/haeph/g, "haep");

syl = syl.replace(/haehg/g, "haehk");
syl = syl.replace(/haehr/g, "haer");

//hya
syl = syl.replace(/hyakh/g, "hyak");
syl = syl.replace(/hyakn/g, "hyang");
syl = syl.replace(/hyakr/g, "hyagn");
syl = syl.replace(/hyakg/g, "hyakk");
syl = syl.replace(/hyakm/g, "hyagm");

syl = syl.replace(/hyand/g, "hyand");
syl = syl.replace(/hyanr/g, "hyall");

syl = syl.replace(/hyadh/g, "hyat");
syl = syl.replace(/hyadg/g, "hyatg");
syl = syl.replace(/hyadd/g, "hyatt");
syl = syl.replace(/hyadm/g, "hyatm");

syl = syl.replace(/hyaln/g, "hyall");
syl = syl.replace(/hyalr/g, "hyall");

syl = syl.replace(/hyamr/g, "hyamm");
syl = syl.replace(/hyaml/g, "hyamm");

syl = syl.replace(/hyaph/g, "hyap");
syl = syl.replace(/hyapg/g, "hyabg");
syl = syl.replace(/hyapn/g, "hyamn");
syl = syl.replace(/hyapr/g, "hyamn");
syl = syl.replace(/hyapm/g, "hyamm");

syl = syl.replace(/hyash/g, "hyat");
syl = syl.replace(/hyasg/g, "hyatg");
syl = syl.replace(/hyasn/g, "hyatn");
syl = syl.replace(/hyasd/g, "hyatt");
syl = syl.replace(/hyasm/g, "hyanm");
syl = syl.replace(/hyasb/g, "hyatb");
syl = syl.replace(/hyasshi/g, "hyatshi");

syl = syl.replace(/hyassn/g, "hyann");
syl = syl.replace(/hyassd/g, "hyatt");
syl = syl.replace(/hyassj/g, "hyatj");

syl = syl.replace(/hyangr/g, "hyangn");

syl = syl.replace(/hyajh/g, "hyatj");
syl = syl.replace(/hyajg/g, "hyatg");
syl = syl.replace(/hyajn/g, "hyatn");
syl = syl.replace(/hyajd/g, "hyatt");
syl = syl.replace(/hyajm/g, "hyatm");

syl = syl.replace(/hyachh/g, "hyatj");
syl = syl.replace(/hyachg/g, "hyatg");
syl = syl.replace(/hyachn/g, "hyatn");
syl = syl.replace(/hyachd/g, "hyatt");
syl = syl.replace(/hyachm/g, "hyatm");

syl = syl.replace(/hyath/g, "hyat");
syl = syl.replace(/hyatd/g, "hyatt");

syl = syl.replace(/hyaph/g, "hyap");

syl = syl.replace(/hyahg/g, "hyahk");
syl = syl.replace(/hyahr/g, "hyar");

//he
syl = syl.replace(/hekh/g, "hek");
syl = syl.replace(/hekn/g, "heng");
syl = syl.replace(/hekr/g, "hegn");
syl = syl.replace(/hekg/g, "hekk");
syl = syl.replace(/hekm/g, "hegm");

syl = syl.replace(/hend/g, "hend");
syl = syl.replace(/henr/g, "hell");

syl = syl.replace(/hedh/g, "hedt");
syl = syl.replace(/hedg/g, "hetg");
syl = syl.replace(/hedd/g, "hett");
syl = syl.replace(/hedm/g, "hetm");

syl = syl.replace(/heln/g, "hell");
syl = syl.replace(/helr/g, "hell");

syl = syl.replace(/hemr/g, "hemm");
syl = syl.replace(/heml/g, "hemm");

syl = syl.replace(/heph/g, "hep");
syl = syl.replace(/hepg/g, "hebg");
syl = syl.replace(/hepn/g, "hemn");
syl = syl.replace(/hepr/g, "hemn");
syl = syl.replace(/hepm/g, "hemm");

syl = syl.replace(/hesh/g, "het");
syl = syl.replace(/hesg/g, "hetg");
syl = syl.replace(/hesn/g, "hetn");
syl = syl.replace(/hesd/g, "hett");
syl = syl.replace(/hesm/g, "henm");
syl = syl.replace(/hesb/g, "hetb");
syl = syl.replace(/hesshi/g, "hetshi");

syl = syl.replace(/hessn/g, "henn");
syl = syl.replace(/hessd/g, "hett");
syl = syl.replace(/hessj/g, "hetj");

syl = syl.replace(/hengr/g, "hengn");

syl = syl.replace(/hejh/g, "hetj");
syl = syl.replace(/hejg/g, "hetg");
syl = syl.replace(/hejn/g, "hetn");
syl = syl.replace(/hejd/g, "hett");
syl = syl.replace(/hejm/g, "hetm");

syl = syl.replace(/hechh/g, "hetj");
syl = syl.replace(/hechg/g, "hetg");
syl = syl.replace(/hechn/g, "hetn");
syl = syl.replace(/hechd/g, "hett");
syl = syl.replace(/hechm/g, "hetm");

syl = syl.replace(/heth/g, "het");
syl = syl.replace(/hetd/g, "hett");

syl = syl.replace(/heph/g, "hep");

syl = syl.replace(/hehg/g, "hehk");
syl = syl.replace(/hehr/g, "her");
	
//ho
syl = syl.replace(/hokh/g, "hok");
syl = syl.replace(/hokn/g, "hong");
syl = syl.replace(/hokr/g, "hogn");
syl = syl.replace(/hokg/g, "hokk");
syl = syl.replace(/hokm/g, "hogm");

syl = syl.replace(/hond/g, "hond");
syl = syl.replace(/honr/g, "holl");

syl = syl.replace(/hodh/g, "hodt");
syl = syl.replace(/hodg/g, "hotg");
syl = syl.replace(/hodd/g, "hott");
syl = syl.replace(/hodm/g, "hotm");

syl = syl.replace(/holn/g, "holl");
syl = syl.replace(/holr/g, "holl");

syl = syl.replace(/homr/g, "homm");
syl = syl.replace(/homl/g, "homm");

syl = syl.replace(/hoph/g, "hop");
syl = syl.replace(/hopg/g, "hobg");
syl = syl.replace(/hopn/g, "homn");
syl = syl.replace(/hopr/g, "homn");
syl = syl.replace(/hopm/g, "homm");

syl = syl.replace(/hosh/g, "hot");
syl = syl.replace(/hosg/g, "hotg");
syl = syl.replace(/hosn/g, "hotn");
syl = syl.replace(/hosd/g, "hott");
syl = syl.replace(/hosm/g, "honm");
syl = syl.replace(/hosb/g, "hotb");
syl = syl.replace(/hosshi/g, "hotshi");

syl = syl.replace(/hossn/g, "honn");
syl = syl.replace(/hossd/g, "hott");
syl = syl.replace(/hossj/g, "hotj");

syl = syl.replace(/hongr/g, "hongn");

syl = syl.replace(/hojh/g, "hotj");
syl = syl.replace(/hojg/g, "hotg");
syl = syl.replace(/hojn/g, "hotn");
syl = syl.replace(/hojd/g, "hott");
syl = syl.replace(/hojm/g, "hotm");

syl = syl.replace(/hochh/g, "hotj");
syl = syl.replace(/hochg/g, "hotg");
syl = syl.replace(/hochn/g, "hotn");
syl = syl.replace(/hochd/g, "hott");
syl = syl.replace(/hochm/g, "hotm");

syl = syl.replace(/hoth/g, "hot");
syl = syl.replace(/hotd/g, "hott");

syl = syl.replace(/hoph/g, "hop");

syl = syl.replace(/hohg/g, "hohk");
syl = syl.replace(/hohr/g, "hor");
	
//hu
syl = syl.replace(/hukh/g, "huk");
syl = syl.replace(/hukn/g, "hung");
syl = syl.replace(/hukr/g, "hugn");
syl = syl.replace(/hukg/g, "hukk");
syl = syl.replace(/hukm/g, "hugm");

syl = syl.replace(/hund/g, "hund");
syl = syl.replace(/hunr/g, "hull");

syl = syl.replace(/hudh/g, "hudt");
syl = syl.replace(/hudg/g, "hutg");
syl = syl.replace(/hudd/g, "hutt");
syl = syl.replace(/hudm/g, "hutm");

syl = syl.replace(/huln/g, "hull");
syl = syl.replace(/hulr/g, "hull");

syl = syl.replace(/humr/g, "humm");
syl = syl.replace(/huml/g, "humm");

syl = syl.replace(/huph/g, "hup");
syl = syl.replace(/hupg/g, "hubg");
syl = syl.replace(/hupn/g, "humn");
syl = syl.replace(/hupr/g, "humn");
syl = syl.replace(/hupm/g, "humm");

syl = syl.replace(/hush/g, "hut");
syl = syl.replace(/husg/g, "hutg");
syl = syl.replace(/husn/g, "hutn");
syl = syl.replace(/husd/g, "hutt");
syl = syl.replace(/husm/g, "hunm");
syl = syl.replace(/husb/g, "hutb");
syl = syl.replace(/husshi/g, "hutshi");

syl = syl.replace(/hussn/g, "hunn");
syl = syl.replace(/hussd/g, "hutt");
syl = syl.replace(/hussj/g, "hutj");

syl = syl.replace(/hungr/g, "hungn");

syl = syl.replace(/hujh/g, "hutj");
syl = syl.replace(/hujg/g, "hutg");
syl = syl.replace(/hujn/g, "hutn");
syl = syl.replace(/hujd/g, "hutt");
syl = syl.replace(/hujm/g, "hutm");

syl = syl.replace(/huchh/g, "hutj");
syl = syl.replace(/huchg/g, "hutg");
syl = syl.replace(/huchn/g, "hutn");
syl = syl.replace(/huchd/g, "hutt");
syl = syl.replace(/huchm/g, "hutm");

syl = syl.replace(/huth/g, "hut");
syl = syl.replace(/hutd/g, "hutt");

syl = syl.replace(/huph/g, "hup");

syl = syl.replace(/huhg/g, "huhk");
syl = syl.replace(/huhr/g, "hur");

//hi
syl = syl.replace(/hikh/g, "hik");
syl = syl.replace(/hikn/g, "hing");
syl = syl.replace(/hikr/g, "hign");
syl = syl.replace(/hikg/g, "hikk");
syl = syl.replace(/hikm/g, "higm");

syl = syl.replace(/hind/g, "hind");
syl = syl.replace(/hinr/g, "hill");

syl = syl.replace(/hidh/g, "hidt");
syl = syl.replace(/hidg/g, "hitg");
syl = syl.replace(/hidd/g, "hitt");
syl = syl.replace(/hidm/g, "hitm");

syl = syl.replace(/hiln/g, "hill");
syl = syl.replace(/hilr/g, "hill");

syl = syl.replace(/himr/g, "himm");
syl = syl.replace(/himl/g, "himm");

syl = syl.replace(/hiph/g, "hip");
syl = syl.replace(/hipg/g, "hibg");
syl = syl.replace(/hipn/g, "himn");
syl = syl.replace(/hipr/g, "himn");
syl = syl.replace(/hipm/g, "himm");

syl = syl.replace(/hish/g, "hit");
syl = syl.replace(/hisg/g, "hitg");
syl = syl.replace(/hisn/g, "hitn");
syl = syl.replace(/hisd/g, "hitt");
syl = syl.replace(/hism/g, "hinm");
syl = syl.replace(/hisb/g, "hitb");
syl = syl.replace(/hisshi/g, "hitshi");

syl = syl.replace(/hissn/g, "hinn");
syl = syl.replace(/hissd/g, "hitt");
syl = syl.replace(/hissj/g, "hitj");

syl = syl.replace(/hingr/g, "hingn");

syl = syl.replace(/hijh/g, "hitj");
syl = syl.replace(/hijg/g, "hitg");
syl = syl.replace(/hijn/g, "hitn");
syl = syl.replace(/hijd/g, "hitt");
syl = syl.replace(/hijm/g, "hitm");

syl = syl.replace(/hichh/g, "hitj");
syl = syl.replace(/hichg/g, "hitg");
syl = syl.replace(/hichn/g, "hitn");
syl = syl.replace(/hichd/g, "hitt");
syl = syl.replace(/hichm/g, "hitm");

syl = syl.replace(/hith/g, "hit");
syl = syl.replace(/hitd/g, "hitt");

syl = syl.replace(/hiph/g, "hip");

syl = syl.replace(/hihg/g, "hihk");
syl = syl.replace(/hihr/g, "hir");

//같이
syl = syl.replace(/gati/g, "gachi");
syl = syl.replace(/bati/g, "bachi");
syl = syl.replace(/nati/g, "nachi");
syl = syl.replace(/mati/g, "machi");
syl = syl.replace(/hati/g, "hachi");
syl = syl.replace(/rati/g, "rachi");

syl = syl.replace(/bata/g, "bacha");
syl = syl.replace(/nata/g, "nacha");
syl = syl.replace(/mata/g, "macha");
syl = syl.replace(/hata/g, "hacha");
syl = syl.replace(/rata/g, "racha");
syl = syl.replace(/data/g, "dacha");

syl = syl.replace(/gato/g, "gacho");
syl = syl.replace(/bato/g, "bacho");
syl = syl.replace(/nato/g, "nacho");
syl = syl.replace(/mato/g, "macho");
syl = syl.replace(/hato/g, "hacho");
syl = syl.replace(/rato/g, "racho");
syl = syl.replace(/dato/g, "dacho");



//있는 있게 
syl = syl.replace(/issg/g, "itg");
syl = syl.replace(/issn/g, "inn");

//꽃다운 
syl = syl.replace(/ochda/g, "otda");

var find = syl.match(/mos[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/mos/g, "mot"));
	}
}

//got mot sot geot heot bit mat etc
var find = syl.match(/gos[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/gos/g, "got"));
	}
}

var find = syl.match(/geos[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/geos/g, "geot"));
	}
}
	
var find = syl.match(/bich[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/bich/g, "bit"));
	}
}

var find = syl.match(/baes[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/baes/g, "baet"));
	}
}
	
var find = syl.match(/[^aeiouy]wit/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/wit/g, "with"));
	}
}

//individual words
syl = syl.replace(/anha/g, "ana");
syl = syl.replace(/anheul/g, "aneul");
syl = syl.replace(/banan/g, "banhan");
syl = syl.replace(/bitn/g, "binn");
syl = syl.replace(/bissori/g, "bitsori"); 
syl = syl.replace(/bogotip/g, "bogoship");
syl = syl.replace(/chanha/g, "chana");
syl = syl.replace(/dalrin/g, "dallin");
syl = syl.replace(/deuti/g, "deushi");
syl = syl.replace(/daheumyeon/g, "daeumyeon");
syl = syl.replace(/eopsda/g, "eopta");
syl = syl.replace(/eopsja/g, "eopja");
syl = syl.replace(/eopsji/g, "eopji");
syl = syl.replace(/eopsi/g, "eopshi");
syl = syl.replace(/eopsn/g, "eomn");
syl = syl.replace(/ilheo/g, "ireo");
syl = syl.replace(/ireohke/g, "ireoke");
syl = syl.replace(/ipmajchum/g, "immatchum");
syl = syl.replace(/geureohk/g, "geureok");
syl = syl.replace(/johda/g, "jota");
syl = syl.replace(/jigyeo/g, "jikyeo");
syl = syl.replace(/janha/g, "jana");
syl = syl.replace(/jotim/g, "joshim"); //joshimseure
syl = syl.replace(/molra/g, "molla");
syl = syl.replace(/manhi/g, "mani");
syl = syl.replace(/myeoti/g, "myeoshi");
syl = syl.replace(/meosji/g, "meotji");
syl = syl.replace(/nohji/g, "nochi");
syl = syl.replace(/nohko/g, "noko");	
syl = syl.replace(/pisjul/g, "pitjul");
syl = syl.replace(/ssahyeo/g, "ssayeo");
syl = syl.replace(/yetigye/g, "uishige");
syl = syl.replace(/usneun/g, "unneun");
syl = syl.replace(/wakkbich/g, "wangbit");

syl = syl.replace(/geojis/g, "geojit");
syl = syl.replace(/mudtigeona/g, "mutchigeona");
syl = syl.replace(/deonjyeojyeossgo/g, "deonjyeojyeotgo");
syl = syl.replace(/dahji/g, "daji");
syl = syl.replace(/motae/g, "mothae");
syl = syl.replace(/sshipeo/g, "sshibeo");
syl = syl.replace(/heundeureobwatcha/g, "heundeureobwatja");
syl = syl.replace(/manjogae/g, "manjoghae");
syl = syl.replace(/ttarajabgieneun/g, "ttarajapgieneun");
syl = syl.replace(/kkamjjagamyeon/g, "kkamjjakhamyeon");
syl = syl.replace(/gajyeowassgo/g, "gajyeowatgo");
syl = syl.replace(/oechyeo/g, "wechyeo");
syl = syl.replace(/gyesokdoel/g, "gyesokdwel");
syl = syl.replace(/daetin/g, "daeshin");
syl = syl.replace(/ppeonan/g, "ppeonhan");

syl = syl.replace(/hoheupeul/g, "hoheubeul");
syl = syl.replace(/eopsdeon/g, "eopdeon");
syl = syl.replace(/hansunganye/g, "hansungane");
syl = syl.replace(/nohchiji/g, "notchiji");
syl = syl.replace(/challanan/g, "challanhan");
syl = syl.replace(/ipe/g, "ibe");
syl = syl.replace(/geumanalge/g, "geumanhalge");
syl = syl.replace(/midni/g, "minni");
syl = syl.replace(/gibge/g, "gipge");
 
syl = syl.replace(/isseossgie/g, "isseotgie");
syl = syl.replace(/anhgoseo/g, "angoseo");
syl = syl.replace(/jogeupae/g, "jogeuphae");
syl = syl.replace(/bitwo/g, "bichwo");
syl = syl.replace(/doeeoseo/g, "dweeoseo");
syl = syl.replace(/doeeo/g, "dweeo");
syl = syl.replace(/dahneun/g, "daneun");
syl = syl.replace(/kkeutie/g, "kkeuchie");
syl = syl.replace(/mattahkekkeum/g, "mattakekkeum");
syl = syl.replace(/yaksogaet/g, "yaksokhaet");
syl = syl.replace(/shibeo/g, "shipeo");
syl = syl.replace(/sunoha/g, "sunoa");
syl = syl.replace(/johahae/g, "joahae");
syl = syl.replace(/seugini/g, "seukini");
syl = syl.replace(/nanmanage/g, "nanmanhage");
syl = syl.replace(/banbanamyeon/g, "banbanhamyeon");

syl = syl.replace(/haengbogage/g, "haengbokage");
syl = syl.replace(/uulhae/g, "uurhae");
syl = syl.replace(/bamnaj/g, "bamnat");
syl = syl.replace(/myeoch/g, "myeot");
syl = syl.replace(/waeteo/g, "waesseo");




//english word corrections that don't interfer with korean words
syl = syl.replace(/lonery/g, "lonely");
syl = syl.replace(/coror/g, "color");
syl = syl.replace(/sirent/g, "silent");
syl = syl.replace(/horiday/g, "holiday");
syl = syl.replace(/lovery/g, "lovely");
syl = syl.replace(/rerentless/g, "relentless");
syl = syl.replace(/arone/g, "alone");
syl = syl.replace(/togeter/g, "together");
syl = syl.replace(/feering/g, "feeling");
syl = syl.replace(/pire/g, "pile");
syl = syl.replace(/foorish/g, "foolish");
syl = syl.replace(/arways/g, "always");
syl = syl.replace(/latery/g, "lately");
syl = syl.replace(/taging/g, "taking");
syl = syl.replace(/shaging/g, "shaking");
syl = syl.replace(/allight/g, "alright");
syl = syl.replace(/frustraching/g, "frustrating");
syl = syl.replace(/absorutery/g, "absolutely");
syl = syl.replace(/rerax/g, "relax");
syl = syl.replace(/definitery/g, "definitely");
syl = syl.replace(/witout/g, "without");
syl = syl.replace(/doetn’t/g, "doesn't");
syl = syl.replace(/alleady/g, "already");
syl = syl.replace(/beriever/g, "believer");
syl = syl.replace(/atmotphere/g, "atmosphere");
syl = syl.replace(/famiriar/g, "familiar");
syl = syl.replace(/sumneme/g, "supreme");
syl = syl.replace(/noting/g, "nothing");
syl = syl.replace(/mage/g, "make");
syl = syl.replace(/withh/g, "with");
syl = syl.replace(/someting/g, "something");

	

document.romanization.rom.value=syl;
}
