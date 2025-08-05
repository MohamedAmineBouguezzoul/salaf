// Mock data for Salaf scholars
export const mockScholars = [
  {
    id: "1",
    nameArabic: "الإمام أحمد بن حنبل",
    nameEnglish: "Imam Ahmad ibn Hanbal",
    birthYear: { hijri: 164, gregorian: 780 },
    deathYear: { hijri: 241, gregorian: 855 },
    biography: "إمام أهل السنة والجماعة، صاحب المسند المشهور، وإمام المذهب الحنبلي. كان من أكبر المدافعين عن السنة النبوية في وجه البدع والضلالات.",
    biographyEnglish: "The Imam of Ahl al-Sunnah wal-Jama'ah, author of the famous Musnad, and founder of the Hanbali madhab. He was one of the greatest defenders of the Prophetic Sunnah against innovations.",
    teachers: ["الإمام الشافعي", "هُشَيم بن بشير", "وكيع بن الجراح"],
    students: ["الإمام البخاري", "الإمام مسلم", "أبو داود"],
    books: ["المسند", "الزهد", "المقدمة في أصول التفسير"],
    madhhab: "الحنبلي",
    region: "بغداد",
    century: "3",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  },
  {
    id: "2",
    nameArabic: "الإمام أبو حنيفة النعمان",
    nameEnglish: "Imam Abu Hanifa",
    birthYear: { hijri: 80, gregorian: 699 },
    deathYear: { hijri: 150, gregorian: 767 },
    biography: "إمام المذهب الحنفي، وأحد الأئمة الأربعة، اشتهر بدقته في الاستنباط والقياس، ولقب بالإمام الأعظم.",
    biographyEnglish: "The founder of the Hanafi madhab, one of the four great Imams, famous for his precision in deduction and analogy, known as Al-Imam al-A'zam.",
    teachers: ["حماد بن أبي سليمان", "عطاء بن أبي رباح", "نافع مولى ابن عمر"],
    students: ["أبو يوسف", "محمد الشيباني", "زفر بن الهذيل"],
    books: ["الفقه الأكبر", "العالم والمتعلم"],
    madhhab: "الحنفي",
    region: "الكوفة",
    century: "2",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  },
  {
    id: "3",
    nameArabic: "الإمام مالك بن أنس",
    nameEnglish: "Imam Malik ibn Anas",
    birthYear: { hijri: 93, gregorian: 711 },
    deathYear: { hijri: 179, gregorian: 795 },
    biography: "إمام دار الهجرة، صاحب الموطأ، وإمام المذهب المالكي. كان محدثاً وفقيهاً جليلاً، ومن أعلام التابعين.",
    biographyEnglish: "The Imam of Dar al-Hijrah (Medina), author of Al-Muwatta, and founder of the Maliki madhab. He was a great hadith scholar and jurist.",
    teachers: ["نافع مولى ابن عمر", "الزهري", "ربيعة الرأي"],
    students: ["الإمام الشافعي", "ابن القاسم", "أشهب"],
    books: ["الموطأ"],
    madhhab: "المالكي",
    region: "المدينة المنورة",
    century: "2",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  },
  {
    id: "4",
    nameArabic: "الإمام محمد بن إدريس الشافعي",
    nameEnglish: "Imam Al-Shafi'i",
    birthYear: { hijri: 150, gregorian: 767 },
    deathYear: { hijri: 204, gregorian: 820 },
    biography: "ناصر السنة، وصاحب الرسالة في أصول الفقه، وإمام المذهب الشافعي. جمع بين علم الحديث والفقه والأصول واللغة.",
    biographyEnglish: "The champion of Sunnah, author of Al-Risala on principles of jurisprudence, and founder of the Shafi'i madhab. He combined hadith, jurisprudence, principles, and language.",
    teachers: ["الإمام مالك", "محمد بن الحسن الشيباني", "سفيان بن عيينة"],
    students: ["الإمام أحمد", "البويطي", "المزني"],
    books: ["الرسالة", "الأم", "السنن المأثورة"],
    madhhab: "الشافعي",
    region: "مكة - مصر",
    century: "3",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  },
  {
    id: "5",
    nameArabic: "الإمام محمد بن إسماعيل البخاري",
    nameEnglish: "Imam Al-Bukhari",
    birthYear: { hijri: 194, gregorian: 810 },
    deathYear: { hijri: 256, gregorian: 870 },
    biography: "صاحب أصح كتاب بعد كتاب الله، الجامع الصحيح المعروف بصحيح البخاري. إمام المحدثين وأمير المؤمنين في الحديث.",
    biographyEnglish: "Author of the most authentic book after the Quran, Al-Jami' al-Sahih known as Sahih al-Bukhari. The Imam of hadith scholars and Amir al-Mu'minin in hadith.",
    teachers: ["إسحاق بن راهويه", "علي بن المديني", "يحيى بن معين"],
    students: ["الإمام مسلم", "الترمذي", "النسائي"],
    books: ["الجامع الصحيح", "الأدب المفرد", "التاريخ الكبير"],
    madhhab: "أهل الحديث",
    region: "بخارى",
    century: "3",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  },
  {
    id: "6",
    nameArabic: "الحسن البصري",
    nameEnglish: "Hasan al-Basri",
    birthYear: { hijri: 21, gregorian: 642 },
    deathYear: { hijri: 110, gregorian: 728 },
    biography: "سيد التابعين، وإمام الزهاد والعباد. كان من أجلّ علماء البصرة، اشتهر بورعه وعلمه وحكمته.",
    biographyEnglish: "The master of the Tabi'een, and Imam of the ascetics and worshippers. He was among the greatest scholars of Basra, famous for his piety, knowledge, and wisdom.",
    teachers: ["علي بن أبي طالب", "عثمان بن عفان", "أنس بن مالك"],
    students: ["قتادة", "أيوب السختياني", "يونس بن عبيد"],
    books: ["رسائل ومواعظ منثورة"],
    madhhab: "السلف الصالح",
    region: "البصرة",
    century: "1",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  },
  {
    id: "7",
    nameArabic: "سعيد بن جبير",
    nameEnglish: "Sa'id ibn Jubayr",
    birthYear: { hijri: 45, gregorian: 665 },
    deathYear: { hijri: 95, gregorian: 713 },
    biography: "من أعلام التابعين، تلميذ ابن عباس، كان إماماً في التفسير والفقه والعبادة. استشهد في عهد الحجاج.",
    biographyEnglish: "One of the distinguished Tabi'een, student of Ibn Abbas, he was an Imam in Quranic interpretation, jurisprudence, and worship. He was martyred during the time of Al-Hajjaj.",
    teachers: ["ابن عباس", "ابن عمر", "أبو سعيد الخدري"],
    students: ["الأعمش", "منصور بن المعتمر", "أبو إسحاق"],
    books: ["تفسير منقول"],
    madhhab: "السلف الصالح",
    region: "الكوفة",
    century: "1",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  },
  {
    id: "8",
    nameArabic: "مجاهد بن جبر",
    nameEnglish: "Mujahid ibn Jabr",
    birthYear: { hijri: 21, gregorian: 642 },
    deathYear: { hijri: 104, gregorian: 722 },
    biography: "إمام التفسير من التابعين، تلميذ ابن عباس حبر الأمة. اشتهر بتفسيره للقرآن الكريم.",
    biographyEnglish: "The Imam of Quranic interpretation among the Tabi'een, student of Ibn Abbas the scholar of the Ummah. He was famous for his Quranic commentary.",
    teachers: ["ابن عباس", "أبو هريرة", "عائشة أم المؤمنين"],
    students: ["سفيان الثوري", "الأعمش", "ابن أبي نجيح"],
    books: ["تفسير مجاهد"],
    madhhab: "السلف الصالح",
    region: "مكة",
    century: "1",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  }
];

export const mockQuotes = [
  {
    id: 1,
    text: "من طلب العلم لوجه الله كفاه الله ما أهمّه من أمر دنياه وآخرته",
    author: "الحسن البصري",
    translation: "Whoever seeks knowledge for the sake of Allah, Allah will suffice him in his worldly and otherworldly affairs"
  },
  {
    id: 2,
    text: "العلم بالتعلم والحلم بالتحلم",
    author: "الإمام الشافعي",
    translation: "Knowledge comes through learning and patience comes through practicing patience"
  },
  {
    id: 3,
    text: "لا يكون العالم عالماً حتى لا يحسد من فوقه ولا يحقر من دونه ولا يأخذ على علمه ثمناً",
    author: "الإمام أحمد",
    translation: "A scholar is not truly a scholar until he doesn't envy those above him, doesn't belittle those below him, and doesn't take payment for his knowledge"
  }
];