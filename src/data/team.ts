// Import all team member images
import natSoa from '../assets/nat-soa.png';
import hibranHotel from '../assets/hibran-hotel.png';
import nandyaFoe from '../assets/nandya_foe.png';
import ancillaFoh from '../assets/ancilla-foh.png';
import geb from '../assets/geb.png';
import jess from '../assets/jess.png';
import alysiaManagement from '../assets/alysia-management.png';
import shaeGbm from '../assets/shae-gbm.png';
import fadilBc from '../assets/fadil-bc.png';
import joDkv from '../assets/jo-dkv.png';
import vanyaFilm from '../assets/vanya-film.png';
import vin from '../assets/vin.png';
import bagas from '../assets/bagas.png';
import juanSocs from '../assets/juan-socs.png';
import teoSocs from '../assets/teo-socs.png';

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  socials: {
    linkedin?: string;
    instagram?: string;
  };
}

// To use your own images, replace the 'photo' URL with your asset path, e.g. '/assets/your-image.jpg'
const team: TeamMember[] = [
  {
    name: 'Nathalie Audrey Christabel Gultom',
    role: 'Accounting',
    photo: natSoa,
    socials: { instagram: '#' },
  },
  {
    name: 'Hibran Aditira',
    role: 'Marketing Communication',
    photo: hibranHotel,
    socials: { instagram: '#' },
  },
  {
    name: 'Nandya Zahra Armevia',
    role: 'Biotechnology',
    photo: nandyaFoe,
    socials: { instagram: '#' },
  },
  {
    name: 'Maura Ancilla Paramaputri',
    role: 'International Relations',
    photo: ancillaFoh,
    socials: { instagram: '#' },
  },
  {
    name: 'Gabriel Felande Aulia',
    role: 'International Business Management',
    photo: geb,
    socials: { instagram: '#' },
  },
  {
    name: 'Jessica Trishya Hendra W',
    role: 'International Business Management GC',
    photo: jess,
    socials: { instagram: '#' },
  },
  {
    name: 'Alysia Kharlotta',
    role: 'Management',
    photo: alysiaManagement,
    socials: { instagram: '#' },
  },
  {
    name: 'Shaena Fazila Rachman',
    role: 'Global Business Marketing',
    photo: shaeGbm,
    socials: { instagram: '#' },
  },
  {
    name: 'Muhammad Fadhil Habi',
    role: 'Business Creation',
    photo: fadilBc,
    socials: { instagram: '#' },
  },
  {
    name: 'Jonathan Lin',
    role: 'DKV',
    photo: joDkv,
    socials: { instagram: '#' },
  },
  {
    name: 'Vanya Aurelia Budiman',
    role: 'Film',
    photo: vanyaFilm,
    socials: { instagram: '#' },
  },
  {
    name: 'Vincent',
    role: 'Information System',
    photo: vin,
    socials: { instagram: '#' },
  },
  {
    name: 'Benedictus Bagas Putra H',
    role: 'Information System',
    photo: bagas,
    socials: { instagram: '#' },
  },
  {
    name: 'Juan Ariviano C',
    role: 'Computer Science',
    photo: juanSocs,
    socials: { instagram: '#' },
  },
  {
    name: 'Teo Apriyandi',
    role: 'Computer Science',
    photo: teoSocs,
    socials: { instagram: '#' },
  },
];

export default team; 