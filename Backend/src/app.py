from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from bson.json_util import loads, dumps
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
    id = users.insert_one({
        'name' : request.json['name'],
        'email' : request.json['email'],
        'password' : request.json['password']
    })
    return jsonify(str(id.inserted_id)) 
        

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
    
@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    user = db.users.find_one({'_id': ObjectId(id)})
    print(type(user))
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
        'name': user['name'],
        'email': user['email'],
        'password': user['password']
        
    })

@app.route('/users/<id>', methods=['DELETE'])
def deleteUsers(id):
    db.users.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Usuario eleiminado'})

@app.route('/users/<id>', methods=['PUT'])
def updateUsers(id):
    db.users.update_one({'_id': ObjectId(id)}, {'$set': {
        'name': request.json['name'],
        'email': request.json['email'],
        'password': request.json['password']
    }})
    return jsonify({'msg': 'Usuario actualizado'})



if __name__ == "__main__":
    app.run(debug=True)