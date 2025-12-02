import "./App.css";

function App() {
    const bass = [
        {
            name: "Who Knows Bass",
            file: "/audio/who knows bass over 10-12-25.mp3",
        },
    ];
    const kernels = [
        { name: "Mick Xerxes w/bass", file: "/audio/xerx werx.mp3" },
        { name: "Xerxes", file: "/audio/xerxes original.mp3" },
        { name: "Drug War", file: "/audio/drug war original.mp3" },
        {
            name: "A Better Tomorrow",
            file: "/audio/a better tomorrow original.mp3",
        },
    ];
    const links = [
        {
            href: "https://www.mediafire.com/file/0crqrnahjvcxon1/who_knows_over_10-12-25.zip",
            alt: "who knows bass stems",
        },
        {
            href: "https://www.mediafire.com/file/9hhnlqid95h00s4/drug_war.zip/",
            alt: "drug war stems",
        },
        {
            href: "https://www.mediafire.com/file/f7ra0mxwz29lxt1/a_better_tomorrow_original_stems.zip/",
            alt: "a better tomorrow stems",
        },
        {
            href: "https://www.mediafire.com/file/58424eglig9pef4/xerxes+original.zip/",
            alt: "xerxes stems",
        },
    ];
    return (
        <div className="font-serif p-8">
            <h1 className="text-2xl font-bold mb-6">bass demos</h1>

            <div className="space-y-4">
                {bass.map((track) => (
                    <div key={track.name} className="border p-4 rounded-lg">
                        <h2 className="text-lg mb-2">{track.name}</h2>

                        <audio controls className="w-full mb-2">
                            <source src={track.file} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>

                        {/* <a
                            href={track.file}
                            download
                            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Download MP3
                        </a> */}
                    </div>
                ))}
            </div>
            <h1 className="text-2xl font-bold my-6 mt-10">guitar fragments</h1>

            <div className="space-y-4">
                {kernels.map((track) => (
                    <div key={track.name} className="border p-4 rounded-lg">
                        <h2 className="text-lg mb-2">{track.name}</h2>

                        <audio controls className="w-full mb-2">
                            <source src={track.file} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>

                        {/* <a
                            href={track.file}
                            download
                            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Download MP3
                        </a> */}
                    </div>
                ))}
            </div>
            <h1 className="text-2xl font-bold my-6 mt-10">stem zips</h1>
            {links.map((link) => (
                <a
                    className="block py-2 visited:text-red-600 underline text-blue-600"
                    href={link.href}
                    key={link.alt}
                >
                    {link.alt}
                </a>
            ))}
        </div>
    );
}

export default App;
