from geral.config import *

class Materia(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	nome = db.Column(db.String(254))
	
	def __str__(self):
		return f"{self.nome}"
		
	def json(self):
		return {
		"id": self.id,
		"nome": self.nome
		}