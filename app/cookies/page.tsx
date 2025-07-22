"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const CookiePolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Cookie Policy & Tracking Technologies",
      lastUpdated: "Last Updated: July 2025",
      version: "Version 2.1",
      compliance: "Designed to comply with: GDPR, ISO 27001, Saudi Data Protection Law, ePrivacy Directive",
      
      intro: "This comprehensive Cookie Policy explains how DataLake AI Solutions ('we', 'our', 'us', or 'DataLake') uses cookies and similar tracking technologies when you visit our website. This policy is designed to comply with GDPR, ISO 27001, Saudi Data Protection Law, and the ePrivacy Directive.",
      
      sections: [
        {
          title: "1. Legal Framework & Compliance",
          content: "Our use of cookies is designed to comply with: European General Data Protection Regulation (GDPR), Saudi Personal Data Protection Law (PDPL), ISO 27001 Information Security Management System, ePrivacy Directive (Cookie Law), and other applicable privacy regulations. We maintain records of cookie consent and processing activities."
        },
        {
          title: "2. What Are Cookies & Tracking Technologies?",
          content: "Cookies are small text files stored on your device when you visit websites. We also use web beacons, pixel tags, local storage, and session storage. These technologies help websites remember information about your visit, such as your preferred language and other settings, making your next visit easier and more useful."
        },
        {
          title: "3. Legal Basis for Cookie Processing",
          content: "We process cookie data based on: Consent (for non-essential cookies), Legitimate interests (for essential cookies), and Contract performance (for functional cookies). We implement appropriate consent management for any non-essential cookies."
        },
        {
          title: "4. Cookie Categories & Purposes",
          content: "We categorize cookies as: Essential (required for website functionality), Performance (analytics and optimization), Functional (user preferences and features), and Marketing (advertising and targeting). Each category serves specific purposes and has different consent requirements."
        },
        {
          title: "5. Essential Cookies (Strictly Necessary)",
          content: "Essential cookies are necessary for the website to function and cannot be switched off. They include: Authentication cookies, Security cookies, Load balancing cookies, and Session management cookies. These cookies do not store any personally identifiable information."
        },
        {
          title: "6. Performance & Analytics Cookies",
          content: "Currently, we do not use performance or analytics cookies. If we implement such cookies in the future, we will update this policy and obtain appropriate consent before deployment."
        },
        {
          title: "7. Functional & Preference Cookies",
          content: "Functional cookies enable enhanced functionality and personalization. They remember: Language preferences, User interface customization, Form data (temporarily), and Accessibility settings. These cookies improve your browsing experience."
        },
        {
          title: "8. Marketing & Advertising Cookies",
          content: "Currently, we do not use marketing or advertising cookies. If we implement such cookies in the future, we will update this policy and obtain explicit consent before deployment."
        },
        {
          title: "9. Third-Party Cookies & Services",
          content: "Currently, we do not use third-party services that set cookies. If we engage third-party services in the future, we will maintain agreements with all providers and update this policy accordingly."
        },
        {
          title: "10. Cookie Consent Management",
          content: "For any non-essential cookies we may implement in the future, we will provide appropriate consent mechanisms that: Display cookie notices when required, Allow granular consent for different cookie categories, Remember consent preferences, and Provide easy consent withdrawal."
        },
        {
          title: "11. How to Control Cookies",
          content: "You can control cookies through: Browser settings (Chrome, Firefox, Safari, Edge), Device settings (mobile browsers), and Third-party opt-out tools. Essential cookies cannot be disabled as they are necessary for website functionality."
        },
        {
          title: "12. Cookie Retention Periods",
          content: "Cookie retention periods vary by type: Session cookies (deleted when browser closes), Persistent cookies (up to 2 years), Analytics cookies (up to 26 months), and Marketing cookies (up to 13 months). We regularly review and update retention periods."
        },
        {
          title: "13. International Cookie Transfers",
          content: "Some cookies may transfer data internationally. We ensure adequate protection through: Standard Contractual Clauses (SCCs), Adequacy decisions, and Privacy Shield (where applicable). All international transfers are documented and monitored."
        },
        {
          title: "14. Security & Data Protection",
          content: "We implement security measures for cookie data: Encryption of sensitive cookie data, Secure cookie transmission (HTTPS), Regular security assessments, and Access controls. Cookie data is processed in accordance with our ISO 27001 security framework."
        },
        {
          title: "15. Children's Privacy & Cookies",
          content: "We do not knowingly use cookies to collect personal information from children under 16 without parental consent. If we become aware of such collection, we will take immediate steps to delete the information and obtain proper consent."
        },
        {
          title: "16. Policy Updates & Notification",
          content: "We may update this policy to reflect: Legal changes, New cookie technologies, Service provider changes, or Improved practices. Material changes will be communicated through: Website notifications, Email communications, and Updated consent requests."
        },
        {
          title: "17. Contact Information & Complaints",
          content: "For cookie-related inquiries: Email: privacy@datalake.sa, DPO: dpo@datalake.sa, Technical: tech@datalake.sa. You may lodge complaints with: Saudi Data Protection Authority, European Data Protection Authorities, or other relevant supervisory authorities."
        }
      ],
      
      cookieTypes: [
        {
          name: "Essential Cookies",
          description: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.",
          examples: "Authentication, security, load balancing, session management",
          retention: "Session to 1 year",
          consent: "Not required (legitimate interest)"
        },
        {
          name: "Performance Cookies",
          description: "Currently not implemented. If implemented in the future, these cookies would allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
          examples: "Not currently used",
          retention: "Not applicable",
          consent: "Not applicable"
        },
        {
          name: "Functional Cookies",
          description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
          examples: "Language preferences, UI customization, form data",
          retention: "Up to 2 years",
          consent: "Required (opt-in)"
        },
        {
          name: "Marketing Cookies",
          description: "Currently not implemented. If implemented in the future, these cookies may be set through our site by our advertising partners for targeted advertising.",
          examples: "Not currently used",
          retention: "Not applicable",
          consent: "Not applicable"
        }
      ],
      
      standards: [
        "ISO 27001:2013 Information Security Management",
        "GDPR Cookie Compliance Framework",
        "Saudi Data Protection Law (PDPL)",
        "ePrivacy Directive Framework",
        "SOC 2 Type II (planned)"
      ]
    },
    ar: {
      title: "سياسة ملفات تعريف الارتباط وتقنيات التتبع",
      lastUpdated: "آخر تحديث: يوليو 2025",
      version: "الإصدار 2.1",
      compliance: "مصمم للامتثال لـ: GDPR، ISO 27001، قانون حماية البيانات السعودي، توجيه الخصوصية الإلكترونية",
      
      intro: "توضح سياسة ملفات تعريف الارتباط الشاملة هذه كيفية استخدام DataLake AI Solutions ('نحن' أو 'لنا' أو 'DataLake') لملفات تعريف الارتباط وتقنيات التتبع المماثلة عند زيارة موقعنا الإلكتروني. هذه السياسة مصممة للامتثال لـ GDPR و ISO 27001 وقانون حماية البيانات السعودي وتوجيه الخصوصية الإلكترونية.",
      
      sections: [
        {
          title: "1. الإطار القانوني والامتثال",
          content: "استخدامنا لملفات تعريف الارتباط مصمم للامتثال لـ: اللائحة العامة لحماية البيانات الأوروبية (GDPR)، قانون حماية البيانات الشخصية السعودي (PDPL)، نظام إدارة أمن المعلومات ISO 27001، توجيه الخصوصية الإلكترونية (قانون ملفات تعريف الارتباط)، ولوائح الخصوصية الأخرى المعمول بها. نحتفظ بسجلات موافقة ملفات تعريف الارتباط وأنشطة المعالجة."
        },
        {
          title: "2. ما هي ملفات تعريف الارتباط وتقنيات التتبع؟",
          content: "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة المواقع الإلكترونية. نستخدم أيضًا العلامات الويب والعلامات البكسل والتخزين المحلي وتخزين الجلسة. تساعد هذه التقنيات المواقع الإلكترونية على تذكر معلومات حول زيارتك، مثل لغتك المفضلة والإعدادات الأخرى، مما يجعل زيارتك التالية أسهل وأكثر فائدة."
        },
        {
          title: "3. الأساس القانوني لمعالجة ملفات تعريف الارتباط",
          content: "نعالج بيانات ملفات تعريف الارتباط بناءً على: الموافقة (لملفات تعريف الارتباط غير الأساسية)، المصالح المشروعة (لملفات تعريف الارتباط الأساسية)، وأداء العقد (لملفات تعريف الارتباط الوظيفية). نطبق إدارة موافقة مناسبة لأي ملفات تعريف ارتباط غير أساسية."
        },
        {
          title: "4. فئات ملفات تعريف الارتباط والأغراض",
          content: "نصنف ملفات تعريف الارتباط كـ: أساسية (مطلوبة لوظائف الموقع الإلكتروني)، أداء (التحليلات والتحسين)، وظيفية (تفضيلات المستخدم والميزات)، وتسويقية (الإعلانات والاستهداف). كل فئة تخدم أغراضًا محددة ولها متطلبات موافقة مختلفة."
        },
        {
          title: "5. ملفات تعريف الارتباط الأساسية (ضرورية تمامًا)",
          content: "ملفات تعريف الارتباط الأساسية ضرورية لكي يعمل الموقع الإلكتروني ولا يمكن إيقافها. تشمل: ملفات تعريف الارتباط للمصادقة، ملفات تعريف الارتباط الأمنية، ملفات تعريف الارتباط لموازنة التحميل، وملفات تعريف الارتباط لإدارة الجلسة. هذه الملفات لا تخزن أي معلومات شخصية قابلة للتحديد."
        },
        {
          title: "6. ملفات تعريف الارتباط الخاصة بالأداء والتحليلات",
          content: "حاليًا، لا نستخدم ملفات تعريف الارتباط الخاصة بالأداء أو التحليلات. إذا قمنا بتنفيذ مثل هذه الملفات في المستقبل، سنحدث هذه السياسة ونحصل على الموافقة المناسبة قبل النشر."
        },
        {
          title: "7. ملفات تعريف الارتباط الوظيفية وتفضيلات المستخدم",
          content: "ملفات تعريف الارتباط الوظيفية تمكن الوظائف المحسنة والتخصيص. تتذكر: تفضيلات اللغة، تخصيص واجهة المستخدم، بيانات النماذج (مؤقتًا)، وإعدادات إمكانية الوصول. هذه الملفات تحسن تجربة التصفح لديك."
        },
        {
          title: "8. ملفات تعريف الارتباط التسويقية والإعلانية",
          content: "حاليًا، لا نستخدم ملفات تعريف الارتباط التسويقية أو الإعلانية. إذا قمنا بتنفيذ مثل هذه الملفات في المستقبل، سنحدث هذه السياسة ونحصل على موافقة صريحة قبل النشر."
        },
        {
          title: "9. ملفات تعريف الارتباط من أطراف ثالثة والخدمات",
          content: "حاليًا، لا نستخدم خدمات من أطراف ثالثة تحدد ملفات تعريف الارتباط. إذا تعاملنا مع خدمات من أطراف ثالثة في المستقبل، سنحتفظ باتفاقيات مع جميع المقدمين ونحدث هذه السياسة وفقًا لذلك."
        },
        {
          title: "10. إدارة موافقة ملفات تعريف الارتباط",
          content: "لأي ملفات تعريف ارتباط غير أساسية قد ننفذها في المستقبل، سنوفر آليات موافقة مناسبة: تعرض إشعارات ملفات تعريف الارتباط عند الحاجة، تسمح بالموافقة الدقيقة لفئات ملفات تعريف الارتباط المختلفة، تتذكر تفضيلات الموافقة، وتوفر سحب الموافقة بسهولة."
        },
        {
          title: "11. كيفية التحكم في ملفات تعريف الارتباط",
          content: "يمكنك التحكم في ملفات تعريف الارتباط من خلال: إعدادات المتصفح (Chrome، Firefox، Safari، Edge)، إعدادات الجهاز (متصفحات الهاتف المحمول)، وأدوات الانسحاب من الطرف الثالث. لا يمكن تعطيل ملفات تعريف الارتباط الأساسية لأنها ضرورية لوظائف الموقع."
        },
        {
          title: "12. فترات الاحتفاظ بملفات تعريف الارتباط",
          content: "تختلف فترات الاحتفاظ بملفات تعريف الارتباط حسب النوع: ملفات تعريف الارتباط للجلسة (تُحذف عند إغلاق المتصفح)، ملفات تعريف الارتباط المستمرة (حتى سنتين)، ملفات تعريف الارتباط التحليلية (حتى 26 شهرًا)، وملفات تعريف الارتباط التسويقية (حتى 13 شهرًا). نراجع ونحدث فترات الاحتفاظ بانتظام."
        },
        {
          title: "13. النقل الدولي لملفات تعريف الارتباط",
          content: "قد تنقل بعض ملفات تعريف الارتباط البيانات دوليًا. نضمن الحماية الكافية من خلال: بنود العقد القياسية (SCCs)، قرارات الكفاية، ودرع الخصوصية (حيث ينطبق). جميع النقل الدولي موثق ومراقب."
        },
        {
          title: "14. الأمان وحماية البيانات",
          content: "نطبق تدابير أمنية لبيانات ملفات تعريف الارتباط: تشفير بيانات ملفات تعريف الارتباط الحساسة، نقل آمن لملفات تعريف الارتباط (HTTPS)، تقييمات أمنية منتظمة، وضوابط الوصول. تتم معالجة بيانات ملفات تعريف الارتباط وفقًا لإطار العمل الأمني ISO 27001."
        },
        {
          title: "15. خصوصية الأطفال وملفات تعريف الارتباط",
          content: "نحن لا نستخدم عمدًا ملفات تعريف الارتباط لجمع المعلومات الشخصية من الأطفال دون سن 16 دون موافقة الوالدين. إذا علمنا بمثل هذا الجمع، سنتخذ خطوات فورية لحذف المعلومات والحصول على الموافقة المناسبة."
        },
        {
          title: "16. تحديثات السياسة والإشعار",
          content: "قد نحدث هذه السياسة لتعكس: التغييرات القانونية، تقنيات ملفات تعريف الارتباط الجديدة، تغييرات مقدمي الخدمات، أو الممارسات المحسنة. سيتم التواصل بشأن التغييرات المادية من خلال: إشعارات الموقع، الاتصالات عبر البريد الإلكتروني، وطلبات الموافقة المحدثة."
        },
        {
          title: "17. معلومات الاتصال والشكاوى",
          content: "للاستفسارات المتعلقة بملفات تعريف الارتباط: البريد الإلكتروني: privacy@datalake.sa، مسؤول حماية البيانات: dpo@datalake.sa، التقني: tech@datalake.sa. يمكنك تقديم شكاوى إلى: الهيئة السعودية لحماية البيانات، سلطات حماية البيانات الأوروبية، أو السلطات الإشرافية الأخرى ذات الصلة."
        }
      ],
      
      cookieTypes: [
        {
          name: "ملفات تعريف الارتباط الأساسية",
          description: "هذه ملفات تعريف الارتباط ضرورية لكي يعمل الموقع الإلكتروني ولا يمكن إيقافها في أنظمتنا. عادة ما يتم تعيينها فقط استجابة للإجراءات التي تتخذها والتي تشكل طلبًا للخدمات، مثل تعيين تفضيلات الخصوصية أو تسجيل الدخول أو ملء النماذج.",
          examples: "المصادقة، الأمان، موازنة التحميل، إدارة الجلسة",
          retention: "الجلسة إلى سنة واحدة",
          consent: "غير مطلوب (المصلحة المشروعة)"
        },
        {
          name: "ملفات تعريف الارتباط الخاصة بالأداء",
          description: "غير منفذة حاليًا. إذا تم تنفيذها في المستقبل، ستسمح لنا هذه الملفات بعد الزيارات ومصادر حركة المرور حتى نتمكن من قياس وتحسين أداء موقعنا.",
          examples: "غير مستخدمة حاليًا",
          retention: "غير مطبقة",
          consent: "غير مطبقة"
        },
        {
          name: "ملفات تعريف الارتباط الوظيفية",
          description: "تمكن ملفات تعريف الارتباط هذه الموقع الإلكتروني من توفير وظائف محسنة وتخصيص. قد يتم تعيينها من قبلنا أو من قبل مقدمي الخدمات من أطراف ثالثة الذين أضفنا خدماتهم إلى صفحاتنا.",
          examples: "تفضيلات اللغة، تخصيص واجهة المستخدم، بيانات النماذج",
          retention: "حتى سنتين",
          consent: "مطلوب (الانضمام)"
        },
        {
          name: "ملفات تعريف الارتباط التسويقية",
          description: "غير منفذة حاليًا. إذا تم تنفيذها في المستقبل، قد يتم تعيين هذه الملفات من خلال موقعنا من قبل شركائنا الإعلانيين للإعلانات المستهدفة.",
          examples: "غير مستخدمة حاليًا",
          retention: "غير مطبقة",
          consent: "غير مطبقة"
        }
      ],
      
      standards: [
        "ISO 27001:2013 نظام إدارة أمن المعلومات",
        "إطار العمل الامتثالي لملفات تعريف الارتباط GDPR",
        "قانون حماية البيانات السعودي (PDPL)",
        "إطار العمل الامتثالي لتوجيه الخصوصية الإلكترونية",
        "SOC 2 النوع الثاني (مخطط له)"
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className={`min-h-screen bg-white ${language === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-gray-600 mb-2">
                  {currentContent.lastUpdated} | {currentContent.version}
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  {currentContent.compliance}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentContent.standards.map((standard, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed m-0">
                {currentContent.intro}
              </p>
            </div>
          </div>
          
          {/* Sections */}
          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Cookie Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {language === 'ar' ? 'أنواع ملفات تعريف الارتباط' : 'Cookie Types'}
            </h2>
            
            <div className="grid gap-6 md:grid-cols-1">
              {currentContent.cookieTypes.map((cookieType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {cookieType.name}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {cookieType.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-600">
                          <strong>{language === 'ar' ? 'أمثلة:' : 'Examples:'}</strong> {cookieType.examples}
                        </p>
                        <p className="text-gray-600">
                          <strong>{language === 'ar' ? 'فترة الاحتفاظ:' : 'Retention:'}</strong> {cookieType.retention}
                        </p>
                        <p className="text-gray-600">
                          <strong>{language === 'ar' ? 'الموافقة:' : 'Consent:'}</strong> {cookieType.consent}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Link 
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <span className={language === 'ar' ? 'ml-2' : 'mr-2'}>
                  {language === 'ar' ? '←' : '←'}
                </span>
                {language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home'}
              </Link>
              <div className="text-sm text-gray-500">
                {language === 'ar' ? 'مستند سياسة - يتطلب مراجعة قانونية' : 'Policy Document - Legal Review Required'}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy; 