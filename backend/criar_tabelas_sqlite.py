from geral.config import *
from modelos import *

if os.path.exists(arquivobd):
    os.remove(arquivobd)

db.create_all()

m1 = Materia(nome = "Biologia")
m2 = Materia(nome = "Desenvolvimento de Projeto II")
m3 = Materia(nome = "Educação Fisica")
m4 = Materia(nome = "Empreendedorismo")
m5 = Materia(nome = "Física")
m6 = Materia(nome = "Geografia")
m7 = Materia(nome = "História")
m8 = Materia(nome = "Língua Portuguesa")
m9 = Materia(nome = "Matemática")
m10 = Materia(nome = "Programação II")
m11 = Materia(nome = "Química")
m12 = Materia(nome = "Sociologia")
m13 = Materia(nome = "Vôlei")

db.session.add(m1)
db.session.add(m2)
db.session.add(m3)
db.session.add(m4)
db.session.add(m5)
db.session.add(m6)
db.session.add(m7)
db.session.add(m8)
db.session.add(m9)
db.session.add(m10)
db.session.add(m11)
db.session.add(m12)
db.session.add(m13)

# a1 = Atividade(nome = "Exercicio", data = date(2022, 7, 1), situacao = "concluida", observacao = "Nenhuma", materia = m1)
# a2 = Atividade(nome = "Prova", data = "04/06/2022", situacao = "pendente", observacao = "Nenhuma", materia = m2)
# a3 = Atividade(nome = "Prova", data = "04/06/2022", situacao = "concluida", observacao = "Nenhuma", materia = m3)
# db.session.add(a1)
# db.session.add(a2)
# db.session.add(a3)

db.session.commit()