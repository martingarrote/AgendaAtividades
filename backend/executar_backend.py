from geral.config import *
import modelos
from rotas.listar import *
from rotas.adicionar import *
from rotas.excluir import *
from rotas.contagem_atividades import *
from rotas.filtrar import *

@app.route("/")
def inicio():
    return 'Agenda de Atividades.'

app.run(debug = True, host="0.0.0.0")
