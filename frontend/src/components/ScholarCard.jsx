import React from 'react';
import { Calendar, MapPin, Book, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const ScholarCard = ({ scholar, onClick, isArabic = true }) => {
  return (
    <Card 
      className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-green-100 hover:border-green-300"
      onClick={() => onClick(scholar)}
    >
      <CardContent className="p-6">
        {/* Scholar Image */}
        <div className="relative mb-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <img
              src={scholar.image}
              alt={scholar.nameArabic}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-white text-xl font-bold" style={{ display: 'none', fontFamily: 'Amiri, serif' }}>
              {scholar.nameArabic.split(' ')[1]?.charAt(0) || 'س'}
            </div>
          </div>
        </div>

        {/* Scholar Name */}
        <div className="text-center mb-4">
          <h3 
            className={`text-lg font-bold text-green-800 mb-1 ${isArabic ? 'text-right' : 'text-center'} group-hover:text-green-900 transition-colors`}
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {isArabic ? scholar.nameArabic : scholar.nameEnglish}
          </h3>
          <p 
            className={`text-sm text-green-600 ${isArabic ? 'text-right' : 'text-center'}`}
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {!isArabic && scholar.nameArabic}
          </p>
        </div>

        {/* Death Year */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Calendar className="w-4 h-4 text-green-500" />
          <span 
            className="text-sm text-green-700 font-medium"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {isArabic 
              ? `${scholar.deathYear.hijri} هـ / ${scholar.deathYear.gregorian} م`
              : `${scholar.deathYear.hijri} AH / ${scholar.deathYear.gregorian} CE`
            }
          </span>
        </div>

        {/* Region */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <MapPin className="w-4 h-4 text-green-500" />
          <span 
            className="text-sm text-green-600"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {scholar.region}
          </span>
        </div>

        {/* Madhhab Badge */}
        <div className="flex justify-center mb-4">
          <Badge 
            className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {scholar.madhhab}
          </Badge>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 text-xs text-green-600">
          <div className="flex items-center space-x-1">
            <Book className="w-3 h-3" />
            <span style={{ fontFamily: 'Amiri, serif' }}>
              {isArabic ? `${scholar.books?.length || 0} كتاب` : `${scholar.books?.length || 0} books`}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-3 h-3" />
            <span style={{ fontFamily: 'Amiri, serif' }}>
              {isArabic ? `${scholar.students?.length || 0} تلميذ` : `${scholar.students?.length || 0} students`}
            </span>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      </CardContent>
    </Card>
  );
};

export default ScholarCard;