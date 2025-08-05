import React from 'react';
import { X, Calendar, MapPin, Book, Users, GraduationCap, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import IslamicPattern from './IslamicPattern';

const ScholarModal = ({ scholar, isOpen, onClose, isArabic = true }) => {
  if (!scholar) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-md">
        <div className="relative">
          <IslamicPattern className="text-green-600" opacity={0.05} />
          
          {/* Header */}
          <DialogHeader className="relative z-10 pb-6">
            <div className="flex items-start space-x-6">
              {/* Scholar Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-xl">
                  <img
                    src={scholar.image}
                    alt={scholar.nameArabic}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-28 h-28 rounded-full bg-green-700 flex items-center justify-center text-white text-4xl font-bold" style={{ display: 'none', fontFamily: 'Amiri, serif' }}>
                    {scholar.nameArabic.split(' ')[1]?.charAt(0) || 'س'}
                  </div>
                </div>
              </div>

              {/* Scholar Info */}
              <div className="flex-grow">
                <DialogTitle 
                  className={`text-3xl font-bold text-green-800 mb-3 ${isArabic ? 'text-right' : 'text-left'}`}
                  style={{ fontFamily: 'Amiri, serif' }}
                >
                  {isArabic ? scholar.nameArabic : scholar.nameEnglish}
                </DialogTitle>
                
                {/* Alternative Name */}
                <p 
                  className={`text-lg text-green-600 mb-4 ${isArabic ? 'text-right' : 'text-left'}`}
                  style={{ fontFamily: 'Amiri, serif' }}
                >
                  {isArabic ? scholar.nameEnglish : scholar.nameArabic}
                </p>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <div>
                      <span 
                        className="text-sm text-gray-500 block"
                        style={{ fontFamily: 'Amiri, serif' }}
                      >
                        {isArabic ? 'الولادة' : 'Birth'}
                      </span>
                      <span 
                        className="text-green-800 font-medium"
                        style={{ fontFamily: 'Amiri, serif' }}
                      >
                        {isArabic 
                          ? `${scholar.birthYear.hijri} هـ / ${scholar.birthYear.gregorian} م`
                          : `${scholar.birthYear.hijri} AH / ${scholar.birthYear.gregorian} CE`
                        }
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-green-600" />
                    <div>
                      <span 
                        className="text-sm text-gray-500 block"
                        style={{ fontFamily: 'Amiri, serif' }}
                      >
                        {isArabic ? 'الوفاة' : 'Death'}
                      </span>
                      <span 
                        className="text-green-800 font-medium"
                        style={{ fontFamily: 'Amiri, serif' }}
                      >
                        {isArabic 
                          ? `${scholar.deathYear.hijri} هـ / ${scholar.deathYear.gregorian} م`
                          : `${scholar.deathYear.hijri} AH / ${scholar.deathYear.gregorian} CE`
                        }
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <span 
                        className="text-sm text-gray-500 block"
                        style={{ fontFamily: 'Amiri, serif' }}
                      >
                        {isArabic ? 'المنطقة' : 'Region'}
                      </span>
                      <span 
                        className="text-green-800 font-medium"
                        style={{ fontFamily: 'Amiri, serif' }}
                      >
                        {scholar.region}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Badge 
                      className="bg-green-100 text-green-800"
                      style={{ fontFamily: 'Amiri, serif' }}
                    >
                      {scholar.madhhab}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </DialogHeader>

          <div className="relative z-10 space-y-8">
            <Separator className="bg-green-200" />

            {/* Biography */}
            <div>
              <h3 
                className={`text-xl font-bold text-green-800 mb-4 flex items-center space-x-2 ${isArabic ? 'text-right' : 'text-left'}`}
                style={{ fontFamily: 'Amiri, serif' }}
              >
                <Book className="w-5 h-5 text-green-600" />
                <span>{isArabic ? 'النبذة التعريفية' : 'Biography'}</span>
              </h3>
              <p 
                className={`text-green-700 leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {isArabic ? scholar.biography : scholar.biographyEnglish}
              </p>
            </div>

            <Separator className="bg-green-200" />

            {/* Teachers */}
            <div>
              <h3 
                className={`text-xl font-bold text-green-800 mb-4 flex items-center space-x-2 ${isArabic ? 'text-right' : 'text-left'}`}
                style={{ fontFamily: 'Amiri, serif' }}
              >
                <GraduationCap className="w-5 h-5 text-green-600" />
                <span>{isArabic ? 'شيوخه' : 'Teachers'}</span>
              </h3>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`}>
                {scholar.teachers?.map((teacher, index) => (
                  <div 
                    key={index}
                    className="bg-green-50 rounded-lg p-3 border border-green-100 hover:bg-green-100 transition-colors"
                  >
                    <span 
                      className="text-green-800 font-medium"
                      style={{ fontFamily: 'Amiri, serif' }}
                    >
                      {teacher}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-green-200" />

            {/* Students */}
            <div>
              <h3 
                className={`text-xl font-bold text-green-800 mb-4 flex items-center space-x-2 ${isArabic ? 'text-right' : 'text-left'}`}
                style={{ fontFamily: 'Amiri, serif' }}
              >
                <Users className="w-5 h-5 text-green-600" />
                <span>{isArabic ? 'تلاميذه' : 'Students'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {scholar.students?.map((student, index) => (
                  <div 
                    key={index}
                    className="bg-green-50 rounded-lg p-3 border border-green-100 hover:bg-green-100 transition-colors"
                  >
                    <span 
                      className="text-green-800 font-medium"
                      style={{ fontFamily: 'Amiri, serif' }}
                    >
                      {student}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-green-200" />

            {/* Books */}
            <div>
              <h3 
                className={`text-xl font-bold text-green-800 mb-4 flex items-center space-x-2 ${isArabic ? 'text-right' : 'text-left'}`}
                style={{ fontFamily: 'Amiri, serif' }}
              >
                <Book className="w-5 h-5 text-green-600" />
                <span>{isArabic ? 'مؤلفاته' : 'Works'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {scholar.books?.map((book, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200 hover:shadow-md transition-all"
                  >
                    <span 
                      className="text-green-800 font-semibold"
                      style={{ fontFamily: 'Amiri, serif' }}
                    >
                      {book}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScholarModal;