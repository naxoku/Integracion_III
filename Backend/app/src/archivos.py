import base64
import os

from app import app, db, fs
from bson import *
from bson.json_util import dumps
from bson.objectid import ObjectId
from decouple import config
from flask import Blueprint, Response, flash, jsonify, redirect, request, send_file, send_from_directory, url_for
from genericpath import exists
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS_PERFIL = {'png', 'jpg', 'jpeg'}
ALLOWED_EXTENSIONS_FILES = {'.pdf'}
REACT = config("REACT")

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
@app.route('/users/Libros/<id>', methods=['GET'])
def getBook(id):
    book = db.Libros.find_one({'_id': ObjectId(id)})
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
            'fileid': doc['fileid'],
            'filename': doc['filename']
        })
    return dumps(libros)

#============== MANEJO DE ARCHIVOS =============================


# Creacion de los archivos y enrutamientos a MongoDB
@app.route('/file/<descripcionPDF>/<etiquetasPDF>/<tituloPDF>/<autorPDF>', methods=['POST'])
def upload_file(descripcionPDF,etiquetasPDF,tituloPDF,autorPDF): 
    if 'file' not in request.files:
        flash('No file part')
        return "ERROR!!1"
    file = request.files['file']
    filename = secure_filename(file.filename)

    if file.filename == '':
        flash('No selected file')
        return "ERROR!!2"

    else:
        file.save(os.path.join(app.config['UPLOAD_FOLDER']+"/libros", filename))

        encoded_string = base64.b64encode(file.read())
        fileid = fs.put(encoded_string, filename=filename)
        id = db.Libros.insert_one({"filename":filename,"fileid":fileid, 
        "Popularidad": 0, 
        "etiquetas" : etiquetasPDF, 
        "autor": autorPDF,
        "Titulo": tituloPDF,
        "descripcion": descripcionPDF})
        
        return "GUARDADO!!"


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
        ext = ".jpg"
        file.save(os.path.join(app.config['UPLOAD_FOLDER']+"/imagenes_perfil", name+id+ext))
        return  redirect(REACT+"/configuracion")
    return redirect(REACT+"/configuracion")
    
@app.route('/img/<id>', methods=['GET'])
def download_img(id):
    if exists(app.config['UPLOAD_FOLDER']+"/imagenes_perfil/perfil_"+id+".jpg"):
        return send_from_directory(app.config['UPLOAD_FOLDER']+"/imagenes_perfil", "perfil_"+id+".jpg")
    else:
        return send_from_directory(app.config['UPLOAD_FOLDER']+"/archivos_estaticos/", "pan.png")


    



