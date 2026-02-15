import React from 'react';
import { useI18n } from '../../contexts/I18nContext';

const FilterBar = () => {
  const { t } = useI18n();
  
  return (
    <div className="filter-bar">
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder={t('serviceTable.searchServices')} 
          className="filter-input"
          aria-label="Search services"
        />
      </div>
      
      <div className="filters-group">
        <select className="filter-select" aria-label="Filter by Category">
          <option value="">{t('serviceTable.allCategories')}</option>
          <option value="telegram">{t('serviceTable.telegram')}</option>
          <option value="instagram">{t('serviceTable.instagram')}</option>
          <option value="youtube">{t('serviceTable.youtube')}</option>
        </select>
        
        <select className="filter-select" aria-label="Filter by Status">
          <option value="">{t('serviceTable.allStatus')}</option>
          <option value="active">{t('serviceTable.active')}</option>
          <option value="maintenance">{t('serviceTable.maintenance')}</option>
        </select>
        
        <select className="filter-select" aria-label="Filter by Price">
          <option value="">{t('serviceTable.priceAll')}</option>
          <option value="low">{t('serviceTable.lowToHigh')}</option>
          <option value="high">{t('serviceTable.highToLow')}</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;

