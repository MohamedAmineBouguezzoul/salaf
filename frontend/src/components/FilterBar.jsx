import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const FilterBar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isArabic = true,
  totalScholars,
  filteredCount 
}) => {
  const centuries = [
    { value: '1', label: isArabic ? 'القرن الأول' : '1st Century' },
    { value: '2', label: isArabic ? 'القرن الثاني' : '2nd Century' },
    { value: '3', label: isArabic ? 'القرن الثالث' : '3rd Century' },
  ];

  const madhabs = [
    { value: 'الحنفي', label: isArabic ? 'الحنفي' : 'Hanafi' },
    { value: 'المالكي', label: isArabic ? 'المالكي' : 'Maliki' },
    { value: 'الشافعي', label: isArabic ? 'الشافعي' : 'Shafi\'i' },
    { value: 'الحنبلي', label: isArabic ? 'الحنبلي' : 'Hanbali' },
    { value: 'السلف الصالح', label: isArabic ? 'السلف الصالح' : 'Salaf' },
    { value: 'أهل الحديث', label: isArabic ? 'أهل الحديث' : 'Ahl al-Hadith' },
  ];

  const regions = [
    { value: 'المدينة المنورة', label: isArabic ? 'المدينة المنورة' : 'Medina' },
    { value: 'مكة', label: isArabic ? 'مكة' : 'Mecca' },
    { value: 'البصرة', label: isArabic ? 'البصرة' : 'Basra' },
    { value: 'الكوفة', label: isArabic ? 'الكوفة' : 'Kufa' },
    { value: 'بغداد', label: isArabic ? 'بغداد' : 'Baghdad' },
    { value: 'مكة - مصر', label: isArabic ? 'مكة - مصر' : 'Mecca - Egypt' },
    { value: 'بخارى', label: isArabic ? 'بخارى' : 'Bukhara' },
  ];

  const hasActiveFilters = filters.century || filters.madhhab || filters.region;

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-green-100 rounded-xl p-6 shadow-lg mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Filter className="w-5 h-5 text-green-600" />
          <h3 
            className="text-lg font-semibold text-green-800"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {isArabic ? 'تصفية العلماء' : 'Filter Scholars'}
          </h3>
        </div>
        
        {hasActiveFilters && (
          <Button
            onClick={onClearFilters}
            variant="outline"
            size="sm"
            className="border-green-200 text-green-700 hover:bg-green-50"
          >
            <X className="w-4 h-4 mr-1" />
            {isArabic ? 'إزالة المرشحات' : 'Clear Filters'}
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Century Filter */}
        <div>
          <label 
            className="block text-sm font-medium text-green-700 mb-2"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {isArabic ? 'القرن' : 'Century'}
          </label>
          <Select 
            value={filters.century || ''} 
            onValueChange={(value) => onFilterChange('century', value === '' ? null : value)}
          >
            <SelectTrigger className="border-green-200 focus:border-green-500">
              <SelectValue 
                placeholder={isArabic ? 'اختر القرن' : 'Select Century'}
                style={{ fontFamily: 'Amiri, serif' }}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{isArabic ? 'كل القرون' : 'All Centuries'}</SelectItem>
              {centuries.map(century => (
                <SelectItem key={century.value} value={century.value}>
                  <span style={{ fontFamily: 'Amiri, serif' }}>
                    {century.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Madhhab Filter */}
        <div>
          <label 
            className="block text-sm font-medium text-green-700 mb-2"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {isArabic ? 'المذهب' : 'Madhhab'}
          </label>
          <Select 
            value={filters.madhhab || ''} 
            onValueChange={(value) => onFilterChange('madhhab', value === '' ? null : value)}
          >
            <SelectTrigger className="border-green-200 focus:border-green-500">
              <SelectValue 
                placeholder={isArabic ? 'اختر المذهب' : 'Select Madhhab'}
                style={{ fontFamily: 'Amiri, serif' }}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{isArabic ? 'كل المذاهب' : 'All Madhabs'}</SelectItem>
              {madhabs.map(madhhab => (
                <SelectItem key={madhhab.value} value={madhhab.value}>
                  <span style={{ fontFamily: 'Amiri, serif' }}>
                    {madhhab.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Region Filter */}
        <div>
          <label 
            className="block text-sm font-medium text-green-700 mb-2"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {isArabic ? 'المنطقة' : 'Region'}
          </label>
          <Select 
            value={filters.region || ''} 
            onValueChange={(value) => onFilterChange('region', value === '' ? null : value)}
          >
            <SelectTrigger className="border-green-200 focus:border-green-500">
              <SelectValue 
                placeholder={isArabic ? 'اختر المنطقة' : 'Select Region'}
                style={{ fontFamily: 'Amiri, serif' }}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{isArabic ? 'كل المناطق' : 'All Regions'}</SelectItem>
              {regions.map(region => (
                <SelectItem key={region.value} value={region.value}>
                  <span style={{ fontFamily: 'Amiri, serif' }}>
                    {region.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.century && (
            <Badge 
              variant="secondary" 
              className="bg-green-100 text-green-800 hover:bg-green-200"
            >
              <span style={{ fontFamily: 'Amiri, serif' }}>
                {isArabic ? `القرن ${filters.century}` : `${filters.century}${filters.century === '1' ? 'st' : filters.century === '2' ? 'nd' : filters.century === '3' ? 'rd' : 'th'} Century`}
              </span>
            </Badge>
          )}
          {filters.madhhab && (
            <Badge 
              variant="secondary" 
              className="bg-green-100 text-green-800 hover:bg-green-200"
            >
              <span style={{ fontFamily: 'Amiri, serif' }}>
                {filters.madhhab}
              </span>
            </Badge>
          )}
          {filters.region && (
            <Badge 
              variant="secondary" 
              className="bg-green-100 text-green-800 hover:bg-green-200"
            >
              <span style={{ fontFamily: 'Amiri, serif' }}>
                {filters.region}
              </span>
            </Badge>
          )}
        </div>
      )}

      {/* Results Count */}
      <div className="text-sm text-green-600">
        <span style={{ fontFamily: 'Amiri, serif' }}>
          {isArabic 
            ? `عرض ${filteredCount} من أصل ${totalScholars} عالم`
            : `Showing ${filteredCount} of ${totalScholars} scholars`
          }
        </span>
      </div>
    </div>
  );
};

export default FilterBar;