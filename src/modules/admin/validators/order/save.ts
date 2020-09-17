import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  Min
} from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements IOrder {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @ApiProperty({ required: true, type: 'string', minLength: 1, maxLength: 100 })
  public description: string;

  @ApiProperty({ required: true, type: 'integer' })
  public number: number;

  @ApiProperty({ required: true, type: 'float' })
  public value: number;
}
