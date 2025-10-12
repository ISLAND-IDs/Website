import "./componets.scss";

type Props = {
  Song_Name: string;
  Artist_Name: string;
  Cover_Art: string;
};

// TODO: 사클 API로 곡 데이터 만으로도 커버 아트 가져올 수 있게 바꾸기
// 현재는 releases.json에서 커버 아트 URL을 직접 넣어주고 있음, 추후에 필요하다 생각되면 사클 API로 바꾸기 (아직 ㄴㄴ)

function Song_card({ Song_Name, Artist_Name, Cover_Art}: Props) {
  return (
    <div className="release-card">
      <img className="release-image" src={Cover_Art} alt={Song_Name} />
      <div className="release-info">
        <h3>{Song_Name}</h3>
        <div className="release-artist">{Artist_Name}</div>
      </div>
    </div>
  );
}

export default Song_card;