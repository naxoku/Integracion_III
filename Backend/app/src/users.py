
import json
from bson import *
from pickle import GET
from flask import jsonify, request, Blueprint
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from bson.json_util import dumps

from app import app
from app import db
from app import not_found


usersBp = Blueprint('users', __name__)


# Ruta para crear los usuarios
@app.route('/users', methods=['POST'])
def createUsers():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']

    if name and email and password:

        user = db.users.find_one({'email': email})

        if(user):
            return  not_found()

        user2 = db.users.find_one({'email': name})

        if(user2):
            return  not_found()

        hashed = generate_password_hash(password)
        id = db.users.insert_one(
            {'name': name, 'email': email, 'password' : hashed, "instagram" : "", "twitter" : "", "facebook" : "", "biografia" : "Acá es donde se previsualizará la biografía que cada usuario querrá colocar en su perfil.", "mostrarHistorial":"False","mostrarRedes":"False"}
        )
        response = {
            'id' : str(id),
            'name': name,
            'email': email,
            'password': hashed,
            'biografia': '',
            'instagram' : '',
            'facebook': '',
            'twitter': '',
            "mostrarHistorial" : "False",
            "mostrarRedes" : "False"
        }
        
        return response
    else:
        return not_found()


# Ruta para iniciar sesión un usuario
@app.route('/users/login',methods=['GET','POST'])
def login():
    req = request.get_json()
    email2 = req['email2']  
    password2 = req['password2']
    user = db.users.find_one({'email': email2}) 
    id =  json.loads(dumps(user['_id']))

    if(check_password_hash(user['password'], password2)):
        token = create_access_token(identity=id)
        return jsonify({'token' : token})

    return {'message': 'Usuario y/o contraseña incorrectos'} 

# Borrar un usuario en específico
@app.route('/users/<id>', methods=['DELETE'])
def deleteUsers(id):
    db.users.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Usuario eliminado'})


#======================= RUTAS PARA ACTUALIZACION DE DATOS ===============================#

# Ruta para actualizar el usuario
@app.route('/users/nombre/<id>', methods=['PUT'])
def updateUsers(id):
    req = request.get_json()
    name = req['nuevoUsuario']
    if name:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'name': name
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para actualizar el correo
@app.route('/users/correo/<id>', methods=['PUT'])
def updateCorreo(id):
    req = request.get_json()
    correo = req['nuevoCorreo']
    if correo:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'email': correo
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para actualizar la constraseña
@app.route('/users/password/<id>', methods=['PUT'])
def updatePassword(id):
    req = request.get_json()
    password = req['nuevaContrasena']
    if password:
        hashed = generate_password_hash(password)
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'password': hashed
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para actualizar el Instragram
@app.route('/users/instagram/<id>', methods=['PUT'])
def updateInstagram(id):
    req = request.get_json()
    instagram = req['nuevoIg']
    if instagram:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'instagram': instagram
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para actualizar el Twitter
@app.route('/users/twitter/<id>', methods=['PUT'])
def updateTwitter(id):
    req = request.get_json()
    twitter = req['nuevoTw']
    if twitter:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'twitter': twitter
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para actualizar el Facebook
@app.route('/users/facebook/<id>', methods=['PUT'])
def updateFacebook(id):
    req = request.get_json()
    Facebook = req['nuevoFb']
    if Facebook:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'facebook': Facebook
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para actualizar la Biografia
@app.route('/users/biografia/<id>', methods=['PUT'])
def updateBiografia(id):
    req = request.get_json()
    Biografia = req['nuevaDesc']
    if Biografia:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'biografia': Biografia
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para esconder/mostrar el historial
@app.route('/users/historial/<id>', methods=['PUT'])
def mostrarHistorial(id):
    req = request.get_json()
    decision = req['nmostrarHistorial']
    if decision:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'mostrarHistorial': decision
        }})
    response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para esconder/mostrar las redes
@app.route('/users/redes/<id>', methods=['PUT'])
def mostrarRedes(id):
    req = request.get_json()
    decision = req['nmostrarRedes']
    if decision:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'mostrarRedes': decision
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

#================================================================================================#


