import base64
import json
import os
from app import app, db, fs
from bson import *
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import Blueprint, Response, flash, jsonify, redirect, request, send_file, send_from_directory, url_for
from genericpath import exists
from werkzeug.utils import secure_filename
import cloudinary
import cloudinary.uploader
import cloudinary.api

config = cloudinary.config(secure=True)

ALLOWED_EXTENSIONS_PERFIL = {'png', 'jpg', 'jpeg'}
ALLOWED_EXTENSIONS_FILES = {'.pdf'}
REACT = os.environ["REACT"]

def allowed_img(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_PERFIL

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_FILES

#Importaciones para modulacion

archivosBp = Blueprint('archivos', __name__)


#===========RUTAS==============

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
@app.route('/users/Libros/<idAutor>', methods=['GET'])
def getBook(idAutor):
    book = db.Libros.find({'autor': idAutor})
    response = dumps(book)
    return Response(response, mimetype="application/json")

@app.route('/users/Libros/id/<id>', methods=['GET'])
def getBook2(id):
    book = db.Libros.find({'_id': ObjectId(id)})
    response = dumps(book)
    return Response(response, mimetype="application/json")


@app.route('/users/Libros', methods=['GET'])
def getBooks():
    libros = []
    for doc in db.Libros.find():
        libros.append({
            
            '_id':  str(ObjectId(doc['_id'])),
            'Popularidad': doc['Popularidad'],
            'etiquetas': doc['etiquetas'],
            'autor': doc['autor'],
            'Titulo' : doc['Titulo'], 
            'descripcion': doc['descripcion'],
            'filename': doc['filename'],
            'url': doc['url'],
            'img': doc['img']
        })
    return dumps(libros)

#============== MANEJO DE ARCHIVOS =============================


# Creacion de los archivos y enrutamientos a MongoDB
@app.route('/file/<descripcionPDF>/<etiquetasPDF>/<tituloPDF>/<autorPDF>', methods=['POST'])
def upload_file(descripcionPDF,etiquetasPDF,tituloPDF,autorPDF): 
    file = request.files['file']
    portada = request.files['portada']

    if 'file' not in request.files:
        flash('No file part')
        return redirect(REACT+"/proyecto")
    if file.filename == '' or portada.filename == '':
        flash('No selected file')
        return redirect(REACT+"/proyecto")
    

    filename = secure_filename(file.filename)
    if (file) and (portada and allowed_img(portada.filename)):
        name_book = "libro_"
        id = db.Libros.insert_one({"filename":filename, 
        "Popularidad": 0, 
        "etiquetas" : etiquetasPDF, 
        "autor": autorPDF,
        "Titulo": tituloPDF,
        "descripcion": descripcionPDF,
        'url': "",
        "img": ""
        })


        cloudinary.uploader.upload(file, public_id=name_book+str(id.inserted_id), unique_filename = False, overwrite=True)
        urlbook = cloudinary.CloudinaryImage(name_book+str(id.inserted_id)).build_url()


        name_port = "portada_"
        cloudinary.uploader.upload(portada, public_id=name_port+str(id.inserted_id), unique_filename = False, overwrite=True)
        urlimg = cloudinary.CloudinaryImage(name_port+str(id.inserted_id)).build_url()
        print(id.inserted_id)

        db.Libros.update_one({'_id': ObjectId(id.inserted_id)}, {'$set': {
            "url": urlbook,
            "img": urlimg

        }})
    return redirect(REACT+"/proyecto")


# Renderiza el archivo PDF alojado en la carpeta desiganda arriba
@app.route('/file/<filename>')
def download_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER']+"/libros/", filename)



#===========MANEJO DE IMAGENES PERFIL=====================

@app.route('/users/img/<id>', methods=['POST'])
def upload_img(id):
    print(id)
    if 'file' not in request.files:
        flash('No file part')
        return redirect(REACT+"/configuracion")
    file = request.files['file']
    if file.filename == '':
        flash('No selected file')
        return redirect(REACT+"/configuracion")
    if file and allowed_img(file.filename):
        name = "perfil_"
      
        cloudinary.uploader.upload(file, public_id=name+id, unique_filename = False, overwrite=True)
        srcURL = cloudinary.CloudinaryImage(name+id).build_url()
        db.users.update_one({'_id': ObjectId(id)}, {'$set': {
            'img': srcURL
        }})
        return  redirect(REACT+"/configuracion")
    return redirect(REACT+"/configuracion")
    
@app.route('/img/<id>', methods=['GET'])
def download_img(id):
    user = db.users.find_one({'_id': ObjectId(id)})
    img = json.loads(dumps(user['img']))
    return img

@app.route('/portada/<id>', methods=['GET'])
def portada(id):
    portada = db.Libros.find_one({'_id': ObjectId(id)})
    img = json.loads(dumps(portada['img']))
    return img


    



