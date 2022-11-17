from json import dumps
from app import app
from app import db
from app import not_found
from flask_jwt_extended import create_access_token , jwt_required, get_jwt_identity
from flask import jsonify, request, Blueprint, Response, json
from bson.objectid import ObjectId

plibrosBp = Blueprint('proyectolibros', __name__)

@app.route("/users/nuevoproyecto/<id>",methods=['POST'])
def PROYECTO1(id):
    contenido = request.json['nuevoNombreP']
    dProyecto = request.json['nuevaDes']

    if contenido and dProyecto:
        db.Proyectos.insert_one(
           {    
                'Nombre_Libro': contenido,
                'descripcion': dProyecto,
                'contenido': "contenido del libro",      
            })
        response = { 
            
            'Nombre_Libro': contenido,
            'descripcion': dProyecto,
            'contenido': "contenido del libro"         
        }
        print(response)
        return response
    else:
        return not_found()

# ruta para obtener los comentarios de perfil especifico desde la bd 
@app.route("/users/nuevoproyecto/<id>",methods=['GET'])
def obtener_libro1(id):

    portada = db.Proyectos.find_one({'_id': ObjectId(id)})
    img = json.loads(dumps(portada['Nombre_Libros']))
    return img

@app.route("/users/nuevoproyecto2/<id>",methods=['POST'])
def PROYECTO2(id):
    contenido = request.json['nuevoNombreP2']
    dProyecto = request.json['nuevaDes2']
    if contenido and dProyecto:
        
        id = db.Proyectos.insert_one(
           {    'Nombre_Libro2': contenido,
                'descripcion2': dProyecto,
                'contenido2': "contenido del libro"         
            })
        response = {
            'id' : str(id),
            'Nombre_Libro2': contenido,
            'descripcion2': dProyecto,
            'contenido2': "contenido del libro"         
        }
        return response
    else:
        return not_found()

@app.route("/users/nuevoproyecto3/<id>",methods=['POST'])
def PROYECTO3(id):
    contenido = request.json['nuevoNombreP3']
    dProyecto = request.json['nuevaDes3']
    if contenido and dProyecto:
        
        id = db.Proyectos.insert_one(
           {    'Nombre_Libro3': contenido,
                'descripcion3': dProyecto,
                'contenido3': "contenido del libro"         
            })
        response = {
            'id' : str(id),
            'Nombre_Libro3': contenido,
            'descripcion3': dProyecto,
            'contenido3': "contenido del libro"         
        }
        return response
    else:
        return not_found()

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









