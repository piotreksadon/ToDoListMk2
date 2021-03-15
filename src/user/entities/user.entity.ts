import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  surname: string;

  @Column({ nullable: false, type: 'date', length: 255, name: 'birth_date' })
  birthDate: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  nationality: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // @ManyToMany(() => ItemEntity)
  // @JoinTable()
  // item: ItemEntity[];
}
