const wordList =  [
    {
        word: "gitar",
        hint: "Et musikkinstrument med strenger."
    },
    {
        word: "oksygen",
        hint: "Ein fargelaus, luktfri gass som er viktig for å leva."
    },
    {
        word: "fjell",
        hint: "Eit høytliggande landområde, gjerne over tregrensen."
    },
    {
        word: "maling",
        hint: "Ein kunstform som bruker farger på ein overflate for å skape bilder eller uttrykk."
    },
    {
        word: "astronomi",
        hint: "Det vitenskapelige studiet av himmellegemer og fenomener utanfor jordens atmosfære."
    },
    {
        word: "fotball",
        hint: "Ein populær sport spelt med ein rund ball."
    },
    {
        word: "sjokolade",
        hint: "Eit søt godteri laga av kakaobønner."
    },
    {
        word: "sommerfugl",
        hint: "Eit insekt med fargerike vinger og ein slank kropp."
    },
    {
        word: "historie",
        hint: "Studiet av tidligare hendelser og menneskeleg sivilisasjon."
    },
    {
        word: "pizza",
        hint: "Ein velsmakande rett som består av ein rund, flat botn med pålegg."
    },
    {
        word: "jazz",
        hint: "Ein musikksjanger prega av improvisasjon."
    },
    {
        word: "kamera",
        hint: "Ein einhet som brukes til å ta og ta opp bilder eller videoer."
    },
    {
        word: "diamant",
        hint: "Ein edelstein kjent for sin glans og hardheit."
    },
    {
        word: "eventyr",
        hint: "Ein spennande eller vågal opplevelse."
    },
    {
        word: "vitenskap",
        hint: "Den systematiske studien av strukturen og oppførselen til den fysiske og naturlege verden."
    },
    {
        word: "sykkel",
        hint: "Eit menneskedrevet kjøretøy med to hjul."
    },
    {
        word: "solnedgang",
        hint: "Tiden på døgnet då solo går ned bak under horisonten."
    },
    {
        word: "kaffi ",
        hint: "Ein populær koffeinholdig drikk."
    },
    {
        word: "danse",
        hint: "Ein rytmisk bevegelse av kroppen ofte utført til musikk."
    },
    {
        word: "galakse",
        hint: "Eit enormt system av stjerner, gass og støv holdt saman av tyngdekraften."
    },
    {
        word: "orkester",
        hint: "Eit stort ensemble av musikarar som speler forskjellege instrument."
    },
    {
        word: "vulkan",
        hint: "Eit fjell eller ein høgde med ein ventil gjennom kor lava, steinfragmentar, varm damp og gass skytes ut."
    },
    {
        word: "roman",
        hint: "Eit langt skjønnlitterært verk, typisk med eit komplekst plot og karakterer."
    },
    {
        word: "skulptur",
        hint: "Ein tredimensjonal kunstform skapt ved å forme eller kombinere materialar."
    },
    {
        word: "symfoni",
        hint: "Ein lang musikalsk komposisjon for eit fullt orkester, typisk i fleire bevegelsar. "
    },
    {
        word: "arkitektur",
        hint: "Kunsten og vitenskapen om å designe og konstruere bygningar."
    },
    {
        word: "ballet",
        hint: "Ein klassisk danseform prega av presise og grasiøse bevegelsar."
    },
    {
        word: "astronaut",
        hint: "Ein person som er opplært til å reise og jobbe i verdensrommet ."
    },
    {
        word: "foss",
        hint: "En kaskade av vant som faller frå ein høgde."
    },
    {
        word: "teknologi",
        hint: "Anvendelse av vitenskapeleg kunnskap til praktiske formål."
    },
    {
        word: "regnboge",
        hint: "Eit meteorologisk fenomen som er forårsaket av refleksjon, brytningar og spredning av lys."
    },
    {
        word: "universet",
        hint: "All eksisterende materie, rom og tid som heilhet."
    },
    {
        word: "piano",
        hint: "Eit musikkinstrument som speles ved å trykke på taster som får hammerar til å slå på strenger."
    },
    {
        word: "ferie",
        hint: "Ein periode dedikert til nytelse, kvile eller avslapning"
    },
    {
        word: "regnskog",
        hint: "Ein tett skog prega av mykje nedbør og biologisk mangfold."
    },
    {
        word: "teater",
        hint: "Ein bygning eller eit uteområde der skuespel, filmar eller andre forestillinger settes opp"
    },
    {
        word: "telefon",
        hint: " Ein einheit som brukes til å overføre lyd over lange avstander."
    },
    {
        word: "språk",
        hint: "Evnen til å produsere og forstå ytringer som formidler informasjon fra eitt individ til eit annet."
    },
    {
        word: "ørken",
        hint: "Eit landskap eller ein region som får veldig lite nedbør."
    },
    {
        word: "solsikke",
        hint: "Ein høg plante med eit stort gult hovud."
    },
    {
        word: "fantasi",
        hint: "Det å forestille seg noke som ikkje er sant eller ekta."
    },
    {
        word: "teleskop",
        hint: "Eit optisk instrument som brukes til å sjå fjerne objekter i rommet."
    },
    {
        word: "bris",
        hint: "Ein mild vind."
    },
    {
        word: "oase",
        hint: "Ein fruktbar stad i ein ørken kor det finnes vatn."
    },
    {
        word: "fotografering",
        hint: "Kunsten, prosessen eller praksisen med å lage bilder ved å registrere lys eller annen elektromagnetisk stråling."
    },
    {
        word: "safari",
        hint: "Ein ekspedisjon eller reise, vanlegvis for å observere dyrelivet i deiras naturlege habitat."
    },
    {
        word: "planet",
        hint: "Eit himmellegeme som går i bane rundt ei stjerne og ikkje produserer eiget lys."
    },
    {
        word: "elv",
        hint: "Ein stor naturleg vannstrøm som renner i ein kanal til havet, ein innsjø eller ein annen lignande bekk."
    },
    {
        word: "tropisk",
        hint: "Eit ikkje-tørt klima som er varmt"
    },
    {
        word: "mystisk",
        hint: "Vanskeleg eller umulig å forstå, forklare eller identifisera."
    },
    {
        word: "gåte",
        hint: "Noke som er mystisk, forvirrande eller vanskeleg å forstå."
    },
    {
        word: "paradoks",
        hint: "Eit utsagn eller ein situasjon som motseier seg sjølv eller trosser intuisjon."
    },
    {
        word: "puslespel",
        hint: "Eit spel, leka eller problem utvikla for å testa oppfinnsomheit eller kunnskap."
    },
    {
        word: "Kviskre",
        hint: "Å snakka veldig lavt eller stille, ofta på ein hemmelegheitsfull måte."
    },
    {
        word: "skygge",
        hint: "Eit mørkt område eller form produsert av ein gjenstand som blokkerer lyset."
    },
    {
        word: "hemmeleg",
        hint: "Noke holdt skjult eller ukjent for andre."
    },
    {
        word: "nysgjerrigheit",
        hint: "Eit sterkt ønske om å veta eller lære noke."
    },
    {
        word: "uforutsigbar",
        hint: "Ikkje mulig å forutsjå eller kjent på forhånd; usikker."
    },
    {
        word: "Tilsløre",
        hint: "Forvirra nokon eller å gjøre noke uklart eller vanskeleg å forstå."
    },
    {
        word: "avdekke",
        hint: "Å gjøre kjent eller avsløre noke tidligare hemmeleg eller ukjent."
    },
    {
        word: "illusjon",
        hint: "Ein falsk oppfatning eller tru; eit villedande utsjånad eller inntrykk."
    },
    {
        word: "måneskinn",
        hint: "Lyset fra månen."
    },
    {
        word: "levende",
        hint: "Full av energi, lysstyrke og liv."
    },
    {
        word: "nostalgi",
        hint: "Ein sentimental lengsel eller vemodig hengivenhet for fortida."
    },
    {
        word: "strålande",
        hint: "Eksepsjonelt smart, talentfull eller imponerande."
    },
];