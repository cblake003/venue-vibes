
const Event = require('../../models/event');



module.exports = {
    index,
    create,
    delete: deleteEvent
};

async function index(req, res) {
//    do find req.user._id but NOT findById because it is not by the event id
    const favorites = await Event.find({ user: req.user._id })
    console.log(favorites)
    res.json( favorites );
}

async function deleteEvent() {
   try {
    const deleteEvent = await Event.findOneAndDelete({"_id": req.params.id});
    res.json(deleteEvent);
   } catch (err) {
    console.log(err)
    res.status(400).json(err)
   }
}
    

async function create(req, res) {
    try {
        console.log(req.body)
        const info = {
            name: req.body.result.name,
            date: req.body.result.dates.start.localDate,
            venue: req.body.result._embedded ? req.body.result._embedded.venues[0].name : null,
            priceRange: req.body.result.priceRanges ? `${req.body.result.priceRanges[0].min} - ${req.body.result.priceRanges[0].max}` : null,
            user: req.user._id
        }
        const event = await Event.create(info)

    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}