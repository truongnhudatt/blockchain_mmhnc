const  mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://truongnhudat:dat123@cluster0.pedscka.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser :true, 
        useUnifiedTopology:true
    }
).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
};