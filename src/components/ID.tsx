type IDProps = {
  Song_Name?: string;
  Artist_Name?: string;
  Release_Date?: string;
};

function ID({ Song_Name, Artist_Name, Release_Date }: IDProps) {
  return (
    <div className="release-card">
      <div className="release-image">Cover Art</div>
      <div className="release-info">
        <h3>{Song_Name}</h3>
        <div className="release-artist">{Artist_Name}</div>
        <div className="release-date">{Release_Date}</div>
      </div>
    </div>
  );
}

export default ID;