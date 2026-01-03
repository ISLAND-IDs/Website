import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import MetaTag from "../components/metaTag";
import releases from '../releases.json';
import './pages.scss';

function SongPage() {
    const { id } = useParams();
    const idx = releases.length - Number(id);
    const song = releases[idx];
    const { t } = useTranslation();

    return (
        <div className='song'>
            <MetaTag title={"ISLAND · "+ song.Song_Name} description={t("song_page_description")} keywords="song" imgsrc={song.Cover_Art} url={"https://island-ids.netlify.app/song/"+ id}/>
            <div className='album-card'>
                <img className="album-cover" src={song.Cover_Art} alt={song.Song_Name} />
                <div className="album-info">
                    <h1 className="album-title">{song.Song_Name}</h1>
                    <p className="album-artist">{song.Artist_Name}</p>
                    <br/>
                    {Object.entries(song.Platforms).map(([key, value]) => (
                        <a className={"platform-btn "+key} href={value} target='_blank'>
                            {key}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SongPage;
