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
        word: "symphony",
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
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
];