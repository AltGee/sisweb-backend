import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo
  } from "sequelize-typescript";
  import { Tier } from "./tier";
  
  @Table({
    tableName: "empresas",
    timestamps: false
  })
  export class Empresa extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id_empresa!: number;
  
    @Column(DataType.STRING(100))
    nombre!: string;
  
    @ForeignKey(() => Tier)
    @Column(DataType.INTEGER)
    tier_id!: number;
  
    @BelongsTo(() => Tier)
    tier!: Tier;
  }