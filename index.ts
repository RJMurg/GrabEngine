import axios from "axios";
import prisma from "./prisma";

const url = "https://api.irishtnt.com/trains";
let maxTrainsThisHour = 0;
let maxTrainsThisDay = 0;
let minutes = 0;

getTrains();

setInterval(async () => {
    getTrains();
}, 60000);

async function getTrains() {
    try {
        const response = await axios.post(url);

        if(response.data.trains.length > maxTrainsThisHour) {
            maxTrainsThisHour = response.data.trains.length;
        } else if(response.data.trains.length > maxTrainsThisDay) {
            maxTrainsThisDay = response.data.trains.length;
        }

        if(minutes === 60) {
            console.log(`[${new Date()}] Max trains in the last hour: ${maxTrainsThisHour}`);
            maxTrainsThisHour = 0;
            minutes = 0;
        }

        if(new Date().getHours() === 0 && new Date().getMinutes() === 0) {
            console.log(`[${new Date()}] Max trains today: ${maxTrainsThisDay}`);
            maxTrainsThisDay = 0;
            minutes = 0;
        }

        minutes++;

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