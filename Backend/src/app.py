from base64 import encode
import email
from email import message
import json
import mimetypes
from bson import json_util 
from bson.objectid import ObjectId
from pickle import GET
from urllib import response
from flask import Flask, request, jsonify, Response
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from bson.json_util import loads, dumps
from werkzeug.security import generate_password_hash, check_password_hash
import pymongo



#data Base, in order, client = url, db = DataBase general, Colection = coleccion especifica
client = pymongo.MongoClient("mongodb+srv://Kuroned:20622732-kJose@cluster0.ecy5yb3.mongodb.net/?retryWrites=true&w=majority")
db = client.Kow_bib
users = db.users

#Flask config
app = Flask(__name__)

CORS(app)

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
    response = json_util.dumps(user)
    return Response(response, mimetype="application/json")

@app.route('/users/<id>', methods=['DELETE'])
def deleteUsers(id):
    db.users.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Usuario eleiminado'})

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

@app.errorhandler(404)
def not_found(error = None):
    response = jsonify({
        'message':'Recurso no encontrado' + request.url,
        'status': 404
    })
    response.status_code = 404
    return response

if __name__ == "__main__":
    app.run(debug=True)