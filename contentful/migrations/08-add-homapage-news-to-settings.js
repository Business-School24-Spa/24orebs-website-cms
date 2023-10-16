module.exports = function (migration) {
  const settings = migration.editContentType('settings');
  settings.createField('refHomepageNews')
    .name('News in homepage')
    .type('Array')
    .items({
      type: "Link",
      validations: [
        {
          linkContentType: [
            "news"
          ]
        }
      ],
      linkType: "Entry"
    })
    .validations([
      {
        size: {
          max: 3,
        },
      },
    ]);
}