from genericpath import exists
from json import dumps
from bson import *
from decouple import config
import os
import base64


from werkzeug.utils import secure_filename
from flask import  Response, flash, redirect, request, send_file, Blueprint, send_from_directory, url_for


from app import app
from app import db
from app import fs

ALLOWED_EXTENSIONS_PERFIL = {'png', 'jpg', 'jpeg'}
REACT = config("REACT")

def allowed_file(filename):
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




@app.route('/users/foto/<id>', methods=['POST'])
def upload_file(id):
    print(id)
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            name = "perfil_"
            ext = ".jpg"
            file.save(os.path.join(app.config['UPLOAD_FOLDER']+"/imagenes_perfil", name+id+ext))
            return  redirect(REACT+"/configuracion")

    
@app.route('/file/<id>', methods=['GET'])
def download_file(id):
    if exists(app.config['UPLOAD_FOLDER']+"/imagenes_perfil/perfil_"+id+".jpg"):
        return send_from_directory(app.config['UPLOAD_FOLDER']+"/imagenes_perfil", "perfil_"+id+".jpg")
    else:
        return send_from_directory(app.config['UPLOAD_FOLDER']+"/archivos_estaticos/", "pan.png")

    



