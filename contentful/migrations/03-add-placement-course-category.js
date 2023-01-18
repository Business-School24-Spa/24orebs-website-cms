module.exports = function (migration) {
    // Settings
    const settings = migration.editContentType('settings');
    settings.createField('refBestSellerCourseType10')
        .name('Best Seller Master Full Time con Placement')
        .type('Symbol')
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
    settings.createField('refFeaturedOffersCourseType10')
        .name('Offerte in evidenza Master Full Time con Placement')
        .type('Symbol')
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

    settings.changeFieldControl('refBestSellerCourseType10', 'builtin', 'singleLine', {
        helpText: 'Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Full Time con Placement nella sezione Best Seller',
    });
    settings.changeFieldControl('refFeaturedOffersCourseType10', 'builtin', 'singleLine', {
        helpText: 'Inserire 3 codici commessa separati da virgola (,). I corsi inerenti i codici commessa inseriti saranno visualizzati in Master Full Time con Placement nella sezione Offerte In Evidenza',
    });

    settings.moveField("refBestSellerCourseType10").afterField('refFeaturedOffersCourseType01');
    settings.moveField("refFeaturedOffersCourseType10").afterField('refBestSellerCourseType10');

    // Bonus configuration
    const bonusConfiguration = migration.editContentType('bonus-configuration');

    bonusConfiguration.createField('masterFullTimeConPlacementPrefix')
        .name('Master Full Time Con Placement: Prefisso')
        .type('Symbol')
        .localized(false)
        .required(true)
        .validations([
            {size: {min: 1, max: 5}}
        ])
        .disabled(false)
        .omitted(false);


    bonusConfiguration.createField('masterFullTimeConPlacementDaysValidity')
        .name('Master Full Time Con Placement: Giorni di validità')
        .type('Integer')
        .localized(false)
        .required(true)
        .validations([
            {range: {max: 60}}
        ])
        .disabled(false)
        .omitted(false);

    bonusConfiguration.createField('masterFullTimeConPlacementValue')
        .name('Master Full Time Con Placement: Valore')
        .type('Integer')
        .localized(false)
        .required(true)
        .validations([
            {range: {max: 30000}}
        ])
        .disabled(false)
        .omitted(false);

    bonusConfiguration.moveField("masterFullTimeConPlacementPrefix").afterField('masterFullTimeConStageValue');
    bonusConfiguration.moveField("masterFullTimeConPlacementDaysValidity").afterField('masterFullTimeConPlacementPrefix');
    bonusConfiguration.moveField("masterFullTimeConPlacementValue").afterField('masterFullTimeConPlacementDaysValidity');

    // Selezione di Master/Corsi da Filtri
    const lpTemplate3_1 = migration.editContentType('lpTemplate3_1');
    lpTemplate3_1.editField('courseTypeFilter')
        .items({
            type: "Symbol",
            validations: [
                {
                    in: [
                        'Master Full Time con Stage',
                        'Master Full Time con Placement',
                        'Master Part Time',
                        'Master Executive',
                        'Corsi Post Diploma con Stage',
                        'Corsi Intensivi',
                        'Corsi Part Time',
                        'Corsi On Demand',
                    ]
                }
            ]
        });

    // Reviews
    const reviews = migration.editContentType('reviews');
    reviews.editField('courseType')
        .validations([
            {
                in: [
                    'Master Full Time con Stage',
                    'Master Full Time con Placement',
                    'Master Part Time',
                    'Master Online',
                    'Master Executive',
                    'Master MBA',
                    'Corsi Part Time',
                    'Corsi On Demand',
                ]
            }
        ]);


    // FAQ
    const faq = migration.editContentType('faq');
    faq.editField('tag1')
        .items({
            type: "Symbol",
            validations: [
                {
                    in: [
                        'Master Full Time con Stage',
                        'Master Full Time con Placement',
                        'Master Part Time',
                        'Corsi Part Time',
                        'Corsi On Demand',
                        'Corsi Post Diploma con Stage',
                        'Corsi Intensivi',
                        'Master Executive',
                        'Executive MBA',
                        'Corsi di Laurea'
                    ]
                }
            ]
        });
}