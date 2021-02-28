import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('weather')
export class weather {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdatetime: Timestamp;

  @Column({ type: 'varchar', length: 300, default: 'Alex', nullable: true})
  createdby: string;

  @Column({ type: 'real', default: -100, nullable: true })
  temperature: number;

  @Column({ type: 'real', default: -100, nullable: true })
  humidity: number;

  @Column({ type: 'real', default: -100, nullable: true })
  ppm: number;
}
