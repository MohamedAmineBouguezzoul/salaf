from database import ScholarService, QuoteService
from models import ScholarCreate, QuoteCreate, YearRange
import asyncio

# Comprehensive scholar data across all centuries
scholars_data = [
    # 1st Century Hijri (7th Century CE) - Companions and Tabi'een
    {
        "nameArabic": "الحسن البصري",
        "nameEnglish": "Hasan al-Basri",
        "birthYear": {"hijri": 21, "gregorian": 642},
        "deathYear": {"hijri": 110, "gregorian": 728},
        "biography": "سيد التابعين، وإمام الزهاد والعباد. كان من أجلّ علماء البصرة، اشتهر بورعه وعلمه وحكمته.",
        "biographyEnglish": "The master of the Tabi'een, and Imam of the ascetics and worshippers. He was among the greatest scholars of Basra, famous for his piety, knowledge, and wisdom.",
        "teachers": ["علي بن أبي طالب", "عثمان بن عفان", "أنس بن مالك"],
        "students": ["قتادة", "أيوب السختياني", "يونس بن عبيد"],
        "books": ["رسائل ومواعظ منثورة"],
        "madhhab": "السلف الصالح",
        "region": "البصرة",
        "century": 1,
        "image": "https://images.unsplash.com/photo-1702206310832-d1aa0401af71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwbWFudXNjcmlwdHN8ZW58MHx8fHwxNzU0NDEyODgzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
        "nameArabic": "سعيد بن جبير",
        "nameEnglish": "Sa'id ibn Jubayr",
        "birthYear": {"hijri": 45, "gregorian": 665},
        "deathYear": {"hijri": 95, "gregorian": 713},
        "biography": "من أعلام التابعين، تلميذ ابن عباس، كان إماماً في التفسير والفقه والعبادة. استشهد في عهد الحجاج.",
        "biographyEnglish": "One of the distinguished Tabi'een, student of Ibn Abbas, he was an Imam in Quranic interpretation, jurisprudence, and worship. He was martyred during the time of Al-Hajjaj.",
        "teachers": ["ابن عباس", "ابن عمر", "أبو سعيد الخدري"],
        "students": ["الأعمش", "منصور بن المعتمر", "أبو إسحاق"],
        "books": ["تفسير منقول"],
        "madhhab": "السلف الصالح",
        "region": "الكوفة",
        "century": 1,
        "image": "https://images.unsplash.com/photo-1598520058913-745d0a55859a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxJc2xhbWljJTIwbWFudXNjcmlwdHN8ZW58MHx8fHwxNzU0NDEyODgzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
        "nameArabic": "مجاهد بن جبر",
        "nameEnglish": "Mujahid ibn Jabr",
        "birthYear": {"hijri": 21, "gregorian": 642},
        "deathYear": {"hijri": 104, "gregorian": 722},
        "biography": "إمام التفسير من التابعين، تلميذ ابن عباس حبر الأمة. اشتهر بتفسيره للقرآن الكريم.",
        "biographyEnglish": "The Imam of Quranic interpretation among the Tabi'een, student of Ibn Abbas the scholar of the Ummah. He was famous for his Quranic commentary.",
        "teachers": ["ابن عباس", "أبو هريرة", "عائشة أم المؤمنين"],
        "students": ["سفيان الثوري", "الأعمش", "ابن أبي نجيح"],
        "books": ["تفسير مجاهد"],
        "madhhab": "السلف الصالح",
        "region": "مكة",
        "century": 1,
        "image": "https://images.unsplash.com/photo-1720701574998-d68020bce2bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxJc2xhbWljJTIwbWFudXNjcmlwdHN8ZW58MHx8fHwxNzU0NDEyODgzfDA&ixlib=rb-4.1.0&q=85"
    },
    
    # 2nd Century Hijri (8th Century CE) - The Four Imams Era
    {
        "nameArabic": "الإمام أبو حنيفة النعمان",
        "nameEnglish": "Imam Abu Hanifa",
        "birthYear": {"hijri": 80, "gregorian": 699},
        "deathYear": {"hijri": 150, "gregorian": 767},
        "biography": "إمام المذهب الحنفي، وأحد الأئمة الأربعة، اشتهر بدقته في الاستنباط والقياس، ولقب بالإمام الأعظم.",
        "biographyEnglish": "The founder of the Hanafi madhab, one of the four great Imams, famous for his precision in deduction and analogy, known as Al-Imam al-A'zam.",
        "teachers": ["حماد بن أبي سليمان", "عطاء بن أبي رباح", "نافع مولى ابن عمر"],
        "students": ["أبو يوسف", "محمد الشيباني", "زفر بن الهذيل"],
        "books": ["الفقه الأكبر", "العالم والمتعلم"],
        "madhhab": "الحنفي",
        "region": "الكوفة",
        "century": 2,
        "image": "https://images.unsplash.com/photo-1565719376829-614b70ee220f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxJc2xhbWljJTIwbWFudXNjcmlwdHN8ZW58MHx8fHwxNzU0NDEyODgzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
        "nameArabic": "الإمام مالك بن أنس",
        "nameEnglish": "Imam Malik ibn Anas",
        "birthYear": {"hijri": 93, "gregorian": 711},
        "deathYear": {"hijri": 179, "gregorian": 795},
        "biography": "إمام دار الهجرة، صاحب الموطأ، وإمام المذهب المالكي. كان محدثاً وفقيهاً جليلاً، ومن أعلام التابعين.",
        "biographyEnglish": "The Imam of Dar al-Hijrah (Medina), author of Al-Muwatta, and founder of the Maliki madhab. He was a great hadith scholar and jurist.",
        "teachers": ["نافع مولى ابن عمر", "الزهري", "ربيعة الرأي"],
        "students": ["الإمام الشافعي", "ابن القاسم", "أشهب"],
        "books": ["الموطأ"],
        "madhhab": "المالكي",
        "region": "المدينة المنورة",
        "century": 2,
        "image": "https://images.pexels.com/photos/17345426/pexels-photo-17345426.jpeg"
    },
    
    # 3rd Century Hijri (9th Century CE) - Golden Age Continues
    {
        "nameArabic": "الإمام محمد بن إدريس الشافعي",
        "nameEnglish": "Imam Al-Shafi'i",
        "birthYear": {"hijri": 150, "gregorian": 767},
        "deathYear": {"hijri": 204, "gregorian": 820},
        "biography": "ناصر السنة، وصاحب الرسالة في أصول الفقه، وإمام المذهب الشافعي. جمع بين علم الحديث والفقه والأصول واللغة.",
        "biographyEnglish": "The champion of Sunnah, author of Al-Risala on principles of jurisprudence, and founder of the Shafi'i madhab. He combined hadith, jurisprudence, principles, and language.",
        "teachers": ["الإمام مالك", "محمد بن الحسن الشيباني", "سفيان بن عيينة"],
        "students": ["الإمام أحمد", "البويطي", "المزني"],
        "books": ["الرسالة", "الأم", "السنن المأثورة"],
        "madhhab": "الشافعي",
        "region": "مكة - مصر",
        "century": 3,
        "image": "https://images.pexels.com/photos/27628061/pexels-photo-27628061.jpeg"
    },
    {
        "nameArabic": "الإمام أحمد بن حنبل",
        "nameEnglish": "Imam Ahmad ibn Hanbal",
        "birthYear": {"hijri": 164, "gregorian": 780},
        "deathYear": {"hijri": 241, "gregorian": 855},
        "biography": "إمام أهل السنة والجماعة، صاحب المسند المشهور، وإمام المذهب الحنبلي. كان من أكبر المدافعين عن السنة النبوية في وجه البدع والضلالات.",
        "biographyEnglish": "The Imam of Ahl al-Sunnah wal-Jama'ah, author of the famous Musnad, and founder of the Hanbali madhab. He was one of the greatest defenders of the Prophetic Sunnah against innovations.",
        "teachers": ["الإمام الشافعي", "هُشَيم بن بشير", "وكيع بن الجراح"],
        "students": ["الإمام البخاري", "الإمام مسلم", "أبو داود"],
        "books": ["المسند", "الزهد", "المقدمة في أصول التفسير"],
        "madhhab": "الحنبلي",
        "region": "بغداد",
        "century": 3,
        "image": "https://images.unsplash.com/photo-1603801571246-be066de0c73b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxBcmFiaWMlMjBjYWxsaWdyYXBoeXxlbnwwfHx8fDE3NTQ0MTI4OTB8MA&ixlib=rb-4.1.0&q=85"
    },
    {
        "nameArabic": "الإمام محمد بن إسماعيل البخاري",
        "nameEnglish": "Imam Al-Bukhari",
        "birthYear": {"hijri": 194, "gregorian": 810},
        "deathYear": {"hijri": 256, "gregorian": 870},
        "biography": "صاحب أصح كتاب بعد كتاب الله، الجامع الصحيح المعروف بصحيح البخاري. إمام المحدثين وأمير المؤمنين في الحديث.",
        "biographyEnglish": "Author of the most authentic book after the Quran, Al-Jami' al-Sahih known as Sahih al-Bukhari. The Imam of hadith scholars and Amir al-Mu'minin in hadith.",
        "teachers": ["إسحاق بن راهويه", "علي بن المديني", "يحيى بن معين"],
        "students": ["الإمام مسلم", "الترمذي", "النسائي"],
        "books": ["الجامع الصحيح", "الأدب المفرد", "التاريخ الكبير"],
        "madhhab": "أهل الحديث",
        "region": "بخارى",
        "century": 3,
        "image": "https://images.unsplash.com/photo-1601480905449-90fca867ad37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxBcmFiaWMlMjBjYWxsaWdyYXBoeXxlbnwwfHx8fDE3NTQ0MTI4OTB8MA&ixlib=rb-4.1.0&q=85"
    },
    
    # 4th-5th Century Hijri (10th-11th Century CE)
    {
        "nameArabic": "الإمام أبو حامد الغزالي",
        "nameEnglish": "Imam Al-Ghazali",
        "birthYear": {"hijri": 450, "gregorian": 1058},
        "deathYear": {"hijri": 505, "gregorian": 1111},
        "biography": "حجة الإسلام، أحد أعظم علماء الأمة، جمع بين الفقه والأصول والفلسفة والتصوف. مؤلف إحياء علوم الدين.",
        "biographyEnglish": "The Proof of Islam, one of the greatest scholars of the Ummah, combining jurisprudence, principles, philosophy, and mysticism. Author of Revival of the Religious Sciences.",
        "teachers": ["إمام الحرمين الجويني", "أبو المعالي"],
        "students": ["أبو بكر ابن العربي", "ابن تومرت"],
        "books": ["إحياء علوم الدين", "المستصفى", "تهافت الفلاسفة"],
        "madhhab": "الشافعي",
        "region": "خراسان",
        "century": 5,
        "image": "https://images.unsplash.com/photo-1628962691167-27b7db9997e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxBcmFiaWMlMjBjYWxsaWdyYXBoeXxlbnwwfHx8fDE3NTQ0MTI4OTB8MA&ixlib=rb-4.1.0&q=85"
    },
    
    # 6th-7th Century Hijri (12th-13th Century CE)
    {
        "nameArabic": "ابن رشد الحفيد",
        "nameEnglish": "Ibn Rushd (Averroes)",
        "birthYear": {"hijri": 520, "gregorian": 1126},
        "deathYear": {"hijri": 595, "gregorian": 1198},
        "biography": "الفيلسوف الأندلسي، قاضي القضاة، جمع بين الفقه والفلسفة والطب. أحد أعظم شراح أرسطو في التاريخ الإسلامي.",
        "biographyEnglish": "The Andalusian philosopher, Chief Judge, who combined jurisprudence, philosophy, and medicine. One of the greatest commentators on Aristotle in Islamic history.",
        "teachers": ["ابن رشد الجد", "ابن زهر"],
        "students": ["تلاميذه في قرطبة"],
        "books": ["تهافت التهافت", "بداية المجتهد", "الكليات في الطب"],
        "madhhab": "المالكي",
        "region": "الأندلس",
        "century": 6,
        "image": "https://images.unsplash.com/photo-1603224288850-cf0a7939278c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxBcmFiaWMlMjBjYWxsaWdyYXBoeXxlbnwwfHx8fDE3NTQ0MTI4OTB8MA&ixlib=rb-4.1.0&q=85"
    },
    {
        "nameArabic": "الإمام النووي",
        "nameEnglish": "Imam Al-Nawawi",
        "birthYear": {"hijri": 631, "gregorian": 1233},
        "deathYear": {"hijri": 676, "gregorian": 1277},
        "biography": "محيي الدين النووي، شارح صحيح مسلم، ومؤلف رياض الصالحين والأربعين النووية. من أجل علماء الشام.",
        "biographyEnglish": "Muhyi al-Din al-Nawawi, commentator of Sahih Muslim, author of Riyadh al-Salihin and Al-Arba'een al-Nawawiyyah. One of the greatest scholars of Syria.",
        "teachers": ["إسحاق المغربي", "عبد الرحمن بن نوح"],
        "students": ["علاء الدين ابن العطار", "شمس الدين ابن جماعة"],
        "books": ["شرح صحيح مسلم", "رياض الصالحين", "الأربعون النووية"],
        "madhhab": "الشافعي",
        "region": "الشام",
        "century": 7,
        "image": "https://images.unsplash.com/photo-1702206310832-d1aa0401af71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxJc2xhbWljJTIwbWFudXNjcmlwdHN8ZW58MHx8fHwxNzU0NDEyODgzfDA&ixlib=rb-4.1.0&q=85"
    },
    
    # 8th Century Hijri (14th Century CE)
    {
        "nameArabic": "ابن تيمية الحراني",
        "nameEnglish": "Ibn Taymiyyah",
        "birthYear": {"hijri": 661, "gregorian": 1263},
        "deathYear": {"hijri": 728, "gregorian": 1328},
        "biography": "شيخ الإسلام، المجدد الكبير، دافع عن السنة ضد البدع والانحرافات. أحد أعظم المجتهدين في تاريخ الإسلام.",
        "biographyEnglish": "Sheikh al-Islam, the great reviver, who defended the Sunnah against innovations and deviations. One of the greatest mujtahids in Islamic history.",
        "teachers": ["والده عبد الحليم", "ابن عبد الدائم"],
        "students": ["ابن القيم", "ابن كثير", "الذهبي"],
        "books": ["مجموع الفتاوى", "العقيدة الواسطية", "منهاج السنة النبوية"],
        "madhhab": "الحنبلي",
        "region": "الشام",
        "century": 8,
        "image": "https://images.unsplash.com/photo-1598520058913-745d0a55859a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxJc2xhbWljJTIwbWFudXNjcmlwdHN8ZW58MHx8fHwxNzU0NDEyODgzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
        "nameArabic": "الإمام ابن كثير",
        "nameEnglish": "Ibn Kathir",
        "birthYear": {"hijri": 701, "gregorian": 1300},
        "deathYear": {"hijri": 774, "gregorian": 1373},
        "biography": "المفسر المشهور، صاحب التفسير المعروف باسمه، والمؤرخ صاحب البداية والنهاية. تلميذ ابن تيمية.",
        "biographyEnglish": "The famous commentator, author of the well-known Tafsir Ibn Kathir, and historian author of Al-Bidaya wa'l-Nihaya. Student of Ibn Taymiyyah.",
        "teachers": ["ابن تيمية", "الذهبي", "البرزالي"],
        "students": ["ابن حجي", "ابن ناصر الدين"],
        "books": ["تفسير القرآن العظيم", "البداية والنهاية", "السيرة النبوية"],
        "madhhab": "الشافعي",
        "region": "الشام",
        "century": 8,
        "image": "https://images.unsplash.com/photo-1720701574998-d68020bce2bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxJc2xhbWljJTIwbWFudXNjcmlwdHN8ZW58MHx8fHwxNzU0NDEyODgzfDA&ixlib=rb-4.1.0&q=85"
    },
    
    # 9th Century Hijri (15th Century CE)
    {
        "nameArabic": "الحافظ ابن حجر العسقلاني",
        "nameEnglish": "Ibn Hajar al-Asqalani",
        "birthYear": {"hijri": 773, "gregorian": 1372},
        "deathYear": {"hijri": 852, "gregorian": 1449},
        "biography": "أمير المؤمنين في الحديث، شارح صحيح البخاري في فتح الباري. أحد أعظم حفاظ الحديث في التاريخ الإسلامي.",
        "biographyEnglish": "Amir al-Mu'minin in hadith, commentator of Sahih al-Bukhari in Fath al-Bari. One of the greatest hadith memorizers in Islamic history.",
        "teachers": ["العراقي", "البلقيني", "ابن الملقن"],
        "students": ["السخاوي", "السيوطي", "ابن فهد"],
        "books": ["فتح الباري", "الإصابة في تمييز الصحابة", "تهذيب التهذيب"],
        "madhhab": "الشافعي",
        "region": "مصر",
        "century": 9,
        "image": "https://images.unsplash.com/photo-1565719376829-614b70ee220f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxJc2xhbWljJTIwbWFudXNjcmlwdHN8ZW58MHx8fHwxNzU0NDEyODgzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
        "nameArabic": "الإمام السيوطي",
        "nameEnglish": "Al-Suyuti",
        "birthYear": {"hijri": 849, "gregorian": 1445},
        "deathYear": {"hijri": 911, "gregorian": 1505},
        "biography": "جلال الدين السيوطي، الحافظ المؤرخ، صاحب المؤلفات الكثيرة في التفسير والحديث والتاريخ. بلغت مؤلفاته أكثر من 600 كتاب.",
        "biographyEnglish": "Jalal al-Din al-Suyuti, the hadith scholar and historian, author of numerous works in interpretation, hadith, and history. His works numbered more than 600 books.",
        "teachers": ["ابن حجر العسقلاني", "المحلي", "الكافيجي"],
        "students": ["الشعراني", "ابن طولون", "الغزي"],
        "books": ["تفسير الجلالين", "الإتقان في علوم القرآن", "الجامع الصغير"],
        "madhhab": "الشافعي",
        "region": "مصر",
        "century": 9,
        "image": "https://images.pexels.com/photos/17345426/pexels-photo-17345426.jpeg"
    },
    
    # 12th Century Hijri (18th Century CE) - Reform Period
    {
        "nameArabic": "الشاه ولي الله الدهلوي",
        "nameEnglish": "Shah Waliullah Dehlawi",
        "birthYear": {"hijri": 1114, "gregorian": 1703},
        "deathYear": {"hijri": 1176, "gregorian": 1762},
        "biography": "المجدد العظيم في شبه القارة الهندية، دعا إلى العودة للكتاب والسنة، وترجم القرآن إلى الفارسية.",
        "biographyEnglish": "The great reviver in the Indian subcontinent, called for return to the Quran and Sunnah, and translated the Quran into Persian.",
        "teachers": ["والده عبد الرحيم", "أبو طاهر الكردي"],
        "students": ["ابنه عبد العزيز", "ابنه شاه عبد القادر"],
        "books": ["حجة الله البالغة", "الفوز الكبير", "إزالة الخفاء"],
        "madhhab": "الحنفي",
        "region": "الهند",
        "century": 12,
        "image": "https://images.pexels.com/photos/27628061/pexels-photo-27628061.jpeg"
    },
    
    # 13th-14th Century Hijri (19th-20th Century CE) - Modern Era
    {
        "nameArabic": "الإمام محمد عبده",
        "nameEnglish": "Muhammad Abduh",
        "birthYear": {"hijri": 1266, "gregorian": 1849},
        "deathYear": {"hijri": 1323, "gregorian": 1905},
        "biography": "المفكر والمصلح المصري، من رواد النهضة الإسلامية الحديثة، دعا إلى التوفيق بين الإسلام والحضارة الحديثة.",
        "biographyEnglish": "The Egyptian thinker and reformer, one of the pioneers of the modern Islamic renaissance, called for reconciliation between Islam and modern civilization.",
        "teachers": ["جمال الدين الأفغاني", "درويش خضر"],
        "students": ["رشيد رضا", "قاسم أمين", "مصطفى عبد الرازق"],
        "books": ["رسالة التوحيد", "تفسير المنار", "الإسلام والنصرانية"],
        "madhhab": "الإصلاحي",
        "region": "مصر",
        "century": 14,
        "image": "https://images.unsplash.com/photo-1603801571246-be066de0c73b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxBcmFiaWMlMjBjYWxsaWdyYXBoeXxlbnwwfHx8fDE3NTQ0MTI4OTB8MA&ixlib=rb-4.1.0&q=85"
    },
    {
        "nameArabic": "الشيخ محمد ناصر الدين الألباني",
        "nameEnglish": "Muhammad Nasir al-Din al-Albani",
        "birthYear": {"hijri": 1333, "gregorian": 1914},
        "deathYear": {"hijri": 1420, "gregorian": 1999},
        "biography": "المحدث الكبير، خدم السنة النبوية بالتصحيح والتضعيف، أحيا علم الحديث في العصر الحديث.",
        "biographyEnglish": "The great hadith scholar who served the Prophetic Sunnah through authentication and criticism, reviving hadith science in the modern era.",
        "teachers": ["والده نوح الألباني", "محمد راغب الطباخ"],
        "students": ["علي الحلبي", "مشهور سلمان", "عمرو عبد المنعم"],
        "books": ["سلسلة الأحاديث الصحيحة", "سلسلة الأحاديث الضعيفة", "صحيح الجامع"],
        "madhhab": "أهل الحديث",
        "region": "الشام",
        "century": 14,
        "image": "https://images.unsplash.com/photo-1601480905449-90fca867ad37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxBcmFiaWMlMjBjYWxsaWdyYXBoeXxlbnwwfHx8fDE3NTQ0MTI4OTB8MA&ixlib=rb-4.1.0&q=85"
    }
]

# Enhanced quotes data
quotes_data = [
    {
        "text": "من طلب العلم لوجه الله كفاه الله ما أهمّه من أمر دنياه وآخرته",
        "translation": "Whoever seeks knowledge for the sake of Allah, Allah will suffice him in his worldly and otherworldly affairs",
        "author": "الحسن البصري"
    },
    {
        "text": "العلم بالتعلم والحلم بالتحلم",
        "translation": "Knowledge comes through learning and patience comes through practicing patience",
        "author": "الإمام الشافعي"
    },
    {
        "text": "لا يكون العالم عالماً حتى لا يحسد من فوقه ولا يحقر من دونه ولا يأخذ على علمه ثمناً",
        "translation": "A scholar is not truly a scholar until he doesn't envy those above him, doesn't belittle those below him, and doesn't take payment for his knowledge",
        "author": "الإمام أحمد"
    },
    {
        "text": "إنما العلم بالتعلم والفقه بالتفقه",
        "translation": "Knowledge is acquired through learning and understanding through deep study",
        "author": "الإمام البخاري"
    },
    {
        "text": "اطلبوا العلم ولو في الصين",
        "translation": "Seek knowledge even if you have to go to China",
        "author": "النبي محمد ﷺ"
    },
    {
        "text": "من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة",
        "translation": "Whoever follows a path seeking knowledge, Allah will make easy for him the path to Paradise",
        "author": "النبي محمد ﷺ"
    }
]

async def seed_database():
    """Seed the database with comprehensive scholar and quote data"""
    print("Starting database seeding...")
    
    # Clear existing data
    from database import scholars_collection, quotes_collection
    await scholars_collection.delete_many({})
    await quotes_collection.delete_many({})
    
    # Seed scholars
    for scholar_data in scholars_data:
        scholar_create = ScholarCreate(**scholar_data)
        scholar = await ScholarService.create_scholar(scholar_create)
        print(f"Created scholar: {scholar.nameEnglish}")
    
    # Seed quotes
    for quote_data in quotes_data:
        quote_create = QuoteCreate(**quote_data)
        quote = await QuoteService.create_quote(quote_create)
        print(f"Created quote by: {quote.author}")
    
    print("Database seeding completed!")

if __name__ == "__main__":
    asyncio.run(seed_database())