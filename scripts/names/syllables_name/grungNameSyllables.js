const grungFirstNameSyllable1 = [
	'B',
	'Bl',
	'Br',
	'Brr',
	'C',
	'Cr',
	'Crr',
	'D',
	'Dr',
	'Drr',
	'F',
	'Fr',
	'Frr',
	'G',
	'Gr',
	'Grr',
	'H',
	'Hr',
	'Hrr',
	'K',
	'Kr',
	'Krr',
	'M',
	'Mr',
	'Mrr',
	'N',
	'Nr',
	'Nrr',
	'P',
	'Pl',
	'Pr',
	'Prr',
	'Q',
	'Qr',
	'Qrr',
	'R',
	'Rr',
	'Rrr',
	'S',
	'Sk',
	'Skr',
	'Skrr',
	'Sr',
	'Srr',
	'T',
	'Tr',
	'Trr',
	'V',
	'Vr',
	'Vrr',
	'W',
	'Wr',
	'Wrr',
	'X',
	'Xr',
	'Xrr',
	'Z',
	'Zr',
	'Zrr',
];
const grungFirstNameSyllable2 = [
	'aa',
	'aaa',
	'ae',
	'ai',
	'ao',
	'au',
	'ea',
	'ee',
	'eee',
	'ei',
	'eo',
	'eu',
	'ia',
	'ii',
	'ii',
	'iii',
	'oa',
	'oe',
	'oi',
	'oo',
	'ooo',
	'ou',
	'ua',
	'ue',
	'ui',
	'uo',
	'uu',
	'uuu',
];
const grungFirstNameSyllable3 = [
	'd',
	'dd',
	'g',
	'gg',
	'ggl',
	'gk',
	'gl',
	'k',
	'kk',
	'lg',
	'lgg',
	'll',
	'lp',
	'mb',
	'mp',
	'ng',
	'p',
	'pp',
	'r',
	'rb',
	'rg',
	'rgk',
	'rk',
	'rl',
	'rp',
	'rr',
	'rrb',
	'rrg',
	'rrk',
	'rrl',
	'rrp',
	'rrrg',
	'rx',
	'x',
	'xx',
];
const grungFirstNameSyllable4 =
	Math.random() < 0.5
		? ['']
		: getRandomElement([
				'abl',
				'ad',
				'ag',
				'agg',
				'aggl',
				'agl',
				'agr',
				'ak',
				'akg',
				'alg',
				'algg',
				'all',
				'alp',
				'amb',
				'amp',
				'ang',
				'ap',
				'apg',
				'app',
				'ar',
				'arb',
				'arbl',
				'arg',
				'argl',
				'ark',
				'arl',
				'arlp',
				'arp',
				'arr',
				'arrb',
				'arrg',
				'arrk',
				'arrl',
				'arrp',
				'arrrg',
				'arx',
				'ax',
				'ebl',
				'ed',
				'eg',
				'egg',
				'eggl',
				'egl',
				'egr',
				'ek',
				'ekg',
				'elg',
				'elgg',
				'ell',
				'elp',
				'emb',
				'emp',
				'eng',
				'ep',
				'epg',
				'epp',
				'er',
				'erb',
				'erbl',
				'erg',
				'ergl',
				'erk',
				'erl',
				'erlp',
				'erp',
				'err',
				'errb',
				'errg',
				'errk',
				'errl',
				'errp',
				'errrg',
				'erx',
				'ex',
				'ibl',
				'id',
				'ig',
				'igg',
				'iggl',
				'igl',
				'igr',
				'ik',
				'ikg',
				'ilg',
				'ilgg',
				'ill',
				'ilp',
				'imb',
				'imp',
				'ing',
				'ip',
				'ipg',
				'ipp',
				'ir',
				'irb',
				'irbl',
				'irg',
				'irgl',
				'irk',
				'irl',
				'irlp',
				'irp',
				'irr',
				'irrb',
				'irrg',
				'irrk',
				'irrl',
				'irrp',
				'irrrg',
				'irx',
				'ix',
				'obl',
				'od',
				'og',
				'ogg',
				'oggl',
				'ogl',
				'ogr',
				'ok',
				'okg',
				'olg',
				'olgg',
				'oll',
				'olp',
				'omb',
				'omp',
				'ong',
				'op',
				'opg',
				'opp',
				'or',
				'orb',
				'orbl',
				'org',
				'orgl',
				'ork',
				'orl',
				'orlp',
				'orp',
				'orr',
				'orrb',
				'orrg',
				'orrk',
				'orrl',
				'orrp',
				'orrrg',
				'orx',
				'ox',
				'ubl',
				'ud',
				'ug',
				'ugg',
				'uggl',
				'ugl',
				'ugr',
				'uk',
				'ukg',
				'ulg',
				'ulgg',
				'ull',
				'ulp',
				'umb',
				'ump',
				'ung',
				'up',
				'upg',
				'upp',
				'ur',
				'urb',
				'urbl',
				'urg',
				'urgl',
				'urk',
				'url',
				'urlp',
				'urp',
				'urr',
				'urrb',
				'urrg',
				'urrk',
				'urrl',
				'urrp',
				'urrrg',
				'urx',
				'ux',
		  ]);
const grungFirstNameSyllable5 = [''];

const grungLastNameSyllable1 = [
	'Algen',
	'Blatt',
	'Faden',
	'Gift',
	'Gras',
	'Grimm',
	'Kehl',
	'Kiel',
	'Kleb',
	'Laich',
	'Matsch',
	'Moos',
	'Quak',
	'Schilf',
	'Schlag',
	'Schlamm',
	'Schleim',
	'Schlick',
	'Spring',
	'Tümpel',
];
const grungLastNameSyllable2 = [
	'auge',
	'blase',
	'blick',
	'dorn',
	'fuß',
	'fänger',
	'graber',
	'haut',
	'kieme',
	'larve',
	'rücken',
	'sack',
	'schwimmer',
	'sprung',
	'stampfer',
	'teich',
	'wasser',
	'wurf',
	'zahn',
	'zunge',
];
const grungLastNameSyllable3 = [''];
const grungLastNameSyllable4 = [''];
const grungLastNameSyllable5 = [''];