module.exports = function (migration) {
    const staticPages = migration.createContentType('staticPages')
        .name('Pagine statiche')
        .displayField('url');
    
    staticPages.createField('url')
        .type('Symbol')
        .name('URL Pagina statica')
        .required(true)
        .disabled(false)
        .omitted(false);

    staticPages.changeFieldControl('url', 'builtin', 'urlEditor', {
        helpText: "Inserire l'url della pagina statica esistente a cui verranno applicate le configurazioni successive, es: /sport /master-full-time /docenti /partners /sedi. Per le pagine con contenuti gestiti nel CMS utilizzare le relative sezioni (es. News ed Iniziative)"
    });

    staticPages.createField('destinationVisibilities')
        .name('Destinazione visibilità')
        .type('Array')
        .localized(false)
        .required(false)
        .validations([])
        .items({
            type: 'Symbol',
            validations: [
                {
                    in: [
                        'Abilita su 24oreBS',
                        'Abilita su Mastery - Neodiplomati'
                    ]
                }
            ]
        })
        .defaultValue({
            'it-IT': ['Abilita su 24oreBS']
        })
        .disabled(false)
        .omitted(false);

    staticPages.changeFieldControl('destinationVisibilities', 'builtin', 'checkbox');

    staticPages.createField('metaTagSocialImage')
        .name('Meta tag: Immagine social')
        .type('Link')
        .disabled(false)
        .omitted(false)
        .linkType('Asset');

    staticPages.createField('metaTagSocialTitle')
        .name('Meta tag: Titolo social')
        .type('Symbol')
        .disabled(false)
        .omitted(false);

    staticPages.createField('metaTagSocialDescription')
        .name('Meta tag: Descrizione social')
        .type('Text')
        .validations([
            {
                size: {
                    max: 160
                }
            }
        ])
        .disabled(false)
        .omitted(false);

    staticPages.changeFieldControl('metaTagSocialDescription', 'builtin', 'multipleLine');
}