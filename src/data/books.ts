export type BookCategory = 
  | 'Business' 
  | 'Self-Improvement' 
  | 'Spirituality' 
  | 'Education' 
  | 'Fiction';

export type BookLanguage = 'Hindi' | 'English';

export interface Book {
  id: string;
  title: string;
  originalTitleHindi?: string;
  author: string;
  category: BookCategory;
  language: BookLanguage;
  year: number | string;
  coverImage?: string;
  fallbackGradient: string;
  accentColor: string;
  description: string;
  shortSummary: string;
  excerpt: string;
  legalStatus: {
    isPublicDomain: boolean;
    licenseName: string;
    rightsExplanation: string;
    permitDownload: boolean;
    permitReadOnline: boolean;
  };
  source: {
    name: string;
    url: string;
    verificationNote: string;
    downloadUrl?: string;
    readOnlineUrl: string;
  };
  pageCount?: number;
  readingTimeMinutes: number;
  tags: string[];
  isDemoContent: boolean;
}

export const CATEGORIES: BookCategory[] = [
  'Fiction',
  'Business',
  'Self-Improvement',
  'Spirituality',
  'Education',
];

export const BOOKS_DATA: Book[] = [
  {
    id: 'godan-munshi-premchand',
    title: 'Godan (गोदान)',
    originalTitleHindi: 'गोदान',
    author: 'Munshi Premchand',
    category: 'Fiction',
    language: 'Hindi',
    year: 1936,
    coverImage: '/src/assets/images/book_cover_godan_1792148187911.jpg',
    fallbackGradient: 'from-amber-900 to-stone-900',
    accentColor: '#B45309',
    shortSummary: 'The magnum opus of Hindi literature portraying the socio-economic realities and resilience of rural India.',
    description: 'Godan (The Gift of a Cow) is celebrated as Munshi Premchand\'s masterpiece and the preeminent epic novel of modern Hindi literature. Set in the 1930s, it tells the poignant story of Hori Mahato, a poor peasant, and his lifelong dream of owning a cow, which serves as a poignant exploration of caste dynamics, rural debt, landlord exploitation, and human dignity.',
    excerpt: `होरी महतो ने दोनों बैलों को सानी-पानी देकर अपनी पत्नी धनिया से कहा—"गोबर को ज़रा भेज देना, मैं लाला पटेश्वरी के पास जा रहा हूँ।"
धनिया बोली—"सुबह-सवेरे ही पटेश्वरी के यहाँ क्यों जा रहे हो? उनका कोई काम तो नहीं है?"
होरी ने पगड़ी बाँधते हुए गंभीर स्वर में कहा—"काहे न जाऊँ धनिया! संसार में रहना है तो आँख-कान खोलकर चलना पड़ता है। किसान की जिंदगी तो एक लगातार तपस्या है, जहाँ सम्मान से जीने के लिए हर दिन संघर्ष करना पड़ता है।"`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (India & Global)',
      rightsExplanation: 'Munshi Premchand passed away in 1936. Under the Indian Copyright Act (Section 22, life plus 60 years rule), all works entered the public domain in 1997. Free to read, print, and distribute worldwide.',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Internet Archive & Hindi Wikisource',
      url: 'https://archive.org/details/godan00prem',
      verificationNote: 'Digitized by Central Secretariat Library of India and public archive mirrors.',
      downloadUrl: 'https://archive.org/download/godan00prem/godan00prem.pdf',
      readOnlineUrl: 'https://hi.wikisource.org/wiki/%E0%A4%97%E0%A5%8B%E0%A4%A6%E0%A4%BE%E0%A4%A8',
    },
    pageCount: 384,
    readingTimeMinutes: 380,
    tags: ['Indian Classics', 'Rural Life', 'Social Realism', 'Munshi Premchand'],
    isDemoContent: true,
  },
  {
    id: 'bhagavad-gita-edwin-arnold',
    title: 'The Song Celestial (Bhagavad Gita)',
    originalTitleHindi: 'श्रीमद्भगवद्गीता',
    author: 'Sir Edwin Arnold (Translator)',
    category: 'Spirituality',
    language: 'English',
    year: 1885,
    coverImage: '/src/assets/images/book_cover_gita_1792148189210.jpg',
    fallbackGradient: 'from-blue-950 to-slate-900',
    accentColor: '#1E3A8A',
    shortSummary: 'The timeless spiritual conversation between Krishna and Arjuna on duty, purpose, and inner mastery.',
    description: 'Sir Edwin Arnold\'s 1885 poetic translation rendered the philosophical crown jewel of the Mahabharata into luminous English blank verse. Highly cherished by Mahatma Gandhi, this edition explores the concepts of Nishkama Karma (selfless action), devotion, knowledge, and triumph over inner doubt.',
    excerpt: `Never the spirit was born; the spirit shall cease to be never;
Never was time it was not; End and Beginning are dreams!
Birthless and deathless and changeless remaineth the spirit for ever;
Death hath not touched it at all, dead though the house of it seems!

You have a right to your labors, Arjuna, but never to the fruits thereof. Let not the fruit of action be your motive to work; neither let there be in you any attachment to inactivity.`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (Worldwide)',
      rightsExplanation: 'Sir Edwin Arnold died in 1904. Published originally in 1885, this work is in the public domain in the United States and all territories where copyright term is life of author + 70 years or 95 years from publication.',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/2388',
      verificationNote: 'Project Gutenberg EBook #2388. Released freely for public access.',
      downloadUrl: 'https://www.gutenberg.org/ebooks/2388.epub3.images',
      readOnlineUrl: 'https://www.gutenberg.org/files/2388/2388-h/2388-h.htm',
    },
    pageCount: 168,
    readingTimeMinutes: 140,
    tags: ['Philosophy', 'Yoga', 'Vedas', 'Meditation', 'Duty'],
    isDemoContent: true,
  },
  {
    id: 'think-and-grow-rich-1937',
    title: 'Think and Grow Rich (Original 1937 Edition)',
    author: 'Napoleon Hill',
    category: 'Business',
    language: 'English',
    year: 1937,
    coverImage: '/src/assets/images/book_cover_think_rich_1792148188236.jpg',
    fallbackGradient: 'from-emerald-950 to-stone-900',
    accentColor: '#065F46',
    shortSummary: 'The foundational classic on entrepreneurial mindset, definite major purpose, and persistence.',
    description: 'Napoleon Hill spent over 20 years interviewing 500 self-made achievers including Andrew Carnegie, Henry Ford, and Thomas Edison to distill the philosophy of personal achievement. The original 1937 first edition outlines 13 principles of success centered on desire, faith, organized planning, and the Master Mind concept.',
    excerpt: `Truly, "thoughts are things," and powerful things at that, when they are mixed with definiteness of purpose, persistence, and a BURNING DESIRE for their translation into riches, or other material objects.

A little more than thirty years ago, Edwin C. Barnes discovered how true it is that men really do THINK AND GROW RICH. His discovery did not come about at one sitting. It came little by little, beginning with a BURNING DESIRE to become a business associate of the great Thomas A. Edison.`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (US Original 1937 Edition)',
      rightsExplanation: 'The original 1937 edition published by The Ralston Society was never renewed with the US Copyright Office under the pre-1978 renewal statute, placing the original text in the public domain. (Note: subsequent edited commercial versions with fresh material remain protected).',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Internet Archive Open Library',
      url: 'https://archive.org/details/Think_and_Grow_Rich',
      verificationNote: 'Verified original 1937 copyright expiration document archived on archive.org.',
      downloadUrl: 'https://archive.org/download/Think_and_Grow_Rich/Think_and_Grow_Rich.pdf',
      readOnlineUrl: 'https://archive.org/stream/Think_and_Grow_Rich#page/n1/mode/2up',
    },
    pageCount: 238,
    readingTimeMinutes: 240,
    tags: ['Entrepreneurship', 'Goal Setting', 'Productivity', 'Mindset'],
    isDemoContent: true,
  },
  {
    id: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    category: 'Fiction',
    language: 'English',
    year: 1813,
    coverImage: '/src/assets/images/book_cover_pride_1792148204658.jpg',
    fallbackGradient: 'from-amber-900 to-rose-950',
    accentColor: '#881337',
    shortSummary: 'Jane Austen’s witty masterpiece examining social class, family, first impressions, and love.',
    description: 'One of the most beloved novels in the English language, Pride and Prejudice chronicles the tempestuous relationship between Elizabeth Bennet, the spirited daughter of an English country gentleman, and Fitzwilliam Darcy, a wealthy aristocratic landowner. A sharp, brilliant satire on societal expectations, marriage, and emotional maturation.',
    excerpt: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.

"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (Worldwide)',
      rightsExplanation: 'First published in London in 1813. Jane Austen passed away in 1817. Works are universally free from copyright restrictions in every jurisdiction on Earth.',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Standard Ebooks & Project Gutenberg',
      url: 'https://standardebooks.org/ebooks/jane-austen/pride-and-prejudice',
      verificationNote: 'Standard Ebooks edition proofread against original typography and formatting.',
      downloadUrl: 'https://standardebooks.org/ebooks/jane-austen/pride-and-prejudice/downloads/jane-austen_pride-and-prejudice.epub',
      readOnlineUrl: 'https://www.gutenberg.org/files/1342/1342-h/1342-h.htm',
    },
    pageCount: 368,
    readingTimeMinutes: 360,
    tags: ['Classic Literature', 'Romance', 'British Regency', 'Social Satire'],
    isDemoContent: true,
  },
  {
    id: 'democracy-and-education',
    title: 'Democracy and Education',
    author: 'John Dewey',
    category: 'Education',
    language: 'English',
    year: 1916,
    coverImage: '/src/assets/images/book_cover_education_1792148205228.jpg',
    fallbackGradient: 'from-red-950 to-stone-900',
    accentColor: '#7F1D1D',
    shortSummary: 'An introduction to the philosophy of progressive education and democratic social engagement.',
    description: 'John Dewey\'s seminal treatise argues that the primary purpose of schooling is not merely the transmission of static facts, but cultivating inquiring, empathetic citizens capable of democratic self-governance. Dewey emphasizes experiential learning, critical thinking, and social continuity.',
    excerpt: `The most notable distinction between living and inanimate things is that the former maintain themselves by renewal. A stone when struck resists. If its resistance is greater than the force of the blow struck, it remains outwardly unchanged. Otherwise, it is shattered into smaller bits.

Education, in its broadest sense, is the means of this social continuity of life. Every one of the constituent elements of a social group, in a modern city as in a savage tribe, is born immature, helpless, without language, beliefs, ideas, or social standards. By education, society renews its capacity for freedom.`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (Pre-1928 Publication)',
      rightsExplanation: 'Published in 1916 by The Macmillan Company. In the United States, all works published before January 1, 1928 are in the public domain. Dewey passed away in 1952.',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/852',
      verificationNote: 'Project Gutenberg EBook #852. Cleared for educational dissemination.',
      downloadUrl: 'https://www.gutenberg.org/ebooks/852.epub3.images',
      readOnlineUrl: 'https://www.gutenberg.org/files/852/852-h/852-h.htm',
    },
    pageCount: 434,
    readingTimeMinutes: 420,
    tags: ['Pedagogy', 'Philosophy', 'Democracy', 'Critical Thinking'],
    isDemoContent: true,
  },
  {
    id: 'as-a-man-thinketh',
    title: 'As a Man Thinketh',
    author: 'James Allen',
    category: 'Self-Improvement',
    language: 'English',
    year: 1903,
    fallbackGradient: 'from-teal-950 to-slate-900',
    accentColor: '#115E59',
    shortSummary: 'The timeless essay on how thoughts shape character, health, circumstances, and destiny.',
    description: 'A cornerstone of self-help literature, this succinct volume demonstrates how the mind is like a garden: cultivated intentionally, it bears wholesome fruits; neglected, it grows wild weeds. Allen outlines the direct causal link between internal thought discipline and external achievement.',
    excerpt: `A man is literally what he thinks, his character being the complete sum of all his thoughts.

As the plant springs from, and could not be without, the seed, so every act of a man springs from the hidden seeds of thought, and could not have appeared without them. This applies equally to those acts called "spontaneous" and "unpremeditated" as to those which are deliberately executed.

Mind is the Master power that moulds and makes,
And Man is Mind, and evermore he takes
The tool of Thought, and, shaping what he wills,
Brings forth a thousand joys, a thousand ills.`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (Worldwide)',
      rightsExplanation: 'Published in 1903. James Allen died in 1912. Unencumbered by any copyright restrictions worldwide.',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/4507',
      verificationNote: 'Project Gutenberg EBook #4507. Free public domain text and ePub.',
      downloadUrl: 'https://www.gutenberg.org/ebooks/4507.epub3.images',
      readOnlineUrl: 'https://www.gutenberg.org/files/4507/4507-h/4507-h.htm',
    },
    pageCount: 84,
    readingTimeMinutes: 75,
    tags: ['Mindset', 'Character', 'Stoicism', 'Personal Development'],
    isDemoContent: true,
  },
  {
    id: 'gitanjali-tagore',
    title: 'Gitanjali: Song Offerings (गीतांजलि)',
    originalTitleHindi: 'गीतांजलि',
    author: 'Rabindranath Tagore',
    category: 'Spirituality',
    language: 'Hindi',
    year: 1912,
    fallbackGradient: 'from-orange-950 to-amber-950',
    accentColor: '#9A3412',
    shortSummary: 'The Nobel Prize-winning collection of devotional, mystical, and humanist verses.',
    description: 'Rabindranath Tagore made history in 1913 as the first non-European to win the Nobel Prize in Literature for Gitanjali. These lyrical poems offer a personal prayer to the divine, celebrating nature, inner light, human humility, and spiritual liberation without ritual dogmatism.',
    excerpt: `जहाँ चित्त भय-शून्य हो, जहाँ शीर्ष गर्व से उन्नत हो;
जहाँ ज्ञान मुक्त हो;
जहाँ संसार संकीर्ण घरेलू दीवारों से खंड-खंड न हुआ हो;
जहाँ शब्द सत्य की गहराई से निकलते हों;
जहाँ अथक प्रयास अपनी बाहें पूर्णता की ओर फैलाता हो;
उस स्वतंत्रता के स्वर्ग में, हे मेरे परमात्मा, मेरे देश को जगाओ।`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (India & Global)',
      rightsExplanation: 'Rabindranath Tagore passed away in 1941. In India, copyright expired in 2001 (60 years post-mortem under Indian law). The English edition translated by Tagore (1912) is also in the public domain globally.',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Wikisource & Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/7164',
      verificationNote: 'Project Gutenberg EBook #7164 with W.B. Yeats introduction.',
      downloadUrl: 'https://www.gutenberg.org/ebooks/7164.epub3.images',
      readOnlineUrl: 'https://hi.wikisource.org/wiki/%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BE%E0%A4%82%E0%A4%9C%E0%A4%B2%E0%A4%BF',
    },
    pageCount: 140,
    readingTimeMinutes: 120,
    tags: ['Nobel Laureate', 'Poetry', 'Mysticism', 'Spiritual Awakening'],
    isDemoContent: true,
  },
  {
    id: 'the-science-of-getting-rich',
    title: 'The Science of Getting Rich',
    author: 'Wallace D. Wattles',
    category: 'Business',
    language: 'English',
    year: 1910,
    fallbackGradient: 'from-amber-950 to-yellow-950',
    accentColor: '#78350F',
    shortSummary: 'A practical, non-philosophical guide to value creation, creative thought, and constructive action.',
    description: 'First published in 1910, this concise guide was the inspiration behind modern concepts of abundant mindset and intentional value delivery. Wattles stresses that true financial growth comes from the creative realm rather than cutthroat competitive destruction, urging readers to create more in use value than they take in cash value.',
    excerpt: `Whatever may be said in praise of poverty, the fact remains that it is not possible to live a really complete or successful life unless one is rich. No man can rise to his greatest possible height in talent or soul development unless he has plenty of money; for to unfold the soul and to develop talent he must have many things to use, and he cannot have these things unless he has money to buy them with.

You are to become a creator, not a competitor; you are going to get what you want, but in such a way that when you get it every other man will have more than he has now.`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (Worldwide)',
      rightsExplanation: 'Published in 1910 by The Elizabeth Towne Company. Wallace Wattles died in 1911. The book has been in the public domain for over a century.',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/39855',
      verificationNote: 'Project Gutenberg EBook #39855. Verified legal text.',
      downloadUrl: 'https://www.gutenberg.org/ebooks/39855.epub3.images',
      readOnlineUrl: 'https://www.gutenberg.org/files/39855/39855-h/39855-h.htm',
    },
    pageCount: 128,
    readingTimeMinutes: 110,
    tags: ['Economics', 'Abundance', 'Value Creation', 'Early 20th Century'],
    isDemoContent: true,
  },
  {
    id: 'karmabhoomi-premchand',
    title: 'Karmabhoomi (कर्मभूमि)',
    originalTitleHindi: 'कर्मभूमि',
    author: 'Munshi Premchand',
    category: 'Education',
    language: 'Hindi',
    year: 1932,
    fallbackGradient: 'from-stone-900 to-amber-950',
    accentColor: '#57534E',
    shortSummary: 'A gripping exploration of education, youth idealism, civic duty, and social reform.',
    description: 'Set during India\'s nationalist movement, Karmabhoomi examines the moral awakening of youth through education. The protagonist Amarkant transforms from a restless, cynical student into a courageous grassroots community organizer advocating for the landless, untouchables, and rural schools.',
    excerpt: `अमरकान्त कॉलेज के जीवन से ऊब चुका था। वह सोचता था कि किताबों में लिखी बातें और जीवन की कठोर सच्चाइयों में कितना अंतर है! जिस शिक्षा से मनुष्य के भीतर अन्याय सहने का साहस तो आ जाए, लेकिन अन्याय से लड़ने का संकल्प न जागे, वह शिक्षा किस काम की?

उसने अपनी माँ से कहा—"माँ, मैं अब गाँव जाऊंगा। वहाँ के बच्चों को पढ़ाना और उनके हक के लिए खड़ा होना ही मेरा असली इम्तिहान है।"`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (India & Global)',
      rightsExplanation: 'Munshi Premchand died in 1936. Public domain in India since 1997. Freely available on National Digital Library and Wikisource.',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Hindi Wikisource & Archive',
      url: 'https://hi.wikisource.org/wiki/%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%AD%E0%A5%82%E0%A4%AE%E0%A4%BF',
      verificationNote: 'Archived under open public cultural preservation initiative.',
      downloadUrl: 'https://archive.org/download/in.ernet.dli.2015.344445/2015.344445.Karmbhumi.pdf',
      readOnlineUrl: 'https://hi.wikisource.org/wiki/%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%AD%E0%A5%82%E0%A4%AE%E0%A4%BF',
    },
    pageCount: 350,
    readingTimeMinutes: 340,
    tags: ['Youth Education', 'National Awakening', 'Civic Action', 'Premchand'],
    isDemoContent: true,
  },
  {
    id: 'panchatantra-vishnu-sharma',
    title: 'Panchatantra: Moral Fables (पंचतंत्र)',
    originalTitleHindi: 'पंचतंत्र',
    author: 'Pandit Vishnu Sharma',
    category: 'Self-Improvement',
    language: 'Hindi',
    year: 'c. 300 BCE',
    fallbackGradient: 'from-emerald-950 to-teal-950',
    accentColor: '#047857',
    shortSummary: 'Ancient pragmatic allegories on diplomacy, leadership, friendship, and practical intelligence.',
    description: 'Composed over two millennia ago to educate three wayward princes in the art of wise living and statecraft, the Panchatantra remains the world\'s most translated story collection. Divided into five tantras (principles): Mitra-bheda, Mitra-labha, Kakolukiyam, Labdhapranasam, and Apariksitakarakam.',
    excerpt: `विद्वानों का कथन है कि शस्त्र और शास्त्र दोनों ही उपयोगी हैं, परंतु शास्त्र रूपी बुद्धि शस्त्र से कहीं अधिक बलवती है। बुद्धिमान व्यक्ति अपनी चतुरता से उस संकट से भी पार पा लेता है जिसे कोई पराक्रमी योद्धा भी नहीं सुलझा सकता।

सच्चा मित्र वही है जो संकट के समय, विपत्ति में, दुर्भिक्ष में और राजदरबार में भी साथ न छोड़े।`,
    legalStatus: {
      isPublicDomain: true,
      licenseName: 'Public Domain (Ancient Heritage)',
      rightsExplanation: 'Ancient classical Indian text from the 3rd century BCE, universally in the public domain worldwide. Translations and adaptations based on public domain manuscripts.',
      permitDownload: true,
      permitReadOnline: true,
    },
    source: {
      name: 'Wikisource & Open Digital Archive',
      url: 'https://archive.org/details/panchatantra0000unse',
      verificationNote: 'Public domain classical Sanskrit and Hindi translation archive.',
      downloadUrl: 'https://archive.org/download/panchatantra0000unse/panchatantra0000unse.pdf',
      readOnlineUrl: 'https://hi.wikisource.org/wiki/%E0%A4%AA%E0%A4%82%E0%A4%9A%E0%A4%A4%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0',
    },
    pageCount: 220,
    readingTimeMinutes: 200,
    tags: ['Ancient Fables', 'Wisdom', 'Strategy', 'Life Skills'],
    isDemoContent: true,
  }
];
