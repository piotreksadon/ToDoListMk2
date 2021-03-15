import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [UserModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
