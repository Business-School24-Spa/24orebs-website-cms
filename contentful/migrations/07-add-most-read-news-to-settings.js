module.exports = function (migration) {
  const settings = migration.editContentType('settings');
  settings.createField('refMostReadNews')
    .name('News più lette')
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