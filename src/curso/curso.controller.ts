import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/crear-curso.dto';
import { Curso } from './models/curso';

@Controller('curso')
export class CursoController {
    constructor(private cursoService: CursoService) { }

    @Post()
    create(@Body() nuevoCurso: CreateCursoDto): Curso {
        return this.cursoService.createCurso(nuevoCurso);
    }

    @Get()
    get(): Curso[] {
        return this.cursoService.getAllCursos();
    }

    @Get(':id')
    getById(@Body() id: number): Curso {
        return this.cursoService.getCursoById(id);
    }

    @Put(':id')
    put(@Param() id: number, @Body() cursoActualizado: CreateCursoDto): Curso {
        return this.cursoService.updateCurso(id, cursoActualizado);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        this.cursoService.deleteCurso(id);
        return {
            success: true,
            message: `Curso ${id} eliminado de la lista`
        };
    }
}
