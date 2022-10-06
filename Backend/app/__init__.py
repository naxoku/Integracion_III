from http.client import BAD_REQUEST
from bson import *
import gridfs
from flask_cors import CORS
import pymongo
from flask_jwt_extended import JWTManager
from flask import Flask, jsonify, request
from decouple import config

#data Base, in order, client = url, db = DataBase general, Colection = coleccion especifica
client = pymongo.MongoClient("mongodb+srv://"+config("MONGO_USER")+":"+config("MONGO_PASSWORD")+"@cluster0.ecy5yb3.mongodb.net/?retryWrites=true&w=majority")
db = client.Kow_bib
users = db.users
fs = gridfs.GridFS(db)

#Flask config
app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = r"D:\Universidad\Tercer Año\6to semestre\Integracion_III\Backend\Archivos"

CORS(app, resources={r"/users/*": {"origins": "*"}})

jwt = JWTManager(app)
app.config["JWT_SECRET_KEY"] = "no-borrar-esto"
app.config["CORS-HEADERS"] = 'Content-Type'

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

app.register_blueprint(user_jsonBp)
app.register_blueprint(usersBp)
app.register_blueprint(archivosBp)