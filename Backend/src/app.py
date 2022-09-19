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
from urllib import response
from flask import Flask, request, jsonify, Response
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

#Flask config
app = Flask(__name__)

CORS(app, resources={r"/users/*": {"origins": "*"}})

#routes

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
        return not_found()
    return  {'message': 'received'} 

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
    
@app.route('/users/<id>', methods=['GET'])
def getUser(id):
    user = db.users.find_one({'_id': ObjectId(id)})
    response = dumps(user)
    return Response(response, mimetype="application/json")

@app.route('/users/<id>', methods=['DELETE'])
def deleteUsers(id):
    db.users.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Usuario eleiminado'})

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

    return {'message': 'usuario o contraseña incorrectos'} 

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
    