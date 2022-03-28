import { Injectable } from "@nestjs/common";
import { Parking } from "./parking.model";
import { v4 as uuid } from 'uuid';

@Injectable()
export class ParkingService {

    parkings: Parking[] = [];

    addParking(name: string, description: string, city: string) {
        this.parkings.push(new Parking(uuid(), name, description, city))
    }

    getParking(): Parking[] {
        return [...this.parkings];
    }

    getParkingByUuid(parkingUuid) {
        return this.parkings.find(it => it.uuid === parkingUuid)
    }
}
