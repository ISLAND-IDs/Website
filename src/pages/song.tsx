import releases from '../releases.json';
import { useParams } from 'react-router-dom';
import './pages.scss';

function SongPage() {
    const { id } = useParams();
    const song = releases[id as unknown as number]; // string을 number로 변환해야 함
    return (
        <div className='song'>
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