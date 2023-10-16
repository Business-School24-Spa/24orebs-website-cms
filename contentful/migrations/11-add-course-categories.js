module.exports = function (migration) {
  const lpTemplate1 = migration.editContentType('lpTemplate1');
  lpTemplate1.editField('courseCategory')
    .validations([
      {
        in: [
          "Nessuna",
          "Marketing, Comunicazione, Digital e Social media",
          "Gestione di Impresa, Export e Internazionalizzazione",
          "HR, Lavoro e Sviluppo Manageriale",
          "Amministrazione, finanza e Controllo",
          "Lusso e Moda",
          "Vendite e Retail",
          "Ambiente Energia e P.A.",
          "Sanità, Pharma e Biomed",
          "Arte, Cinema e Design",
          "Diritto e Fisco",
          "Food, Beverage e Turismo",
          "Sport",
          "Coding Academy",
          "Digital Academy",
        ]
      }
    ]);

  const news = migration.editContentType('news');
  news.editField('tags')
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
            "Coding Academy",
            "Digital Academy",
            "Brand",
            "Formazione"
          ]
        }
      ]
    });
  
  const faq = migration.editContentType('faq');
  faq.editField('tagThematicArea')
    .items({
      type: "Symbol",
      validations: [
        {
          in: [
            "Generico",
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
            "Coding Academy",
            "Digital Academy",
          ]
        }
      ]
    });
  
  const lpTemplate3_1 = migration.editContentType('lpTemplate3_1');
  lpTemplate3_1.editField('courseCategoryFilter')
    .items({
      type: "Symbol",
      validations: [
        {
          in: [
            "Marketing, Comunicazione, Digital e Social media",
            "Gestione di Impresa, Export e Internazionalizzazione",
            "HR, Lavoro e Sviluppo Manageriale",
            "Amministrazione, finanza e Controllo",
            "Lusso e Moda",
            "Vendite e Retail",
            "Ambiente Energia e P.A.",
            "Sanità, Pharma e Biomed",
            "Arte, cinema e Design",
            "Diritto e fisco",
            "Food, Beverage e Turismo",
            "Sport",
            "Coding Academy",
            "Digital Academy",
          ]
        }
      ]
    });
  
  const sem = migration.editContentType('sem');
  sem.editField('thematicArea')
    .items({
      type: "Symbol",
      validations: [
        {
          in: [
            "No Area Tematica",
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
            "Coding Academy",
            "Digital Academy",
          ]
        }
      ]
    });
  sem.editField('relatedAT')
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
            "Coding Academy",
            "Digital Academy",
          ]
        }
      ]
    });
  sem.editField('notRelatedAT')
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
            "Coding Academy",
            "Digital Academy",
          ]
        }
      ]
    });
}