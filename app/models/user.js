let db = require('../../libs/db');

// Модель пользователя
let UserSchema = new db.mongoose.Schema({
    id: {type: Number, required: [true, 'idRequired']},
    name: {type: String, required: [true, 'nameRequired']},
    date: {type: Date, default: Date.now}
});

exports.User = db.connect.model('User', UserSchema);