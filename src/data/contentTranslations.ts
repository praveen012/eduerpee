// Per-language overrides for the body copy in content.ts (solutions, services,
// industries, process steps, testimonials, team bios, trust stats, why-choose-us).
// English (content.ts) is the base/fallback; each entry here is looked up by the
// same id/index used in content.ts and merged on top of the English value at
// render time via useLocalizedContent(). Brand/person/company names, and
// universal tech acronyms (ERP, CRM, SaaS, API, GPS, UPI, GST, Azure, AI) are
// intentionally left in their commonly-used form per language rather than
// force-translated.

export interface SolutionOverride {
  title: string;
  description: string;
  features: string[];
}
export interface ServiceOverride {
  title: string;
  description: string;
}
export interface IndustryOverride {
  title: string;
}
export interface ProcessStepOverride {
  title: string;
  description: string;
}
export interface TestimonialOverride {
  quote: string;
  industry: string;
  solution: string;
}
export interface TeamOverride {
  role: string;
  bio: string;
}
export interface LabelOverride {
  label: string;
}
export interface TitleDescOverride {
  title: string;
  description: string;
}

export interface ContentTranslation {
  solutions: Record<string, SolutionOverride>;
  services: Record<string, ServiceOverride>;
  industries: Record<string, IndustryOverride>;
  processSteps: Record<string, ProcessStepOverride>;
  testimonials: Record<string, TestimonialOverride>;
  team: Record<string, TeamOverride>;
  trustStats: Record<string, LabelOverride>;
  whyChooseUs: Record<string, TitleDescOverride>;
}

export const contentTranslations: Record<string, ContentTranslation> = {
  hi: {
    solutions: {
      "school-erp": {
        title: "स्कूल मैनेजमेंट ERP",
        description:
          "एडमिशन से लेकर रिज़ल्ट तक, फीस से लेकर पेरेंट कम्युनिकेशन तक, और पेरोल से लेकर लाइब्रेरी तक — पूरा स्कूल एक ही डैशबोर्ड से चलाएं, साथ में Android कंपैनियन ऐप भी शामिल।",
        features: ["एडमिशन", "अटेंडेंस", "फीस मैनेजमेंट", "परीक्षाएं", "पेरेंट पोर्टल"],
      },
      "inventory-management": {
        title: "इन्वेंटरी मैनेजमेंट",
        description:
          "रियल-टाइम स्टॉक ट्रैकिंग, ऑटोमेटेड पर्चेज़ ऑर्डर, लो-स्टॉक अलर्ट, वेंडर मैनेजमेंट और बिज़नेस रिपोर्ट्स जो अपने आप तैयार होती हैं।",
        features: ["स्टॉक ट्रैकिंग", "PO मैनेजमेंट", "वेंडर मैनेजमेंट", "रिपोर्ट्स"],
      },
      "library-management": {
        title: "लाइब्रेरी मैनेजमेंट",
        description:
          "बारकोड स्कैनिंग, कैटलॉग मैनेजमेंट, इश्यू/रिटर्न ट्रैकिंग, मेंबर मैनेजमेंट और ऑटोमेटेड फाइन कलेक्शन के साथ लाइब्रेरी को कुछ ही दिनों में डिजिटल बनाएं।",
        features: ["कैटलॉग", "बारकोड स्कैनिंग", "इश्यू / रिटर्न", "फाइन कलेक्शन"],
      },
      "transport-management": {
        title: "ट्रांसपोर्टेशन मैनेजमेंट",
        description:
          "GPS लाइव ट्रैकिंग, ऑप्टिमाइज़्ड रूट प्लानिंग, ड्राइवर मैनेजमेंट, फीस कलेक्शन और ऑटोमेटेड पेरेंट SMS नोटिफिकेशन — सब एक ही इंटीग्रेटेड सिस्टम में।",
        features: ["GPS ट्रैकिंग", "रूट प्लानिंग", "ड्राइवर मैनेजमेंट", "नोटिफिकेशन"],
      },
      "clinic-software": {
        title: "डॉक्टर / क्लिनिक सॉफ्टवेयर",
        description:
          "संपूर्ण OPD मैनेजमेंट — पेशेंट रिकॉर्ड्स, अपॉइंटमेंट्स, EMR, प्रिस्क्रिप्शन, बिलिंग और मेडिसिन इन्वेंटरी, एक ही समर्पित सिस्टम में।",
        features: ["पेशेंट रिकॉर्ड्स", "EMR", "अपॉइंटमेंट्स", "बिलिंग"],
      },
      "custom-erp": {
        title: "कस्टम और क्लाउड ERP",
        description:
          "ऐसा यूनीक वर्कफ़्लो जिसे रेडीमेड सॉफ्टवेयर हैंडल नहीं कर पाता? हम इसे शुरू से बनाते हैं — कस्टम ERP और CRM, वेब, मोबाइल, क्लाउड-डिप्लॉयड और बिज़नेस के हिसाब से तैयार।",
        features: ["कस्टम बिल्ड", "CRM", "SaaS", "वेब और मोबाइल", "क्लाउड डिप्लॉय"],
      },
      hrms: {
        title: "HRMS – HR और पेरोल मैनेजमेंट",
        description:
          "हायरिंग, अटेंडेंस, लीव, पेरोल और परफॉर्मेंस — सब एक डैशबोर्ड से मैनेज करें, जो बढ़ती टीमों के लिए मैनुअल HR पेपरवर्क कम करने के लिए बनाया गया है।",
        features: ["अटेंडेंस और लीव", "पेरोल प्रोसेसिंग", "एम्प्लॉई सेल्फ-सर्विस", "परफॉर्मेंस ट्रैकिंग"],
      },
      "institute-management": {
        title: "इंस्टीट्यूट / कोचिंग मैनेजमेंट",
        description:
          "कोचिंग सेंटर या ट्रेनिंग इंस्टीट्यूट को एंड-टू-एंड चलाएं — बैच, अटेंडेंस, फीस कलेक्शन, टेस्ट रिज़ल्ट और पेरेंट कम्युनिकेशन, सब एक सिस्टम में।",
        features: ["बैच शेड्यूलिंग", "फीस कलेक्शन", "टेस्ट और रिज़ल्ट ट्रैकिंग", "पेरेंट कम्युनिकेशन"],
      },
      cms: {
        title: "कंटेंट मैनेजमेंट सिस्टम (CMS)",
        description:
          "गैर-तकनीकी टीमों के लिए एक सरल, सुरक्षित एडमिन पैनल, जिससे वेबसाइट पेज, ब्लॉग पोस्ट और मीडिया अपडेट किए जा सकें — रोज़मर्रा के कंटेंट बदलाव के लिए किसी डेवलपर की ज़रूरत नहीं।",
        features: ["पेज बिल्डर", "ब्लॉग और मीडिया लाइब्रेरी", "रोल-बेस्ड एक्सेस", "SEO-फ्रेंडली एडिटर"],
      },
      "pathology-lab-management": {
        title: "पैथोलॉजी लैब मैनेजमेंट",
        description:
          "डायग्नोस्टिक लैब्स के लिए टेस्ट बुकिंग, सैंपल ट्रैकिंग, रिपोर्ट जनरेशन और बिलिंग मैनेज करें — सैंपल कलेक्शन से लेकर डिजिटल रूप से डिलीवर की गई रिपोर्ट तक।",
        features: ["टेस्ट बुकिंग", "सैंपल ट्रैकिंग", "रिपोर्ट जनरेशन", "बिलिंग"],
      },
      "hospital-management": {
        title: "हॉस्पिटल मैनेजमेंट सिस्टम",
        description:
          "सभी डिपार्टमेंट्स में OPD/IPD पेशेंट फ्लो, बेड अलॉटमेंट, फार्मेसी और बिलिंग मैनेज करें — यह सिस्टम सिर्फ एक क्लिनिक के लिए नहीं, बल्कि मल्टी-डिपार्टमेंट हॉस्पिटल्स के लिए बनाया गया है।",
        features: ["OPD / IPD मैनेजमेंट", "बेड अलॉटमेंट", "फार्मेसी और बिलिंग", "डिपार्टमेंट रिकॉर्ड्स"],
      },
    },
    services: {
      "web-dev": {
        title: "वेबसाइट डिज़ाइन और डेवलपमेंट",
        description: "रिस्पॉन्सिव, तेज़ वेबसाइटें जो प्रीमियम दिखती हैं और विज़िटर्स को कस्टमर में बदल देती हैं।",
      },
      "mobile-apps": {
        title: "मोबाइल ऐप डेवलपमेंट",
        description: "नेटिव Android और iOS ऐप्स, साथ ही Flutter और React Native के साथ क्रॉस-प्लेटफ़ॉर्म ऐप्स।",
      },
      "ui-ux": {
        title: "UI/UX डिज़ाइन",
        description: "साफ़-सुथरे, सहज इंटरफ़ेस जिन्हें यूज़र्स पसंद करते हैं और जो मापने योग्य परिणाम देते हैं।",
      },
      "cloud-devops": {
        title: "क्लाउड और DevOps",
        description: "भरोसेमंद क्लाउड होस्टिंग, CI/CD पाइपलाइन और प्रोडक्शन सिस्टम्स के लिए 99.9% अपटाइम SLA।",
      },
      "digital-marketing": {
        title: "डिजिटल मार्केटिंग और SEO",
        description: "रिज़ल्ट-ड्रिवन SEO, सोशल मीडिया मैनेजमेंट और कन्वर्ज़न लाने वाले PPC कैंपेन।",
      },
      "ai-chatbot": {
        title: "AI डेवलपमेंट और ऑटोमेशन",
        description:
          "कस्टम AI सॉल्यूशंस, इंटेलिजेंट चैटबॉट्स और वर्कफ़्लो ऑटोमेशन — OpenAI, Anthropic के Claude और Microsoft Azure AI पर बने, जो मैनुअल काम घटाते हैं और ऑपरेशन तेज़ करते हैं।",
      },
      "staff-augmentation": {
        title: "IT स्टाफ ऑगमेंटेशन",
        description:
          "फ्लेक्सिबल कॉन्ट्रैक्ट पर वेरीफाइड, समर्पित डेवलपर्स को हायर करें और इन-हाउस टीम को बढ़ाएं — पूरा कंट्रोल आपके पास, लंबी अवधि की हायरिंग का कोई बोझ नहीं।",
      },
      branding: {
        title: "लोगो और ब्रांड आइडेंटिटी",
        description: "प्रोफेशनल ब्रांडिंग — लोगो, कलर सिस्टम और गाइडलाइंस जो बिज़नेस को यादगार बना देती हैं।",
      },
      support: {
        title: "मेंटेनेंस और सपोर्ट",
        description: "लगातार अपडेट्स, बग फिक्स और चौबीसों घंटे तकनीकी सहायता।",
      },
      "software-consulting": {
        title: "सॉफ्टवेयर और IT कंसल्टिंग",
        description:
          "आर्किटेक्चर, प्लेटफ़ॉर्म चुनाव, डिजिटल ट्रांसफ़ॉर्मेशन रोडमैप और बिल्ड-वर्सेज़-बाय निर्णयों पर स्वतंत्र तकनीकी सलाह — कोड की एक भी लाइन लिखने से पहले।",
      },
    },
    industries: {
      healthcare: { title: "हेल्थकेयर और क्लिनिक" },
      education: { title: "एजुकेशन और कॉलेज" },
      retail: { title: "रिटेल और ई-कॉमर्स" },
      manufacturing: { title: "मैन्युफैक्चरिंग" },
      fintech: { title: "बैंकिंग और फिनटेक" },
      "real-estate": { title: "रियल एस्टेट" },
      logistics: { title: "ट्रांसपोर्ट और लॉजिस्टिक्स" },
      food: { title: "फूड और रेस्टोरेंट" },
      hospitality: { title: "होटल और हॉस्पिटैलिटी" },
      legal: { title: "लीगल और कंप्लायंस" },
      agriculture: { title: "एग्रीकल्चर और एग्रीटेक" },
      government: { title: "सरकार और NGO" },
      "ai-analytics": { title: "AI और डेटा एनालिटिक्स" },
      "supply-chain": { title: "सप्लाई चेन" },
      sports: { title: "स्पोर्ट्स और इवेंट्स" },
      insurance: { title: "इंश्योरेंस और लेंडिंग" },
      media: { title: "गेमिंग और मीडिया" },
      telecom: { title: "टेलीकॉम और IoT" },
      saas: { title: "कस्टम SaaS प्लेटफ़ॉर्म्स" },
    },
    processSteps: {
      "1": {
        title: "फ्री साइट विज़िट",
        description: "हम आपके पास आते हैं, आपकी सही ज़रूरतों को समझते हैं और आपकी आवश्यकताओं का आकलन करते हैं — पूरी तरह मुफ़्त, बिना किसी प्रतिबद्धता के।",
      },
      "2": {
        title: "डिज़ाइन और कोटेशन",
        description: "पूरी तरह पारदर्शी कोटेशन के साथ एक कस्टम प्रस्ताव। कोई छिपा हुआ चार्ज नहीं, कोई आश्चर्य नहीं।",
      },
      "3": {
        title: "आप चुनें",
        description: "अपनी पसंद के फ़ीचर्स, कॉन्फ़िगरेशन और इंटीग्रेशन चुनें। हम इसे बिल्कुल आपकी मर्ज़ी के मुताबिक़ बनाएंगे।",
      },
      "4": {
        title: "हम बनाते और डिप्लॉय करते हैं",
        description: "हमारी टीम सटीकता के साथ आपका सिस्टम बनाती और डिप्लॉय करती है — आपके कामकाज में न्यूनतम रुकावट के साथ।",
      },
      "5": {
        title: "ट्रेनिंग और सपोर्ट",
        description: "पूरी स्टाफ ट्रेनिंग, एक संपूर्ण वॉकथ्रू और गो-लाइव के बाद लंबे समय तक समर्पित 24/7 सपोर्ट।",
      },
    },
    testimonials: {
      silos: {
        quote:
          "EduErpee ने हमारे लिए एक संपूर्ण ई-कॉमर्स प्लेटफ़ॉर्म बनाया। टीम तेज़, प्रोफेशनल और हमेशा उपलब्ध रही। लॉन्च के बाद से हमारी ऑनलाइन बिक्री 3 गुना बढ़ गई है।",
        industry: "ई-कॉमर्स",
        solution: "कस्टम ई-कॉमर्स प्लेटफ़ॉर्म",
      },
      buildtone: {
        quote:
          "हमारा प्रॉपर्टी पोर्टल अब प्रीमियम दिखता है और असल में लीड्स भी ला रहा है। EduErpee ने बिल्कुल सही समझा कि एक कंस्ट्रक्शन बिज़नेस को ऑनलाइन क्या चाहिए।",
        industry: "रियल एस्टेट और कंस्ट्रक्शन",
        solution: "वेबसाइट और प्रॉपर्टी पोर्टल",
      },
      "limitless-hunch": {
        quote:
          "B2B होलसेल पोर्टल ने हमारे रिटेलर्स के लिए ऑर्डर देना बहुत आसान बना दिया है। ऑर्डर वॉल्यूम बढ़ा है और हमारी टीम हर हफ़्ते कई घंटे बचाती है।",
        industry: "क्रॉकरी और गिफ्ट होलसेल",
        solution: "B2B होलसेल पोर्टल",
      },
      "limitless-interior": {
        quote:
          "हमारी इंटीरियर शोकेस वेबसाइट बिल्कुल वैसी ही है जैसी हमने सोची थी। अब इसके ज़रिए हमें हर हफ़्ते नियमित रूप से क्लाइंट पूछताछ मिलती है।",
        industry: "होम इंटीरियर डिज़ाइन",
        solution: "इंटीरियर शोकेस वेबसाइट",
      },
      "vsd-college": {
        quote:
          "1000+ छात्रों को मैनुअली मैनेज करना एक बुरा सपना था। EduErpee का कॉलेज ERP — एडमिशन, फीस, लाइब्रेरी, ट्रांसपोर्ट — सब एक जगह। स्टाफ की प्रोडक्टिविटी काफ़ी बेहतर हुई है।",
        industry: "हायर एजुकेशन",
        solution: "संपूर्ण कॉलेज ERP",
      },
      "future-group": {
        quote:
          "EduErpee का कोचिंग ERP हमारे पूरे स्टूडेंट लाइफसाइकिल को संभालता है — एनरोलमेंट से लेकर परफॉर्मेंस ट्रैकिंग तक — अब सब कुछ ऑटोमेटेड है।",
        industry: "कॉम्पिटिटिव कोचिंग",
        solution: "संपूर्ण कोचिंग ERP",
      },
    },
    team: {
      "sushil-jaiswal": {
        role: "CEO और CTO",
        bio: "EduErpee के विज़न, रणनीति और तकनीकी इनोवेशन का नेतृत्व करते हैं, साथ ही बिज़नेस ऑपरेशंस और टेक्नोलॉजी डेवलपमेंट की देखरेख करते हैं।",
      },
      "priya-kumari": {
        role: "डायरेक्टर – ह्यूमन रिसोर्सेज़",
        bio: "HR प्लानिंग, टैलेंट एक्विज़िशन और टीम बिल्डिंग का नेतृत्व करती हैं, और EduErpee की ऑपरेशनल एक्सीलेंस व ग्रोथ को आगे बढ़ाती हैं।",
      },
      "uday-shankar-pandey": {
        role: "चीफ़ मार्केटिंग ऑफ़िसर",
        bio: "डिजिटल मार्केटिंग, ब्रांडिंग, प्रोडक्ट प्रमोशन और मार्केट रिसर्च की देखरेख करते हैं, और ग्रोथ के लिए सेल्स व प्रोडक्ट टीमों के साथ मिलकर काम करते हैं।",
      },
      "mridu-pandey": {
        role: "बिज़नेस डेवलपमेंट मैनेजर",
        bio: "क्लाइंट की ज़रूरतों और मार्केट ट्रेंड्स को समझते हुए बिज़नेस चुनौतियों और तकनीकी समाधानों के बीच सेतु का काम करती हैं।",
      },
      "dharmendra-singh": {
        role: "क्लाइंट रिलेशनशिप मैनेजर",
        bio: "क्लाइंट्स और तकनीकी टीमों के बीच कड़ी का काम करते हैं, और सुचारु संवाद व समय पर डिलीवरी सुनिश्चित करते हैं।",
      },
      "anil-jaiswal": {
        role: "ऑपरेशंस डिलीवरी मैनेजर",
        bio: "रिसोर्सिंग से लेकर डिलीवरी तक, ऑपरेशनल रणनीति को क्लाइंट की अपेक्षाओं के साथ जोड़ते हुए IT प्रोजेक्ट्स का सुचारु क्रियान्वयन सुनिश्चित करते हैं।",
      },
    },
    trustStats: {
      "0": { label: "संतुष्ट क्लाइंट्स" },
      "1": { label: "वर्षों का अनुभव" },
      "2": { label: "रेडी प्रोडक्ट्स" },
      "3": { label: "24/7 सपोर्ट" },
      "4": { label: "कई टाइम ज़ोन में" },
    },
    whyChooseUs: {
      "0": {
        title: "बिना समझौता किए किफ़ायती",
        description:
          "SMEs, स्कूलों और अस्पतालों के बजट के अनुकूल कीमतों में एंटरप्राइज़-ग्रेड सॉफ्टवेयर — कोई फ़ालतू फ़ीचर नहीं, सिर्फ़ वही जो ज़रूरी है।",
      },
      "1": {
        title: "भारत के लिए बना, GST-कंप्लायंट",
        description: "हिंदी और इंग्लिश इंटरफ़ेस, GST बिलिंग, UPI पेमेंट सपोर्ट और लोकल कंप्लायंस — शुरुआत से ही शामिल।",
      },
      "2": {
        title: "तेज़ सेटअप — महीनों में नहीं, दिनों में लाइव",
        description: "अधिकतर क्लाइंट्स कुछ ही दिनों में लाइव हो जाते हैं। सेटअप, डेटा माइग्रेशन, ट्रेनिंग और ऑनबोर्डिंग — सब हम संभालते हैं।",
      },
      "3": {
        title: "लोकल ऑफिस, वास्तविक इन-पर्सन सपोर्ट",
        description: "आज़मगढ़ और ग्रेटर नोएडा में ब्रांचेज़ — जब भी ऑन-साइट सपोर्ट चाहिए, टीम आपके पास पहुंचती है।",
      },
    },
  },
  ar: {
    solutions: {
      "school-erp": {
        title: "نظام ERP لإدارة المدارس",
        description:
          "أدِر المدرسة بأكملها من لوحة تحكم واحدة — من القبول إلى النتائج، ومن الرسوم إلى التواصل مع أولياء الأمور، ومن الرواتب إلى المكتبة — مع تطبيق Android مرافق مُضمَّن.",
        features: ["القبول", "الحضور والغياب", "إدارة الرسوم", "الامتحانات", "بوابة أولياء الأمور"],
      },
      "inventory-management": {
        title: "إدارة المخزون",
        description: "تتبّع المخزون في الوقت الفعلي، وأوامر شراء تلقائية، وتنبيهات نقص المخزون، وإدارة الموردين، وتقارير عمل تُنشأ تلقائيًا.",
        features: ["تتبّع المخزون", "إدارة أوامر الشراء", "إدارة الموردين", "التقارير"],
      },
      "library-management": {
        title: "إدارة المكتبات",
        description: "حوّل المكتبة إلى نظام رقمي خلال أيام بفضل مسح الباركود، وإدارة الفهرس، وتتبّع الإعارة والإرجاع، وإدارة الأعضاء، وتحصيل الغرامات تلقائيًا.",
        features: ["الفهرس", "مسح الباركود", "الإعارة / الإرجاع", "تحصيل الغرامات"],
      },
      "transport-management": {
        title: "إدارة النقل",
        description: "تتبّع مباشر عبر GPS، وتخطيط مسارات محسَّن، وإدارة السائقين، وتحصيل الرسوم، وإشعارات SMS تلقائية لأولياء الأمور — كل ذلك في نظام متكامل واحد.",
        features: ["تتبّع GPS", "تخطيط المسارات", "إدارة السائقين", "الإشعارات"],
      },
      "clinic-software": {
        title: "برنامج الأطباء / العيادات",
        description: "إدارة متكاملة للعيادات الخارجية — سجلات المرضى، المواعيد، السجلات الطبية الإلكترونية (EMR)، الوصفات الطبية، الفوترة، ومخزون الأدوية في نظام واحد مخصص.",
        features: ["سجلات المرضى", "السجلات الطبية الإلكترونية (EMR)", "المواعيد", "الفوترة"],
      },
      "custom-erp": {
        title: "ERP مخصص وسحابي",
        description: "لديك سير عمل فريد لا تستطيع البرمجيات الجاهزة التعامل معه؟ نبنيه من الصفر — نظام ERP وCRM مخصص، على الويب والجوال، منشور على السحابة، ومصمم خصيصًا لعملك.",
        features: ["بناء مخصص", "CRM", "SaaS", "الويب والجوال", "نشر سحابي"],
      },
      hrms: {
        title: "HRMS – إدارة الموارد البشرية والرواتب",
        description: "أدِر التوظيف والحضور والإجازات والرواتب والأداء من لوحة تحكم واحدة — مصمم لتقليل الأعمال الورقية اليدوية للفرق المتنامية.",
        features: ["الحضور والإجازات", "معالجة الرواتب", "الخدمة الذاتية للموظفين", "تتبّع الأداء"],
      },
      "institute-management": {
        title: "إدارة المعاهد / مراكز التدريب",
        description: "أدِر مركز تدريب أو معهد تعليمي من البداية إلى النهاية — المجموعات، الحضور، تحصيل الرسوم، نتائج الاختبارات، والتواصل مع أولياء الأمور، كل ذلك في نظام واحد.",
        features: ["جدولة المجموعات", "تحصيل الرسوم", "تتبّع الاختبارات والنتائج", "التواصل مع أولياء الأمور"],
      },
      cms: {
        title: "نظام إدارة المحتوى (CMS)",
        description: "لوحة تحكم بسيطة وآمنة للفرق غير التقنية لتحديث صفحات الموقع والمقالات والوسائط — دون الحاجة إلى مطور لإجراء تغييرات المحتوى اليومية.",
        features: ["منشئ الصفحات", "مكتبة المدونات والوسائط", "صلاحيات حسب الدور", "محرر متوافق مع SEO"],
      },
      "pathology-lab-management": {
        title: "إدارة مختبرات التحاليل",
        description: "أدِر حجز الفحوصات، وتتبّع العينات، وإنشاء التقارير، والفوترة لمختبرات التشخيص — من جمع العينة إلى تسليم التقرير رقميًا.",
        features: ["حجز الفحوصات", "تتبّع العينات", "إنشاء التقارير", "الفوترة"],
      },
      "hospital-management": {
        title: "نظام إدارة المستشفيات",
        description: "أدِر تدفّق المرضى في العيادات الخارجية والداخلية، وتوزيع الأسرّة، والصيدلية، والفوترة عبر جميع الأقسام — مصمم للمستشفيات متعددة الأقسام، وليس للعيادات المفردة فقط.",
        features: ["إدارة العيادات الخارجية / الداخلية", "توزيع الأسرّة", "الصيدلية والفوترة", "سجلات الأقسام"],
      },
    },
    services: {
      "web-dev": { title: "تصميم وتطوير المواقع الإلكترونية", description: "مواقع سريعة ومتجاوبة تبدو احترافية وتحوّل الزوار إلى عملاء." },
      "mobile-apps": { title: "تطوير تطبيقات الجوال", description: "تطبيقات Android وiOS أصلية، بالإضافة إلى تطبيقات متعددة المنصات باستخدام Flutter وReact Native." },
      "ui-ux": { title: "تصميم UI/UX", description: "واجهات نظيفة وبديهية يستمتع المستخدمون باستخدامها وتحقق نتائج ملموسة." },
      "cloud-devops": { title: "الحوسبة السحابية وDevOps", description: "استضافة سحابية موثوقة، وخطوط CI/CD، واتفاقيات مستوى خدمة بوقت تشغيل 99.9% لأنظمة الإنتاج." },
      "digital-marketing": { title: "التسويق الرقمي وتحسين محركات البحث (SEO)", description: "تحسين محركات بحث يركّز على النتائج، وإدارة وسائل التواصل الاجتماعي، وحملات PPC تحقق تحويلات فعلية." },
      "ai-chatbot": {
        title: "تطوير الذكاء الاصطناعي والأتمتة",
        description: "حلول ذكاء اصطناعي مخصصة، وروبوتات محادثة ذكية، وأتمتة سير العمل — مبنية على OpenAI وClaude من Anthropic وMicrosoft Azure AI لتقليل العمل اليدوي وتسريع العمليات.",
      },
      "staff-augmentation": { title: "تعزيز فريق تقنية المعلومات", description: "وظّف مطورين مؤهلين ومتفرغين بعقود مرنة لتعزيز فريقك الداخلي — تحكم كامل دون أعباء التوظيف طويل الأمد." },
      branding: { title: "الشعار والهوية البصرية", description: "هوية بصرية احترافية — شعارات، وأنظمة ألوان، وإرشادات تجعل عملك لا يُنسى." },
      support: { title: "الصيانة والدعم", description: "تحديثات مستمرة، وإصلاح للأخطاء، ودعم فني على مدار الساعة طوال أيام الأسبوع." },
      "software-consulting": {
        title: "استشارات البرمجيات وتقنية المعلومات",
        description: "استشارات تقنية مستقلة حول البنية التقنية، واختيار المنصة، وخرائط طريق التحول الرقمي، وقرارات البناء مقابل الشراء — قبل كتابة أي سطر من الكود.",
      },
    },
    industries: {
      healthcare: { title: "الرعاية الصحية والعيادات" },
      education: { title: "التعليم والكليات" },
      retail: { title: "التجزئة والتجارة الإلكترونية" },
      manufacturing: { title: "التصنيع" },
      fintech: { title: "البنوك والتقنية المالية" },
      "real-estate": { title: "العقارات" },
      logistics: { title: "النقل والخدمات اللوجستية" },
      food: { title: "الأغذية والمطاعم" },
      hospitality: { title: "الفنادق والضيافة" },
      legal: { title: "القانون والامتثال" },
      agriculture: { title: "الزراعة والتقنية الزراعية" },
      government: { title: "الحكومة والمنظمات غير الربحية" },
      "ai-analytics": { title: "الذكاء الاصطناعي وتحليل البيانات" },
      "supply-chain": { title: "سلسلة التوريد" },
      sports: { title: "الرياضة والفعاليات" },
      insurance: { title: "التأمين والإقراض" },
      media: { title: "الألعاب والإعلام" },
      telecom: { title: "الاتصالات وإنترنت الأشياء" },
      saas: { title: "منصات SaaS مخصصة" },
    },
    processSteps: {
      "1": { title: "زيارة ميدانية مجانية", description: "نأتي إليك لفهم متطلباتك بدقة وتقييم احتياجاتك — مجانًا بالكامل ودون أي التزام." },
      "2": { title: "التصميم وعرض السعر", description: "عرض مخصص مع تسعير شفاف بالكامل. لا رسوم خفية، ولا مفاجآت." },
      "3": { title: "اختر ما يناسبك", description: "اختر الميزات والإعدادات والتكاملات التي تريدها. نقوم ببنائها تمامًا كما تريد." },
      "4": { title: "البناء والنشر", description: "يقوم فريقنا ببناء ونشر نظامك بدقة متناهية — بأقل قدر ممكن من التعطيل لعملك." },
      "5": { title: "التدريب والدعم", description: "تدريب كامل للموظفين، وشرح تفصيلي شامل، ودعم مخصص على مدار الساعة طوال أيام الأسبوع بعد انطلاق النظام." },
    },
    testimonials: {
      silos: {
        quote: "قامت EduErpee ببناء منصة تجارة إلكترونية متكاملة لنا. كان الفريق سريعًا ومحترفًا ومتاحًا دائمًا. نمت مبيعاتنا عبر الإنترنت 3 أضعاف منذ الإطلاق.",
        industry: "التجارة الإلكترونية",
        solution: "منصة تجارة إلكترونية مخصصة",
      },
      buildtone: {
        quote: "أصبحت بوابة العقارات الخاصة بنا تبدو احترافية وتولّد عملاء محتملين حقيقيين الآن. فهمت EduErpee بدقة ما تحتاجه شركة إنشاءات عبر الإنترنت.",
        industry: "العقارات والإنشاءات",
        solution: "موقع إلكتروني وبوابة عقارية",
      },
      "limitless-hunch": {
        quote: "جعلت بوابة البيع بالجملة B2B عملية الطلب سلسة لتجار التجزئة لدينا. ارتفع حجم الطلبات ويوفّر فريقنا ساعات عمل كل أسبوع.",
        industry: "بيع أدوات المائدة والهدايا بالجملة",
        solution: "بوابة بيع بالجملة B2B",
      },
      "limitless-interior": {
        quote: "موقع عرض التصميم الداخلي الخاص بنا هو بالضبط ما تصوّرناه. نتلقّى الآن استفسارات عملاء منتظمة كل أسبوع من خلاله.",
        industry: "تصميم الديكور الداخلي",
        solution: "موقع عرض تصميم داخلي",
      },
      "vsd-college": {
        quote: "كانت إدارة أكثر من 1000 طالب يدويًا كابوسًا حقيقيًا. نظام ERP الخاص بـ EduErpee للكلية — القبول، الرسوم، المكتبة، النقل — كلها في نظام واحد. تحسّنت إنتاجية الموظفين بشكل كبير.",
        industry: "التعليم العالي",
        solution: "نظام ERP متكامل للكلية",
      },
      "future-group": {
        quote: "يتولّى نظام ERP الخاص بـ EduErpee للتدريب دورة حياة الطالب بأكملها — من التسجيل إلى تتبّع الأداء — وكل ذلك أصبح آليًا الآن.",
        industry: "التدريب التنافسي",
        solution: "نظام ERP متكامل للتدريب",
      },
    },
    team: {
      "sushil-jaiswal": { role: "الرئيس التنفيذي ومدير التقنية", bio: "يقود رؤية EduErpee واستراتيجيتها وابتكاراتها التقنية، ويشرف على العمليات التجارية وتطوير التقنية." },
      "priya-kumari": { role: "مديرة الموارد البشرية", bio: "تقود تخطيط الموارد البشرية واستقطاب المواهب وبناء الفريق، وتدفع التميز التشغيلي والنمو في EduErpee." },
      "uday-shankar-pandey": {
        role: "مدير التسويق التنفيذي",
        bio: "يشرف على التسويق الرقمي والعلامة التجارية وترويج المنتجات وأبحاث السوق، ويعمل عن كثب مع فرق المبيعات والمنتجات لدفع النمو.",
      },
      "mridu-pandey": { role: "مديرة تطوير الأعمال", bio: "تربط بين تحديات الأعمال والحلول التقنية من خلال فهم متطلبات العملاء واتجاهات السوق." },
      "dharmendra-singh": { role: "مدير علاقات العملاء", bio: "يعمل كحلقة وصل بين العملاء والفرق التقنية، ويضمن تواصلًا سلسًا وتسليمًا في الوقت المحدد." },
      "anil-jaiswal": {
        role: "مدير تسليم العمليات",
        bio: "يضمن التنفيذ السلس لمشاريع تقنية المعلومات، ويوائم الاستراتيجية التشغيلية مع توقعات العملاء من توفير الموارد وحتى التسليم.",
      },
    },
    trustStats: {
      "0": { label: "عملاء راضون" },
      "1": { label: "سنوات من الخبرة" },
      "2": { label: "منتجات جاهزة" },
      "3": { label: "دعم 24/7" },
      "4": { label: "عبر مناطق زمنية متعددة" },
    },
    whyChooseUs: {
      "0": {
        title: "أسعار معقولة دون التضحية بالجودة",
        description: "برمجيات بمستوى احترافي بأسعار تناسب الشركات الصغيرة والمتوسطة والمدارس والمستشفيات — بدون ميزات زائدة، فقط ما هو ضروري.",
      },
      "1": { title: "مصمم للهند ومتوافق مع GST", description: "واجهة باللغتين الهندية والإنجليزية، وفوترة متوافقة مع GST، ودعم الدفع عبر UPI، وامتثال محلي مدمج منذ اليوم الأول." },
      "2": { title: "إعداد سريع — جاهز للعمل خلال أيام وليس أشهر", description: "يبدأ معظم العملاء العمل خلال أيام قليلة. نتولّى الإعداد، وترحيل البيانات، والتدريب، والتأهيل." },
      "3": { title: "مكاتب محلية ودعم حقيقي وجهًا لوجه", description: "فروع في أزمغاره (Azamgarh) وجريتر نويدا (Greater Noida) — وعندما يكون الدعم الميداني مطلوبًا، يأتي الفريق إليك." },
    },
  },
  es: {
    solutions: {
      "school-erp": {
        title: "ERP de Gestión Escolar",
        description:
          "Gestiona todo un colegio desde un solo panel: admisiones, resultados, cuotas, comunicación con padres y nómina, todo con una app complementaria para Android incluida.",
        features: ["Admisiones", "Asistencia", "Gestión de Cuotas", "Exámenes", "Portal de Padres"],
      },
      "inventory-management": {
        title: "Gestión de Inventario",
        description:
          "Control de stock en tiempo real, órdenes de compra automatizadas, alertas de bajo stock, gestión de proveedores e informes de negocio que se generan automáticamente.",
        features: ["Control de Stock", "Gestión de Órdenes de Compra", "Gestión de Proveedores", "Informes"],
      },
      "library-management": {
        title: "Gestión de Bibliotecas",
        description:
          "Digitaliza una biblioteca en días con escaneo de códigos de barras, gestión de catálogo, seguimiento de préstamos y devoluciones, gestión de socios y cobro automatizado de multas.",
        features: ["Catálogo", "Escaneo de Código de Barras", "Préstamo / Devolución", "Cobro de Multas"],
      },
      "transport-management": {
        title: "Gestión de Transporte",
        description:
          "Seguimiento GPS en vivo, planificación de rutas optimizada, gestión de conductores, cobro de cuotas y notificaciones SMS automáticas a los padres, todo en un sistema integrado.",
        features: ["Seguimiento GPS", "Planificación de Rutas", "Gestión de Conductores", "Notificaciones"],
      },
      "clinic-software": {
        title: "Software para Médicos / Clínicas",
        description:
          "Gestión completa de consulta externa (OPD): historiales de pacientes, citas, EMR, recetas, facturación e inventario de medicamentos en un solo sistema dedicado.",
        features: ["Historiales de Pacientes", "EMR", "Citas", "Facturación"],
      },
      "custom-erp": {
        title: "ERP Personalizado y en la Nube",
        description:
          "¿Un flujo de trabajo único que el software estándar no puede manejar? Lo construimos desde cero: ERP y CRM personalizados, web, móvil, desplegados en la nube y adaptados al negocio.",
        features: ["Desarrollo a Medida", "CRM", "SaaS", "Web y Móvil", "Despliegue en la Nube"],
      },
      hrms: {
        title: "HRMS – Gestión de RR. HH. y Nómina",
        description:
          "Gestiona contratación, asistencia, permisos, nómina y desempeño desde un solo panel, diseñado para reducir el papeleo manual de RR. HH. en equipos en crecimiento.",
        features: ["Asistencia y Permisos", "Procesamiento de Nómina", "Autoservicio del Empleado", "Seguimiento de Desempeño"],
      },
      "institute-management": {
        title: "Gestión de Institutos / Academias",
        description:
          "Gestiona una academia o instituto de formación de principio a fin: grupos, asistencia, cobro de cuotas, resultados de exámenes y comunicación con los alumnos en un solo sistema.",
        features: ["Programación de Grupos", "Cobro de Cuotas", "Seguimiento de Exámenes y Resultados", "Comunicación con Padres"],
      },
      cms: {
        title: "Sistema de Gestión de Contenidos (CMS)",
        description:
          "Un panel de administración simple y seguro para que equipos sin perfil técnico actualicen páginas web, publicaciones de blog y multimedia, sin necesidad de un desarrollador para los cambios de contenido del día a día.",
        features: ["Constructor de Páginas", "Blog y Biblioteca Multimedia", "Acceso por Roles", "Editor Optimizado para SEO"],
      },
      "pathology-lab-management": {
        title: "Gestión de Laboratorios de Patología",
        description:
          "Gestiona reservas de pruebas, seguimiento de muestras, generación de informes y facturación para laboratorios de diagnóstico, desde la toma de muestras hasta la entrega digital de resultados.",
        features: ["Reserva de Pruebas", "Seguimiento de Muestras", "Generación de Informes", "Facturación"],
      },
      "hospital-management": {
        title: "Sistema de Gestión Hospitalaria",
        description:
          "Gestiona el flujo de pacientes en OPD/IPD, asignación de camas, farmacia y facturación entre departamentos, diseñado para hospitales con múltiples departamentos, no solo clínicas individuales.",
        features: ["Gestión OPD / IPD", "Asignación de Camas", "Farmacia y Facturación", "Registros por Departamento"],
      },
    },
    services: {
      "web-dev": { title: "Diseño y Desarrollo Web", description: "Sitios web rápidos y responsivos que lucen premium y convierten visitantes en clientes." },
      "mobile-apps": { title: "Desarrollo de Apps Móviles", description: "Apps nativas para Android e iOS, además de apps multiplataforma con Flutter y React Native." },
      "ui-ux": { title: "Diseño UI/UX", description: "Interfaces limpias e intuitivas que los usuarios disfrutan y que generan resultados medibles." },
      "cloud-devops": { title: "Cloud y DevOps", description: "Hosting en la nube confiable, pipelines de CI/CD y SLAs de disponibilidad del 99.9% para sistemas en producción." },
      "digital-marketing": { title: "Marketing Digital y SEO", description: "SEO orientado a resultados, gestión de redes sociales y campañas de PPC que convierten." },
      "ai-chatbot": {
        title: "Desarrollo de IA y Automatización",
        description:
          "Soluciones de IA personalizadas, chatbots inteligentes y automatización de flujos de trabajo, construidos sobre OpenAI, Claude de Anthropic y Microsoft Azure AI para reducir el trabajo manual y agilizar las operaciones.",
      },
      "staff-augmentation": {
        title: "Aumento de Personal de TI",
        description: "Contrata desarrolladores dedicados y verificados con contratos flexibles para ampliar tu equipo interno, con control total y sin cargas de contratación a largo plazo.",
      },
      branding: { title: "Logo e Identidad de Marca", description: "Branding profesional: logos, sistemas de color y guías de estilo que hacen que un negocio sea inolvidable." },
      support: { title: "Mantenimiento y Soporte", description: "Actualizaciones continuas, corrección de errores y asistencia técnica las 24 horas." },
      "software-consulting": {
        title: "Consultoría de Software y TI",
        description:
          "Asesoría tecnológica independiente sobre arquitectura, selección de plataformas, hojas de ruta de transformación digital y decisiones de construir vs. comprar, antes de escribir una sola línea de código.",
      },
    },
    industries: {
      healthcare: { title: "Salud y Clínicas" },
      education: { title: "Educación y Universidades" },
      retail: { title: "Retail y Comercio Electrónico" },
      manufacturing: { title: "Manufactura" },
      fintech: { title: "Banca y FinTech" },
      "real-estate": { title: "Bienes Raíces" },
      logistics: { title: "Transporte y Logística" },
      food: { title: "Alimentos y Restaurantes" },
      hospitality: { title: "Hoteles y Hostelería" },
      legal: { title: "Legal y Cumplimiento" },
      agriculture: { title: "Agricultura y AgriTech" },
      government: { title: "Gobierno y ONG" },
      "ai-analytics": { title: "IA y Análisis de Datos" },
      "supply-chain": { title: "Cadena de Suministro" },
      sports: { title: "Deportes y Eventos" },
      insurance: { title: "Seguros y Préstamos" },
      media: { title: "Videojuegos y Medios" },
      telecom: { title: "Telecomunicaciones e IoT" },
      saas: { title: "Plataformas SaaS Personalizadas" },
    },
    processSteps: {
      "1": { title: "Visita Gratuita al Sitio", description: "Vamos hasta ti, entendemos exactamente tus necesidades y las evaluamos, totalmente gratis y sin compromiso." },
      "2": { title: "Diseño y Presupuesto", description: "Una propuesta a medida con un presupuesto totalmente transparente. Sin cargos ocultos, sin sorpresas." },
      "3": { title: "Tú Eliges", description: "Elige tus funciones, configuraciones e integraciones. Lo construimos exactamente como lo quieres." },
      "4": { title: "Construimos e Implementamos", description: "Nuestro equipo construye e implementa tu sistema con precisión, con una interrupción mínima de tus operaciones." },
      "5": { title: "Capacitación y Soporte", description: "Capacitación completa del personal, un recorrido integral y soporte dedicado 24/7 mucho después del lanzamiento." },
    },
    testimonials: {
      silos: {
        quote: "EduErpee nos construyó una plataforma de comercio electrónico completa. El equipo fue rápido, profesional y siempre estuvo disponible. Nuestras ventas en línea han crecido 3 veces desde el lanzamiento.",
        industry: "Comercio Electrónico",
        solution: "Plataforma de E-Commerce Personalizada",
      },
      buildtone: {
        quote: "Nuestro portal inmobiliario luce premium y ahora realmente genera clientes potenciales reales. EduErpee entendió exactamente lo que una empresa de construcción necesita en línea.",
        industry: "Bienes Raíces y Construcción",
        solution: "Sitio Web y Portal Inmobiliario",
      },
      "limitless-hunch": {
        quote: "El portal mayorista B2B ha hecho que los pedidos sean impecables para nuestros minoristas. El volumen de pedidos aumentó y nuestro equipo ahorra horas cada semana.",
        industry: "Mayorista de Vajillas y Regalos",
        solution: "Portal Mayorista B2B",
      },
      "limitless-interior": {
        quote: "Nuestro sitio web de muestra de diseño de interiores es exactamente lo que imaginamos. Ahora recibimos consultas de clientes regularmente cada semana a través de él.",
        industry: "Diseño de Interiores para el Hogar",
        solution: "Sitio Web de Muestra de Interiores",
      },
      "vsd-college": {
        quote: "Gestionar más de 1000 estudiantes manualmente era una pesadilla. El ERP universitario de EduErpee: admisiones, cuotas, biblioteca, transporte, todo en uno. La productividad del personal mejoró enormemente.",
        industry: "Educación Superior",
        solution: "ERP Universitario Completo",
      },
      "future-group": {
        quote: "El ERP de academias de EduErpee gestiona todo el ciclo de vida de nuestros estudiantes, desde la inscripción hasta el seguimiento del desempeño, todo automatizado ahora.",
        industry: "Academias de Preparación Competitiva",
        solution: "ERP de Academia Completo",
      },
    },
    team: {
      "sushil-jaiswal": { role: "CEO y CTO", bio: "Lidera la visión, estrategia e innovación tecnológica de EduErpee, supervisando las operaciones comerciales y el desarrollo tecnológico." },
      "priya-kumari": { role: "Directora – Recursos Humanos", bio: "Lidera la planificación de RR. HH., la captación de talento y la formación de equipos, impulsando la excelencia operativa y el crecimiento de EduErpee." },
      "uday-shankar-pandey": {
        role: "Director de Marketing",
        bio: "Supervisa el marketing digital, el branding, la promoción de productos y la investigación de mercado, trabajando estrechamente con los equipos de ventas y producto para impulsar el crecimiento.",
      },
      "mridu-pandey": { role: "Gerente de Desarrollo de Negocios", bio: "Conecta los desafíos empresariales con las soluciones tecnológicas, comprendiendo los requisitos de los clientes y las tendencias del mercado." },
      "dharmendra-singh": { role: "Gerente de Relaciones con Clientes", bio: "Actúa como puente entre los clientes y los equipos técnicos, garantizando una comunicación fluida y una entrega puntual." },
      "anil-jaiswal": {
        role: "Gerente de Entrega de Operaciones",
        bio: "Garantiza la ejecución fluida de los proyectos de TI, alineando la estrategia operativa con las expectativas del cliente desde la asignación de recursos hasta la entrega.",
      },
    },
    trustStats: {
      "0": { label: "Clientes Satisfechos" },
      "1": { label: "Años de Trayectoria" },
      "2": { label: "Productos Listos" },
      "3": { label: "Soporte 24/7" },
      "4": { label: "En Distintas Zonas Horarias" },
    },
    whyChooseUs: {
      "0": { title: "Asequible Sin Sacrificar Calidad", description: "Software de nivel empresarial a precios accesibles para pymes, colegios y hospitales, sin funciones innecesarias, solo lo que se necesita." },
      "1": { title: "Hecho para India, Compatible con GST", description: "Interfaz en hindi e inglés, facturación GST, soporte de pagos UPI y cumplimiento normativo local integrado desde el primer día." },
      "2": {
        title: "Implementación Rápida — Operativo en Días, no Meses",
        description: "La mayoría de los clientes están operativos en cuestión de días. Nos encargamos de la configuración, migración de datos, capacitación e incorporación.",
      },
      "3": { title: "Oficinas Locales, Soporte Presencial Real", description: "Sucursales en Azamgarh y Greater Noida: cuando se necesita soporte en sitio, el equipo va hasta ti." },
    },
  },
  fr: {
    solutions: {
      "school-erp": {
        title: "ERP de Gestion Scolaire",
        description:
          "Gérez un établissement scolaire entier depuis un seul tableau de bord — des admissions aux résultats, des frais de scolarité à la communication avec les parents, en passant par la paie et la bibliothèque — avec une application Android compagnon incluse.",
        features: ["Admissions", "Présence", "Gestion des Frais de Scolarité", "Examens", "Portail Parents"],
      },
      "inventory-management": {
        title: "Gestion des Stocks",
        description: "Suivi des stocks en temps réel, commandes d'achat automatisées, alertes de stock faible, gestion des fournisseurs et rapports d'activité générés automatiquement.",
        features: ["Suivi des Stocks", "Gestion des Commandes", "Gestion des Fournisseurs", "Rapports"],
      },
      "library-management": {
        title: "Gestion de Bibliothèque",
        description: "Numérisez une bibliothèque en quelques jours grâce à la lecture de codes-barres, la gestion du catalogue, le suivi des emprunts/retours, la gestion des membres et la collecte automatisée des amendes.",
        features: ["Catalogue", "Lecture de Codes-Barres", "Emprunt / Retour", "Collecte des Amendes"],
      },
      "transport-management": {
        title: "Gestion du Transport",
        description: "Suivi GPS en temps réel, planification optimisée des itinéraires, gestion des chauffeurs, collecte des frais et notifications SMS automatiques aux parents, le tout dans un système intégré.",
        features: ["Suivi GPS", "Planification des Itinéraires", "Gestion des Chauffeurs", "Notifications"],
      },
      "clinic-software": {
        title: "Logiciel pour Médecins / Cliniques",
        description: "Gestion complète des consultations externes (OPD) : dossiers patients, rendez-vous, DME, ordonnances, facturation et inventaire des médicaments dans un seul système dédié.",
        features: ["Dossiers Patients", "DME", "Rendez-vous", "Facturation"],
      },
      "custom-erp": {
        title: "ERP Personnalisé et Cloud",
        description: "Un flux de travail unique qu'un logiciel standard ne peut pas gérer ? Nous le construisons sur mesure — ERP et CRM personnalisés, web, mobile, déployés dans le cloud et adaptés à l'entreprise.",
        features: ["Développement sur Mesure", "CRM", "SaaS", "Web et Mobile", "Déploiement Cloud"],
      },
      hrms: {
        title: "HRMS – Gestion RH et Paie",
        description: "Gérez le recrutement, la présence, les congés, la paie et la performance depuis un seul tableau de bord, conçu pour réduire les démarches administratives RH manuelles des équipes en croissance.",
        features: ["Présence et Congés", "Traitement de la Paie", "Libre-Service Employé", "Suivi de la Performance"],
      },
      "institute-management": {
        title: "Gestion d'Instituts / Centres de Formation",
        description: "Gérez un centre de coaching ou un institut de formation de bout en bout — groupes, présence, collecte des frais, résultats aux examens et communication avec les étudiants, le tout dans un seul système.",
        features: ["Planification des Groupes", "Collecte des Frais", "Suivi des Examens et Résultats", "Communication avec les Parents"],
      },
      cms: {
        title: "Système de Gestion de Contenu (CMS)",
        description: "Un panneau d'administration simple et sécurisé permettant aux équipes non techniques de mettre à jour les pages du site, les articles de blog et les médias — aucun développeur requis pour les mises à jour de contenu courantes.",
        features: ["Créateur de Pages", "Blog et Bibliothèque Médias", "Accès par Rôles", "Éditeur Optimisé pour le SEO"],
      },
      "pathology-lab-management": {
        title: "Gestion de Laboratoire de Pathologie",
        description: "Gérez les réservations d'analyses, le suivi des échantillons, la génération de rapports et la facturation pour les laboratoires de diagnostic — du prélèvement d'échantillons à la livraison numérique des rapports.",
        features: ["Réservation d'Analyses", "Suivi des Échantillons", "Génération de Rapports", "Facturation"],
      },
      "hospital-management": {
        title: "Système de Gestion Hospitalière",
        description: "Gérez le flux de patients en OPD/IPD, l'attribution des lits, la pharmacie et la facturation entre services — conçu pour les hôpitaux multi-services, pas seulement les cliniques individuelles.",
        features: ["Gestion OPD / IPD", "Attribution des Lits", "Pharmacie et Facturation", "Dossiers par Service"],
      },
    },
    services: {
      "web-dev": { title: "Conception et Développement Web", description: "Des sites web rapides et responsives, à l'apparence haut de gamme, qui transforment les visiteurs en clients." },
      "mobile-apps": { title: "Développement d'Applications Mobiles", description: "Applications natives Android et iOS, ainsi que des applications multiplateformes avec Flutter et React Native." },
      "ui-ux": { title: "Conception UI/UX", description: "Des interfaces claires et intuitives que les utilisateurs apprécient et qui génèrent des résultats mesurables." },
      "cloud-devops": { title: "Cloud et DevOps", description: "Hébergement cloud fiable, pipelines CI/CD et SLA de disponibilité de 99,9 % pour les systèmes en production." },
      "digital-marketing": { title: "Marketing Digital et SEO", description: "SEO axé sur les résultats, gestion des réseaux sociaux et campagnes PPC qui convertissent." },
      "ai-chatbot": {
        title: "Développement IA et Automatisation",
        description: "Solutions d'IA sur mesure, chatbots intelligents et automatisation des flux de travail — développés sur OpenAI, Claude d'Anthropic et Microsoft Azure AI pour réduire le travail manuel et accélérer les opérations.",
      },
      "staff-augmentation": {
        title: "Renfort de Personnel IT",
        description: "Recrutez des développeurs dédiés et qualifiés avec des contrats flexibles pour renforcer une équipe interne — contrôle total, sans contraintes d'embauche à long terme.",
      },
      branding: { title: "Logo et Identité de Marque", description: "Une image de marque professionnelle — logos, chartes graphiques et guides qui rendent une entreprise inoubliable." },
      support: { title: "Maintenance et Support", description: "Mises à jour continues, corrections de bugs et assistance technique 24 heures sur 24." },
      "software-consulting": {
        title: "Conseil en Logiciels et IT",
        description: "Conseils technologiques indépendants sur l'architecture, le choix des plateformes, les feuilles de route de transformation numérique et les décisions de construire ou d'acheter — avant même la première ligne de code.",
      },
    },
    industries: {
      healthcare: { title: "Santé et Cliniques" },
      education: { title: "Éducation et Universités" },
      retail: { title: "Commerce et E-Commerce" },
      manufacturing: { title: "Industrie Manufacturière" },
      fintech: { title: "Banque et FinTech" },
      "real-estate": { title: "Immobilier" },
      logistics: { title: "Transport et Logistique" },
      food: { title: "Alimentation et Restauration" },
      hospitality: { title: "Hôtellerie" },
      legal: { title: "Juridique et Conformité" },
      agriculture: { title: "Agriculture et AgriTech" },
      government: { title: "Gouvernement et ONG" },
      "ai-analytics": { title: "IA et Analyse de Données" },
      "supply-chain": { title: "Chaîne d'Approvisionnement" },
      sports: { title: "Sport et Événements" },
      insurance: { title: "Assurance et Prêts" },
      media: { title: "Jeux Vidéo et Médias" },
      telecom: { title: "Télécom et IoT" },
      saas: { title: "Plateformes SaaS Personnalisées" },
    },
    processSteps: {
      "1": { title: "Visite Gratuite sur Site", description: "Nous venons à vous, comprenons précisément vos besoins et les évaluons — entièrement gratuit, sans engagement." },
      "2": { title: "Conception et Devis", description: "Une proposition sur mesure avec un devis totalement transparent. Aucun frais caché, aucune surprise." },
      "3": { title: "Vous Choisissez", description: "Choisissez vos fonctionnalités, configurations et intégrations. Nous le construisons exactement comme vous le souhaitez." },
      "4": { title: "Nous Construisons et Déployons", description: "Notre équipe construit et déploie votre système avec précision — une perturbation minimale de vos activités." },
      "5": { title: "Formation et Support", description: "Formation complète du personnel, présentation détaillée et support dédié 24h/24 et 7j/7 bien après la mise en service." },
    },
    testimonials: {
      silos: {
        quote: "EduErpee nous a construit une plateforme e-commerce complète. L'équipe était rapide, professionnelle et toujours disponible. Nos ventes en ligne ont triplé depuis le lancement.",
        industry: "E-Commerce",
        solution: "Plateforme E-Commerce Personnalisée",
      },
      buildtone: {
        quote: "Notre portail immobilier a l'air haut de gamme et génère maintenant de véritables prospects. EduErpee a parfaitement compris ce dont une entreprise de construction a besoin en ligne.",
        industry: "Immobilier et Construction",
        solution: "Site Web et Portail Immobilier",
      },
      "limitless-hunch": {
        quote: "Le portail de vente en gros B2B a rendu les commandes fluides pour nos détaillants. Le volume de commandes a augmenté et notre équipe économise des heures chaque semaine.",
        industry: "Vente en Gros de Vaisselle et Cadeaux",
        solution: "Portail de Vente en Gros B2B",
      },
      "limitless-interior": {
        quote: "Notre site de présentation de design d'intérieur est exactement ce que nous avions imaginé. Nous recevons désormais régulièrement des demandes de clients chaque semaine grâce à lui.",
        industry: "Design d'Intérieur",
        solution: "Site de Présentation Intérieur",
      },
      "vsd-college": {
        quote: "Gérer plus de 1000 étudiants manuellement était un cauchemar. L'ERP universitaire d'EduErpee — admissions, frais, bibliothèque, transport — tout en un. La productivité du personnel s'est considérablement améliorée.",
        industry: "Enseignement Supérieur",
        solution: "ERP Universitaire Complet",
      },
      "future-group": {
        quote: "L'ERP de coaching d'EduErpee gère tout le parcours de nos étudiants — de l'inscription au suivi des performances — désormais entièrement automatisé.",
        industry: "Centres de Préparation aux Concours",
        solution: "ERP de Coaching Complet",
      },
    },
    team: {
      "sushil-jaiswal": { role: "PDG et Directeur Technique", bio: "Dirige la vision, la stratégie et l'innovation technologique d'EduErpee, en supervisant les opérations commerciales et le développement technologique." },
      "priya-kumari": { role: "Directrice des Ressources Humaines", bio: "Dirige la planification RH, le recrutement des talents et la constitution d'équipes, favorisant l'excellence opérationnelle et la croissance d'EduErpee." },
      "uday-shankar-pandey": {
        role: "Directeur Marketing",
        bio: "Supervise le marketing digital, l'image de marque, la promotion des produits et l'étude de marché, en collaboration étroite avec les équipes commerciales et produit pour stimuler la croissance.",
      },
      "mridu-pandey": { role: "Responsable du Développement Commercial", bio: "Fait le lien entre les défis commerciaux et les solutions technologiques en comprenant les besoins des clients et les tendances du marché." },
      "dharmendra-singh": { role: "Responsable des Relations Clients", bio: "Sert de lien entre les clients et les équipes techniques, garantissant une communication fluide et une livraison dans les délais." },
      "anil-jaiswal": {
        role: "Responsable de la Livraison des Opérations",
        bio: "Assure l'exécution fluide des projets IT, en alignant la stratégie opérationnelle sur les attentes des clients, de l'allocation des ressources à la livraison.",
      },
    },
    trustStats: {
      "0": { label: "Clients Satisfaits" },
      "1": { label: "Années d'Expérience" },
      "2": { label: "Produits Prêts à l'Emploi" },
      "3": { label: "Support 24/7" },
      "4": { label: "Fuseaux Horaires Couverts" },
    },
    whyChooseUs: {
      "0": { title: "Abordable Sans Compromis sur la Qualité", description: "Un logiciel de niveau entreprise à des prix adaptés aux PME, écoles et hôpitaux — sans superflu, uniquement l'essentiel." },
      "1": { title: "Conçu pour l'Inde, Conforme à la GST", description: "Interface en hindi et en anglais, facturation GST, prise en charge des paiements UPI et conformité locale intégrée dès le premier jour." },
      "2": {
        title: "Mise en Place Rapide — Opérationnel en Quelques Jours, pas en Mois",
        description: "La plupart des clients sont opérationnels en quelques jours. Nous prenons en charge la configuration, la migration des données, la formation et l'intégration.",
      },
      "3": { title: "Bureaux Locaux, Support Humain Réel", description: "Des agences à Azamgarh et à Greater Noida — lorsqu'un support sur site est nécessaire, l'équipe se déplace chez vous." },
    },
  },
  de: {
    solutions: {
      "school-erp": {
        title: "Schulverwaltungs-ERP",
        description:
          "Führen Sie eine ganze Schule über ein einziges Dashboard — von der Aufnahme bis zu den Noten, von der Gebührenverwaltung bis zur Elternkommunikation, von der Gehaltsabrechnung bis zur Bibliothek — inklusive Android-Begleit-App.",
        features: ["Aufnahmen", "Anwesenheit", "Gebührenverwaltung", "Prüfungen", "Elternportal"],
      },
      "inventory-management": {
        title: "Lagerverwaltung",
        description: "Echtzeit-Bestandsverfolgung, automatisierte Bestellungen, Benachrichtigungen bei niedrigem Lagerbestand, Lieferantenverwaltung und automatisch erstellte Geschäftsberichte.",
        features: ["Bestandsverfolgung", "Bestellverwaltung", "Lieferantenverwaltung", "Berichte"],
      },
      "library-management": {
        title: "Bibliotheksverwaltung",
        description: "Digitalisieren Sie eine Bibliothek innerhalb weniger Tage mit Barcode-Scanning, Katalogverwaltung, Ausleih-/Rückgabeverfolgung, Mitgliederverwaltung und automatisierter Mahngebühreneinziehung.",
        features: ["Katalog", "Barcode-Scanning", "Ausleihe / Rückgabe", "Mahngebühren"],
      },
      "transport-management": {
        title: "Transportmanagement",
        description: "GPS-Live-Tracking, optimierte Routenplanung, Fahrerverwaltung, Gebühreneinzug und automatisierte SMS-Benachrichtigungen für Eltern — alles in einem integrierten System.",
        features: ["GPS-Tracking", "Routenplanung", "Fahrerverwaltung", "Benachrichtigungen"],
      },
      "clinic-software": {
        title: "Arzt-/Klinik-Software",
        description: "Vollständiges Ambulanzmanagement — Patientenakten, Terminplanung, elektronische Patientenakte (EMR), Rezepte, Abrechnung und Medikamentenbestand in einem dedizierten System.",
        features: ["Patientenakten", "EMR", "Terminplanung", "Abrechnung"],
      },
      "custom-erp": {
        title: "Individuelles & Cloud-ERP",
        description: "Ein einzigartiger Arbeitsablauf, den Standardsoftware nicht abbilden kann? Von Grund auf entwickelt — individuelles ERP und CRM, Web, Mobile, Cloud-bereitgestellt und auf das Unternehmen zugeschnitten.",
        features: ["Individuelle Entwicklung", "CRM", "SaaS", "Web & Mobile", "Cloud-Bereitstellung"],
      },
      hrms: {
        title: "HRMS – Personal- & Gehaltsabrechnungsverwaltung",
        description: "Verwalten Sie Einstellung, Anwesenheit, Urlaub, Gehaltsabrechnung und Leistung über ein einziges Dashboard — entwickelt, um den manuellen HR-Papierkram für wachsende Teams zu reduzieren.",
        features: ["Anwesenheit & Urlaub", "Gehaltsabrechnung", "Mitarbeiter-Self-Service", "Leistungsverfolgung"],
      },
      "institute-management": {
        title: "Institut-/Nachhilfeverwaltung",
        description: "Führen Sie ein Nachhilfezentrum oder Ausbildungsinstitut vollständig digital — Kurse, Anwesenheit, Gebühreneinzug, Testergebnisse und Elternkommunikation in einem System.",
        features: ["Kursplanung", "Gebühreneinzug", "Test- & Ergebnisverfolgung", "Elternkommunikation"],
      },
      cms: {
        title: "Content-Management-System (CMS)",
        description: "Ein einfaches, sicheres Admin-Panel für nicht-technische Teams, um Website-Seiten, Blogbeiträge und Medien zu aktualisieren — kein Entwickler für alltägliche Inhaltsänderungen nötig.",
        features: ["Seiten-Builder", "Blog & Medienbibliothek", "Rollenbasierter Zugriff", "SEO-freundlicher Editor"],
      },
      "pathology-lab-management": {
        title: "Labor-/Pathologieverwaltung",
        description: "Verwalten Sie Testbuchungen, Probenverfolgung, Berichterstellung und Abrechnung für diagnostische Labore — von der Probenentnahme bis zum digital übermittelten Befund.",
        features: ["Testbuchung", "Probenverfolgung", "Berichterstellung", "Abrechnung"],
      },
      "hospital-management": {
        title: "Krankenhausverwaltungssystem",
        description: "Verwalten Sie den Patientenfluss in Ambulanz/Stationär, Bettenbelegung, Apotheke und Abrechnung über alle Abteilungen hinweg — konzipiert für Krankenhäuser mit mehreren Abteilungen, nicht nur Einzelpraxen.",
        features: ["Ambulanz-/Stationärverwaltung", "Bettenbelegung", "Apotheke & Abrechnung", "Abteilungsakten"],
      },
    },
    services: {
      "web-dev": { title: "Website-Design & -Entwicklung", description: "Responsive, schnelle Websites, die hochwertig wirken und Besucher in Kunden verwandeln." },
      "mobile-apps": { title: "Mobile App-Entwicklung", description: "Native Android- & iOS-Apps sowie plattformübergreifende Apps mit Flutter und React Native." },
      "ui-ux": { title: "UI/UX-Design", description: "Klare, intuitive Benutzeroberflächen, die Nutzer gerne verwenden und die messbare Ergebnisse liefern." },
      "cloud-devops": { title: "Cloud & DevOps", description: "Zuverlässiges Cloud-Hosting, CI/CD-Pipelines und 99,9 % Verfügbarkeits-SLAs für Produktivsysteme." },
      "digital-marketing": { title: "Digitales Marketing & SEO", description: "Ergebnisorientiertes SEO, Social-Media-Management und PPC-Kampagnen, die konvertieren." },
      "ai-chatbot": {
        title: "KI-Entwicklung & Automatisierung",
        description: "Individuelle KI-Lösungen, intelligente Chatbots und Workflow-Automatisierung — basierend auf OpenAI, Anthropics Claude und Microsoft Azure AI, um manuelle Arbeit zu reduzieren und Abläufe zu beschleunigen.",
      },
      "staff-augmentation": {
        title: "IT-Personalaufstockung",
        description: "Engagieren Sie geprüfte, dedizierte Entwickler mit flexiblen Verträgen zur Erweiterung eines internen Teams — volle Kontrolle, kein langfristiger Einstellungsaufwand.",
      },
      branding: { title: "Logo & Markenidentität", description: "Professionelles Branding — Logos, Farbsysteme und Richtlinien, die ein Unternehmen unvergesslich machen." },
      support: { title: "Wartung & Support", description: "Laufende Updates, Fehlerbehebungen und technische Unterstützung rund um die Uhr." },
      "software-consulting": {
        title: "Software- & IT-Beratung",
        description: "Unabhängige Technologieberatung zu Architektur, Plattformauswahl, Roadmaps für die digitale Transformation und Build-vs-Buy-Entscheidungen — noch bevor die erste Zeile Code geschrieben wird.",
      },
    },
    industries: {
      healthcare: { title: "Gesundheitswesen & Kliniken" },
      education: { title: "Bildung & Hochschulen" },
      retail: { title: "Einzelhandel & E-Commerce" },
      manufacturing: { title: "Fertigung" },
      fintech: { title: "Banking & FinTech" },
      "real-estate": { title: "Immobilien" },
      logistics: { title: "Transport & Logistik" },
      food: { title: "Gastronomie & Restaurants" },
      hospitality: { title: "Hotels & Gastgewerbe" },
      legal: { title: "Recht & Compliance" },
      agriculture: { title: "Landwirtschaft & AgriTech" },
      government: { title: "Behörden & NGOs" },
      "ai-analytics": { title: "KI & Datenanalyse" },
      "supply-chain": { title: "Lieferkette" },
      sports: { title: "Sport & Veranstaltungen" },
      insurance: { title: "Versicherung & Kreditwesen" },
      media: { title: "Gaming & Medien" },
      telecom: { title: "Telekommunikation & IoT" },
      saas: { title: "Individuelle SaaS-Plattformen" },
    },
    processSteps: {
      "1": { title: "Kostenloser Vor-Ort-Besuch", description: "Wir kommen zu Ihnen, verstehen Ihre genauen Anforderungen und analysieren Ihren Bedarf — völlig kostenlos und unverbindlich." },
      "2": { title: "Design & Angebot", description: "Ein individuelles Angebot mit vollständig transparenter Kalkulation. Keine versteckten Kosten, keine Überraschungen." },
      "3": { title: "Sie entscheiden", description: "Wählen Sie Ihre Funktionen, Konfigurationen und Integrationen. Wir bauen es genau so, wie Sie es möchten." },
      "4": { title: "Wir entwickeln & implementieren", description: "Unser Team entwickelt und implementiert Ihr System mit Präzision — minimale Beeinträchtigung Ihres laufenden Betriebs." },
      "5": { title: "Schulung & Support", description: "Umfassende Mitarbeiterschulung, eine vollständige Einführung und dedizierter 24/7-Support, auch lange nach dem Go-live." },
    },
    testimonials: {
      silos: {
        quote: "EduErpee hat uns eine komplette E-Commerce-Plattform aufgebaut. Das Team war schnell, professionell und stets erreichbar. Unsere Online-Verkäufe haben sich seit dem Launch verdreifacht.",
        industry: "E-Commerce",
        solution: "Individuelle E-Commerce-Plattform",
      },
      buildtone: {
        quote: "Unser Immobilienportal wirkt hochwertig und generiert jetzt tatsächlich echte Leads. EduErpee hat genau verstanden, was ein Bauunternehmen online braucht.",
        industry: "Immobilien & Bauwesen",
        solution: "Website & Immobilienportal",
      },
      "limitless-hunch": {
        quote: "Das B2B-Großhandelsportal hat die Bestellabwicklung für unsere Einzelhändler nahtlos gemacht. Das Bestellvolumen ist gestiegen und unser Team spart jede Woche mehrere Stunden.",
        industry: "Geschirr- & Geschenkgroßhandel",
        solution: "B2B-Großhandelsportal",
      },
      "limitless-interior": {
        quote: "Unsere Website zur Innenausstattungs-Präsentation entspricht genau unserer Vorstellung. Wir erhalten jetzt jede Woche regelmäßig Kundenanfragen darüber.",
        industry: "Innenarchitektur",
        solution: "Showcase-Website für Innenausstattung",
      },
      "vsd-college": {
        quote: "Über 1000 Studierende manuell zu verwalten war ein Albtraum. Das College-ERP von EduErpee — Aufnahmen, Gebühren, Bibliothek, Transport — alles aus einer Hand. Die Produktivität des Personals hat sich enorm verbessert.",
        industry: "Hochschulbildung",
        solution: "Vollständiges College-ERP",
      },
      "future-group": {
        quote: "Das Nachhilfe-ERP von EduErpee deckt unseren gesamten Student-Lebenszyklus ab — von der Einschreibung bis zur Leistungsverfolgung — jetzt alles automatisiert.",
        industry: "Wettbewerbsorientierte Nachhilfe",
        solution: "Vollständiges Nachhilfe-ERP",
      },
    },
    team: {
      "sushil-jaiswal": { role: "CEO & CTO", bio: "Verantwortet die Vision, Strategie und technologische Innovation von EduErpee und überwacht den Geschäftsbetrieb sowie die Technologieentwicklung." },
      "priya-kumari": { role: "Direktorin – Personalwesen", bio: "Leitet die Personalplanung, Talentgewinnung und Teambildung und treibt die operative Exzellenz und das Wachstum von EduErpee voran." },
      "uday-shankar-pandey": {
        role: "Chief Marketing Officer",
        bio: "Verantwortet digitales Marketing, Branding, Produktwerbung und Marktforschung und arbeitet eng mit den Vertriebs- und Produktteams zusammen, um Wachstum voranzutreiben.",
      },
      "mridu-pandey": { role: "Business Development Manager", bio: "Verbindet geschäftliche Herausforderungen mit technologischen Lösungen, indem Kundenanforderungen und Markttrends verstanden werden." },
      "dharmendra-singh": { role: "Client Relationship Manager", bio: "Fungiert als Bindeglied zwischen Kunden und technischen Teams und sorgt für reibungslose Kommunikation sowie termingerechte Lieferung." },
      "anil-jaiswal": {
        role: "Operations Delivery Manager",
        bio: "Sorgt für die reibungslose Umsetzung von IT-Projekten und richtet die operative Strategie von der Ressourcenplanung bis zur Lieferung an den Kundenerwartungen aus.",
      },
    },
    trustStats: {
      "0": { label: "Zufriedene Kunden" },
      "1": { label: "Jahre im Aufbau" },
      "2": { label: "Fertige Produkte" },
      "3": { label: "24/7-Support" },
      "4": { label: "Über alle Zeitzonen hinweg" },
    },
    whyChooseUs: {
      "0": { title: "Erschwinglich, ohne Kompromisse", description: "Software auf Unternehmensniveau zu Preisen, die für KMU, Schulen und Krankenhäuser sinnvoll sind — keine überflüssigen Funktionen, nur das, was wirklich gebraucht wird." },
      "1": { title: "Für Indien gemacht, GST-konform", description: "Hindi- & Englisch-Oberfläche, GST-Abrechnung, UPI-Zahlungsunterstützung und lokale Compliance von Anfang an integriert." },
      "2": {
        title: "Schnelle Einrichtung — live in Tagen, nicht Monaten",
        description: "Die meisten Kunden gehen innerhalb weniger Tage live. Wir übernehmen Einrichtung, Datenmigration, Schulung und Onboarding.",
      },
      "3": { title: "Lokale Büros, echter persönlicher Support", description: "Niederlassungen in Azamgarh und Greater Noida — wenn Vor-Ort-Support benötigt wird, kommt das Team zu Ihnen." },
    },
  },
  pt: {
    solutions: {
      "school-erp": {
        title: "ERP de Gestão Escolar",
        description:
          "Administre toda uma escola a partir de um único painel — das admissões aos resultados, das mensalidades à comunicação com os pais, da folha de pagamento à biblioteca — com um aplicativo Android incluso.",
        features: ["Admissões", "Frequência", "Gestão de Mensalidades", "Exames", "Portal dos Pais"],
      },
      "inventory-management": {
        title: "Gestão de Estoque",
        description: "Rastreamento de estoque em tempo real, pedidos de compra automatizados, alertas de estoque baixo, gestão de fornecedores e relatórios gerenciais gerados automaticamente.",
        features: ["Rastreamento de Estoque", "Gestão de Pedidos de Compra", "Gestão de Fornecedores", "Relatórios"],
      },
      "library-management": {
        title: "Gestão de Biblioteca",
        description: "Digitalize uma biblioteca em poucos dias com leitura de código de barras, gestão de catálogo, controle de empréstimo/devolução, gestão de associados e cobrança automatizada de multas.",
        features: ["Catálogo", "Leitura de Código de Barras", "Empréstimo / Devolução", "Cobrança de Multas"],
      },
      "transport-management": {
        title: "Gestão de Transporte",
        description: "Rastreamento GPS em tempo real, planejamento otimizado de rotas, gestão de motoristas, cobrança de taxas e notificações automáticas por SMS aos pais, tudo em um sistema integrado.",
        features: ["Rastreamento GPS", "Planejamento de Rotas", "Gestão de Motoristas", "Notificações"],
      },
      "clinic-software": {
        title: "Software para Médicos / Clínicas",
        description: "Gestão completa de ambulatório — prontuários de pacientes, agendamento de consultas, prontuário eletrônico (EMR), receitas, faturamento e estoque de medicamentos em um único sistema dedicado.",
        features: ["Prontuários de Pacientes", "EMR", "Agendamento de Consultas", "Faturamento"],
      },
      "custom-erp": {
        title: "ERP Personalizado em Nuvem",
        description: "Um fluxo de trabalho único que nenhum software pronto consegue atender? Desenvolvido do zero — ERP e CRM personalizados, web, mobile, implantados em nuvem e adaptados ao negócio.",
        features: ["Desenvolvimento Personalizado", "CRM", "SaaS", "Web e Mobile", "Implantação em Nuvem"],
      },
      hrms: {
        title: "HRMS – Gestão de RH e Folha de Pagamento",
        description: "Gerencie contratação, frequência, licenças, folha de pagamento e desempenho a partir de um único painel — criado para reduzir a papelada manual de RH em equipes em crescimento.",
        features: ["Frequência e Licenças", "Processamento de Folha de Pagamento", "Autoatendimento do Funcionário", "Acompanhamento de Desempenho"],
      },
      "institute-management": {
        title: "Gestão de Institutos / Cursos Preparatórios",
        description: "Administre um cursinho ou instituto de treinamento de ponta a ponta — turmas, frequência, cobrança de mensalidades, resultados de provas e comunicação com os pais em um único sistema.",
        features: ["Agendamento de Turmas", "Cobrança de Mensalidades", "Acompanhamento de Provas e Resultados", "Comunicação com os Pais"],
      },
      cms: {
        title: "Sistema de Gestão de Conteúdo (CMS)",
        description: "Um painel administrativo simples e seguro para equipes não técnicas atualizarem páginas do site, posts de blog e mídias — sem necessidade de desenvolvedor para mudanças de conteúdo do dia a dia.",
        features: ["Construtor de Páginas", "Blog e Biblioteca de Mídia", "Acesso Baseado em Funções", "Editor Amigável para SEO"],
      },
      "pathology-lab-management": {
        title: "Gestão de Laboratório de Patologia",
        description: "Gerencie agendamentos de exames, rastreamento de amostras, geração de laudos e faturamento para laboratórios de diagnóstico — da coleta da amostra à entrega digital do laudo.",
        features: ["Agendamento de Exames", "Rastreamento de Amostras", "Geração de Laudos", "Faturamento"],
      },
      "hospital-management": {
        title: "Sistema de Gestão Hospitalar",
        description: "Gerencie o fluxo de pacientes de ambulatório/internação, alocação de leitos, farmácia e faturamento em todos os departamentos — desenvolvido para hospitais com múltiplos departamentos, não apenas clínicas individuais.",
        features: ["Gestão de Ambulatório / Internação", "Alocação de Leitos", "Farmácia e Faturamento", "Registros por Departamento"],
      },
    },
    services: {
      "web-dev": { title: "Design e Desenvolvimento de Sites", description: "Sites responsivos e rápidos, com visual premium, que transformam visitantes em clientes." },
      "mobile-apps": { title: "Desenvolvimento de Aplicativos Móveis", description: "Aplicativos nativos para Android e iOS, além de apps multiplataforma com Flutter e React Native." },
      "ui-ux": { title: "Design de UI/UX", description: "Interfaces limpas e intuitivas que os usuários gostam de usar e que geram resultados mensuráveis." },
      "cloud-devops": { title: "Cloud e DevOps", description: "Hospedagem em nuvem confiável, pipelines de CI/CD e SLAs de disponibilidade de 99,9% para sistemas em produção." },
      "digital-marketing": { title: "Marketing Digital e SEO", description: "SEO orientado a resultados, gestão de redes sociais e campanhas de PPC que convertem." },
      "ai-chatbot": {
        title: "Desenvolvimento de IA e Automação",
        description: "Soluções de IA personalizadas, chatbots inteligentes e automação de fluxos de trabalho — construídos sobre OpenAI, Claude da Anthropic e Microsoft Azure AI para reduzir o trabalho manual e agilizar as operações.",
      },
      "staff-augmentation": {
        title: "Aumento de Equipe de TI",
        description: "Contrate desenvolvedores dedicados e qualificados em contratos flexíveis para reforçar uma equipe interna — controle total, sem os custos de uma contratação de longo prazo.",
      },
      branding: { title: "Logotipo e Identidade de Marca", description: "Branding profissional — logotipos, sistemas de cores e diretrizes que tornam um negócio inesquecível." },
      support: { title: "Manutenção e Suporte", description: "Atualizações contínuas, correções de bugs e assistência técnica 24 horas por dia." },
      "software-consulting": {
        title: "Consultoria em Software e TI",
        description: "Consultoria tecnológica independente sobre arquitetura, seleção de plataforma, roteiros de transformação digital e decisões de construir versus comprar — antes mesmo de escrever a primeira linha de código.",
      },
    },
    industries: {
      healthcare: { title: "Saúde e Clínicas" },
      education: { title: "Educação e Faculdades" },
      retail: { title: "Varejo e E-Commerce" },
      manufacturing: { title: "Manufatura" },
      fintech: { title: "Bancos e FinTech" },
      "real-estate": { title: "Imóveis" },
      logistics: { title: "Transporte e Logística" },
      food: { title: "Alimentação e Restaurantes" },
      hospitality: { title: "Hotéis e Hospitalidade" },
      legal: { title: "Jurídico e Compliance" },
      agriculture: { title: "Agricultura e AgriTech" },
      government: { title: "Governo e ONGs" },
      "ai-analytics": { title: "IA e Análise de Dados" },
      "supply-chain": { title: "Cadeia de Suprimentos" },
      sports: { title: "Esportes e Eventos" },
      insurance: { title: "Seguros e Crédito" },
      media: { title: "Jogos e Mídia" },
      telecom: { title: "Telecomunicações e IoT" },
      saas: { title: "Plataformas SaaS Personalizadas" },
    },
    processSteps: {
      "1": { title: "Visita Gratuita ao Local", description: "Vamos até você, entendemos exatamente suas necessidades e avaliamos seus requisitos — totalmente gratuito, sem compromisso." },
      "2": { title: "Design e Orçamento", description: "Uma proposta personalizada com orçamento totalmente transparente. Sem taxas ocultas, sem surpresas." },
      "3": { title: "Você Escolhe", description: "Escolha seus recursos, configurações e integrações. Nós desenvolvemos exatamente do jeito que você quer." },
      "4": { title: "Nós Desenvolvemos e Implantamos", description: "Nossa equipe desenvolve e implanta seu sistema com precisão — com o mínimo de interrupção nas suas operações." },
      "5": { title: "Treinamento e Suporte", description: "Treinamento completo da equipe, uma explicação detalhada e suporte dedicado 24/7 muito tempo depois do lançamento." },
    },
    testimonials: {
      silos: {
        quote: "A EduErpee construiu para nós uma plataforma completa de e-commerce. A equipe foi rápida, profissional e sempre disponível. Nossas vendas online triplicaram desde o lançamento.",
        industry: "E-Commerce",
        solution: "Plataforma de E-Commerce Personalizada",
      },
      buildtone: {
        quote: "Nosso portal de imóveis tem uma aparência premium e agora realmente gera leads. A EduErpee entendeu exatamente o que uma construtora precisa online.",
        industry: "Imóveis e Construção",
        solution: "Site e Portal de Imóveis",
      },
      "limitless-hunch": {
        quote: "O portal de atacado B2B tornou os pedidos muito mais simples para nossos revendedores. O volume de pedidos aumentou e nossa equipe economiza horas todas as semanas.",
        industry: "Atacado de Louças e Presentes",
        solution: "Portal de Atacado B2B",
      },
      "limitless-interior": {
        quote: "Nosso site de portfólio de decoração de interiores é exatamente o que imaginávamos. Agora recebemos consultas de clientes regularmente todas as semanas através dele.",
        industry: "Design de Interiores",
        solution: "Site de Portfólio de Interiores",
      },
      "vsd-college": {
        quote: "Gerenciar mais de 1000 alunos manualmente era um pesadelo. O ERP acadêmico da EduErpee — admissões, mensalidades, biblioteca, transporte — tudo em um só lugar. A produtividade da equipe melhorou enormemente.",
        industry: "Ensino Superior",
        solution: "ERP Acadêmico Completo",
      },
      "future-group": {
        quote: "O ERP de cursinhos da EduErpee gerencia todo o ciclo de vida dos nossos alunos — da matrícula ao acompanhamento de desempenho — tudo automatizado agora.",
        industry: "Cursinhos Preparatórios",
        solution: "ERP Completo para Cursinhos",
      },
    },
    team: {
      "sushil-jaiswal": { role: "CEO e CTO", bio: "Lidera a visão, a estratégia e a inovação tecnológica da EduErpee, supervisionando as operações de negócios e o desenvolvimento de tecnologia." },
      "priya-kumari": { role: "Diretora de Recursos Humanos", bio: "Lidera o planejamento de RH, a aquisição de talentos e a formação de equipes, impulsionando a excelência operacional e o crescimento da EduErpee." },
      "uday-shankar-pandey": {
        role: "Diretor de Marketing (CMO)",
        bio: "Supervisiona o marketing digital, o branding, a promoção de produtos e a pesquisa de mercado, trabalhando em estreita colaboração com as equipes de vendas e produto para impulsionar o crescimento.",
      },
      "mridu-pandey": { role: "Gerente de Desenvolvimento de Negócios", bio: "Faz a ponte entre desafios de negócios e soluções tecnológicas, compreendendo os requisitos dos clientes e as tendências de mercado." },
      "dharmendra-singh": { role: "Gerente de Relacionamento com o Cliente", bio: "Atua como elo entre clientes e equipes técnicas, garantindo comunicação fluida e entrega pontual." },
      "anil-jaiswal": {
        role: "Gerente de Entrega de Operações",
        bio: "Garante a execução perfeita dos projetos de TI, alinhando a estratégia operacional às expectativas do cliente, desde a alocação de recursos até a entrega.",
      },
    },
    trustStats: {
      "0": { label: "Clientes Satisfeitos" },
      "1": { label: "Anos de Trajetória" },
      "2": { label: "Produtos Prontos" },
      "3": { label: "Suporte 24/7" },
      "4": { label: "Em Todos os Fusos Horários" },
    },
    whyChooseUs: {
      "0": { title: "Acessível Sem Cortar Qualidade", description: "Software de nível empresarial a preços que fazem sentido para PMEs, escolas e hospitais — sem recursos desnecessários, apenas o essencial." },
      "1": { title: "Feito para o Mercado Indiano, em Conformidade com o GST", description: "Interface em hindi e inglês, faturamento com GST, suporte a pagamentos via UPI e conformidade local integrada desde o primeiro dia." },
      "2": {
        title: "Implantação Rápida — Em Operação em Dias, Não em Meses",
        description: "A maioria dos clientes entra em operação em poucos dias. Cuidamos da configuração, migração de dados, treinamento e integração.",
      },
      "3": { title: "Escritórios Locais, Suporte Presencial Real", description: "Filiais em Azamgarh e Greater Noida — quando é necessário suporte presencial, a equipe vai até você." },
    },
  },
};
