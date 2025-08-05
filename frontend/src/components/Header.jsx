import React, { useState } from 'react';
import { Search, Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = ({ onSearch, onLanguageToggle, isArabic = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">س</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-green-800" style={{ fontFamily: 'Amiri, serif' }}>
                {isArabic ? 'علماء السلف الصالح' : 'Salaf Scholars'}
              </h1>
              <p className="text-sm text-green-600" style={{ fontFamily: 'Amiri, serif' }}>
                {isArabic ? 'أهل السنة والجماعة' : 'Ahl al-Sunnah wal-Jamaah'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-green-700 hover:text-green-900 transition-colors duration-200 font-medium"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </a>
            <a 
              href="#timeline" 
              className="text-green-700 hover:text-green-900 transition-colors duration-200 font-medium"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic ? 'الخط الزمني' : 'Timeline'}
            </a>
            <a 
              href="#scholars" 
              className="text-green-700 hover:text-green-900 transition-colors duration-200 font-medium"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              {isArabic ? 'العلماء' : 'Scholars'}
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
              <Input
                type="text"
                placeholder={isArabic ? "ابحث عن عالم..." : "Search scholars..."}
                className="pl-10 pr-4 py-2 w-64 border-green-200 focus:border-green-500 focus:ring-green-500"
                style={{ fontFamily: 'Amiri, serif' }}
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            
            {/* Language Toggle */}
            <Button
              onClick={onLanguageToggle}
              variant="outline"
              size="sm"
              className="border-green-200 text-green-700 hover:bg-green-50"
            >
              <Globe className="w-4 h-4 mr-1" />
              {isArabic ? 'EN' : 'العربية'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="sm"
              className="text-green-700"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                <Input
                  type="text"
                  placeholder={isArabic ? "ابحث عن عالم..." : "Search scholars..."}
                  className="pl-10 pr-4 py-2 w-full border-green-200 focus:border-green-500"
                  style={{ fontFamily: 'Amiri, serif' }}
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              
              <nav className="flex flex-col space-y-2">
                <a 
                  href="#home" 
                  className="text-green-700 hover:text-green-900 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors"
                  style={{ fontFamily: 'Amiri, serif' }}
                >
                  {isArabic ? 'الرئيسية' : 'Home'}
                </a>
                <a 
                  href="#timeline" 
                  className="text-green-700 hover:text-green-900 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors"
                  style={{ fontFamily: 'Amiri, serif' }}
                >
                  {isArabic ? 'الخط الزمني' : 'Timeline'}
                </a>
                <a 
                  href="#scholars" 
                  className="text-green-700 hover:text-green-900 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors"
                  style={{ fontFamily: 'Amiri, serif' }}
                >
                  {isArabic ? 'العلماء' : 'Scholars'}
                </a>
              </nav>
              
              <Button
                onClick={onLanguageToggle}
                variant="outline"
                className="border-green-200 text-green-700 hover:bg-green-50 w-full"
              >
                <Globe className="w-4 h-4 mr-2" />
                {isArabic ? 'English' : 'العربية'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;