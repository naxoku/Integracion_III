from json import dumps
from bson import *
import os
import base64

from werkzeug.utils import secure_filename
from flask import  Response, request, send_file, Blueprint

from app import app
from app import db
from app import fs

archivosBp = Blueprint('archivos', __name__)
# ================ EN DESARROLLO ================

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

# Creacion de los archivos y enrutamientos a MongoDB
@app.route('/create', methods=['POST'])
def create():
    f = request.files['file']
    filename = secure_filename(f.filename)
    print(filename)
    f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    with open(filename, "rb") as f:
        encoded_string = base64.b64encode(f.read())
    fileid = fs.put(encoded_string, filename=filename)
    db.Libros.insert_one({"filename":filename,"fileid":fileid})
    
    return 'DONE!'

# Renderiza el archivo PDF alojado en la carpeta desiganda arriba
@app.route('/file/<filename>')
def file(filename):
    return send_file(os.path.join(app.config['UPLOAD_FOLDER']+"\\"+filename),mimetype="application/pdf")


