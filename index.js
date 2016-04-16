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
	"Ludzie pracujący w obozie w Oświęcimiu bardzo by się cieszyli, gdyby mogli zawierać umowy śmieciowe, a nie pracować na umowach standardowych. Zapewniających gwarantowane wyżywienie, gwarantowane godziny pracy",
	"Zachowanie o charakterze pedofilskim ma pozytywny wydźwięk i jest dużo bardziej zasadne niż edukacja seksualna młodzieży"
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
