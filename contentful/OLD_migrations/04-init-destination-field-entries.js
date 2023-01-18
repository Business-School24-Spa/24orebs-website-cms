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

        migration.transformEntries({
            contentType: element.contentType,
            from: [],
            to: ["destinationVisibilities"],
            transformEntryForLocale: function (from, locale) {
                return {
                    destinationVisibilities: ["Abilita su 24oreBS"]
                }
            }
        });
    });
}