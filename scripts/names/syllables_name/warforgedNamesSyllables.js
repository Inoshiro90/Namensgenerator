const warforgedFirstNames = [
	'Abfall',
	'Abfrage',
	'Abruf',	
	'Absicherung',
	'Absteiger',
	'Abweichler',
	'Achse',
	'Adapter',
	'Adel',
	'Aegis',
	'Agent',
	'Akteur',
	'Allgemein',
	'Amboss',
	'Amethyst',
	'Anhänger',
	'Anheizer',
	'Anker',
	'Antrieb',
	'Antworter',
	'Anzug',
	'Apfel',
	'Apparat',
	'Arm',
	'Armbrust',
	'Arsenal',
	'Assassine',
	'Ätzen',
	'Ätzer',
	'Aufpasser',
	'Aufschlitzer',
	'Aufseher',
	'Aufsteiger',
	'Ausleger',
	'Autor',
	'Axt',
	'Ballast',
	'Balliste',
	'Bandit',
	'Bär',
	'Baron',
	'Bastion',
	'Bastler',
	'Bauer',
	'Baum',
	'Baustein',
	'Bedrohung',
	'Befehlshaber',
	'Begriff',
	'Beobachter',
	'Berater',
	'Berg',
	'Berger',
	'Beruhiger',
	'Besatzung',
	'Beschützer',
	'Bessermacher',
	'Bestrafer',
	'Besucher',
	'Bewacher',
	'Bewaffnung',
	'Bewahrer',
	'Bieger',
	'Biest',
	'Bild',
	'Bildhauer',
	'Bildnis',
	'Binder',
	'Blasebalg',
	'Blatt',
	'Blau',
	'Blinzeln',
	'Blitzschlag',
	'Block',
	'Bogenbauer',
	'Bollwerk',
	'Brachial',
	'Brandstifter',
	'Brecher',
	'Breitschwert',
	'Bringer',
	'Bronze',
	'Brühe',
	'Buch',
	'Büffet',
	'Bulle',
	'Bummler',
	'Dämmerung',
	'Dämon',
	'Dampf',
	'Daten',
	'Daumen',
	'Defekt',
	'Definierer',
	'Degen',
	'Delle',
	'Denker',
	'Diagnostiker',
	'Diamant',
	'Dick',
	'Dieb',
	'Diener',
	'Doktor',
	'Dolch',
	'Donner',
	'Drache',
	'Drehbank',
	'Drehmoment',
	'Drei',
	'Dreieck',
	'Dreschflegel',
	'Drohne',
	'Drücker',
	'Dunkelheit',
	'Durchbohrer',
	'Echo',
	'Eckstein',
	'Eiche',
	'Eiferer',
	'Einbrecher',
	'Einheit',
	'Eins',
	'Eisen',
	'Eisenhaut',
	'Eisenseele',
	'Eloquent',
	'Ende',
	'Entermesser',
	'Entschlüssler',
	'Erbauer',
	'Erlöser',
	'Ernte',
	'Ernter',
	'Erstickter',
	'Erwecker',
	'Esche',
	'Experte',
	'Explosion',
	'Fackel',
	'Fahnder',
	'Fahrer',
	'Fall',
	'Fallgatter',
	'Fänger',
	'Fass',
	'Faust',
	'Federkiel',
	'Fehler',
	'Fell',
	'Felsen',
	'Fenster',
	'Fernglas',
	'Festung',
	'Feuer',
	'Figur',
	'Finger',
	'Fingerhut',
	'Flamme',
	'Floh',
	'Flotte',
	'Fluch',
	'Flüsterer',
	'Folie',
	'Fregatte',
	'Frei',
	'Freiheit',
	'Freund',
	'Frieden',
	'Fromm',
	'Fühler',
	'Führer',
	'Fummler',
	'Fünf',
	'Funkeln',
	'Funken',
	'Furcht',
	'Fuß',
	'Gabel',
	'Galgen',
	'Garotte',
	'Gärtner',
	'Gast',
	'Gauner',
	'Gebet',
	'Gefäß',
	'Gefreiter',
	'Geheiligt',
	'Gehirn',
	'Geist',
	'Gelb',
	'Gericht',
	'Gerüst',
	'Geschenk',
	'Geschichte',
	'Gesicht',
	'Gespenst',
	'Gestalter',
	'Gewinn',
	'Gewinner',
	'Gewölbe',
	'Gießerei',
	'Glaive',
	'Glanz',
	'Glänzer',
	'Glaube',
	'Glitzer',
	'Gold',
	'Grab',
	'Grabstein',
	'Gral',
	'Grau',
	'Greifer',
	'Griller',
	'Groß',
	'Grube',
	'Grün',
	'Grunzer',
	'Gut',
	'Hacke',
	'Hacker',
	'Haft',
	'Hahn',
	'Haken',
	'Halt',
	'Halter',
	'Hammer',
	'Hand',
	'Händler',
	'Handschuh',
	'Harfe',
	'Harke',
	'Harnisch',
	'Harsch',
	'Hart',
	'Haut',
	'Heber',
	'Heilig',
	'Heiligtum',
	'Held',
	'Herausforderer',
	'Herbst',
	'Herumtreiber',
	'Herz',
	'Hilfe',
	'Horn',
	'Hummer',
	'Hüpfer',
	'Hymne',
	'Inspektor',
	'Intelligenz',
	'Irrtum',
	'Jade',
	'Jagd',
	'Jagdhund',
	'Jäger',
	'Käfer',
	'Kalt',
	'Kälteschmiede',
	'Kammer',
	'Kampf',
	'Kämpfer',
	'Kanone',
	'Kapitän',
	'Kaputt',
	'Karre',
	'Katana',
	'Katapult',
	'Kegel',
	'Kelch',
	'Kelle',
	'Kern',
	'Kerze',
	'Kessel',
	'Kette',
	'Ketten',
	'Keule',
	'Kirche',
	'Klammer',
	'Klang',
	'Klank',
	'Klaue',
	'Klauer',
	'Kletterer',
	'Klinge',
	'Klingel',
	'Klinke',
	'Klopfer',
	'Kloppe',
	'Klopper',
	'Klumpen',
	'Knauf',
	'Knautscher',
	'Knirscher',
	'Knochen',
	'Knüppel',
	'Kobold',
	'Koch',
	'Kodex',
	'Koffer',
	'Kompass',
	'Kontrolleur',
	'Kopf',
	'Korn',
	'Kraft',
	'Krähe',
	'Krähenfuß',
	'Kranz',
	'Kratzer',
	'Kreatur',
	'Kreutzer',
	'Kreuz',
	'Krieg',
	'Kriegerisch',
	'Kristall',
	'Krokodil',
	'Krone',
	'Kröte',
	'Krümler',
	'Krummsäbel',
	'Kundschafter',
	'Künstler',
	'Kupfer',
	'Kurator',
	'Kutsche',
	'Landwirt',
	'Lanze',
	'Laterne',
	'Latrine',
	'Läufer',
	'Lehrer',
	'Leiter',
	'Leitung',
	'Lenkrad',
	'Leser',
	'Letzte',
	'Leuchtturm',
	'Lockvogel',
	'Löscher',
	'Macher',
	'Mächtig',
	'Mahlen',
	'Maler',
	'Mangel',
	'Marker',
	'Markierung',
	'Marmor',
	'Maschine',
	'Maske',
	'Maskierer',
	'Massiv',
	'Mast',
	'Maultier',
	'Maurer',
	'Mausoleum',
	'Medaillon',
	'Meister',
	'Mensch',
	'Mentor',
	'Messer',
	'Messgerät',
	'Messing',
	'Metall',
	'Mime',
	'Mistgabel',
	'Mitternacht',
	'Modell',
	'Monokel',
	'Monolith',
	'Mörder',
	'Morgen',
	'Morgenstern',
	'Mörtel',
	'Mühle',
	'Mündung',
	'Muskeln',
	'Muster',
	'Nachtschwärmer',
	'Nadel',
	'Nadeln',
	'Nägel',
	'Näher',
	'Namenlos',
	'Narr',
	'Neuling',
	'Niete',
	'Nomade',
	'Null',
	'Ochse',
	'Ofen',
	'Offizier',
	'Onyx',
	'Orakel',
	'Orange',
	'Orkan',
	'Ornament',
	'Packer',
	'Panzer',
	'Panzerbrecher',
	'Passagier',
	'Patient',
	'Patriot',
	'Pause',
	'Pech',
	'Peiniger',
	'Petunie',
	'Pfad',
	'Pfeife',
	'Pfeifer',
	'Pfeil',
	'Pferd',
	'Pflaster',
	'Pfleger',
	'Pflug',
	'Pfortenbrecher',
	'Pförtner',
	'Pfosten',
	'Pik',
	'Pilger',
	'Platin',
	'Plättchen',
	'Plötzlich',
	'Plünderer',
	'Prediger',
	'Preis',
	'Primzahl',
	'Probe',
	'Prophet',
	'Prüfer',
	'Publikum',
	'Purpur',
	'Putz',
	'Pyramide',
	'Quadrat',
	'Quecksilber',
	'Quetscher',
	'Quietscher',
	'Rad',
	'Rädchen',
	'Rahmen',
	'Ramsch',
	'Ramscher',
	'Rand',
	'Raser',
	'Raserei',
	'Ratsche',
	'Raucher',
	'Rechner',
	'Rechteck',
	'Regler',
	'Reichtum',
	'Reißwolf',
	'Reiter',
	'Reliquie',
	'Retter',
	'Richter',
	'Riese',
	'Ringer',
	'Rippe',
	'Ritter',
	'Rohrstock',
	'Rolle',
	'Rose',
	'Rost',
	'Rot',
	'Rubin',
	'Rückgänger',
	'Rückgrat',
	'Ruhe',
	'Ruhm',
	'Rumpeln',
	'Rune',
	'Säbel',
	'Salz',
	'Samen',
	'Sammler',
	'Sanftmütig',
	'Sängerin',
	'Saphir',
	'Säule',
	'Schaber',
	'Schacht',
	'Schäfer',
	'Schalter',
	'Scharnier',
	'Schatten',
	'Schemen',
	'Scherbe',
	'Schere',
	'Scherzbold',
	'Schiefer',
	'Schild',
	'Schildkröte',
	'Schildmacher',
	'Schimmer',
	'Schlacht',
	'Schlachter',
	'Schlächter',
	'Schlacke',
	'Schlag',
	'Schläger',
	'Schlaufe',
	'Schlecht',
	'Schleicher',
	'Schlitten',
	'Schlitzer',
	'Schloss',
	'Schlüssel',
	'Schmelze',
	'Schmelzer',
	'Schmelztiegel',
	'Schmetterer',
	'Schmied',
	'Schmiede',
	'Schmieder',
	'Schmuckstück',
	'Schmutz',
	'Schnitt',
	'Schnitter',
	'Schnitzer',
	'Schnüffler',
	'Schnur',
	'Schönheit',
	'Schöpfer',
	'Schöpfung',
	'Schott',
	'Schraffur',
	'Schrägstrich',
	'Schraubenschlüssel',
	'Schraubstock',
	'Schreiber',
	'Schrein',
	'Schrott',
	'Schrubber',
	'Schutz',
	'Schwarz',
	'Schweißen',
	'Schwer',
	'Schwert',
	'Schwertscheide',
	'Seele',
	'Seher',
	'Sender',
	'Sense',
	'Sheriff',
	'Sicher',
	'Sicherheit',
	'Siegel',
	'Sieger',
	'Silber',
	'Sklave',
	'Smaragd',
	'Späher',
	'Spalte',
	'Speer',
	'Spezial',
	'Sphäre',
	'Spieler',
	'Spindel',
	'Spitze',
	'Spötter',
	'Springer',
	'Sprinter',
	'Spritzer',
	'Spule',
	'Spuren',
	'Stab',
	'Stachel',
	'Stahl',
	'Stand',
	'Stark',
	'Starr',
	'Station',
	'Status',
	'Staub',
	'Stecher',
	'Stein',
	'Stetig',
	'Steuer',
	'Stich',
	'Stichel',
	'Stiefel',
	'Stift',
	'Stimme',
	'Stock',
	'Stöcke',
	'Stolperer',
	'Stolz',
	'Störung',
	'Stößel',
	'Strafe',
	'Strandgut',
	'Streitkolben',
	'Strich',
	'Strolch',
	'Stück',
	'Student',
	'Stumpf',
	'Sturm',
	'Stürmer',
	'Sucher',
	'Symbol',
	'Tagtraum',
	'Tat',
	'Taucher',
	'Teller',
	'Temperament',
	'Tester',
	'Thema',
	'Thron',
	'Tick-Tack',
	'Tier',
	'Titan',
	'Topf',
	'Tor',
	'Totmann',
	'Träger',
	'Träumer',
	'Treiber',
	'Treibgut',
	'Treu',
	'Triumph',
	'Trommel',
	'Trompete',
	'Tröte',
	'Trotzdem',
	'Tugend',
	'Tür',
	'Turm',
	'Turmständer',
	'Türriegel',
	'Türsteher',
	'Türstopper',
	'Tutor',
	'Überprüfer',
	'Übersetzer',
	'Übersicht',
	'Uhr',
	'Unbesungen',
	'Unermüdlich',
	'Unmacher',
	'Unterstützer',
	'Unverziehen',
	'Verbindung',
	'Verfolger',
	'Verfolgung',
	'Verirrt',
	'Vermesser',
	'Verschmelzung',
	'Verschrotter',
	'Versenger',
	'Verstärker',
	'Verteidiger',
	'Vertrauter',
	'Verwalter',
	'Verwunder',
	'Verwüster',
	'Verzauberer',
	'Vier',
	'Violett',
	'Vogelscheuche',
	'Vorbote',
	'Vorne',
	'Vortäuscher',
	'Wache',
	'Wachposten',
	'Wacht',
	'Wächter',
	'Wachtmeister',
	'Waffe',
	'Wagen',
	'Wahnsinnig',
	'Wälzer',
	'Wand',
	'Wanderer',
	'Wecken',
	'Weiß',
	'Welle',
	'Werfer',
	'Wetter',
	'Widder',
	'Widerhaken',
	'Wiedergänger',
	'Wiese',
	'Wildschwein',
	'Wille',
	'Winker',
	'Wirbelsturm',
	'Wirbelwind',
	'Wirker',
	'Wirt',
	'Wolf',
	'Wolke',
	'Wort',
	'Wörtlich',
	'Wunder',
	'Wunderer',
	'Würfel',
	'Zahm',
	'Zahnrad',
	'Zange',
	'Zänker',
	'Zauberspruch',
	'Zauberstab',
	'Zehn',
	'Zehnbolzen',
	'Zerhacker',
	'Zerschmetterer',
	'Zerspringer',
	'Zerstörer',
	'Ziel',
	'Zitadelle',
	'Zollstock',
	'Zorn',
	'Zornig',
	'Zufall',
	'Zunder',
	'Zündstein',
	'Zungen',
	'Zupacker',
	'Zuschlag',
	'Zwecke',
	'Zwei',
];