module.exports= function (migration) {
    const hpHero = migration.editContentType('hero');
    hpHero
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
}