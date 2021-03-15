import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class NoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 500 })
  note: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
