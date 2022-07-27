module.exports= function (migration) {
    const news = migration.editContentType('news');
    news.createField("tempTags")
        .name('tempTags')
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .items({
            type: "Symbol",
            validations: [
                {
                    in: [
                        "Marketing Comunicazione Digital e Social Media",
                        "Gestione di Impresa Export e Internazionalizzazione",
                        "HR Lavoro e Sviluppo Manageriale",
                        "Amministrazione Finanza e Controllo",
                        "Lusso e Moda",
                        "Vendite e Retail",
                        "Ambiente Energia e P.A.",
                        "Sanità Pharma e Biomed",
                        "Arte Cinema e Design",
                        "Diritto e Fisco",
                        "Food Beverage e Turismo",
                        "Sport",
                        "Brand",
                        "Formazione"
                    ]
                }
            ]
        })
        .disabled(false)
        .omitted(false);

    migration.transformEntries({
        contentType: "news",
        from: ["tags"],
        to: ["tempTags"],
        transformEntryForLocale: function (from, locale) {
            const tempTags = [];
            if (typeof from.tags === 'undefined') {
                return;
            }
            from.tags[locale].forEach((item) => {
                tempTags.push(item.split(',').join(''));
            })
            return {
                tempTags: tempTags
            }
        }
    });

    news.deleteField('tags');

    news.createField("tags")
        .name('Tags')
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .items({
            type: "Symbol",
            validations: [
                {
                    in: [
                        "Marketing Comunicazione Digital e Social Media",
                        "Gestione di Impresa Export e Internazionalizzazione",
                        "HR Lavoro e Sviluppo Manageriale",
                        "Amministrazione Finanza e Controllo",
                        "Lusso e Moda",
                        "Vendite e Retail",
                        "Ambiente Energia e P.A.",
                        "Sanità Pharma e Biomed",
                        "Arte Cinema e Design",
                        "Diritto e Fisco",
                        "Food Beverage e Turismo",
                        "Sport",
                        "Brand",
                        "Formazione"
                    ]
                }
            ]
        })
        .disabled(false)
        .omitted(false);

    news.moveField("tags").afterField('content');

    migration.transformEntries({
        contentType: "news",
        from: ["tempTags"],
        to: ["tags"],
        transformEntryForLocale: function (from, locale) {
            const tags = [];
            if (typeof from.tempTags === 'undefined') {
                return;
            }
            from.tempTags[locale].forEach((item) => {
                tags.push(item.split(',').join(''));
            })
            return {
                tags: tags
            }
        }
    });

    news.deleteField('tempTags');

    
}