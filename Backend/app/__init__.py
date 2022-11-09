from http.client import BAD_REQUEST
from bson import *
import gridfs
from flask_cors import CORS
import pymongo
import os
from flask_jwt_extended import JWTManager
from flask import Flask, jsonify, request
from decouple import config

#data Base, in order, client = url, db = DataBase general, Colection = coleccion especifica
client = pymongo.MongoClient("mongodb+srv://"+config("MONGO_USER")+":"+config("MONGO_PASSWORD")+"@cluster0.ecy5yb3.mongodb.net/?retryWrites=true&w=majority")
db = client.Kow_bib
users = db.users
fs = gridfs.GridFS(db)

path_absolute = os.path.dirname(__file__)
relative_path = "archivos"
full_path = os.path.join(path_absolute, relative_path)


#Flask config
UPLOADER_FOLDER = full_path
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)


CORS(app, resources={r"*": {"origins": "*"}})

jwt = JWTManager(app)
app.config['JWT_TOKEN_LOCATION'] = ['headers', 'query_string']
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")
app.config["CORS-HEADERS"] = 'Content-Type'
app.config['UPLOAD_FOLDER'] = UPLOADER_FOLDER
app.secret_key = 'super secret key'

#Ruta de error

@app.errorhandler(404)
def not_found(error = None):
    response = jsonify({
        'message':'Recurso no encontrado: ' + request.url,
        'status': 404
    })
    response.status_code = 404
    return response

#Modulaciones

from app.src.usersjson import user_jsonBp
from app.src.users import usersBp
from app.src.archivos import archivosBp
from app.src.comentarios import comentariosBp

app.register_blueprint(user_jsonBp)
app.register_blueprint(usersBp)
app.register_blueprint(archivosBp)
app.register_blueprint(comentariosBp)