from geral.config import *
from modelo.atividade import Atividade
from modelo.materia import Materia

@app.route("/adicionar/<string:classe>", methods = ['post'])
def adicionar(classe):
    resposta = jsonify({"resultado": "ok", "detalhes": "ok"})
    dados = request.get_json()
    try:
        nova = None
        if classe == "Atividade":
            nova = Atividade(**dados)
        elif classe == "Materia":
            nova = Materia(**dados)
        db.session.add(nova)
        db.session.commit()
    except Exception as e:
        resposta = jsonify({"resultado": "erro", "detalhes": str(e)})
        resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta