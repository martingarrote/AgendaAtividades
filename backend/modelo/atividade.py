from geral.config import *
from modelo.materia import Materia
from datetime import date, datetime

class Atividade(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	nome = db.Column(db.String(254))
	data = db.Column(db.Date)
	situacao = db.Column(db.String(254))
	observacao = db.Column(db.String(254))
	
	materia_id = db.Column(db.Integer, db.ForeignKey(Materia.id), nullable = False)
	materia = db.relationship("Materia")
	
	def __str__(self):
		s = f'{self.id}, {self.nome}' + f'{self.data.day}/{self.data.month}/{self.data.year}' + \
			f'{self.situacao}, {self.observacao}' + f'{self.materia}'
		return s
		
	def json(self):
		return {
		"id": self.id,
		"nome": self.nome,
		"data": f'{self.data.day}/{self.data.month}/{self.data.year}',
		"situacao": self.situacao,
		"observacao": self.observacao,
		"materia_id": self.materia.id,
		"materia": self.materia.json()
		}