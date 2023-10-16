module.exports = function (migration) {
  const settings = migration.editContentType('settings');
  settings.editField('hpPromoBox')
    .validations([
      {
        linkContentType: ["promoBoxes"]
      }
    ]);
  
  settings
    .createField("newsListingPromoBox")
    .name("Box Promo nel listing delle news")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["promoBoxes"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  settings.changeFieldControl("newsListingPromoBox", "builtin", "entryCardEditor", {
    helpText:
      "Se impostato si attiva il box promo nel listing delle news",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });
}