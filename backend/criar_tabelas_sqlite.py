from geral.config import *
import modelos

if os.path.exists(arquivobd):
    os.remove(arquivobd)

db.create_all()
