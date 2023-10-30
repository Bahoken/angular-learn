export interface Rooms {
    avalaibleRooms: number,
    totalRoms: number,
    bokedRooms: number,
}

export interface roomItem {
    roomNumber: number,
    roomType: string,
    ameneties: string,
    price: number,
    photo: string,
    checkinTime: Date,
    checkoutTime: Date,
}