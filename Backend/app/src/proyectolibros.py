from app import app
from app import db
from app import not_found
from flask_jwt_extended import create_access_token , jwt_required, get_jwt_identity
from flask import jsonify, request, Blueprint
from bson.objectid import ObjectId

plibrosBp = Blueprint('proyectolibros', __name__)

@app.route('/users/nuevoproyecto/<id>', methods=['PUT'])
def nombreProyecto(id):
    req = request.get_json()
    nProyecto = req['nuevoPr']
    if nProyecto:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'libro1': nProyecto
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

@app.route('/users/nuevoproyecto2/<id>', methods=['PUT'])
def nombreProyecto2(id):
    req = request.get_json()
    nProyecto = req['nuevoPr2']
    if nProyecto:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'libro2': nProyecto
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

@app.route('/users/nuevoproyecto3/<id>', methods=['PUT'])
def nombreProyecto3(id):
    req = request.get_json()
    nProyecto = req['nuevoPr3']
    if nProyecto:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'libro3': nProyecto
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

@app.route('/users/descripcionproyecto/<id>', methods=['PUT'])
def descProyecto(id):
    req = request.get_json()
    dProyecto = req['nuevaDe']
    if dProyecto:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'desc1': dProyecto
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

@app.route('/users/descripcionproyecto2/<id>', methods=['PUT'])
def descProyecto2(id):
    req = request.get_json()
    dProyecto = req['nuevaDe2']
    if dProyecto:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'desc2': dProyecto
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response

@app.route('/users/descripcionproyecto3/<id>', methods=['PUT'])
def descProyecto3(id):
    req = request.get_json()
    dProyecto = req['nuevaDe3']
    if dProyecto:
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'desc3': dProyecto
        }})
        response = jsonify({'message' : 'name' +  id + 'fue actualizado correctamente'})
    return response









