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
};
