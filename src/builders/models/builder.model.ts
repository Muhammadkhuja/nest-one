import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Company } from "../../company/models/company.model";


interface IBuildersCreationAttr{
    full_name: string;
    brith_day: Date;
    salary: number;
    companyIf: number
}

@Table({ tableName: "builders",timestamps: false})
export class Builder extends Model<Builder , IBuildersCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING
    })
    full_name: string

        @Column({
        type: DataType.DATEONLY
    })
    birth_day: Date

        @Column({
        type: DataType.DECIMAL(15,2)
    })
    salary: number

    @ForeignKey(() => Company)
    @Column({ type: DataType.INTEGER})
    companyId: number;

    @BelongsTo(() => Company)
    companys: Company;
}