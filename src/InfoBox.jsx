import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';

function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1764957080878-3f9866270aad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8";

    const HOT_URL = "https://images.unsplash.com/photo-1470621178165-f1fb40c4401f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1420585269105-d908ec316eb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1696677049033-61a25265596b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvZ2d5JTIwd2ludGVyc3xlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345, textAlign: "centre", borderRadius: "22px", marginTop: "2rem" }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={info.Humidity > 90
                        ? RAIN_URL 
                        : info.Temp > 20 
                        ? HOT_URL 
                        : COLD_URL
                    }
                    title="Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                        {info.City} {info.Humidity > 90
                        ? <ThunderstormRoundedIcon />
                        : info.Temp > 20 
                        ? <WbSunnyRoundedIcon />  
                        : <AcUnitRoundedIcon />
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature: {info.Temp}&deg;C</p>
                        <p>Humidity: {info.Humidity}</p>
                        <p>Max Temp: {info.TempMax}&deg;C</p>
                        <p>Min Temp: {info.TempMin}&deg;C</p>
                        <p>The Weather can be described as {info.Weather} and Feels Like: {info.FeelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default InfoBox;