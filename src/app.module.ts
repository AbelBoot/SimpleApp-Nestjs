import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm"
import { NotesModule } from "./notes/notes.module"
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [NotesModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
