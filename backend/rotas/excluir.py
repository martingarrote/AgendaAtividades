from geral.config import *
from modelo.atividade import Atividade
from modelo.materia import Materia

@app.route("/excluir/<string:classe>/<int:id_alvo>", methods = ['delete'])
def excluir(classe, id_alvo):
    resposta = jsonify({"resultado": "ok", "detalhes": "ok"})
    try:
        if classe == "Atividade":
            Atividade.query.filter(Atividade.id == id_alvo).delete()
            db.session.commit()
        elif classe == "Materia":
            Materia.query.filter(Materia.id == id_alvo).delete()
    except Exception as e:
        resposta = jsonify({"resultado": "erro", "detalhes": str(e)})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta