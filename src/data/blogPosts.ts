// Date pentru blog-uri - în producție vor veni de la API
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  image: string;
  category: string;
  tags: string[];
  slug: string;
  readTime: number;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Cum să alegi fondul de ten perfect pentru tipul tău de piele',
    excerpt: 'Descoperă secretele pentru a găsi fondul de ten ideal care să se potrivească perfect cu tipul tău de piele și să îți ofere un aspect natural și strălucitor.',
    content: `
      <p>Fondul de ten este unul dintre cele mai importante produse de machiaj, fiind baza întregului look. Alegerea celui potrivit poate fi o provocare, dar cu câteva sfaturi simple, vei putea găsi fondul perfect pentru tipul tău de piele.</p>
      
      <h2>Identifică tipul tău de piele</h2>
      <p>Primul pas în alegerea fondului de ten este să identifici tipul tău de piele:</p>
      <ul>
        <li><strong>Piele uscată:</strong> Are nevoie de fonduri cu textură cremoasă și hidratantă</li>
        <li><strong>Piele grasă:</strong> Beneficiază de fonduri matifiante și cu control al sebumului</li>
        <li><strong>Piele mixtă:</strong> Poate folosi fonduri cu acoperire medie și finisaj natural</li>
        <li><strong>Piele sensibilă:</strong> Are nevoie de fonduri hipoalergenice și fără parfum</li>
      </ul>
      
      <h2>Testează nuanța potrivită</h2>
      <p>Pentru a găsi nuanța perfectă, testează fondul pe linia maxilarului, nu pe mână. Nuanța potrivită ar trebui să se "piardă" în piele, fără să fie prea deschisă sau prea închisă.</p>
      
      <h2>Luați în considerare textura</h2>
      <p>Textura fondului de ten depinde de preferințele tale și de ocazie:</p>
      <ul>
        <li><strong>Fonduri lichide:</strong> Perfecte pentru acoperire medie până la completă</li>
        <li><strong>Fonduri în pudră:</strong> Ideale pentru pielea grasă și pentru machiaj rapid</li>
        <li><strong>Fonduri în cremă:</strong> Excelente pentru pielea uscată și pentru acoperire maximă</li>
        <li><strong>Fonduri în stick:</strong> Convenabile pentru aplicare și pentru acoperire medie</li>
      </ul>
      
      <h2>Concluzie</h2>
      <p>Alegerea fondului de ten potrivit este o artă care necesită puțină practică și cunoașterea tipului tău de piele. Nu uita să testezi produsul înainte de cumpărare și să investești în produse de calitate pentru un rezultat profesional.</p>
    `,
    author: 'Elena Popescu',
    publishDate: '2024-01-15',
    image: 'https://via.placeholder.com/400x250?text=Foundation+Guide',
    category: 'Machiaj',
    tags: ['fond de ten', 'machiaj', 'piele', 'beauty'],
    slug: 'cum-sa-alegi-fondul-de-ten-perfect',
    readTime: 5,
    featured: true,
    seoTitle: 'Cum să alegi fondul de ten perfect - Ghid complet Vizaje Nica',
    seoDescription: 'Învață cum să alegi fondul de ten potrivit pentru tipul tău de piele. Ghid complet cu sfaturi de la experți în machiaj.'
  },
  {
    id: '2',
    title: 'Rutina de îngrijire a pielii pentru sezonul rece',
    excerpt: 'Învață cum să îți protejezi și să îți îngrijești pielea în timpul iernii cu această rutină completă de îngrijire.',
    content: 'Conținut complet al articolului...',
    author: 'Maria Ionescu',
    publishDate: '2024-01-10',
    image: 'https://via.placeholder.com/400x250?text=Winter+Skincare',
    category: 'Îngrijire',
    tags: ['îngrijire', 'piele', 'iarnă', 'rutină'],
    slug: 'rutina-ingrijire-piele-sezon-rece',
    readTime: 7,
    featured: true
  },
  {
    id: '3',
    title: 'Top 5 parfumuri pentru femei recomandate de experți',
    excerpt: 'Descoperă cele mai populare și apreciate parfumuri pentru femei, selectate de experții noștri în parfumerie.',
    content: 'Conținut complet al articolului...',
    author: 'Ana Dumitrescu',
    publishDate: '2024-01-08',
    image: 'https://via.placeholder.com/400x250?text=Top+Perfumes',
    category: 'Parfumerie',
    tags: ['parfumuri', 'femei', 'recomandări', 'arome'],
    slug: 'top-5-parfumuri-femei-recomandate',
    readTime: 6
  },
  {
    id: '4',
    title: 'Cum să îți faci machiajul perfect pentru ocazii speciale',
    excerpt: 'Învață pașii esențiali pentru a crea un machiaj elegant și durabil pentru evenimente importante.',
    content: 'Conținut complet al articolului...',
    author: 'Cristina Radu',
    publishDate: '2024-01-05',
    image: 'https://via.placeholder.com/400x250?text=Special+Occasion+Makeup',
    category: 'Machiaj',
    tags: ['machiaj', 'ocazii speciale', 'tutorial', 'beauty'],
    slug: 'machiaj-perfect-ocazii-speciale',
    readTime: 8
  },
  {
    id: '5',
    title: 'Secretele pentru păr sănătos și strălucitor',
    excerpt: 'Descoperă produsele și tehniciile care îți vor transforma părul într-unul sănătos, puternic și strălucitor.',
    content: 'Conținut complet al articolului...',
    author: 'Laura Popa',
    publishDate: '2024-01-03',
    image: 'https://via.placeholder.com/400x250?text=Healthy+Hair',
    category: 'Îngrijirea Părului',
    tags: ['păr', 'îngrijire', 'sănătos', 'strălucitor'],
    slug: 'secretele-par-sanatos-straluitor',
    readTime: 6
  },
  {
    id: '6',
    title: 'Rutina de îngrijire pentru bărbați - Ghid complet',
    excerpt: 'Tot ce trebuie să știi despre îngrijirea pielii pentru bărbați, de la curățare la hidratare.',
    content: 'Conținut complet al articolului...',
    author: 'Alexandru Marin',
    publishDate: '2024-01-01',
    image: 'https://via.placeholder.com/400x250?text=Men+Skincare',
    category: 'Bărbați',
    tags: ['bărbați', 'îngrijire', 'piele', 'rutină'],
    slug: 'rutina-ingrijire-barbati-ghid-complet',
    readTime: 5
  }
];

// Funcții helper pentru email marketing
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Pentru email marketing - generare link-uri
export const generateBlogLink = (slug: string, baseUrl: string = 'https://vizaje-nica-clone.vercel.app'): string => {
  return `${baseUrl}/blog/${slug}`;
};

// Pentru tracking email opens
export const generateEmailTrackingLink = (slug: string, emailId: string, baseUrl: string = 'https://vizaje-nica-clone.vercel.app'): string => {
  return `${baseUrl}/blog/${slug}?utm_source=email&utm_medium=newsletter&utm_campaign=blog&email_id=${emailId}`;
};
