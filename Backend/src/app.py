from base64 import encode
import email
from email import message
from http import HTTPStatus
from http.client import BAD_REQUEST
import json
import mimetypes
from unicodedata import name
from bson import *
from bson.objectid import ObjectId
from pickle import GET
import os
import base64
import gridfs
from werkzeug.utils import secure_filename
from urllib import response
from flask import Flask, request, jsonify, Response, send_file
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from bson.json_util import loads, dumps
from werkzeug.security import generate_password_hash, check_password_hash
import pymongo
from flask_jwt_extended import create_access_token , get_jwt_identity, jwt_required, JWTManager
from bson.json_util import dumps

#data Base, in order, client = url, db = DataBase general, Colection = coleccion especifica
client = pymongo.MongoClient("mongodb+srv://Kuroned:20622732-kJose@cluster0.ecy5yb3.mongodb.net/?retryWrites=true&w=majority")
db = client.Kow_bib
users = db.users
fs = gridfs.GridFS(db)

#Flask config
app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = r"D:\Universidad\Tercer Año\6to semestre\Integracion_III\Backend\Archivos"

CORS(app, resources={r"/users/*": {"origins": "*"}})
jwt = JWTManager(app)
app.config["JWT_SECRET_KEY"] = "no-borrar-esto"
app.config["CORS-HEADERS"] = 'Content-Type'

# ================ CREACIÓN DE RUTAS GENERALES ================

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
            {'name': name, 'email': email, 'password' : hashed, "instagram" : "", "twitter" : "", "facebook" : "", "biografia" : "" }
        )
        response = {
            'id' : str(id),
            'name': name,
            'email': email,
            'password': hashed
        }
        
        return response
    else:
        return not_found()
    return  {'message': 'received'} 

# Mostrar usuarios en formato JSON
@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in db.users.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'email': doc['email'],
            'password': doc['password']
        })
    return jsonify(users)

# Mostrar usuario en específico por ID en formato JSON
@app.route('/users/<id>', methods=['GET'])
def getUser(id):
    user = db.users.find_one({'_id': ObjectId(id)})
    response = dumps(user)
    return Response(response, mimetype="application/json")

# Mostrar usuario en específico por nombre de usuario en formato JSON
@app.route('/users/a/<nombre>', methods=['GET'])
def getUser2(nombre):
    user = db.users.find_one({ 'name': nombre})
    response = dumps(user)
    return Response(response, mimetype="application/json")

# Borrar un usuario en específico
@app.route('/users/<id>', methods=['DELETE'])
def deleteUsers(id):
    db.users.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Usuario eliminado'})

# Renderiza el archivo PDF alojado en la carpeta desiganda arriba
@app.route('/file/<filename>')
def file(filename):
    return send_file(os.path.join(app.config['UPLOAD_FOLDER']+"\\"+filename),mimetype="application/pdf")


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
@app.route('/users/Instagram/<id>', methods=['PUT'])
def updateInstagram(id):
    req = request.get_json()
    instagram = req['nuevoInstagram']
    if instagram:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'instagram': instagram
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para actualizar el Twitter
@app.route('/users/Twitter/<id>', methods=['PUT'])
def updateTwitter(id):
    req = request.get_json()
    twitter = req['nuevoTwitter']
    if twitter:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'twitter': twitter
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para actualizar el Facebook
@app.route('/users/Facebook/<id>', methods=['PUT'])
def updateFacebook(id):
    req = request.get_json()
    Facebook = req['nuevoFacebook']
    if Facebook:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'facebook': Facebook
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

# Ruta para actualizar la Biografia
@app.route('/users/Biografia/<id>', methods=['PUT'])
def updateBiografia(id):
    req = request.get_json()
    Biografia = req['nuevoBiografia']
    if Biografia:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'biografia': Biografia
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response


#================================================================================================#

# Manejador de errores en caso de no encontrar la ruta
@app.errorhandler(404)
def not_found(error = None):
    response = jsonify({
        'message':'Recurso no encontrado: ' + request.url,
        'status': 404
    })
    response.status_code = 404
    return response

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

# ================ EN DESARROLLO ================

# Ruta de subida archivo (es de prueba para veriicar que funciona)
@app.route('/Libro',methods=['GET'])
def libro():
    return '''
        <form method="POST" action="/create" enctype="multipart/form-data">
            <input type="text" name="Username">
            <input type="file" name="file">
            <input type="submit">
        </form>
    
    '''

# Creacion de los archivos y enrutamientos a MongoDB
@app.route('/create', methods=['POST'])
def create():
    f = request.files['file']
    filename = secure_filename(f.filename)
    print(filename)
    f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    with open(filename, "rb") as f:
        encoded_string = base64.b64encode(f.read())
    fileid = fs.put(encoded_string, filename=filename)
    db.Libros.insert_one({"filename":filename,"fileid":fileid})
    
    return 'DONE!'

if __name__ == "__main__":
    app.run(debug=True)
    