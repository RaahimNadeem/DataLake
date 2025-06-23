import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export const useArabicFont = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const arabicFontClass = isArabic ? 'font-arabic' : '';
  
  const getArabicFontClass = (baseClasses?: string) => {
    return cn(baseClasses, arabicFontClass);
  };

  const arabicTextProps = {
    className: arabicFontClass,
    style: isArabic ? { 
      fontFamily: 'NotoSansArabic, Arial, Helvetica, sans-serif',
      fontFeatureSettings: '"liga" 1, "kern" 1'
    } : {}
  };

  return {
    isArabic,
    arabicFontClass,
    getArabicFontClass,
    arabicTextProps
  };
}; 