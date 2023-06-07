module.exports = function (migration) {
  const contentTypesToAffect = [
    {
      contentType: "homepageSlides"
    },
    {
      contentType: "faq"
    },
    {
      contentType: "hpPromoBoxes"
    },
    {
      contentType: "initiatives"
    },
    {
      contentType: "settings"
    },
    {
      contentType: "bonus-configuration"
    },
    {
      contentType: "landingPages"
    },
    {
      contentType: "reviews"
    },
    {
      contentType: "sem"
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
    
    const contentType = migration.editContentType(element.contentType);
    
    contentType.changeFieldControl('destinationVisibilities', 'builtin', 'checkbox');
  });
}