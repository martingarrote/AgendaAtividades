import json
from geral.config import *
from modelo.atividade import Atividade

@app.route("/filtrar", methods=['POST'])
def filtrar():
    resposta = jsonify({'resultado': 'nao sei', 'detalhes': 'nao sei'})
    info = request.get_json()
    teste = None
    if info is not None:
        if info["Atrasadas"] == "Y":
            resposta = jsonify("Passou no if das atrasadas")
        elif info["Pendentes"] == "Y":
            resposta = jsonify("Passou no if das pendentes")
        elif info["Concluidas"] == "Y":
            resposta = jsonify("Passou no if das concluidas")
        else:
            resposta = jsonify("nada")
        #if teste is not None:
            #filtradas = [x.json() for x in teste]
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta