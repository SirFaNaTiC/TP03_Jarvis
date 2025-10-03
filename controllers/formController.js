const { route } = require("../routes/formRouter");

module.exports.showForm = (req, res) => {
    res.render('pages/form');
}

module.exports.handleFormSubmission = (req, res) => {
    const { identifiant, code } = req.body;
    res.render('pages/connection', { id : identifiant, code : code, route : 'form' });
}
