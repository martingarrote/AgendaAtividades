from geral.config import *
from modelo.materia import Materia

class Atividade(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	nome = db.Column(db.String(254))
	data = db.Column(db.String(10))
	situacao = db.Column(db.String(254))
	observacao = db.Column(db.String(254))
	
	materia_id = db.Column(db.Integer, db.ForeignKey(Materia.id), nullable = False)
	materia = db.relationship("Materia")
	
	def __str__(self):
		return f"{self.nome}, {self.data}, {self.situacao}, {self.observacao} " + f"{self.materia}"
		
	def json(self):
		return {
		"id": self.id,
		"nome": self.nome,
		"data": self.data,
		"situacao": self.situacao,
		"observacao": self.observacao,
		"materia_id": self.materia.id,
		"materia": self.materia.json()
		}