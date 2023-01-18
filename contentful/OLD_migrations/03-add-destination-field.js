module.exports = function (migration) {
    const contentTypesToAffect = [
        {
            contentType: "homepageSlides",
            afterField: "title"
        },
        {
            contentType: "faq",
            afterField: "answer"
        },
        {
            contentType: "hpPromoBoxes",
            afterField: "title"
        },
        {
            contentType: "initiatives",
            afterField: "title"
        },
        {
            contentType: "settings",
            afterField: "title"
        },
        {
            contentType: "bonus-configuration",
            afterField: "title"
        },
        {
            contentType: "landingPages",
            afterField: "title"
        },
        {
            contentType: "reviews",
            afterField: "courseSlug"
        },
        {
            contentType: "sem",
            afterField: "title"
        }
    ]

    contentTypesToAffect.forEach(element => {

        const contentType = migration.editContentType(element.contentType);

        // contentType.deleteField('destinationVisibilities');
        
        contentType.createField("destinationVisibilities")
            .name("Destinazione visibilità")
            .type("Array")
            .localized(false)
            .required(false)
            .validations([])
            .items({
                type: "Symbol",
                validations: [
                    {
                        in: [
                            "Abilita su 24oreBS",
                            "Abilita su Mastery - Neodiplomati"
                        ]
                    }
                ]
            })
            .defaultValue({
                "it-IT": ["Abilita su 24oreBS"]
            })
            .disabled(false)
            .omitted(false);

        contentType.moveField("destinationVisibilities").afterField(element.afterField);
    });
}