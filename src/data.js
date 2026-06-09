
// ============================================================
// DATA
// ============================================================
export const VOCAB = [
  // ALLAH & NAMES
  {ar:"اللَّه",tr:"Allah",en:"Allah (God)",ur:"اللہ",cat:"Allah",freq:100},
  {ar:"رَبّ",tr:"Rabb",en:"Lord / Sustainer",ur:"رب، پالنے والا",cat:"Allah",freq:98},
  {ar:"رَحْمَن",tr:"Rahman",en:"The Most Gracious",ur:"بہت مہربان",cat:"Allah",freq:95},
  {ar:"رَحِيم",tr:"Raheem",en:"The Most Merciful",ur:"بڑا رحم کرنے والا",cat:"Allah",freq:95},
  {ar:"مَلِك",tr:"Malik",en:"King / Owner",ur:"بادشاہ، مالک",cat:"Allah",freq:85},
  {ar:"عَلِيم",tr:"Aleem",en:"All-Knowing",ur:"سب جاننے والا",cat:"Allah",freq:88},
  {ar:"قَدِير",tr:"Qadeer",en:"All-Powerful",ur:"ہر چیز پر قادر",cat:"Allah",freq:82},
  {ar:"سَمِيع",tr:"Samee",en:"All-Hearing",ur:"سب سننے والا",cat:"Allah",freq:80},
  {ar:"بَصِير",tr:"Baseer",en:"All-Seeing",ur:"سب دیکھنے والا",cat:"Allah",freq:79},
  {ar:"غَفُور",tr:"Ghafoor",en:"Most Forgiving",ur:"بہت بخشنے والا",cat:"Allah",freq:84},
  {ar:"حَكِيم",tr:"Hakeem",en:"All-Wise",ur:"بڑا حکمت والا",cat:"Allah",freq:83},
  {ar:"وَاحِد",tr:"Wahid",en:"The One",ur:"ایک، یکتا",cat:"Allah",freq:70},
  {ar:"أَحَد",tr:"Ahad",en:"The Unique One",ur:"یکتا، اکیلا",cat:"Allah",freq:65},
  {ar:"الصَّمَد",tr:"As-Samad",en:"The Eternal",ur:"بے نیاز",cat:"Allah",freq:60},

  // PRONOUNS
  {ar:"هُوَ",tr:"Huwa",en:"He",ur:"وہ (مذکر)",cat:"pronoun",freq:92},
  {ar:"هِيَ",tr:"Hiya",en:"She / It",ur:"وہ (مؤنث)",cat:"pronoun",freq:75},
  {ar:"أَنْتَ",tr:"Anta",en:"You (masculine)",ur:"تم (مذکر)",cat:"pronoun",freq:80},
  {ar:"أَنَا",tr:"Ana",en:"I",ur:"میں",cat:"pronoun",freq:82},
  {ar:"نَحْنُ",tr:"Nahnu",en:"We",ur:"ہم",cat:"pronoun",freq:88},
  {ar:"هُمْ",tr:"Hum",en:"They",ur:"وہ (جمع)",cat:"pronoun",freq:87},
  {ar:"هُمَا",tr:"Huma",en:"They two",ur:"وہ دونوں",cat:"pronoun",freq:60},
  {ar:"أَنْتُمْ",tr:"Antum",en:"You (plural)",ur:"تم سب",cat:"pronoun",freq:72},

  // HIGH FREQUENCY PARTICLES
  {ar:"وَ",tr:"Wa",en:"And",ur:"اور",cat:"particle",freq:100},
  {ar:"فِي",tr:"Fee",en:"In / Inside",ur:"میں، اندر",cat:"particle",freq:99},
  {ar:"مِنْ",tr:"Min",en:"From / Of",ur:"سے، میں سے",cat:"particle",freq:100},
  {ar:"إِلَى",tr:"Ila",en:"To / Towards",ur:"کی طرف",cat:"particle",freq:97},
  {ar:"عَلَى",tr:"Ala",en:"On / Upon",ur:"پر، اوپر",cat:"particle",freq:98},
  {ar:"لَا",tr:"La",en:"No / Not",ur:"نہیں",cat:"particle",freq:100},
  {ar:"إِنَّ",tr:"Inna",en:"Indeed / Verily",ur:"بیشک",cat:"particle",freq:98},
  {ar:"الَّذِي",tr:"Alladhi",en:"Who / Which (he)",ur:"جو، وہ جو",cat:"particle",freq:93},
  {ar:"الَّذِينَ",tr:"Alladheen",en:"Those who",ur:"جو لوگ",cat:"particle",freq:93},
  {ar:"مَا",tr:"Ma",en:"What / That which / Not",ur:"جو، کیا، نہیں",cat:"particle",freq:100},
  {ar:"لِ",tr:"Li",en:"For / To",ur:"کے لیے",cat:"particle",freq:97},
  {ar:"بِ",tr:"Bi",en:"By / With",ur:"سے، کے ساتھ",cat:"particle",freq:97},
  {ar:"قَدْ",tr:"Qad",en:"Indeed / Already",ur:"تحقیق، پہلے ہی",cat:"particle",freq:89},
  {ar:"إِذَا",tr:"Idha",en:"When / If",ur:"جب",cat:"particle",freq:85},
  {ar:"أَوْ",tr:"Aw",en:"Or",ur:"یا",cat:"particle",freq:88},
  {ar:"كَ",tr:"Ka",en:"Like / As",ur:"جیسا، کی طرح",cat:"particle",freq:87},
  {ar:"ثُمَّ",tr:"Thumma",en:"Then / After that",ur:"پھر، اس کے بعد",cat:"particle",freq:85},
  {ar:"حَتَّى",tr:"Hatta",en:"Until / So that",ur:"یہاں تک کہ",cat:"particle",freq:80},
  {ar:"إِنْ",tr:"In",en:"If",ur:"اگر",cat:"particle",freq:87},
  {ar:"لَمْ",tr:"Lam",en:"Did not (past neg.)",ur:"نہیں کیا",cat:"particle",freq:82},

  // KEY NOUNS
  {ar:"يَوْم",tr:"Yawm",en:"Day",ur:"دن",cat:"noun",freq:90},
  {ar:"نَاس",tr:"Nas",en:"People / Mankind",ur:"لوگ، انسان",cat:"noun",freq:92},
  {ar:"أَرْض",tr:"Ard",en:"Earth / Land",ur:"زمین",cat:"noun",freq:89},
  {ar:"سَمَاء",tr:"Sama",en:"Sky / Heaven",ur:"آسمان",cat:"noun",freq:86},
  {ar:"نَفْس",tr:"Nafs",en:"Soul / Self / Person",ur:"روح، آپ، جان",cat:"noun",freq:87},
  {ar:"قَلْب",tr:"Qalb",en:"Heart",ur:"دل",cat:"noun",freq:82},
  {ar:"عِلْم",tr:"Ilm",en:"Knowledge",ur:"علم، جانکاری",cat:"noun",freq:83},
  {ar:"كِتَاب",tr:"Kitab",en:"Book / Scripture",ur:"کتاب",cat:"noun",freq:82},
  {ar:"أَمْر",tr:"Amr",en:"Command / Matter",ur:"حکم، معاملہ",cat:"noun",freq:85},
  {ar:"خَيْر",tr:"Khayr",en:"Good / Goodness",ur:"خیر، بھلائی",cat:"noun",freq:84},
  {ar:"رَحْمَة",tr:"Rahma",en:"Mercy / Compassion",ur:"رحمت، مہربانی",cat:"noun",freq:83},
  {ar:"حَقّ",tr:"Haqq",en:"Truth / Right",ur:"حق، سچ",cat:"noun",freq:80},
  {ar:"دِين",tr:"Deen",en:"Religion / Way of life",ur:"دین، مذہب",cat:"noun",freq:78},
  {ar:"صَلَاة",tr:"Salah",en:"Prayer",ur:"نماز",cat:"dua",freq:75},
  {ar:"حَمْد",tr:"Hamd",en:"Praise",ur:"تعریف، حمد",cat:"dua",freq:76},
  {ar:"نِعْمَة",tr:"Nimah",en:"Blessing / Favor",ur:"نعمت، انعام",cat:"noun",freq:74},
  {ar:"عَذَاب",tr:"Adhab",en:"Punishment / Torment",ur:"عذاب، سزا",cat:"jannah",freq:73},
  {ar:"جَنَّة",tr:"Jannah",en:"Paradise / Garden",ur:"جنت، باغ",cat:"jannah",freq:75},
  {ar:"نَار",tr:"Naar",en:"Fire / Hell",ur:"آگ، جہنم",cat:"jannah",freq:74},
  {ar:"آخِرَة",tr:"Akhira",en:"Hereafter",ur:"آخرت",cat:"jannah",freq:72},
  {ar:"دُنْيَا",tr:"Dunya",en:"This world",ur:"دنیا",cat:"noun",freq:73},
  {ar:"عَمَل",tr:"Amal",en:"Deed / Action",ur:"عمل، کام",cat:"noun",freq:72},
  {ar:"مُؤْمِن",tr:"Mumin",en:"Believer",ur:"مومن، ایمان والا",cat:"noun",freq:78},
  {ar:"كَافِر",tr:"Kafir",en:"Disbeliever",ur:"کافر، منکر",cat:"noun",freq:72},
  {ar:"ظَالِم",tr:"Zalim",en:"Wrongdoer / Oppressor",ur:"ظالم",cat:"noun",freq:71},
  {ar:"صَالِح",tr:"Salih",en:"Righteous",ur:"نیک، صالح",cat:"noun",freq:72},
  {ar:"فَسَاد",tr:"Fasad",en:"Corruption",ur:"فساد، بگاڑ",cat:"noun",freq:68},
  {ar:"هُدَى",tr:"Huda",en:"Guidance",ur:"ہدایت",cat:"noun",freq:76},
  {ar:"نُور",tr:"Nur",en:"Light",ur:"نور، روشنی",cat:"noun",freq:74},
  {ar:"ظُلُمَات",tr:"Zulumat",en:"Darkness",ur:"اندھیرا",cat:"noun",freq:70},

  // VERBS
  {ar:"قَالَ",tr:"Qaala",en:"He said",ur:"اس نے کہا",cat:"verb",freq:95},
  {ar:"خَلَقَ",tr:"Khalaqa",en:"He created",ur:"اس نے بنایا",cat:"verb",freq:86},
  {ar:"آمَنَ",tr:"Aamana",en:"He believed",ur:"وہ ایمان لایا",cat:"verb",freq:88},
  {ar:"كَفَرَ",tr:"Kafara",en:"He disbelieved",ur:"اس نے انکار کیا",cat:"verb",freq:80},
  {ar:"عَمِلَ",tr:"Amila",en:"He did / worked",ur:"اس نے کیا",cat:"verb",freq:82},
  {ar:"يَعْلَمُ",tr:"Yalamu",en:"He knows",ur:"وہ جانتا ہے",cat:"verb",freq:89},
  {ar:"يَشَاءُ",tr:"Yasha",en:"He wills",ur:"وہ چاہتا ہے",cat:"verb",freq:83},
  {ar:"جَاءَ",tr:"Jaa",en:"He came",ur:"وہ آیا",cat:"verb",freq:85},
  {ar:"رَجَعَ",tr:"Rajaa",en:"He returned",ur:"وہ واپس آیا",cat:"verb",freq:72},
  {ar:"أَرْسَلَ",tr:"Arsala",en:"He sent",ur:"اس نے بھیجا",cat:"verb",freq:82},
  {ar:"هَدَى",tr:"Hada",en:"He guided",ur:"اس نے ہدایت دی",cat:"verb",freq:76},
  {ar:"تَابَ",tr:"Taba",en:"He repented",ur:"اس نے توبہ کی",cat:"verb",freq:74},
  {ar:"نَزَلَ",tr:"Nazala",en:"He/it came down",ur:"اترا، نازل ہوا",cat:"verb",freq:78},
  {ar:"دَعَا",tr:"Daaa",en:"He called / prayed",ur:"اس نے دعا کی",cat:"verb",freq:77},
  {ar:"اتَّقَى",tr:"Ittaqa",en:"He feared (Allah)",ur:"اس نے تقوٰی اختیار کیا",cat:"verb",freq:80},

  // DUA & PRAYER
  {ar:"بِسْمِ اللَّه",tr:"Bismillah",en:"In the name of Allah",ur:"اللہ کے نام سے",cat:"dua",freq:100},
  {ar:"اَلْحَمْدُ لِلَّه",tr:"Alhamdulillah",en:"All praise is for Allah",ur:"تمام تعریف اللہ کے لیے",cat:"dua",freq:100},
  {ar:"سُبْحَانَ اللَّه",tr:"Subhanallah",en:"Glory be to Allah",ur:"اللہ پاک ہے",cat:"dua",freq:95},
  {ar:"اللَّهُ أَكْبَر",tr:"Allahu Akbar",en:"Allah is the Greatest",ur:"اللہ سب سے بڑا ہے",cat:"dua",freq:98},
  {ar:"إِيَّاكَ",tr:"Iyyaka",en:"You alone",ur:"تجھ ہی کو",cat:"dua",freq:85},
  {ar:"نَعْبُد",tr:"Nabudu",en:"We worship",ur:"ہم عبادت کرتے ہیں",cat:"dua",freq:82},
  {ar:"نَسْتَعِين",tr:"Nastaeen",en:"We seek help",ur:"ہم مدد مانگتے ہیں",cat:"dua",freq:80},
  {ar:"اهْدِنَا",tr:"Ihdina",en:"Guide us",ur:"ہمیں ہدایت دے",cat:"dua",freq:82},
  {ar:"تَوَكَّلْت",tr:"Tawakkaltu",en:"I put my trust",ur:"میں نے بھروسہ کیا",cat:"dua",freq:70},
  {ar:"آمِين",tr:"Ameen",en:"So be it / Amen",ur:"آمین",cat:"dua",freq:80},

  // JANNAH/JAHANNAM
  {ar:"جَهَنَّم",tr:"Jahannam",en:"Hell",ur:"جہنم",cat:"jannah",freq:72},
  {ar:"أَصْحَاب الجَنَّة",tr:"Ashaab al-Janna",en:"People of Paradise",ur:"جنت والے",cat:"jannah",freq:68},
  {ar:"فَوْز",tr:"Fawz",en:"Success / Triumph",ur:"کامیابی",cat:"jannah",freq:70},
  {ar:"خُلُود",tr:"Khulood",en:"Eternity / Forever",ur:"ہمیشگی",cat:"jannah",freq:68},
  {ar:"رِضْوَان",tr:"Ridwan",en:"Pleasure / Approval",ur:"خوشنودی",cat:"jannah",freq:66},
  {ar:"غَضَب",tr:"Ghadab",en:"Anger / Wrath",ur:"غصہ، غضب",cat:"jannah",freq:67},
  {ar:"شَفَاعَة",tr:"Shafaah",en:"Intercession",ur:"سفارش",cat:"jannah",freq:65},
];

export const VERSES = [
  {
    id:"fatiha",tab:"Al-Fatiha (1)",surah:"Surah Al-Fatiha",ref:"1:1-7",level:"Beginner",
    arabic:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    english:"In the name of Allah, the Most Gracious, the Most Merciful",
    urdu:"اللہ کے نام سے شروع جو بڑا مہربان نہایت رحم والا ہے",
    words:[
      {ar:"بِسْمِ",en:"In the name",ur:"کے نام سے"},
      {ar:"اللَّهِ",en:"of Allah",ur:"اللہ"},
      {ar:"الرَّحْمَٰنِ",en:"the Most Gracious",ur:"بڑا مہربان"},
      {ar:"الرَّحِيمِ",en:"the Most Merciful",ur:"بڑا رحم کرنے والا"},
    ],
    examples:[
      {ar:"بِسْمِ اللَّهِ",en:"'Bismillah' — said before every action. It means: I begin with Allah's name and seek His blessing.",ur:"ہر کام سے پہلے کہتے ہیں"},
      {ar:"الرَّحْمَٰنِ الرَّحِيمِ",en:"Rahman = mercy for ALL creation. Raheem = special mercy for believers. Both from root ر-ح-م (rahima = to be merciful).",ur:"رحمن اور رحیم دونوں رحم سے ہیں"},
    ]
  },
  {
    id:"fatiha2",tab:"Al-Fatiha (2)",surah:"Surah Al-Fatiha",ref:"1:2",level:"Beginner",
    arabic:"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    english:"All praise is for Allah, Lord of all the worlds",
    urdu:"سب تعریف اللہ کے لیے جو تمام جہانوں کا پالنہار ہے",
    words:[
      {ar:"الْحَمْدُ",en:"All praise",ur:"تمام تعریف"},
      {ar:"لِلَّهِ",en:"is for Allah",ur:"اللہ کے لیے"},
      {ar:"رَبِّ",en:"Lord / Sustainer",ur:"رب، پالنے والا"},
      {ar:"الْعَالَمِينَ",en:"of all the worlds",ur:"تمام جہانوں کا"},
    ],
    examples:[
      {ar:"الْحَمْدُ لِلَّهِ",en:"'Alhamdulillah' — said after blessings. Al = the, Hamd = praise, Li = for, Allah. Complete ownership of all praise belongs to Allah.",ur:"ہر نعمت کے بعد کہتے ہیں"},
      {ar:"رَبِّ الْعَالَمِينَ",en:"Rabb = the one who creates, sustains and nurtures. Aalameen = all worlds (human, jinn, angels, animals). Not just our world!",ur:"صرف ہماری دنیا نہیں بلکہ ہر جہان کا"},
    ]
  },
  {
    id:"fatiha3",tab:"Al-Fatiha (5)",surah:"Surah Al-Fatiha",ref:"1:5",level:"Beginner",
    arabic:"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    english:"You alone we worship, and You alone we ask for help",
    urdu:"ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں",
    words:[
      {ar:"إِيَّاكَ",en:"You alone",ur:"تجھ ہی کو"},
      {ar:"نَعْبُدُ",en:"we worship",ur:"ہم عبادت کرتے ہیں"},
      {ar:"وَ",en:"and",ur:"اور"},
      {ar:"إِيَّاكَ",en:"You alone",ur:"تجھ ہی سے"},
      {ar:"نَسْتَعِينُ",en:"we seek help",ur:"ہم مدد مانگتے ہیں"},
    ],
    examples:[
      {ar:"إِيَّاكَ نَعْبُدُ",en:"'Iyyaka' is placed FIRST for emphasis — 'You ALONE' (not others). In Arabic, moving the object before the verb = exclusivity. This verse is the center of the Fatiha.",ur:"إِيَّاكَ پہلے آیا — خصوصیت کے لیے"},
      {ar:"نَعْبُدُ vs نَسْتَعِينُ",en:"Worship (ibadah) we do ourselves. Help (isti'ana) we ask for. Notice: we worship AND ask help — both together. Not worship without effort, nor effort without Allah.",ur:"عبادت ہم کرتے ہیں، مدد اللہ سے مانگتے ہیں"},
    ]
  },
  {
    id:"ikhlas",tab:"Al-Ikhlas (112)",surah:"Surah Al-Ikhlas",ref:"112:1-4",level:"Beginner",
    arabic:"قُلْ هُوَ اللَّهُ أَحَدٌ",
    english:"Say: He is Allah, the One",
    urdu:"کہہ دو وہ اللہ ایک ہے",
    words:[
      {ar:"قُلْ",en:"Say (command)",ur:"کہو، بتاؤ"},
      {ar:"هُوَ",en:"He",ur:"وہ"},
      {ar:"اللَّهُ",en:"Allah",ur:"اللہ"},
      {ar:"أَحَدٌ",en:"One / Unique",ur:"ایک، یکتا"},
    ],
    examples:[
      {ar:"قُلْ",en:"'Qul' = Say. A direct command from Allah to the Prophet ﷺ and to us. This word appears 332 times in the Quran — it begins many key surahs.",ur:"قُل = کہو — اللہ کا حکم"},
      {ar:"أَحَد vs وَاحِد",en:"Wahid = one in number. Ahad = unique, there is nothing comparable. Al-Ikhlas uses Ahad because Allah's oneness is absolute and incomparable.",ur:"احد — بے مثال یکتائی"},
    ]
  },
  {
    id:"baqarah255",tab:"Ayat Al-Kursi",surah:"Surah Al-Baqarah",ref:"2:255",level:"Intermediate",
    arabic:"اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    english:"Allah — there is no god except Him, the Ever-Living, the Sustainer of all",
    urdu:"اللہ جس کے سوا کوئی معبود نہیں، ہمیشہ زندہ، سب کو تھامنے والا",
    words:[
      {ar:"اللَّهُ",en:"Allah",ur:"اللہ"},
      {ar:"لَا",en:"No / Not",ur:"نہیں"},
      {ar:"إِلَٰهَ",en:"god / deity",ur:"معبود، الٰہ"},
      {ar:"إِلَّا",en:"except",ur:"سوائے"},
      {ar:"هُوَ",en:"Him",ur:"اس کے"},
      {ar:"الْحَيُّ",en:"The Ever-Living",ur:"ہمیشہ زندہ"},
      {ar:"الْقَيُّومُ",en:"The Self-Sustaining",ur:"سب کو قائم رکھنے والا"},
    ],
    examples:[
      {ar:"لَا إِلَٰهَ إِلَّا اللَّهُ",en:"The Kalimah — the foundation of Islam. La = No, Ilaha = deity worthy of worship, Illa = except, Allah. First negate all others, then affirm only Allah.",ur:"کلمہ توحید — پہلے انکار، پھر اقرار"},
      {ar:"الْحَيُّ الْقَيُّومُ",en:"Al-Hayy = The Living who never dies. Al-Qayyum = The one who sustains everything. All creation depends on Him; He depends on nothing.",ur:"اللہ زندہ ہے اور سب کو زندہ رکھتا ہے"},
    ]
  },
  {
    id:"rahman",tab:"Ar-Rahman (55:1)",surah:"Surah Ar-Rahman",ref:"55:1-4",level:"Intermediate",
    arabic:"الرَّحْمَٰنُ عَلَّمَ الْقُرْآنَ خَلَقَ الْإِنسَانَ",
    english:"The Most Gracious taught the Quran, created mankind",
    urdu:"رحمان نے قرآن سکھایا، انسان کو بنایا",
    words:[
      {ar:"الرَّحْمَٰنُ",en:"The Most Gracious",ur:"رحمان"},
      {ar:"عَلَّمَ",en:"taught / taught",ur:"سکھایا"},
      {ar:"الْقُرْآنَ",en:"the Quran",ur:"قرآن"},
      {ar:"خَلَقَ",en:"created",ur:"بنایا، پیدا کیا"},
      {ar:"الْإِنسَانَ",en:"mankind / human",ur:"انسان"},
    ],
    examples:[
      {ar:"عَلَّمَ الْقُرْآنَ",en:"'Allama' = taught. Allah chose to start Surah Ar-Rahman with His name and immediately linked it to teaching the Quran — mercy and knowledge are connected.",ur:"رحمت کا پہلا ذکر قرآن سکھانا ہے"},
      {ar:"خَلَقَ الْإِنسَانَ",en:"'Khalaqa' = created (from root kh-l-q). Insan comes from 'uns' (companionship) or 'nasiya' (forgetfulness). Allah created us, then taught us — the perfect sequence.",ur:"پہلے بنایا، پھر سکھایا"},
    ]
  },
];

export const GRAMMAR = [
  {title:"ال (The definite article)",text:"The word 'ال' (Al) at the start means 'THE'. Almost like adding 'the' in English. This appears thousands of times in the Quran.",ar:"الرَّحْمَٰنُ = The Rahman (not just 'gracious')\nاَلْمُؤْمِنُون = The Believers",en:"When you see ال at the start of a word = 'THE ___'\nWithout it = 'a ___' or just the quality itself",ur:"الرحمان = وہ رحمان جو سب جانتے ہیں"},
  {title:"Verb comes before subject",text:"In Quranic Arabic, the verb usually comes FIRST. 'Qa-la Allahu' = 'Said Allah' = 'Allah said'. This is normal Arabic — don't get confused!",ar:"قَالَ اللَّهُ = Allah said\nخَلَقَ اللَّهُ = Allah created\nجَاءَ النَّبِيُّ = The Prophet came",en:"verb + subject = normal Arabic order",ur:"عربی میں فعل پہلے آتا ہے"},
  {title:"ون / ين = Plural men",text:"When a word ends in 'oon' (ون) or 'een' (ين), it means a group of men/people. This is masculine plural.",ar:"مُؤْمِنُون = Believers (men)\nمُسْلِمُون = Muslims (men)\nالْعَالَمِينَ = The worlds",en:"ون/-oon and ين/-een = group of people/men",ur:"ون یا ین = مردوں کی جماعت"},
  {title:"ة (Ta Marbuta) = Feminine",text:"The letter 'ة' at the end of a word (looks like ه with dots) usually means the word is feminine, or turns a quality into a noun.",ar:"رَحْمَة = Mercy (noun)\nجَنَّة = Paradise (garden)\nسُورَة = A Surah (chapter)",en:"ة at end = feminine noun / abstract noun",ur:"تاء مربوطہ = مؤنث یا اسم"},
  {title:"إِنَّ = Indeed / Verily",text:"'Inna' at the start of a sentence is a strong emphasis word. It means 'Indeed' or 'Verily'. Allah uses it to stress important truths.",ar:"إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ\nIndeed, Allah is Forgiving, Merciful\n\nإِنَّ الْإِنسَانَ لَفِي خُسْرٍ\nIndeed, mankind is in loss",en:"إن = strong emphasis — 'INDEED' or 'TRULY'",ur:"إن = بیشک، یقیناً — زور دینے کے لیے"},
  {title:"لا (La) — Two meanings",text:"لا can mean 'NO' (complete negation) or 'NOT'. Context tells you which. In Kalimah: لَا إِلَٰهَ = 'There is NO god'. With verb: لَا يَعْلَمُ = 'He does NOT know'.",ar:"لَا إِلَٰهَ = No deity (Kalimah)\nلَا رَيْبَ = No doubt\nلَا يَعْلَمُ = He does not know",en:"لا = No (before noun) / Not (before verb)",ur:"لا = نہیں (اسم سے پہلے) / نہیں کرتا (فعل سے)"},
  {title:"Broken Plural (Irregular)",text:"Arabic has irregular plurals — the word changes shape completely. These are called 'broken plurals'. You must learn them by heart.",ar:"كِتَاب → كُتُب = books\nرَجُل → رِجَال = men\nبَيْت → بُيُوت = houses\nقَلْب → قُلُوب = hearts",en:"Singular word changes shape = broken plural",ur:"جمع مکسر = لفظ کی شکل بدل جاتی ہے"},
  {title:"Root System (Jidhr)",text:"Every Arabic word has a 3-letter root. From one root come MANY words. Once you know a root, you understand a family of words.",ar:"ع-ل-م = knowledge root:\nعَلِمَ = he knew\nعَلَّمَ = he taught\nعِلْم = knowledge\nعَالِم = scholar\nعَلِيم = All-Knowing (Allah)",en:"3-letter root → whole family of meanings",ur:"تین حروف کی جڑ سے بہت سے الفاظ"},
];

export const ROOTS = [
  {ar:"ع-ل-م",en:"Knowledge/Know",ur:"جاننا، علم",count:"854 times",words:"علم، عالم، علّم، علیم"},
  {ar:"ق-و-ل",en:"Say/Speech",ur:"کہنا، بات",count:"1722 times",words:"قال، قول، يقول"},
  {ar:"ك-و-ن",en:"Be/Exist",ur:"ہونا",count:"1360 times",words:"كان، يكون، كن"},
  {ar:"أ-م-ن",en:"Believe/Safety",ur:"ایمان، امان",count:"879 times",words:"آمن، مؤمن، أمانة"},
  {ar:"ر-ح-م",en:"Mercy/Compassion",ur:"رحم، مہربانی",count:"339 times",words:"رحمن، رحیم، رحمة"},
  {ar:"خ-ل-ق",en:"Create",ur:"بنانا، پیدا کرنا",count:"261 times",words:"خلق، خالق، مخلوق"},
  {ar:"ع-ب-د",en:"Worship/Serve",ur:"عبادت کرنا",count:"275 times",words:"عبد، عبادة، يعبد"},
  {ar:"ه-د-ي",en:"Guide",ur:"ہدایت دینا",count:"316 times",words:"هدى، هداية، هادي"},
  {ar:"ظ-ل-م",en:"Wrong/Oppress",ur:"ظلم کرنا",count:"315 times",words:"ظلم، ظالم، مظلوم"},
  {ar:"ك-ف-ر",en:"Disbelieve",ur:"کفر، انکار",count:"525 times",words:"كفر، كافر، يكفر"},
  {ar:"ج-ن-ن",en:"Paradise/Hidden",ur:"جنت، چھپا ہوا",count:"147 times",words:"جنة، جنّي، مجنون"},
  {ar:"ن-ز-ل",en:"Descend/Reveal",ur:"نازل ہونا",count:"293 times",words:"نزل، تنزيل، منزل"},
  {ar:"ص-ل-و",en:"Prayer/Connect",ur:"نماز، جڑنا",count:"99 times",words:"صلاة، يصلي، مصلّي"},
  {ar:"ت-ق-و",en:"Fear Allah/Piety",ur:"تقوٰی، پرہیزگاری",count:"258 times",words:"تقوى، متقي، اتقى"},
  {ar:"ج-ه-د",en:"Strive/Effort",ur:"کوشش، جہاد",count:"40 times",words:"جهاد، مجاهد، يجاهد"},
  {ar:"ح-م-د",en:"Praise",ur:"تعریف، حمد",count:"68 times",words:"حمد، حامد، محمود"},
];

export const DAYS_DATA = [
  // Week 1
  {day:1,week:1,title:"Allah's Names",arabic:"أَسْمَاء اللَّه",task:["Learn: Allah, Rabb, Rahman, Raheem — write each 10 times","Memorize: Allah = God, Rabb = Lord/Sustainer, Rahman = Most Gracious, Raheem = Most Merciful","Read Al-Fatiha: identify these 4 words every time you see them","Practice: say Bismillah Ar-Rahman Ar-Raheem slowly and understand each word"],words:"4 core names",urdu:"اللہ کے نام"},
  {day:2,week:1,title:"Pronouns",arabic:"الضَّمَائِر",task:["Learn: هو (He), هي (She), أنا (I), نحن (We), هم (They)","Write a sentence: هو رب = He is Lord, هي رحمة = She is mercy","Find pronouns in Al-Fatiha (iyyaka = You, nahnu = We)","Quiz yourself: cover Urdu column and recall meanings"],words:"8 pronouns",urdu:"ضمائر"},
  {day:3,week:1,title:"Common Particles",arabic:"الحُرُوف",task:["Learn: و (and), في (in), من (from), إلى (to), على (on), لا (no/not)","These are the GLUE of Arabic — they appear thousands of times","Write: في الجنة = in Paradise, من الله = from Allah","Recognize these in Al-Fatiha"],words:"6 particles",urdu:"حروف جار"},
  {day:4,week:1,title:"Al-Fatiha Complete",arabic:"الفَاتِحَة",task:["Read Al-Fatiha word by word using this website's breakdown","Understand every single word you are saying in prayer","Note: alhamdulillah, rabb, iyyaka nabudu — you know these now!","Reflect: you say this in every rakah — now you know what you're saying"],words:"29 unique words",urdu:"سورة الفاتحہ"},
  {day:5,week:1,title:"Basic Nouns",arabic:"الأَسْمَاء",task:["Learn: يوم (day), أرض (earth), سماء (sky), نفس (soul), قلب (heart)","Also: علم (knowledge), كتاب (book), نور (light)","Write: نور من الله = light from Allah","These nouns appear EVERYWHERE in the Quran"],words:"8 key nouns",urdu:"بنیادی اسم"},
  {day:6,week:1,title:"Al-Ikhlas & Al-Kawthar",arabic:"الإِخْلَاص وَالكَوْثَر",task:["Al-Ikhlas: قل هو الله أحد — Say: He is Allah, the One","Al-Kawthar: إنا أعطيناك الكوثر — We have given you abundance","Break each word: قل=say, هو=He, أحد=One, أعطينا=We gave","Both surahs become 100% clear now — you understand them fully!"],words:"18 words total",urdu:"سورة الاخلاص و الکوثر"},
  {day:7,week:1,title:"Week 1 Review",arabic:"مُرَاجَعَة",task:["Review all words from Days 1-6 — use quiz section on this website","Write 5 Arabic words from memory with meanings","Read Al-Fatiha and Al-Ikhlas — understand every word","Celebrate: you now know ~50 Quranic words! 🎉"],words:"Review 50 words",urdu:"ہفتہ اول کا جائزہ"},
  // Week 2
  {day:8,week:2,title:"Key Verbs",arabic:"الأَفْعَال",task:["Learn: قال (he said), خلق (he created), آمن (he believed), يعلم (he knows)","Also: جاء (he came), أرسل (he sent), هدى (he guided)","Pattern: past verbs end in 'a', present usually have 'ya' prefix","Find قال in Surah Al-Baqarah — it appears hundreds of times"],words:"7 key verbs",urdu:"بنیادی فعل"},
  {day:9,week:2,title:"إنّ & Emphasis Words",arabic:"إِنَّ وَأَخَوَاتُهَا",task:["إنّ = Indeed/Verily — used for strong statement","إنَّ اللَّهَ غَفُورٌ رَحِيمٌ = Indeed Allah is Forgiving, Merciful","Find 5 verses starting with إن in the Quran","Also learn: قد (already/indeed), لقد (certainly)"],words:"5 emphasis words",urdu:"تاکید کے الفاظ"},
  {day:10,week:2,title:"Al-Falaq & An-Nas",arabic:"الفَلَق وَالنَّاس",task:["Al-Falaq: قل أعوذ برب الفلق — Say: I seek refuge with Lord of daybreak","An-Nas: قل أعوذ برب الناس — Say: I seek refuge with Lord of mankind","أعوذ = I seek refuge, الفلق = daybreak, الناس = people","You now understand the last 3 surahs of the Quran fully!"],words:"22 words",urdu:"سورة الفلق و الناس"},
  {day:11,week:2,title:"Ayat Al-Kursi",arabic:"آيَة الكُرْسِي",task:["2:255 — The greatest verse in the Quran","Learn: لا إله إلا هو الحي القيوم","الحي = The Living, القيوم = The Sustainer, لا تأخذه سنة = no slumber overtakes Him","Break it down word by word using this website's verse section"],words:"50 words (full verse)",urdu:"آیت الکرسی"},
  {day:12,week:2,title:"Jannah & Akhirah Words",arabic:"الجَنَّة وَالآخِرَة",task:["جنة (Paradise), نار (Fire), آخرة (Hereafter), دنيا (This world)","عذاب (punishment), نعيم (bliss), خلود (eternity), فوز (success)","Also: يوم القيامة = Day of Resurrection","This vocabulary appears in EVERY story in the Quran"],words:"10 akhirah words",urdu:"آخرت کے الفاظ"},
  {day:13,week:2,title:"Dua Vocabulary",arabic:"أَلْفَاظُ الدُّعَاء",task:["Learn: اهدنا (guide us), اغفر لنا (forgive us), ارحمنا (have mercy on us)","ربنا = Our Lord, تب علينا = forgive us, أعنّا = help us","These patterns repeat in dozens of duas in the Quran","Make a dua in Arabic using: ربنا + verb + لنا"],words:"8 dua words",urdu:"دعا کے الفاظ"},
  {day:14,week:2,title:"Week 2 Review",arabic:"مُرَاجَعَة",task:["Quiz: Ayat Al-Kursi word by word (use this website)","Review all verbs from Day 8","Read Al-Falaq and An-Nas — confirm you understand every word","You now know ~100 words = ~30% Quran comprehension 🌟"],words:"Review 100 words",urdu:"ہفتہ دوم کا جائزہ"},
  // Week 3
  {day:15,week:3,title:"Root Words Part 1",arabic:"الجُذُور ١",task:["ع-ل-م root: علم (knowledge), يعلم (he knows), علّم (he taught), عليم (All-Knowing)","Learn to recognize the root in each word form","ر-ح-م root: رحمن, رحيم, رحمة — all mean mercy/merciful","One root = a family of meanings — this multiplies your vocabulary!"],words:"8 root families",urdu:"جڑ کے الفاظ"},
  {day:16,week:3,title:"Root Words Part 2",arabic:"الجُذُور ٢",task:["خ-ل-ق: خلق (created), خالق (Creator), مخلوق (creature)","ع-ب-د: عبد (servant), عبادة (worship), يعبد (he worships)","ه-د-ي: هدى (guidance), هادي (guide), مهتدي (guided one)","Practice: when you see a new word, try to guess its root"],words:"9 more roots",urdu:"مزید جڑیں"},
  {day:17,week:3,title:"Al vs without Al",arabic:"التَّعْرِيف",task:["الله vs إله — THE God vs a god", "الكتاب = THE Book (the Quran), كتاب = a book","الرَّحْمَن = THE Rahman (only one), رحمن = gracious (quality)","Practice: find 10 words with ال in Al-Fatiha — what does it mean for each?"],words:"Grammar rule",urdu:"الف لام کا اصول"},
  {day:18,week:3,title:"Plural Patterns",arabic:"الجَمْع",task:["ون-/ين- plural: مؤمنون (believers), مسلمون (Muslims), كافرون (disbelievers)","ات- plural (feminine): آيات (verses), كلمات (words), سماوات (skies)","ء plurals: أنبياء (prophets), أولياء (helpers)","Test: الصالحون, الظالمون, المؤمنات — what do these mean?"],words:"Plural patterns",urdu:"جمع کے طریقے"},
  {day:19,week:3,title:"Story Key Words",arabic:"الْقَصَص",task:["Quranic stories repeat these words: قال (said), ذهب (went), جاء (came)","أرسلنا = We sent, قوم (people/nation), نبي (prophet), رسول (messenger)","Learn: فرعون (Pharaoh), موسى (Musa/Moses), إبراهيم (Ibrahim)","When reading any story in the Quran, these words will guide you"],words:"12 story words",urdu:"قرآنی قصے کے الفاظ"},
  {day:20,week:3,title:"Surah Yasin (Key Verses)",arabic:"يس",task:["Yasin 36:1-2: يس وَالْقُرْآنِ الْحَكِيمِ = Ya-Sin, by the Wise Quran","Yasin 36:82: إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن فَيَكُونُ","كن فيكون = 'Be!' and it is — one of the most profound phrases","أراد = He willed, شيء = something, أمر = command"],words:"25 Yasin words",urdu:"سورة یسین کے اہم الفاظ"},
  {day:21,week:3,title:"Week 3 Review",arabic:"مُرَاجَعَة",task:["Take the full quiz section on this website","Write 20 words from memory","Read Surah Ar-Rahman (55:1-30) — count words you know","You now know ~175 words = ~45% Quran comprehension ⭐"],words:"Review 175 words",urdu:"ہفتہ سوم کا جائزہ"},
  // Week 4
  {day:22,week:4,title:"Ar-Rahman Key Verses",arabic:"الرَّحْمَن",task:["Surah Ar-Rahman repeating verse: فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ","آلاء = blessings/favors, رب = Lord, تكذبان = do you two deny","This verse appears 31 times — now you fully understand Allah's challenge","Count: how many blessings does Allah list in Ar-Rahman?"],words:"Ar-Rahman phrases",urdu:"سورة الرحمن"},
  {day:23,week:4,title:"Command Verbs",arabic:"الأَمْر",task:["قُلْ = Say! (most common command in Quran — 332 times)","اقْرَأْ = Read! (first revelation), كُنْ = Be!, اذْكُر = Remember!","اتَّقُوا = Fear Allah!, أَقِيمُوا = Establish (prayer)","Commands: these are Allah addressing YOU directly — powerful!"],words:"8 command verbs",urdu:"حکمی فعل"},
  {day:24,week:4,title:"Descriptions of Allah",arabic:"أَوْصَاف اللَّه",task:["الأول والآخر = The First and The Last","الظاهر والباطن = The Manifest and The Hidden","الحق = The Truth, الوكيل = The Trustee, الكريم = The Generous","When these appear in the Quran, you now fully understand them"],words:"10 divine attributes",urdu:"اللہ کی صفات"},
  {day:25,week:4,title:"Negative Sentences",arabic:"النَّفْي",task:["لا يعلم = He does not know, لا يشرك = He does not associate","لم يلد ولم يولد = He did not beget nor was begotten (Ikhlas!)","لَا رَيْبَ = No doubt, لا تقنطوا = Do not despair","Now you understand those crucial 'Allah does NOT' statements"],words:"Negative patterns",urdu:"نفی کے جملے"},
  {day:26,week:4,title:"Surah Al-Asr",arabic:"العَصْر",task:["Full surah: والعصر — إن الإنسان لفي خسر","إلا الذين آمنوا وعملوا الصالحات وتواصوا بالحق وتواصوا بالصبر","Breakdown: خسر = loss, آمنوا = believed, الصالحات = righteous deeds","You understand EVERY word of this surah now — amazing!"],words:"All 14 words",urdu:"سورة العصر"},
  {day:27,week:4,title:"Surah Al-Mulk Intro",arabic:"المُلْك",task:["67:1: تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ","Blessed = تبارك, hand = يد, dominion = ملك, all things = كل شيء","67:2: خَلَقَ الْمَوْتَ وَالْحَيَاةَ = He created death and life","موت = death, حياة = life — recognize from other verses!"],words:"20 Al-Mulk words",urdu:"سورة الملک"},
  {day:28,week:4,title:"Comprehensive Review",arabic:"مُرَاجَعَة شَامِلَة",task:["Read Al-Fatiha, Ayat Al-Kursi, Al-Ikhlas, Al-Falaq, An-Nas — full understanding","Quiz: do the hardest quiz questions on this website","Write your 10 FAVOURITE Quranic words with meanings","Milestone check: you know 250+ words now 🏆"],words:"Review 250 words",urdu:"جامع مراجعہ"},
  {day:29,week:4,title:"Reading Practice",arabic:"التَّطْبِيق",task:["Open the Quran and read Surah Al-Baqarah verses 1-10","Highlight every word you understand — you should understand 50%+","For unknown words, note them and look them up here","Your reading comprehension has transformed — feel the difference!"],words:"Applied reading",urdu:"قرآن پڑھنے کی مشق"},
  {day:30,week:4,title:"GRADUATION DAY! 🎓",arabic:"التَّخَرُّج",task:["Read Al-Fatiha word by word — explain each word aloud","Read Ayat Al-Kursi — understand every attribute of Allah","Read the last 10 surahs (Juz Amma) — aim for 70%+ comprehension","You have completed the 30-day course — continue learning, never stop! BarakAllahu feek!"],words:"COMPLETE COURSE",urdu:"30 دن مکمل!"},
];


export const STORIES_DATA = [
  {
    id: 1,
    title: "The Staff of Musa",
    titleUrdu: "موسیٰ علیہ السلام کا عصا",
    summary: "How an ordinary staff became a miracle through trust in Allah.",
    summaryUrdu: "کس طرح ایک عام لاٹھی اللہ پر بھروسے سے معجزہ بن گئی۔",
    image: "images/story_musa.png",
    text: "Prophet Musa (AS) was asked by Allah, 'What is that in your right hand, O Musa?' He replied, 'It is my staff; I lean upon it...' Allah commanded him to throw it, and it became a snake. This teaches us that Allah can turn ordinary, everyday things into miracles when we trust Him completely.",
    textUrdu: "اللہ تعالیٰ نے حضرت موسیٰ (علیہ السلام) سے پوچھا: اے موسیٰ! تمہارے دائیں ہاتھ میں کیا ہے؟ انہوں نے جواب دیا: یہ میری لاٹھی ہے جس پر میں ٹیک لگاتا ہوں... اللہ نے انہیں اسے پھینکنے کا حکم دیا تو وہ ایک سانپ بن گئی۔ یہ ہمیں سکھاتا ہے کہ جب ہم اللہ پر مکمل بھروسہ کرتے ہیں تو وہ عام چیزوں کو بھی معجزات میں بدل سکتا ہے۔",
    words: [
      {ar: "عَصَا", en: "Staff", ur: "لاٹھی"},
      {ar: "يَد", en: "Hand", ur: "ہاتھ"},
      {ar: "أَلْقَى", en: "Threw", ur: "پھینکا"},
      {ar: "يَمِين", en: "Right", ur: "دایاں"},
      {ar: "تَوَكَّل", en: "Trust", ur: "بھروسہ"}
    ]
  },
  {
    id: 2,
    title: "Yusuf's Dream",
    titleUrdu: "یوسف علیہ السلام کا خواب",
    summary: "The beautiful dream of a young boy that foretold his destiny.",
    summaryUrdu: "ایک نوجوان لڑکے کا خوبصورت خواب جس نے اس کی تقدیر کی پیش گوئی کی۔",
    image: "images/story_yusuf.png",
    text: "When Yusuf (AS) was a young boy, he saw a vision: eleven stars, the sun, and the moon all bowing down to him. His father Yaqub (AS) realized this meant Allah would choose Yusuf for a great mission. Despite years of hardship, the dream eventually came true in Egypt.",
    textUrdu: "جب حضرت یوسف (علیہ السلام) چھوٹے بچے تھے تو انہوں نے ایک خواب دیکھا: گیارہ ستارے، سورج اور چاند انہیں سجدہ کر رہے ہیں۔ ان کے والد حضرت یعقوب (علیہ السلام) سمجھ گئے کہ اللہ تعالیٰ یوسف کو ایک عظیم مقصد کے لیے چنے گا۔ سالوں کی مشکلات کے باوجود، وہ خواب بالآخر مصر میں سچ ثابت ہوا۔",
    words: [
      {ar: "كَوْكَب", en: "Star", ur: "ستارہ"},
      {ar: "شَمْس", en: "Sun", ur: "سورج"},
      {ar: "قَمَر", en: "Moon", ur: "چاند"},
      {ar: "رُؤْيَا", en: "Dream/Vision", ur: "خواب"},
      {ar: "سَاجِدِين", en: "Bowing", ur: "سجدہ کرنے والے"}
    ]
  },
  {
    id: 3,
    title: "Ibrahim and the Fire",
    titleUrdu: "ابراہیم علیہ السلام اور آگ",
    summary: "A roaring fire turned cool and peaceful.",
    summaryUrdu: "ایک بھڑکتی ہوئی آگ جو ٹھنڈی اور پرسکون بن گئی۔",
    image: "images/story_ibrahim.png",
    text: "When Prophet Ibrahim (AS) challenged the idols, the king threw him into a massive, roaring fire. But Allah commanded the fire: 'O fire, be coolness and safety upon Ibrahim.' The flames did not harm him, proving that the Creator controls the laws of nature.",
    textUrdu: "جب حضرت ابراہیم (علیہ السلام) نے بتوں کو چیلنج کیا تو بادشاہ نے انہیں ایک خوفناک اور بھڑکتی ہوئی آگ میں پھینک دیا۔ لیکن اللہ نے آگ کو حکم دیا: اے آگ! ابراہیم پر ٹھنڈی اور سلامتی والی بن جا۔ آگ کے شعلوں نے انہیں کوئی نقصان نہیں پہنچایا، جس سے یہ ثابت ہوا کہ خالق ہی فطرت کے قوانین کو کنٹرول کرتا ہے۔",
    words: [
      {ar: "نَار", en: "Fire", ur: "آگ"},
      {ar: "بَرْد", en: "Coolness", ur: "ٹھنڈک"},
      {ar: "سَلَام", en: "Peace/Safety", ur: "سلامتی"},
      {ar: "إِلَه", en: "Deity/God", ur: "معبود"},
      {ar: "خَالِق", en: "Creator", ur: "پیدا کرنے والا"}
    ]
  }
];

// Generate 10 Courses dynamically
export const COURSES_DATA = [];

// Course 1 is the original Foundations course
COURSES_DATA.push({
  id: 1,
  title: "Course 1: The Foundations",
  desc: "Master the 50 most common words, Al-Fatiha, and basic grammar.",
  days: DAYS_DATA // Uses the existing 30 days
});

// Scaffold Courses 2 to 10
export const courseTitles = [
  "Course 2: Prophets & Prayers",
  "Course 3: The Short Surahs",
  "Course 4: High Frequency Particles",
  "Course 5: Advanced Verbs",
  "Course 6: Divine Attributes",
  "Course 7: The Hereafter",
  "Course 8: Quranic Stories",
  "Course 9: Complex Grammar",
  "Course 10: Full Surah Comprehension"
];

for(let i=2; i<=10; i++) {
  let courseDays = [];
  for(let d=1; d<=30; d++) {
    courseDays.push({
      day: d,
      week: Math.ceil(d/7),
      title: "Task " + d,
      arabic: "مُهِمَّة " + d,
      task: ["Read the assigned verses.", "Memorize 3 new root words.", "Take the daily quiz."],
      words: "5 words",
      urdu: "روزمرہ کا کام"
    });
  }
  
  COURSES_DATA.push({
    id: i,
    title: courseTitles[i-2],
    desc: "Welcome to " + courseTitles[i-2] + ". Complete these 30 days to level up.",
    days: courseDays
  });
}

// ============================================================
// ARABIC ALPHABET
// ============================================================
export const ALPHABET = [
  {letter:"ا",name:"Alif",tr:"a / aa",type:"sun",position:{isolated:"ا",initial:"ا‍",medial:"‍ا‍",final:"‍ا"},example:{ar:"أَسَد",en:"Lion",ur:"شیر"},audio:"alif"},
  {letter:"ب",name:"Ba",tr:"b",type:"moon",position:{isolated:"ب",initial:"بـ",medial:"ـبـ",final:"ـب"},example:{ar:"بَيْت",en:"House",ur:"گھر"},audio:"ba"},
  {letter:"ت",name:"Ta",tr:"t",type:"sun",position:{isolated:"ت",initial:"تـ",medial:"ـتـ",final:"ـت"},example:{ar:"تُفَّاحَة",en:"Apple",ur:"سیب"},audio:"ta"},
  {letter:"ث",name:"Tha",tr:"th",type:"sun",position:{isolated:"ث",initial:"ثـ",medial:"ـثـ",final:"ـث"},example:{ar:"ثَلْج",en:"Snow",ur:"برف"},audio:"tha"},
  {letter:"ج",name:"Jeem",tr:"j",type:"moon",position:{isolated:"ج",initial:"جـ",medial:"ـجـ",final:"ـج"},example:{ar:"جَمَل",en:"Camel",ur:"اونٹ"},audio:"jeem"},
  {letter:"ح",name:"Ha",tr:"ḥ",type:"moon",position:{isolated:"ح",initial:"حـ",medial:"ـحـ",final:"ـح"},example:{ar:"حَمْد",en:"Praise",ur:"حمد"},audio:"ha"},
  {letter:"خ",name:"Kha",tr:"kh",type:"moon",position:{isolated:"خ",initial:"خـ",medial:"ـخـ",final:"ـخ"},example:{ar:"خَيْر",en:"Good",ur:"بھلائی"},audio:"kha"},
  {letter:"د",name:"Dal",tr:"d",type:"sun",position:{isolated:"د",initial:"د‍",medial:"‍د‍",final:"‍د"},example:{ar:"دِين",en:"Religion",ur:"دین"},audio:"dal"},
  {letter:"ذ",name:"Dhal",tr:"dh",type:"sun",position:{isolated:"ذ",initial:"ذ‍",medial:"‍ذ‍",final:"‍ذ"},example:{ar:"ذِكْر",en:"Remembrance",ur:"ذکر"},audio:"dhal"},
  {letter:"ر",name:"Ra",tr:"r",type:"sun",position:{isolated:"ر",initial:"ر‍",medial:"‍ر‍",final:"‍ر"},example:{ar:"رَبّ",en:"Lord",ur:"رب"},audio:"ra"},
  {letter:"ز",name:"Zay",tr:"z",type:"moon",position:{isolated:"ز",initial:"ز‍",medial:"‍ز‍",final:"‍ز"},example:{ar:"زَيْتُون",en:"Olive",ur:"زیتون"},audio:"zay"},
  {letter:"س",name:"Seen",tr:"s",type:"sun",position:{isolated:"س",initial:"سـ",medial:"ـسـ",final:"ـس"},example:{ar:"سَمَاء",en:"Sky",ur:"آسمان"},audio:"seen"},
  {letter:"ش",name:"Sheen",tr:"sh",type:"sun",position:{isolated:"ش",initial:"شـ",medial:"ـشـ",final:"ـش"},example:{ar:"شَمْس",en:"Sun",ur:"سورج"},audio:"sheen"},
  {letter:"ص",name:"Sad",tr:"ṣ",type:"sun",position:{isolated:"ص",initial:"صـ",medial:"ـصـ",final:"ـص"},example:{ar:"صَلَاة",en:"Prayer",ur:"نماز"},audio:"sad"},
  {letter:"ض",name:"Dad",tr:"ḍ",type:"sun",position:{isolated:"ض",initial:"ضـ",medial:"ـضـ",final:"ـض"},example:{ar:"ضَوْء",en:"Light",ur:"روشنی"},audio:"dad"},
  {letter:"ط",name:"Taa",tr:"ṭ",type:"sun",position:{isolated:"ط",initial:"طـ",medial:"ـطـ",final:"ـط"},example:{ar:"طَعَام",en:"Food",ur:"کھانا"},audio:"taa"},
  {letter:"ظ",name:"Dhaa",tr:"ẓ",type:"sun",position:{isolated:"ظ",initial:"ظـ",medial:"ـظـ",final:"ـظ"},example:{ar:"ظُلْم",en:"Oppression",ur:"ظلم"},audio:"dhaa"},
  {letter:"ع",name:"Ain",tr:"ʿ",type:"moon",position:{isolated:"ع",initial:"عـ",medial:"ـعـ",final:"ـع"},example:{ar:"عِلْم",en:"Knowledge",ur:"علم"},audio:"ain"},
  {letter:"غ",name:"Ghain",tr:"gh",type:"moon",position:{isolated:"غ",initial:"غـ",medial:"ـغـ",final:"ـغ"},example:{ar:"غَفُور",en:"Forgiving",ur:"بخشنے والا"},audio:"ghain"},
  {letter:"ف",name:"Fa",tr:"f",type:"moon",position:{isolated:"ف",initial:"فـ",medial:"ـفـ",final:"ـف"},example:{ar:"فَجْر",en:"Dawn",ur:"فجر"},audio:"fa"},
  {letter:"ق",name:"Qaf",tr:"q",type:"moon",position:{isolated:"ق",initial:"قـ",medial:"ـقـ",final:"ـق"},example:{ar:"قُرْآن",en:"Quran",ur:"قرآن"},audio:"qaf"},
  {letter:"ك",name:"Kaf",tr:"k",type:"moon",position:{isolated:"ك",initial:"كـ",medial:"ـكـ",final:"ـك"},example:{ar:"كِتَاب",en:"Book",ur:"کتاب"},audio:"kaf"},
  {letter:"ل",name:"Lam",tr:"l",type:"sun",position:{isolated:"ل",initial:"لـ",medial:"ـلـ",final:"ـل"},example:{ar:"لَيْل",en:"Night",ur:"رات"},audio:"lam"},
  {letter:"م",name:"Meem",tr:"m",type:"moon",position:{isolated:"م",initial:"مـ",medial:"ـمـ",final:"ـم"},example:{ar:"مَاء",en:"Water",ur:"پانی"},audio:"meem"},
  {letter:"ن",name:"Noon",tr:"n",type:"sun",position:{isolated:"ن",initial:"نـ",medial:"ـنـ",final:"ـن"},example:{ar:"نُور",en:"Light",ur:"نور"},audio:"noon"},
  {letter:"ه",name:"Ha",tr:"h",type:"moon",position:{isolated:"ه",initial:"هـ",medial:"ـهـ",final:"ـه"},example:{ar:"هُدَى",en:"Guidance",ur:"ہدایت"},audio:"haa"},
  {letter:"و",name:"Waw",tr:"w / oo",type:"moon",position:{isolated:"و",initial:"و‍",medial:"‍و‍",final:"‍و"},example:{ar:"وَلَد",en:"Child",ur:"بچہ"},audio:"waw"},
  {letter:"ي",name:"Ya",tr:"y / ee",type:"moon",position:{isolated:"ي",initial:"يـ",medial:"ـيـ",final:"ـي"},example:{ar:"يَوْم",en:"Day",ur:"دن"},audio:"ya"},
];

// ============================================================
// ADDITIONAL VERSES
// ============================================================
export const EXTRA_VERSES = [
  {
    id:"asr",tab:"Al-Asr (103)",surah:"Surah Al-Asr",ref:"103:1-3",level:"Beginner",
    arabic:"وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
    english:"By time, indeed mankind is in loss",
    urdu:"زمانے کی قسم، بیشک انسان خسارے میں ہے",
    words:[
      {ar:"وَ",en:"By (oath)",ur:"قسم"},
      {ar:"الْعَصْرِ",en:"Time / The declining day",ur:"زمانہ، وقت"},
      {ar:"إِنَّ",en:"Indeed",ur:"بیشک"},
      {ar:"الْإِنسَانَ",en:"Mankind",ur:"انسان"},
      {ar:"لَفِي",en:"Surely is in",ur:"یقیناً میں"},
      {ar:"خُسْرٍ",en:"Loss",ur:"خسارے، نقصان"},
    ],
    examples:[
      {ar:"وَالْعَصْرِ",en:"Allah swears by Time itself — showing its immense value. Every passing moment is either used for good or wasted.",ur:"اللہ نے وقت کی قسم کھائی — اس کی اہمیت ظاہر کرنے کے لیے"},
      {ar:"إِلَّا الَّذِينَ آمَنُوا",en:"The exception: those who believe, do good, advise truth, and advise patience. Four conditions to escape loss.",ur:"مستثنیٰ: ایمان، نیک عمل، حق کی نصیحت، صبر کی نصیحت"},
    ]
  },
  {
    id:"kawthar",tab:"Al-Kawthar (108)",surah:"Surah Al-Kawthar",ref:"108:1-3",level:"Beginner",
    arabic:"إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
    english:"Indeed, We have granted you Al-Kawthar (abundance)",
    urdu:"بیشک ہم نے تم کو کوثر عطا کی",
    words:[
      {ar:"إِنَّا",en:"Indeed We",ur:"بیشک ہم نے"},
      {ar:"أَعْطَيْنَاكَ",en:"We have given you",ur:"تمہیں دیا"},
      {ar:"الْكَوْثَرَ",en:"Al-Kawthar (abundance/river)",ur:"کوثر (بہت زیادہ خیر)"},
    ],
    examples:[
      {ar:"إِنَّا أَعْطَيْنَاكَ",en:"'Inna' for emphasis + 'na' = We (royal plural). A'taynaka = We gave YOU specifically. Allah directly addresses the Prophet ﷺ.",ur:"اللہ نے براہ راست نبی ﷺ سے خطاب کیا"},
      {ar:"فَصَلِّ لِرَبِّكَ وَانْحَرْ",en:"So pray to your Lord and sacrifice. Salli = pray, Rabbika = your Lord, Wanhar = sacrifice.",ur:"اپنے رب کے لیے نماز پڑھو اور قربانی کرو"},
    ]
  },
  {
    id:"nasr",tab:"An-Nasr (110)",surah:"Surah An-Nasr",ref:"110:1-3",level:"Beginner",
    arabic:"إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
    english:"When the victory of Allah has come and the conquest",
    urdu:"جب اللہ کی مدد آ جائے اور فتح ہو جائے",
    words:[
      {ar:"إِذَا",en:"When",ur:"جب"},
      {ar:"جَاءَ",en:"Comes",ur:"آئے"},
      {ar:"نَصْرُ",en:"Victory / Help",ur:"مدد، نصرت"},
      {ar:"اللَّهِ",en:"of Allah",ur:"اللہ کی"},
      {ar:"وَ",en:"And",ur:"اور"},
      {ar:"الْفَتْحُ",en:"The conquest",ur:"فتح"},
    ],
    examples:[
      {ar:"نَصْرُ اللَّهِ",en:"Nasr = help/victory from Allah. This surah was revealed near the end of the Prophet's ﷺ mission — a sign of completion.",ur:"نصر = اللہ کی مدد اور فتح"},
      {ar:"فَسَبِّحْ بِحَمْدِ رَبِّكَ",en:"Then glorify with praise of your Lord. Sabbih = glorify, Bi-hamdi = with praise, Rabbika = your Lord.",ur:"اپنے رب کی حمد کے ساتھ تسبیح کرو"},
    ]
  },
  {
    id:"fil",tab:"Al-Fil (105)",surah:"Surah Al-Fil",ref:"105:1-5",level:"Beginner",
    arabic:"أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
    english:"Have you not considered how your Lord dealt with the companions of the elephant?",
    urdu:"کیا تم نے نہیں دیکھا کہ تمہارے رب نے ہاتھی والوں کے ساتھ کیا کیا؟",
    words:[
      {ar:"أَلَمْ",en:"Have not?",ur:"کیا نہیں"},
      {ar:"تَرَ",en:"You seen",ur:"تم نے دیکھا"},
      {ar:"كَيْفَ",en:"How",ur:"کیسے"},
      {ar:"فَعَلَ",en:"Dealt / Did",ur:"کیا"},
      {ar:"رَبُّكَ",en:"Your Lord",ur:"تمہارے رب"},
      {ar:"بِأَصْحَابِ",en:"With the companions of",ur:"والوں کے ساتھ"},
      {ar:"الْفِيلِ",en:"The Elephant",ur:"ہاتھی"},
    ],
    examples:[
      {ar:"أَلَمْ تَرَ",en:"A rhetorical question — 'Haven't you seen?' It draws your attention. This pattern appears many times in the Quran.",ur:"استفہامی سوال — توجہ دلانے کے لیے"},
      {ar:"أَبَابِيل",en:"In verse 3: birds in flocks (Ababil) sent to destroy Abraha's army. طَيْرًا أَبَابِيلَ = birds in flocks.",ur:"ابابیل — جھنڈ در جھنڈ پرندے"},
    ]
  },
];

// ============================================================
// ADDITIONAL STORIES
// ============================================================
export const EXTRA_STORIES = [
  {
    id: 4,
    title: "Nuh and the Great Flood",
    titleUrdu: "نوح علیہ السلام اور طوفان",
    summary: "950 years of patience and a ship that saved humanity.",
    summaryUrdu: "950 سال صبر اور ایک کشتی جس نے انسانیت کو بچایا۔",
    image: "images/story_nuh.png",
    text: "Prophet Nuh (AS) called his people to worship Allah alone for 950 years, but only a few believed. Allah commanded him to build a massive Ark. When the great flood came, Nuh and the believers were saved on the ship, while those who rejected drowned. Even Nuh's own son refused to board, showing that faith is a personal choice — not inherited.",
    textUrdu: "حضرت نوح (علیہ السلام) نے 950 سال تک اپنی قوم کو اللہ کی عبادت کی دعوت دی، لیکن بہت کم لوگ ایمان لائے۔ اللہ نے انہیں ایک بڑی کشتی بنانے کا حکم دیا۔ جب عظیم طوفان آیا تو نوح اور مومنین کشتی پر محفوظ رہے، جبکہ انکار کرنے والے ڈوب گئے۔ نوح کے اپنے بیٹے نے بھی کشتی پر آنے سے انکار کر دیا، جو ظاہر کرتا ہے کہ ایمان ذاتی فیصلہ ہے — وراثت نہیں۔",
    words: [
      {ar: "سَفِينَة", en: "Ship/Ark", ur: "کشتی"},
      {ar: "طُوفَان", en: "Flood/Storm", ur: "طوفان"},
      {ar: "نَجَا", en: "Saved", ur: "بچایا"},
      {ar: "دَعَا", en: "Called/Invited", ur: "دعوت دی"},
      {ar: "صَبَرَ", en: "Had patience", ur: "صبر کیا"}
    ]
  },
  {
    id: 5,
    title: "Sulaiman and the Ants",
    titleUrdu: "سلیمان علیہ السلام اور چیونٹیاں",
    summary: "A mighty king who understood the language of ants.",
    summaryUrdu: "ایک عظیم بادشاہ جو چیونٹیوں کی زبان سمجھتا تھا۔",
    image: "images/story_sulaiman.png",
    text: "Prophet Sulaiman (AS) was given power over wind, jinn, and animals. One day, while marching with his vast army, an ant warned her colony: 'O ants, enter your homes so that Sulaiman and his soldiers do not crush you unknowingly.' Sulaiman heard this and smiled, thanking Allah for His blessings. He then made dua to Allah to help him be grateful and do righteous deeds.",
    textUrdu: "حضرت سلیمان (علیہ السلام) کو ہوا، جنات اور جانوروں پر اختیار دیا گیا تھا۔ ایک دن جب وہ اپنی عظیم فوج کے ساتھ چل رہے تھے، ایک چیونٹی نے اپنی ساتھیوں کو خبردار کیا: اے چیونٹیو! اپنے بلوں میں داخل ہو جاؤ تاکہ سلیمان اور اس کے لشکر تمہیں انجانے میں کچل نہ دیں۔ سلیمان نے یہ سن کر مسکرا دیا اور اللہ کی نعمتوں پر شکر ادا کیا۔",
    words: [
      {ar: "نَمْل", en: "Ant", ur: "چیونٹی"},
      {ar: "جُنُود", en: "Soldiers/Army", ur: "فوج"},
      {ar: "تَبَسَّمَ", en: "Smiled", ur: "مسکرایا"},
      {ar: "شُكْر", en: "Gratitude", ur: "شکر"},
      {ar: "رِيح", en: "Wind", ur: "ہوا"}
    ]
  },
  {
    id: 6,
    title: "The People of the Cave",
    titleUrdu: "اصحاب الکہف",
    summary: "Young believers who slept for 309 years in a cave.",
    summaryUrdu: "نوجوان مومنین جو 309 سال ایک غار میں سوتے رہے۔",
    image: "images/story_kahf.png",
    text: "A group of young men believed in Allah when their entire city worshipped idols. To escape persecution, they fled to a cave. Allah put them to sleep for 309 years. When they woke up, they thought only a day had passed. They sent one companion to buy food, but the old coins revealed the truth. This story teaches that Allah protects those who stand firm in their faith, no matter the circumstances.",
    textUrdu: "نوجوانوں کا ایک گروہ اللہ پر ایمان لایا جب ان کا پورا شہر بتوں کی پوجا کرتا تھا۔ ظلم سے بچنے کے لیے وہ ایک غار میں چلے گئے۔ اللہ نے انہیں 309 سال تک سلا دیا۔ جب وہ جاگے تو انہوں نے سمجھا کہ صرف ایک دن گزرا ہے۔ انہوں نے ایک ساتھی کو کھانا خریدنے بھیجا، لیکن پرانے سکوں نے سچائی ظاہر کر دی۔ یہ قصہ سکھاتا ہے کہ اللہ ان لوگوں کی حفاظت کرتا ہے جو ایمان پر ثابت قدم رہتے ہیں۔",
    words: [
      {ar: "كَهْف", en: "Cave", ur: "غار"},
      {ar: "فِتْيَة", en: "Young men", ur: "نوجوان"},
      {ar: "رَقَدَ", en: "Slept", ur: "سویا"},
      {ar: "سِنِين", en: "Years", ur: "سال"},
      {ar: "هِدَايَة", en: "Guidance", ur: "ہدایت"}
    ]
  },
  {
    id: 7,
    title: "Luqman's Wisdom to His Son",
    titleUrdu: "لقمان کی اپنے بیٹے کو نصیحت",
    summary: "A father's timeless advice that applies to every generation.",
    summaryUrdu: "ایک باپ کی لازوال نصیحت جو ہر دور کے لیے ہے۔",
    image: "images/story_luqman.png",
    text: "Luqman (AS) was blessed with great wisdom by Allah. He gave his son timeless advice: 'O my son, do not associate anything with Allah. Indeed, shirk is a great injustice.' He also taught: 'Establish prayer, enjoin good, forbid evil, and be patient. Do not turn your cheek in arrogance, nor walk through the earth boastfully. Indeed, Allah does not like every self-deluded boaster.' These ayahs are a complete guide for life.",
    textUrdu: "لقمان (علیہ السلام) کو اللہ نے بڑی حکمت عطا فرمائی۔ انہوں نے اپنے بیٹے کو لازوال نصیحت کی: اے میرے بیٹے! اللہ کے ساتھ شرک نہ کرنا، بیشک شرک بہت بڑا ظلم ہے۔ انہوں نے یہ بھی سکھایا: نماز قائم کرو، نیکی کا حکم دو، برائی سے منع کرو، اور صبر کرو۔ لوگوں سے اکڑ کر بات نہ کرو اور زمین پر اتراتے ہوئے نہ چلو۔ بیشک اللہ کسی تکبر کرنے والے شیخی خورے کو پسند نہیں کرتا۔",
    words: [
      {ar: "حِكْمَة", en: "Wisdom", ur: "حکمت"},
      {ar: "شِرْك", en: "Associating partners", ur: "شرک"},
      {ar: "صَبْر", en: "Patience", ur: "صبر"},
      {ar: "مَعْرُوف", en: "Good/Right", ur: "نیکی"},
      {ar: "مُنْكَر", en: "Evil/Wrong", ur: "برائی"}
    ]
  },
];
