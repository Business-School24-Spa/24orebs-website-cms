module.exports = function (migration) {
  const hero = migration
    .createContentType("hero")
    .name("HP Hero")
    .description("")
    .displayField("title");

  hero
    .createField("title")
    .name("Titolo principale")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          max: 255,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  hero
    .createField("brushedTitle")
    .name("Titolo evidenziato")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  hero
    .createField("order")
    .name("Ordinamento")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  hero
    .createField("imageFullWidth")
    .name("Stile immagine di sfondo")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  hero
    .createField("style")
    .name("Stile slide")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  hero
    .createField("image")
    .name("Immagine di sfondo")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  hero
    .createField("media")
    .name("Video di sfondo e Trailer")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  hero
    .createField("viewVideoButton")
    .name('Bottone "Guarda il video"')
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .defaultValue({
      "it-IT": false,
    })
    .disabled(false)
    .omitted(false);

  hero
    .createField("caption")
    .name("Contenuto")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: [],
        message: "Marks are not allowed",
      },
      {
        enabledNodeTypes: [],
        message: "Nodes are not allowed",
      },
      {
        nodes: {
          "entry-hyperlink": [
            {
              size: {
                max: 300,
              },

              message: null,
            },
          ],
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  hero
    .createField("ctaButton")
    .name("Bottone CTA")
    .type("Object")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  hero.changeFieldControl("title", "builtin", "singleLine", {
    helpText:
      'Titolo visualizzato sulla slide. Per mantenere una visualizzazione ordinata si consiglia di NON superare i 25 caratteri o i 15 caratteri quando si utilizza anche "Titolo evidenziato".',
  });

  hero.changeFieldControl("brushedTitle", "builtin", "singleLine", {
    helpText: "Porzione aggiuntiva del titolo evidenziata.",
  });

  hero.changeFieldControl("order", "builtin", "numberEditor", {
    helpText:
      "Numero che indica la posizione nella homepage, le slide saranno ordinate per questo valore in ordine crescente",
  });

  hero.changeFieldControl("imageFullWidth", "builtin", "boolean", {
    trueLabel:
      "Immagine di sfondo per tutta la dimensione della slide (utilizzare un immagine di sfondo di almeno 1440x600 pixel o più mantenendo costante il rapporto di aspetto)",
    falseLabel:
      "Immagine di sfondo sulla metà destra della slide (utilizzare un immagine di sfondo di almeno 730x600 pixel o più mantenendo costante il rapporto di aspetto)",
  });

  hero.changeFieldControl("style", "extension", "3MGVgPVfXLAT6URi55k65Y", {});

  hero.changeFieldControl("image", "builtin", "assetLinkEditor", {
    helpText:
      "Caricare un immagine della qualità richiesta secondo la scelta dello stile slide. Utilizzare preferibilmente immagini .jpg o .png ottimizzate per il Web.",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  hero.changeFieldControl("media", "builtin", "assetLinkEditor", {
    helpText:
      "Caricare il video da utilizzare come sfondo. In caso di utilizzo di questa funzionalità l'immagine di sfondo verrà visualizzata solo per i sistemi che non supportano video in autoplay",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  hero.changeFieldControl("viewVideoButton", "builtin", "boolean", {
    trueLabel: 'Si, voglio che appaia il tasto "Guarda il video"',
    falseLabel: 'No, non voglio che appaia il tasto "Guarda il video"',
  });

  hero.changeFieldControl("caption", "builtin", "richTextEditor", {
    helpText:
      "Testo visualizzato sulla slide. Non è consentito l'utilizzo di stili (grassetti, corsivi, ecc). per mantenere una visualizzazione ordinata si consiglia di NON superare i 100 caratteri spazi compresi. Sul sito web gli a-capo sono gestiti automaticamente.",
  });

  hero.changeFieldControl(
    "ctaButton",
    "extension",
    "7iH6VsGofjeHkzU4Y1b4uS",
    {}
  );
  const lpTemplate31 = migration
    .createContentType("lpTemplate3_1")
    .name("Selezione di Master/Corsi da Filtri")
    .description("Master/Corsi o Iniziative LP")
    .displayField("internalCodeOrDescription");

  lpTemplate31
    .createField("courseCategoryFilter")
    .name("Filtro: Tematiche")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: [
            "Marketing, Comunicazione, Digital e Social media",
            "Gestione di Impresa, Export e Internazionalizzazione",
            "HR, Lavoro e Sviluppo Manageriale",
            "Amministrazione, finanza e Controllo",
            "Lusso e Moda",
            "Ambiente Energia e P.A.",
            "Sanità, Pharma e Biomed",
            "Arte, cinema e Design",
            "Diritto e fisco",
            "Food, Beverage e Turismo",
            "Sport",
            "Vendite e Retail",
          ],
        },
      ],
    });

  lpTemplate31
    .createField("courseTypeFilter")
    .name("Filtro: Tipologia")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: [
            "Master Full Time con Stage",
            "Master Part Time",
            "Master Executive",
            "Corsi Post Diploma con Stage",
            "Corsi Intensivi",
            "Corsi Part Time",
            "Corsi On Demand",
          ],
        },
      ],
    });

  lpTemplate31
    .createField("lessonModeFilter")
    .name("Filtro: Fruizione")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: [
            "Live Streaming",
            "Live Streaming/Milano",
            "Live Streaming/Roma",
            "On Demand",
            "Live Streaming + On Demand",
            "Live Streaming/Milano e Roma",
          ],
        },
      ],
    });

  lpTemplate31
    .createField("minPriceFilter")
    .name("Filtro: Prezzo minimo")
    .type("Integer")
    .localized(false)
    .required(false)
    .validations([
      {
        range: {
          min: 0,
          max: 30000,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate31
    .createField("maxPriceFilter")
    .name("Filtro: Prezzo massimo")
    .type("Integer")
    .localized(false)
    .required(false)
    .validations([
      {
        range: {
          min: 0,
          max: 30000,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate31
    .createField("durationFilter")
    .name("Filtro: Durata")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: ["9 Mesi", "12 Mesi", "24 Mesi"],
        },
      ],
    });

  lpTemplate31
    .createField("internalCodeOrDescription")
    .name("Codice o Descrizione interna")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate31.changeFieldControl(
    "courseCategoryFilter",
    "builtin",
    "checkbox",
    {}
  );
  lpTemplate31.changeFieldControl(
    "courseTypeFilter",
    "builtin",
    "checkbox",
    {}
  );
  lpTemplate31.changeFieldControl(
    "lessonModeFilter",
    "builtin",
    "checkbox",
    {}
  );

  lpTemplate31.changeFieldControl("minPriceFilter", "builtin", "numberEditor", {
    helpText: "Se non impostato, il valore del prezzo minimo è 0",
  });

  lpTemplate31.changeFieldControl("maxPriceFilter", "builtin", "numberEditor", {
    helpText: "Se non impostato, il valore del prezzo massimo è 30.000",
  });

  lpTemplate31.changeFieldControl("durationFilter", "builtin", "checkbox", {});

  lpTemplate31.changeFieldControl(
    "internalCodeOrDescription",
    "builtin",
    "singleLine",
    {
      helpText:
        "Questo valore non viene mai mostrato all’utente del sito, ma viene utilizzato solo in Contentful per semplificarne la ricerca",
    }
  );

  const news = migration
    .createContentType("news")
    .name("News")
    .description("")
    .displayField("title");
  news
    .createField("title")
    .name("Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  news
    .createField("publishedDate")
    .name("Data di pubblicazione")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  news
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  news
    .createField("newsVisibilities")
    .name("Visibilità della news")
    .type("Array")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "it-IT": ["Abilita la news sul sito"],
    })
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: ["Abilita la news sul sito", "Abilita la news su Forma24"],
        },
      ],
    });

  news
    .createField("intro")
    .name("Intro")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  news
    .createField("content")
    .name("Contenuto")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        message: "Only bold, italic, and underline marks are allowed",
        enabledMarks: ["bold", "italic", "underline"],
      },
      {
        message:
          "Only ordered list, unordered list, horizontal rule, quote, table, and link to Url nodes are allowed",
        enabledNodeTypes: [
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "hyperlink",
        ],
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  news
    .createField("tags")
    .name("Tags")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: [
            "Marketing, Comunicazione, Digital e Social Media",
            "Gestione di Impresa, Export e Internazionalizzazione",
            "HR, Lavoro e Sviluppo Manageriale",
            "Amministrazione, Finanza e Controllo",
            "Lusso e Moda",
            "Vendite e Retail",
            "Ambiente Energia e P.A.",
            "Sanità, Pharma e Biomed",
            "Arte, Cinema e Design",
            "Diritto e Fisco",
            "Food, Beverage e Turismo",
            "Sport",
            "Brand",
            "Formazione",
          ],
        },
      ],
    });

  news
    .createField("author")
    .name("Autore")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["author"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  news
    .createField("heroImage")
    .name("Immagine hero")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  news
    .createField("thumbnailImage")
    .name("Immagine anteprima")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  news
    .createField("metaTagSocialImage")
    .name("Meta tag: Immagine social")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  news
    .createField("metaTagSocialTitle")
    .name("Meta tag: Titolo social")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  news
    .createField("metaTagSocialDescription")
    .name("Meta tag: Descrizione social")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 160,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  news.changeFieldControl("title", "builtin", "singleLine", {});

  news.changeFieldControl("publishedDate", "builtin", "datePicker", {
    ampm: "24",
    format: "dateonly",
  });

  news.changeFieldControl("slug", "extension", "1lvAwIZjsGLBjU2MWnlocQ", {
    pattern: "[field:title]-[field:publishedDate]",
    readonly: false,
    separator: " -",
    lockWhenPublished: true,
  });

  news.changeFieldControl("newsVisibilities", "builtin", "checkbox", {});
  news.changeFieldControl("intro", "builtin", "singleLine", {});
  news.changeFieldControl("content", "builtin", "richTextEditor", {});
  news.changeFieldControl("tags", "builtin", "checkbox", {});

  news.changeFieldControl("author", "builtin", "entryLinkEditor", {
    helpText: "L'autore è utilizzato solo per le news pubblicate su Forma24",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  news.changeFieldControl("heroImage", "builtin", "assetLinkEditor", {});
  news.changeFieldControl("thumbnailImage", "builtin", "assetLinkEditor", {});

  news.changeFieldControl("metaTagSocialImage", "builtin", "assetLinkEditor", {
    helpText:
      'Immagine social, se non impostata verrà utilizzata "Immagine anteprima".',
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  news.changeFieldControl("metaTagSocialTitle", "builtin", "singleLine", {
    helpText:
      'Titolo condivisione Iniziativa, se non impostato verrà utilizzato "Titolo".',
  });

  news.changeFieldControl(
    "metaTagSocialDescription",
    "builtin",
    "multipleLine",
    {
      helpText:
        "Testo descrittivo condivisione Iniziativa, se non impostato rimarrà vuoto o non utilizzato.",
    }
  );

  const author = migration
    .createContentType("author")
    .name("Autore")
    .description("")
    .displayField("publicName");
  author
    .createField("publicName")
    .name("Nome pubblico")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  author
    .createField("publicProfileLink")
    .name("Link profilo pubblico")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  author
    .createField("forma24Name")
    .name("Nome interno alla piattaforma Forma24")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  author
    .createField("forma24ProfileLink")
    .name("Link profilo interno Forma24")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  author.changeFieldControl("publicName", "builtin", "singleLine", {});

  author.changeFieldControl("publicProfileLink", "builtin", "urlEditor", {
    helpText: "Es: Linkedin",
  });

  author.changeFieldControl("forma24Name", "builtin", "singleLine", {});
  author.changeFieldControl("forma24ProfileLink", "builtin", "urlEditor", {});
  const lpTemplate4 = migration
    .createContentType("lpTemplate4")
    .name("Native LP")
    .description("")
    .displayField("bannerTitle");
  lpTemplate4
    .createField("bannerLabel")
    .name("Etichetta banner")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("bannerTitle")
    .name("Titolo banner")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("bannerDesktopImage")
    .name("Immagine banner desktop")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  lpTemplate4
    .createField("bannerMobileImage")
    .name("Immagine banner mobile")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  lpTemplate4
    .createField("content")
    .name("Contenuto sotto al banner")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          max: 1500,
        },
      },
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "hyperlink",
        ],

        message:
          "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, and link to Url nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate4
    .createField("firstBoxTitle")
    .name("Primo box: Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("firstBoxFirstSlugCourse")
    .name("Primo box: Slug primo corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("firstBoxSecondCourseSlug")
    .name("Primo box: Slug secondo corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("firstBoxThirdSlugCourse")
    .name("Primo box: Slug terzo corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate4
    .createField("secondBoxContent")
    .name("Secondo box: Contenuto")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline"],
        message: "Only bold, italic, and underline marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "hyperlink",
        ],

        message:
          "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, and link to Url nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate4
    .createField("readMoreBoxContents")
    .name("Leggi di più box")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 3,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["landingPages"],
        },
      ],

      linkType: "Entry",
    });

  lpTemplate4
    .createField("promoBannerLabel")
    .name("Banner Promo: Etichetta")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("promoBannerTitle")
    .name("Banner Promo: Titolo")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("promoBannerContent")
    .name("Banner Promo: Contenuto")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("promoBannerCTA")
    .name("Banner Promo: CTA")
    .type("Object")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate4
    .createField("metaTagDescription")
    .name("Meta tag: Description")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: [],
        message: "Marks are not allowed",
      },
      {
        enabledNodeTypes: [],
        message: "Nodes are not allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate4
    .createField("metaTagKeywords")
    .name("Meta tag: Keywords")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("metaTagSocialTitle")
    .name("Meta tag: Social title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("metaTagSocialDescription")
    .name("Meta tag: Social description")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4
    .createField("metaTagSocialImage")
    .name("Meta tag: Social image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  lpTemplate4
    .createField("gtmDataLayerPageCategory")
    .name("GTM DataLayer: pageCategory")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate4.changeFieldControl("bannerLabel", "builtin", "singleLine", {});
  lpTemplate4.changeFieldControl("bannerTitle", "builtin", "singleLine", {});
  lpTemplate4.changeFieldControl(
    "bannerDesktopImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate4.changeFieldControl(
    "bannerMobileImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate4.changeFieldControl("content", "builtin", "richTextEditor", {});
  lpTemplate4.changeFieldControl("firstBoxTitle", "builtin", "singleLine", {});
  lpTemplate4.changeFieldControl(
    "firstBoxFirstSlugCourse",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate4.changeFieldControl(
    "firstBoxSecondCourseSlug",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate4.changeFieldControl(
    "firstBoxThirdSlugCourse",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate4.changeFieldControl(
    "secondBoxContent",
    "builtin",
    "richTextEditor",
    {}
  );
  lpTemplate4.changeFieldControl(
    "readMoreBoxContents",
    "builtin",
    "entryCardsEditor",
    {}
  );
  lpTemplate4.changeFieldControl(
    "promoBannerLabel",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate4.changeFieldControl(
    "promoBannerTitle",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate4.changeFieldControl(
    "promoBannerContent",
    "builtin",
    "multipleLine",
    {}
  );
  lpTemplate4.changeFieldControl(
    "promoBannerCTA",
    "extension",
    "7iH6VsGofjeHkzU4Y1b4uS",
    {}
  );
  lpTemplate4.changeFieldControl(
    "metaTagDescription",
    "builtin",
    "richTextEditor",
    {}
  );
  lpTemplate4.changeFieldControl(
    "metaTagKeywords",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate4.changeFieldControl(
    "metaTagSocialTitle",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate4.changeFieldControl(
    "metaTagSocialDescription",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate4.changeFieldControl(
    "metaTagSocialImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate4.changeFieldControl(
    "gtmDataLayerPageCategory",
    "builtin",
    "singleLine",
    {}
  );
  const landingPages = migration
    .createContentType("landingPages")
    .name("Landing pages")
    .description("")
    .displayField("title");

  landingPages
    .createField("title")
    .name("Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  landingPages
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  landingPages
    .createField("template")
    .name("Template")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: [
          "lpTemplate1",
          "lpTemplate3",
          "lpTemplate4",
          "lpTemplate2",
        ],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  landingPages
    .createField("note")
    .name("Note")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  landingPages.changeFieldControl("title", "builtin", "singleLine", {});

  landingPages.changeFieldControl(
    "slug",
    "extension",
    "1lvAwIZjsGLBjU2MWnlocQ",
    {
      pattern: "[field:title]",
      readonly: false,
      separator: " -",
      trackingFieldId: "title",
      lockWhenPublished: true,
    }
  );

  landingPages.changeFieldControl("template", "builtin", "entryLinkEditor", {
    showLinkEntityAction: false,
    showCreateEntityAction: true,
  });

  landingPages.changeFieldControl("note", "builtin", "multipleLine", {
    helpText:
      "Questo campo viene utilizzato nella lista delle Landing pages in Contentful per semplificarne la ricerca",
  });

  const lpTemplate33 = migration
    .createContentType("lpTemplate3_3")
    .name("Selezione di Master/Corsi da Codici Commessa")
    .description("Master/Corsi o Iniziative LP")
    .displayField("internalCodeOrDescription");

  lpTemplate33
    .createField("productCodes")
    .name("Codici commessa Master/Corsi")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          regexp: {
            pattern: "^([A-Z]{2}\\d{8})$",
            flags: null,
          },
        },
      ],
    });

  lpTemplate33
    .createField("internalCodeOrDescription")
    .name("Codice o Descrizione interna")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate33.changeFieldControl("productCodes", "builtin", "tagEditor", {
    helpText: "Inserisci il codice commessa e clicca il tasto invio",
  });

  lpTemplate33.changeFieldControl(
    "internalCodeOrDescription",
    "builtin",
    "singleLine",
    {
      helpText:
        "Questo valore non viene mai mostrato all’utente del sito, ma viene utilizzato solo in Contentful per semplificarne la ricerca",
    }
  );

  const lpTemplate3 = migration
    .createContentType("lpTemplate3")
    .name("Master/Corsi o Iniziative LP")
    .description("")
    .displayField("bannerTitle");
  lpTemplate3
    .createField("bannerLabel")
    .name("Etichetta banner")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate3
    .createField("bannerTitle")
    .name("Titolo banner")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate3
    .createField("bannerDesktopImage")
    .name("Immagine banner desktop")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  lpTemplate3
    .createField("bannerMobileImage")
    .name("Immagine banner mobile")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  lpTemplate3
    .createField("content")
    .name("Contenuto sotto al banner")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline"],
        message: "Only bold, italic, and underline marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
        ],
        message:
          "Only heading 2, heading 3, heading 4, heading 5, and heading 6 nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate3
    .createField("products")
    .name("Contenuti da mostrare")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["lpTemplate3_2", "lpTemplate3_3", "lpTemplate3_1"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  lpTemplate3
    .createField("metaTagDescription")
    .name("Meta tag: Description")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: [],
        message: "Marks are not allowed",
      },
      {
        enabledNodeTypes: [],
        message: "Nodes are not allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate3
    .createField("metaTagKeywords")
    .name("Meta tag: Keywords")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate3
    .createField("metaTagSocialTitle")
    .name("Meta tag: Social title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate3
    .createField("metaTagSocialDescription")
    .name("Meta tag: Social description")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate3
    .createField("metaTagSocialImage")
    .name("Meta tag: Social image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  lpTemplate3
    .createField("gtmDataLayerPageCategory")
    .name("GTM DataLayer: pageCategory")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate3.changeFieldControl("bannerLabel", "builtin", "singleLine", {});
  lpTemplate3.changeFieldControl("bannerTitle", "builtin", "singleLine", {});
  lpTemplate3.changeFieldControl(
    "bannerDesktopImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate3.changeFieldControl(
    "bannerMobileImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate3.changeFieldControl("content", "builtin", "richTextEditor", {});

  lpTemplate3.changeFieldControl("products", "builtin", "entryLinkEditor", {
    showLinkEntityAction: false,
    showCreateEntityAction: true,
  });

  lpTemplate3.changeFieldControl(
    "metaTagDescription",
    "builtin",
    "richTextEditor",
    {}
  );
  lpTemplate3.changeFieldControl(
    "metaTagKeywords",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate3.changeFieldControl(
    "metaTagSocialTitle",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate3.changeFieldControl(
    "metaTagSocialDescription",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate3.changeFieldControl(
    "metaTagSocialImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate3.changeFieldControl(
    "gtmDataLayerPageCategory",
    "builtin",
    "singleLine",
    {}
  );
  const lpTemplate32 = migration
    .createContentType("lpTemplate3_2")
    .name("Selezione di Iniziative")
    .description("Master/Corsi o Iniziative LP")
    .displayField("internalCodeOrDescription");

  lpTemplate32
    .createField("initiatives")
    .name("Iniziative")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["initiatives"],
        },
      ],

      linkType: "Entry",
    });

  lpTemplate32
    .createField("internalCodeOrDescription")
    .name("Codice o Descrizione interna")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate32.changeFieldControl(
    "initiatives",
    "builtin",
    "entryLinksEditor",
    {
      bulkEditing: false,
      showLinkEntityAction: true,
      showCreateEntityAction: false,
    }
  );

  lpTemplate32.changeFieldControl(
    "internalCodeOrDescription",
    "builtin",
    "singleLine",
    {
      helpText:
        "Questo valore non viene mai mostrato all’utente del sito, ma viene utilizzato solo in Contentful per semplificarne la ricerca",
    }
  );

  const settings = migration
    .createContentType("settings")
    .name("Settings")
    .description("")
    .displayField("title");

  settings
    .createField("title")
    .name("Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("hpPromoBox")
    .name("Box Promo in Homepage sotto all'Hero")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["hpPromoBoxes"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  settings
    .createField("refsHPSeguiIlTrend")
    .name("Codici commessa per Homepage: Segui il Trend")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refPopularInSearch")
    .name("Codici commessa per Homepage: Popolari in ricerca")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("hpReviews")
    .name("Reviews in Homepage")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 2,
          min: 0,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["reviews"],
        },
      ],

      linkType: "Entry",
    });

  settings
    .createField("refBestSellerTem01")
    .name("Best Seller per Tematica: Marketing...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem01")
    .name("Offerte in Evidenza per Tematica: Marketing...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem02")
    .name("Best Seller per Tematica: Gestione...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem02")
    .name("Offerte in Evidenza per Tematica: Gestione...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem03")
    .name("Best Seller per Tematica: HR, Lavoro...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem03")
    .name("Offerte in Evidenza per Tematica: HR, Lavoro...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem04")
    .name("Best Seller per Tematica: Amministrazione..")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem04")
    .name("Offerte in Evidenza per Tematica: Amministrazi..")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem05")
    .name("Best Seller per Tematica: Lusso..")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem05")
    .name("Offerte in Evidenza per Tematica: Lusso..")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem06")
    .name("Best Seller per Tematica: Vendita..")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem06")
    .name("Offerte in Evidenza per Tematica: Vendita..")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem07")
    .name("Best Seller per Tematica: Ambiente...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem07")
    .name("Offerte in Evidenza per Tematica: Ambiente...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem08")
    .name("Best Seller per Tematica: Sanità...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem08")
    .name("Offerte in Evidenza per Tematica: Sanità...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem09")
    .name("Best Seller per Tematica: Arte...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem09")
    .name("Offerte in Evidenza per Tematica: Arte...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem10")
    .name("Best Seller per Tematica: Diritto...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem10")
    .name("Offerte in Evidenza per Tematica: Diritto...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem11")
    .name("Best Seller per Tematica: Food...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem11")
    .name("Offerte in Evidenza per Tematica: Food...")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerTem12")
    .name("Best Seller per Tematica: Sport")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersTem12")
    .name("Offerte in Evidenza per Tematica: Sport")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerCourseType01")
    .name("Best Seller Master Full Time con Stage")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersCourseType01")
    .name("Offerte in Evidenza Master Full Time con Stage")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },

        message:
          "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Full Time con Stage nella sezione Offerte in Evidenza",
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerCourseType02")
    .name("Best Seller Master Part Time")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersCourseType02")
    .name("Offerte in Evidenza Master Part Time")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerCourseType03")
    .name("Best Seller Master Online (OnDemand)")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersCourseType03")
    .name("Offerte in Evidenza Master Online (OnDemand)")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerCourseType04")
    .name("Best Seller Master Executive")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersCourseType04")
    .name("Offerte in Evidenza Master Executive")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerCourseType05")
    .name("Best Seller Master MBA")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersCourseType05")
    .name("Offerte in Evidenza Master MBA")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerCourseType06")
    .name("Best Seller Corsi Part Time")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersCourseType06")
    .name("Offerte in Evidenza Corsi Part Time")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerCourseType07")
    .name("Best Seller Corsi Online (OnDemand)")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersCourseType07")
    .name("Offerte in Evidenza Corsi Online (OnDemand)")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerCourseType08")
    .name("Best Seller Corsi Full Time con Stage")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersCourseType08")
    .name("Offerte in Evidenza Corsi Full Time con Stage")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refBestSellerCourseType09")
    .name("Best Seller Corsi Intensivi")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings
    .createField("refFeaturedOffersCourseType09")
    .name("Offerte in Evidenza Corsi Intensivi")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: "^([A-Z]{2}\\d{8},){0,2}([A-Z]{2}\\d{8})$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  settings.changeFieldControl("title", "builtin", "singleLine", {});

  settings.changeFieldControl("hpPromoBox", "builtin", "entryCardEditor", {
    helpText:
      "Se impostato si attiva il box promo blu in homepage sotto all'header",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  settings.changeFieldControl("refsHPSeguiIlTrend", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Homepage alla sezione Segui il Trend.",
  });

  settings.changeFieldControl("refPopularInSearch", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella ricerca alla sezione Popolari.",
  });

  settings.changeFieldControl("hpReviews", "builtin", "entryCardsEditor", {
    helpText:
      "Selezionare 2 recensioni da mostrare in Homepage nella sezione DICONO DI NOI",
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: false,
  });

  settings.changeFieldControl("refBestSellerTem01", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Marketing, Comunicazione, Digital e Social Media",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem01",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Marketing, Comunicazione, Digital e Social Media",
    }
  );

  settings.changeFieldControl("refBestSellerTem02", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Gestione di Impresa, Export e Internazionalizzazione",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem02",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Gestione di Impresa, Export e Internazionalizzazione",
    }
  );

  settings.changeFieldControl("refBestSellerTem03", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: HR, Lavoro e Sviluppo Manageriale",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem03",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: HR, Lavoro e Sviluppo Manageriale",
    }
  );

  settings.changeFieldControl("refBestSellerTem04", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Amministrazione, finanza e Controllo",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem04",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Amministrazione, finanza e Controllo",
    }
  );

  settings.changeFieldControl("refBestSellerTem05", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Lusso e Moda",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem05",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Lusso e Moda",
    }
  );

  settings.changeFieldControl("refBestSellerTem06", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Vendita e Retail",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem06",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Vendita e Retail",
    }
  );

  settings.changeFieldControl("refBestSellerTem07", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Ambiente Energia e P.A. ",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem07",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Ambiente Energia e P.A. ",
    }
  );

  settings.changeFieldControl("refBestSellerTem08", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Sanità, Pharma e Biomed",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem08",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Sanità, Pharma e Biomed",
    }
  );

  settings.changeFieldControl("refBestSellerTem09", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Arte, Cinema e Design",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem09",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Arte, Cinema e Design",
    }
  );

  settings.changeFieldControl("refBestSellerTem10", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Diritto e Fisco",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem10",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Diritto e Fisco",
    }
  );

  settings.changeFieldControl("refBestSellerTem11", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Food, Beverage e Turismo",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem11",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Food, Beverage e Turismo",
    }
  );

  settings.changeFieldControl("refBestSellerTem12", "builtin", "singleLine", {
    helpText:
      "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Best Seller in Tematica: Sport",
  });

  settings.changeFieldControl(
    "refFeaturedOffersTem12",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati nella pagina tematica: Codici commessa per sezione Offerte in Evidenza in Tematica: Sport",
    }
  );

  settings.changeFieldControl(
    "refBestSellerCourseType01",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Full Time con Stage nella sezione Best Seller",
    }
  );

  settings.changeFieldControl(
    "refFeaturedOffersCourseType01",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Full Time con Stage nella sezione Offerte In Evidenza",
    }
  );

  settings.changeFieldControl(
    "refBestSellerCourseType02",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Part Time nella sezione Best Seller",
    }
  );

  settings.changeFieldControl(
    "refFeaturedOffersCourseType02",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Part Time nella sezione Offerte in Evidenza",
    }
  );

  settings.changeFieldControl(
    "refBestSellerCourseType03",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Online (OnDemand) nella sezione Best Seller",
    }
  );

  settings.changeFieldControl(
    "refFeaturedOffersCourseType03",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Online (OnDemand) nella sezione Offerte in Evidenza",
    }
  );

  settings.changeFieldControl(
    "refBestSellerCourseType04",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Executive nella sezione Best Seller",
    }
  );

  settings.changeFieldControl(
    "refFeaturedOffersCourseType04",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Executive nella sezione Offerte in Evidenza",
    }
  );

  settings.changeFieldControl(
    "refBestSellerCourseType05",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti non sono ancora collegati ad una pagina del sito.",
    }
  );

  settings.changeFieldControl(
    "refFeaturedOffersCourseType05",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti non sono ancora collegati ad una pagina del sito.",
    }
  );

  settings.changeFieldControl(
    "refBestSellerCourseType06",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Corsi Part Time nella sezione Best Seller",
    }
  );

  settings.changeFieldControl(
    "refFeaturedOffersCourseType06",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Corsi Part Time nella sezione Offerte in Evidenza",
    }
  );

  settings.changeFieldControl(
    "refBestSellerCourseType07",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Corsi Online (OnDemand) nella sezione Best Seller",
    }
  );

  settings.changeFieldControl(
    "refFeaturedOffersCourseType07",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Corsi Online (OnDemand) nella sezione Offerte in Evidenza",
    }
  );

  settings.changeFieldControl(
    "refBestSellerCourseType08",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Corsi Full Time con Stage nella sezione Best Seller",
    }
  );

  settings.changeFieldControl(
    "refFeaturedOffersCourseType08",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Corsi Full Time con Stage nella sezione Offerte in Evidenza",
    }
  );

  settings.changeFieldControl(
    "refBestSellerCourseType09",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Corsi Intensivi nella sezione Best Seller",
    }
  );

  settings.changeFieldControl(
    "refFeaturedOffersCourseType09",
    "builtin",
    "singleLine",
    {
      helpText:
        "Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Corsi Intensivi nella sezione Offerte in Evidenza",
    }
  );

  const hpPromoBoxes = migration
    .createContentType("hpPromoBoxes")
    .name("HP Promo Boxes")
    .description("")
    .displayField("title");
  hpPromoBoxes
    .createField("label")
    .name("Etichetta")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  hpPromoBoxes
    .createField("title")
    .name("Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  hpPromoBoxes
    .createField("content")
    .name("Contenuto")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  hpPromoBoxes
    .createField("cta")
    .name("CTA")
    .type("Object")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  hpPromoBoxes.changeFieldControl("label", "builtin", "singleLine", {});
  hpPromoBoxes.changeFieldControl("title", "builtin", "singleLine", {});
  hpPromoBoxes.changeFieldControl("content", "builtin", "multipleLine", {});
  hpPromoBoxes.changeFieldControl(
    "cta",
    "extension",
    "7iH6VsGofjeHkzU4Y1b4uS",
    {}
  );
  const lpTemplate1 = migration
    .createContentType("lpTemplate1")
    .name("3+3 LP")
    .description("")
    .displayField("bannerTitle");

  lpTemplate1
    .createField("courseCategory")
    .name("Area tematica")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: [
          "Nessuna",
          "Marketing, Comunicazione, Digital e Social media",
          "Gestione di Impresa, Export e Internazionalizzazione",
          "HR, Lavoro e Sviluppo Manageriale",
          "Amministrazione, finanza e Controllo",
          "Lusso e Moda",
          "Vendite e Retail",
          "Ambiente Energia e P.A.",
          "Sanità, Pharma e Biomed",
          "Arte, Cinema e Design",
          "Diritto e Fisco",
          "Food, Beverage e Turismo",
          "Sport",
        ],
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate1
    .createField("bannerLabel")
    .name("Etichetta banner")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("bannerTitle")
    .name("Titolo banner")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate1
    .createField("bannerContent")
    .name("Contenuto banner")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline"],
        message: "Only bold, italic, and underline marks are allowed",
      },
      {
        enabledNodeTypes: [],
        message: "Nodes are not allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate1
    .createField("bannerDesktopImage")
    .name("Immagine banner desktop")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  lpTemplate1
    .createField("bannerMobileImage")
    .name("Immagine banner mobile")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  lpTemplate1
    .createField("content")
    .name("Contenuto sotto al banner")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to asset, and inline entry nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate1
    .createField("readMoreIsActive")
    .name('Abilitazione "Continua a leggere"')
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "it-IT": true,
    })
    .disabled(false)
    .omitted(false);

  lpTemplate1
    .createField("firstBoxBestSellerCourseCategory")
    .name("Primo box: Utilizzare Best seller area tematica?")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .defaultValue({
      "it-IT": false,
    })
    .disabled(false)
    .omitted(false);

  lpTemplate1
    .createField("firstBoxTitle")
    .name("Primo box: Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("firstBoxFirstSlugCourse")
    .name("Primo box: Slug primo corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("firstBoxSecondCourseSlug")
    .name("Primo box: Slug secondo corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("firstBoxThirdSlugCourse")
    .name("Primo box: Slug terzo corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("secondBoxTitle")
    .name("Secondo box: Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("secondBoxFirstSlugCourse")
    .name("Secondo box: Slug primo corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("secondBoxSecondSlugCourse")
    .name("Secondo box: Slug secondo corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("secondBoxThirdSlugCourse")
    .name("Secondo box: Slug terzo corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("secondBoxCta")
    .name("Secondo box: CTA")
    .type("Object")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("CTA")
    .name("CTA")
    .type("Object")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate1
    .createField("metaTagDescription")
    .name("Meta tag: Description")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: [],
        message: "Marks are not allowed",
      },
      {
        enabledNodeTypes: [],
        message: "Nodes are not allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate1
    .createField("metaTagKeywords")
    .name("Meta tag: Keywords")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("metaTagSocialTitle")
    .name("Meta tag: Social title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("metaTagSocialDescription")
    .name("Meta tag: Social description")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1
    .createField("metaTagSocialImage")
    .name("Meta tag: Social image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  lpTemplate1
    .createField("gtmDataLayerPageCategory")
    .name("GTM DataLayer: pageCategory")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate1.changeFieldControl("courseCategory", "builtin", "dropdown", {});
  lpTemplate1.changeFieldControl("bannerLabel", "builtin", "singleLine", {});
  lpTemplate1.changeFieldControl("bannerTitle", "builtin", "singleLine", {});
  lpTemplate1.changeFieldControl(
    "bannerContent",
    "builtin",
    "richTextEditor",
    {}
  );
  lpTemplate1.changeFieldControl(
    "bannerDesktopImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate1.changeFieldControl(
    "bannerMobileImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate1.changeFieldControl("content", "builtin", "richTextEditor", {});

  lpTemplate1.changeFieldControl("readMoreIsActive", "builtin", "boolean", {
    trueLabel:
      'Attiva espansione del "Contenuto sotto al banner" dalla terza riga con il tasto "CONTINUA A LEGGERE"',
    falseLabel:
      'Disattiva espansione e tasto "CONTINUA A LEGGERE", mantieni il "Contenuto sotto al banner" sempre visibile',
  });

  lpTemplate1.changeFieldControl(
    "firstBoxBestSellerCourseCategory",
    "extension",
    "boolean-conditional-field",
    {
      type: "boolean",
      field: "courseCategory",
      value: "Nessuna",
      operator: "==",
      hiddenField: false,
      disabledValue: "false",
    }
  );

  lpTemplate1.changeFieldControl("firstBoxTitle", "builtin", "singleLine", {});
  lpTemplate1.changeFieldControl(
    "firstBoxFirstSlugCourse",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate1.changeFieldControl(
    "firstBoxSecondCourseSlug",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate1.changeFieldControl(
    "firstBoxThirdSlugCourse",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate1.changeFieldControl("secondBoxTitle", "builtin", "singleLine", {});
  lpTemplate1.changeFieldControl(
    "secondBoxFirstSlugCourse",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate1.changeFieldControl(
    "secondBoxSecondSlugCourse",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate1.changeFieldControl(
    "secondBoxThirdSlugCourse",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate1.changeFieldControl(
    "secondBoxCta",
    "extension",
    "7iH6VsGofjeHkzU4Y1b4uS",
    {}
  );
  lpTemplate1.changeFieldControl(
    "CTA",
    "extension",
    "7iH6VsGofjeHkzU4Y1b4uS",
    {}
  );
  lpTemplate1.changeFieldControl(
    "metaTagDescription",
    "builtin",
    "richTextEditor",
    {}
  );
  lpTemplate1.changeFieldControl(
    "metaTagKeywords",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate1.changeFieldControl(
    "metaTagSocialTitle",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate1.changeFieldControl(
    "metaTagSocialDescription",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate1.changeFieldControl(
    "metaTagSocialImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate1.changeFieldControl(
    "gtmDataLayerPageCategory",
    "builtin",
    "singleLine",
    {}
  );
  const initiatives = migration
    .createContentType("initiatives")
    .name("Iniziative")
    .description("")
    .displayField("title");
  initiatives
    .createField("title")
    .name("Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  initiatives
    .createField("intro")
    .name("Intro")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  initiatives
    .createField("content")
    .name("Contenuto")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline"],
        message: "Only bold, italic, and underline marks are allowed",
      },
      {
        enabledNodeTypes: [
          "hr",
          "blockquote",
          "ordered-list",
          "unordered-list",
          "hyperlink",
        ],
        message:
          "Only horizontal rule, quote, ordered list, unordered list, and link to Url nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  initiatives
    .createField("date")
    .name("Data in cui si terrà l'evento")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  initiatives
    .createField("timeSlotType")
    .name("In che ore si terrà l'evento?")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        in: ["Intera giornata", "Fascia oraria"],
      },
    ])
    .disabled(false)
    .omitted(false);

  initiatives
    .createField("timeSlotFrom")
    .name("Ora di inizio - non compilare se intera giornata")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  initiatives
    .createField("timeSlotTo")
    .name("Ora di fine - non compilare se intera giornata")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  initiatives
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern: "^([a-z0-9-]+)$",
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  initiatives
    .createField("mode")
    .name("Modalità")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: ["Live Streaming", "Milano", "Roma", "Catania"],
      },
    ])
    .disabled(false)
    .omitted(false);

  initiatives
    .createField("type")
    .name("Tipologia")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: [
          "Open Lesson",
          "Open Day",
          "Selezioni",
          "Happy Hour 24",
          "Webinar",
        ],
      },
    ])
    .disabled(false)
    .omitted(false);

  initiatives
    .createField("heroImage")
    .name("Immagine hero")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  initiatives
    .createField("thumbnailImage")
    .name("Immagine anteprima")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  initiatives
    .createField("refInternalCode")
    .name("Codice interno")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  initiatives
    .createField("bookingConfig")
    .name("Configurazione Iscrizione evento")
    .type("Object")
    .localized(true)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  initiatives
    .createField("metaTagSocialImage")
    .name("Meta tag: Immagine social")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  initiatives
    .createField("metaTagSocialTitle")
    .name("Meta tag: Titolo social")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  initiatives
    .createField("metaTagSocialDescription")
    .name("Meta tag: Descrizione social")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 160,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  initiatives.changeFieldControl("title", "builtin", "singleLine", {});
  initiatives.changeFieldControl("intro", "builtin", "singleLine", {});
  initiatives.changeFieldControl("content", "builtin", "richTextEditor", {});

  initiatives.changeFieldControl("date", "builtin", "datePicker", {
    ampm: "24",
    format: "dateonly",
  });

  initiatives.changeFieldControl("timeSlotType", "builtin", "dropdown", {});

  initiatives.changeFieldControl(
    "timeSlotFrom",
    "extension",
    "79LLHMUeIvsITey8EzDqDq",
    {
      type: "time",
      field: "timeSlotType",
      value: "fascia oraria",
      operator: "==",
      hiddenField: true,
      disabledValue: "00:00",
    }
  );

  initiatives.changeFieldControl(
    "timeSlotTo",
    "extension",
    "79LLHMUeIvsITey8EzDqDq",
    {
      type: "time",
      field: "timeSlotType",
      value: "fascia oraria",
      operator: "==",
      hiddenField: true,
      disabledValue: "00:00",
    }
  );

  initiatives.changeFieldControl(
    "slug",
    "extension",
    "1lvAwIZjsGLBjU2MWnlocQ",
    {
      pattern: "[field:title]-[field:mode]-[field:date]",
      readonly: false,
      separator: " -",
      lockWhenPublished: true,
    }
  );

  initiatives.changeFieldControl("mode", "builtin", "dropdown", {});
  initiatives.changeFieldControl("type", "builtin", "dropdown", {});
  initiatives.changeFieldControl("heroImage", "builtin", "assetLinkEditor", {});
  initiatives.changeFieldControl(
    "thumbnailImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  initiatives.changeFieldControl(
    "refInternalCode",
    "builtin",
    "singleLine",
    {}
  );
  initiatives.changeFieldControl(
    "bookingConfig",
    "extension",
    "3t4oTN66XuaBwBoRlTKdvr",
    {}
  );

  initiatives.changeFieldControl(
    "metaTagSocialImage",
    "builtin",
    "assetLinkEditor",
    {
      helpText:
        'Immagine social, se non impostata verrà utilizzata "Immagine anteprima".',
      showLinkEntityAction: true,
      showCreateEntityAction: true,
    }
  );

  initiatives.changeFieldControl(
    "metaTagSocialTitle",
    "builtin",
    "singleLine",
    {
      helpText:
        'Titolo condivisione Iniziativa, se non impostato verrà utilizzato "Titolo".',
    }
  );

  initiatives.changeFieldControl(
    "metaTagSocialDescription",
    "builtin",
    "multipleLine",
    {
      helpText:
        "Testo descrittivo condivisione Iniziativa, se non impostato rimarrà vuoto o non utilizzato.",
    }
  );

  const lpTemplate2 = migration
    .createContentType("lpTemplate2")
    .name("Open Day-Event LP")
    .description("")
    .displayField("title");
  lpTemplate2
    .createField("title")
    .name("Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate2
    .createField("intro")
    .name("Intro")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate2
    .createField("content")
    .name("Contenuto")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline"],
        message: "Only bold, italic, and underline marks are allowed",
      },
      {
        enabledNodeTypes: [
          "hr",
          "blockquote",
          "ordered-list",
          "unordered-list",
          "hyperlink",
        ],
        message:
          "Only horizontal rule, quote, ordered list, unordered list, and link to Url nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate2
    .createField("date")
    .name("Data in cui si terrà l'evento")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate2
    .createField("timeSlotType")
    .name("In che ore si terrà l'evento?")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        in: ["Intera giornata", "Fascia oraria"],
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate2
    .createField("timeSlotFrom")
    .name("Ora di inizio - non compilare se intera giornata")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate2
    .createField("timeSlotTo")
    .name("Ora di fine - non compilare se intera giornata")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate2
    .createField("mode")
    .name("Modalità")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: ["Live Streaming", "Milano", "Roma", "Catania"],
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate2
    .createField("type")
    .name("Tipologia")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: [
          "Nessuna",
          "Open Lesson",
          "Open Day",
          "Selezioni",
          "Happy Hour 24",
          "Webinar",
        ],
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate2
    .createField("heroImage")
    .name("Immagine hero")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  lpTemplate2
    .createField("heroMobileImage")
    .name("Immagine hero mobile")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  lpTemplate2
    .createField("bookingConfig")
    .name("Configurazione Iscrizione evento")
    .type("Object")
    .localized(true)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  lpTemplate2
    .createField("metaTagDescription")
    .name("Meta tag: Description")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: [],
        message: "Marks are not allowed",
      },
      {
        enabledNodeTypes: [],
        message: "Nodes are not allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  lpTemplate2
    .createField("metaTagKeywords")
    .name("Meta tag: Keywords")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate2
    .createField("metaTagSocialTitle")
    .name("Meta tag: Social title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate2
    .createField("metaTagSocialDescription")
    .name("Meta tag: Social description")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate2
    .createField("metaTagSocialImage")
    .name("Meta tag: Social image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  lpTemplate2
    .createField("gtmDataLayerPageCategory")
    .name("GTM DataLayer: pageCategory")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  lpTemplate2.changeFieldControl("title", "builtin", "singleLine", {});
  lpTemplate2.changeFieldControl("intro", "builtin", "singleLine", {});
  lpTemplate2.changeFieldControl("content", "builtin", "richTextEditor", {});

  lpTemplate2.changeFieldControl("date", "builtin", "datePicker", {
    ampm: "24",
    format: "dateonly",
  });

  lpTemplate2.changeFieldControl("timeSlotType", "builtin", "dropdown", {});

  lpTemplate2.changeFieldControl(
    "timeSlotFrom",
    "extension",
    "79LLHMUeIvsITey8EzDqDq",
    {
      type: "time",
      field: "timeSlotType",
      value: "fascia oraria",
      operator: "==",
      hiddenField: true,
      disabledValue: "00:00",
    }
  );

  lpTemplate2.changeFieldControl(
    "timeSlotTo",
    "extension",
    "79LLHMUeIvsITey8EzDqDq",
    {
      type: "time",
      field: "timeSlotType",
      value: "fascia oraria",
      operator: "==",
      hiddenField: true,
      disabledValue: "00:00",
    }
  );

  lpTemplate2.changeFieldControl("mode", "builtin", "dropdown", {});

  lpTemplate2.changeFieldControl("type", "builtin", "dropdown", {
    helpText: "La tipologia scelta appare nell'hero della pagina.",
  });

  lpTemplate2.changeFieldControl("heroImage", "builtin", "assetLinkEditor", {});
  lpTemplate2.changeFieldControl(
    "heroMobileImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate2.changeFieldControl(
    "bookingConfig",
    "extension",
    "initiative-lp-booking-field",
    {}
  );
  lpTemplate2.changeFieldControl(
    "metaTagDescription",
    "builtin",
    "richTextEditor",
    {}
  );
  lpTemplate2.changeFieldControl(
    "metaTagKeywords",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate2.changeFieldControl(
    "metaTagSocialTitle",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate2.changeFieldControl(
    "metaTagSocialDescription",
    "builtin",
    "singleLine",
    {}
  );
  lpTemplate2.changeFieldControl(
    "metaTagSocialImage",
    "builtin",
    "assetLinkEditor",
    {}
  );
  lpTemplate2.changeFieldControl(
    "gtmDataLayerPageCategory",
    "builtin",
    "singleLine",
    {}
  );
  const bonusConfiguration = migration
    .createContentType("bonus-configuration")
    .name("Bonus configuration")
    .description("")
    .displayField("title");

  bonusConfiguration
    .createField("title")
    .name("Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterFullTimeConStagePrefix")
    .name("Master Full Time Con Stage: Prefisso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          min: 1,
          max: 5,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterFullTimeConStageDaysValidity")
    .name("Master Full Time Con Stage: Giorni di validità")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 60,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterFullTimeConStageValue")
    .name("Master Full Time Con Stage: Valore")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 30000,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterPartTimePrefix")
    .name("Master Part Time: Prefisso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          min: 1,
          max: 5,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterPartTimeDaysValidity")
    .name("Master Part Time: Giorni di validità")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 60,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterPartTimeValue")
    .name("Master Part Time: Valore")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 30000,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterExecutivePrefix")
    .name("Master Executive: Prefisso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          max: 5,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterExecutiveDaysValidity")
    .name("Master Executive: Giorni di validità")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 60,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterExecutiveValue")
    .name("Master Executive: Valore")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 30000,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterOnlinePrefix")
    .name("Master Online: Prefisso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          max: 5,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterOnlineDaysValidity")
    .name("Master Online: Giorni di validità")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 60,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("masterOnlineValue")
    .name("Master Online: Valore")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 30000,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("corsiPrefix")
    .name("Corsi: Prefisso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          max: 5,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("corsiDaysValidity")
    .name("Corsi: Giorni di validità")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 60,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration
    .createField("corsiValue")
    .name("Corsi: Valore")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          max: 30000,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  bonusConfiguration.changeFieldControl("title", "builtin", "singleLine", {});
  bonusConfiguration.changeFieldControl(
    "masterFullTimeConStagePrefix",
    "builtin",
    "singleLine",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterFullTimeConStageDaysValidity",
    "builtin",
    "numberEditor",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterFullTimeConStageValue",
    "builtin",
    "numberEditor",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterPartTimePrefix",
    "builtin",
    "singleLine",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterPartTimeDaysValidity",
    "builtin",
    "numberEditor",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterPartTimeValue",
    "builtin",
    "numberEditor",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterExecutivePrefix",
    "builtin",
    "singleLine",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterExecutiveDaysValidity",
    "builtin",
    "numberEditor",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterExecutiveValue",
    "builtin",
    "numberEditor",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterOnlinePrefix",
    "builtin",
    "singleLine",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterOnlineDaysValidity",
    "builtin",
    "numberEditor",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "masterOnlineValue",
    "builtin",
    "numberEditor",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "corsiPrefix",
    "builtin",
    "singleLine",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "corsiDaysValidity",
    "builtin",
    "numberEditor",
    {}
  );
  bonusConfiguration.changeFieldControl(
    "corsiValue",
    "builtin",
    "numberEditor",
    {}
  );
  const reviews = migration
    .createContentType("reviews")
    .name("Reviews")
    .description("")
    .displayField("author");
  reviews
    .createField("author")
    .name("Nome e Cognome del partecipante")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  reviews
    .createField("date")
    .name("Data")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  reviews
    .createField("score")
    .name("Voto")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  reviews
    .createField("reviewTitle")
    .name("Titolo")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  reviews
    .createField("reviewContent")
    .name("Contenuto")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: [],
        message: "Marks are not allowed",
      },
      {
        enabledNodeTypes: [],
        message: "Nodes are not allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  reviews
    .createField("productCode")
    .name("Codice commessa del corso a cui ha partecipato")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  reviews
    .createField("courseType")
    .name("Tipologia del corso")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        in: [
          "Master Full Time con Stage",
          "Master Part Time",
          "Master Online",
          "Master Executive",
          "Master MBA",
          "Corsi Part Time",
          "Corsi Online",
        ],
      },
    ])
    .disabled(false)
    .omitted(false);

  reviews
    .createField("courseSlug")
    .name("Codice corso sito")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 256,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  reviews.changeFieldControl("author", "builtin", "singleLine", {});

  reviews.changeFieldControl("date", "builtin", "datePicker", {
    ampm: "24",
    format: "dateonly",
  });

  reviews.changeFieldControl("score", "builtin", "rating", {});
  reviews.changeFieldControl("reviewTitle", "builtin", "singleLine", {});
  reviews.changeFieldControl("reviewContent", "builtin", "richTextEditor", {});
  reviews.changeFieldControl("productCode", "builtin", "singleLine", {});
  reviews.changeFieldControl("courseType", "builtin", "dropdown", {});

  reviews.changeFieldControl("courseSlug", "builtin", "singleLine", {
    helpText: "Codice slug del corso come appare sul sito web",
  });
};
