// Timeline data with positions relative to the image
const timelinePoints = [
    {
        id: 1,
        x: 30,
        y: 30,
        year: "1914",
        title: "Föds",
        content: "Tove Jansson föds den 9 augusti 1914 i Helsingfors, Finland. Hon växer upp i en konstnärlig familj. Hennes pappa Viktor Jansson är en känd skulptör, och hennes mamma Signe Hammarsten-Jansson arbetar som illustratör. När hon var barn fick Tove inspiration från deras arbete och förstod tidigt vikten av kreativitet. Familjens hem präglades av konstnärlig frihet, vilket formade Toves framtida väg som konstnär."
    },
    {
        id: 2,
        x: 37,
        y: 35,
        year: "1930",
        title: "Försöker",
        content: "Som tonåring försöker Tove hitta sin plats i konstvärlden. Hon börjar studera konst vid Konstfack i Stockholm 1930–1933, där hon lär sig grunderna i design och illustration. Därefter fortsätter hon sina studier vid Centralskolan för konstflit (nuvarande Aalto-universitetets Högskola för Konst, Design och Arkitektur) i Helsingfors. Hennes utbildning kulminerar på den prestigefyllda École des Beaux-Arts i Paris, där hon fokuserar på klassiskt måleri och konstteori i 1938. Under denna tid experimenterar hon med tekniker som akvarell och kolteckning för att utveckla sin egen stil."
    },
    {
        id: 3,
        x: 23,
        y: 43,
        year: "1933",
        title: "Förstår",
        content: "Efter att ha ställt ut några av sina verk börjar Tove förstå att hennes passion inte bara ligger i måleri utan också i att berätta historier. Hon illustrerar för tidningar som Garm, en finländsk satirisk tidskrift där hon gör karikatyrer och samhällskritiska bilder. Tove använder de här tid för att förbereda sig på att kombinera sitt konstnärskap med berättande, vilket kommer att bli en central del av hennes livsverk."
    },
    {
        id: 4,
        x: 35,
        y: 49,
        year: "1945",
        title: "Författar",
        content: "Under andra världskriget författar Tove Jansson sin första Muminbok, Småtrollen och den stora översvämningen. I boken använder hon Mumintrollen för att uttrycka sina tankar om familj, vänskap och trygghet i en osäker tid. Illustrerade scener från denna bok, som \"Mumintrollet och Snorkfröken vid stranden\", visar Toves skicklighet som både konstnär och författare. Boken får positiv respons, och Mumintrollen börjar snabbt växa i popularitet, särskilt i Norden."
    },
    {
        id: 5,
        x: 60,
        y: 53,
        year: "1950",
        title: "Förvandlas",
        content: "Mumintrollen förvandlas snart till en global succé. Tove skriver fler böcker och skapar serier som publiceras i internationella tidningar, bland annat The Evening News i London. Mumintrollen blir en symbol för fantasi och filosofi, och Tove själv förvandlas från en ung konstnär till en internationellt erkänd författare. Samtidigt arbetar hon med målningar som Fest i stan (1953), där hon visar sin skicklighet i att skildra livets glädjeämnen i vibrerande färger."
    },
    {
        id: 6,
        x: 72,
        y: 59,
        year: "1956",
        title: "Fördjupar",
        content: "Tove fördjupar sig i sitt måleri och börjar arbeta med mer personliga och självbiografiska projekt. Hon publicerar boken Bildhuggarens dotter, där hon skildrar sin barndom i en konstnärlig familj. Under denna tid skapar hon också flera muralmålningar, som \"Livet i skärgården\" (1955) i Aurora-barnsjukhuset i Helsingfors, där hon illustrerar scener från den finska naturen. Hon experimenterar även med oljemålningar som Självporträtt med palett (1956), där hon reflekterar över sin identitet som konstnär."
    },
    {
        id: 7,
        x: 63,
        y: 68,
        year: "1960",
        title: "Förändrar",
        content: "Under 1960-talet förändrar Tove sitt fokus från Mumintrollen till andra konstnärliga projekt. Hon målar introspektiva verk som Båtar i dimma (1963), där hon skildrar ensamhet och frihet i ett minimalistiskt färgschema. Hon arbetar även med abstrakta teman och börjar utforska nya uttryck i sitt skapande. Hennes livspartner, konstnären Tuulikki Pietilä, blir en viktig inspirationskälla under denna period."
    },
    {
        id: 8,
        x: 75,
        y: 81,
        year: "1970",
        title: "Förklarar",
        content: "Tove förklarar att hon vill skriva böcker för vuxna med publicerande Sommarboken 1972. Den handlar om relationen mellan en mormor och ett barnbarn och är inspirerad av Toves somrar i den finska skärgården. Under denna tid fortsätter hon att måla, bland annat verk som Höst i skogen (1974), som visar hennes djupa koppling till naturen och hennes förmåga att fånga dess skiftande stämningar."
    },
    {
        id: 9,
        x: 55,
        y: 87,
        year: "1980",
        title: "Försvarar",
        content: "På 1980-talet försvarar Tove sina konstnärliga val och fortsätter att experimentera med nya uttryck. Hon reflekterar över stillhet och isoleringgenom målningar som Vinterdag i skärgården (1985). Hon ger intervjuer där hon förklarar hur hon alltid prioriterat sin konstnärliga frihet över kommersiell framgång. Hennes verk från denna period är fyllda med symbolik och djup."
    },
    {
        id: 10,
        x: 30,
        y: 84,
        year: "2001",
        title: "Försvinner",
        content: "Den 27 juni 2001 försvinner Tove Jansson från världen, men hennes arv lever vidare. Hennes muralmålningar, oljemålningar och böcker, särskilt Mumintrollen, är fortfarande älskade av människor över hela världen. Hon förblir en inspirationskälla för många konstnärer och författare."
    }
];

// Book slideshow data
const bookSlides = [
    {
        image: './data/Lynxboa. Oil painting by Tove Jansson in 1942. © Tove Jansson (1).webp',
        title: 'Sammanfattning',
        text: 'Bildhuggarens dotter, vilket är Tove Janssons första bok för vuxna, ger en inblick i Toves egen barndom, som var både magisk och mystisk. Tove skrev sina memoarer, som finns i olika miljöer, ibland i hennes pappas ateljé, skulptören Viktor Jansson, i Katajanokka på 1920-talet, och ibland i somrarna på Pellinge. Boken sätter ihop barnets lugna vardag, med sagolika inslag, och fyllda med djärv fantasi.'
    },
    {
        image: './data/c1.jpg',
        title: 'Kapitel 1: Guldkalven',
        text: 'I kapitlet Guldkalven minns Tove en lek hon lekte med sin kusin Karin när de var små. De låtsades vara "Israels barn," och deras farfar, som var präst, blev som en gud i deras fantasi. Kapitlet beskriver en magisk och lekfull miljö där barnen offrar saker och väntar på tecken från Gud. Men Tove blir avundsjuk när Karin säger att hon fått ett särskilt tecken från Gud – en gul fågel som kom till hennes rum. För att trotsa det bestämmer sig Tove för att skapa sin egen "gyllene kalv" i en mörk, övervuxen berså. Kalven blir både ett uttryck för kreativitet och uppror. Men i slutet händer något lustigt när hennes farmor misstar kalven för ett lamm, vilket gör Tove både besviken och fundersam över sin skapelse.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/c1-1.jpg',
        title: 'Kapitel 2: Mörkret',
        text: 'I Mörkret ändras tonen till något mer mystiskt och läskigt. Tove beskriver en plats bakom den ryska kyrkan där det finns en mörk röd byggnad utan fönster och en brant med trasigt glas och gammalt skräp. För henne och hennes vän Poyu är platsen skrämmande och spännande på samma gång. Hon berättar historier om "Förruttnelsen," ett farligt väsen som bor bakom en låst dörr i berget. Poyu, som är rädd men nyfiken, följer ändå efter henne. När skymningen kommer förvandlas området till något ännu mer hotfullt. Tove beskriver en stor, ansiktslös varelse som kryper fram över hamnen. Kapitlet fångar hur barnets fantasi kan förvandla vanliga platser till något både läskigt och fascinerande. Stämningen är mystisk, men samtidigt visar det Toves förmåga att göra det vardagliga magiskt.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/c11.jpg',
        title: 'Kapitel 3: Stenen',
        text: 'Kapitlet handlar om ett barn som hittar en speciell sten med silvriga flingor mellan en kolhög och några godsvagnar. Barnet ser det som ett mirakel eftersom ingen annan verkar ha märkt stenen tidigare. De bestämmer sig för att ta hem den och börjar en svår resa. Stenen måste rullas, men den rör sig bara ett halvt varv åt gången, vilket gör framstegen väldigt långsamma. När barnet rullar stenen genom gatorna, knackar förbipasserande på sina paraplyer och gör kommentarer, men barnet fortsätter envist, helt fokuserad på sin uppgift. Till slut når de sitt mål, men det skapar en reflektion kring ansträngning och belöning.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: 'data/500.webp',
        title: 'Kapitel 4: Hippa',
        text: 'Detta kapitel ger en intim inblick i familjesammankomster och livet hemma. Festerna kretsar kring musik, särskilt balalajkan och gitarren som pappan spelar. Musiken börjar mjukt och sorgset, ofta som viskningar, men kan bli vild och kaotisk. Berättaren beskriver hur rök fyller rummet, och ett grått tobaksdis bildas vid taket, vilket får allt att kännas overkligt. Festerna har en bittersöt stämning – de kan pågå i flera nätter med musik och firande, men de beskrivs också som utmattande. Pappan sitter ofta rakt upp med sitt huvud som "ett blekt ljus i röken." Kapitlet betonar hur viktiga dessa fester är, även om de är krävande.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/Tove-Jansson-Didrichsen-Museum-Lanscape-picnic.jpg',
        title: 'Kapitel 5: Anna',
        text: 'I kapitlet Anna beskrivs Anna som vacker, med hår som "grov gräs" och rosa kinder. Hennes armar dyker ner i diskvattnet "som pelare." Men relationen mellan Anna och berättaren är spänd och ibland svår. En konflikt kring konst och publicering uppstår, och deras interaktioner präglas av både kreativitet och spänning.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/c12.jpg',
        title: 'Kapitel 6: Isberget',
        text: 'I kapitlet Isberget berättar Tove om en sommar där hon upptäcker ett glittrande isberg som hon ser som sitt eget. Det finns en mystik kring isberget, och Tove försöker skapa en koppling till det. Till slut skickar hon iväg isberget, vilket skapar en känsla av både stolthet och förlust.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/images.jpeg',
        title: 'Kapitel 7: Havsvikarna',
        text: 'Berättelsen börjar tidigt på morgonen och beskriver flera mystiska vikar där ingen bor. Kapitlet fångar en känsla av ensamhet och magi genom dess skildring av landskapet och interaktionerna mellan karaktärerna.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/c7.jpg',
        title: 'Kapitel 8: Sjörätt',
        text: 'Kapitel Sjörätt beskriver en stormig sjöresa och familjens gemensamma kamp för att hantera stormen. Det är ett kapitel fyllt av dramatik och samarbete, som belyser familjens dynamik under utmanande förhållanden.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/668c13c3-c32b-4d97-a2fa-ab94f9acd645-338.jpeg',
        title: 'Kapitel 9: Albert',
        text: 'Albert är en vän till berättaren, och kapitlet handlar om deras gemensamma äventyr, inklusive att bygga en flotte och interagera med djurlivet. Kapitlet reflekterar över vänskapens komplexitet och naturens skönhet.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/c10.jpg',
        title: 'Kapitel 10: Högvatten',
        text: 'Kapitel Högvatten beskriver en sommar som präglas av rutiner och kreativitet. När högvatten hotar området tvingas familjen samarbeta för att rädda sina ägodelar, vilket skapar en känsla av gemenskap och optimism.',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: 'data/mountain-tove-jansson-1966-eb0f0cc6.jpg',
        title: 'Kapitel 11: Jeremiah',
        text: 'Jeremiah är en geolog som bor i lotsarnas bod. Han pratar inte svenska eller finska, men kommunicerar med gester och blickar. Han jobbar hårt med sin stenknackare och åker ibland ut till öarna för att arbeta. Berättaren spenderar mycket tid med honom och hjälper till genom att bära hans verktyg eller hålla vakt vid båten. Ibland får berättaren också stanna på stranden medan Jeremiah fortsätter sitt arbete på klipporna.' +
            'Jeremiah verkar lite klumpig och ovan med vissa saker. Han kan till exempel inte knyta en rosett ordentligt, och berättaren tycker det är lite pinsamt ibland. Trots detta har de en speciell vänskap och hittar på lekar tillsammans. En av deras lekar går ut på att berättaren gömmer sig, och Jeremiah måste leta efter hen. Detta skapar både spänning och skratt mellan dem.\n' +

            'De tillbringar många dagar tillsammans vid havet och på klipporna. Jeremiah knackar sten medan berättaren väntar eller följer honom på avstånd. Vädret är ibland kallt och blåsigt, men de fortsätter ändå. Berättaren märker hur Jeremiah är tålmodig och fokuserad på sitt arbete, även om han inte alltid verkar förstå allt som händer runtomkring.\n' +
            '\n' +
            'En dag gömmer sig berättaren längre än vanligt, och Jeremiah blir förvirrad när han inte hittar hen. När han till slut hittar presenten som berättaren har lämnat till honom, blir han glad men också förvånad. De fortsätter att leka, men berättaren börjar märka att Jeremiah blir mer och mer beroende av hens hjälp.\n' +

            'Trots deras lekfulla dagar finns det också stunder av osäkerhet och pinsamhet. Berättaren känner sig ibland liten och oviktig jämfört med Jeremiah, men samtidigt är vänskapen mellan dem stark. Berättaren reflekterar över deras tid tillsammans och hur deras relation utvecklas genom deras gemensamma dagar vid havet och klipporna.\n' +
            '\n' +
            'Sammanfattningsvis handlar kapitlet om vänskapen mellan berättaren och Jeremiah, deras lekfulla äventyr och de utmaningar som uppstår när två personer från olika världar försöker förstå varandra.\n',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: 'data/paradise-tj.jpg',
        title: 'Kapitel 12: Teater',
        text: 'Det här kapitlet handlar om Fanny, som har ett speciellt ansvar att elda bastun varje lördag. Hon tar uppgiften mycket seriöst och är den enda som får göra det. En gång förstördes bastun av regn och förfallet gjorde att den inte längre gick att använda. När det blev lördag igen, fyllde Fanny bastun med löv och fortsatte med sitt arbete som om ingenting hade hänt.\n' +
            '\n' +
            'Under tiden lekte berättaren teater och förberedde sig för en föreställning. Katten var med och betedde sig som en viktig åskådare. Det regnade mycket och berättaren klädde ut sig som prinsessan Florinna, medan katten fick en roll i berättelsen. Fanny hjälpte till med dekorationerna och leken blev mer dramatisk med mycket fantasi och humor.\n' +
            '\n' +
            'I föreställningen blev Fanny en drottning och stampade runt, medan berättaren agerade prinsessan Florinna som försökte fly från drottningens elaka planer. Regnet och mörkret gjorde scenen ännu mer spännande. Pappa kom hem och fann dem mitt i deras teaterlek, vilket avslutade deras lilla äventyr för dagen.\n' +
            'Kapitlet visar Fannys självständighet och fantasin hos både henne och berättaren, samtidigt som naturen och regnet skapar en speciell stämning.\n',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/c3.jpg',
        title: 'Kapitel 13: Husdjur och Fruar',
        text: 'Det här kapitlet handlar om pappans kärlek till husdjur och hans relation till både djur och människor. Pappan har många djur, inklusive apan Poppolino, som han tycker om mest av alla. Poppolino följer honom överallt, även om han ibland biter eller ställer till problem. Trots detta är han älskad av alla, även när han gör saker som att störa ordningen eller skrika högt.\n' +
            '\n' +
            'Kapitel beskriver också flera andra djur som pappan har haft, som kaniner, fåglar och en kråka. Kråkan var mycket speciell och hade ett nära band med pappan, men den dog och fick en egen begravning. Det finns också en del humor när pappan försöker hantera sina olika djur samtidigt, vilket ofta leder till kaos.\n' +
            '\n' +
            'Pappan tycker också om att prata om "fruarna," kvinnor som står modell för honom. Men han verkar ha en komplicerad relation till dem och tycker att det är svårt att arbeta med dem jämfört med djuren. Mamma är däremot oberörd av fruarna och fokuserar på sitt eget liv.\n' +
            '\n' +
            'Slutligen nämns hur familjen ibland blir trött på pappans alla djur och hans besatthet av att ta hand om dem. Men pappan verkar ändå vara nöjd med sitt liv, fullt av djur och konstiga små äventyr.\n',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/family1.jpg',
        title: 'Kapitel 14: Tanten som hade en idé',
        text: 'Kapitlet handlar om en tant som blir engagerad i ett projekt med att skapa gipstavlor och glansbilder. Hon är mycket noggrann och passionerad över sitt arbete, även om hennes metoder ibland verkar förvirrande för de andra. Hennes fokus ligger på att skapa något vackert och unikt, även om resultatet inte alltid är uppskattat av omgivningen.\n' +
            '\n' +
            'Tanten spenderar mycket tid i pappans ateljé, där hon använder hans material för att skapa sina konstverk. Pappan verkar ibland lite irriterad över hennes närvaro, särskilt när hon stör hans arbete. Trots det hjälper han henne genom att visa hur man ska använda gipset och ordnar till hennes projekt när det går fel.\n' +
            '\n' +
            'Under processen sker flera humoristiska och rörande händelser. Tanten är väldigt ivrig men också osäker, vilket leder till små missöden med gipset och tavlorna. Barnen i familjen ser hennes arbete som både fascinerande och underhållande, även om de ibland har svårt att förstå varför hon är så dedikerad.\n' +
            '\n' +
            'I slutändan blir tanten nöjd med sitt arbete och packar ihop sina tavlor för att ta med dem hem. Trots att hon möter hinder och får hantera kritik, visar hon en stark vilja och stolthet över sitt projekt. Hennes konstverk blir ett minne som både förundrar och förvirrar familjen.\n',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/family2.jpeg',
        title: 'Kapitel 15: Tyllkjolen',
        text: 'I detta kapitel möter vi Tove som utforskar sin mammas ateljé och garderob, där den svarta tyllkjolen från Svartvarumagasinet fångar hennes uppmärksamhet. Kjolen, som aldrig har använts, blir till ett mystiskt objekt för Toves fantasi och äventyr. Hon dras in i mörka korridorer och regniga miljöer där det hela känns som en drömvärld.\n' +
            '\n' +
            'Tove tar med sig kjolen och gömmer sig under den, nästan som att skapa en egen kokong av trygghet. Ateljén, som annars är en plats av kreativitet och rörelse, förvandlas till en plats av spänning och fara när mörka gestalter och djur verkar fylla rummet. I detta kaotiska äventyr brottas Tove med känslor av både rädsla och nyfikenhet.\n' +
            '\n' +
            'Till slut lyckas Tove fly undan de märkliga händelserna och återlämnar tyllkjolen till garderoben. Trots alla utmaningar känner hon en viss stolthet över att ha återställt ordningen. Kapitlet avslutas med en reflektion över Toves handlingar och hur hon har navigerat genom både faror och möjligheter, precis som varje god medborgare borde göra.\n',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/family3.jpg',
        title: 'Kapitel 16: Snön',
        text: 'I kapitlet Snön skildras en värld som är täckt av ett tungt och grått snötäcke. Det främmande huset, där Tove och hennes mamma befinner sig, är kallt och tomt, vilket skapar en känsla av ensamhet och osäkerhet. Snön faller konstant och formar landskapet till något som känns både vackert och hotfullt.\n' +
            '\n' +
            'Mamman, fylld av energi och nyfikenhet, verkar njuta av situationen. Hon går runt i huset, ritar och pratar med Tove om detaljer i omgivningen. För Tove känns huset och dess tomma rum dock främmande och nästan obehagliga, med mörka korridorer och en känsla av att något är fel.\n' +
            '\n' +
            'Snön är inte bara en fysisk närvaro utan också en symbol för stillhet och monotoni. Dess ständiga fallande förstärker känslan av att tiden står stilla och att världen har förändrats. Fönstren i huset fungerar som en gräns mellan den inre värmen och den kalla, ogästvänliga världen utanför.\n' +
            '\n' +
            'En speciell episod är när mamman försöker övertyga Tove om att allt är i sin ordning, medan Tove kämpar med sina egna tankar och känslor kring den märkliga situationen. Tillsammans försöker de skapa någon form av ordning i det kaotiska landskapet.\n' +
            '\n' +
            'I slutet av kapitlet börjar de lämna huset och reflektera över sina upplevelser. Mamman, som fortsätter att rita och skapa, verkar hitta tröst i det konstnärliga, medan Tove brottas med frågor om snöns och husets betydelse.\n',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/family4.jpg',
        title: 'Kapitel 17: Röda Hund',
        text: 'I kapitlet "Röda hund" kämpar berättaren med en sjukdom som kallas "röda hund." Berättaren tillbringar tiden med att vila på sin soffa och försöker virka en grytlapp, men tankarna vandrar iväg. Omgivningen blir en plats där små gipsskulpturer och kreativa idéer blandas med vardagens stillhet.\n' +
            '\n' +
            'Poppolino, apan som är en central figur i många av dessa berättelser, gör också sin närvaro tydlig i kapitlet. Han beter sig på sitt typiska busiga sätt, men det skapar både humor och små bekymmer för pappan. Poppolino lyckas gång på gång ställa till det, som när han skakar buren eller hoppar omkring i huset. Trots detta verkar han vara en del av den konstiga men hjärtevärmande dynamiken i familjen.\n' +
            '\n' +
            'Pappan är upptagen med sitt arbete i ateljén, men han visar också en viss omtanke för både berättaren och Poppolino. I en särskild episod försöker han lugna apan och hjälpa till att skapa ordning i det lilla kaos som alltid tycks följa familjen.\n' +
            '\n' +
            'I slutet av kapitlet reflekterar berättaren över vardagen, sjukdomen och hur folk ibland finner glädje i små handlingar. Det är en melankolisk men också humoristisk och varm berättelse om hur familjen hanterar sina små och stora utmaningar.\n',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/c7.jpg',
        title: 'Kapitel 18: Att Flyga',
        text: 'Kapitlet Att flyga är fyllt av drömmar och frihetens metaforik. Tove börjar med en dröm om människor som springer och möbler som försvinner upp i taket, en surrealistisk scen som speglar en känsla av upplösning och möjligheter. Det röda ljuset i ateljén och den konstiga stämningen i huset förstärker känslan av att något ovanligt är på väg att ske.\n' +
            '\n' +
            'Tove rör sig genom huset, där Poppolino och andra karaktärer bidrar till både mystik och kaos. Dörrar stängs, mörker och ljus växlar, och tankar om att flyga blir alltmer närvarande. Drömmen om att flyga symboliserar frihet, men också en önskan om att fly från det som känns begränsande eller svårt.\n' +
            '\n' +
            'Under berättelsens gång utforskar Tove tanken på vad det innebär att verkligen lyfta och lämna marken. Poppolino och kråkan följer med i dessa fantasier, och det finns en känsla av att allt är möjligt, oavsett hur absurt det kan verka.\n' +
            '\n' +
            'Kapitlet kulminerar i en vision där inte bara Tove utan också människor, djur och föremål börjar flyga. Det är en kollektiv handling av frihet och förundran, där till och med presidenten deltar. Världen fylls av en känsla av lätthet och samhörighet när Helsingfors förvandlas till en plats där alla svävar över marken.\n' +
            '\n' +
            'Slutligen lämnar Tove sitt rum, öppnar fönstret och tar ett språng tillsammans med sina följeslagare, symboliserande en övergång från dröm till verklighet. Kapitlet utforskar teman som frihet, gemenskap och kraften i att våga tro på det omöjliga.\n',
        quote: 'Ett citat från kapitlet...'
    },
    {
        image: './data/family5.jpg',
        title: 'Kapitel 19: Julen',
        text: 'Kapitlet fokuserar på julens förberedelser och den efterföljande stämningen i hemmet, en tid av både magi och reflektion. Det börjar med detaljerade beskrivningar av hur ljusen tänds och processer som symboliserar firandets höjdpunkt. Berättaren beskriver hur granen och dekorationerna skapar en känsla av helighet och kärlek, särskilt när Maria och Josef placeras vid krubban. Julen framställs som en tid då familjen förenas och världen känns mer förlåtande och fridfull.\n' +
            '\n' +
            'I ett ögonblick av triumf förkunnar berättaren att julen tillhörde dem, en tid fylld av känslor av säkerhet och gemenskap. Det finns också inslag av melankoli och eftertanke, särskilt när glasbollen går sönder på cementgolvet, en symbol för något vackert som förlorats men samtidigt öppnar upp för nya reflektioner.\n' +
            '\n' +
            'Efter att ljusen har slocknat och musiken tonar bort, ger texten en känsla av avslutning och lugn. Pappan står tyst i ateljén och försöker återskapa melodier, men tystnaden framstår som mer uttrycksfull än orden. Mamman packar undan julens föremål, en process som markerar en övergång från festligheter till vardag.\n' +
            '\n' +
            'Slutet på kapitlet förmedlar en känsla av trygghet och förnyelse. Med föremålen från julen bortpackade, står gipstavlan kvar som en påminnelse om det eviga i familjens band och det som håller världen samman – kärlek och gemenskap.\n',
        quote: 'Ett citat från kapitlet...'
    }

];

let currentSlide = 0;

// Create timeline points
function createTimelinePoints() {
    const container = document.querySelector('.timeline-points');

    timelinePoints.forEach(point => {
        const element = document.createElement('div');
        element.className = 'timeline-point';
        element.style.left = `${point.x}%`;
        element.style.top = `${point.y}%`;
        element.setAttribute('data-number', `${point.id}`); // Add a number to each point
        element.addEventListener('click', () => showPopup(point));
        container.appendChild(element);
    });
}

// Show popup for timeline points
function showPopup(data) {
    const popup = document.createElement('div');
    popup.className = 'timeline-popup';

    popup.innerHTML = `
        <div class="popup-content">
            <button class="close-popup">&times;</button>
            <h2>${data.year} - ${data.title}</h2>
            <div class="popup-text">
                <p>${data.content}</p>
            </div>
        </div>
    `;

    document.body.appendChild(popup);

    requestAnimationFrame(() => {
        popup.classList.add('visible');
    });

    const closePopup = () => {
        popup.classList.remove('visible');
        setTimeout(() => popup.remove(), 300);
    };

    popup.querySelector('.close-popup').addEventListener('click', closePopup);
    popup.addEventListener('click', (e) => {
        if (e.target === popup) closePopup();
    });
}

function initializeSlideshow() {
    const slideContainer = document.querySelector('.slide');

    // Reference navigation buttons
    const prevButton = slideContainer.querySelector('.prev-slide');
    const nextButton = slideContainer.querySelector('.next-slide');

    // Add event listeners for buttons
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            console.log('Navigated to slide:', currentSlide);
            updateSlideContent();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentSlide < bookSlides.length - 1) {
            currentSlide++;
            console.log('Navigated to slide:', currentSlide);
            updateSlideContent();
        }
    });

    // Initialize the first slide content
    updateSlideContent();
}


function updateSlideContent() {
    const slideContainer = document.querySelector('.slide');
    const imageContainer = slideContainer.querySelector('.slide-image-container');
    const textContainer = slideContainer.querySelector('.slide-content');
    const quoteContainer = slideContainer.querySelector('.slide-quote');

    const currentContent = bookSlides[currentSlide];

    // Update slide content
    imageContainer.innerHTML = `<img src="${currentContent.image}" alt="${currentContent.title}" class="slide-image">`;
    textContainer.querySelector('h3').textContent = currentContent.title;
    textContainer.querySelector('p').textContent = currentContent.text;

    // Handle quote visibility
    if (currentContent.quote && currentContent.quote.trim() !== '') {
        quoteContainer.style.display = 'block'; // Show the quote box
        quoteContainer.querySelector('blockquote').textContent = currentContent.quote;
    } else {
        quoteContainer.style.display = 'none'; // Hide the quote box
    }

    // Update button states
    const prevButton = slideContainer.querySelector('.prev-slide');
    const nextButton = slideContainer.querySelector('.next-slide');

    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === bookSlides.length - 1;
}




// Smooth scroll with offset for fixed navbar
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('nav').offsetHeight;
    const targetPosition = section.offsetTop - navHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createTimelinePoints();
    initializeSlideshow();

    // Navigation buttons
    document.querySelectorAll('.nav-button').forEach((button, index) => {
        const sectionIds = ['overview', 'timeline', 'book'];
        button.addEventListener('click', () => scrollToSection(sectionIds[index]));
    });
});
