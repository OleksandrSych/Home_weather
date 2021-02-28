import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1614498404030 implements MigrationInterface {
    name = 'myInit1614498404030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isActive" boolean NOT NULL DEFAULT true, "isArchived" boolean NOT NULL DEFAULT false, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, "internalComment" character varying(300), "name" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "weather" ("id" SERIAL NOT NULL, "createdatetime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdby" character varying(300) DEFAULT 'Alex', "temperature" real DEFAULT '-100', "humidity" real DEFAULT '-100', "ppm" real DEFAULT '-100', CONSTRAINT "PK_af9937471586e6798a5e4865f2d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "weather"`);
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
