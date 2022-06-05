from geral.config import *
from modelo.atividade import Atividade
from modelo.materia import Materia

def run():
    m1 = Materia(nome = "Língua Portuguesa")
    db.session.add(m1)
    db.session.commit()

    a1 = Atividade(nome = "Prova", data = "04/06/2022", situacao = "fazer", observacao = "precisa fazer", materia = m1)
    db.session.add(a1)
    db.session.commit()

    print(m1)
    print(a1)