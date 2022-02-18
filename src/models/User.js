const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new Schema({
    Nombre: { type: String, required: true },
    Correo: { type: String, required: true },
    Password: { type: String, required: true },
}, { timestamps: true }
);

//Cifrado de Contraseña
UserSchema.methods.encrypPassword = async Password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(Password, salt);
}

//Decifrado de la contraseña
UserSchema.methods.matchContra = function(Password) {
    await bcrypt.compare(Password,this.Password);
}
module.exports = model('User', UserSchema);