module.exports = function (migration) {
  const settings = migration.editContentType('settings');
  settings.deleteField('refFeaturedOffersTem01');
  settings.deleteField('refFeaturedOffersTem02');
  settings.deleteField('refFeaturedOffersTem03');
  settings.deleteField('refFeaturedOffersTem04');
  settings.deleteField('refFeaturedOffersTem05');
  settings.deleteField('refFeaturedOffersTem06');
  settings.deleteField('refFeaturedOffersTem07');
  settings.deleteField('refFeaturedOffersTem08');
  settings.deleteField('refFeaturedOffersTem09');
  settings.deleteField('refFeaturedOffersTem10');
  settings.deleteField('refFeaturedOffersTem11');
  settings.deleteField('refFeaturedOffersTem12');
  settings.deleteField('refFeaturedOffersCourseType01');
  settings.deleteField('refFeaturedOffersCourseType02');
  settings.deleteField('refFeaturedOffersCourseType03');
  settings.deleteField('refFeaturedOffersCourseType04');
  settings.deleteField('refFeaturedOffersCourseType05');
  settings.deleteField('refFeaturedOffersCourseType06');
  settings.deleteField('refFeaturedOffersCourseType07');
  settings.deleteField('refFeaturedOffersCourseType08');
  settings.deleteField('refFeaturedOffersCourseType09');
}