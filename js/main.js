(function(){
  const translations = {
    en: {
      metaTitleHome: 'Vault — Your intelligent memory',
      metaDescriptionHome: 'Vault saves links, files, audio and notes. It organizes them with AI into smart or custom categories so you can search, read and remember better.',
      metaTitleSupport: 'Support — Vault',
      metaDescriptionSupport: 'Vault support. Contact: vaultop@icloud.com',
      brandSubtitle: 'Your intelligent memory',
      navCapture: 'Capture',
      navLibrary: 'Library',
      navAI: 'Vault AI',
      navSupport: 'Support',
      navSoon: 'Coming soon',
      heroBadge: 'Vault AI connected to your vault',
      heroTitle: 'Your intelligent memory for everything you save online.',
      heroLead: 'Save links, files, audio and notes. Vault organizes, summarizes, translates and compares them with your categories so you can find what matters when you need it.',
      appStoreSoon: 'Coming soon on the App Store',
      seeHow: 'See how it works',
      statWays: 'ways to save',
      statAI: 'sorts and compares',
      statCategories: 'custom categories',
      phoneSubtitle: 'Capture and save in seconds',
      phoneCreate: 'Create/Save',
      tabLink: 'Link',
      tabFile: 'File',
      tabText: 'Text',
      tabAudio: 'Audio',
      inputLink: 'Paste a link here to save',
      saveButton: 'Save',
      noteType: 'Reading',
      noteTitle: 'Salmon with green purée for a special dinner',
      ingredients: 'Ingredients',
      ingredient1: '1 large onion',
      ingredient2: '70 g butter',
      ingredient3: '2 garlic cloves',
      customCategory: 'Custom category',
      myPhrases: 'My Quotes',
      floatingDesc: 'AI compares what you save with your description: life quotes, lessons and messages you want to remember.',
      captureKicker: 'Capture in seconds',
      captureTitle: 'Everything goes into Vault without friction.',
      captureDesc: 'Share, paste, upload or dictate. Vault saves first and processes later so you never lose an idea, recipe, video or document.',
      linksTitle: 'Links',
      linksDesc: 'Save online content before it gets lost between tabs.',
      filesTitle: 'Files',
      filesDesc: 'PDFs, images and documents ready for reading and search.',
      textTitle: 'Text',
      textDesc: 'Quick notes, ideas, quotes and tasks with clean structure.',
      audioTitle: 'Audio',
      audioDesc: 'Turn voice and long audio into searchable text.',
      libraryKicker: 'Smart library',
      libraryTitle: 'Create categories your way. Vault does the rest.',
      libraryDesc: 'Besides the general categories, you can create custom categories with a description. AI compares everything you save against those descriptions and decides where it fits best.',
      examplePhrasesDesc: 'Anything related to life quotes, lessons and important messages.',
      exampleBetter: 'Better living',
      exampleBetterDesc: 'Discipline, wellness, health and mindset.',
      exampleMixology: 'Mixology',
      exampleMixologyDesc: 'Cocktails, drinks, preparation and pairings.',
      boardCustomDesc: 'Write a description and Vault uses it as criteria to classify new saves.',
      boardPhrasesDesc: 'Life quotes and lessons.',
      boardBetterDesc: 'Discipline and health.',
      boardMixologyDesc: 'Drinks and recipes.',
      boardFinance: 'Finance',
      boardFinanceDesc: 'Money and business.',
      aiTitle: 'Ask your own vault.',
      aiDesc: 'Vault searches your texts, understands your categories and answers with the context you already saved.',
      qSalmon: 'What recipes do I have with salmon?',
      qPhrases: 'What is in my My Quotes category?',
      qBetter: 'Why was this classified as Better living?',
      chatIntro: 'Ask me something about what you have saved.',
      chatUserSalmon: 'What recipes do I have with salmon?',
      chatAnswerSalmon: 'I found a salmon with green purée recipe and another saved note about crispy rice with salmon. I can open them, summarize them or save a new conclusion.',
      readKicker: 'Read better',
      readTitle: 'Summary, translation and original in one place.',
      readDesc: 'When you open a note, Vault lets you switch between AI, summary and original text. You can also translate, copy, share and return to the source.',
      translate: 'Translate',
      viewOriginal: 'View original',
      share: 'Share',
      summary: 'Summary',
      original: 'Original',
      ctaTitle: 'Coming soon on the App Store.',
      ctaDesc: 'Vault is built to save what matters before the internet takes it away: links, notes, audio and files, organized with AI into general categories or the ones you create yourself.',
      footerSupport: 'Support',
      supportKicker: 'Support',
      supportTitle: 'We are here to help.',
      supportDesc: 'For support, account questions, privacy, issues saving content or any feedback about Vault, email us here.'
    }
  };

  const preferred = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
  const lang = preferred.toLowerCase().startsWith('en') ? 'en' : 'es';
  document.documentElement.lang = lang;

  if (lang === 'en') {
    const dictionary = translations.en;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (dictionary[key]) node.textContent = dictionary[key];
    });

    const titleKey = document.body.dataset.titleKey;
    const descriptionKey = document.body.dataset.descriptionKey;
    if (titleKey && dictionary[titleKey]) document.title = dictionary[titleKey];
    const description = document.querySelector('meta[name="description"]');
    if (descriptionKey && description && dictionary[descriptionKey]) description.setAttribute('content', dictionary[descriptionKey]);
  }

  const yearNode=document.getElementById('year');
  if(yearNode) yearNode.textContent=new Date().getFullYear();
})();
