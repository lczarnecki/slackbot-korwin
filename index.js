var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: "xoxb-35305045893-OjVDz8TN01cD6Wmx5VQdYNx0"
})

var responses = [
	"Podejrzewam, że w dziełach Lenina jest wszystko, jak dobrze poszukać.",
	"Uważam, że kalifat powinien zostać uznany a następnie zniszczony.",
	"Celem ruchu drogowego nie jest bezpieczeństwo, tylko szybkość.",
	"Chciałbym odebrać prawo wyborcze wielu osobom, nie tylko kobietom.",
	"Celem życia nie jest przeżycie",
	"Kiedy kobieta ma pryszcz na twarzy – stara się nie wychodzić z mieszkania. Podobnie z inwalidami.",
	"Macie Państwo rację: jestem za równouprawnieniem płci! Za tym, by czynności kobiece – np. karmienie męża i dzieci – uznać za równocenne z męskimi!",
	"Można się tylko cieszyć, że inwalidzi też organizują zawody. Ze sportem nie ma to jednak wiele wspólnego – równie dobrze można by organizować zawody w szachy dla debili.",
	"Obejrzałem sobie klasyfikację medalową para-olimpiady. Nie ma tam prawie w ogóle państw afrykańskich. Tam zaraza nie dotarła. Ale to oznacza, że Murzyni niedługo podbiją świat. I wyrżną nas.",
	"Podejrzewam, że w dziełach Lenina jest wszystko, jak dobrze poszukać.",
	"Skok z szóstego piętra jest z całą pewnością bardziej szkodliwy niż zażywanie heroiny, aczkolwiek nie zakazujemy budowy szóstych pięter.",
	"Takie są skutki powszechnej oświaty. Dawniej też były matoły, ale – ponieważ nie umiały czytać i pisać – to nie zawracały nikomu głowy!",
	"Zwalczanie analfabetyzmu spowodowało upowszechnienie się horoskopów drukowanych w miliardach kopii. Co gorsza, powstała warstwa pół-inteligentów, którzy rozumieją zdanie typu: „Bioenergetyczna transformacja konfiguratywnego pola transcendencji wektorowej stanowi fundament heurezy protoekstremalnych koacerwatów”. Byłoby taniej i bezpieczniej gdyby czytali manifesty poezji nowoczesnej lub odmawiali litanie.",
	"Kobiety nie mogą być inteligentne - dba o to mechanizm Ewolucji Naturalnej. Inteligentna istota nie wytrzymałaby przebywania dłużej niż godzinę dziennie z paplającym dzieckiem! Dlatego właśnie (i nie tylko dlatego) mężczyźni nie lubią wiązać się z kobietami inteligentnymi: instynktownie chcą, by ich dzieci miały dobrą opiekę",
	"Kobiety zawsze udają, że pewien opór stawiają i to jest normalne. Trzeba wiedzieć kiedy można, a kiedy nie",
	"Gdyby Pan się znał na kobietach, to by Pan wiedział, że zawsze się troszeczkę gwałci",
	"Mordowanie milionów ludzi nie było celem Hitlera. Niech mi pan pokaże chociaż jedno zdanie, które będzie świadczyć o tym, że wiedział o eksterminacji Żydów. Gdyby dziś stanął przed sądem, musiałby zostać uniewinniony",
	"Oczywiście, że lałem dzieci. Dzieci czasami trzeba karać. To jest normalne i wszyscy to robią",
	"Ludzie pracujący w obozie w Oświęcimiu bardzo by się cieszyli, gdyby mogli zawierać umowy śmieciowe, a nie pracować na umowach standardowych. Zapewniających gwarantowane wyżywienie, gwarantowane godziny pracy.",
	"Zachowanie o charakterze pedofilskim ma pozytywny wydźwięk i jest dużo bardziej zasadne niż edukacja seksualna młodzieży.",
	"Albert Einstein pracował był w biurze patentowym – i stworzył Teorię Względności. Istnieje silne podejrzenie, że gdyby pracował na sponsorowanej przez państwo uczelni, to by jej nie wynalazł. Musiałby bowiem pisać miesięczne i roczne plany swoich badań. Oraz sprawozdania. I co miał w nich pisać: „Chwilowo nie wynalazłem Teorii Względności, ale tak sobie myślę…”?",
	"Jestem za wejściem do strefy wolnego handlu! Tylko że Unia Europejska nie jest taką strefą, a strefą szalejącej biurokracji, która steruje każdym hektolitrem wina i każdą toną wołowiny.",
	"Bardzo się cieszyłem, kiedy Chruszczow oświadczył, że Związek Sowiecki w ciągu 25 lat dogoni i przegoni USA. Jest tylko jeden drobiazg. Rozziew między Ameryką a Unią Europejską powiększa się z każdym miesiącem. Chruszczow miał tę przewagę, że dał sobie 25 lat i zdążył umrzeć. Ponadto co roku dowiadywał się z „Prawdy”, że Związek Sowiecki już dogania USA. Umierał szczęśliwy.",
	"Bo nie o to chodzi by zmieniać świnię przy korycie, tylko koryto im zabrać.",
	"Budynek Komisji Europejskiej byłby idealny na burdel.",
	"Czy ktoś widział kiedyś, żeby koń wręczył kopertę weterynarzowi?",
	"Demokracja polega na tym, że jeżeli ja z panem i panią będziemy na bezludnej wyspie, to większością głosów ustalimy, że pani ma z nami na zmianę sypiać! To jest właśnie demokracja! A mając większość 2/3 wpiszemy to nawet do konstytucji…",
	"Dla wyjaśnienia moim wyborcom: ja też pijam – ale wyłącznie wino, a na deser miody i (czasem) likier; by nie było, że jestem abstynentem – bo wtedy nie miałbym w wyborach żadnych szans…",
	"Do 9 roku życia byłem socjalistą. Podobno każdy za młodu powinien nim być, potem mądrzeje.",
	"Ekonomista tłumaczący, że rynek powinien być wolny, podobny jest dealerowi tłumaczącemu, że kokaina zabija.",
	"Gdy w organizmie pojawiają się komórki raka, to trzeba je wyciąć i zniszczyć – a nie litować się nad nimi, że są „takie młode” i „takie twórcze”.",
	"Gdyby w '39 co drugi Żyd miał broń, nie byłoby Holokaustu.",
	"Homoś to jest rzecz normalna. Byli przez cztery tysiące lat, są sobie – nikomu nie przeszkadzali. Natomiast geje, tfu, to jest banda chamów importowanych z zagranicy. Część z nich; w ogóle nie są homosiami. Oni tylko za pieniądze, że tak powiem, udają homosiów. To są importowani z zagranicy ludzie, którzy za pieniądze z zagranicy udają często; często w ogóle nie są homosiami; dostają pieniądze, na to żeby rozbijać społeczeństwo i imputować dziwaczne wartości.",
	"Jak może istnieć ustrój, w którym dwóch meneli spod budki ma dwa głosy, a profesor uniwersytetu ma jeden głos? Trzeba być idiotą, żeby chcieć w takim ustroju żyć.",
	"Jeśli w wyniku własnej decyzji ginie człowiek – to jego prywatna sprawa. Jeśli ginie 10.000 ludzi – to jest to 10.000 prywatnych spraw – a nie „problem społeczny”.",
	"Kiedyś karty były dla mnie głównym sposobem utrzymywania rodziny.",
	"Kościół jednak nie tylko sprzedaje nadzieję: stanowi organizację przekonującą ludzi, że należy żyć przyzwoicie. Za to warto zapłacić. Inna sprawa, czy nie płacimy za dużo… Zbyt tłusty ksiądz to zazwyczaj zły ksiądz!",
	"Lewica działa zgodnie z elementarzem: „Gdy chcesz zniszczyć organizację (tu: organizację społeczeństwa) wybieraj niezadowolonych – a jak ich nie ma: potencjalnych niezadowolonych – i wmawiaj im, jacy to są oni pokrzywdzeni. I namawiaj do obalenia”.",
	"Likwidacja Senatu oznacza oddanie władzy tym głupkom w Sejmie!",
	"Małpa jest znacznie lepszym wyborcą, niż socjalista. Małpa bowiem mając do wyboru A lub B głosuje losowo – a więc myli się raz na dwa razy. Natomiast socjalista myli się zawsze.",
	"Mam liczne wady, na przykład taką, że jestem znacznie lepszym szachistą niż warcabistą – jak jest prosty problem, ale bardzo dużo zmiennych – to jestem o wiele gorszy niż w głębokich problemach. To jest moja wada. Ale mam też zalety – na przykład – jestem zarozumiały.",
	"Naturalną dla mordercy jest śmierć na szubienicy.",
	"Naukowiec piszący dla grantu musi pisać prace drugorzędne – po to, by dający granty mógł zrozumieć, nad czym facet pracuje!",
	"Nawet za Hitlera czy Stalina, góral mógł sobie robić oscypki, jakie chciał, a dzisiaj stoi nad nim urzędnik unijny.",
	"Nominacja kogoś uczciwego na stanowisko ministra, to jest coś, co warto uczcić swoją obecnością.",
	"Obecny ustrój jest koszmarnie głupi – i gdyby nie telewizja (i nadmiar dóbr uzyskany dzięki technice…), trzeba by utrzymywać go w Europie terrorem porównywalnym ze stalinowskim. Mając telewizję można z terroru zrezygnować.",
	"Policja, o ile wiem ma pałki. Oprócz tego ma również naboje. Również ostre. Przypominam, że nie po to płacimy podatki na ostre naboje, żeby ich nie używać.",
	"Różnica między Polską a Stanami polega jednak na tym, że oni swoich Czerwonych przechowują w rezerwatach – a my w parlamentach…",
	"Takie są skutki powszechnej oświaty. Dawniej też były matoły, ale – ponieważ nie umiały czytać i pisać – to nie zawracały nikomu głowy!",
	"Telewizja jest dla idiotów, czyli dla tzw. szarego człowieka. Większość widzów i tak nie rozumie, co się do nich mówi, więc trzeba pilnować, by telewizja nie mąciła ich poglądów.",
	"To nie ja mam się podlizywać wyborcom, to oni muszą mieć na mnie ochotę.",
	"Tylko bankructwo całego tego systemu może spowodować, że ludzie zaczną naprawdę liczyć.",
	"Walczymy z podatkami niesprawiedliwymi. I Stary Testament i Nowy Testament i Koran zawierają zakaz rabunku wdów i sierot. A niczym innym jest podatek spadkowy.",
	"Więzienia – to uniwersytety opozycji.",
	"Gdyby wybory miałyby coś zmienić, to dawno zostałyby zakazane.",
	"Idiota z dyplomem to taki sam idiota, jak przedtem — tylko z pretensjami.",
	"Gdyby Newton sprzątał w domu, nie wymyśliłby prawa powszechnego ciążenia.",
	"ZUS z pewnością jest instytucją przestępczą, ale nie można nazwać jej zorganizowaną.",
	"Dyktatury dzielą się na dobre i jeszcze lepsze. Demokracja jest zawsze głupia.",
	"Istnieją cztery rodzaje białej śmierci: cukier, sól, kokaina i służba zdrowia.",
	"Państwa nie mają przyjażni tylko interesy - Winston Churchill",
	"Jedyną książką jaką warto przeczytać jest Ojciec chrzestny - ta jedna opowiada jak świat jest naprawdę rządzony."
];

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

controller.on('direct_message', function(bot,message) {
  bot.reply(message, 'Nie wiem kim jesteś, więc pewnie jesteś lewactwem, a lewactwo trzeba tępić a nie z nim rozmawiać.');
});

controller.on('mention' ,function(bot,message) {
	bot.reply(message, chooseResponse());
});

controller.on('direct_mention' ,function(bot,message) {
	bot.reply(message, chooseResponse());
});

function chooseResponse() {
	return responses[Math.floor(Math.random() * responses.length)];
}
