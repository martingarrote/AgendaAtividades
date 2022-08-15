import json
from geral.config import *
from modelo.atividade import Atividade

@app.route("/filtrar", methods=["POST"])
def filtrar():
    dados = None
    lista_json = None
    info = request.get_json()
    if info is not None:
        
        """for i in range(5):
            if info["Atrasadas"] == "Y":
                dados += Atividade.query.filter(Atividade.situacao("atrasada"))
            elif info["Pendentes"] == "Y":
                dados += Atividade.query.filter(Atividade.situacao("pendente"))
            elif info["Concluidas"] == "Y":
                dados += Atividade.query.filter(Atividade.situacao("concluida"))"""

        if info["Atrasadas"] == "Y":
            dados = db.session.query(Atividade).filter(Atividade.situacao == "atrasada")
            if lista_json is None:
                lista_json = [x.json() for x in dados]
            else:
                lista_json += [x.json() for x in dados]
        if info["Pendentes"] == "Y":
            dados = db.session.query(Atividade).filter(Atividade.situacao == "pendente")
            if lista_json is None:
                lista_json = [x.json() for x in dados]
            else:
                lista_json += [x.json() for x in dados]
        if info["Concluidas"] == "Y":
            dados = db.session.query(Atividade).filter(Atividade.situacao == "concluida")
            if lista_json is None:
                lista_json = [x.json() for x in dados]
            else:
                lista_json += [x.json() for x in dados]

        if lista_json is not None:
            resposta = jsonify({"resultado": "ok", "dados": lista_json})
        else:
            resposta = jsonify({"resultado": "erro?", "detalhes": "lista_json vazia!"})
    else:
        resposta = jsonify({"resultado": "erro"})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

""" 
aqui será retornada uma resposta que conterá as atividades filtradas e então será enviado ao frontend, onde elas serão dispostas da mesma foram que no listaratividade.js
substituindo as atividades de lá.
"""