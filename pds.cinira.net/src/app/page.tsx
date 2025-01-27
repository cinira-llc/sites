export default function Home() {
    return (
        <>
            <div className="mb-4">
                <div className="font-bold">
                    Flight Data
                </div>
                <div>
                    <a href="https://pds.cinira.net/adsb/">Local ADS-B Map</a>
                </div>
            </div>
            <div>
                <div className="font-bold">
                    Airband Radio
                </div>
                <div>
                    <a href="https://pds.cinira.net/airband/91c.mp3">91C CTAF (122.9)</a>
                </div>
                <div>
                    <a href="https://pds.cinira.net/airband/dll.mp3">DLL CTAF (123.05)</a>
                </div>
                <div>
                    <a href="https://pds.cinira.net/airband/c29.mp3">C29 CTAF (123.0)</a>
                </div>
                <div>
                    <a href="https://pds.cinira.net/airband/c35.mp3">C35 CTAF (122.8)</a>
                </div>
                <div>
                    <a href="https://pds.cinira.net/airband/guard.mp3">Emergency/Guard (121.5)</a>
                </div>
                <div>
                    <a href="https://pds.cinira.net/airband/nearby.mp3">Nearby CTAFs (122.8, 122.9, 123.0,
                        123.05)</a>
                </div>
            </div>
        </>
    );
}