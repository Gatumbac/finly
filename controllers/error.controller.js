module.exports = (req, res) => {
    res.status(404).render('index', {
        title: 'Not Found',
        message: 'Page Not Found!'
    })
}