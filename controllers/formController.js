module.exports.showForm = (req, res) => {
    res.render('pages/form');
}

module.exports.handleFormSubmission = (req, res) => {
    const { identifiant, code } = req.body;
    // Traitement des données du formulaire
    console.log('Identifiant:', firstname);
    console.log('Code:', lastname);
    res.render('pages/form');
}   