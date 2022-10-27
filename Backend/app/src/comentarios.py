from crypt import methods
from app import app
from app import db
from app import not_found

from flask_pymongo import  ObjectId
from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

comentariosBp = Blueprint('comentarios', __name__)

# ruta para obtener el comentario de la bd
@app.route("/comentarios/perfil/<id>",methods=['GET'])
@jwt_required()
def obtener_comentarios(id):
    user = get_jwt_identity()
    comentarios = []
    for doc in db.comentarios.find_one({'_id': ObjectId(id)}):
        comentarios.append({
            '_id': str(ObjectId(doc['_id'])),
            'emisor': doc['emisor'], 
            'contenido': doc['contenido']           
        })
    return jsonify(comentarios)

# ruta para guardar el comentario en la bd
@app.route("/comentarios/perfil/<id>",methods=['POST'])
@jwt_required()
def agregar_comentario(id):
    contenido = request.json['contenido']
    print(contenido)
    user = get_jwt_identity()
    db.comentarios.insert_one(
    {'_id': str(ObjectId(id)) ,
                      'emisor': user,
                      'contenido': contenido    
    }
    )
    return 200


# ruta para eliminar el comentario en la bd
@app.route("/comentarios/perfil/<id>",methods=['POST'])
@jwt_required()
def eliminar_comentario(id):
    user = get_jwt_identity()
    return 1