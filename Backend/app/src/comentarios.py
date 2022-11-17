from app import app
from app import db
from app import not_found
from flask_jwt_extended import create_access_token , jwt_required, get_jwt_identity
from flask import jsonify, request, Blueprint
from bson.objectid import ObjectId


comentariosBp = Blueprint('comentarios', __name__)

# ruta para ingresar el comentario de perfil en la bd
@app.route("/users/comentarios/perfil/<id>",methods=['POST'])
@jwt_required()
def agregar_comentario(id):
    contenido = request.json['nuevoComentario']

    user = db.users.find_one({'_id': ObjectId(get_jwt_identity()["$oid"])})

    db.Comentarios.insert_one(
       {    'emisor': user['name'], 
            'receptor': id, 
            'contenido': contenido         
        })
    return 200

# ruta para obtener los comentarios de perfil especifico desde la bd 
@app.route("/users/comentarios/perfil/<id>",methods=['GET'])
def obtener_comentarios(id):
    comentarios = []
    for doc in db.Comentarios.find({'receptor': id}):
        comentarios.append({
            '_id' : str(ObjectId(doc['_id'])),
            'emisor': doc['emisor'],
            'receptor': doc['receptor'], 
            'contenido': doc['contenido']           
        })
    return jsonify(comentarios)


# ruta para eliminar el comentario de perfil en la bd
@app.route('/users/comentarios/perfil/<id>',methods=['DELETE'])
@jwt_required()
def eliminar_comentario(id):
    print(id)
    db.Comentarios.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Comentario eliminado'})


# ruta para ingresar el comentario del libro en la bd
@app.route("/users/comentarios/libro/<id>/<nombre>",methods=['POST'])
@jwt_required()
def agregar_comentario_libro(id,nombre):
    contenido = request.json['nuevoComentario']
    img = request.json['img_perf']

    db.Libros.find_one({'_id': ObjectId(id)})

    db.ComentariosLibros.insert_one(
       {    'emisor': str(get_jwt_identity()), 
            'nombreEmisor': nombre,
            'img': img, 
            'libro': id, 
            'contenido': contenido         
        })
    return jsonify(contenido)

# ruta para obtener los comentarios de libro especifico desde la bd 
@app.route("/users/comentarios/libro/<id>",methods=['GET'])
def obtener_comentarios_libro(id):
    comentarios = []
    for doc in db.ComentariosLibros.find({'libro': id}):
        comentarios.append({
            '_id' : str(ObjectId(doc['_id'])),
            'nombreEmisor': doc['nombreEmisor'], 
            'emisor': doc['emisor'],
            'img' : doc['img'], 
            'libro' : doc['libro'],
            'contenido': doc['contenido']           
        })
    return jsonify(comentarios)


# ruta para eliminar el comentario de libro en la bd
@app.route('/users/comentarios/libro/<id>',methods=['DELETE'])
@jwt_required()
def eliminar_comentario_libro(id):
    db.ComentariosLibros.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Comentario eliminado'})
