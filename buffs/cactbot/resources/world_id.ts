// Auto-generated from gen_world_ids.ts
// DO NOT EDIT THIS FILE DIRECTLY

// NOTE: This data is filtered to public worlds only (i.e. isPublic: true)

export type DataCenter = {
  id: number;
  name: string;
};

export type World = {
  id: number;
  internalName: string;
  name: string;
  region: number;
  userType: number;
  dataCenter?: DataCenter;
  isPublic?: boolean;
};

export type Worlds = {
  [id: string]: World;
};

export const worldNameToWorld = (name: string): World | undefined => {
  return Object.values(data).find((world: World) => {
    if (world.name === name) {
      return true;
    }
  });
};

const data: Worlds = {
  '21': {
    'dataCenter': {
      'id': 9,
      'name': 'Materia',
    },
    'id': 21,
    'internalName': 'Ravana',
    'name': 'Ravana',
    'region': 1,
    'userType': 7,
  },
  '22': {
    'dataCenter': {
      'id': 9,
      'name': 'Materia',
    },
    'id': 22,
    'internalName': 'Bismarck',
    'name': 'Bismarck',
    'region': 1,
    'userType': 7,
  },
  '23': {
    'dataCenter': {
      'id': 3,
      'name': 'Mana',
    },
    'id': 23,
    'internalName': 'Asura',
    'name': 'Asura',
    'region': 1,
    'userType': 1,
  },
  '24': {
    'dataCenter': {
      'id': 10,
      'name': 'Meteor',
    },
    'id': 24,
    'internalName': 'Belias',
    'name': 'Belias',
    'region': 1,
    'userType': 1,
  },
  '28': {
    'dataCenter': {
      'id': 3,
      'name': 'Mana',
    },
    'id': 28,
    'internalName': 'Pandaemonium',
    'name': 'Pandaemonium',
    'region': 1,
    'userType': 1,
  },
  '29': {
    'dataCenter': {
      'id': 10,
      'name': 'Meteor',
    },
    'id': 29,
    'internalName': 'Shinryu',
    'name': 'Shinryu',
    'region': 1,
    'userType': 1,
  },
  '30': {
    'dataCenter': {
      'id': 10,
      'name': 'Meteor',
    },
    'id': 30,
    'internalName': 'Unicorn',
    'name': 'Unicorn',
    'region': 1,
    'userType': 1,
  },
  '31': {
    'dataCenter': {
      'id': 10,
      'name': 'Meteor',
    },
    'id': 31,
    'internalName': 'Yojimbo',
    'name': 'Yojimbo',
    'region': 1,
    'userType': 1,
  },
  '32': {
    'dataCenter': {
      'id': 10,
      'name': 'Meteor',
    },
    'id': 32,
    'internalName': 'Zeromus',
    'name': 'Zeromus',
    'region': 1,
    'userType': 1,
  },
  '33': {
    'dataCenter': {
      'id': 7,
      'name': 'Light',
    },
    'id': 33,
    'internalName': 'Twintania',
    'name': 'Twintania',
    'region': 1,
    'userType': 5,
  },
  '34': {
    'dataCenter': {
      'id': 8,
      'name': 'Crystal',
    },
    'id': 34,
    'internalName': 'Brynhildr',
    'name': 'Brynhildr',
    'region': 1,
    'userType': 3,
  },
  '35': {
    'dataCenter': {
      'id': 5,
      'name': 'Primal',
    },
    'id': 35,
    'internalName': 'Famfrit',
    'name': 'Famfrit',
    'region': 1,
    'userType': 3,
  },
  '36': {
    'dataCenter': {
      'id': 7,
      'name': 'Light',
    },
    'id': 36,
    'internalName': 'Lich',
    'name': 'Lich',
    'region': 1,
    'userType': 5,
  },
  '37': {
    'dataCenter': {
      'id': 8,
      'name': 'Crystal',
    },
    'id': 37,
    'internalName': 'Mateus',
    'name': 'Mateus',
    'region': 1,
    'userType': 3,
  },
  '39': {
    'dataCenter': {
      'id': 6,
      'name': 'Chaos',
    },
    'id': 39,
    'internalName': 'Omega',
    'name': 'Omega',
    'region': 1,
    'userType': 5,
  },
  '40': {
    'dataCenter': {
      'id': 4,
      'name': 'Aether',
    },
    'id': 40,
    'internalName': 'Jenova',
    'name': 'Jenova',
    'region': 1,
    'userType': 3,
  },
  '41': {
    'dataCenter': {
      'id': 8,
      'name': 'Crystal',
    },
    'id': 41,
    'internalName': 'Zalera',
    'name': 'Zalera',
    'region': 1,
    'userType': 3,
  },
  '42': {
    'dataCenter': {
      'id': 7,
      'name': 'Light',
    },
    'id': 42,
    'internalName': 'Zodiark',
    'name': 'Zodiark',
    'region': 1,
    'userType': 5,
  },
  '43': {
    'dataCenter': {
      'id': 2,
      'name': 'Gaia',
    },
    'id': 43,
    'internalName': 'Alexander',
    'name': 'Alexander',
    'region': 1,
    'userType': 1,
  },
  '44': {
    'dataCenter': {
      'id': 3,
      'name': 'Mana',
    },
    'id': 44,
    'internalName': 'Anima',
    'name': 'Anima',
    'region': 1,
    'userType': 1,
  },
  '45': {
    'dataCenter': {
      'id': 1,
      'name': 'Elemental',
    },
    'id': 45,
    'internalName': 'Carbuncle',
    'name': 'Carbuncle',
    'region': 1,
    'userType': 1,
  },
  '46': {
    'dataCenter': {
      'id': 2,
      'name': 'Gaia',
    },
    'id': 46,
    'internalName': 'Fenrir',
    'name': 'Fenrir',
    'region': 1,
    'userType': 1,
  },
  '47': {
    'dataCenter': {
      'id': 3,
      'name': 'Mana',
    },
    'id': 47,
    'internalName': 'Hades',
    'name': 'Hades',
    'region': 1,
    'userType': 1,
  },
  '48': {
    'dataCenter': {
      'id': 3,
      'name': 'Mana',
    },
    'id': 48,
    'internalName': 'Ixion',
    'name': 'Ixion',
    'region': 1,
    'userType': 1,
  },
  '49': {
    'dataCenter': {
      'id': 1,
      'name': 'Elemental',
    },
    'id': 49,
    'internalName': 'Kujata',
    'name': 'Kujata',
    'region': 1,
    'userType': 1,
  },
  '50': {
    'dataCenter': {
      'id': 1,
      'name': 'Elemental',
    },
    'id': 50,
    'internalName': 'Typhon',
    'name': 'Typhon',
    'region': 1,
    'userType': 1,
  },
  '51': {
    'dataCenter': {
      'id': 2,
      'name': 'Gaia',
    },
    'id': 51,
    'internalName': 'Ultima',
    'name': 'Ultima',
    'region': 1,
    'userType': 1,
  },
  '52': {
    'dataCenter': {
      'id': 10,
      'name': 'Meteor',
    },
    'id': 52,
    'internalName': 'Valefor',
    'name': 'Valefor',
    'region': 1,
    'userType': 1,
  },
  '53': {
    'dataCenter': {
      'id': 5,
      'name': 'Primal',
    },
    'id': 53,
    'internalName': 'Exodus',
    'name': 'Exodus',
    'region': 1,
    'userType': 3,
  },
  '54': {
    'dataCenter': {
      'id': 4,
      'name': 'Aether',
    },
    'id': 54,
    'internalName': 'Faerie',
    'name': 'Faerie',
    'region': 1,
    'userType': 3,
  },
  '55': {
    'dataCenter': {
      'id': 5,
      'name': 'Primal',
    },
    'id': 55,
    'internalName': 'Lamia',
    'name': 'Lamia',
    'region': 1,
    'userType': 3,
  },
  '56': {
    'dataCenter': {
      'id': 7,
      'name': 'Light',
    },
    'id': 56,
    'internalName': 'Phoenix',
    'name': 'Phoenix',
    'region': 1,
    'userType': 5,
  },
  '57': {
    'dataCenter': {
      'id': 4,
      'name': 'Aether',
    },
    'id': 57,
    'internalName': 'Siren',
    'name': 'Siren',
    'region': 1,
    'userType': 3,
  },
  '58': {
    'dataCenter': {
      'id': 1,
      'name': 'Elemental',
    },
    'id': 58,
    'internalName': 'Garuda',
    'name': 'Garuda',
    'region': 1,
    'userType': 1,
  },
  '59': {
    'dataCenter': {
      'id': 2,
      'name': 'Gaia',
    },
    'id': 59,
    'internalName': 'Ifrit',
    'name': 'Ifrit',
    'region': 1,
    'userType': 1,
  },
  '60': {
    'dataCenter': {
      'id': 10,
      'name': 'Meteor',
    },
    'id': 60,
    'internalName': 'Ramuh',
    'name': 'Ramuh',
    'region': 1,
    'userType': 1,
  },
  '61': {
    'dataCenter': {
      'id': 3,
      'name': 'Mana',
    },
    'id': 61,
    'internalName': 'Titan',
    'name': 'Titan',
    'region': 1,
    'userType': 1,
  },
  '62': {
    'dataCenter': {
      'id': 8,
      'name': 'Crystal',
    },
    'id': 62,
    'internalName': 'Diabolos',
    'name': 'Diabolos',
    'region': 1,
    'userType': 3,
  },
  '63': {
    'dataCenter': {
      'id': 4,
      'name': 'Aether',
    },
    'id': 63,
    'internalName': 'Gilgamesh',
    'name': 'Gilgamesh',
    'region': 1,
    'userType': 3,
  },
  '64': {
    'dataCenter': {
      'id': 5,
      'name': 'Primal',
    },
    'id': 64,
    'internalName': 'Leviathan',
    'name': 'Leviathan',
    'region': 1,
    'userType': 3,
  },
  '65': {
    'dataCenter': {
      'id': 4,
      'name': 'Aether',
    },
    'id': 65,
    'internalName': 'Midgardsormr',
    'name': 'Midgardsormr',
    'region': 1,
    'userType': 3,
  },
  '66': {
    'dataCenter': {
      'id': 7,
      'name': 'Light',
    },
    'id': 66,
    'internalName': 'Odin',
    'name': 'Odin',
    'region': 1,
    'userType': 5,
  },
  '67': {
    'dataCenter': {
      'id': 7,
      'name': 'Light',
    },
    'id': 67,
    'internalName': 'Shiva',
    'name': 'Shiva',
    'region': 1,
    'userType': 5,
  },
  '68': {
    'dataCenter': {
      'id': 1,
      'name': 'Elemental',
    },
    'id': 68,
    'internalName': 'Atomos',
    'name': 'Atomos',
    'region': 1,
    'userType': 1,
  },
  '69': {
    'dataCenter': {
      'id': 2,
      'name': 'Gaia',
    },
    'id': 69,
    'internalName': 'Bahamut',
    'name': 'Bahamut',
    'region': 1,
    'userType': 1,
  },
  '70': {
    'dataCenter': {
      'id': 3,
      'name': 'Mana',
    },
    'id': 70,
    'internalName': 'Chocobo',
    'name': 'Chocobo',
    'region': 1,
    'userType': 1,
  },
  '71': {
    'dataCenter': {
      'id': 6,
      'name': 'Chaos',
    },
    'id': 71,
    'internalName': 'Moogle',
    'name': 'Moogle',
    'region': 1,
    'userType': 5,
  },
  '72': {
    'dataCenter': {
      'id': 1,
      'name': 'Elemental',
    },
    'id': 72,
    'internalName': 'Tonberry',
    'name': 'Tonberry',
    'region': 1,
    'userType': 1,
  },
  '73': {
    'dataCenter': {
      'id': 4,
      'name': 'Aether',
    },
    'id': 73,
    'internalName': 'Adamantoise',
    'name': 'Adamantoise',
    'region': 1,
    'userType': 3,
  },
  '74': {
    'dataCenter': {
      'id': 8,
      'name': 'Crystal',
    },
    'id': 74,
    'internalName': 'Coeurl',
    'name': 'Coeurl',
    'region': 1,
    'userType': 3,
  },
  '75': {
    'dataCenter': {
      'id': 8,
      'name': 'Crystal',
    },
    'id': 75,
    'internalName': 'Malboro',
    'name': 'Malboro',
    'region': 1,
    'userType': 3,
  },
  '76': {
    'dataCenter': {
      'id': 2,
      'name': 'Gaia',
    },
    'id': 76,
    'internalName': 'Tiamat',
    'name': 'Tiamat',
    'region': 1,
    'userType': 1,
  },
  '77': {
    'dataCenter': {
      'id': 5,
      'name': 'Primal',
    },
    'id': 77,
    'internalName': 'Ultros',
    'name': 'Ultros',
    'region': 1,
    'userType': 3,
  },
  '78': {
    'dataCenter': {
      'id': 5,
      'name': 'Primal',
    },
    'id': 78,
    'internalName': 'Behemoth',
    'name': 'Behemoth',
    'region': 1,
    'userType': 3,
  },
  '79': {
    'dataCenter': {
      'id': 4,
      'name': 'Aether',
    },
    'id': 79,
    'internalName': 'Cactuar',
    'name': 'Cactuar',
    'region': 1,
    'userType': 3,
  },
  '80': {
    'dataCenter': {
      'id': 6,
      'name': 'Chaos',
    },
    'id': 80,
    'internalName': 'Cerberus',
    'name': 'Cerberus',
    'region': 1,
    'userType': 5,
  },
  '81': {
    'dataCenter': {
      'id': 8,
      'name': 'Crystal',
    },
    'id': 81,
    'internalName': 'Goblin',
    'name': 'Goblin',
    'region': 1,
    'userType': 3,
  },
  '82': {
    'dataCenter': {
      'id': 10,
      'name': 'Meteor',
    },
    'id': 82,
    'internalName': 'Mandragora',
    'name': 'Mandragora',
    'region': 1,
    'userType': 1,
  },
  '83': {
    'dataCenter': {
      'id': 6,
      'name': 'Chaos',
    },
    'id': 83,
    'internalName': 'Louisoix',
    'name': 'Louisoix',
    'region': 1,
    'userType': 5,
  },
  '85': {
    'dataCenter': {
      'id': 6,
      'name': 'Chaos',
    },
    'id': 85,
    'internalName': 'Spriggan',
    'name': 'Spriggan',
    'region': 1,
    'userType': 5,
  },
  '86': {
    'dataCenter': {
      'id': 9,
      'name': 'Materia',
    },
    'id': 86,
    'internalName': 'Sephirot',
    'name': 'Sephirot',
    'region': 1,
    'userType': 7,
  },
  '87': {
    'dataCenter': {
      'id': 9,
      'name': 'Materia',
    },
    'id': 87,
    'internalName': 'Sophia',
    'name': 'Sophia',
    'region': 1,
    'userType': 7,
  },
  '88': {
    'dataCenter': {
      'id': 9,
      'name': 'Materia',
    },
    'id': 88,
    'internalName': 'Zurvan',
    'name': 'Zurvan',
    'region': 1,
    'userType': 7,
  },
  '90': {
    'dataCenter': {
      'id': 1,
      'name': 'Elemental',
    },
    'id': 90,
    'internalName': 'Aegis',
    'name': 'Aegis',
    'region': 1,
    'userType': 2,
  },
  '91': {
    'dataCenter': {
      'id': 8,
      'name': 'Crystal',
    },
    'id': 91,
    'internalName': 'Balmung',
    'name': 'Balmung',
    'region': 1,
    'userType': 4,
  },
  '92': {
    'dataCenter': {
      'id': 2,
      'name': 'Gaia',
    },
    'id': 92,
    'internalName': 'Durandal',
    'name': 'Durandal',
    'region': 1,
    'userType': 2,
  },
  '93': {
    'dataCenter': {
      'id': 5,
      'name': 'Primal',
    },
    'id': 93,
    'internalName': 'Excalibur',
    'name': 'Excalibur',
    'region': 1,
    'userType': 4,
  },
  '94': {
    'dataCenter': {
      'id': 1,
      'name': 'Elemental',
    },
    'id': 94,
    'internalName': 'Gungnir',
    'name': 'Gungnir',
    'region': 1,
    'userType': 2,
  },
  '95': {
    'dataCenter': {
      'id': 5,
      'name': 'Primal',
    },
    'id': 95,
    'internalName': 'Hyperion',
    'name': 'Hyperion',
    'region': 1,
    'userType': 4,
  },
  '96': {
    'dataCenter': {
      'id': 3,
      'name': 'Mana',
    },
    'id': 96,
    'internalName': 'Masamune',
    'name': 'Masamune',
    'region': 1,
    'userType': 2,
  },
  '97': {
    'dataCenter': {
      'id': 6,
      'name': 'Chaos',
    },
    'id': 97,
    'internalName': 'Ragnarok',
    'name': 'Ragnarok',
    'region': 1,
    'userType': 6,
  },
  '98': {
    'dataCenter': {
      'id': 2,
      'name': 'Gaia',
    },
    'id': 98,
    'internalName': 'Ridill',
    'name': 'Ridill',
    'region': 1,
    'userType': 2,
  },
  '99': {
    'dataCenter': {
      'id': 4,
      'name': 'Aether',
    },
    'id': 99,
    'internalName': 'Sargatanas',
    'name': 'Sargatanas',
    'region': 1,
    'userType': 4,
  },
  '400': {
    'dataCenter': {
      'id': 6,
      'name': 'Chaos',
    },
    'id': 400,
    'internalName': 'Sagittarius',
    'name': 'Sagittarius',
    'region': 1,
    'userType': 5,
  },
  '401': {
    'dataCenter': {
      'id': 6,
      'name': 'Chaos',
    },
    'id': 401,
    'internalName': 'Phantom',
    'name': 'Phantom',
    'region': 1,
    'userType': 5,
  },
  '402': {
    'dataCenter': {
      'id': 7,
      'name': 'Light',
    },
    'id': 402,
    'internalName': 'Alpha',
    'name': 'Alpha',
    'region': 1,
    'userType': 5,
  },
  '403': {
    'dataCenter': {
      'id': 7,
      'name': 'Light',
    },
    'id': 403,
    'internalName': 'Raiden',
    'name': 'Raiden',
    'region': 1,
    'userType': 5,
  },
  '404': {
    'dataCenter': {
      'id': 11,
      'name': 'Dynamis',
    },
    'id': 404,
    'internalName': 'Marilith',
    'name': 'Marilith',
    'region': 1,
    'userType': 3,
  },
  '405': {
    'dataCenter': {
      'id': 11,
      'name': 'Dynamis',
    },
    'id': 405,
    'internalName': 'Seraph',
    'name': 'Seraph',
    'region': 1,
    'userType': 3,
  },
  '406': {
    'dataCenter': {
      'id': 11,
      'name': 'Dynamis',
    },
    'id': 406,
    'internalName': 'Halicarnassus',
    'name': 'Halicarnassus',
    'region': 1,
    'userType': 3,
  },
  '407': {
    'dataCenter': {
      'id': 11,
      'name': 'Dynamis',
    },
    'id': 407,
    'internalName': 'Maduin',
    'name': 'Maduin',
    'region': 1,
    'userType': 3,
  },
  '408': {
    'dataCenter': {
      'id': 11,
      'name': 'Dynamis',
    },
    'id': 408,
    'internalName': 'Cuchulainn',
    'name': 'Cuchulainn',
    'region': 1,
    'userType': 3,
  },
  '409': {
    'dataCenter': {
      'id': 11,
      'name': 'Dynamis',
    },
    'id': 409,
    'internalName': 'Kraken',
    'name': 'Kraken',
    'region': 1,
    'userType': 3,
  },
  '410': {
    'dataCenter': {
      'id': 11,
      'name': 'Dynamis',
    },
    'id': 410,
    'internalName': 'Rafflesia',
    'name': 'Rafflesia',
    'region': 1,
    'userType': 3,
  },
  '411': {
    'dataCenter': {
      'id': 11,
      'name': 'Dynamis',
    },
    'id': 411,
    'internalName': 'Golem',
    'name': 'Golem',
    'region': 1,
    'userType': 3,
  },
  '3000': {
    'dataCenter': {
      'id': 13,
      'name': 'NA Cloud DC (Beta)',
    },
    'id': 3000,
    'internalName': 'Cloudtest01',
    'name': 'Cloudtest01',
    'region': 1,
    'userType': 9,
  },
  '3001': {
    'dataCenter': {
      'id': 13,
      'name': 'NA Cloud DC (Beta)',
    },
    'id': 3001,
    'internalName': 'Cloudtest02',
    'name': 'Cloudtest02',
    'region': 1,
    'userType': 9,
  },
} as const;

export default data;