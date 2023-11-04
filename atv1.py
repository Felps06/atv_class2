class Curso:
    def __init__(self, nome):
        self.nome = nome
        self.professor = None

    def designar_professor(self, professor):
        self.professor = professor

    def __str__(self):
        if self.professor:
            return f"Curso: {self.nome}, Professor: {self.professor.nome}"
        else:
            return f"Curso: {self.nome}, Professor: Não designado"

class Professor:
    def __init__(self, nome):
        self.nome = nome
        self.cursos_lecionados = []

    def lecionar_curso(self, curso):
        self.cursos_lecionados.append(curso)

    def listar_cursos_lecionados(self):
        return [curso.nome for curso in self.cursos_lecionados]

    def __str__(self):
        return f"Professor: {self.nome}"

# Exemplo de uso
professor1 = Professor("Professor A")
professor2 = Professor("Professor B")

curso1 = Curso("Curso X")
curso2 = Curso("Curso Y")

curso1.designar_professor(professor1)
curso2.designar_professor(professor2)

professor1.lecionar_curso(curso1)
professor2.lecionar_curso(curso2)

print(curso1)
print(curso2)

print(professor1.listar_cursos_lecionados())
print(professor2.listar_cursos_lecionados())