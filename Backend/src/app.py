import os
import base64
import gridfs
from werkzeug.utils import secure_filename
from http.client import BAD_REQUEST, NOT_FOUND
from unicodedata import name
from bson import *
from bson.objectid import ObjectId
from pickle import GET
from flask import Flask, request, jsonify, Response, send_file
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from bson.json_util import loads, dumps
from werkzeug.security import generate_password_hash, check_password_hash
import pymongo
from flask_jwt_extended import create_access_token , get_jwt_identity, jwt_required, JWTManager

#Flask config


client = pymongo.MongoClient("mongodb+srv://Kuroned:20622732-kJose@cluster0.ecy5yb3.mongodb.net/?retryWrites=true&w=majority")
db = client.Kow_bib
users = db.users

fs = gridfs.GridFS(db)

#Config flask

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = r"D:\Universidad\Tercer Año\6to semestre\Integracion_III\Backend\Archivos"
CORS(app)


#ROUTES

#ruta para envio de usuarios

@app.route('/users', methods=['POST'])
def createUsers():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']

    if name and email and password:
        hashed = generate_password_hash(password)
        id = db.users.insert_one(
            {'name': name, 'email': email, 'password' : hashed}
        )
        response = {
            'id' : str(id),
            'name': name,
            'email': email,
            'password': hashed
        }
        return response
    else:
        return NOT_FOUND()

#ruta para obtencion de usuarios

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
    

#ruta para obtencion de usuario especifico por id

@app.route('/users/<id>', methods=['GET'])
def getUser(id):
    user = db.users.find_one({'_id': ObjectId(id)})
    response = dumps(user)
    return Response(response, mimetype="application/json")

#Eliminaciond e suuario

@app.route('/users/<id>', methods=['DELETE'])
def deleteUsers(id):
    db.users.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Usuario eleiminado'})

#Actualizacion de usuario

@app.route('/users/<id>', methods=['PUT'])
def updateUsers(id):
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    if name and email and password:
        hashed = generate_password_hash(password)
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'name': name,
            'email': email,
            'password': hashed
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

#ruta de subida archivo (es de prueba para veriicar que funciona)
@app.route('/Libro',methods=['GET'])
def libro():
    return '''
        <form method="POST" action="/create" enctype="multipart/form-data">
            <input type="text" name="Username">
            <input type="file" name="file">
            <input type="submit">
        </form>
    
    '''

#creacion de los archivos y enrutamientos a mongoDB

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


#Renderiza el archivo pdf alojado en la carpeta desiganda arriba
@app.route('/file/<filename>')
def file(filename):
    return send_file(os.path.join(app.config['UPLOAD_FOLDER']+"\\"+filename),mimetype="application/pdf")

#Redirrecion error

@app.errorhandler(404)
def not_found(error = None):
    response = jsonify({
        'message':'Recurso no encontrado' + request.url,
        'status': 404
    })
    response.status_code = 404
    return response

jwt = JWTManager(app)
app.config["JWT_SECRET_KEY"] = "super-secret"
app.config["CORS_HEADERS"] = "Content-Type" 


@app.route('/login',methods=['GET','POST'])
def login():
    req = request.get_json()
    email2 = req['email2']  
    password2 = req['password2']
    
    '''
    
    intento de verificacion de contraseña:
     user = db.users.find_one({'email': email2}) 
    if user and check_password_hash(user['password'], password2):
        token = create_access_token(identity=email2)
        return jsonify({'token' : token})
    if not user or not check_password_hash(user['password'], password2):
        return {'message': 'usuario o contraseña incorrectos'} 
    borrar lo de abajo cuando se logre
  
    '''
    if email2:
      token = create_access_token(identity=email2)
      return jsonify({'token' : token})


if __name__ == "__main__":
    app.run(debug=True)