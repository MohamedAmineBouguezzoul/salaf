import React from 'react';
import { BookOpen, Star, Users } from 'lucide-react';
import IslamicPattern from './IslamicPattern';
import { mockQuotes } from '../data/mock';

const HeroSection = ({ isArabic = true }) => {
  const randomQuote = mockQuotes[Math.floor(Math.random() * mockQuotes.length)];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      <IslamicPattern className="text-green-600" opacity={0.05} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${isArabic ? 'text-right' : 'text-left'}`}
              style={{ 
                fontFamily: 'Amiri, serif',
                background: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {isArabic ? 'علماء السلف الصالح' : 'The Righteous Predecessors'}
            </h1>
            <p 
              className={`text-xl sm:text-2xl text-green-700 mb-8 max-w-4xl mx-auto leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic 
                ? 'تعرّف على سير وتراث علماء الأمة من الصحابة والتابعين وتابعي التابعين - الذين هم خير القرون'
                : 'Discover the lives and legacy of the scholars of the Ummah from the Companions, Tabi\'een, and their followers - who are the best of generations'
              }
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center shadow-md">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-green-800 mb-2"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {isArabic ? '٨+' : '8+'}
              </h3>
              <p 
                className="text-green-600"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {isArabic ? 'علماء مختارين' : 'Selected Scholars'}
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center shadow-md">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-green-800 mb-2"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {isArabic ? '٣ قرون' : '3 Centuries'}
              </h3>
              <p 
                className="text-green-600"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {isArabic ? 'خير القرون' : 'Best Generations'}
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center shadow-md">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-green-800 mb-2"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {isArabic ? '٤ مذاهب' : '4 Madhabs'}
              </h3>
              <p 
                className="text-green-600"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {isArabic ? 'المذاهب الأربعة' : 'Major Schools'}
              </p>
            </div>
          </div>

          {/* Quote of the Day */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 
              className="text-lg font-semibold text-green-700 mb-4"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic ? 'حكمة اليوم' : 'Quote of the Day'}
            </h3>
            <blockquote 
              className={`text-xl sm:text-2xl text-green-800 mb-4 ${isArabic ? 'text-right' : 'text-center'} leading-relaxed`}
              style={{ fontFamily: 'Amiri, serif' }}
            >
              "{randomQuote.text}"
            </blockquote>
            <cite 
              className={`text-green-600 font-medium ${isArabic ? 'text-right' : 'text-center'} block`}
              style={{ fontFamily: 'Amiri, serif' }}
            >
              — {randomQuote.author}
            </cite>
            {!isArabic && (
              <p className="text-sm text-green-500 mt-2 italic">
                {randomQuote.translation}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;