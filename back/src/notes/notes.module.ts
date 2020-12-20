import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm"
import { NotesController } from "./notes.controller"
import { NotesEntity } from './notes.entity';
import { NotesService } from "./notes.service"

@Module({
  imports: [TypeOrmModule.forFeature([NotesEntity])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
