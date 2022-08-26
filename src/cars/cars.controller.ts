import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './services/cars.service';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) { }

  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }

  @Get(':id')
  findCard(@Param('id') id: string) {
    return this.carsService.findOneById(id)
  }

  @Post()
  create(@Body() body) {
    return body
  }
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() body: any) {
    return body
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return id
  }





}
