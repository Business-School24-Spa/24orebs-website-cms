module.exports = function (migration) {
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
            'Corsi Intensivi con Stage',
            'Corsi Intensivi',
            'Corsi Part Time',
            'Corsi On Demand',
            'Executive MBA',
            'Master MBA Full Time',
            'Corsi Masterclass',
            'Corsi di Laurea'
          ]
        }
      ]
    });

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
            'Corsi Intensivi con Stage',
            'Corsi Intensivi',
            'Master Executive',
            'Executive MBA',
            'Master MBA Full Time',
            'Corsi Masterclass',
            'Corsi di Laurea'
          ]
        }
      ]
    });
  
  const reviews = migration.editContentType('reviews');
  reviews.editField('courseType')
    .validations([
      {
        in: [
          'Master Full Time con Stage',
          'Master Full Time con Placement',
          'Master Part Time',
          'Corsi Part Time',
          'Corsi On Demand',
          'Corsi Post Diploma con Stage',
          'Corsi Intensivi con Stage',
          'Corsi Intensivi',
          'Master Executive',
          'Executive MBA',
          'Master MBA Full Time',
          'Corsi Masterclass',
          'Corsi di Laurea'
        ]
      }
    ]);
}