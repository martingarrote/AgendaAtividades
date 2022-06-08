from geral.config import *
import modelos
from rotas.listar import *
from rotas.adicionar import *

@app.route("/")
def inicio():
    return "Agenda de atividades"

app.run(debug = True)