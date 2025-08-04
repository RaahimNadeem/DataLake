"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy & Data Protection",
      lastUpdated: "Last Updated: July 2025",
      version: "Version 2.1",
      compliance: "Designed to comply with: GDPR, ISO 27001, Saudi Data Protection Law, NCA Regulations",
      
      intro: "Datalake ('we', 'our', 'us', or 'Datalake') is committed to protecting your privacy and ensuring the security of your personal data in accordance with international standards and Saudi Arabian regulations. This comprehensive Privacy Policy outlines our data protection practices, your rights, and our commitment to compliance with ISO 27001, GDPR, and the Saudi Data Protection Law.",
      
      sections: [
        {
          title: "1. Legal Framework & Compliance",
          content: "We operate in compliance with: European General Data Protection Regulation (GDPR), Saudi Personal Data Protection Law (PDPL), ISO 27001 Information Security Management System, National Cybersecurity Authority (NCA) regulations, and other applicable data protection laws. Our data processing activities are conducted under legal bases including consent, contractual necessity, legal obligations, and legitimate interests."
        },
        {
          title: "2. Data Controller Information",
          content: "Datalake is the data controller responsible for processing your personal data. Our registered address is in Saudi Arabia, and we maintain appropriate data protection officer (DPO) oversight. For data protection inquiries, contact our DPO at dpo@datalake.sa"
        },
        {
          title: "3. Categories of Personal Data We Process",
          content: "We process: Identity data (name, ID numbers), Contact data (email, phone, address), Professional data (employment history, qualifications), Technical data (IP addresses, device information), Usage data (website interactions, preferences), and Special categories (where legally permitted and with explicit consent)."
        },
        {
          title: "4. Legal Basis for Processing",
          content: "We process personal data based on: Consent (freely given, specific, informed), Contract performance, Legal obligations, Legitimate interests (balanced against your rights), and Public interest (where applicable). We maintain records of processing activities as required by law."
        },
        {
          title: "5. Data Processing Purposes",
          content: "We process data for: Service provision and delivery, Customer relationship management, Legal compliance and regulatory reporting, Security and fraud prevention, Business analytics and improvement, Marketing communications (with consent), and Employment processing."
        },
        {
          title: "6. Data Retention & Disposal",
          content: "We retain personal data only for the period necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Data is securely disposed of using certified deletion methods when no longer required."
        },
        {
          title: "7. Data Security Measures (ISO 27001)",
          content: "We implement comprehensive security measures including: Encryption at rest and in transit, Access controls and authentication, Regular security assessments, Incident response procedures, Employee training, Physical security controls, and Continuous monitoring and logging."
        },
        {
          title: "8. International Data Transfers",
          content: "When transferring data internationally, we ensure adequate protection through: Standard Contractual Clauses (SCCs), Adequacy decisions, Binding Corporate Rules (BCRs), and other approved transfer mechanisms. We maintain records of all international transfers."
        },
        {
          title: "9. Third-Party Processors",
          content: "We engage third-party processors under strict data processing agreements that include: Security requirements, Confidentiality obligations, Sub-processor restrictions, Audit rights, and Breach notification procedures. All processors are vetted for compliance."
        },
        {
          title: "10. Your Data Protection Rights",
          content: "You have the right to: Access your personal data, Rectify inaccurate data, Erase data (right to be forgotten), Restrict processing, Data portability, Object to processing, Withdraw consent, and Lodge complaints with supervisory authorities."
        },
        {
          title: "11. Automated Decision Making",
          content: "Where we use automated decision-making or profiling, we provide: Meaningful information about the logic involved, Significance and envisaged consequences, and the right to request human intervention, express your point of view, and contest the decision."
        },
        {
          title: "12. Data Breach Procedures",
          content: "In the event of a data breach, we follow strict procedures: Immediate assessment and containment, Notification to supervisory authorities within 72 hours, Communication to affected individuals where required, Documentation and investigation, and Remedial action implementation."
        },
        {
          title: "13. Children's Privacy",
          content: "We do not knowingly collect personal data from children under 16 without parental consent. If we become aware of such collection, we will take immediate steps to delete the information and obtain proper consent."
        },
        {
          title: "14. Website Data Collection",
          content: "Our website collects minimal technical data necessary for functionality: IP addresses for security and load balancing, session data for language preferences, and basic analytics for website performance. We do not use tracking cookies or third-party analytics without explicit consent."
        },
        {
          title: "15. Policy Updates & Notification",
          content: "We may update this policy to reflect legal changes, operational requirements, or improved practices. Material changes will be communicated through: Website notifications, Email communications, and Updated effective dates. Continued use constitutes acceptance of changes."
        },
        {
          title: "16. Contact Information & Complaints",
          content: "For privacy inquiries: Email: privacy@datalake.sa, DPO: dpo@datalake.sa, Legal: legal@datalake.sa. You may lodge complaints with: Saudi Data Protection Authority, European Data Protection Authorities (if applicable), or other relevant supervisory authorities."
        }
      ],
      
      standards: [
        "ISO 27001:2013 Information Security Management",
        "GDPR Compliance Framework",
        "Saudi Data Protection Law (PDPL)",
        "NCA Cybersecurity Framework",
        "SOC 2 Type II (planned)"
      ]
    },
    ar: {
      title: "سياسة الخصوصية وحماية البيانات",
      lastUpdated: "آخر تحديث: يوليو 2025",
      version: "الإصدار 2.1",
      compliance: "مصمم للامتثال لـ: GDPR، ISO 27001، قانون حماية البيانات السعودي، لوائح الهيئة الوطنية للأمن السيبراني",
      
      intro: "تلتزم Datalake ('نحن' أو 'لنا' أو 'Datalake') بحماية خصوصيتك وضمان أمان بياناتك الشخصية وفقًا للمعايير الدولية واللوائح السعودية. توضح سياسة الخصوصية الشاملة هذه ممارسات حماية البيانات وحقوقك والتزامنا بالامتثال لـ ISO 27001 و GDPR وقانون حماية البيانات السعودي.",
      
      sections: [
        {
          title: "1. الإطار القانوني والامتثال",
          content: "نحن نعمل وفقًا لـ: اللائحة العامة لحماية البيانات الأوروبية (GDPR)، قانون حماية البيانات الشخصية السعودي (PDPL)، نظام إدارة أمن المعلومات ISO 27001، لوائح الهيئة الوطنية للأمن السيبراني (NCA)، وقوانين حماية البيانات الأخرى المعمول بها. تتم أنشطة معالجة البيانات لدينا بموجب الأسس القانونية بما في ذلك الموافقة والضرورة التعاقدية والالتزامات القانونية والمصالح المشروعة."
        },
        {
          title: "2. معلومات مسؤول البيانات",
          content: "Datalake هو مسؤول البيانات المسؤول عن معالجة بياناتك الشخصية. عنواننا المسجل في المملكة العربية السعودية، ونحافظ على الإشراف المناسب لمسؤول حماية البيانات (DPO). للاستفسارات حول حماية البيانات، اتصل بمسؤول حماية البيانات على dpo@datalake.sa"
        },
        {
          title: "3. فئات البيانات الشخصية التي نعالجها",
          content: "نعالج: بيانات الهوية (الاسم، أرقام الهوية)، بيانات الاتصال (البريد الإلكتروني، الهاتف، العنوان)، البيانات المهنية (التاريخ الوظيفي، المؤهلات)، البيانات التقنية (عناوين IP، معلومات الجهاز)، بيانات الاستخدام (تفاعلات الموقع، التفضيلات)، والفئات الخاصة (حيث يسمح القانون وبموافقة صريحة)."
        },
        {
          title: "4. الأساس القانوني للمعالجة",
          content: "نعالج البيانات الشخصية بناءً على: الموافقة (ممنوحة بحرية، محددة، مستنيرة)، أداء العقد، الالتزامات القانونية، المصالح المشروعة (متوازنة مع حقوقك)، والمصلحة العامة (حيث ينطبق). نحتفظ بسجلات أنشطة المعالجة كما يقتضي القانون."
        },
        {
          title: "5. أغراض معالجة البيانات",
          content: "نعالج البيانات من أجل: تقديم الخدمات والتسليم، إدارة علاقات العملاء، الامتثال القانوني والتقارير التنظيمية، الأمان ومنع الاحتيال، تحليلات الأعمال والتحسين، الاتصالات التسويقية (بموافقة)، ومعالجة التوظيف."
        },
        {
          title: "6. الاحتفاظ بالبيانات والتخلص منها",
          content: "نحتفظ بالبيانات الشخصية فقط للفترة اللازمة لتحقيق الأغراض الموضحة في هذه السياسة والامتثال للالتزامات القانونية وحل النزاعات وإنفاذ الاتفاقيات. يتم التخلص من البيانات بأمان باستخدام طرق الحذف المعتمدة عندما لم تعد مطلوبة."
        },
        {
          title: "7. تدابير أمان البيانات (ISO 27001)",
          content: "نطبق تدابير أمنية شاملة تشمل: التشفير في حالة الراحة وفي النقل، ضوابط الوصول والمصادقة، التقييمات الأمنية المنتظمة، إجراءات الاستجابة للحوادث، تدريب الموظفين، ضوابط الأمان المادية، والمراقبة والتسجيل المستمر."
        },
        {
          title: "8. النقل الدولي للبيانات",
          content: "عند نقل البيانات دوليًا، نضمن الحماية الكافية من خلال: بنود العقد القياسية (SCCs)، قرارات الكفاية، القواعد الملزمة للشركات (BCRs)، وآليات النقل المعتمدة الأخرى. نحتفظ بسجلات لجميع النقل الدولي."
        },
        {
          title: "9. معالجات الطرف الثالث",
          content: "نتعامل مع معالجات الطرف الثالث بموجب اتفاقيات معالجة بيانات صارمة تشمل: متطلبات الأمان، التزامات السرية، قيود المعالج الفرعي، حقوق التدقيق، وإجراءات إشعار الخرق. يتم فحص جميع المعالجات للامتثال."
        },
        {
          title: "10. حقوقك في حماية البيانات",
          content: "لديك الحق في: الوصول إلى بياناتك الشخصية، تصحيح البيانات غير الدقيقة، محو البيانات (الحق في النسيان)، تقييد المعالجة، نقل البيانات، الاعتراض على المعالجة، سحب الموافقة، وتقديم شكاوى إلى السلطات الإشرافية."
        },
        {
          title: "11. اتخاذ القرارات الآلية",
          content: "حيث نستخدم اتخاذ القرارات الآلية أو التصنيف، نقدم: معلومات ذات معنى حول المنطق المعني، الأهمية والعواقب المتوقعة، والحق في طلب التدخل البشري والتعبير عن وجهة نظرك والاعتراض على القرار."
        },
        {
          title: "12. إجراءات خرق البيانات",
          content: "في حالة خرق البيانات، نتبع إجراءات صارمة: التقييم الفوري والاحتواء، الإشعار للسلطات الإشرافية خلال 72 ساعة، التواصل مع الأفراد المتأثرين حيث يلزم، التوثيق والتحقيق، وتنفيذ الإجراءات العلاجية."
        },
        {
          title: "13. خصوصية الأطفال",
          content: "نحن لا نجمع عمدًا البيانات الشخصية من الأطفال دون سن 16 دون موافقة الوالدين. إذا علمنا بمثل هذا الجمع، سنتخذ خطوات فورية لحذف المعلومات والحصول على الموافقة المناسبة."
        },
        {
          title: "14. جمع بيانات الموقع الإلكتروني",
          content: "يجمع موقعنا الإلكتروني الحد الأدنى من البيانات التقنية الضرورية للوظائف: عناوين IP للأمان وموازنة التحميل، بيانات الجلسة لتفضيلات اللغة، والتحليلات الأساسية لأداء الموقع. لا نستخدم ملفات تعريف الارتباط للتتبع أو تحليلات الطرف الثالث دون موافقة صريحة."
        },
        {
          title: "15. تحديثات السياسة والإشعار",
          content: "قد نحدث هذه السياسة لتعكس التغييرات القانونية أو المتطلبات التشغيلية أو الممارسات المحسنة. سيتم التواصل بشأن التغييرات المادية من خلال: إشعارات الموقع، الاتصالات عبر البريد الإلكتروني، وتواريخ السريان المحدثة. الاستخدام المستمر يشكل قبول التغييرات."
        },
        {
          title: "16. معلومات الاتصال والشكاوى",
          content: "للاستفسارات حول الخصوصية: البريد الإلكتروني: privacy@datalake.sa، مسؤول حماية البيانات: dpo@datalake.sa، القانوني: legal@datalake.sa. يمكنك تقديم شكاوى إلى: الهيئة السعودية لحماية البيانات، سلطات حماية البيانات الأوروبية (إذا كان ذلك ينطبق)، أو السلطات الإشرافية الأخرى ذات الصلة."
        }
      ],
      
      standards: [
        "ISO 27001:2013 نظام إدارة أمن المعلومات",
        "إطار العمل الامتثالي لـ GDPR",
        "قانون حماية البيانات السعودي (PDPL)",
        "إطار العمل الأمني للهيئة الوطنية للأمن السيبراني",
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

export default PrivacyPolicy; 