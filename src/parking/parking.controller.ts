import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { Parking } from "./parking.model";
import { ParkingService } from "./parking.service";

@Controller('parkings')
export class ParkingContrller {

    constructor(private readonly productService: ParkingService) { }

    @Post()
    addParking(
        @Body('name') productName: string,
        @Body('description') productDescription: string,
        @Body('city') productCity: string
    ): any {
        this.productService.addParking(productName, productDescription, productCity)
    }

    @Get()
    getParkings(): Array<Parking> {
        return [...this.productService.getParking()]
    }

    @Get('/:parkingUuid')
    getParkingByUuid(@Param('parkingUuid') parkingUuid: string): Parking {
        const parking = this.productService.getParkingByUuid(parkingUuid);
        if (!parking) {
            throw new NotFoundException();
        }
        return {...parking}
    }
 }