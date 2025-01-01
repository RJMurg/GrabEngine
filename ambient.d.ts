type Train = {
    trainCode: string
    direction: string
    currentStatus: string
    origin: string
    destination: string
    originTime: string
    destinationTime?: string
    late?: string
    currentMessage?: string
    latitude: string
    longitude: string
    publicMessage: string
    timestamp: Date
}