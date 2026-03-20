/** For the login and ladder databases */
exports.mysql = {
  host: "127.0.0.1",
  user: "showdown",
  password: "strongpassword",
  database: "ps",
  prefix: "ntbb_",
  socketPath: '',
  charset: "utf8",
};

/** For the replay databases */
exports.replaysdb = exports.mysql;

/**
 * For the friends database
 *
 * @type {import('pg').PoolConfig | null}
 */
exports.postgres = {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'roria2026',
    database: 'pokemonshowdown'
};

/** For 2FA verification. */
exports.gapi_clientid = '';

/** Terms banned in names
 * @type {string[]}
 */
exports.bannedTerms = [];

// To use for password hashing.
/** @type {number} */
exports.passwordSalt = 10;

// routes - todo stricter key types?
/** @type {Record<string, string>} */
exports.routes = {
	root: ".pbblegacy.com",
};

/** @type {string} */
exports.mainserver = 'showdown';
/** @type {string} */
exports.serverlist = "/var/www/RC-Showdown/loginserver/config/servers.inc.php";
/** @type {string | null} */
exports.colorpath = null;
/** @type {string | null} */
exports.coilpath = null;

/** @type {string | null} Password, whether to debug error stacks in request or not */
exports.devmode = null;

// absolute path to your PS instance. can use the checked-out client that the client clones in.
/** @type {string} */
exports.pspath = "/var/www/RC-Showdown/server";

/**
 * Custom SID maker.
 * @type {(() => string | Promise<string>) | null}
 */
exports.makeSid = null;

/** ips to automatically lock
 * @type {string[]} */
exports.autolockip = [];
/** compromised private key indexes
 * @type {number[]} */
exports.compromisedkeys = [];
/** proxies to trust x-forwarded-for from
 * @type {string[]} */
exports.trustedproxies = ['127.0.0.1'];

/**
    * [Places to allow cors requests from, prefix to use][]
    * @type {[RegExp, string][]}
    */
exports.cors = [
	[/^http:\/\/smogon\.com$/, "smogon.com_"],
	[/^http:\/\/www\.smogon\.com$/, "www.smogon.com_"],
	[/^http:\/\/logs\.psim\.us$/, "logs.psim.us_"],
	[/^http:\/\/logs\.psim\.us:8080$/, "logs.psim.us_"],
	[/^http:\/\/[a-z0-9]+\.psim\.us$/, ""],
	[/^http:\/\/play\.pokemonshowdown\.com$/, ""],
];

/**
    * array of user IDs who will be given sysop powers on all servers they log into via this loginserver
    * @type {string[]}
    */
exports.sysops = [];

// Private key to use for validating assertions.
/** @type {string} */
exports.privatekey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCwn4dRjyK3OLzs
05+zG/NdrlZA/s+ZBMKY9XgohTqvY345ySB1bam8SuJqnf15TQZiydJC4HOIuwEZ
WD+gkmohdojzdHmhanC/nBHuIJyRpM3H9hu3YmZRwyhB7tsz0Pw44GizVCuWQLSP
LV7F/j2l2TKSoVg1obCqlGn9rAb4vN0Pe3wiY8u2nQzEOk6Kr9YmSMoWO5qm7p0a
EQTExI8JSGJjZw1Y/f0JT8s8dm0wh7lPzlCH60MRCRtxQpO524Ztnr1hQnrywP4L
W/NBH6rjiVYiKlhNvFqdMTanUObIUP3JyVHU+ddBn2PIVkA4l3Votm4s1MwNSsbF
cYfptmorAgMBAAECggEAOyYZn5cjRZ/DKT6Px2AvZqqZKSgMZs7Ayo++HzfK2Oyl
W32/GIRSqQOdAp6JQeOpJVE4UHwxRNN3gUDcAg62ayFyqLFTgFqQiqKeIJScSmwa
HAKP8qCJ6ozEQRxYHWi55uREO/YOqMFflmlXyU+k3pM3zAIrc76D1wRf4HuJVCgA
1r7PAtFoPSKZP3u1xWYiVER2juL1wB+AQv4JQQ3ZHygSCJFNsVCV+bDj9NQ38wkl
YP5WJers9OxVq/iCFmSD5QPJipaa5DvqyE/ZGncJzx5Pb4+AVN9sjSoWuuL/wE3N
yJnmRmNIsbe52CSNg8dRpr0v1kwpPtA7k6hwg5sPOQKBgQDHFdCF/GAljHuirSMf
JCokRVZvhTwoPSsmMSJfuKB2a117ygkJHk69lD5sTpYstmbBis0ay6QiKGjtR4jf
gGaUk0Es6hfozKySrGUbkxx1Fmt24fjoGCRpE5QQsVfsMpvxob+VPyEJ+5In9HcR
QwQsi1N0pswdeKoZOBmxmBfPSQKBgQDjHdA+PlFMB2t1ydbNOL3KiDmzK14SNjF0
EdpCNzK9DwXoMgq2ryvySiCvJysh/V4N45pt3c/CM/eaNfKIAzAcZ1S+2v+bJkk/
EtAfyjz9zLIEt7kEtS3sMz0kOSBj/BtIfZZDNc2da9a7ZQixyXIeSLF8TAKoKmJx
5BnqcGUJ0wKBgAj1VVXCHn1yDdorGkp7cR4CtLn979ALuJZWXaqa/zV07Vb1p2Ru
pbJoKkrrWlyWtJb+7O3IvhD/aoFK18De4T7MRYGE4yCJnTZYZZBRFVW7dYh68J1Z
AMJtrBr4L/Gj8Vp1Ic7QcWcml9QObxEqx9RNTKsSGls1I8pQuO9B3chpAoGAKSN6
V/vzv+DMLz7LQMsZXblFMlYVqRjV5l9heIMFFsfE2yVNWX/rZuzUdMWUg4igY8Wp
cGMwQc4l+HHzJ33kVhDFgfirOhA6Tkl7F3cLizFrwX0B739d/R3e4lPSsSm2S3As
KqpxPyWMdM89Pu7tU9z5ATnHdWyP/m9B3nxTYO8CgYAk7qutqXjetCj0KKfQnx9Y
SP2O0iuXthBhvtdVowKnKJFTBqqX1bd5DLpLm8AXj/swhW4aA/FzLJBN4xWlRQA/
pffdWIyY0kxr7NTrGERS3/NzZn3OtA+85PNtyLK7igfoAa6fX73kaiucjnU+xKO1
TkWfwIxYbn4bWYCOoetDYg==
-----END PRIVATE KEY-----
`;// current active challengekeyid (backwards compatibility)
/** @type {number} */
exports.challengekeyid = 4;




/**
 * DBs.
 */
/** @type {typeof exports.mysql | undefined} */
exports.replaysdb = undefined;
/** @type {typeof exports.mysql | undefined} */
exports.ladderdb = undefined;

/**
 * For emailing crashes.
 * @type {{
 * options: {
 * 		host: string,
 * 		port: number,
 * 		secure?: boolean,
 * 		auth?: {user: string, pass: string}
 * 	},
 * 	from: string,
 * 	to: string,
 * 	subject: string,
 * } | null}
 */
exports.crashguardemail = null;

/**
 * SSL settings.
 * @type {{key: string, cert: string, port: number} | null}
 */
exports.ssl = null;

/**
 * Address to bind to.
 *   Leaving it as `undefined` will result in binding to `0.0.0.0`.
 * @type {undefined | string}
 */
exports.bindaddress = undefined;

/**
 * Port to listen on.
 * @type {number}
 */
exports.port = 8080;

/**
 * Whether or not to reload the config on edit.
 * @type {boolean}
 */
exports.watchconfig = true;

/**
 * An IP to allow restart requests from.
 * @type {null | string}
 */
exports.restartip = null;

/**
 * An IP to allow Smogon acc-linking requests from.
 * @type {null | string}
 */
exports.smogonip = null;
/**
 * Retain smogon temporary encryption key at this path
 * @type {null | string}
 */
exports.smogonpath = null;
/**
 * Custom actions for your loginserver.
 * @type {{[k: string]: import('../src/server').QueryHandler} | null}
 */
exports.actions = null;

exports.cssdir = __dirname + "/customcss/";
/**
 * Path to the client root dir.
 * @type {string | null}
 */
exports.clientpath = null;

/**
 * @type {Record<string, string>}
 */
exports.standings = {
	'-20': "Confirmed",
	'-10': "Autoconfirmed",
	'0': "New",
	"20": "Permalock",
	"30": "Permaban",
	"100": "Disabled",
};

/**
 * @type {null | ((userid: string) => Promise<{[k: string]: {min: number, max: number, count: number}}>)}
 * Get IPs of a given userid.
 */
exports.getuserips = null;

/**
 * @type {string | null}
 * Index of suspect tests active
 */
exports.suspectpath = null;

/**
 * @type {string | null}
 */
exports.smogonpublickey = null;
