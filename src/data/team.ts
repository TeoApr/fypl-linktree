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
    photo: '../src/assets/nat-soa.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Hibran Aditira',
    role: 'Marketing Communication',
    photo: '../src/assets/hibran-hotel.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Nandya Zahra Armevia',
    role: 'Biotechnology',
    photo: '../src/assets/nandya_foe.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Maura Ancilla Paramaputri',
    role: 'International Relations',
    photo: '../src/assets/ancilla-foh.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Gabriel Felande Aulia',
    role: 'International Business Management',
    photo: '../src/assets/geb.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Jessica Trishya Hendra W',
    role: 'International Business Management GC',
    photo: '../src/assets/jess.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Alysia Kharlotta',
    role: 'Management',
    photo: '../src/assets/alysia-management.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Shaena Fazila Rachman',
    role: 'Global Business Marketing',
    photo: '../src/assets/shae-gbm.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Muhammad Fadhil Habi',
    role: 'Business Creation',
    photo: '../src/assets/fadil-bc.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Jonathan Lin',
    role: 'DKV',
    photo: '../src/assets/jo-dkv.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Vanya Aurelia Budiman',
    role: 'Film',
    photo: '../src/assets/vanya-film.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Vincent',
    role: 'Information System',
    photo: '../src/assets/vin.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Benedictus Bagas Putra H',
    role: 'Information System',
    photo: '../src/assets/bagas.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Juan Ariviano C',
    role: 'Computer Science',
    photo: '../src/assets/juan-socs.png',
    socials: { instagram: '#' },
  },
  {
    name: 'Teo Apriyandi',
    role: 'Computer Science',
    photo: '../src/assets/teo-socs.png',
    socials: { instagram: '#' },
  },
];

export default team; 