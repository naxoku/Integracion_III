from genericpath import exists
from json import dumps
from bson import *
from decouple import config
import os
import base64
from bson.objectid import ObjectId

from werkzeug.utils import secure_filename
from flask import  Response, flash, redirect, request, send_file, Blueprint, send_from_directory, url_for


from app import app
from app import db
from app import fs

ALLOWED_EXTENSIONS_PERFIL = {'png', 'jpg', 'jpeg'}
ALLOWED_EXTENSIONS_FILES = {'.pdf'}
REACT = config("REACT")

def allowed_img(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_PERFIL



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

#============== MANEJO DE ARCHIVOS =============================


# Creacion de los archivos y enrutamientos a MongoDB
@app.route('/file', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        flash('No file part')
        return "ERROR!!"
    file = request.files['file']
    filename = secure_filename(file.filename)

    if file.filename == '':
        flash('No selected file')
        return "ERROR!!"

    else:
        file.save(os.path.join(app.config['UPLOAD_FOLDER']+"/libros", filename))

        encoded_string = base64.b64encode(file.read())
        fileid = fs.put(encoded_string, filename=filename)
        id = db.Libros.insert_one({"filename":filename,"fileid":fileid, "Popularidad": 0, "etiquetas" : "etiqueta1,etiqueta2,etiqueta3"})
        
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

    



