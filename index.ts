import axios from "axios";
import prisma from "./prisma";

const url = "https://api.irishtnt.com/trains";

getTrains();

setInterval(async () => {
    getTrains();
}, 60000);

async function getTrains() {
    try {
        const response = await axios.post(url);
        console.log(`[${new Date()}] Found ${response.data.trains.length} trains`);

        const trains: Train[] = response.data.trains || [];

        const timestamp = new Date();

        for (const train of trains) {
            train.timestamp = timestamp;
        }

        await prisma.trains.createMany({
            data: trains
        });
    }
    catch (error) {
        console.error(`[${new Date()}] ${error}`);
    }
    
}