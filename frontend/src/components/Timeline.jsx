import React from 'react';
import ScholarCard from './ScholarCard';
import IslamicPattern from './IslamicPattern';

const Timeline = ({ scholars, onScholarClick, isArabic = true }) => {
  // Group scholars by century
  const scholarsByCentury = scholars.reduce((acc, scholar) => {
    const century = Math.ceil(scholar.deathYear.hijri / 100);
    if (!acc[century]) {
      acc[century] = [];
    }
    acc[century].push(scholar);
    return acc;
  }, {});

  // Sort scholars within each century by death year
  Object.keys(scholarsByCentury).forEach(century => {
    scholarsByCentury[century].sort((a, b) => a.deathYear.hijri - b.deathYear.hijri);
  });

  return (
    <section id="timeline" className="relative py-20 bg-gradient-to-b from-white to-green-50">
      <IslamicPattern className="text-green-600" opacity={0.03} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-green-800 mb-6"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {isArabic ? 'الخط الزمني للعلماء' : 'Scholars Timeline'}
          </h2>
          <p 
            className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {isArabic 
              ? 'رحلة زمنية عبر القرون الثلاثة الأولى المباركة، من الصحابة إلى التابعين وتابعي التابعين'
              : 'A chronological journey through the first three blessed centuries, from the Companions to the Tabi\'een and their followers'
            }
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {Object.keys(scholarsByCentury)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map((century) => (
            <div key={century} className="relative">
              {/* Century Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-xl mb-4">
                  <span 
                    className="text-white text-2xl font-bold"
                    style={{ fontFamily: 'Amiri, serif' }}
                  >
                    {century}
                  </span>
                </div>
                <h3 
                  className="text-2xl font-bold text-green-800 mb-2"
                  style={{ fontFamily: 'Amiri, serif' }}
                >
                  {isArabic ? `القرن ${century} الهجري` : `${century}${century === '1' ? 'st' : century === '2' ? 'nd' : century === '3' ? 'rd' : 'th'} Century AH`}
                </h3>
                <p 
                  className="text-green-600"
                  style={{ fontFamily: 'Amiri, serif' }}
                >
                  {isArabic 
                    ? `${Math.floor(((parseInt(century) - 1) * 100 + 622) / 10) * 10} - ${Math.floor((parseInt(century) * 100 + 622) / 10) * 10} م`
                    : `${Math.floor(((parseInt(century) - 1) * 100 + 622) / 10) * 10} - ${Math.floor((parseInt(century) * 100 + 622) / 10) * 10} CE`
                  }
                </p>
              </div>

              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-200 to-green-300 rounded-full" />

              {/* Scholars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {scholarsByCentury[century].map((scholar, index) => (
                  <div 
                    key={scholar.id}
                    className="relative"
                    style={{
                      animationDelay: `${index * 150}ms`
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute -left-8 top-6 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg" />
                    
                    <div className="animate-fadeInUp">
                      <ScholarCard
                        scholar={scholar}
                        onClick={onScholarClick}
                        isArabic={isArabic}
                      />
                    </div>

                    {/* Death Year Label */}
                    <div className="text-center mt-2">
                      <span 
                        className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                        style={{ fontFamily: 'Amiri, serif' }}
                      >
                        {isArabic ? `${scholar.deathYear.hijri} هـ` : `${scholar.deathYear.hijri} AH`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 
              className="text-2xl font-bold text-green-800 mb-4"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic ? 'اكتشف المزيد' : 'Discover More'}
            </h3>
            <p 
              className="text-green-600 mb-6"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic 
                ? 'انقر على أي عالم لتتعرف على سيرته وتلاميذه ومؤلفاته'
                : 'Click on any scholar to learn about their biography, students, and works'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;