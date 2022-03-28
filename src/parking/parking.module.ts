import { Module } from "@nestjs/common";
import { ParkingContrller } from "./parking.controller";
import { ParkingService } from "./parking.service";

@Module({
    controllers: [ParkingContrller],
    providers: [ParkingService]
})
export class ParkingModule {}