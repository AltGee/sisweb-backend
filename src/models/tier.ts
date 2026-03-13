import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany
  } from "sequelize-typescript";
  import { Empresa } from "./empresa";
  
  @Table({
    tableName: "tiers",
    timestamps: false
  })
  export class Tier extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id_tier!: number;
  
    @Column(DataType.STRING(50))
    nombre_tier!: string;
  
    @HasMany(() => Empresa)
    empresas!: Empresa[];
  }