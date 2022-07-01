from geral.config import *
from modelo.atividade import Atividade

@app.route("/contagem_atividades")
def contagem_atividades():
    total = db.session.query(Atividade).count()
    concluida = db.session.query(Atividade).filter(Atividade.situacao == "concluida").count()
    pendente = db.session.query(Atividade).filter(Atividade.situacao == "pendente").count()
    atrasada = db.session.query(Atividade).filter(Atividade.situacao == "atrasada").count()
    resposta = jsonify({"total": total, "concluida": concluida, "pendente": pendente, "atrasada": atrasada})
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta 