import { Injectable, NotFoundException } from '@nestjs/common';
import { Curso } from './models/curso';
import { CreateCursoDto } from './dto/crear-curso.dto';

@Injectable()
export class CursoService {

    private cursos: Curso[] = [];
    private idCurso: number = 1;

    createCurso(nuevoCurso: CreateCursoDto): Curso {
        const curso: Curso = {
            id: this.idCurso,
            titulo: nuevoCurso.titulo,
            plataforma: nuevoCurso.plataforma,
            duracion: nuevoCurso.duracion,
            nviel: nuevoCurso.nviel
        };

        this.cursos.push(curso);
        this.idCurso += 1;

        return curso;
    }

    getAllCursos(): Curso[] {
        return this.cursos;
    }

    getCursoById(id: number): Curso {
        return this.cursos[id];
    }

    updateCurso(id: number, curso: CreateCursoDto): Curso {
        const cursoUpdate = this.getCursoById(id);
        if (cursoUpdate) {
            cursoUpdate.titulo = curso.titulo;
            cursoUpdate.duracion = curso.duracion;
            cursoUpdate.nviel = curso.nviel;
            cursoUpdate.plataforma = curso.plataforma;
        }
        return cursoUpdate;
    }

    deleteCurso(id: number): void {
        const index = this.cursos.findIndex(curso => curso.id === id);

        if (index === -1) {
            throw new NotFoundException(`El salón con ID ${id} no existe en la lista`);
        }

        this.cursos.splice(index, 1);
    }
}
