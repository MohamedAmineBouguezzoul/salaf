import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import FilterBar from './components/FilterBar';
import ScholarModal from './components/ScholarModal';
import { mockScholars } from './data/mock';
import { Toaster } from './components/ui/toaster';

// Import Google Fonts
const loadGoogleFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

function App() {
  const [scholars] = useState(mockScholars);
  const [filteredScholars, setFilteredScholars] = useState(mockScholars);
  const [selectedScholar, setSelectedScholar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    century: null,
    madhhab: null,
    region: null
  });
  const [isArabic, setIsArabic] = useState(true);

  // Load Google Fonts on component mount
  useEffect(() => {
    loadGoogleFonts();
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = scholars;

    // Apply text search
    if (searchQuery) {
      filtered = filtered.filter(scholar => 
        scholar.nameArabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scholar.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scholar.biography.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scholar.biographyEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scholar.madhhab.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scholar.region.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    if (filters.century) {
      filtered = filtered.filter(scholar => 
        Math.ceil(scholar.deathYear.hijri / 100).toString() === filters.century
      );
    }

    if (filters.madhhab) {
      filtered = filtered.filter(scholar => 
        scholar.madhhab === filters.madhhab
      );
    }

    if (filters.region) {
      filtered = filtered.filter(scholar => 
        scholar.region === filters.region
      );
    }

    setFilteredScholars(filtered);
  }, [scholars, searchQuery, filters]);

  const handleScholarClick = (scholar) => {
    setSelectedScholar(scholar);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedScholar(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      century: null,
      madhhab: null,
      region: null
    });
    setSearchQuery('');
  };

  const handleLanguageToggle = () => {
    setIsArabic(prev => !prev);
  };

  return (
    <div className={`App min-h-screen bg-gradient-to-b from-green-50 to-white ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <Header
        onSearch={handleSearch}
        onLanguageToggle={handleLanguageToggle}
        isArabic={isArabic}
      />

      {/* Hero Section */}
      <HeroSection isArabic={isArabic} />

      {/* Scholars Section */}
      <section id="scholars" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-green-800 mb-6"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic ? 'العلماء المختارون' : 'Selected Scholars'}
            </h2>
            <p 
              className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic 
                ? 'مجموعة مختارة من علماء السلف الصالح الذين أثروا في الأمة الإسلامية بعلمهم وتقواهم'
                : 'A curated collection of righteous predecessors who influenced the Islamic Ummah through their knowledge and piety'
              }
            </p>
          </div>

          {/* Filter Bar */}
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            isArabic={isArabic}
            totalScholars={scholars.length}
            filteredCount={filteredScholars.length}
          />

          {/* Timeline */}
          <Timeline
            scholars={filteredScholars}
            onScholarClick={handleScholarClick}
            isArabic={isArabic}
          />

          {/* No Results */}
          {filteredScholars.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 
                className="text-2xl font-bold text-green-800 mb-4"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {isArabic ? 'لم يتم العثور على نتائج' : 'No Results Found'}
              </h3>
              <p 
                className="text-green-600 mb-8"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {isArabic 
                  ? 'جرب تعديل مرشحات البحث أو البحث بكلمات مختلفة'
                  : 'Try adjusting your search filters or using different keywords'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic ? 'علماء السلف الصالح' : 'The Righteous Predecessors'}
            </h3>
            <p 
              className="text-green-200"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic 
                ? 'حفظ تراث العلماء الأوائل للأجيال القادمة'
                : 'Preserving the legacy of early scholars for future generations'
              }
            </p>
          </div>
          
          <div className="border-t border-green-700 pt-6">
            <p 
              className="text-green-200 text-sm"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic 
                ? '© ٢٠٢٥ - جميع الحقوق محفوظة'
                : '© 2025 - All rights reserved'
              }
            </p>
          </div>
        </div>
      </footer>

      {/* Scholar Modal */}
      <ScholarModal
        scholar={selectedScholar}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        isArabic={isArabic}
      />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;