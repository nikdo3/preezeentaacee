/**
 * ============================================================================
 * EDITOVATELNÉ TEXTY PREZENTACE (JET-Česko / JET-PID)
 * ============================================================================
 * 
 * Tento soubor slouží k jednoduché úpravě veškerých textů, nadpisů a poznámek
 * přednášejícího v celé prezentaci bez nutnosti zasahovat do kódu aplikace.
 * 
 * NÁVOD K POUŽITÍ:
 * 1. Každý snímek je reprezentován svým číslem (1 až 50).
 * 2. Můžete upravit:
 *    - `title`: Nadpis snímku (zobrazuje se v záhlaví a navigaci).
 *    - `paragraphs`: Pole textových odstavců / bodů na snímku.
 *    - `notes`: Poznámky přednášejícího (zobrazují se v okně přednášejícího).
 *    - `mapImage`: Cesta k obrázku mapy (použito na snímku 25).
 * 3. Pro vložení herní mapy na Snímek 25 stačí nastavit:
 *    `mapImage: "./assets/slides/moje-mapa.png"` (nebo libovolnou URL / cestu).
 * ============================================================================
 */

export const EDITABLE_SLIDES = {
  // Snímek 1: JET-PID Prezentace
  1: {
    title: "JET-PID Prezentace",
    notes: "",
    paragraphs: [
          "JET-PID Prezentace"
    ]
  },

  // Snímek 2: Základní instrukce (hrajeme variantu M)
  2: {
    title: "Základní instrukce (hrajeme variantu M)",
    notes: "",
    paragraphs: [
          "Základní instrukce (hrajeme variantu M)",
          "Jak se hra hraje?",
          "1.  Jeden tým použije PID a dostane se na svůj hiding spot",
          "2.  Ostatní hráči spolupracují a snaží se je najít, za pomocí otázek ohledně jejich lokace, které jsou vybírány z šesti kategorií",
          "3. Po každé zodpovězené otázce si hideři tahají karty ze svého balíčku karet (hider deck)",
          "4. Poté, co je tým nalezen se schovává další tým",
          "5. Na konci vyhrává tým s nejdelším časem, kdy byli schováni (časy se nesčítají, počítá se nejdelší run)",
          "6. Týmy se mohou rozdělit pouze, pokud to danné skupině nepřinese taktickou výhodu (tzn pokud třeba plní úkol musí být skupina pohromadě)"
    ]
  },

  // Snímek 3: Začátek hry
  3: {
    title: "Začátek hry",
    notes: "",
    paragraphs: [
          "Začátek hry",
          "1"
    ]
  },

  // Snímek 4: Vždyť to nemusíme řešit schováš se a jedem, ne?
  4: {
    title: "Vždyť to nemusíme řešit schováš se a jedem, ne?",
    notes: "",
    paragraphs: [
          "Vždyť to nemusíme řešit schováš se a jedem, ne?"
    ]
  },

  // Snímek 5: Začátek
  5: {
    title: "Začátek",
    notes: "",
    paragraphs: [
          "Začátek",
          "Tým vždy při začátku svého schovávacího kola musí:",
          "Vypnout tracker (je-li u někoho zapnutý)",
          "Převzít balíček karet, který před ostatními (alespoň 7x ho zamíchá )(chcete-li matematicky vysvětlit proč, míra rád vysvětlí 😏)",
          "Předat Investigační knihu těm co budou hledat",
          "(Pokud nemají) převzít knihu s pravidly"
    ]
  },

  // Snímek 6: Hideři
  6: {
    title: "Hideři",
    notes: "",
    paragraphs: [
          "Hideři",
          "čas nastartovat nepravděpodobnostní pohon"
    ]
  },

  // Snímek 7: Kde se teda schovat?
  7: {
    title: "Kde se teda schovat?",
    notes: "Nezapomenout říct, že se může stát edge case, kdy člověk přeběhne někde, kde se to na idosu neukazuje",
    paragraphs: [
          "Kde se teda schovat?",
          "Jakákoliv zastávka PID, která",
          "- Je obsluhována po celý herní den v intervalech max 1x za 30 min",
          "- Je na oblasti PID P, 0, B,",
          "- Je pro něj dosažitelná do 1 hodiny pomocí kombinace ČD a chůze/běhu*",
          "Po hodině se musíte zastavit na místě kde jste!!!"
    ]
  },

  // Snímek 8: Není spuštěn END-GAME
  8: {
    title: "Není spuštěn END-GAME",
    notes: "",
    paragraphs: [
          "Není spuštěn END-GAME",
          "Hiding zóna je určena půl kilometrovou kružnicí okolo stanice Hiderů. Mohou se v ní volně pohybovat a hledat místo pro end game. Nicméně během toho MUSÍ být schopni odpovídat na otázky seekrů",
          "Co je Hiding zóna?",
          "Nadešel END-GAME",
          "END-GAME nastává ve chvíli, kdy seekři dorazí na stanici hidera. V tento moment musí zůstat na místě kde aktuálně jsou. Pokud je v tento moment položena otázka, na kterou fyzicky nejde odpovědět odesílají „nelze odpovědět“"
    ]
  },

  // Snímek 9: Typy otázek?
  9: {
    title: "Typy otázek?",
    notes: "",
    paragraphs: [
          "Typy otázek?"
    ]
  },

  // Snímek 10: Otázky
  10: {
    title: "Otázky",
    notes: "Strana 7 vysvětli co dělat když bude mít moc karet",
    paragraphs: [
          "Otázky",
          "Hideři mají na zodpovězení otázek 5 min s výjimkou foto otázek, na ty mají 10 min. Pokud nestihnou čas jejich pozastaven do doby než odpoví a netahají si za otázku karty.",
          "Po zodpovězení otázky si tahají karty (konkrétní počty později).",
          "Pokud se seekři na stejnou otázku ptají podruhé, je tahání karet znásobeno (2x, 3x, …). ALE taháno postupně (vytáhnu 3, vyberu si jednu, vytáhnu další 3 vyberu si druhou) NE JINAK!",
          "Maximální počet karet v ruce je 6 (pokud není rozšířena)*"
    ]
  },

  // Snímek 11: Typy otázek a karty za ně
  11: {
    title: "Typy otázek a karty za ně",
    notes: "",
    paragraphs: [
          "Typy otázek a karty za ně",
          "Matching",
          "Je vaše nejbližší X stejné jako, naše X. (cesta, zoo, železnice, kraj, ViaCzechia …)",
          "Taháte 3 berete 1 kartu",
          "Mesuring",
          "Vzhledem k nám jste blíž nebo dál od X. (okraj kraje, Zoo, Park, …)",
          "Taháte 3 berete 1 kartu",
          "Teploměr",
          "Právě jsme urazili X km. Jsme k vám blíž, nebo dál?",
          "Taháte 2 berete 1 kartu.",
          "Radar",
          "Nacházíš se v X km vzdálenosti ode nás?",
          "Taháte 2 berete 1 kartu",
          "Chapadla(tentacles)",
          "Ze všech *místo* ve vzdálenosti X Km od nás kterému jste nejblíž?",
          "Taháte 4 berete 2 karty.",
          "Fotky",
          "Pošli nám fotku *něco*.",
          "Berete si 1 kartu."
    ]
  },

  // Snímek 12: END-GAME
  12: {
    title: "END-GAME",
    notes: "",
    paragraphs: [
          "END-GAME",
          "V pravidlech je často zmíněna hláška Publicly accessible hiding spot. Znamená to místo, které je veřejně přístupné po celou herní dobu pro všechny hráče. Tohle místo musí být do 3 m od cesty vyznačené v mapě. Místo může být i v oblastech, které nejsou „veřejné“, ale nechceme aby vás z něj někdo v průběhu vykopnul… (restaurace tedy spíš ne, můžete tam být až několik hodin)",
          "Pokud se spustí END-GAME  a nenacházíte se na validním místě, musíte se přesunout na nejbližší takové místo. (vyhodnoceno za pomoci mapy)",
          "Přijde-li nějaká otázka která není možná odpovědět posíláte již zmíněné „nelze odpovědět“ ale i tak i za otázku berete příslušný počet karet!",
          "Dobře zvolený spot může přinést hodinu i víc do vašeho času, vybírejte pořádně!"
    ]
  },

  // Snímek 13: Nalezení
  13: {
    title: "Nalezení",
    notes: "Nezapomenout říct, že se může stát edge case, kdy člověk přeběhne někde, kde se to na idosu neukazuje",
    paragraphs: [
          "Nalezení",
          "Hideři se počítají jako nalezení pouze když je vidíte a zároveň jste maximálně 2 m od nich. (počítá se i horizontálně🗼)",
          "Po nalezení a předání všech propriet startuje čas na schování pro následující tým, který startuje z místa, kde byl nalezen tým předchozí.",
          "(tým má v tento moment maximálně 10 min na předání všech propriet  nemůže udělat delší přestávku na research)"
    ]
  },

  // Snímek 14: Seekři
  14: {
    title: "Seekři",
    notes: "",
    paragraphs: [
          "Seekři",
          "Srandokupa ve čtyřech 7:P"
    ]
  },

  // Snímek 15: Je „zakreslování random věcí do mapy“ a „strategizování kam jet“ fakt tak easy?
  15: {
    title: "Je „zakreslování random věcí do mapy“ a „strategizování kam jet“ fakt tak easy?",
    notes: "",
    paragraphs: [
          "Je „zakreslování random věcí do mapy“ a „strategizování kam jet“ fakt tak easy?"
    ]
  },

  // Snímek 16: Seekři – základní info
  16: {
    title: "Seekři – základní info",
    notes: "",
    paragraphs: [
          "Seekři – základní info",
          "Základními nástroji jsou Investigační kniha! a Fyzická mapa! (poznámka k online nástroji)",
          "Je silně doporučeno zaznamenat si všechny dotázané otázky i odpovědi na ně do Investigační knihy.",
          "VŽDY se můžete ptát jen na jednu otázku, dokud není zodpovězena není možné položit další.",
          "Je přísně zakázáno používat street view (obrázky na google mapách v náhledu místa jsou dovoleny, nicméně nesmíte jimy scrollovat)",
          "JE doporučeno dělat si zastávky k projednání strategie a dalšího postupu"
    ]
  },

  // Snímek 17: Krátká poznámka k mapám
  17: {
    title: "Krátká poznámka k mapám",
    notes: "Strana 14 v pravidlech",
    paragraphs: [
          "Krátká poznámka k mapám",
          "Musíme používat stejnou mapovou aplikaci. Hra je navržena kolem Google map. Nicméně pro pro nás v tomto ohledu budou mnohem lepší mapy.cz",
          "hledající při použití otázky musí specifikovat jakou mapu použili a jaká mista na ní viděli, např, pošlou screen s těmito místy apod.",
          "Pokud nastane jakákoli nejasnost je na hledajících aby požádali a podali dodatečné informace (screenshot jejich mapové aplikace a popis co mají za problém)"
    ]
  },

  // Snímek 18: Jak si zapisovat jednotlivé typy otázek a jak se na ně ptát?
  18: {
    title: "Jak si zapisovat jednotlivé typy otázek a jak se na ně ptát?",
    notes: "",
    paragraphs: [
          "Jak si zapisovat jednotlivé typy otázek a jak se na ně ptát?"
    ]
  },

  // Snímek 19: Matching otázky
  19: {
    title: "Matching otázky",
    notes: "Poznámka k nástroji, zkontrolovat jestli +- sedí, poznámka k tomu, že letadla se počítají jen letadla na které se dá koupit lístek (flights.google.com)\nStrany 16-22",
    paragraphs: [
          "Matching otázky",
          "Věci, které jsou mimo ČR nepočítáme (např. zahraniční letiště)",
          "PřepravníLetiště (komerční letiště, ze kterého létají letadla*), Vlaková linka (seekři musí být v hýbajícím se vlaku), délka názvu stanice (počítají se i mezery), ulice/cestaPřírodníHora, ŘekaZájmová místaZábavní parky, Zoo, Akvária, Golfová hřiště, Muzea, KinaSlužbyNemocnice, Knihovny, Ambasády"
    ]
  },

  // Snímek 20: Mesuring otázky
  20: {
    title: "Mesuring otázky",
    notes: "Strana 22-28",
    paragraphs: [
          "Mesuring otázky",
          "Přepravní: Komerční letiště, Trasy Via Czechia, Vlakové stanice",
          "Hranice: Státní hranice, Hranice historického dělení, Kraje, Okresy",
          "Přírodní: Nadmořská výška, Vodní plochy, Pobřeží, Hory, Parky",
          "Zájmová místa: Zábavní parky, Zoo, Akvária, Golfová hřiště, Muzea, Kina",
          "Služby: Nemocnice, Knihovny, Ambasády"
    ]
  },

  // Snímek 21: Radary
  21: {
    title: "Radary",
    notes: "Vysvětlit libovolnou vzdálenost, nezapomenout zmínit doublování ceny za otázky,\nStrana 28-30",
    paragraphs: [
          "Radary",
          "Velikosti radarů:",
          "500 m",
          "1 km",
          "2 km",
          "5 km",
          "10 km",
          "15 km",
          "40 km",
          "80 km",
          "160 km",
          "??? (vyber si libovolnou vzdálenost)"
    ]
  },

  // Snímek 22: Teploměry
  22: {
    title: "Teploměry",
    notes: "Strana 30-31",
    paragraphs: [
          "Teploměry",
          "Počítá se od středu uražené cesty, kolmicí",
          "Vzdálenosti",
          "1 km",
          "5 km",
          "15 km",
          "75 km"
    ]
  },

  // Snímek 23: Fotečky
  23: {
    title: "Fotečky",
    notes: "Strana 32-36",
    paragraphs: [
          "Fotečky",
          "Fotky musí být vyfoceny v originálním poměru, jako má telefon. Zoomování je dovoleno, ale na fotce musí být zachycena všechna vypsaná kritéria. Pokud fotografii nelze vyfotit je odesláno „nelze odpovědět“",
          "*K fotkám bude dále speciální sekce později*"
    ]
  },

  // Snímek 24: Chapadla (tentacles)
  24: {
    title: "Chapadla (tentacles)",
    notes: "Strana 36-39",
    paragraphs: [
          "Chapadla (tentacles)",
          "Seekři vyšlou svá „chapadla“, která vycítí.Otázka je opravdu drahá, ale velmi efektivní v zabydlených oblastech.",
          "Použitelná místa:2 kmMuzea, Knihovny, Kina, Nemocnice25kmLinky metra, Zoo, Akvária, Zábavní parky",
          "Doporučuji použít, minule jsme moc nepoužívalí"
    ]
  },

  // Snímek 25: Mapa
  25: {
    title: "Mapa",
    // Pro vložení vlastní mapy sem zadejte cestu, např: './assets/slides/mapa.png'
    mapImage: null,
    notes: "",
    paragraphs: [
          "Mapa"
    ]
  },

  // Snímek 26: Dopřesnění
  26: {
    title: "Dopřesnění",
    notes: "",
    paragraphs: [
          "Dopřesnění",
          "Spánek, jídlo, nebezpečí?",
          "2"
    ]
  },

  // Snímek 27: Vůbec nevím co se děje a mám tak tisíc otázek…(ptej se)
  27: {
    title: "Vůbec nevím co se děje a mám tak tisíc otázek…(ptej se)",
    notes: "",
    paragraphs: [
          "Vůbec nevím co se děje a mám tak tisíc otázek…(ptej se)"
    ]
  },

  // Snímek 28: Hajdr dek (hider deck)
  28: {
    title: "Hajdr dek (hider deck)",
    notes: "",
    paragraphs: [
          "Hajdr dek (hider deck)",
          "Obsahuje 3 typy karet – power up, časový bonus, prokletí",
          "Je důležité karty hrát a hrát je ve správný moment, aby měli co největší efekt! (a nebojte se je používat)"
    ]
  },

  // Snímek 29: Časové bonusy
  29: {
    title: "Časové bonusy",
    notes: "",
    paragraphs: [
          "Časové bonusy",
          "Na kartách bereme čas pro variantu L, je jich zhruba polovina balíčku a jsou v různých velikostech.",
          "Tyto karty platí pouze pokud je máte v ruce, když jste chyceni (ne nutně fyzicky, ale chápeme se)"
    ]
  },

  // Snímek 30: Power-upy
  30: {
    title: "Power-upy",
    notes: "Strana 46-48",
    paragraphs: [
          "Power-upy",
          "Karty můžete zahrát kdykoliv, balíček jich obsahuje několik typů:",
          "Veto; randomize; Discard 1, draw 2; Draw 1, expand max hand size by 1; Duplicate; Move"
    ]
  },

  // Snímek 31: Kurvy (cursy)
  31: {
    title: "Kurvy (cursy)",
    notes: "",
    paragraphs: [
          "Kurvy (cursy)",
          "Je jich spousta, každá má casting cost. Některé se dají zahrát jen v určité chvíle.",
          "bla bla bla obrázek"
    ]
  },

  // Snímek 32: Fotky – nejvyšší budova viditelná ze zastávky
  32: {
    title: "Fotky – nejvyšší budova viditelná ze zastávky",
    notes: "",
    paragraphs: [
          "Fotky – nejvyšší budova viditelná ze zastávky",
          "Nejedná se o fyzicky nejvyšší budovu, ale o nejvyšší z vašeho pohledu",
          "Musíte stát přímo u východu ze stanice, pokud je východů víc hideři si vyberou.",
          "Budova se musí nacházet v horní 1/3 fotky a fotka musí obsahovat střechu a obě strany budovy",
          "Přepravní budova a její součásti se nepočítají."
    ]
  },

  // Snímek 33: Fotky – nejvyšší hora viditelná ze stanice
  33: {
    title: "Fotky – nejvyšší hora viditelná ze stanice",
    notes: "",
    paragraphs: [
          "Fotky – nejvyšší hora viditelná ze stanice",
          "Největší z vaší perspektivy. Max 3x zoom, musí být ve vrchní 1/3 fotky"
    ]
  },

  // Snímek 34: Fotky – Obrys nejbližší cesty
  34: {
    title: "Fotky – Obrys nejbližší cesty",
    notes: "",
    paragraphs: [
          "Fotky – Obrys nejbližší cesty",
          "Cesta/ulice musí být viditelná na mapě. Mapa musí být severem nahoru.",
          "Jak na to?",
          "Tužka/fix + papírnebo screenshot cesty a začernění všeho okolo na telefonu"
    ]
  },

  // Snímek 35: Fotky – 2 budovy
  35: {
    title: "Fotky – 2 budovy",
    notes: "",
    paragraphs: [
          "Fotky – 2 budovy",
          "Spodek a až 4 patra (pokud má budova méně, tak všechna patra, ale můžete zoomovat)",
          "Začernění všech identifikovatelných textů a čísel je povoleno"
    ]
  },

  // Snímek 36: Fotky – interiér restaurece
  36: {
    title: "Fotky – interiér restaurece",
    notes: "",
    paragraphs: [
          "Fotky – interiér restaurece",
          "Není dovoleno zoomování, pouze začernění.",
          "Musí být pořízeno zvenku skrz okno."
    ]
  },

  // Snímek 37: Fotky – park
  37: {
    title: "Fotky – park",
    notes: "",
    paragraphs: [
          "Fotky – park",
          "Není dovoleno zoomování, telefon musí být vzpřímený vzhledem k zemi, fotící musí stát alespoň 2 m od překážky bránící ve výhledu, začernění čísel a názvů dovoleno."
    ]
  },

  // Snímek 38: Fotky – ulička v obchodě
  38: {
    title: "Fotky – ulička v obchodě",
    notes: "",
    paragraphs: [
          "Fotky – ulička v obchodě",
          "Není dovoleno zoomování, fotící musí stát na jednom konci uličky, telefon musí být vzpřímený vzhledem k zemi, začernění identifikujících čísel a názvů dovoleno."
    ]
  },

  // Snímek 39: Fotky – místo vyznání víry
  39: {
    title: "Fotky – místo vyznání víry",
    notes: "",
    paragraphs: [
          "Fotky – místo vyznání víry",
          "Musí obsahovat 2 m x 2 m sekci budovy s alespoň třemi identifikujícími znaky. (pokud by na to místo někdo došel musí si být jistý že našel správné místo)"
    ]
  },

  // Snímek 40: Fotky – nádražní budova
  40: {
    title: "Fotky – nádražní budova",
    notes: "",
    paragraphs: [
          "Fotky – nádražní budova",
          "Musí obsahovat 2 m x 2 m sekci budovy s alespoň třemi identifikujícími znaky. (pokud by na to místo někdo došel musí si být jistý že našel správné místo)"
    ]
  },

  // Snímek 41: Fotky – Obrys +-1 km cesty
  41: {
    title: "Fotky – Obrys +-1 km cesty",
    notes: "",
    paragraphs: [
          "Fotky – Obrys +-1 km cesty",
          "Cesta/ulice musí být viditelná na mapě. Mapa musí být severem nahoru. Během cesty musí hideři udělat alespoň 5 zatáček bez toho aby prošli stejnou cestou znovu.",
          "Cestu nemusí hideři ujít.",
          "Odesílá se opět jen obrys."
    ]
  },

  // Snímek 42: Herní doba
  42: {
    title: "Herní doba",
    notes: "",
    paragraphs: [
          "Herní doba",
          "Hrajeme od XX:XX v pátek kdy budeme 2 týmy abychom si hru zkusili, konec v pátek bude 20:00",
          "Sobota začneme v 08:00 s tím, že schovávající se vyrazí v 07:00",
          "neděla začátek upravíme podle toho jak nám bude, nicméně začínáte na místě, kde jste včera zkončili"
    ]
  },

  // Snímek 43: Cestování
  43: {
    title: "Cestování",
    notes: "",
    paragraphs: [
          "Cestování",
          "Používáme třídenní jízdenku na PID, popř. pokud máte lítačku na pásma P, 0, B",
          "Některé vlaky tut jízdenku podporují také a je povoleno jimi jet",
          "Jezdíme výhradně přepravou PID, pokud se nejedná o nečekanou situaci (hra je pozastavena protože jedete do nemocnice/podobně)",
          "Pokud se jedná o přepravu jiného dopravce, který bere jízdenky PID platí také"
    ]
  },

  // Snímek 44: Spaní
  44: {
    title: "Spaní",
    notes: "",
    paragraphs: [
          "Spaní",
          "počítáme se spaním u nás, popř. pokud se nevejdeme u Dana s Janičkou. (ale vešlo se nás sem i víc)"
    ]
  },

  // Snímek 45: Jídlo
  45: {
    title: "Jídlo",
    notes: "",
    paragraphs: [
          "Jídlo",
          "Je požadováno, aby každý snědl minimálně 3 jídla za den. Počítejte s tím, že se může stát, že budete až několik hodin bez možnosti dokoupit si jídlo.",
          "Proto sebou mějte v batůžku snacky a vodu, pokud se naskytne možnost doplňte si."
    ]
  },

  // Snímek 46: Natáčení
  46: {
    title: "Natáčení",
    notes: "",
    paragraphs: [
          "Natáčení",
          "Točte vše co vám přijde jako důležitý moment (videa můžeme vždy smazat, když tam nebude nic important) optimální je si někde zapřít telefon a namířit ho na sebe (popř. kdyby nebylo slyšet můžete nahrát zvuk na jiný telefon, který budete držet) ideálně natáčejte na šířku",
          "Videa a fotky mi po konci vašeho runu naposílejte nějak ať neztratí tolik kvalitu!",
          "Jedná se primárně o momenty kdy:",
          "Strategizujete",
          "Zadáváte/odpovídáte na otázku/cursu",
          "Taháte si karty",
          "Stěžujete si (na cokoliv)",
          "Nastupujete/vystupujete ze spoje",
          "Spoj má zpoždění/ujel/zjistíte že na něj musíte běžet",
          "Máte nějaké fajn jídlo/pití",
          "Plníte cursu",
          "Cokoliv jiného zajímavého uznáte za vhodné"
    ]
  },

  // Snímek 47: Nebezpečné situace
  47: {
    title: "Nebezpečné situace",
    notes: "",
    paragraphs: [
          "Nebezpečné situace",
          "Pokud se dostanete do situace kdy se někomu něco stane hra se pozastaví dokud nebude situace vyřešena. Nechoďte na místa, která zvážíte jako riziková (feťácká ulička, stanové městečko bezdomovců, ….).Bezpečí je důležitější než hra!"
    ]
  },

  // Snímek 48: Stres a hádky
  48: {
    title: "Stres a hádky",
    notes: "",
    paragraphs: [
          "Stres a hádky",
          "Během hraní se určitě dostanete do situace kdy někdo způsobí problém někomu jinému (unavenost/nedoběhnete spoj/rozpor v tom co dělat dál). V tento moment je důležité se uklidnit, dýchat a v klidu si o situaci promluvit.",
          "Pokud máte neprosto rozdílné názory a opravdu nikdo nechce ustoupit zvolte rozhodnutí náhodou.(např. hod mincí, hod kostkou(sudá/lichá), kámen nůžky, …)",
          "Pamatujte že hádka vám nikdy nepomůže, ztratíte jí čas a většinou i náladu"
    ]
  },

  // Snímek 49: Delší poznámka k mapám
  49: {
    title: "Delší poznámka k mapám",
    notes: "",
    paragraphs: [
          "Delší poznámka k mapám",
          "Využijte možnost stažení map (jak google mapy, tak mapy.cz je mají)",
          "*ukázka měření vzdálenosti*",
          "*ukázka online nástroje*",
          "*další užitečné nástroje* kreslení do map"
    ]
  },

  // Snímek 50: Všechno!
  50: {
    title: "Všechno!",
    notes: "",
    paragraphs: [
          "Všechno!",
          "OTÁZKY??"
    ]
  },

};

export default EDITABLE_SLIDES;
