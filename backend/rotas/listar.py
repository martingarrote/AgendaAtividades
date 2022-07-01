from geral.config import *
from modelo.atividade import Atividade
from modelo.materia import Materia

@app.route("/listar/<string:classe>")
def listar(classe):
    dados = None
    if classe == "Atividade":
        dados = db.session.query(Atividade).all()
    elif classe == "Materia":
        dados = db.session.query(Materia).all()
    lista_json = [x.json() for x in dados]
    resposta = jsonify(lista_json)
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta