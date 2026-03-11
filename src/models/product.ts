import {
    Table,
    Model,
    Column,
    CreatedAt,
    UpdatedAt,
    DataType,
    PrimaryKey,
    AutoIncrement
  } from "sequelize-typescript";
  import { Optional } from "sequelize";
  
  interface ProductAttributes {
    id: number;
    title: string;
    description?: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  interface ProductCreationAttributes
    extends Optional<
      ProductAttributes,
      "id" | "description" | "createdAt" | "updatedAt"
    > {}
  
  @Table({
    tableName: "products",
    timestamps: true
  })
  export class Product extends Model<
    ProductAttributes,
    ProductCreationAttributes
  > {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER
    })
    id!: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false
    })
    title!: string;
  
    @Column({
      type: DataType.TEXT,
      allowNull: true
    })
    description?: string;
  
    @Column({
      type: DataType.DECIMAL(10, 2),
      allowNull: false
    })
    price!: number;
  
    @Column({
      type: DataType.DECIMAL(5, 2),
      allowNull: false
    })
    discountPercentage!: number;
  
    @Column({
      type: DataType.DECIMAL(3, 2),
      allowNull: false
    })
    rating!: number;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false
    })
    stock!: number;
  
    @CreatedAt
    @Column({
      type: DataType.DATE
    })
    createdAt!: Date;
  
    @UpdatedAt
    @Column({
      type: DataType.DATE
    })
    updatedAt!: Date;
  }