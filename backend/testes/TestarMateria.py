from geral.config import *
from modelo.materia import Materia

def run():
    m1 = Materia(nome = "Programação II")
    db.session.add(m1)
    db.session.commit()
    print(m1)