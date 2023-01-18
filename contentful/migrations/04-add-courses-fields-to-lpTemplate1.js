module.exports = function (migration) {
    const lpTemplate1 = migration.editContentType('lpTemplate1');
    lpTemplate1.createField('firstBoxFourthSlugCourse')
        .type('Symbol')
        .name('Primo box: Slug quarto corso')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    lpTemplate1.createField('firstBoxFifthSlugCourse')
        .type('Symbol')
        .name('Primo box: Slug quinto corso')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    lpTemplate1.createField('firstBoxSixthSlugCourse')
        .type('Symbol')
        .name('Primo box: Slug sesto corso')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    lpTemplate1.moveField('firstBoxFourthSlugCourse').afterField('firstBoxThirdSlugCourse');
    lpTemplate1.moveField('firstBoxFifthSlugCourse').afterField('firstBoxFourthSlugCourse');
    lpTemplate1.moveField('firstBoxSixthSlugCourse').afterField('firstBoxFifthSlugCourse');
    
    lpTemplate1.createField('secondBoxFourthSlugCourse')
        .type('Symbol')
        .name('Secondo box: Slug quarto corso')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    lpTemplate1.createField('secondBoxFifthSlugCourse')
        .type('Symbol')
        .name('Secondo box: Slug quinto corso')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    lpTemplate1.createField('secondBoxSixthSlugCourse')
        .type('Symbol')
        .name('Secondo box: Slug sesto corso')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    lpTemplate1.moveField('secondBoxFourthSlugCourse').afterField('secondBoxThirdSlugCourse');
    lpTemplate1.moveField('secondBoxFifthSlugCourse').afterField('secondBoxFourthSlugCourse');
    lpTemplate1.moveField('secondBoxSixthSlugCourse').afterField('secondBoxFifthSlugCourse');
}