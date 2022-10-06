
from bson import *
from bson.objectid import ObjectId
from flask import jsonify, Response, Blueprint
from flask_pymongo import  ObjectId
from bson.json_util import dumps


from app import app
from app import db

user_jsonBp = Blueprint('user_json', __name__)



# Mostrar usuarios en formato JSON
@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in db.users.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'email': doc['email'],
            'password': doc['password'],
            'instagram' : doc['instagram'], 
            'twitter': doc['twitter'],
            'facebook': doc['facebook'],
            'biografia': doc['biografia']
           
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



